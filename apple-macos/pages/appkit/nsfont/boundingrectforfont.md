> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/boundingrectforfont](https://developer.apple.com/documentation/appkit/nsfont/boundingrectforfont)

# boundingRectForFont (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The font’s bounding rectangle, scaled to the font’s size.

## Declaration

```swift
var boundingRectForFont: NSRect { get }
```

<a id="Discussion"></a>

## Discussion

The bounding rectangle is the union of the bounding rectangles of every glyph in the font.

## See Also

### Related Documentation

- [boundingRect(forGlyph:)](boundingrect%28forglyph_%29.md): Deprecated. Returns the bounding rectangle for the specified glyph, scaled to the receiver’s size.

### Getting Bounding Rectangles

- [boundingRect(forCGGlyph:)](boundingrect%28forcgglyph_%29.md): Returns the bounding rectangle for the specified glyph, scaled to the receiver’s size.
- [getBoundingRects(\_:forCGGlyphs:count:)](getboundingrects%28__forcgglyphs_count_%29.md): Returns an array of the bounding rectangles for the specified glyphs rendered by the receiver.

# boundingRectForFont (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The font’s bounding rectangle, scaled to the font’s size.

## Declaration

```objectivec
@property (readonly) NSRect boundingRectForFont;
```

<a id="Discussion"></a>

## Discussion

The bounding rectangle is the union of the bounding rectangles of every glyph in the font.

## See Also

### Related Documentation

- [boundingRectForGlyph:](boundingrect%28forglyph_%29.md): Deprecated. Returns the bounding rectangle for the specified glyph, scaled to the receiver’s size.

### Getting Bounding Rectangles

- [boundingRectForCGGlyph:](boundingrect%28forcgglyph_%29.md): Returns the bounding rectangle for the specified glyph, scaled to the receiver’s size.
- [getBoundingRects:forCGGlyphs:count:](getboundingrects%28__forcgglyphs_count_%29.md): Returns an array of the bounding rectangles for the specified glyphs rendered by the receiver.
