> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/draw(at:)](https://developer.apple.com/documentation/foundation/nsattributedstring/draw(at:))

# draw(at:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Draws the attributed string starting at the specified point in the current graphics context.

## Declaration

```swift
func draw(at point: CGPoint)
```

## Parameters

- `point`: The point in the current graphics context where you want to start drawing the string. The coordinate system of the graphics context is usually defined by the view in which you are drawing.

<a id="Discussion"></a>

## Discussion

This method draws the entire string starting at the specified point. This method draws the line using the attributes specified in the attributed string itself. If newline characters are present in the string, those characters are honored and cause subsequent text to be placed on the next line underneath the starting point.

There must be either a focused view or an active graphics context when you call this method.

## See Also

### Related Documentation

- [size()](size%28%29.md): Returns the size necessary to draw the string.
- [lockFocus()](https://developer.apple.com/documentation/appkit/nsview/lockfocus%28%29): Deprecated. Locks the focus on the view, so subsequent commands take effect in the view’s window and coordinate system.

### Drawing the attributed string

- [draw(in:)](draw%28in_%29.md): Draws the attributed string inside the specified bounding rectangle in the current graphics context.
- [draw(with:options:context:)](draw%28with_options_context_%29.md): Draws the attributed string in the specified bounding rectangle using the provided options.

# drawAtPoint: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Draws the attributed string starting at the specified point in the current graphics context.

## Declaration

```objectivec
- (void) drawAtPoint:(CGPoint) point;
```

## Parameters

- `point`: The point in the current graphics context where you want to start drawing the string. The coordinate system of the graphics context is usually defined by the view in which you are drawing.

<a id="Discussion"></a>

## Discussion

This method draws the entire string starting at the specified point. This method draws the line using the attributes specified in the attributed string itself. If newline characters are present in the string, those characters are honored and cause subsequent text to be placed on the next line underneath the starting point.

There must be either a focused view or an active graphics context when you call this method.

## See Also

### Related Documentation

- [size](size%28%29.md): Returns the size necessary to draw the string.
- [lockFocus](https://developer.apple.com/documentation/appkit/nsview/lockfocus%28%29): Deprecated. Locks the focus on the view, so subsequent commands take effect in the view’s window and coordinate system.

### Drawing the attributed string

- [drawInRect:](draw%28in_%29.md): Draws the attributed string inside the specified bounding rectangle in the current graphics context.
- [drawWithRect:options:context:](draw%28with_options_context_%29.md): Draws the attributed string in the specified bounding rectangle using the provided options.
