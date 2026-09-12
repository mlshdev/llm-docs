> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/target/plugins](https://developer.apple.com/documentation/packagedescription/target/plugins)

# plugins

**Framework:** PackageDescription  
**Kind:** Instance Property  
**Availability:** SwiftPM 5.5+

The uses of package plug-ins by the target.

## Declaration

```swift
final var plugins: [Target.PluginUsage]?
```

## See Also

### Configuring the Target

- [cSettings](csettings.md): The target’s C build settings.
- [cxxSettings](cxxsettings.md): The target’s C++ build settings.
- [swiftSettings](swiftsettings.md): The target’s Swift build settings.
- [linkerSettings](linkersettings.md): The target’s linker settings.
- [BuildConfiguration](../buildconfiguration.md): The build configuration, such as debug or release.
- [BuildSettingCondition](../buildsettingcondition.md): A condition that limits the application of a build setting.
- [CSetting](../csetting.md): A C language build setting.
- [CXXSetting](../cxxsetting.md): A CXX-language build setting.
- [SwiftSetting](../swiftsetting.md): A Swift language build setting.
- [LinkerSetting](../linkersetting.md): A linker build setting.
- [Target.PluginUsage](pluginusage.md): A plug-in used in a target.
- [packageAccess](packageaccess.md): If true, access to package declarations from other targets in the package is allowed.
