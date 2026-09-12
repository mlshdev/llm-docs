> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/advanced-font-metrics](https://developer.apple.com/documentation/appkit/advanced-font-metrics)

# Advanced Font Metrics (Swift)

**Framework:** AppKit  
**Kind:** API Collection

Retrieve details about ascender and descender heights, glyph bounding rectangles, glyph advancements, and more.

## Topics

### Getting the Font Metrics

- [ascender](nsfont/ascender.md): The top y-coordinate, offset from the baseline, of the font’s longest ascender.
- [descender](nsfont/descender.md): The bottom y-coordinate, offset from the baseline, of the font’s longest descender.
- [capHeight](nsfont/capheight.md): The cap height of the font.
- [leading](nsfont/leading.md): The leading value of the font.
- [xHeight](nsfont/xheight.md): The x-height of the font.

### Getting Underline and Italic Metrics

- [italicAngle](nsfont/italicangle.md): The number of degrees that the font is slanted counterclockwise from the vertical.
- [underlinePosition](nsfont/underlineposition.md): The baseline offset to use when drawing underlines with the font.
- [underlineThickness](nsfont/underlinethickness.md): The thickness to use when drawing underlines with the font.

### Getting Bounding Rectangles

- [boundingRectForFont](nsfont/boundingrectforfont.md): The font’s bounding rectangle, scaled to the font’s size.
- [boundingRect(forCGGlyph:)](nsfont/boundingrect%28forcgglyph_%29.md): Returns the bounding rectangle for the specified glyph, scaled to the receiver’s size.
- [getBoundingRects(\_:forCGGlyphs:count:)](nsfont/getboundingrects%28__forcgglyphs_count_%29.md): Returns an array of the bounding rectangles for the specified glyphs rendered by the receiver.

### Getting Glyph Advancements

- [maximumAdvancement](nsfont/maximumadvancement.md): The maximum advance of any of the font’s glyphs.
- [advancement(forCGGlyph:)](nsfont/advancement%28forcgglyph_%29.md): Returns the nominal spacing for the given glyph—the distance the current point moves after showing the glyph—accounting for the receiver’s size.
- [getAdvancements(\_:forCGGlyphs:count:)](nsfont/getadvancements%28__forcgglyphs_count_%29.md): Returns an array of the advancements for the specified glyphs rendered by the receiver.

### Getting the Font Matrices

- [matrix](nsfont/matrix.md): The transformation matrix associated with the font.
- [textTransform](nsfont/texttransform.md): The current transformation matrix of the font.
- [identityMatrix](nsfont/identitymatrix.md): The identify matrix for the font.

## See Also

### Getting Font Metrics and Information

- [pointSize](nsfont/pointsize.md): The point size of the font.
- [coveredCharacterSet](nsfont/coveredcharacterset.md): The character set containing all of the nominal characters that the font can render.
- [fontDescriptor](nsfont/fontdescriptor.md): The font descriptor object for the font.
- [isFixedPitch](nsfont/isfixedpitch.md): A Boolean value indicating whether all glyphs in the font have the same advancement.
- [mostCompatibleStringEncoding](nsfont/mostcompatiblestringencoding.md): The string encoding that works best with the font.

# Advanced Font Metrics (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

Retrieve details about ascender and descender heights, glyph bounding rectangles, glyph advancements, and more.

## Topics

### Getting the Font Metrics

- [ascender](nsfont/ascender.md): The top y-coordinate, offset from the baseline, of the font’s longest ascender.
- [descender](nsfont/descender.md): The bottom y-coordinate, offset from the baseline, of the font’s longest descender.
- [capHeight](nsfont/capheight.md): The cap height of the font.
- [leading](nsfont/leading.md): The leading value of the font.
- [xHeight](nsfont/xheight.md): The x-height of the font.

### Getting Underline and Italic Metrics

- [italicAngle](nsfont/italicangle.md): The number of degrees that the font is slanted counterclockwise from the vertical.
- [underlinePosition](nsfont/underlineposition.md): The baseline offset to use when drawing underlines with the font.
- [underlineThickness](nsfont/underlinethickness.md): The thickness to use when drawing underlines with the font.

### Getting Bounding Rectangles

- [boundingRectForFont](nsfont/boundingrectforfont.md): The font’s bounding rectangle, scaled to the font’s size.
- [boundingRectForCGGlyph:](nsfont/boundingrect%28forcgglyph_%29.md): Returns the bounding rectangle for the specified glyph, scaled to the receiver’s size.
- [getBoundingRects:forCGGlyphs:count:](nsfont/getboundingrects%28__forcgglyphs_count_%29.md): Returns an array of the bounding rectangles for the specified glyphs rendered by the receiver.

### Getting Glyph Advancements

- [maximumAdvancement](nsfont/maximumadvancement.md): The maximum advance of any of the font’s glyphs.
- [advancementForCGGlyph:](nsfont/advancement%28forcgglyph_%29.md): Returns the nominal spacing for the given glyph—the distance the current point moves after showing the glyph—accounting for the receiver’s size.
- [getAdvancements:forCGGlyphs:count:](nsfont/getadvancements%28__forcgglyphs_count_%29.md): Returns an array of the advancements for the specified glyphs rendered by the receiver.

### Getting the Font Matrices

- [matrix](nsfont/matrix.md): The transformation matrix associated with the font.
- [textTransform](nsfont/texttransform.md): The current transformation matrix of the font.
- [NSFontIdentityMatrix](nsfont/identitymatrix.md): The identify matrix for the font.

## See Also

### Getting Font Metrics and Information

- [pointSize](nsfont/pointsize.md): The point size of the font.
- [coveredCharacterSet](nsfont/coveredcharacterset.md): The character set containing all of the nominal characters that the font can render.
- [fontDescriptor](nsfont/fontdescriptor.md): The font descriptor object for the font.
- [fixedPitch](nsfont/isfixedpitch.md): A Boolean value indicating whether all glyphs in the font have the same advancement.
- [mostCompatibleStringEncoding](nsfont/mostcompatiblestringencoding.md): The string encoding that works best with the font.
