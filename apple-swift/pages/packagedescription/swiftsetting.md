> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/swiftsetting](https://developer.apple.com/documentation/packagedescription/swiftsetting)

# SwiftSetting

**Framework:** PackageDescription  
**Kind:** Structure

A Swift language build setting.

## Declaration

```swift
struct SwiftSetting
```

## Topics

### Configuring Swift Settings

- [define(\_:\_:)](swiftsetting/define%28____%29.md): Defines a compilation condition.
- [unsafeFlags(\_:\_:)](swiftsetting/unsafeflags%28____%29.md): Set unsafe flags to pass arbitrary command-line flags to the corresponding build tool.
- [strictMemorySafety(\_:)](swiftsetting/strictmemorysafety%28__%29.md): Enable strict memory safety checking.
- [swiftLanguageMode(\_:\_:)](swiftsetting/swiftlanguagemode%28____%29.md): Defines a `-language-mode` to pass to the corresponding build tool.
- [defaultIsolation(\_:\_:)](swiftsetting/defaultisolation%28____%29.md): Set the default isolation to the given global actor type.
- [enableExperimentalFeature(\_:\_:)](swiftsetting/enableexperimentalfeature%28____%29.md): Enable an experimental feature with the given name.
- [enableUpcomingFeature(\_:\_:)](swiftsetting/enableupcomingfeature%28____%29.md): Enable an upcoming feature with the given name.
- [interoperabilityMode(\_:\_:)](swiftsetting/interoperabilitymode%28____%29.md): Enables Swift interoperability with a given language.
- [SwiftSetting.InteroperabilityMode](swiftsetting/interoperabilitymode.md): The interoperability mode
- [swiftLanguageVersion(\_:\_:)](swiftsetting/swiftlanguageversion%28____%29.md): Deprecated. Defines a `-swift-version` to pass to the corresponding build tool.

### Type Methods

- [treatAllWarnings(as:\_:)](swiftsetting/treatallwarnings%28as___%29.md): Controls how all Swift compiler warnings are treated during compilation.
- [treatWarning(\_:as:\_:)](swiftsetting/treatwarning%28__as___%29.md): Controls how a specific Swift compiler warning is treated during compilation.

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
- [LinkerSetting](linkersetting.md): A linker build setting.
- [Target.PluginUsage](target/pluginusage.md): A plug-in used in a target.
- [packageAccess](target/packageaccess.md): If true, access to package declarations from other targets in the package is allowed.
