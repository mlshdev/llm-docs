> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/maximumadvancement](https://developer.apple.com/documentation/appkit/nsfont/maximumadvancement)

# maximumAdvancement (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The maximum advance of any of the font’s glyphs.

## Declaration

```swift
var maximumAdvancement: NSSize { get }
```

<a id="Discussion"></a>

## Discussion

The advancement is always either strictly horizontal or strictly vertical.

## See Also

### Related Documentation

- [advancement(forGlyph:)](advancement%28forglyph_%29.md): Deprecated. Returns the nominal spacing for the given glyph—the distance the current point moves after showing the glyph—accounting for the receiver’s size.

### Getting Glyph Advancements

- [advancement(forCGGlyph:)](advancement%28forcgglyph_%29.md): Returns the nominal spacing for the given glyph—the distance the current point moves after showing the glyph—accounting for the receiver’s size.
- [getAdvancements(\_:forCGGlyphs:count:)](getadvancements%28__forcgglyphs_count_%29.md): Returns an array of the advancements for the specified glyphs rendered by the receiver.

# maximumAdvancement (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The maximum advance of any of the font’s glyphs.

## Declaration

```objectivec
@property (readonly) NSSize maximumAdvancement;
```

<a id="Discussion"></a>

## Discussion

The advancement is always either strictly horizontal or strictly vertical.

## See Also

### Related Documentation

- [advancementForGlyph:](advancement%28forglyph_%29.md): Deprecated. Returns the nominal spacing for the given glyph—the distance the current point moves after showing the glyph—accounting for the receiver’s size.

### Getting Glyph Advancements

- [advancementForCGGlyph:](advancement%28forcgglyph_%29.md): Returns the nominal spacing for the given glyph—the distance the current point moves after showing the glyph—accounting for the receiver’s size.
- [getAdvancements:forCGGlyphs:count:](getadvancements%28__forcgglyphs_count_%29.md): Returns an array of the advancements for the specified glyphs rendered by the receiver.
