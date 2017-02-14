/*
  Scripts could be stand alone apps.
  They need to be wrapped in the markup (with "data-script" attr).
  The Scripts stand for eigher smart or dumb objects that handle & cointain the logic & data for your own scripts.
*/

class ScriptExampleTemplate {
  constructor(el, labels = {}) {
    this.$selector = el;
    this.labels = labels;
  }

  // the init() method is required in "Scripts" classes
  init() {
    this.$selector.innerHTML += '<h1>This is a Script-App</h1><hr />';
    this.$selector.innerHTML += '<h5><a class="clickMe" href="javascript:void(0);">click me</h3></h5><hr />';

    const anchor = document.getElementsByClassName('clickMe')[0];
    anchor.addEventListener('click', this.alertMsg);
  }

  alertMsg() {
    alert('Well Done!');
  }
}

export default ScriptExampleTemplate;
