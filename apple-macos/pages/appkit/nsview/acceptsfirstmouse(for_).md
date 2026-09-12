> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/acceptsfirstmouse(for:)](https://developer.apple.com/documentation/appkit/nsview/acceptsfirstmouse(for:))

# acceptsFirstMouse(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates whether the view accepts the initial mouse-down event.

## Declaration

```swift
func acceptsFirstMouse(for event: NSEvent?) -> Bool
```

## Parameters

- `event`: The initial mouse-down event, which must be over the view in its window.

<a id="Discussion"></a>

## Discussion

Subclasses can override this method to return [true](https://developer.apple.com/documentation/swift/true) if the view should be sent a [mouseDown(with:)](../nsresponder/mousedown%28with_%29.md) message for an initial mouse-down event, [false](https://developer.apple.com/documentation/swift/false) if not.

The view can either return a value unconditionally or use the location of `event` to determine whether or not it wants the event. The default implementation ignores `event` and returns [false](https://developer.apple.com/documentation/swift/false).

Override this method in a subclass to allow instances to respond to click-through. This allows the user to click on a view in an inactive window, activating the view with one click, instead of clicking first to make the window active and then clicking the view. Most view objects refuse a click-through attempt, so the event simply activates the window. Many control objects, however, such as instances of [NSButton](../nsbutton.md) and [NSSlider](../nsslider.md), do accept them, so the user can immediately manipulate the control without having to release the mouse button.

## See Also

### Handling Events in the View

- [hitTest(\_:)](hittest%28__%29.md): Returns the farthest descendant of the view in the view hierarchy (including itself) that contains a specified point, or `nil` if that point lies completely outside the view.
- [isMousePoint(\_:in:)](ismousepoint%28__in_%29.md): Returns whether a region of the view contains a specified point, accounting for whether the view is flipped or not.
- [performKeyEquivalent(with:)](performkeyequivalent%28with_%29.md): Implemented by subclasses to respond to key equivalents (also known as keyboard shortcuts).
- [rightMouseDown(with:)](../nsresponder/rightmousedown%28with_%29.md): Informs the receiver that the user has pressed the right mouse button.
- [mouseDownCanMoveWindow](mousedowncanmovewindow.md): A Boolean value indicating whether the view can pass mouse down events through to its superviews.
- [inputContext](inputcontext.md): The text input context object for the view.

# acceptsFirstMouse: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates whether the view accepts the initial mouse-down event.

## Declaration

```objectivec
- (BOOL) acceptsFirstMouse:(NSEvent *) event;
```

## Parameters

- `event`: The initial mouse-down event, which must be over the view in its window.

<a id="Discussion"></a>

## Discussion

Subclasses can override this method to return [true](https://developer.apple.com/documentation/swift/true) if the view should be sent a [mouseDown:](../nsresponder/mousedown%28with_%29.md) message for an initial mouse-down event, [false](https://developer.apple.com/documentation/swift/false) if not.

The view can either return a value unconditionally or use the location of `event` to determine whether or not it wants the event. The default implementation ignores `event` and returns [false](https://developer.apple.com/documentation/swift/false).

Override this method in a subclass to allow instances to respond to click-through. This allows the user to click on a view in an inactive window, activating the view with one click, instead of clicking first to make the window active and then clicking the view. Most view objects refuse a click-through attempt, so the event simply activates the window. Many control objects, however, such as instances of [NSButton](../nsbutton.md) and [NSSlider](../nsslider.md), do accept them, so the user can immediately manipulate the control without having to release the mouse button.

## See Also

### Handling Events in the View

- [hitTest:](hittest%28__%29.md): Returns the farthest descendant of the view in the view hierarchy (including itself) that contains a specified point, or `nil` if that point lies completely outside the view.
- [mouse:inRect:](ismousepoint%28__in_%29.md): Returns whether a region of the view contains a specified point, accounting for whether the view is flipped or not.
- [performKeyEquivalent:](performkeyequivalent%28with_%29.md): Implemented by subclasses to respond to key equivalents (also known as keyboard shortcuts).
- [rightMouseDown:](../nsresponder/rightmousedown%28with_%29.md): Informs the receiver that the user has pressed the right mouse button.
- [mouseDownCanMoveWindow](mousedowncanmovewindow.md): A Boolean value indicating whether the view can pass mouse down events through to its superviews.
- [inputContext](inputcontext.md): The text input context object for the view.
