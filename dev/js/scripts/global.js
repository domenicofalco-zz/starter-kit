/*
  Global Scripts are meant to be generic classes for the web site.
  Global Scripts are stand alone apps/scripts.
  They get run on every page reload, regardless "data-script" and "data-react-app" and it doesn't need to be wrapped somewhere.
*/

// Classes declaration :: EXAMPLES
class displayMsgInAlert {
  constructor(msg) {
    this.msg = msg;
  }
  show() {
    alert(this.msg)
  }
}

class displayMsgInConsole {
  constructor(msg) {
    this.msg = msg;
  }
  show() {
    console.log(this.msg);
  }
}

// Class instances
const AlertMsg = new displayMsgInAlert('THIS MSG COMES FROM GLOBAL SCRIPT');
const ConsoleMsg = new displayMsgInConsole('MSG generated from a class in global-script');

/*
Uncomment to see them in action */

// Invoke class methods
AlertMsg.show();
ConsoleMsg.show();
