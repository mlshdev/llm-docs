> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorpanel/dragcolor(_:with:from:)](https://developer.apple.com/documentation/appkit/nscolorpanel/dragcolor(_:with:from:))

# dragColor(\_:with:from:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Drags a color into a destination view from the specified source view.

## Declaration

```swift
class func dragColor(_ color: NSColor, with event: NSEvent, from sourceView: NSView) -> Bool
```

## Parameters

- `color`: The color to drag.
- `event`: The drag event.
- `sourceView`: The view from which the color was dragged.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true)

<a id="Discussion"></a>

## Discussion

This method is usually invoked by the `mouseDown:` method of `sourceView`. The dragging mechanism handles all subsequent events.

Because it is a class method, [dragColor(\_:with:from:)](dragcolor%28__with_from_%29.md) can be invoked whether or not the instance of `NSColorPanel` exists.

## See Also

### Setting color

- [color](color.md): The color of the receiver.

# dragColor:withEvent:fromView: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Drags a color into a destination view from the specified source view.

## Declaration

```objectivec
+ (BOOL) dragColor:(NSColor *) color withEvent:(NSEvent *) event fromView:(NSView *) sourceView;
```

## Parameters

- `color`: The color to drag.
- `event`: The drag event.
- `sourceView`: The view from which the color was dragged.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true)

<a id="Discussion"></a>

## Discussion

This method is usually invoked by the `mouseDown:` method of `sourceView`. The dragging mechanism handles all subsequent events.

Because it is a class method, [dragColor:withEvent:fromView:](dragcolor%28__with_from_%29.md) can be invoked whether or not the instance of `NSColorPanel` exists.

## See Also

### Setting color

- [color](color.md): The color of the receiver.
