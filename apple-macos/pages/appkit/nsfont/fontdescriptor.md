> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/fontdescriptor](https://developer.apple.com/documentation/appkit/nsfont/fontdescriptor)

# fontDescriptor (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The font descriptor object for the font.

## Declaration

```swift
var fontDescriptor: NSFontDescriptor { get }
```

<a id="Discussion"></a>

## Discussion

The font descriptor contains a mutable dictionary of optional attributes for creating an `NSFont` object. For more information about font descriptors, see [NSFontDescriptor](../nsfontdescriptor.md).

## See Also

### Getting Font Metrics and Information

- [pointSize](pointsize.md): The point size of the font.
- [coveredCharacterSet](coveredcharacterset.md): The character set containing all of the nominal characters that the font can render.
- [isFixedPitch](isfixedpitch.md): A Boolean value indicating whether all glyphs in the font have the same advancement.
- [mostCompatibleStringEncoding](mostcompatiblestringencoding.md): The string encoding that works best with the font.
- [Advanced Font Metrics](../advanced-font-metrics.md): Retrieve details about ascender and descender heights, glyph bounding rectangles, glyph advancements, and more.

# fontDescriptor (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The font descriptor object for the font.

## Declaration

```objectivec
@property (strong, readonly) NSFontDescriptor * fontDescriptor;
```

<a id="Discussion"></a>

## Discussion

The font descriptor contains a mutable dictionary of optional attributes for creating an `NSFont` object. For more information about font descriptors, see [NSFontDescriptor](../nsfontdescriptor.md).

## See Also

### Getting Font Metrics and Information

- [pointSize](pointsize.md): The point size of the font.
- [coveredCharacterSet](coveredcharacterset.md): The character set containing all of the nominal characters that the font can render.
- [fixedPitch](isfixedpitch.md): A Boolean value indicating whether all glyphs in the font have the same advancement.
- [mostCompatibleStringEncoding](mostcompatiblestringencoding.md): The string encoding that works best with the font.
- [Advanced Font Metrics](../advanced-font-metrics.md): Retrieve details about ascender and descender heights, glyph bounding rectangles, glyph advancements, and more.
