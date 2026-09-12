> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/swiftsetting/treatwarning(_:as:_:)](https://developer.apple.com/documentation/packagedescription/swiftsetting/treatwarning(_:as:_:))

# treatWarning(\_:as:\_:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 6.2+

Controls how a specific Swift compiler warning is treated during compilation.

## Declaration

```swift
static func treatWarning(_ name: String, as level: WarningLevel, _ condition: BuildSettingCondition? = nil) -> SwiftSetting
```

## Parameters

- `name`: The name of the specific warning to control.
- `level`: The treatment level for the warning (`.warning` or `.error`).
- `condition`: A condition that restricts the application of the build setting.

<a id="discussion"></a>

## Discussion

Use this setting to specify whether a particular warning should be treated as a warning (default behavior) or as an error. This is equivalent to passing `-Werror` or `-Wwarning` followed by the warning name to the Swift compiler.

This setting allows for fine-grained control over individual warnings. To control all warnings at once, use `treatAllWarnings(as:_:)` instead.

> **Since**

> First available in PackageDescription 6.2.
