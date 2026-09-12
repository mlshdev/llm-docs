> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/csetting](https://developer.apple.com/documentation/packagedescription/csetting)

# CSetting

**Framework:** PackageDescription  
**Kind:** Structure

A C language build setting.

## Declaration

```swift
struct CSetting
```

## Topics

### Configuring C Settings

- [define(\_:to:\_:)](csetting/define%28__to___%29.md): Defines a value for a macro.
- [headerSearchPath(\_:\_:)](csetting/headersearchpath%28____%29.md): Provides a header search path relative to the target’s directory.
- [unsafeFlags(\_:\_:)](csetting/unsafeflags%28____%29.md): Sets unsafe flags to pass arbitrary command-line flags to the corresponding build tool.

### Type Methods

- [disableWarning(\_:\_:)](csetting/disablewarning%28____%29.md): Disable a specific C compiler warning group.
- [enableWarning(\_:\_:)](csetting/enablewarning%28____%29.md): Enable a specific C compiler warning group.
- [treatAllWarnings(as:\_:)](csetting/treatallwarnings%28as___%29.md): Controls how all C compiler warnings are treated during compilation.
- [treatWarning(\_:as:\_:)](csetting/treatwarning%28__as___%29.md): Controls how a specific C compiler warning is treated during compilation.

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
- [BuildConfiguration](buildconfiguration.md): The build configuration, such as debug or release.
- [BuildSettingCondition](buildsettingcondition.md): A condition that limits the application of a build setting.
- [CXXSetting](cxxsetting.md): A CXX-language build setting.
- [SwiftSetting](swiftsetting.md): A Swift language build setting.
- [LinkerSetting](linkersetting.md): A linker build setting.
- [Target.PluginUsage](target/pluginusage.md): A plug-in used in a target.
- [packageAccess](target/packageaccess.md): If true, access to package declarations from other targets in the package is allowed.
