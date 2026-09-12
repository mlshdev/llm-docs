> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/target/csettings](https://developer.apple.com/documentation/packagedescription/target/csettings)

# cSettings

**Framework:** PackageDescription  
**Kind:** Instance Property  
**Availability:** SwiftPM 5.0+

The target’s C build settings.

## Declaration

```swift
final var cSettings: [CSetting]?
```

## See Also

### Configuring the Target

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
- [Target.PluginUsage](pluginusage.md): A plug-in used in a target.
- [packageAccess](packageaccess.md): If true, access to package declarations from other targets in the package is allowed.
