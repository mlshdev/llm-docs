> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/getadvancements(_:forcgglyphs:count:)](https://developer.apple.com/documentation/appkit/nsfont/getadvancements(_:forcgglyphs:count:))

# getAdvancements(\_:forCGGlyphs:count:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Returns an array of the advancements for the specified glyphs rendered by the receiver.

## Declaration

```swift
func getAdvancements(_ advancements: NSSizeArray, forCGGlyphs glyphs: UnsafePointer<CGGlyph>, count glyphCount: Int)
```

<a id="Discussion"></a>

## Discussion

Returns in `advancements` an array of the advancements for the glyphs specified by `glyphs` and rendered by the receiver. The `glyphCount` value must specify the count of glyphs passed in `glyphs`.

## See Also

### Getting Glyph Advancements

- [maximumAdvancement](maximumadvancement.md): The maximum advance of any of the font’s glyphs.
- [advancement(forCGGlyph:)](advancement%28forcgglyph_%29.md): Returns the nominal spacing for the given glyph—the distance the current point moves after showing the glyph—accounting for the receiver’s size.

# getAdvancements:forCGGlyphs:count: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Returns an array of the advancements for the specified glyphs rendered by the receiver.

## Declaration

```objectivec
- (void) getAdvancements:(NSSizeArray) advancements forCGGlyphs:(const CGGlyph *) glyphs count:(NSUInteger) glyphCount;
```

<a id="Discussion"></a>

## Discussion

Returns in `advancements` an array of the advancements for the glyphs specified by `glyphs` and rendered by the receiver. The `glyphCount` value must specify the count of glyphs passed in `glyphs`.

## See Also

### Getting Glyph Advancements

- [maximumAdvancement](maximumadvancement.md): The maximum advance of any of the font’s glyphs.
- [advancementForCGGlyph:](advancement%28forcgglyph_%29.md): Returns the nominal spacing for the given glyph—the distance the current point moves after showing the glyph—accounting for the receiver’s size.
