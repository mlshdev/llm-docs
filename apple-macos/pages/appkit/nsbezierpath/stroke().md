> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/stroke()](https://developer.apple.com/documentation/appkit/nsbezierpath/stroke())

# stroke() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws a line along the path using the current stroke color and drawing attributes.

## Declaration

```swift
func stroke()
```

<a id="Discussion"></a>

## Discussion

The drawn line is centered on the path with its sides parallel to the path segment. This method uses the current drawing attributes associated with the receiver. If a particular attribute is not set for the receiver, this method uses the corresponding default attribute.

## See Also

### Related Documentation

- [set()](../nscolor/set%28%29.md): Sets the color of subsequent drawing to the color that the color object represents.

### Drawing a Path

- [fill()](fill%28%29.md): Paints the region enclosed by the path.
- [fill(\_:)](fill%28__%29.md): Fills the specified rectangular path with the current fill color.
- [stroke(\_:)](stroke%28__%29.md): Strokes the path of the specified rectangle using the current stroke color and the default drawing attributes.
- [strokeLine(from:to:)](strokeline%28from_to_%29.md): Strokes a line between two points using the current stroke color and the default drawing attributes.
- [drawPackedGlyphs(\_:at:)](drawpackedglyphs%28__at_%29.md): Draws a set of packed glyphs at the specified point in the current coordinate system.

# stroke (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws a line along the path using the current stroke color and drawing attributes.

## Declaration

```objectivec
- (void) stroke;
```

<a id="Discussion"></a>

## Discussion

The drawn line is centered on the path with its sides parallel to the path segment. This method uses the current drawing attributes associated with the receiver. If a particular attribute is not set for the receiver, this method uses the corresponding default attribute.

## See Also

### Related Documentation

- [set](../nscolor/set%28%29.md): Sets the color of subsequent drawing to the color that the color object represents.

### Drawing a Path

- [fill](fill%28%29.md): Paints the region enclosed by the path.
- [fillRect:](fill%28__%29.md): Fills the specified rectangular path with the current fill color.
- [strokeRect:](stroke%28__%29.md): Strokes the path of the specified rectangle using the current stroke color and the default drawing attributes.
- [strokeLineFromPoint:toPoint:](strokeline%28from_to_%29.md): Strokes a line between two points using the current stroke color and the default drawing attributes.
- [drawPackedGlyphs:atPoint:](drawpackedglyphs%28__at_%29.md): Draws a set of packed glyphs at the specified point in the current coordinate system.
