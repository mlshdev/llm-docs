> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/target/pluginusage/plugin(name:package:)](https://developer.apple.com/documentation/packagedescription/target/pluginusage/plugin(name:package:))

# Target.PluginUsage.plugin(name:package:)

**Framework:** PackageDescription  
**Kind:** Case  
**Availability:** SwiftPM 5.5+

Specifies the use of a plug-in product in a package dependency.

## Declaration

```swift
case plugin(name: String, package: String?)
```

## Parameters

- `name`: The name of the plug-in target.
- `package`: The name of the package that defines the plug-in target.

## See Also

### Creating a Plugin Usage

- [plugin(name:)](plugin%28name_%29.md): Specifies use of a plugin target in the same package.
