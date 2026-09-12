> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/swiftsetting/define(_:_:)](https://developer.apple.com/documentation/packagedescription/swiftsetting/define(_:_:))

# define(\_:\_:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 5.0+

Defines a compilation condition.

## Declaration

```swift
static func define(_ name: String, _ condition: BuildSettingCondition? = nil) -> SwiftSetting
```

## Parameters

- `name`: The name of the macro.
- `condition`: A condition that restricts the application of the build setting.

<a id="discussion"></a>

## Discussion

Use compilation conditions to only compile statements if a certain condition is true. For example, the Swift compiler will only compile the statements inside the `#if` block when `ENABLE_SOMETHING` is defined:

```swift
#if ENABLE_SOMETHING
   ...
#endif
```

Unlike macros in C/C++, compilation conditions don’t have an associated value.

> **Since**

> First available in PackageDescription 5.0.

## See Also

### Configuring Swift Settings

- [unsafeFlags(\_:\_:)](unsafeflags%28____%29.md): Set unsafe flags to pass arbitrary command-line flags to the corresponding build tool.
- [strictMemorySafety(\_:)](strictmemorysafety%28__%29.md): Enable strict memory safety checking.
- [swiftLanguageMode(\_:\_:)](swiftlanguagemode%28____%29.md): Defines a `-language-mode` to pass to the corresponding build tool.
- [defaultIsolation(\_:\_:)](defaultisolation%28____%29.md): Set the default isolation to the given global actor type.
- [enableExperimentalFeature(\_:\_:)](enableexperimentalfeature%28____%29.md): Enable an experimental feature with the given name.
- [enableUpcomingFeature(\_:\_:)](enableupcomingfeature%28____%29.md): Enable an upcoming feature with the given name.
- [interoperabilityMode(\_:\_:)](interoperabilitymode%28____%29.md): Enables Swift interoperability with a given language.
- [SwiftSetting.InteroperabilityMode](interoperabilitymode.md): The interoperability mode
- [swiftLanguageVersion(\_:\_:)](swiftlanguageversion%28____%29.md): Deprecated. Defines a `-swift-version` to pass to the corresponding build tool.
