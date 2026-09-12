> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/csetting/unsafeflags(_:_:)](https://developer.apple.com/documentation/packagedescription/csetting/unsafeflags(_:_:))

# unsafeFlags(\_:\_:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 5.0+

Sets unsafe flags to pass arbitrary command-line flags to the corresponding build tool.

## Declaration

```swift
static func unsafeFlags(_ flags: [String], _ condition: BuildSettingCondition? = nil) -> CSetting
```

## Parameters

- `flags`: The unsafe flags to set.
- `condition`: A condition that restricts the application of the build setting.

<a id="discussion"></a>

## Discussion

As the usage of the word “unsafe” implies, Swift Package Manager can’t safely determine if the build flags have any negative side effect on the build since certain flags can change the behavior of how it performs a build.

As some build flags can be exploited for unsupported or malicious behavior, the use of unsafe flags makes the products containing this target ineligible for use by other packages.

> **Since**

> First available in PackageDescription 5.0.

## See Also

### Configuring C Settings

- [define(\_:to:\_:)](define%28__to___%29.md): Defines a value for a macro.
- [headerSearchPath(\_:\_:)](headersearchpath%28____%29.md): Provides a header search path relative to the target’s directory.
