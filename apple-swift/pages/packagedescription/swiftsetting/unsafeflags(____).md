> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/swiftsetting/unsafeflags(_:_:)](https://developer.apple.com/documentation/packagedescription/swiftsetting/unsafeflags(_:_:))

# unsafeFlags(\_:\_:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 5.0+

Set unsafe flags to pass arbitrary command-line flags to the corresponding build tool.

## Declaration

```swift
static func unsafeFlags(_ flags: [String], _ condition: BuildSettingCondition? = nil) -> SwiftSetting
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

### Configuring Swift Settings

- [define(\_:\_:)](define%28____%29.md): Defines a compilation condition.
- [strictMemorySafety(\_:)](strictmemorysafety%28__%29.md): Enable strict memory safety checking.
- [swiftLanguageMode(\_:\_:)](swiftlanguagemode%28____%29.md): Defines a `-language-mode` to pass to the corresponding build tool.
- [defaultIsolation(\_:\_:)](defaultisolation%28____%29.md): Set the default isolation to the given global actor type.
- [enableExperimentalFeature(\_:\_:)](enableexperimentalfeature%28____%29.md): Enable an experimental feature with the given name.
- [enableUpcomingFeature(\_:\_:)](enableupcomingfeature%28____%29.md): Enable an upcoming feature with the given name.
- [interoperabilityMode(\_:\_:)](interoperabilitymode%28____%29.md): Enables Swift interoperability with a given language.
- [SwiftSetting.InteroperabilityMode](interoperabilitymode.md): The interoperability mode
- [swiftLanguageVersion(\_:\_:)](swiftlanguageversion%28____%29.md): Deprecated. Defines a `-swift-version` to pass to the corresponding build tool.
