> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/mostcompatiblestringencoding](https://developer.apple.com/documentation/appkit/nsfont/mostcompatiblestringencoding)

# mostCompatibleStringEncoding (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The string encoding that works best with the font.

## Declaration

```swift
var mostCompatibleStringEncoding: UInt { get }
```

<a id="Discussion"></a>

## Discussion

The string encoding in this property is the encoding with the fewest unmatched characters and glyphs in the font. If this value is [NSASCIIStringEncoding](https://developer.apple.com/documentation/foundation/nsasciistringencoding), the font could not determine the correct encoding; you should assume the font can render only ASCII characters. The font uses heuristically well-known font encodings to determine the value of this property, so for nonstandard encodings the property may not contain the optimal string encoding.

You can use the [data(using:)](https://developer.apple.com/documentation/foundation/nsstring/data%28using:%29) or [data(using:allowLossyConversion:)](https://developer.apple.com/documentation/foundation/nsstring/data%28using:allowlossyconversion:%29) methods of [NSString](https://developer.apple.com/documentation/foundation/nsstring) to convert strings to this encoding.

## See Also

### Getting Font Metrics and Information

- [pointSize](pointsize.md): The point size of the font.
- [coveredCharacterSet](coveredcharacterset.md): The character set containing all of the nominal characters that the font can render.
- [fontDescriptor](fontdescriptor.md): The font descriptor object for the font.
- [isFixedPitch](isfixedpitch.md): A Boolean value indicating whether all glyphs in the font have the same advancement.
- [Advanced Font Metrics](../advanced-font-metrics.md): Retrieve details about ascender and descender heights, glyph bounding rectangles, glyph advancements, and more.

# mostCompatibleStringEncoding (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The string encoding that works best with the font.

## Declaration

```objectivec
@property (readonly) NSStringEncoding mostCompatibleStringEncoding;
```

<a id="Discussion"></a>

## Discussion

The string encoding in this property is the encoding with the fewest unmatched characters and glyphs in the font. If this value is [NSASCIIStringEncoding](https://developer.apple.com/documentation/foundation/nsasciistringencoding), the font could not determine the correct encoding; you should assume the font can render only ASCII characters. The font uses heuristically well-known font encodings to determine the value of this property, so for nonstandard encodings the property may not contain the optimal string encoding.

You can use the [dataUsingEncoding:](https://developer.apple.com/documentation/foundation/nsstring/data%28using:%29) or [dataUsingEncoding:allowLossyConversion:](https://developer.apple.com/documentation/foundation/nsstring/data%28using:allowlossyconversion:%29) methods of [NSString](https://developer.apple.com/documentation/foundation/nsstring) to convert strings to this encoding.

## See Also

### Getting Font Metrics and Information

- [pointSize](pointsize.md): The point size of the font.
- [coveredCharacterSet](coveredcharacterset.md): The character set containing all of the nominal characters that the font can render.
- [fontDescriptor](fontdescriptor.md): The font descriptor object for the font.
- [fixedPitch](isfixedpitch.md): A Boolean value indicating whether all glyphs in the font have the same advancement.
- [Advanced Font Metrics](../advanced-font-metrics.md): Retrieve details about ascender and descender heights, glyph bounding rectangles, glyph advancements, and more.
