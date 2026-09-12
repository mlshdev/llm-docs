> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrulermarker/draw(_:)](https://developer.apple.com/documentation/appkit/nsrulermarker/draw(_:))

# draw(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the receiver’s image that appears in the supplied rectangle.

## Declaration

```swift
func draw(_ rect: NSRect)
```

## Parameters

- `rect`: The rectangle to be drawn, in the ruler view’s coordinate system.

## See Also

### Related Documentation

- [imageRectInRuler](imagerectinruler.md): The rectangle occupied by the receiver’s image.

### Drawing and event handling

- [isDragging](isdragging.md): A Boolean that indicates whether the receiver is being dragged.
- [trackMouse(with:adding:)](trackmouse%28with_adding_%29.md): Handles user manipulation of the receiver in its ruler view.

# drawRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the receiver’s image that appears in the supplied rectangle.

## Declaration

```objectivec
- (void) drawRect:(NSRect) rect;
```

## Parameters

- `rect`: The rectangle to be drawn, in the ruler view’s coordinate system.

## See Also

### Related Documentation

- [imageRectInRuler](imagerectinruler.md): The rectangle occupied by the receiver’s image.

### Drawing and event handling

- [dragging](isdragging.md): A Boolean that indicates whether the receiver is being dragged.
- [trackMouse:adding:](trackmouse%28with_adding_%29.md): Handles user manipulation of the receiver in its ruler view.
