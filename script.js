const form = document.getElementById('converter-form');
const v2rayConfig = document.getElementById('v2ray-config');
const yamlOutput = document.getElementById('yaml-output');
const convertBtn = document.getElementById('convert-btn');

convertBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const v2rayJson = JSON.parse(v2rayConfig.value);
  const yamlString = jsYaml.dump(v2rayJson);
  yamlOutput.value = yamlString;
});

// Library js-yaml
const jsYaml = {
  dump: (obj) => {
    return Object.keys(obj).map((key) => {
      return `${key}: ${JSON.stringify(obj[key])}`;
    }).join('\n');
  }