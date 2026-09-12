> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/drawswatch(in:)](https://developer.apple.com/documentation/appkit/nscolor/drawswatch(in:))

# drawSwatch(in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the current color in the specified rectangle.

## Declaration

```swift
func drawSwatch(in rect: NSRect)
```

## Parameters

- `rect`: The rectangle in which to draw the color.

<a id="Discussion"></a>

## Discussion

Subclasses adorn the rectangle in some manner to indicate the type of color. This method is invoked by color wells, swatches, and other user interface objects that need to display colors.

## See Also

### Drawing with colors

- [set()](set%28%29.md): Sets the color of subsequent drawing to the color that the color object represents.
- [setFill()](setfill%28%29.md): Sets the fill color of subsequent drawing to the color object’s color.
- [setStroke()](setstroke%28%29.md): Sets the stroke color of subsequent drawing to the color object’s color.

# drawSwatchInRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the current color in the specified rectangle.

## Declaration

```objectivec
- (void) drawSwatchInRect:(NSRect) rect;
```

## Parameters

- `rect`: The rectangle in which to draw the color.

<a id="Discussion"></a>

## Discussion

Subclasses adorn the rectangle in some manner to indicate the type of color. This method is invoked by color wells, swatches, and other user interface objects that need to display colors.

## See Also

### Drawing with colors

- [set](set%28%29.md): Sets the color of subsequent drawing to the color that the color object represents.
- [setFill](setfill%28%29.md): Sets the fill color of subsequent drawing to the color object’s color.
- [setStroke](setstroke%28%29.md): Sets the stroke color of subsequent drawing to the color object’s color.
