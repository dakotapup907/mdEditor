/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {}
    // include other plugin configuration that applies to all deploy targets here
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'staging';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'beta') {
    ENV.build.environment = 'beta';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here
    ENV.git = {
      repo: 'git@github.com:adiwg/mdEditor.git',
      //branch: 'gh-pages',
      //worktreePath: '../deploy-mdeditor',
      //commitMessage: 'Deployed %@'
    };
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
