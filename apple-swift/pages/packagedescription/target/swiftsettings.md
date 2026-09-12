> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/target/swiftsettings](https://developer.apple.com/documentation/packagedescription/target/swiftsettings)

# swiftSettings

**Framework:** PackageDescription  
**Kind:** Instance Property  
**Availability:** SwiftPM 5.0+

The target’s Swift build settings.

## Declaration

```swift
final var swiftSettings: [SwiftSetting]?
```

## See Also

### Configuring the Target

- [cSettings](csettings.md): The target’s C build settings.
- [cxxSettings](cxxsettings.md): The target’s C++ build settings.
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
