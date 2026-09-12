> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/swiftsetting/swiftlanguageversion(_:_:)](https://developer.apple.com/documentation/packagedescription/swiftsetting/swiftlanguageversion(_:_:))

# swiftLanguageVersion(\_:\_:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 6.0+ (deprecated in 6.0)

Defines a `-swift-version` to pass  to the corresponding build tool.

## Declaration

```swift
static func swiftLanguageVersion(_ version: SwiftVersion, _ condition: BuildSettingCondition? = nil) -> SwiftSetting
```

## Parameters

- `version`: The Swift language version to use.
- `condition`: A condition that restricts the application of the build setting.

<a id="discussion"></a>

## Discussion

> **Since**

> First available in PackageDescription 6.0.

## See Also

### Configuring Swift Settings

- [define(\_:\_:)](define%28____%29.md): Defines a compilation condition.
- [unsafeFlags(\_:\_:)](unsafeflags%28____%29.md): Set unsafe flags to pass arbitrary command-line flags to the corresponding build tool.
- [strictMemorySafety(\_:)](strictmemorysafety%28__%29.md): Enable strict memory safety checking.
- [swiftLanguageMode(\_:\_:)](swiftlanguagemode%28____%29.md): Defines a `-language-mode` to pass to the corresponding build tool.
- [defaultIsolation(\_:\_:)](defaultisolation%28____%29.md): Set the default isolation to the given global actor type.
- [enableExperimentalFeature(\_:\_:)](enableexperimentalfeature%28____%29.md): Enable an experimental feature with the given name.
- [enableUpcomingFeature(\_:\_:)](enableupcomingfeature%28____%29.md): Enable an upcoming feature with the given name.
- [interoperabilityMode(\_:\_:)](interoperabilitymode%28____%29.md): Enables Swift interoperability with a given language.
- [SwiftSetting.InteroperabilityMode](interoperabilitymode.md): The interoperability mode
