> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/packagedescription/csetting/disablewarning(_:_:)

# disableWarning(\_:\_:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 6.2+

Disable a specific C compiler warning group.

## Declaration

```swift
static func disableWarning(_ name: String, _ condition: BuildSettingCondition? = nil) -> CSetting
```

## Parameters

- `name`: The name of the warning group to disable.
- `condition`: A condition that restricts the application of the build setting.

<a id="discussion"></a>

## Discussion

Use this setting to disable a specific warning group. This is equivalent to passing `-Wno-` followed by the group name to the C compiler.

> **Since**

> First available in PackageDescription 6.2.
