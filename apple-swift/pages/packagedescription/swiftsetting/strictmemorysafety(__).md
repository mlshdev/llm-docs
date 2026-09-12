> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/swiftsetting/strictmemorysafety(_:)](https://developer.apple.com/documentation/packagedescription/swiftsetting/strictmemorysafety(_:))

# strictMemorySafety(\_:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 6.2+

Enable strict memory safety checking.

## Declaration

```swift
static func strictMemorySafety(_ condition: BuildSettingCondition? = nil) -> SwiftSetting
```

## Parameters

- `condition`: A condition that restricts the application of the build setting.

<a id="discussion"></a>

## Discussion

Strict memory safety checking is an opt-in compiler feature that identifies any uses of language constructs or APIs that break memory safety. Issues are reported as warnings and can generally be suppressed by adding annotations (such as `@unsafe` and `unsafe`) that acknowledge the presence of unsafe code, making it easier to review and audit at a later time.

> **Since**

> First available in PackageDescription 6.2.

## See Also

### Configuring Swift Settings

- [define(\_:\_:)](define%28____%29.md): Defines a compilation condition.
- [unsafeFlags(\_:\_:)](unsafeflags%28____%29.md): Set unsafe flags to pass arbitrary command-line flags to the corresponding build tool.
- [swiftLanguageMode(\_:\_:)](swiftlanguagemode%28____%29.md): Defines a `-language-mode` to pass to the corresponding build tool.
- [defaultIsolation(\_:\_:)](defaultisolation%28____%29.md): Set the default isolation to the given global actor type.
- [enableExperimentalFeature(\_:\_:)](enableexperimentalfeature%28____%29.md): Enable an experimental feature with the given name.
- [enableUpcomingFeature(\_:\_:)](enableupcomingfeature%28____%29.md): Enable an upcoming feature with the given name.
- [interoperabilityMode(\_:\_:)](interoperabilitymode%28____%29.md): Enables Swift interoperability with a given language.
- [SwiftSetting.InteroperabilityMode](interoperabilitymode.md): The interoperability mode
- [swiftLanguageVersion(\_:\_:)](swiftlanguageversion%28____%29.md): Deprecated. Defines a `-swift-version` to pass to the corresponding build tool.
