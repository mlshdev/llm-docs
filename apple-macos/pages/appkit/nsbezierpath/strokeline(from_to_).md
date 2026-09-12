> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/strokeline(from:to:)](https://developer.apple.com/documentation/appkit/nsbezierpath/strokeline(from:to:))

# strokeLine(from:to:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Strokes a line between two points using the current stroke color and the default drawing attributes.

## Declaration

```swift
class func strokeLine(from point1: NSPoint, to point2: NSPoint)
```

## Parameters

- `point1`: The starting point of the line.
- `point2`: The ending point of the line.

<a id="Discussion"></a>

## Discussion

This method strokes the specified path immediately.

## See Also

### Related Documentation

- [move(to:)](move%28to_%29.md): Moves the path’s current point to the specified location.
- [line(to:)](line%28to_%29.md): Appends a straight line to the path.

### Drawing a Path

- [stroke()](stroke%28%29.md): Draws a line along the path using the current stroke color and drawing attributes.
- [fill()](fill%28%29.md): Paints the region enclosed by the path.
- [fill(\_:)](fill%28__%29.md): Fills the specified rectangular path with the current fill color.
- [stroke(\_:)](stroke%28__%29.md): Strokes the path of the specified rectangle using the current stroke color and the default drawing attributes.
- [drawPackedGlyphs(\_:at:)](drawpackedglyphs%28__at_%29.md): Draws a set of packed glyphs at the specified point in the current coordinate system.

# strokeLineFromPoint:toPoint: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Strokes a line between two points using the current stroke color and the default drawing attributes.

## Declaration

```objectivec
+ (void) strokeLineFromPoint:(NSPoint) point1 toPoint:(NSPoint) point2;
```

## Parameters

- `point1`: The starting point of the line.
- `point2`: The ending point of the line.

<a id="Discussion"></a>

## Discussion

This method strokes the specified path immediately.

## See Also

### Related Documentation

- [moveToPoint:](move%28to_%29.md): Moves the path’s current point to the specified location.
- [lineToPoint:](line%28to_%29.md): Appends a straight line to the path.

### Drawing a Path

- [stroke](stroke%28%29.md): Draws a line along the path using the current stroke color and drawing attributes.
- [fill](fill%28%29.md): Paints the region enclosed by the path.
- [fillRect:](fill%28__%29.md): Fills the specified rectangular path with the current fill color.
- [strokeRect:](stroke%28__%29.md): Strokes the path of the specified rectangle using the current stroke color and the default drawing attributes.
- [drawPackedGlyphs:atPoint:](drawpackedglyphs%28__at_%29.md): Draws a set of packed glyphs at the specified point in the current coordinate system.
