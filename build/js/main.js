//toggle
const jobItems = document.querySelectorAll('.job-header');

jobItems.forEach((element) => {
  element.onclick = () => {
    element.closest('.job__item').classList.toggle('active');
  };
});

//tabs
const theTabs = document.querySelectorAll('.job-tabs > ul > li');

function theTabClicks(tabClickEvent) {
  const clickedTab = tabClickEvent.currentTarget;
  const tabParent =
    tabClickEvent.currentTarget.parentNode.parentNode.parentNode;
  const theTabs = tabParent.querySelectorAll('.job-tabs > ul > li');
  for (let i = 0; i < theTabs.length; i++) {
    theTabs[i].classList.remove('active');
  }

  clickedTab.classList.add('active');
  tabClickEvent.preventDefault();
  const contentPanes = tabParent.querySelectorAll('.job-tabs__text');
  for (let i = 0; i < contentPanes.length; i++) {
    contentPanes[i].classList.remove('active');
  }
  const anchorReference = tabClickEvent.target;
  const activePaneId = anchorReference.getAttribute('href');
  const activePane = tabParent.querySelector(activePaneId);
  activePane.classList.add('active');
}
for (let i = 0; i < theTabs.length; i++) {
  theTabs[i].addEventListener('click', theTabClicks);
}

// function Tabs() {
//   const bindAll = function () {
//     const menuElements = document.querySelectorAll('[data-tab]');
//     for (const i = 0; i < menuElements.length; i++) {
//       menuElements[i].addEventListener('click', change, false);
//     }
//   };

//   const clear = function () {
//     const menuElements = document.querySelectorAll('[data-tab]');
//     for (const i = 0; i < menuElements.length; i++) {
//       menuElements[i].classList.remove('active');
//       const id = menuElements[i].getAttribute('data-tab');
//       document.getElementById(id).classList.remove('active');
//     }
//   };

//   const change = function (e) {
//     clear();
//     e.target.classList.add('active');
//     const id = e.currentTarget.getAttribute('data-tab');
//     document.getElementById(id).classList.add('active');
//   };

//   bindAll();
// }

// const connectTabs = new Tabs();
