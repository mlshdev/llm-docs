> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/kcttypesetteroptiondisablebidiprocessing](https://developer.apple.com/documentation/coretext/kcttypesetteroptiondisablebidiprocessing)

# kCTTypesetterOptionDisableBidiProcessing (Swift)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 3.2+ (deprecated in 6.0) · iPadOS 3.2+ (deprecated in 6.0) · Mac Catalyst 3.2+ (deprecated in 6.0) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

> Deprecated

## Declaration

```swift
let kCTTypesetterOptionDisableBidiProcessing: CFString
```

<a id="Discussion"></a>

## Discussion

Disables bidirectional processing. Value must be a CFBoolean object. Default value is `false`. Normally, typesetting applies the Unicode Bidirectional Algorithm as described in Unicode Standard Annex #9. If a typesetter is created with this option set to `true`, no directional reordering is performed, and any directional control characters are ignored.

## See Also

### Constants

- [kCTTypesetterOptionForcedEmbeddingLevel](kcttypesetteroptionforcedembeddinglevel.md): A key that specifies the embedding level of the typesetter’s text.
- [kCTTypesetterOptionAllowUnboundedLayout](kcttypesetteroptionallowunboundedlayout.md): A key that specifies whether the text system lays out text that requires unreasonable effort.

# kCTTypesetterOptionDisableBidiProcessing (Objective-C)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 3.2+ (deprecated in 6.0) · iPadOS 3.2+ (deprecated in 6.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.5+ (deprecated in 10.8) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

> Deprecated

## Declaration

```objectivec
extern CFStringRef const kCTTypesetterOptionDisableBidiProcessing;
```

<a id="Discussion"></a>

## Discussion

Disables bidirectional processing. Value must be a CFBoolean object. Default value is `false`. Normally, typesetting applies the Unicode Bidirectional Algorithm as described in Unicode Standard Annex #9. If a typesetter is created with this option set to `true`, no directional reordering is performed, and any directional control characters are ignored.

## See Also

### Constants

- [kCTTypesetterOptionForcedEmbeddingLevel](kcttypesetteroptionforcedembeddinglevel.md): A key that specifies the embedding level of the typesetter’s text.
- [kCTTypesetterOptionAllowUnboundedLayout](kcttypesetteroptionallowunboundedlayout.md): A key that specifies whether the text system lays out text that requires unreasonable effort.
