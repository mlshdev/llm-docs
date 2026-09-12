> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontorientation](https://developer.apple.com/documentation/coretext/ctfontorientation)

# CTFontOrientation (Swift)

**Framework:** Core Text  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The intended rendering orientation of the font for obtaining glyph metrics.

## Declaration

```swift
enum CTFontOrientation
```

<a id="overview"></a>

## Overview

Use the values of this enumeration for [kCTFontOrientationAttribute](kctfontorientationattribute.md).

## Topics

### Font Orientations

- [CTFontOrientation.default](ctfontorientation/default.md): The native orientation of the font.
- [CTFontOrientation.horizontal](ctfontorientation/horizontal.md): The horizontal orientation.
- [CTFontOrientation.vertical](ctfontorientation/vertical.md): The vertical orientation.

### Deprecated Constants

- [kCTFontDefaultOrientation](ctfontorientation/kctfontdefaultorientation.md): Deprecated. The native orientation of the font.
- [kCTFontHorizontalOrientation](ctfontorientation/kctfonthorizontalorientation.md): Deprecated. The horizontal orientation.
- [kCTFontVerticalOrientation](ctfontorientation/kctfontverticalorientation.md): Deprecated. The vertical orientation.

### Initializers

- [init(rawValue:)](ctfontorientation/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Related Documentation

- [kCTFontOrientationAttribute](kctfontorientationattribute.md): The orientation for the glyphs of the font.

### Accessing Font Attributes

- [Font Attributes](font-attributes.md): The keys for accessing font attributes from a font descriptor.
- [CTFontFormat](ctfontformat.md): The recognized format of the font.
- [CTFontPriority](ctfontpriority.md): The priority of font descriptors when resolving duplicates and sorting match results.

# CTFontOrientation (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The intended rendering orientation of the font for obtaining glyph metrics.

## Declaration

```objectivec
enum CTFontOrientation : uint32_t;
```

<a id="overview"></a>

## Overview

Use the values of this enumeration for [kCTFontOrientationAttribute](kctfontorientationattribute.md).

## Topics

### Font Orientations

- [kCTFontOrientationDefault](ctfontorientation/default.md): The native orientation of the font.
- [kCTFontOrientationHorizontal](ctfontorientation/horizontal.md): The horizontal orientation.
- [kCTFontOrientationVertical](ctfontorientation/vertical.md): The vertical orientation.

### Deprecated Constants

- [kCTFontDefaultOrientation](ctfontorientation/kctfontdefaultorientation.md): Deprecated. The native orientation of the font.
- [kCTFontHorizontalOrientation](ctfontorientation/kctfonthorizontalorientation.md): Deprecated. The horizontal orientation.
- [kCTFontVerticalOrientation](ctfontorientation/kctfontverticalorientation.md): Deprecated. The vertical orientation.

## See Also

### Related Documentation

- [kCTFontOrientationAttribute](kctfontorientationattribute.md): The orientation for the glyphs of the font.

### Accessing Font Attributes

- [Font Attributes](font-attributes.md): The keys for accessing font attributes from a font descriptor.
- [CTFontFormat](ctfontformat.md): The recognized format of the font.
- [CTFontPriority](ctfontpriority.md): The priority of font descriptors when resolving duplicates and sorting match results.
