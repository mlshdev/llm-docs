> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/hittest(_:)](https://developer.apple.com/documentation/appkit/nsview/hittest(_:))

# hitTest(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the farthest descendant of the view in the view hierarchy (including itself) that contains a specified point, or `nil` if that point lies completely outside the view.

## Declaration

```swift
func hitTest(_ point: NSPoint) -> NSView?
```

## Parameters

- `point`: A point that is in the coordinate system of the view’s superview, not of the view itself.

<a id="return-value"></a>

## Return Value

A view object that is the farthest descendent of `aPoint`.

<a id="Discussion"></a>

## Discussion

This method is used primarily by an [NSWindow](../nswindow.md) object to determine which view should receive a mouse-down event. You’d rarely need to invoke this method, but you might want to override it to have a view object hide mouse-down events from its subviews. This method ignores hidden views.

## See Also

### Related Documentation

- [convert(\_:to:)](convert%28__to_%29-6u9ir.md): Converts a point from the view’s coordinate system to that of a given view.

### Handling Events in the View

- [acceptsFirstMouse(for:)](acceptsfirstmouse%28for_%29.md): Returns a Boolean value that indicates whether the view accepts the initial mouse-down event.
- [isMousePoint(\_:in:)](ismousepoint%28__in_%29.md): Returns whether a region of the view contains a specified point, accounting for whether the view is flipped or not.
- [performKeyEquivalent(with:)](performkeyequivalent%28with_%29.md): Implemented by subclasses to respond to key equivalents (also known as keyboard shortcuts).
- [rightMouseDown(with:)](../nsresponder/rightmousedown%28with_%29.md): Informs the receiver that the user has pressed the right mouse button.
- [mouseDownCanMoveWindow](mousedowncanmovewindow.md): A Boolean value indicating whether the view can pass mouse down events through to its superviews.
- [inputContext](inputcontext.md): The text input context object for the view.

# hitTest: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the farthest descendant of the view in the view hierarchy (including itself) that contains a specified point, or `nil` if that point lies completely outside the view.

## Declaration

```objectivec
- (NSView *) hitTest:(NSPoint) point;
```

## Parameters

- `point`: A point that is in the coordinate system of the view’s superview, not of the view itself.

<a id="return-value"></a>

## Return Value

A view object that is the farthest descendent of `aPoint`.

<a id="Discussion"></a>

## Discussion

This method is used primarily by an [NSWindow](../nswindow.md) object to determine which view should receive a mouse-down event. You’d rarely need to invoke this method, but you might want to override it to have a view object hide mouse-down events from its subviews. This method ignores hidden views.

## See Also

### Related Documentation

- [convertPoint:toView:](convert%28__to_%29-6u9ir.md): Converts a point from the view’s coordinate system to that of a given view.

### Handling Events in the View

- [acceptsFirstMouse:](acceptsfirstmouse%28for_%29.md): Returns a Boolean value that indicates whether the view accepts the initial mouse-down event.
- [mouse:inRect:](ismousepoint%28__in_%29.md): Returns whether a region of the view contains a specified point, accounting for whether the view is flipped or not.
- [performKeyEquivalent:](performkeyequivalent%28with_%29.md): Implemented by subclasses to respond to key equivalents (also known as keyboard shortcuts).
- [rightMouseDown:](../nsresponder/rightmousedown%28with_%29.md): Informs the receiver that the user has pressed the right mouse button.
- [mouseDownCanMoveWindow](mousedowncanmovewindow.md): A Boolean value indicating whether the view can pass mouse down events through to its superviews.
- [inputContext](inputcontext.md): The text input context object for the view.
