> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/boundingrect(forglyph:)](https://developer.apple.com/documentation/appkit/nsfont/boundingrect(forglyph:))

# boundingRect(forGlyph:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the bounding rectangle for the specified glyph, scaled to the receiver’s size.

> Use [boundingRect(forCGGlyph:)](boundingrect%28forcgglyph_%29.md) instead.

## Declaration

```swift
func boundingRect(forGlyph glyph: NSGlyph) -> NSRect
```

<a id="Discussion"></a>

## Discussion

Japanese fonts encoded with the scheme “EUC12-NJE-CFEncoding” do not have individual metrics or bounding boxes available for the glyphs above 127. For those glyphs, this method returns the bounding rectangle for the font instead.

## See Also

### Related Documentation

- [boundingRectForFont](boundingrectforfont.md): The font’s bounding rectangle, scaled to the font’s size.

### Instance Methods

- [advancement(forGlyph:)](advancement%28forglyph_%29.md): Deprecated. Returns the nominal spacing for the given glyph—the distance the current point moves after showing the glyph—accounting for the receiver’s size.
- [getAdvancements(\_:forGlyphs:count:)](getadvancements%28__forglyphs_count_%29.md): Deprecated. Returns an array of the advancements for the specified glyphs rendered by the receiver.
- [getAdvancements(\_:forPackedGlyphs:length:)](getadvancements%28__forpackedglyphs_length_%29.md): Deprecated. Returns an array of the advancements for the specified packed glyphs and rendered by the receiver.
- [getBoundingRects(\_:forGlyphs:count:)](getboundingrects%28__forglyphs_count_%29.md): Deprecated. Returns an array of the bounding rectangles for the specified glyphs rendered by the receiver.
- [glyph(withName:)](glyph%28withname_%29.md): Returns the named encoded glyph, or –1 if the receiver contains no such glyph.
- [screenFont(with:)](screenfont%28with_%29.md): Returns a bitmapped screen font, when sent to a font object representing a scalable PostScript font, with the specified rendering mode, matching the receiver in typeface and matrix (or size), or `nil` if such a font can’t be found.
- [withSize(\_:)](withsize%28__%29.md)

# boundingRectForGlyph: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the bounding rectangle for the specified glyph, scaled to the receiver’s size.

> Use [boundingRectForCGGlyph:](boundingrect%28forcgglyph_%29.md) instead.

## Declaration

```objectivec
- (NSRect) boundingRectForGlyph:(NSGlyph) glyph;
```

<a id="Discussion"></a>

## Discussion

Japanese fonts encoded with the scheme “EUC12-NJE-CFEncoding” do not have individual metrics or bounding boxes available for the glyphs above 127. For those glyphs, this method returns the bounding rectangle for the font instead.

## See Also

### Related Documentation

- [boundingRectForFont](boundingrectforfont.md): The font’s bounding rectangle, scaled to the font’s size.

### Instance Methods

- [advancementForGlyph:](advancement%28forglyph_%29.md): Deprecated. Returns the nominal spacing for the given glyph—the distance the current point moves after showing the glyph—accounting for the receiver’s size.
- [getAdvancements:forGlyphs:count:](getadvancements%28__forglyphs_count_%29.md): Deprecated. Returns an array of the advancements for the specified glyphs rendered by the receiver.
- [getAdvancements:forPackedGlyphs:length:](getadvancements%28__forpackedglyphs_length_%29.md): Deprecated. Returns an array of the advancements for the specified packed glyphs and rendered by the receiver.
- [getBoundingRects:forGlyphs:count:](getboundingrects%28__forglyphs_count_%29.md): Deprecated. Returns an array of the bounding rectangles for the specified glyphs rendered by the receiver.
- [glyphWithName:](glyph%28withname_%29.md): Returns the named encoded glyph, or –1 if the receiver contains no such glyph.
- [screenFontWithRenderingMode:](screenfont%28with_%29.md): Returns a bitmapped screen font, when sent to a font object representing a scalable PostScript font, with the specified rendering mode, matching the receiver in typeface and matrix (or size), or `nil` if such a font can’t be found.
- [fontWithSize:](withsize%28__%29.md)
