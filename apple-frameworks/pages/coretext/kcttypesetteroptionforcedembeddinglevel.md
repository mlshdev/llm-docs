> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/kcttypesetteroptionforcedembeddinglevel](https://developer.apple.com/documentation/coretext/kcttypesetteroptionforcedembeddinglevel)

# kCTTypesetterOptionForcedEmbeddingLevel (Swift)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key that specifies the embedding level of the typesetter’s text.

## Declaration

```swift
let kCTTypesetterOptionForcedEmbeddingLevel: CFString
```

<a id="Discussion"></a>

## Discussion

The value for this key must be a `CFNumberRef` object. There’s no default value.

Normally, typesetting applies the Unicode Bidirectional Algorithm as described in [Unicode Standard Annex #9](https://unicode.org/reports/tr9/). If present, this option specifies the embedding level, and the text system ignores any directional control characters.

## See Also

### Constants

- [kCTTypesetterOptionAllowUnboundedLayout](kcttypesetteroptionallowunboundedlayout.md): A key that specifies whether the text system lays out text that requires unreasonable effort.
- [kCTTypesetterOptionDisableBidiProcessing](kcttypesetteroptiondisablebidiprocessing.md): Deprecated.

# kCTTypesetterOptionForcedEmbeddingLevel (Objective-C)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key that specifies the embedding level of the typesetter’s text.

## Declaration

```objectivec
extern CFStringRef const kCTTypesetterOptionForcedEmbeddingLevel;
```

<a id="Discussion"></a>

## Discussion

The value for this key must be a `CFNumberRef` object. There’s no default value.

Normally, typesetting applies the Unicode Bidirectional Algorithm as described in [Unicode Standard Annex #9](https://unicode.org/reports/tr9/). If present, this option specifies the embedding level, and the text system ignores any directional control characters.

## See Also

### Constants

- [kCTTypesetterOptionAllowUnboundedLayout](kcttypesetteroptionallowunboundedlayout.md): A key that specifies whether the text system lays out text that requires unreasonable effort.
- [kCTTypesetterOptionDisableBidiProcessing](kcttypesetteroptiondisablebidiprocessing.md): Deprecated.
