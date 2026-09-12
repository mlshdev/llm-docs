> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/csetting/treatallwarnings(as:_:)](https://developer.apple.com/documentation/packagedescription/csetting/treatallwarnings(as:_:))

# treatAllWarnings(as:\_:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 6.2+

Controls how all C compiler warnings are treated during compilation.

## Declaration

```swift
static func treatAllWarnings(as level: WarningLevel, _ condition: BuildSettingCondition? = nil) -> CSetting
```

## Parameters

- `level`: The treatment level for all warnings (`.warning` or `.error`).
- `condition`: A condition that restricts the application of the build setting.

<a id="discussion"></a>

## Discussion

Use this setting to specify whether all warnings should be treated as warnings (default behavior) or as errors. This is equivalent to passing `-Werror` or `-Wno-error` to the C compiler.

This setting applies to all warnings emitted by the C compiler. To control specific warnings individually, use `treatWarning(name:as:_:)` instead.

> **Since**

> First available in PackageDescription 6.2.
