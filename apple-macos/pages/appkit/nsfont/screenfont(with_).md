> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/screenfont(with:)](https://developer.apple.com/documentation/appkit/nsfont/screenfont(with:))

# screenFont(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a bitmapped screen font, when sent to a font object representing a scalable PostScript font, with the specified rendering mode, matching the receiver in typeface and matrix (or size), or `nil` if such a font can’t be found.

## Declaration

```swift
func screenFont(with renderingMode: NSFontRenderingMode) -> NSFont
```

<a id="Discussion"></a>

## Discussion

For valid rendering modes, see [NSFontRenderingMode](../nsfontrenderingmode.md).

Screen fonts are for direct use with the window server only. Never use them with Application Kit objects, such as in `setFont:` methods. Internally, the Application Kit automatically uses the corresponding screen font for a font object as long as the view is not rotated or scaled.

## See Also

### Related Documentation

- [screen](screen.md): The bitmapped screen font for the current font.
- [printer](printer.md): The scalable PostScript font corresponding to current font.

### Instance Methods

- [advancement(forGlyph:)](advancement%28forglyph_%29.md): Deprecated. Returns the nominal spacing for the given glyph—the distance the current point moves after showing the glyph—accounting for the receiver’s size.
- [boundingRect(forGlyph:)](boundingrect%28forglyph_%29.md): Deprecated. Returns the bounding rectangle for the specified glyph, scaled to the receiver’s size.
- [getAdvancements(\_:forGlyphs:count:)](getadvancements%28__forglyphs_count_%29.md): Deprecated. Returns an array of the advancements for the specified glyphs rendered by the receiver.
- [getAdvancements(\_:forPackedGlyphs:length:)](getadvancements%28__forpackedglyphs_length_%29.md): Deprecated. Returns an array of the advancements for the specified packed glyphs and rendered by the receiver.
- [getBoundingRects(\_:forGlyphs:count:)](getboundingrects%28__forglyphs_count_%29.md): Deprecated. Returns an array of the bounding rectangles for the specified glyphs rendered by the receiver.
- [glyph(withName:)](glyph%28withname_%29.md): Returns the named encoded glyph, or –1 if the receiver contains no such glyph.
- [withSize(\_:)](withsize%28__%29.md)

# screenFontWithRenderingMode: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a bitmapped screen font, when sent to a font object representing a scalable PostScript font, with the specified rendering mode, matching the receiver in typeface and matrix (or size), or `nil` if such a font can’t be found.

## Declaration

```objectivec
- (NSFont *) screenFontWithRenderingMode:(NSFontRenderingMode) renderingMode;
```

<a id="Discussion"></a>

## Discussion

For valid rendering modes, see [NSFontRenderingMode](../nsfontrenderingmode.md).

Screen fonts are for direct use with the window server only. Never use them with Application Kit objects, such as in `setFont:` methods. Internally, the Application Kit automatically uses the corresponding screen font for a font object as long as the view is not rotated or scaled.

## See Also

### Related Documentation

- [screenFont](screen.md): The bitmapped screen font for the current font.
- [printerFont](printer.md): The scalable PostScript font corresponding to current font.

### Instance Methods

- [advancementForGlyph:](advancement%28forglyph_%29.md): Deprecated. Returns the nominal spacing for the given glyph—the distance the current point moves after showing the glyph—accounting for the receiver’s size.
- [boundingRectForGlyph:](boundingrect%28forglyph_%29.md): Deprecated. Returns the bounding rectangle for the specified glyph, scaled to the receiver’s size.
- [getAdvancements:forGlyphs:count:](getadvancements%28__forglyphs_count_%29.md): Deprecated. Returns an array of the advancements for the specified glyphs rendered by the receiver.
- [getAdvancements:forPackedGlyphs:length:](getadvancements%28__forpackedglyphs_length_%29.md): Deprecated. Returns an array of the advancements for the specified packed glyphs and rendered by the receiver.
- [getBoundingRects:forGlyphs:count:](getboundingrects%28__forglyphs_count_%29.md): Deprecated. Returns an array of the bounding rectangles for the specified glyphs rendered by the receiver.
- [glyphWithName:](glyph%28withname_%29.md): Returns the named encoded glyph, or –1 if the receiver contains no such glyph.
- [fontWithSize:](withsize%28__%29.md)
