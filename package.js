Package.describe({
  name: 'purplecones:fundamerica',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Meteor wrapper for FundAmerica NPM Package',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/purplecones/meteor-fundamerica.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('fundamerica/fundamerica.js', ['server']);
  api.export('FundAmerica', ['server'])
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('fundamerica');
  api.addFiles('fundamerica-tests.js');
});
