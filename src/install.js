var { execSync } = require('@skpm/child_process');

var installPlugins = (context) => {
  execSync(String(context.plugin.urlForResourceNamed('sketchPlugins.sh').path()));
}

export default function(context) {
  installPlugins(context);
  context.document.showMessage("Sketch plugins installed! 🙌");
}
