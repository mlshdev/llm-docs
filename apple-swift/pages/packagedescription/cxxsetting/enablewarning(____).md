> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/cxxsetting/enablewarning(_:_:)](https://developer.apple.com/documentation/packagedescription/cxxsetting/enablewarning(_:_:))

# enableWarning(\_:\_:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 6.2+

Enable a specific C++ compiler warning group.

## Declaration

```swift
static func enableWarning(_ name: String, _ condition: BuildSettingCondition? = nil) -> CXXSetting
```

## Parameters

- `name`: The name of the warning group to enable.
- `condition`: A condition that restricts the application of the build setting.

<a id="discussion"></a>

## Discussion

Use this setting to enable a specific warning group. This is equivalent to passing `-W` followed by the group name to the C++ compiler.

> **Since**

> First available in PackageDescription 6.2.
