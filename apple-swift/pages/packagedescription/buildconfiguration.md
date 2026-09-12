> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/buildconfiguration](https://developer.apple.com/documentation/packagedescription/buildconfiguration)

# BuildConfiguration

**Framework:** PackageDescription  
**Kind:** Structure

The build configuration, such as debug or release.

## Declaration

```swift
struct BuildConfiguration
```

## Topics

### Describing Build Configurations

- [debug](buildconfiguration/debug.md): The debug build configuration.
- [release](buildconfiguration/release.md): The release build configuration.

## Relationships

### Conforms To

- [Sendable](../swift/sendable.md)
- [SendableMetatype](../swift/sendablemetatype.md)

## See Also

### Configuring the Target

- [cSettings](target/csettings.md): The target’s C build settings.
- [cxxSettings](target/cxxsettings.md): The target’s C++ build settings.
- [swiftSettings](target/swiftsettings.md): The target’s Swift build settings.
- [linkerSettings](target/linkersettings.md): The target’s linker settings.
- [plugins](target/plugins.md): The uses of package plug-ins by the target.
- [BuildSettingCondition](buildsettingcondition.md): A condition that limits the application of a build setting.
- [CSetting](csetting.md): A C language build setting.
- [CXXSetting](cxxsetting.md): A CXX-language build setting.
- [SwiftSetting](swiftsetting.md): A Swift language build setting.
- [LinkerSetting](linkersetting.md): A linker build setting.
- [Target.PluginUsage](target/pluginusage.md): A plug-in used in a target.
- [packageAccess](target/packageaccess.md): If true, access to package declarations from other targets in the package is allowed.
