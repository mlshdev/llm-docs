> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbox/setframefromcontentframe(_:)](https://developer.apple.com/documentation/appkit/nsbox/setframefromcontentframe(_:))

# setFrameFromContentFrame(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Places the receiver so its content view lies on the specified frame.

## Declaration

```swift
func setFrameFromContentFrame(_ contentFrame: NSRect)
```

## Parameters

- `contentFrame`: The rectangle specifying the frame of the box’s content view, reckoned in the coordinate system of the box’s superview. The box is marked for redisplay.

## See Also

### Related Documentation

- [contentViewMargins](contentviewmargins.md): The distances between the border and the content view.
- [needsDisplay](../nsview/needsdisplay.md): A Boolean value that determines whether the view needs to be redrawn before being displayed.
- [frame](../nsview/frame.md): The view’s frame rectangle, which defines its position and size in its superview’s coordinate system.

### Sizing

- [sizeToFit()](sizetofit%28%29.md): Resizes and moves the receiver’s content view so it just encloses its subviews.

# setFrameFromContentFrame: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Places the receiver so its content view lies on the specified frame.

## Declaration

```objectivec
- (void) setFrameFromContentFrame:(NSRect) contentFrame;
```

## Parameters

- `contentFrame`: The rectangle specifying the frame of the box’s content view, reckoned in the coordinate system of the box’s superview. The box is marked for redisplay.

## See Also

### Related Documentation

- [contentViewMargins](contentviewmargins.md): The distances between the border and the content view.
- [needsDisplay](../nsview/needsdisplay.md): A Boolean value that determines whether the view needs to be redrawn before being displayed.
- [frame](../nsview/frame.md): The view’s frame rectangle, which defines its position and size in its superview’s coordinate system.

### Sizing

- [sizeToFit](sizetofit%28%29.md): Resizes and moves the receiver’s content view so it just encloses its subviews.
