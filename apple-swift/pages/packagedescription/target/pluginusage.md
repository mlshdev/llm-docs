> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/target/pluginusage](https://developer.apple.com/documentation/packagedescription/target/pluginusage)

# Target.PluginUsage

**Framework:** PackageDescription  
**Kind:** Enumeration  
**Availability:** SwiftPM 5.5+

A plug-in used in a target.

## Declaration

```swift
enum PluginUsage
```

## Topics

### Creating a Plugin Usage

- [plugin(name:)](pluginusage/plugin%28name_%29.md): Specifies use of a plugin target in the same package.
- [Target.PluginUsage.plugin(name:package:)](pluginusage/plugin%28name_package_%29.md): Specifies the use of a plug-in product in a package dependency.

### Default Implementations

- [ExpressibleByStringLiteral Implementations](pluginusage/expressiblebystringliteral-implementations.md)

## Relationships

### Conforms To

- [Copyable](../../swift/copyable.md)
- [Escapable](../../swift/escapable.md)
- [ExpressibleByExtendedGraphemeClusterLiteral](../../swift/expressiblebyextendedgraphemeclusterliteral.md)
- [ExpressibleByStringLiteral](../../swift/expressiblebystringliteral.md)
- [ExpressibleByUnicodeScalarLiteral](../../swift/expressiblebyunicodescalarliteral.md)

## See Also

### Configuring the Target

- [cSettings](csettings.md): The target’s C build settings.
- [cxxSettings](cxxsettings.md): The target’s C++ build settings.
- [swiftSettings](swiftsettings.md): The target’s Swift build settings.
- [linkerSettings](linkersettings.md): The target’s linker settings.
- [plugins](plugins.md): The uses of package plug-ins by the target.
- [BuildConfiguration](../buildconfiguration.md): The build configuration, such as debug or release.
- [BuildSettingCondition](../buildsettingcondition.md): A condition that limits the application of a build setting.
- [CSetting](../csetting.md): A C language build setting.
- [CXXSetting](../cxxsetting.md): A CXX-language build setting.
- [SwiftSetting](../swiftsetting.md): A Swift language build setting.
- [LinkerSetting](../linkersetting.md): A linker build setting.
- [packageAccess](packageaccess.md): If true, access to package declarations from other targets in the package is allowed.
