> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/advancement(forcgglyph:)](https://developer.apple.com/documentation/appkit/nsfont/advancement(forcgglyph:))

# advancement(forCGGlyph:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Returns the nominal spacing for the given glyph—the distance the current point moves after showing the glyph—accounting for the receiver’s size.

## Declaration

```swift
func advancement(forCGGlyph glyph: CGGlyph) -> NSSize
```

## Parameters

- `glyph`: The glyph whose advancement is returned.

<a id="return-value"></a>

## Return Value

The advancement spacing in points.

<a id="Discussion"></a>

## Discussion

The spacing is given according to the glyph’s movement direction, which is either strictly horizontal or strictly vertical.

## See Also

### Getting Glyph Advancements

- [maximumAdvancement](maximumadvancement.md): The maximum advance of any of the font’s glyphs.
- [getAdvancements(\_:forCGGlyphs:count:)](getadvancements%28__forcgglyphs_count_%29.md): Returns an array of the advancements for the specified glyphs rendered by the receiver.

# advancementForCGGlyph: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Returns the nominal spacing for the given glyph—the distance the current point moves after showing the glyph—accounting for the receiver’s size.

## Declaration

```objectivec
- (NSSize) advancementForCGGlyph:(CGGlyph) glyph;
```

## Parameters

- `glyph`: The glyph whose advancement is returned.

<a id="return-value"></a>

## Return Value

The advancement spacing in points.

<a id="Discussion"></a>

## Discussion

The spacing is given according to the glyph’s movement direction, which is either strictly horizontal or strictly vertical.

## See Also

### Getting Glyph Advancements

- [maximumAdvancement](maximumadvancement.md): The maximum advance of any of the font’s glyphs.
- [getAdvancements:forCGGlyphs:count:](getadvancements%28__forcgglyphs_count_%29.md): Returns an array of the advancements for the specified glyphs rendered by the receiver.
