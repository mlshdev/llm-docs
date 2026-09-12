> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/buildsettingcondition](https://developer.apple.com/documentation/packagedescription/buildsettingcondition)

# BuildSettingCondition

**Framework:** PackageDescription  
**Kind:** Structure

A condition that limits the application of a build setting.

## Declaration

```swift
struct BuildSettingCondition
```

<a id="overview"></a>

## Overview

By default, build settings are applicable for all platforms and build configurations. Use the `.when` modifier to define a build setting for a specific condition. Invalid usage of `.when` emits an error during manifest parsing. For example, it’s invalid to specify a `.when` condition with both parameters as `nil`.

The following example shows how to use build setting conditions with various APIs:

```swift
...
.target(
    name: "MyTool",
    dependencies: ["Utility"],
    cSettings: [
        .headerSearchPath("path/relative/to/my/target"),
        .define("DISABLE_SOMETHING", .when(platforms: [.iOS], configuration: .release)),
    ],
    swiftSettings: [
        .define("ENABLE_SOMETHING", .when(configuration: .release)),
    ],
    linkerSettings: [
        .linkedLibrary("openssl", .when(platforms: [.linux])),
    ]
),
```

## Topics

### Checking for a Build Condition

- [when(platforms:)](buildsettingcondition/when%28platforms_%29.md): Creates a build setting condition.
- [when(configuration:)](buildsettingcondition/when%28configuration_%29.md): Creates a build setting condition.
- [when(platforms:configuration:)](buildsettingcondition/when%28platforms_configuration_%29-475co.md): Creates a build setting condition.
- [when(platforms:configuration:traits:)](buildsettingcondition/when%28platforms_configuration_traits_%29.md): Creates a build setting condition.
- [when(platforms:configuration:)](buildsettingcondition/when%28platforms_configuration_%29-2991l.md): Deprecated. Creates a build setting condition.

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
- [CSetting](csetting.md): A C language build setting.
- [CXXSetting](cxxsetting.md): A CXX-language build setting.
- [SwiftSetting](swiftsetting.md): A Swift language build setting.
- [LinkerSetting](linkersetting.md): A linker build setting.
- [Target.PluginUsage](target/pluginusage.md): A plug-in used in a target.
- [packageAccess](target/packageaccess.md): If true, access to package declarations from other targets in the package is allowed.
