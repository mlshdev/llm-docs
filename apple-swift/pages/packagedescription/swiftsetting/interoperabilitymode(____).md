> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/swiftsetting/interoperabilitymode(_:_:)](https://developer.apple.com/documentation/packagedescription/swiftsetting/interoperabilitymode(_:_:))

# interoperabilityMode(\_:\_:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 5.9+

Enables Swift interoperability with a given language.

## Declaration

```swift
static func interoperabilityMode(_ mode: SwiftSetting.InteroperabilityMode, _ condition: BuildSettingCondition? = nil) -> SwiftSetting
```

## Parameters

- `mode`: The interoperability mode, either C-compatible or C++-compatible.
- `condition`: A condition that restricts the application of the build setting.

<a id="discussion"></a>

## Discussion

This is useful for enabling interoperability between Swift and C++ for a given target.

Enabling C++ interoperability mode might alter the way some existing C and Objective-C APIs are imported.

> **Since**

> First available in PackageDescription 5.9.

## See Also

### Configuring Swift Settings

- [define(\_:\_:)](define%28____%29.md): Defines a compilation condition.
- [unsafeFlags(\_:\_:)](unsafeflags%28____%29.md): Set unsafe flags to pass arbitrary command-line flags to the corresponding build tool.
- [strictMemorySafety(\_:)](strictmemorysafety%28__%29.md): Enable strict memory safety checking.
- [swiftLanguageMode(\_:\_:)](swiftlanguagemode%28____%29.md): Defines a `-language-mode` to pass to the corresponding build tool.
- [defaultIsolation(\_:\_:)](defaultisolation%28____%29.md): Set the default isolation to the given global actor type.
- [enableExperimentalFeature(\_:\_:)](enableexperimentalfeature%28____%29.md): Enable an experimental feature with the given name.
- [enableUpcomingFeature(\_:\_:)](enableupcomingfeature%28____%29.md): Enable an upcoming feature with the given name.
- [SwiftSetting.InteroperabilityMode](interoperabilitymode.md): The interoperability mode
- [swiftLanguageVersion(\_:\_:)](swiftlanguageversion%28____%29.md): Deprecated. Defines a `-swift-version` to pass to the corresponding build tool.
