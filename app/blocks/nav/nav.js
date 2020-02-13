function Navigation({
  navClass,
  navLinkClass,
  navLinkActiveClass
}) {
  let nav = document.querySelector(navClass),
    offsetY,
    centerY,
    currentActiveLink,
    topmostLink,
    isThrottled = false,
    linkContentEntries = new Map();

  function getIdFromHref(elem) {
    let href = elem.getAttribute('href');

    if (!href.startsWith('#')) return false;

    return href.slice(1);
  }

  function getContentBorders(content) {
    //If it's already calculated, there is no need to do it again
    if (!offsetY) offsetY = window.pageYOffset;

    let rect = content.getBoundingClientRect();

    return {
      top: rect.top + offsetY,
      bottom: rect.bottom + offsetY
    }
  }

  function listLinksContent() {
    let links = nav.querySelectorAll(navLinkClass),
      i, 
      j;

    for (let link of links) {

      let id = getIdFromHref(link);

      if (!id) continue;

      let content = document.getElementById(id),
        contentBorders = getContentBorders(content);

      //Find and save  a link of the topmost content 
      if (!i || top < j) {
        i = link;
        j = contentBorders.top;
      }

      linkContentEntries.set(link, {
        'content': content,
        'contentBorders': contentBorders
      });
    }

    topmostLink = i;
  }

  function getLinkFromPoint() {
    let offsetY = window.pageYOffset;
    //If it's start position, the very fisrt content should be highlighted whether it's at the center or not
    if (!offsetY) return topmostLink;

    if (!centerY) centerY = window.innerHeight / 2;
    let currentCenterY = offsetY + centerY;

    for (let entry of linkContentEntries) {
      let contentBorders = entry[1].contentBorders;

      if (contentBorders.top <= currentCenterY && contentBorders.bottom >= currentCenterY) return entry[0];
    }
  }

  function highlightLink() {
    let link = getLinkFromPoint();

    if (link == currentActiveLink) return;

    if (currentActiveLink) currentActiveLink.classList.remove(navLinkActiveClass);

    link.classList.add(navLinkActiveClass);
    currentActiveLink = link;
  }

  this.init = function() {
    listLinksContent();
    highlightLink();

    window.addEventListener('scroll', function(e) {
      if (isThrottled) return;

      highlightLink();

      isThrottled = true;

      setTimeout(() => {
        highlightLink();
        isThrottled = false;
      }, 300);

    })

    nav.addEventListener('click', function(e) {

      let link = e.target.closest(navLinkClass);

      if (!link) return;

      e.preventDefault();

      let contentObj = linkContentEntries.get(link);

      let content = contentObj.content;

      content.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

export { Navigation as default };