> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/target](https://developer.apple.com/documentation/packagedescription/target)

# Target

**Framework:** PackageDescription  
**Kind:** Class

The basic building block of a Swift package.

## Declaration

```swift
final class Target
```

<a id="overview"></a>

## Overview

Each target contains a set of source files that Swift Package Manager compiles into a module or test suite. You can vend targets to other packages by defining products that include the targets.

A target may depend on other targets within the same package and on products vended by the package’s dependencies.

## Topics

### Naming the Target

- [name](target/name.md): The name of the target.

### Configuring File Locations

- [path](target/path.md): The path of the target, relative to the package root.
- [exclude](target/exclude.md): The paths to source and resource files that you don’t want to include in the target.
- [sources](target/sources.md): The source files in this target.
- [resources](target/resources.md): The explicit list of resource files in the target.
- [Resource](resource.md): A resource to bundle with the Swift package.
- [publicHeadersPath](target/publicheaderspath.md): The path to the directory that contains public headers of a C-family target.

### Creating a Binary Target

- [binaryTarget(name:path:)](target/binarytarget%28name_path_%29.md): Creates a binary target that references an artifact on disk.
- [binaryTarget(name:url:checksum:)](target/binarytarget%28name_url_checksum_%29.md): Creates a binary target that references a remote artifact.
- [url](target/url.md): The URL of a binary target.
- [checksum](target/checksum.md): The checksum for the archive file that contains the referenced binary artifact.

### Creating a System Library Target

- [systemLibrary(name:path:pkgConfig:providers:)](target/systemlibrary%28name_path_pkgconfig_providers_%29.md): Creates a system library target.
- [pkgConfig](target/pkgconfig.md): The name of the package configuration file, without extension, for the system library target.
- [providers](target/providers.md): The providers array for a system library target.

### Creating an Executable Target

- [executableTarget(name:dependencies:path:exclude:sources:resources:publicHeadersPath:packageAccess:cSettings:cxxSettings:swiftSettings:linkerSettings:plugins:)](target/executabletarget%28name_dependencies_path_exclude_sources_resources_publicheaderspath_packageaccess_csettings_cxxsettings_swiftsettings_linkersettings_plugins_%29.md): Creates an executable target.
- [executableTarget(name:dependencies:path:exclude:sources:resources:publicHeadersPath:cSettings:cxxSettings:swiftSettings:linkerSettings:plugins:)](target/executabletarget%28name_dependencies_path_exclude_sources_resources_publicheaderspath_csettings_cxxsettings_swiftsettings_linkersettings_plugins_%29.md): Deprecated. Creates an executable target.
- [executableTarget(name:dependencies:path:exclude:sources:resources:publicHeadersPath:cSettings:cxxSettings:swiftSettings:linkerSettings:)](target/executabletarget%28name_dependencies_path_exclude_sources_resources_publicheaderspath_csettings_cxxsettings_swiftsettings_linkersettings_%29.md): Deprecated. Creates an executable target.

### Creating a Regular Target

- [target(name:dependencies:path:exclude:sources:resources:publicHeadersPath:packageAccess:cSettings:cxxSettings:swiftSettings:linkerSettings:plugins:)](target/target%28name_dependencies_path_exclude_sources_resources_publicheaderspath_packageaccess_csettings_cxxsettings_swiftsettings_linkersettings_plugins_%29.md): Creates a regular target.
- [target(name:dependencies:path:exclude:sources:resources:publicHeadersPath:cSettings:cxxSettings:swiftSettings:linkerSettings:plugins:)](target/target%28name_dependencies_path_exclude_sources_resources_publicheaderspath_csettings_cxxsettings_swiftsettings_linkersettings_plugins_%29.md): Deprecated. Creates a regular target.
- [target(name:dependencies:path:exclude:sources:resources:publicHeadersPath:cSettings:cxxSettings:swiftSettings:linkerSettings:)](target/target%28name_dependencies_path_exclude_sources_resources_publicheaderspath_csettings_cxxsettings_swiftsettings_linkersettings_%29.md): Deprecated. Creates a regular target.
- [target(name:dependencies:path:exclude:sources:publicHeadersPath:cSettings:cxxSettings:swiftSettings:linkerSettings:)](target/target%28name_dependencies_path_exclude_sources_publicheaderspath_csettings_cxxsettings_swiftsettings_linkersettings_%29.md): Deprecated. Creates a library or executable target.
- [target(name:dependencies:path:exclude:sources:publicHeadersPath:)](target/target%28name_dependencies_path_exclude_sources_publicheaderspath_%29.md): Deprecated. Creates a library or executable target.

### Creating a Test Target

- [testTarget(name:dependencies:path:exclude:sources:resources:packageAccess:cSettings:cxxSettings:swiftSettings:linkerSettings:plugins:)](target/testtarget%28name_dependencies_path_exclude_sources_resources_packageaccess_csettings_cxxsettings_swiftsettings_linkersettings_plugins_%29.md): Creates a test target.
- [testTarget(name:dependencies:path:exclude:sources:resources:cSettings:cxxSettings:swiftSettings:linkerSettings:plugins:)](target/testtarget%28name_dependencies_path_exclude_sources_resources_csettings_cxxsettings_swiftsettings_linkersettings_plugins_%29.md): Deprecated. Creates a test target.
- [testTarget(name:dependencies:path:exclude:sources:resources:cSettings:cxxSettings:swiftSettings:linkerSettings:)](target/testtarget%28name_dependencies_path_exclude_sources_resources_csettings_cxxsettings_swiftsettings_linkersettings_%29.md): Deprecated. Creates a test target.
- [testTarget(name:dependencies:path:exclude:sources:cSettings:cxxSettings:swiftSettings:linkerSettings:)](target/testtarget%28name_dependencies_path_exclude_sources_csettings_cxxsettings_swiftsettings_linkersettings_%29.md): Deprecated. Creates a test target.
- [testTarget(name:dependencies:path:exclude:sources:)](target/testtarget%28name_dependencies_path_exclude_sources_%29.md): Deprecated. Creates a test target.

### Creating a Plugin Target

- [plugin(name:capability:dependencies:path:exclude:sources:packageAccess:)](target/plugin%28name_capability_dependencies_path_exclude_sources_packageaccess_%29.md): Defines a new package plug-in target.
- [pluginCapability](target/plugincapability-swift.property.md): The capability provided by a package plug-in target.
- [Target.PluginCapability](target/plugincapability-swift.enum.md): The different types of capability that a plug-in can provide.
- [PluginCommandIntent](plugincommandintent.md): The intended use case of the command plug-in.
- [PluginPermission](pluginpermission.md): The type of permission a plug-in requires.
- [plugin(name:capability:dependencies:path:exclude:sources:)](target/plugin%28name_capability_dependencies_path_exclude_sources_%29.md): Deprecated. Defines a new package plugin target.

### Declaring a Dependency Target

- [dependencies](target/dependencies.md): The target’s dependencies on other entities inside or outside the package.
- [Target.Dependency](target/dependency.md): The different types of a target’s dependency on another entity.
- [TargetDependencyCondition](targetdependencycondition.md): A condition that limits the application of a target’s dependency.

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
- [LinkerSetting](linkersetting.md): A linker build setting.
- [Target.PluginUsage](target/pluginusage.md): A plug-in used in a target.
- [packageAccess](target/packageaccess.md): If true, access to package declarations from other targets in the package is allowed.

### Describing the Target Type

- [isTest](target/istest.md): A Boolean value that indicates whether this is a test target.
- [type](target/type.md): The type of the target.
- [Target.TargetType](target/targettype.md): The different types of a target.

### Type Methods

- [macro(name:dependencies:path:exclude:sources:packageAccess:swiftSettings:linkerSettings:plugins:)](target/macro%28name_dependencies_path_exclude_sources_packageaccess_swiftsettings_linkersettings_plugins_%29.md)

## See Also

### Configuring Targets

- [targets](package/targets.md): The list of targets that are part of this package.
