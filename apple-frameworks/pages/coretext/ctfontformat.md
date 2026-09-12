> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontformat](https://developer.apple.com/documentation/coretext/ctfontformat)

# CTFontFormat (Swift)

**Framework:** Core Text  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The recognized format of the font.

## Declaration

```swift
enum CTFontFormat
```

<a id="overview"></a>

## Overview

Use the values of this enumeration for [kCTFontFormatAttribute](kctfontformatattribute.md).

## Topics

### Font Formats

- [CTFontFormat.unrecognized](ctfontformat/unrecognized.md): The font is not a recognized format.
- [CTFontFormat.openTypePostScript](ctfontformat/opentypepostscript.md): The font is an OpenType format containing PostScript data.
- [CTFontFormat.openTypeTrueType](ctfontformat/opentypetruetype.md): The font is an OpenType format containing TrueType data.
- [CTFontFormat.trueType](ctfontformat/truetype.md): The font is a recognized TrueType format.
- [CTFontFormat.postScript](ctfontformat/postscript.md): The font is a recognized PostScript format.
- [CTFontFormat.bitmap](ctfontformat/bitmap.md): The font is a bitmap-only format.

### Initializers

- [init(rawValue:)](ctfontformat/init%28rawvalue_%29.md)

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

- [kCTFontFormatAttribute](kctfontformatattribute.md): The recognized format of the font.

### Accessing Font Attributes

- [Font Attributes](font-attributes.md): The keys for accessing font attributes from a font descriptor.
- [CTFontOrientation](ctfontorientation.md): The intended rendering orientation of the font for obtaining glyph metrics.
- [CTFontPriority](ctfontpriority.md): The priority of font descriptors when resolving duplicates and sorting match results.

# CTFontFormat (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The recognized format of the font.

## Declaration

```objectivec
enum CTFontFormat : uint32_t;
```

<a id="overview"></a>

## Overview

Use the values of this enumeration for [kCTFontFormatAttribute](kctfontformatattribute.md).

## Topics

### Font Formats

- [kCTFontFormatUnrecognized](ctfontformat/unrecognized.md): The font is not a recognized format.
- [kCTFontFormatOpenTypePostScript](ctfontformat/opentypepostscript.md): The font is an OpenType format containing PostScript data.
- [kCTFontFormatOpenTypeTrueType](ctfontformat/opentypetruetype.md): The font is an OpenType format containing TrueType data.
- [kCTFontFormatTrueType](ctfontformat/truetype.md): The font is a recognized TrueType format.
- [kCTFontFormatPostScript](ctfontformat/postscript.md): The font is a recognized PostScript format.
- [kCTFontFormatBitmap](ctfontformat/bitmap.md): The font is a bitmap-only format.

## See Also

### Related Documentation

- [kCTFontFormatAttribute](kctfontformatattribute.md): The recognized format of the font.

### Accessing Font Attributes

- [Font Attributes](font-attributes.md): The keys for accessing font attributes from a font descriptor.
- [CTFontOrientation](ctfontorientation.md): The intended rendering orientation of the font for obtaining glyph metrics.
- [CTFontPriority](ctfontpriority.md): The priority of font descriptors when resolving duplicates and sorting match results.
