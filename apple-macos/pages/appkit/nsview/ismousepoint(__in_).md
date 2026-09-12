> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/ismousepoint(_:in:)](https://developer.apple.com/documentation/appkit/nsview/ismousepoint(_:in:))

# isMousePoint(\_:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns whether a region of the view contains a specified point, accounting for whether the view is flipped or not.

## Declaration

```swift
func isMousePoint(_ point: NSPoint, in rect: NSRect) -> Bool
```

## Parameters

- `point`: A point that is expressed in the view’s coordinate system. This point generally represents the hot spot of the mouse cursor.
- `rect`: A rectangle that is expressed in the view’s coordinate system.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `aRect` contains `aPoint`, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

Point-in-rectangle functions generally assume that the bottom edge of a rectangle is outside of the rectangle boundaries, while the upper edge is inside the boundaries. This method views `aRect` from the point of view of the user—that is, this method always treats the bottom edge of the rectangle as the one closest to the bottom edge of the user’s screen. By making this adjustment, this function ensures consistent mouse-detection behavior from the user’s perspective.

Never use the Foundation’s [NSPointInRect(\_:\_:)](https://developer.apple.com/documentation/foundation/nspointinrect%28_:_:%29) function as a substitute for this method. It doesn’t account for flipped coordinate systems.

## See Also

### Related Documentation

- [convert(\_:from:)](convert%28__from_%29-1dq9l.md): Converts a point from the coordinate system of a given view to that of the view.
- [NSMouseInRect(\_:\_:\_:)](https://developer.apple.com/documentation/foundation/nsmouseinrect%28_:_:_:%29): Returns a Boolean value that indicates whether the point is in the specified rectangle.
- [isFlipped](isflipped.md): A Boolean value indicating whether the view uses a flipped coordinate system.

### Handling Events in the View

- [acceptsFirstMouse(for:)](acceptsfirstmouse%28for_%29.md): Returns a Boolean value that indicates whether the view accepts the initial mouse-down event.
- [hitTest(\_:)](hittest%28__%29.md): Returns the farthest descendant of the view in the view hierarchy (including itself) that contains a specified point, or `nil` if that point lies completely outside the view.
- [performKeyEquivalent(with:)](performkeyequivalent%28with_%29.md): Implemented by subclasses to respond to key equivalents (also known as keyboard shortcuts).
- [rightMouseDown(with:)](../nsresponder/rightmousedown%28with_%29.md): Informs the receiver that the user has pressed the right mouse button.
- [mouseDownCanMoveWindow](mousedowncanmovewindow.md): A Boolean value indicating whether the view can pass mouse down events through to its superviews.
- [inputContext](inputcontext.md): The text input context object for the view.

# mouse:inRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns whether a region of the view contains a specified point, accounting for whether the view is flipped or not.

## Declaration

```objectivec
- (BOOL) mouse:(NSPoint) point inRect:(NSRect) rect;
```

## Parameters

- `point`: A point that is expressed in the view’s coordinate system. This point generally represents the hot spot of the mouse cursor.
- `rect`: A rectangle that is expressed in the view’s coordinate system.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `aRect` contains `aPoint`, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

Point-in-rectangle functions generally assume that the bottom edge of a rectangle is outside of the rectangle boundaries, while the upper edge is inside the boundaries. This method views `aRect` from the point of view of the user—that is, this method always treats the bottom edge of the rectangle as the one closest to the bottom edge of the user’s screen. By making this adjustment, this function ensures consistent mouse-detection behavior from the user’s perspective.

Never use the Foundation’s [NSPointInRect](https://developer.apple.com/documentation/foundation/nspointinrect%28_:_:%29) function as a substitute for this method. It doesn’t account for flipped coordinate systems.

## See Also

### Related Documentation

- [convertPoint:fromView:](convert%28__from_%29-1dq9l.md): Converts a point from the coordinate system of a given view to that of the view.
- [NSMouseInRect](https://developer.apple.com/documentation/foundation/nsmouseinrect%28_:_:_:%29): Returns a Boolean value that indicates whether the point is in the specified rectangle.
- [flipped](isflipped.md): A Boolean value indicating whether the view uses a flipped coordinate system.

### Handling Events in the View

- [acceptsFirstMouse:](acceptsfirstmouse%28for_%29.md): Returns a Boolean value that indicates whether the view accepts the initial mouse-down event.
- [hitTest:](hittest%28__%29.md): Returns the farthest descendant of the view in the view hierarchy (including itself) that contains a specified point, or `nil` if that point lies completely outside the view.
- [performKeyEquivalent:](performkeyequivalent%28with_%29.md): Implemented by subclasses to respond to key equivalents (also known as keyboard shortcuts).
- [rightMouseDown:](../nsresponder/rightmousedown%28with_%29.md): Informs the receiver that the user has pressed the right mouse button.
- [mouseDownCanMoveWindow](mousedowncanmovewindow.md): A Boolean value indicating whether the view can pass mouse down events through to its superviews.
- [inputContext](inputcontext.md): The text input context object for the view.
