> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/pointsize](https://developer.apple.com/documentation/appkit/nsfont/pointsize)

# pointSize (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The point size of the font.

## Declaration

```swift
var pointSize: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

If the font has a nonstandard matrix, the point size is the effective vertical point size.

## See Also

### Getting Font Metrics and Information

- [coveredCharacterSet](coveredcharacterset.md): The character set containing all of the nominal characters that the font can render.
- [fontDescriptor](fontdescriptor.md): The font descriptor object for the font.
- [isFixedPitch](isfixedpitch.md): A Boolean value indicating whether all glyphs in the font have the same advancement.
- [mostCompatibleStringEncoding](mostcompatiblestringencoding.md): The string encoding that works best with the font.
- [Advanced Font Metrics](../advanced-font-metrics.md): Retrieve details about ascender and descender heights, glyph bounding rectangles, glyph advancements, and more.

# pointSize (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The point size of the font.

## Declaration

```objectivec
@property (readonly) CGFloat pointSize;
```

<a id="Discussion"></a>

## Discussion

If the font has a nonstandard matrix, the point size is the effective vertical point size.

## See Also

### Getting Font Metrics and Information

- [coveredCharacterSet](coveredcharacterset.md): The character set containing all of the nominal characters that the font can render.
- [fontDescriptor](fontdescriptor.md): The font descriptor object for the font.
- [fixedPitch](isfixedpitch.md): A Boolean value indicating whether all glyphs in the font have the same advancement.
- [mostCompatibleStringEncoding](mostcompatiblestringencoding.md): The string encoding that works best with the font.
- [Advanced Font Metrics](../advanced-font-metrics.md): Retrieve details about ascender and descender heights, glyph bounding rectangles, glyph advancements, and more.
