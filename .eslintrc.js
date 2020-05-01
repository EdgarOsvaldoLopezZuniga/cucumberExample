module.exports = { 
  "extends": "airbnb-base",
  "overrides": [
    {
      "files": ["*/steps/*.js", "*/page-objects/*.js", "*/page-objects/*/*.js", "*/helpers/*.js", "*/specs/*.js"],
      "rules": {
        "no-undef": "off",
        "prefer-arrow-callback": "off",
        "func-names": "off",
        "no-unused-expressions": "off"
      }
    },
    {
      "files": ["*/page-objects/*.js",  "*/page-objects/*/*.js",],
      "rules": {
        "class-methods-use-this": "off",
      }
    },
    {
      "files": ["*/helpers/*.js"],
      "rules": {
        "import/prefer-default-export": "off"
      }
    },
    {
      "files": ["*/steps/hooks/*.js"],
      "rules": {
        "prefer-arrow-callback": "off",
        "func-names": "off"
      }
    }
  ]
};
