> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/advancement(forglyph:)](https://developer.apple.com/documentation/appkit/nsfont/advancement(forglyph:))

# advancement(forGlyph:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the nominal spacing for the given glyph—the distance the current point moves after showing the glyph—accounting for the receiver’s size.

> Use [advancement(forCGGlyph:)](advancement%28forcgglyph_%29.md) instead.

## Declaration

```swift
func advancement(forGlyph glyph: NSGlyph) -> NSSize
```

## Parameters

- `glyph`: The glyph whose advancement is returned.

<a id="return-value"></a>

## Return Value

The advancement spacing in points.

<a id="Discussion"></a>

## Discussion

This spacing is given according to the glyph’s movement direction, which is either strictly horizontal or strictly vertical.

## See Also

### Related Documentation

- [maximumAdvancement](maximumadvancement.md): The maximum advance of any of the font’s glyphs.

### Instance Methods

- [boundingRect(forGlyph:)](boundingrect%28forglyph_%29.md): Deprecated. Returns the bounding rectangle for the specified glyph, scaled to the receiver’s size.
- [getAdvancements(\_:forGlyphs:count:)](getadvancements%28__forglyphs_count_%29.md): Deprecated. Returns an array of the advancements for the specified glyphs rendered by the receiver.
- [getAdvancements(\_:forPackedGlyphs:length:)](getadvancements%28__forpackedglyphs_length_%29.md): Deprecated. Returns an array of the advancements for the specified packed glyphs and rendered by the receiver.
- [getBoundingRects(\_:forGlyphs:count:)](getboundingrects%28__forglyphs_count_%29.md): Deprecated. Returns an array of the bounding rectangles for the specified glyphs rendered by the receiver.
- [glyph(withName:)](glyph%28withname_%29.md): Returns the named encoded glyph, or –1 if the receiver contains no such glyph.
- [screenFont(with:)](screenfont%28with_%29.md): Returns a bitmapped screen font, when sent to a font object representing a scalable PostScript font, with the specified rendering mode, matching the receiver in typeface and matrix (or size), or `nil` if such a font can’t be found.
- [withSize(\_:)](withsize%28__%29.md)

# advancementForGlyph: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the nominal spacing for the given glyph—the distance the current point moves after showing the glyph—accounting for the receiver’s size.

> Use [advancementForCGGlyph:](advancement%28forcgglyph_%29.md) instead.

## Declaration

```objectivec
- (NSSize) advancementForGlyph:(NSGlyph) glyph;
```

## Parameters

- `glyph`: The glyph whose advancement is returned.

<a id="return-value"></a>

## Return Value

The advancement spacing in points.

<a id="Discussion"></a>

## Discussion

This spacing is given according to the glyph’s movement direction, which is either strictly horizontal or strictly vertical.

## See Also

### Related Documentation

- [maximumAdvancement](maximumadvancement.md): The maximum advance of any of the font’s glyphs.

### Instance Methods

- [boundingRectForGlyph:](boundingrect%28forglyph_%29.md): Deprecated. Returns the bounding rectangle for the specified glyph, scaled to the receiver’s size.
- [getAdvancements:forGlyphs:count:](getadvancements%28__forglyphs_count_%29.md): Deprecated. Returns an array of the advancements for the specified glyphs rendered by the receiver.
- [getAdvancements:forPackedGlyphs:length:](getadvancements%28__forpackedglyphs_length_%29.md): Deprecated. Returns an array of the advancements for the specified packed glyphs and rendered by the receiver.
- [getBoundingRects:forGlyphs:count:](getboundingrects%28__forglyphs_count_%29.md): Deprecated. Returns an array of the bounding rectangles for the specified glyphs rendered by the receiver.
- [glyphWithName:](glyph%28withname_%29.md): Returns the named encoded glyph, or –1 if the receiver contains no such glyph.
- [screenFontWithRenderingMode:](screenfont%28with_%29.md): Returns a bitmapped screen font, when sent to a font object representing a scalable PostScript font, with the specified rendering mode, matching the receiver in typeface and matrix (or size), or `nil` if such a font can’t be found.
- [fontWithSize:](withsize%28__%29.md)
