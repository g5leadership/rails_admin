var Locale;

this.RailsAdmin = (function() {

  function RailsAdmin() {}

  return RailsAdmin;

})();

this.RailsAdmin.I18n = Locale = (function() {

  function Locale() {}

  Locale.init = function(locale) {
    this.locale = locale;
  };

  Locale.t = function(key) {
    var humanize;
    humanize = key.charAt(0).toUpperCase() + key.replace("_", " ").slice(1);
    return this.locale[key] || humanize;
  };

  return Locale;

})();
