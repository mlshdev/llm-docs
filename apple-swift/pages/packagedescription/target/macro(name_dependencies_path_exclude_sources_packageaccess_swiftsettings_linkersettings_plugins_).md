> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/target/macro(name:dependencies:path:exclude:sources:packageaccess:swiftsettings:linkersettings:plugins:)](https://developer.apple.com/documentation/packagedescription/target/macro(name:dependencies:path:exclude:sources:packageaccess:swiftsettings:linkersettings:plugins:))

# macro(name:dependencies:path:exclude:sources:packageAccess:swiftSettings:linkerSettings:plugins:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 5.9+

## Declaration

```swift
static func macro(name: String, dependencies: [Target.Dependency] = [], path: String? = nil, exclude: [String] = [], sources: [String]? = nil, packageAccess: Bool = true, swiftSettings: [SwiftSetting]? = nil, linkerSettings: [LinkerSetting]? = nil, plugins: [Target.PluginUsage]? = nil) -> Target
```
