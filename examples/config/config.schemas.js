function snakeToCamel(str) {
  return str.replace(/_./g, (s) => s.charAt(1).toUpperCase());
}

module.exports = {
  outputPath: {
    schemas: './examples/tmp/schemas/sample_schema.{ext}',
    actions: './examples/tmp/action_types/sample.{ext}',
    jsSpec: './examples/tmp/sample_api.{ext}',
  },
  modelsDir: './examples/tmp/models',
  attributeConverter: snakeToCamel,
  usePropType: true,
  useTypeScript: true,
};
