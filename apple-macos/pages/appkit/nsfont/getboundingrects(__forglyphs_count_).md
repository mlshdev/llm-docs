> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/getboundingrects(_:forglyphs:count:)](https://developer.apple.com/documentation/appkit/nsfont/getboundingrects(_:forglyphs:count:))

# getBoundingRects(\_:forGlyphs:count:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns an array of the bounding rectangles for the specified glyphs rendered by the receiver.

> Use [getBoundingRects(\_:forCGGlyphs:count:)](getboundingrects%28__forcgglyphs_count_%29.md) instead.

## Declaration

```swift
func getBoundingRects(_ bounds: NSRectArray, forGlyphs glyphs: UnsafePointer<NSGlyph>, count glyphCount: Int)
```

<a id="Discussion"></a>

## Discussion

Returns in `bounds` an array of the bounding rectangles for the glyphs specified by `glyphs` and rendered by the receiver. The  `glyphCount` must specify the count of glyphs passed in `glyphs`.

## See Also

### Related Documentation

- [boundingRectForFont](boundingrectforfont.md): The font’s bounding rectangle, scaled to the font’s size.

### Instance Methods

- [advancement(forGlyph:)](advancement%28forglyph_%29.md): Deprecated. Returns the nominal spacing for the given glyph—the distance the current point moves after showing the glyph—accounting for the receiver’s size.
- [boundingRect(forGlyph:)](boundingrect%28forglyph_%29.md): Deprecated. Returns the bounding rectangle for the specified glyph, scaled to the receiver’s size.
- [getAdvancements(\_:forGlyphs:count:)](getadvancements%28__forglyphs_count_%29.md): Deprecated. Returns an array of the advancements for the specified glyphs rendered by the receiver.
- [getAdvancements(\_:forPackedGlyphs:length:)](getadvancements%28__forpackedglyphs_length_%29.md): Deprecated. Returns an array of the advancements for the specified packed glyphs and rendered by the receiver.
- [glyph(withName:)](glyph%28withname_%29.md): Returns the named encoded glyph, or –1 if the receiver contains no such glyph.
- [screenFont(with:)](screenfont%28with_%29.md): Returns a bitmapped screen font, when sent to a font object representing a scalable PostScript font, with the specified rendering mode, matching the receiver in typeface and matrix (or size), or `nil` if such a font can’t be found.
- [withSize(\_:)](withsize%28__%29.md)

# getBoundingRects:forGlyphs:count: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns an array of the bounding rectangles for the specified glyphs rendered by the receiver.

> Use [getBoundingRects:forCGGlyphs:count:](getboundingrects%28__forcgglyphs_count_%29.md) instead.

## Declaration

```objectivec
- (void) getBoundingRects:(NSRectArray) bounds forGlyphs:(const NSGlyph *) glyphs count:(NSUInteger) glyphCount;
```

<a id="Discussion"></a>

## Discussion

Returns in `bounds` an array of the bounding rectangles for the glyphs specified by `glyphs` and rendered by the receiver. The  `glyphCount` must specify the count of glyphs passed in `glyphs`.

## See Also

### Related Documentation

- [boundingRectForFont](boundingrectforfont.md): The font’s bounding rectangle, scaled to the font’s size.

### Instance Methods

- [advancementForGlyph:](advancement%28forglyph_%29.md): Deprecated. Returns the nominal spacing for the given glyph—the distance the current point moves after showing the glyph—accounting for the receiver’s size.
- [boundingRectForGlyph:](boundingrect%28forglyph_%29.md): Deprecated. Returns the bounding rectangle for the specified glyph, scaled to the receiver’s size.
- [getAdvancements:forGlyphs:count:](getadvancements%28__forglyphs_count_%29.md): Deprecated. Returns an array of the advancements for the specified glyphs rendered by the receiver.
- [getAdvancements:forPackedGlyphs:length:](getadvancements%28__forpackedglyphs_length_%29.md): Deprecated. Returns an array of the advancements for the specified packed glyphs and rendered by the receiver.
- [glyphWithName:](glyph%28withname_%29.md): Returns the named encoded glyph, or –1 if the receiver contains no such glyph.
- [screenFontWithRenderingMode:](screenfont%28with_%29.md): Returns a bitmapped screen font, when sent to a font object representing a scalable PostScript font, with the specified rendering mode, matching the receiver in typeface and matrix (or size), or `nil` if such a font can’t be found.
- [fontWithSize:](withsize%28__%29.md)
