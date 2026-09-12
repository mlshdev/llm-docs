> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/target/executabletarget(name:dependencies:path:exclude:sources:resources:publicheaderspath:csettings:cxxsettings:swiftsettings:linkersettings:)](https://developer.apple.com/documentation/packagedescription/target/executabletarget(name:dependencies:path:exclude:sources:resources:publicheaderspath:csettings:cxxsettings:swiftsettings:linkersettings:))

# executableTarget(name:dependencies:path:exclude:sources:resources:publicHeadersPath:cSettings:cxxSettings:swiftSettings:linkerSettings:)

**Framework:** PackageDescription  
**Kind:** Type Method

Creates an executable target.

## Declaration

```swift
static func executableTarget(name: String, dependencies: [Target.Dependency] = [], path: String? = nil, exclude: [String] = [], sources: [String]? = nil, resources: [Resource]? = nil, publicHeadersPath: String? = nil, cSettings: [CSetting]? = nil, cxxSettings: [CXXSetting]? = nil, swiftSettings: [SwiftSetting]? = nil, linkerSettings: [LinkerSetting]? = nil) -> Target
```

## Parameters

- `name`: The name of the target.
- `dependencies`: The dependencies of the target. A dependency can be another target in the package or a product from a package dependency.
- `path`: The custom path for the target. By default, the Swift Package Manager requires a target’s sources to reside at predefined search paths; for example, `[PackageRoot]/Sources/[TargetName]`. Don’t escape the package root; for example, values like `../Foo` or `/Foo` are invalid.
- `exclude`: A list of paths to files or directories that the Swift Package Manager shouldn’t consider to be source or resource files. A path is relative to the target’s directory. This parameter has precedence over the [sources](sources.md) parameter.
- `sources`: An explicit list of source files. If you provide a path to a directory, the Swift Package Manager searches for valid source files recursively.
- `resources`: An explicit list of resources files.
- `publicHeadersPath`: The directory containing public headers of a C-family library target.
- `cSettings`: The C settings for this target.
- `cxxSettings`: The C++ settings for this target.
- `swiftSettings`: The Swift settings for this target.
- `linkerSettings`: The linker settings for this target.

<a id="discussion"></a>

## Discussion

An executable target can contain either Swift or C-family source files, but not both. It contains code that is built as an executable module that can be used as the main target of an executable product. The target is expected to either have a source file named `main.swift`, `main.m`, `main.c`, or `main.cpp`, or a source file that contains the `@main` keyword.

## See Also

### Creating an Executable Target

- [executableTarget(name:dependencies:path:exclude:sources:resources:publicHeadersPath:packageAccess:cSettings:cxxSettings:swiftSettings:linkerSettings:plugins:)](executabletarget%28name_dependencies_path_exclude_sources_resources_publicheaderspath_packageaccess_csettings_cxxsettings_swiftsettings_linkersettings_plugins_%29.md): Creates an executable target.
- [executableTarget(name:dependencies:path:exclude:sources:resources:publicHeadersPath:cSettings:cxxSettings:swiftSettings:linkerSettings:plugins:)](executabletarget%28name_dependencies_path_exclude_sources_resources_publicheaderspath_csettings_cxxsettings_swiftsettings_linkersettings_plugins_%29.md): Deprecated. Creates an executable target.
