> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgtextencoding](https://developer.apple.com/documentation/coregraphics/cgtextencoding)

# CGTextEncoding (Swift)

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 2.0+ (deprecated in 7.0) · tvOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Text encodings for fonts.

## Declaration

```swift
enum CGTextEncoding
```

<a id="overview"></a>

## Overview

For more information on setting the font in a graphics context, see [selectFont(name:size:textEncoding:)](cgcontext/selectfont%28name_size_textencoding_%29.md).

## Topics

### Constants

- [CGTextEncoding.encodingFontSpecific](cgtextencoding/encodingfontspecific.md): Deprecated. The built-in encoding of the font.
- [CGTextEncoding.encodingMacRoman](cgtextencoding/encodingmacroman.md): Deprecated. The MacRoman encoding. MacRoman is an ASCII variant originally created for use in the Mac OS, in which characters 127 and lower are ASCII, and characters 128 and higher are non-English characters and symbols.

### Initializers

- [init(rawValue:)](cgtextencoding/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [CGPathFillRule](cgpathfillrule.md): Rules for determining which regions are interior to a path, used by the [fillPath(using:)](cgcontext/fillpath%28using_%29.md) and [clip(using:)](cgcontext/clip%28using_%29.md) methods.

# CGTextEncoding (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.9) · tvOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Text encodings for fonts.

## Declaration

```objectivec
enum CGTextEncoding : int32_t;
```

<a id="overview"></a>

## Overview

For more information on setting the font in a graphics context, see [CGContextSelectFont](cgcontext/selectfont%28name_size_textencoding_%29.md).

## Topics

### Constants

- [kCGEncodingFontSpecific](cgtextencoding/encodingfontspecific.md): Deprecated. The built-in encoding of the font.
- [kCGEncodingMacRoman](cgtextencoding/encodingmacroman.md): Deprecated. The MacRoman encoding. MacRoman is an ASCII variant originally created for use in the Mac OS, in which characters 127 and lower are ASCII, and characters 128 and higher are non-English characters and symbols.
