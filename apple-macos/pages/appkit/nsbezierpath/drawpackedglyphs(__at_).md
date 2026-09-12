> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/drawpackedglyphs(_:at:)](https://developer.apple.com/documentation/appkit/nsbezierpath/drawpackedglyphs(_:at:))

# drawPackedGlyphs(\_:at:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Draws a set of packed glyphs at the specified point in the current coordinate system.

## Declaration

```swift
class func drawPackedGlyphs(_ packedGlyphs: UnsafePointer<CChar>, at point: NSPoint)
```

## Parameters

- `packedGlyphs`: A C-style array containing one or more `CGGlyph` data types terminated by a `NULL` character.
- `point`: The starting point at which to draw the glyphs.

<a id="Discussion"></a>

## Discussion

This method draws the glyphs immediately.

You should avoid using this method directly. Instead, use the [appendGlyph(\_:in:)](appendglyph%28__in_%29.md) and [appendGlyphs(\_:count:in:)](appendglyphs%28__count_in_%29.md) methods to create a path with one or more glyphs.

## See Also

### Related Documentation

- [appendPackedGlyphs(\_:)](appendpackedglyphs%28__%29.md): Deprecated. Appends an array of packed glyphs to the path.
- [set()](../nscolor/set%28%29.md): Sets the color of subsequent drawing to the color that the color object represents.

### Drawing a Path

- [stroke()](stroke%28%29.md): Draws a line along the path using the current stroke color and drawing attributes.
- [fill()](fill%28%29.md): Paints the region enclosed by the path.
- [fill(\_:)](fill%28__%29.md): Fills the specified rectangular path with the current fill color.
- [stroke(\_:)](stroke%28__%29.md): Strokes the path of the specified rectangle using the current stroke color and the default drawing attributes.
- [strokeLine(from:to:)](strokeline%28from_to_%29.md): Strokes a line between two points using the current stroke color and the default drawing attributes.

# drawPackedGlyphs:atPoint: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Draws a set of packed glyphs at the specified point in the current coordinate system.

## Declaration

```objectivec
+ (void) drawPackedGlyphs:(const char *) packedGlyphs atPoint:(NSPoint) point;
```

## Parameters

- `packedGlyphs`: A C-style array containing one or more `CGGlyph` data types terminated by a `NULL` character.
- `point`: The starting point at which to draw the glyphs.

<a id="Discussion"></a>

## Discussion

This method draws the glyphs immediately.

You should avoid using this method directly. Instead, use the [appendBezierPathWithGlyph:inFont:](appendglyph%28__in_%29.md) and [appendBezierPathWithGlyphs:count:inFont:](appendglyphs%28__count_in_%29.md) methods to create a path with one or more glyphs.

## See Also

### Related Documentation

- [appendBezierPathWithPackedGlyphs:](appendpackedglyphs%28__%29.md): Deprecated. Appends an array of packed glyphs to the path.
- [set](../nscolor/set%28%29.md): Sets the color of subsequent drawing to the color that the color object represents.

### Drawing a Path

- [stroke](stroke%28%29.md): Draws a line along the path using the current stroke color and drawing attributes.
- [fill](fill%28%29.md): Paints the region enclosed by the path.
- [fillRect:](fill%28__%29.md): Fills the specified rectangular path with the current fill color.
- [strokeRect:](stroke%28__%29.md): Strokes the path of the specified rectangle using the current stroke color and the default drawing attributes.
- [strokeLineFromPoint:toPoint:](strokeline%28from_to_%29.md): Strokes a line between two points using the current stroke color and the default drawing attributes.
