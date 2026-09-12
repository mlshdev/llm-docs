> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/glyph(withname:)](https://developer.apple.com/documentation/appkit/nsfont/glyph(withname:))

# glyph(withName:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the named encoded glyph, or –1 if the receiver contains no such glyph.

## Declaration

```swift
func glyph(withName name: String) -> NSGlyph
```

## Parameters

- `name`: The name of the glyph.

<a id="return-value"></a>

## Return Value

The named encoded glyph.

<a id="Discussion"></a>

## Discussion

Returns –1 if the glyph named `glyphName` isn’t encoded.

Glyph names in fonts do not always accurately identify the glyph. The layout manager, an instance of [NSLayoutManager](../nslayoutmanager.md), finds the correspondence between characters and glyphs. See [NSLayoutManager](../nslayoutmanager.md) for more information.

## See Also

### Instance Methods

- [advancement(forGlyph:)](advancement%28forglyph_%29.md): Deprecated. Returns the nominal spacing for the given glyph—the distance the current point moves after showing the glyph—accounting for the receiver’s size.
- [boundingRect(forGlyph:)](boundingrect%28forglyph_%29.md): Deprecated. Returns the bounding rectangle for the specified glyph, scaled to the receiver’s size.
- [getAdvancements(\_:forGlyphs:count:)](getadvancements%28__forglyphs_count_%29.md): Deprecated. Returns an array of the advancements for the specified glyphs rendered by the receiver.
- [getAdvancements(\_:forPackedGlyphs:length:)](getadvancements%28__forpackedglyphs_length_%29.md): Deprecated. Returns an array of the advancements for the specified packed glyphs and rendered by the receiver.
- [getBoundingRects(\_:forGlyphs:count:)](getboundingrects%28__forglyphs_count_%29.md): Deprecated. Returns an array of the bounding rectangles for the specified glyphs rendered by the receiver.
- [screenFont(with:)](screenfont%28with_%29.md): Returns a bitmapped screen font, when sent to a font object representing a scalable PostScript font, with the specified rendering mode, matching the receiver in typeface and matrix (or size), or `nil` if such a font can’t be found.
- [withSize(\_:)](withsize%28__%29.md)

# glyphWithName: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the named encoded glyph, or –1 if the receiver contains no such glyph.

## Declaration

```objectivec
- (NSGlyph) glyphWithName:(NSString *) name;
```

## Parameters

- `name`: The name of the glyph.

<a id="return-value"></a>

## Return Value

The named encoded glyph.

<a id="Discussion"></a>

## Discussion

Returns –1 if the glyph named `glyphName` isn’t encoded.

Glyph names in fonts do not always accurately identify the glyph. The layout manager, an instance of [NSLayoutManager](../nslayoutmanager.md), finds the correspondence between characters and glyphs. See [NSLayoutManager](../nslayoutmanager.md) for more information.

## See Also

### Instance Methods

- [advancementForGlyph:](advancement%28forglyph_%29.md): Deprecated. Returns the nominal spacing for the given glyph—the distance the current point moves after showing the glyph—accounting for the receiver’s size.
- [boundingRectForGlyph:](boundingrect%28forglyph_%29.md): Deprecated. Returns the bounding rectangle for the specified glyph, scaled to the receiver’s size.
- [getAdvancements:forGlyphs:count:](getadvancements%28__forglyphs_count_%29.md): Deprecated. Returns an array of the advancements for the specified glyphs rendered by the receiver.
- [getAdvancements:forPackedGlyphs:length:](getadvancements%28__forpackedglyphs_length_%29.md): Deprecated. Returns an array of the advancements for the specified packed glyphs and rendered by the receiver.
- [getBoundingRects:forGlyphs:count:](getboundingrects%28__forglyphs_count_%29.md): Deprecated. Returns an array of the bounding rectangles for the specified glyphs rendered by the receiver.
- [screenFontWithRenderingMode:](screenfont%28with_%29.md): Returns a bitmapped screen font, when sent to a font object representing a scalable PostScript font, with the specified rendering mode, matching the receiver in typeface and matrix (or size), or `nil` if such a font can’t be found.
- [fontWithSize:](withsize%28__%29.md)
