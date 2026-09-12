> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/fill()](https://developer.apple.com/documentation/appkit/nsbezierpath/fill())

# fill() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Paints the region enclosed by the path.

## Declaration

```swift
func fill()
```

<a id="Discussion"></a>

## Discussion

This method fills the path using the current fill color and the receiver’s current winding rule. If the path contains any open subpaths, this method implicitly closes them before painting the fill region.

The painted region includes the pixels right up to, but not including, the path line itself. For paths with large line widths, this can result in overlap between the fill region and the stroked path (which is itself centered on the path line).

## See Also

### Related Documentation

- [set()](../nscolor/set%28%29.md): Sets the color of subsequent drawing to the color that the color object represents.
- [windingRule](windingrule-swift.property.md): The winding rule used to fill the path.

### Drawing a Path

- [stroke()](stroke%28%29.md): Draws a line along the path using the current stroke color and drawing attributes.
- [fill(\_:)](fill%28__%29.md): Fills the specified rectangular path with the current fill color.
- [stroke(\_:)](stroke%28__%29.md): Strokes the path of the specified rectangle using the current stroke color and the default drawing attributes.
- [strokeLine(from:to:)](strokeline%28from_to_%29.md): Strokes a line between two points using the current stroke color and the default drawing attributes.
- [drawPackedGlyphs(\_:at:)](drawpackedglyphs%28__at_%29.md): Draws a set of packed glyphs at the specified point in the current coordinate system.

# fill (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Paints the region enclosed by the path.

## Declaration

```objectivec
- (void) fill;
```

<a id="Discussion"></a>

## Discussion

This method fills the path using the current fill color and the receiver’s current winding rule. If the path contains any open subpaths, this method implicitly closes them before painting the fill region.

The painted region includes the pixels right up to, but not including, the path line itself. For paths with large line widths, this can result in overlap between the fill region and the stroked path (which is itself centered on the path line).

## See Also

### Related Documentation

- [set](../nscolor/set%28%29.md): Sets the color of subsequent drawing to the color that the color object represents.
- [windingRule](windingrule-swift.property.md): The winding rule used to fill the path.

### Drawing a Path

- [stroke](stroke%28%29.md): Draws a line along the path using the current stroke color and drawing attributes.
- [fillRect:](fill%28__%29.md): Fills the specified rectangular path with the current fill color.
- [strokeRect:](stroke%28__%29.md): Strokes the path of the specified rectangle using the current stroke color and the default drawing attributes.
- [strokeLineFromPoint:toPoint:](strokeline%28from_to_%29.md): Strokes a line between two points using the current stroke color and the default drawing attributes.
- [drawPackedGlyphs:atPoint:](drawpackedglyphs%28__at_%29.md): Draws a set of packed glyphs at the specified point in the current coordinate system.
