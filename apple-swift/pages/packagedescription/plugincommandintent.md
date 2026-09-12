> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/plugincommandintent](https://developer.apple.com/documentation/packagedescription/plugincommandintent)

# PluginCommandIntent

**Framework:** PackageDescription  
**Kind:** Enumeration  
**Availability:** SwiftPM 5.6+

The intended use case of the command plug-in.

## Declaration

```swift
enum PluginCommandIntent
```

## Topics

### Creating a Command Intent

- [documentationGeneration()](plugincommandintent/documentationgeneration%28%29.md): The plugin generates documentation.
- [sourceCodeFormatting()](plugincommandintent/sourcecodeformatting%28%29.md): The plug-in formats source code.
- [PluginCommandIntent.custom(verb:description:)](plugincommandintent/custom%28verb_description_%29.md): A custom command plug-in intent.

### Enumeration Cases

- [PluginCommandIntent.documentationGeneration](plugincommandintent/documentationgeneration.md): The plug-in generates documentation.
- [PluginCommandIntent.sourceCodeFormatting](plugincommandintent/sourcecodeformatting.md): The plug-in formats source code.

## See Also

### Creating a Plugin Target

- [plugin(name:capability:dependencies:path:exclude:sources:packageAccess:)](target/plugin%28name_capability_dependencies_path_exclude_sources_packageaccess_%29.md): Defines a new package plug-in target.
- [pluginCapability](target/plugincapability-swift.property.md): The capability provided by a package plug-in target.
- [Target.PluginCapability](target/plugincapability-swift.enum.md): The different types of capability that a plug-in can provide.
- [PluginPermission](pluginpermission.md): The type of permission a plug-in requires.
- [plugin(name:capability:dependencies:path:exclude:sources:)](target/plugin%28name_capability_dependencies_path_exclude_sources_%29.md): Deprecated. Defines a new package plugin target.
