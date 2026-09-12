> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/target/plugincapability-swift.property](https://developer.apple.com/documentation/packagedescription/target/plugincapability-swift.property)

# pluginCapability

**Framework:** PackageDescription  
**Kind:** Instance Property  
**Availability:** SwiftPM 5.5+

The capability provided by a package plug-in target.

## Declaration

```swift
final var pluginCapability: Target.PluginCapability?
```

## See Also

### Creating a Plugin Target

- [plugin(name:capability:dependencies:path:exclude:sources:packageAccess:)](plugin%28name_capability_dependencies_path_exclude_sources_packageaccess_%29.md): Defines a new package plug-in target.
- [Target.PluginCapability](plugincapability-swift.enum.md): The different types of capability that a plug-in can provide.
- [PluginCommandIntent](../plugincommandintent.md): The intended use case of the command plug-in.
- [PluginPermission](../pluginpermission.md): The type of permission a plug-in requires.
- [plugin(name:capability:dependencies:path:exclude:sources:)](plugin%28name_capability_dependencies_path_exclude_sources_%29.md): Deprecated. Defines a new package plugin target.
