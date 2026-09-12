> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/swiftsetting/enableupcomingfeature(_:_:)](https://developer.apple.com/documentation/packagedescription/swiftsetting/enableupcomingfeature(_:_:))

# enableUpcomingFeature(\_:\_:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 5.8+

Enable an upcoming feature with the given name.

## Declaration

```swift
static func enableUpcomingFeature(_ name: String, _ condition: BuildSettingCondition? = nil) -> SwiftSetting
```

## Parameters

- `name`: The name of the upcoming feature; for example, `ConciseMagicFile`.
- `condition`: A condition that restricts the application of the build setting.

<a id="discussion"></a>

## Discussion

An upcoming feature is one that is available in Swift as of a certain language version, but isn’t available by default in prior language modes because it has some impact on source compatibility.

You can add and use multiple upcoming features in a given target without affecting its dependencies. Targets will ignore any unknown upcoming features.

> **Since**

> First available in PackageDescription 5.8.

## See Also

### Configuring Swift Settings

- [define(\_:\_:)](define%28____%29.md): Defines a compilation condition.
- [unsafeFlags(\_:\_:)](unsafeflags%28____%29.md): Set unsafe flags to pass arbitrary command-line flags to the corresponding build tool.
- [strictMemorySafety(\_:)](strictmemorysafety%28__%29.md): Enable strict memory safety checking.
- [swiftLanguageMode(\_:\_:)](swiftlanguagemode%28____%29.md): Defines a `-language-mode` to pass to the corresponding build tool.
- [defaultIsolation(\_:\_:)](defaultisolation%28____%29.md): Set the default isolation to the given global actor type.
- [enableExperimentalFeature(\_:\_:)](enableexperimentalfeature%28____%29.md): Enable an experimental feature with the given name.
- [interoperabilityMode(\_:\_:)](interoperabilitymode%28____%29.md): Enables Swift interoperability with a given language.
- [SwiftSetting.InteroperabilityMode](interoperabilitymode.md): The interoperability mode
- [swiftLanguageVersion(\_:\_:)](swiftlanguageversion%28____%29.md): Deprecated. Defines a `-swift-version` to pass to the corresponding build tool.
