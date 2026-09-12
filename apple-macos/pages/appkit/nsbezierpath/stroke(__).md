> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/stroke(_:)](https://developer.apple.com/documentation/appkit/nsbezierpath/stroke(_:))

# stroke(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Strokes the path of the specified rectangle using the current stroke color and the default drawing attributes.

## Declaration

```swift
class func stroke(_ rect: NSRect)
```

## Parameters

- `rect`: A rectangle in the current coordinate system.

<a id="Discussion"></a>

## Discussion

The path is drawn beginning at the rectangle’s origin and proceeding in a counterclockwise direction. This method strokes the specified path immediately.

## See Also

### Related Documentation

- [set()](../nscolor/set%28%29.md): Sets the color of subsequent drawing to the color that the color object represents.
- [init(rect:)](init%28rect_%29.md): Creates and returns a new Bézier path object initialized with a rectangular path.
- [appendRect(\_:)](appendrect%28__%29.md): Appends a rectangular path to the path.

### Drawing a Path

- [stroke()](stroke%28%29.md): Draws a line along the path using the current stroke color and drawing attributes.
- [fill()](fill%28%29.md): Paints the region enclosed by the path.
- [fill(\_:)](fill%28__%29.md): Fills the specified rectangular path with the current fill color.
- [strokeLine(from:to:)](strokeline%28from_to_%29.md): Strokes a line between two points using the current stroke color and the default drawing attributes.
- [drawPackedGlyphs(\_:at:)](drawpackedglyphs%28__at_%29.md): Draws a set of packed glyphs at the specified point in the current coordinate system.

# strokeRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Strokes the path of the specified rectangle using the current stroke color and the default drawing attributes.

## Declaration

```objectivec
+ (void) strokeRect:(NSRect) rect;
```

## Parameters

- `rect`: A rectangle in the current coordinate system.

<a id="Discussion"></a>

## Discussion

The path is drawn beginning at the rectangle’s origin and proceeding in a counterclockwise direction. This method strokes the specified path immediately.

## See Also

### Related Documentation

- [set](../nscolor/set%28%29.md): Sets the color of subsequent drawing to the color that the color object represents.
- [bezierPathWithRect:](init%28rect_%29.md): Creates and returns a new Bézier path object initialized with a rectangular path.
- [appendBezierPathWithRect:](appendrect%28__%29.md): Appends a rectangular path to the path.

### Drawing a Path

- [stroke](stroke%28%29.md): Draws a line along the path using the current stroke color and drawing attributes.
- [fill](fill%28%29.md): Paints the region enclosed by the path.
- [fillRect:](fill%28__%29.md): Fills the specified rectangular path with the current fill color.
- [strokeLineFromPoint:toPoint:](strokeline%28from_to_%29.md): Strokes a line between two points using the current stroke color and the default drawing attributes.
- [drawPackedGlyphs:atPoint:](drawpackedglyphs%28__at_%29.md): Draws a set of packed glyphs at the specified point in the current coordinate system.
