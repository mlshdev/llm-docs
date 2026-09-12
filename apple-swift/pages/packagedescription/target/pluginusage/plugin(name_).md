> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/target/pluginusage/plugin(name:)](https://developer.apple.com/documentation/packagedescription/target/pluginusage/plugin(name:))

# plugin(name:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 5.5+

Specifies use of a plugin target in the same package.

## Declaration

```swift
static func plugin(name: String) -> Target.PluginUsage
```

## Parameters

- `name`: The name of the plugin target.

<a id="return-value"></a>

## Return Value

A `PluginUsage` instance.

## See Also

### Creating a Plugin Usage

- [Target.PluginUsage.plugin(name:package:)](plugin%28name_package_%29.md): Specifies the use of a plug-in product in a package dependency.
