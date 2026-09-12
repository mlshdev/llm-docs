> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/getboundingrects(_:forcgglyphs:count:)](https://developer.apple.com/documentation/appkit/nsfont/getboundingrects(_:forcgglyphs:count:))

# getBoundingRects(\_:forCGGlyphs:count:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Returns an array of the bounding rectangles for the specified glyphs rendered by the receiver.

## Declaration

```swift
func getBoundingRects(_ bounds: NSRectArray, forCGGlyphs glyphs: UnsafePointer<CGGlyph>, count glyphCount: Int)
```

<a id="Discussion"></a>

## Discussion

Returns in `bounds` an array of the bounding rectangles for the glyphs specified by `glyphs` and rendered by the receiver. The `glyphCount` value must specify the count of glyphs passed in `glyphs`.

## See Also

### Getting Bounding Rectangles

- [boundingRectForFont](boundingrectforfont.md): The font’s bounding rectangle, scaled to the font’s size.
- [boundingRect(forCGGlyph:)](boundingrect%28forcgglyph_%29.md): Returns the bounding rectangle for the specified glyph, scaled to the receiver’s size.

# getBoundingRects:forCGGlyphs:count: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Returns an array of the bounding rectangles for the specified glyphs rendered by the receiver.

## Declaration

```objectivec
- (void) getBoundingRects:(NSRectArray) bounds forCGGlyphs:(const CGGlyph *) glyphs count:(NSUInteger) glyphCount;
```

<a id="Discussion"></a>

## Discussion

Returns in `bounds` an array of the bounding rectangles for the glyphs specified by `glyphs` and rendered by the receiver. The `glyphCount` value must specify the count of glyphs passed in `glyphs`.

## See Also

### Getting Bounding Rectangles

- [boundingRectForFont](boundingrectforfont.md): The font’s bounding rectangle, scaled to the font’s size.
- [boundingRectForCGGlyph:](boundingrect%28forcgglyph_%29.md): Returns the bounding rectangle for the specified glyph, scaled to the receiver’s size.
