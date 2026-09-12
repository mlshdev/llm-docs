> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/target/target(name:dependencies:path:exclude:sources:resources:publicheaderspath:packageaccess:csettings:cxxsettings:swiftsettings:linkersettings:plugins:)](https://developer.apple.com/documentation/packagedescription/target/target(name:dependencies:path:exclude:sources:resources:publicheaderspath:packageaccess:csettings:cxxsettings:swiftsettings:linkersettings:plugins:))

# target(name:dependencies:path:exclude:sources:resources:publicHeadersPath:packageAccess:cSettings:cxxSettings:swiftSettings:linkerSettings:plugins:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 5.9+

Creates a regular target.

## Declaration

```swift
static func target(name: String, dependencies: [Target.Dependency] = [], path: String? = nil, exclude: [String] = [], sources: [String]? = nil, resources: [Resource]? = nil, publicHeadersPath: String? = nil, packageAccess: Bool = true, cSettings: [CSetting]? = nil, cxxSettings: [CXXSetting]? = nil, swiftSettings: [SwiftSetting]? = nil, linkerSettings: [LinkerSetting]? = nil, plugins: [Target.PluginUsage]? = nil) -> Target
```

## Parameters

- `name`: The name of the target.
- `dependencies`: The dependencies of the target. A dependency can be another target in the package or a product from a package dependency.
- `path`: The custom path for the target. By default, the Swift Package Manager requires a target’s sources to reside at predefined search paths; for example, `[PackageRoot]/Sources/[TargetName]`. Don’t escape the package root; for example, values like `../Foo` or `/Foo` are invalid.
- `exclude`: A list of paths to files or directories that the Swift Package Manager shouldn’t consider to be source or resource files. A path is relative to the target’s directory. This parameter has precedence over the [sources](sources.md) parameter.
- `sources`: An explicit list of source files. If you provide a path to a directory, Swift Package Manager searches for valid source files recursively.
- `resources`: An explicit list of resources files.
- `publicHeadersPath`: The directory that contains public headers of a C-family library target.
- `packageAccess`: Allows package symbols from other targets in the package.
- `cSettings`: The C settings for this target.
- `cxxSettings`: The C++ settings for this target.
- `swiftSettings`: The Swift settings for this target.
- `linkerSettings`: The linker settings for this target.
- `plugins`: The plug-ins used by this target

<a id="discussion"></a>

## Discussion

A target can contain either Swift or C-family source files, but not both. It contains code that is built as a regular module for inclusion in a library or executable product, but that cannot itself be used as the main target of an executable product.

## See Also

### Creating a Regular Target

- [target(name:dependencies:path:exclude:sources:resources:publicHeadersPath:cSettings:cxxSettings:swiftSettings:linkerSettings:plugins:)](target%28name_dependencies_path_exclude_sources_resources_publicheaderspath_csettings_cxxsettings_swiftsettings_linkersettings_plugins_%29.md): Deprecated. Creates a regular target.
- [target(name:dependencies:path:exclude:sources:resources:publicHeadersPath:cSettings:cxxSettings:swiftSettings:linkerSettings:)](target%28name_dependencies_path_exclude_sources_resources_publicheaderspath_csettings_cxxsettings_swiftsettings_linkersettings_%29.md): Deprecated. Creates a regular target.
- [target(name:dependencies:path:exclude:sources:publicHeadersPath:cSettings:cxxSettings:swiftSettings:linkerSettings:)](target%28name_dependencies_path_exclude_sources_publicheaderspath_csettings_cxxsettings_swiftsettings_linkersettings_%29.md): Deprecated. Creates a library or executable target.
- [target(name:dependencies:path:exclude:sources:publicHeadersPath:)](target%28name_dependencies_path_exclude_sources_publicheaderspath_%29.md): Deprecated. Creates a library or executable target.
