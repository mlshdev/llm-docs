> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/isfixedpitch](https://developer.apple.com/documentation/appkit/nsfont/isfixedpitch)

# isFixedPitch (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether all glyphs in the font have the same advancement.

## Declaration

```swift
var isFixedPitch: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when all glyphs have the same advancement or [false](https://developer.apple.com/documentation/swift/false) when they do not. Some Japanese fonts encoded with the scheme “EUC12-NJE-CFEncoding” return that they have the same advancement, but actually encode glyphs with one of two advancements, for historical compatibility. You may need to handle such fonts specially for some applications.

## See Also

### Related Documentation

- [advancement(forGlyph:)](advancement%28forglyph_%29.md): Deprecated. Returns the nominal spacing for the given glyph—the distance the current point moves after showing the glyph—accounting for the receiver’s size.

### Getting Font Metrics and Information

- [pointSize](pointsize.md): The point size of the font.
- [coveredCharacterSet](coveredcharacterset.md): The character set containing all of the nominal characters that the font can render.
- [fontDescriptor](fontdescriptor.md): The font descriptor object for the font.
- [mostCompatibleStringEncoding](mostcompatiblestringencoding.md): The string encoding that works best with the font.
- [Advanced Font Metrics](../advanced-font-metrics.md): Retrieve details about ascender and descender heights, glyph bounding rectangles, glyph advancements, and more.

# fixedPitch (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether all glyphs in the font have the same advancement.

## Declaration

```objectivec
@property (readonly, getter=isFixedPitch) BOOL fixedPitch;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when all glyphs have the same advancement or [false](https://developer.apple.com/documentation/swift/false) when they do not. Some Japanese fonts encoded with the scheme “EUC12-NJE-CFEncoding” return that they have the same advancement, but actually encode glyphs with one of two advancements, for historical compatibility. You may need to handle such fonts specially for some applications.

## See Also

### Related Documentation

- [advancementForGlyph:](advancement%28forglyph_%29.md): Deprecated. Returns the nominal spacing for the given glyph—the distance the current point moves after showing the glyph—accounting for the receiver’s size.

### Getting Font Metrics and Information

- [pointSize](pointsize.md): The point size of the font.
- [coveredCharacterSet](coveredcharacterset.md): The character set containing all of the nominal characters that the font can render.
- [fontDescriptor](fontdescriptor.md): The font descriptor object for the font.
- [mostCompatibleStringEncoding](mostcompatiblestringencoding.md): The string encoding that works best with the font.
- [Advanced Font Metrics](../advanced-font-metrics.md): Retrieve details about ascender and descender heights, glyph bounding rectangles, glyph advancements, and more.
