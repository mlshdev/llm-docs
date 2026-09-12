> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/target/testtarget(name:dependencies:path:exclude:sources:csettings:cxxsettings:swiftsettings:linkersettings:)](https://developer.apple.com/documentation/packagedescription/target/testtarget(name:dependencies:path:exclude:sources:csettings:cxxsettings:swiftsettings:linkersettings:))

# testTarget(name:dependencies:path:exclude:sources:cSettings:cxxSettings:swiftSettings:linkerSettings:)

**Framework:** PackageDescription  
**Kind:** Type Method

Creates a test target.

## Declaration

```swift
static func testTarget(name: String, dependencies: [Target.Dependency] = [], path: String? = nil, exclude: [String] = [], sources: [String]? = nil, cSettings: [CSetting]? = nil, cxxSettings: [CXXSetting]? = nil, swiftSettings: [SwiftSetting]? = nil, linkerSettings: [LinkerSetting]? = nil) -> Target
```

## Parameters

- `name`: The name of the target.
- `dependencies`: The dependencies of the target. A dependency can be another target in the package or a product from a package dependency.
- `path`: The custom path for the target. By default, the Swift Package Manager requires a target’s sources to reside at predefined search paths; for example, `[PackageRoot]/Sources/[TargetName]`. Don’t escape the package root; for example, values like `../Foo` or `/Foo` are invalid.
- `exclude`: A list of paths to files or directories that the Swift Package Manager shouldn’t consider to be source or resource files. A path is relative to the target’s directory. This parameter has precedence over the [sources](sources.md) parameter.
- `sources`: An explicit list of source files. If you provide a path to a directory, the Swift Package Manager searches for valid source files recursively.
- `cSettings`: The C settings for this target.
- `cxxSettings`: The C++ settings for this target.
- `swiftSettings`: The Swift settings for this target.
- `linkerSettings`: The linker settings for this target.

<a id="discussion"></a>

## Discussion

Write test targets using the XCTest testing framework. Test targets generally declare a dependency on the targets they test.

## See Also

### Creating a Test Target

- [testTarget(name:dependencies:path:exclude:sources:resources:packageAccess:cSettings:cxxSettings:swiftSettings:linkerSettings:plugins:)](testtarget%28name_dependencies_path_exclude_sources_resources_packageaccess_csettings_cxxsettings_swiftsettings_linkersettings_plugins_%29.md): Creates a test target.
- [testTarget(name:dependencies:path:exclude:sources:resources:cSettings:cxxSettings:swiftSettings:linkerSettings:plugins:)](testtarget%28name_dependencies_path_exclude_sources_resources_csettings_cxxsettings_swiftsettings_linkersettings_plugins_%29.md): Deprecated. Creates a test target.
- [testTarget(name:dependencies:path:exclude:sources:resources:cSettings:cxxSettings:swiftSettings:linkerSettings:)](testtarget%28name_dependencies_path_exclude_sources_resources_csettings_cxxsettings_swiftsettings_linkersettings_%29.md): Deprecated. Creates a test target.
- [testTarget(name:dependencies:path:exclude:sources:)](testtarget%28name_dependencies_path_exclude_sources_%29.md): Deprecated. Creates a test target.
