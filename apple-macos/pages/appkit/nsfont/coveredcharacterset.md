> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/coveredcharacterset](https://developer.apple.com/documentation/appkit/nsfont/coveredcharacterset)

# coveredCharacterSet (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The character set containing all of the nominal characters that the font can render.

## Declaration

```swift
var coveredCharacterSet: CharacterSet { get }
```

<a id="Discussion"></a>

## Discussion

The nominal character set is all of the entries in the font’s `cmap` table.

The number of glyphs supported by a given font is often larger than the number of characters contained in the character set returned by this method. This is because characters and glyphs have a many-to-many mapping, rather than a strict one-to-one correspondence. In some cases a character may be represented by multiple glyphs, such as an “é” which may be an “e” glyph combined with an acute accent glyph “´”. In other cases, a single glyph may represent multiple characters, as in the case of a ligature, or joined letter. For more information, see [NSFont](../nsfont.md).

## See Also

### Getting Font Metrics and Information

- [pointSize](pointsize.md): The point size of the font.
- [fontDescriptor](fontdescriptor.md): The font descriptor object for the font.
- [isFixedPitch](isfixedpitch.md): A Boolean value indicating whether all glyphs in the font have the same advancement.
- [mostCompatibleStringEncoding](mostcompatiblestringencoding.md): The string encoding that works best with the font.
- [Advanced Font Metrics](../advanced-font-metrics.md): Retrieve details about ascender and descender heights, glyph bounding rectangles, glyph advancements, and more.

# coveredCharacterSet (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The character set containing all of the nominal characters that the font can render.

## Declaration

```objectivec
@property (strong, readonly) NSCharacterSet * coveredCharacterSet;
```

<a id="Discussion"></a>

## Discussion

The nominal character set is all of the entries in the font’s `cmap` table.

The number of glyphs supported by a given font is often larger than the number of characters contained in the character set returned by this method. This is because characters and glyphs have a many-to-many mapping, rather than a strict one-to-one correspondence. In some cases a character may be represented by multiple glyphs, such as an “é” which may be an “e” glyph combined with an acute accent glyph “´”. In other cases, a single glyph may represent multiple characters, as in the case of a ligature, or joined letter. For more information, see [NSFont](../nsfont.md).

## See Also

### Getting Font Metrics and Information

- [pointSize](pointsize.md): The point size of the font.
- [fontDescriptor](fontdescriptor.md): The font descriptor object for the font.
- [fixedPitch](isfixedpitch.md): A Boolean value indicating whether all glyphs in the font have the same advancement.
- [mostCompatibleStringEncoding](mostcompatiblestringencoding.md): The string encoding that works best with the font.
- [Advanced Font Metrics](../advanced-font-metrics.md): Retrieve details about ascender and descender heights, glyph bounding rectangles, glyph advancements, and more.
