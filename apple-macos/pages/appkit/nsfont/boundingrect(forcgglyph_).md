> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/boundingrect(forcgglyph:)](https://developer.apple.com/documentation/appkit/nsfont/boundingrect(forcgglyph:))

# boundingRect(forCGGlyph:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Returns the bounding rectangle for the specified glyph, scaled to the receiver’s size.

## Declaration

```swift
func boundingRect(forCGGlyph glyph: CGGlyph) -> NSRect
```

<a id="Discussion"></a>

## Discussion

Japanese fonts encoded with the scheme “EUC12-NJE-CFEncoding” do not have individual metrics or bounding boxes available for the glyphs above 127. For those glyphs, this method returns the bounding rectangle for the font instead.

## See Also

### Getting Bounding Rectangles

- [boundingRectForFont](boundingrectforfont.md): The font’s bounding rectangle, scaled to the font’s size.
- [getBoundingRects(\_:forCGGlyphs:count:)](getboundingrects%28__forcgglyphs_count_%29.md): Returns an array of the bounding rectangles for the specified glyphs rendered by the receiver.

# boundingRectForCGGlyph: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Returns the bounding rectangle for the specified glyph, scaled to the receiver’s size.

## Declaration

```objectivec
- (NSRect) boundingRectForCGGlyph:(CGGlyph) glyph;
```

<a id="Discussion"></a>

## Discussion

Japanese fonts encoded with the scheme “EUC12-NJE-CFEncoding” do not have individual metrics or bounding boxes available for the glyphs above 127. For those glyphs, this method returns the bounding rectangle for the font instead.

## See Also

### Getting Bounding Rectangles

- [boundingRectForFont](boundingrectforfont.md): The font’s bounding rectangle, scaled to the font’s size.
- [getBoundingRects:forCGGlyphs:count:](getboundingrects%28__forcgglyphs_count_%29.md): Returns an array of the bounding rectangles for the specified glyphs rendered by the receiver.
