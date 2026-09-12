> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/swiftsetting/defaultisolation(_:_:)](https://developer.apple.com/documentation/packagedescription/swiftsetting/defaultisolation(_:_:))

# defaultIsolation(\_:\_:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 6.2+

Set the default isolation to the given global actor type.

## Declaration

```swift
static func defaultIsolation(_ isolation: MainActor.Type?, _ condition: BuildSettingCondition? = nil) -> SwiftSetting
```

## Parameters

- `isolation`: The type of global actor to use for default actor isolation inference. The only valid arguments are `MainActor.self` and `nil`.
- `condition`: A condition that restricts the application of the build setting.

<a id="discussion"></a>

## Discussion

> **Since**

> First available in PackageDescription 6.2.

The compiler defaults to inferring unannotated code as `nonisolated` if unspecified, or if the `isolation` parameter is set to `nil`.

## See Also

### Configuring Swift Settings

- [define(\_:\_:)](define%28____%29.md): Defines a compilation condition.
- [unsafeFlags(\_:\_:)](unsafeflags%28____%29.md): Set unsafe flags to pass arbitrary command-line flags to the corresponding build tool.
- [strictMemorySafety(\_:)](strictmemorysafety%28__%29.md): Enable strict memory safety checking.
- [swiftLanguageMode(\_:\_:)](swiftlanguagemode%28____%29.md): Defines a `-language-mode` to pass to the corresponding build tool.
- [enableExperimentalFeature(\_:\_:)](enableexperimentalfeature%28____%29.md): Enable an experimental feature with the given name.
- [enableUpcomingFeature(\_:\_:)](enableupcomingfeature%28____%29.md): Enable an upcoming feature with the given name.
- [interoperabilityMode(\_:\_:)](interoperabilitymode%28____%29.md): Enables Swift interoperability with a given language.
- [SwiftSetting.InteroperabilityMode](interoperabilitymode.md): The interoperability mode
- [swiftLanguageVersion(\_:\_:)](swiftlanguageversion%28____%29.md): Deprecated. Defines a `-swift-version` to pass to the corresponding build tool.
