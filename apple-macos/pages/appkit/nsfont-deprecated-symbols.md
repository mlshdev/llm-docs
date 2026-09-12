> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont-deprecated-symbols](https://developer.apple.com/documentation/appkit/nsfont-deprecated-symbols)

# Deprecated Symbols (Swift)

**Framework:** AppKit  
**Kind:** API Collection

Review unsupported symbols and their replacements.

## Topics

### Methods

- [getAdvancements(\_:forGlyphs:count:)](nsfont/getadvancements%28__forglyphs_count_%29.md): Deprecated. Returns an array of the advancements for the specified glyphs rendered by the receiver.
- [getAdvancements(\_:forPackedGlyphs:length:)](nsfont/getadvancements%28__forpackedglyphs_length_%29.md): Deprecated. Returns an array of the advancements for the specified packed glyphs and rendered by the receiver.
- [advancement(forGlyph:)](nsfont/advancement%28forglyph_%29.md): Deprecated. Returns the nominal spacing for the given glyph—the distance the current point moves after showing the glyph—accounting for the receiver’s size.
- [boundingRect(forGlyph:)](nsfont/boundingrect%28forglyph_%29.md): Deprecated. Returns the bounding rectangle for the specified glyph, scaled to the receiver’s size.
- [getBoundingRects(\_:forGlyphs:count:)](nsfont/getboundingrects%28__forglyphs_count_%29.md): Deprecated. Returns an array of the bounding rectangles for the specified glyphs rendered by the receiver.
- [glyph(withName:)](nsfont/glyph%28withname_%29.md): Returns the named encoded glyph, or –1 if the receiver contains no such glyph.
- [screenFont(with:)](nsfont/screenfont%28with_%29.md): Returns a bitmapped screen font, when sent to a font object representing a scalable PostScript font, with the specified rendering mode, matching the receiver in typeface and matrix (or size), or `nil` if such a font can’t be found.

### Properties

- [renderingMode](nsfont/renderingmode.md): The rendering mode of the font.
- [printer](nsfont/printer.md): The scalable PostScript font corresponding to current font.
- [screen](nsfont/screen.md): The bitmapped screen font for the current font.

### Types

- [NSMultibyteGlyphPacking](nsmultibyteglyphpacking.md): Deprecated. A constant for glyph packing.
- [NSFontRenderingMode](nsfontrenderingmode.md): The font rendering mode.

# Deprecated Symbols (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

Review unsupported symbols and their replacements.

## Topics

### Methods

- [getAdvancements:forGlyphs:count:](nsfont/getadvancements%28__forglyphs_count_%29.md): Deprecated. Returns an array of the advancements for the specified glyphs rendered by the receiver.
- [getAdvancements:forPackedGlyphs:length:](nsfont/getadvancements%28__forpackedglyphs_length_%29.md): Deprecated. Returns an array of the advancements for the specified packed glyphs and rendered by the receiver.
- [advancementForGlyph:](nsfont/advancement%28forglyph_%29.md): Deprecated. Returns the nominal spacing for the given glyph—the distance the current point moves after showing the glyph—accounting for the receiver’s size.
- [boundingRectForGlyph:](nsfont/boundingrect%28forglyph_%29.md): Deprecated. Returns the bounding rectangle for the specified glyph, scaled to the receiver’s size.
- [getBoundingRects:forGlyphs:count:](nsfont/getboundingrects%28__forglyphs_count_%29.md): Deprecated. Returns an array of the bounding rectangles for the specified glyphs rendered by the receiver.
- [glyphWithName:](nsfont/glyph%28withname_%29.md): Returns the named encoded glyph, or –1 if the receiver contains no such glyph.
- [screenFontWithRenderingMode:](nsfont/screenfont%28with_%29.md): Returns a bitmapped screen font, when sent to a font object representing a scalable PostScript font, with the specified rendering mode, matching the receiver in typeface and matrix (or size), or `nil` if such a font can’t be found.

### Properties

- [renderingMode](nsfont/renderingmode.md): The rendering mode of the font.
- [printerFont](nsfont/printer.md): The scalable PostScript font corresponding to current font.
- [screenFont](nsfont/screen.md): The bitmapped screen font for the current font.

### Types

- [NSMultibyteGlyphPacking](nsmultibyteglyphpacking.md): Deprecated. A constant for glyph packing.
- [NSFontRenderingMode](nsfontrenderingmode.md): The font rendering mode.
