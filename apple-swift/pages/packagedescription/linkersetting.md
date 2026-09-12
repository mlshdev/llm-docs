> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/linkersetting](https://developer.apple.com/documentation/packagedescription/linkersetting)

# LinkerSetting

**Framework:** PackageDescription  
**Kind:** Structure

A linker build setting.

## Declaration

```swift
struct LinkerSetting
```

## Topics

### Configuring Linker Settings

- [linkedFramework(\_:\_:)](linkersetting/linkedframework%28____%29.md): Declares linkage to a system framework.
- [linkedLibrary(\_:\_:)](linkersetting/linkedlibrary%28____%29.md): Declares linkage to a system library.
- [unsafeFlags(\_:\_:)](linkersetting/unsafeflags%28____%29.md): Sets unsafe flags to pass arbitrary command-line flags to the corresponding build tool.

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
- [CSetting](csetting.md): A C language build setting.
- [CXXSetting](cxxsetting.md): A CXX-language build setting.
- [SwiftSetting](swiftsetting.md): A Swift language build setting.
- [Target.PluginUsage](target/pluginusage.md): A plug-in used in a target.
- [packageAccess](target/packageaccess.md): If true, access to package declarations from other targets in the package is allowed.
