sap.ui.define([
  "sap/ui/test/Opa5",
  "egb/proyNW3/test/integration/arrangements/Startup",
  "egb/proyNW3/test/integration/BasicJourney"
], function(Opa5, Startup) {
  "use strict";

  Opa5.extendConfig({
    arrangements: new Startup(),
    pollingInterval: 1
  });

});
