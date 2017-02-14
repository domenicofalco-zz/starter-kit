// Run Global script. It is for generic scripts out of specific apps
require('./global');


// Bootstrap Script-Apps
const scriptsCollection = document.querySelectorAll('[data-script]');

scriptsCollection.forEach((scriptContainer) => {
  const scriptName = scriptContainer.getAttribute('data-script');
  const Script = require(`./${scriptName}`).default;
  const labelsCollection = scriptContainer.querySelectorAll('[data-label-key]');

  // display launched app in the console
  console.log('Script ->', scriptName);

  new Script(scriptContainer).init();
});
