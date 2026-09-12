> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/performkeyequivalent(with:)](https://developer.apple.com/documentation/appkit/nsview/performkeyequivalent(with:))

# performKeyEquivalent(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Implemented by subclasses to respond to key equivalents (also known as keyboard shortcuts).

## Declaration

```swift
func performKeyEquivalent(with event: NSEvent) -> Bool
```

## Parameters

- `event`: The key-down event object representing a key equivalent.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `theEvent` is a key equivalent that the view handled, [false](https://developer.apple.com/documentation/swift/false) if it is not a key equivalent that it should handle.

<a id="Discussion"></a>

## Discussion

If the view’s key equivalent is the same as the characters of the key-down event `theEvent`, as returned by [charactersIgnoringModifiers](../nsevent/charactersignoringmodifiers.md), the view should take the appropriate action and return [true](https://developer.apple.com/documentation/swift/true). Otherwise, it should return the result of invoking `super`‘s implementation. The default implementation of this method simply passes the message down the view hierarchy (from superviews to subviews) and returns [false](https://developer.apple.com/documentation/swift/false) if none of the view’s subviews responds [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Handling Events in the View

- [acceptsFirstMouse(for:)](acceptsfirstmouse%28for_%29.md): Returns a Boolean value that indicates whether the view accepts the initial mouse-down event.
- [hitTest(\_:)](hittest%28__%29.md): Returns the farthest descendant of the view in the view hierarchy (including itself) that contains a specified point, or `nil` if that point lies completely outside the view.
- [isMousePoint(\_:in:)](ismousepoint%28__in_%29.md): Returns whether a region of the view contains a specified point, accounting for whether the view is flipped or not.
- [rightMouseDown(with:)](../nsresponder/rightmousedown%28with_%29.md): Informs the receiver that the user has pressed the right mouse button.
- [mouseDownCanMoveWindow](mousedowncanmovewindow.md): A Boolean value indicating whether the view can pass mouse down events through to its superviews.
- [inputContext](inputcontext.md): The text input context object for the view.

# performKeyEquivalent: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Implemented by subclasses to respond to key equivalents (also known as keyboard shortcuts).

## Declaration

```objectivec
- (BOOL) performKeyEquivalent:(NSEvent *) event;
```

## Parameters

- `event`: The key-down event object representing a key equivalent.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `theEvent` is a key equivalent that the view handled, [false](https://developer.apple.com/documentation/swift/false) if it is not a key equivalent that it should handle.

<a id="Discussion"></a>

## Discussion

If the view’s key equivalent is the same as the characters of the key-down event `theEvent`, as returned by [charactersIgnoringModifiers](../nsevent/charactersignoringmodifiers.md), the view should take the appropriate action and return [true](https://developer.apple.com/documentation/swift/true). Otherwise, it should return the result of invoking `super`‘s implementation. The default implementation of this method simply passes the message down the view hierarchy (from superviews to subviews) and returns [false](https://developer.apple.com/documentation/swift/false) if none of the view’s subviews responds [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Handling Events in the View

- [acceptsFirstMouse:](acceptsfirstmouse%28for_%29.md): Returns a Boolean value that indicates whether the view accepts the initial mouse-down event.
- [hitTest:](hittest%28__%29.md): Returns the farthest descendant of the view in the view hierarchy (including itself) that contains a specified point, or `nil` if that point lies completely outside the view.
- [mouse:inRect:](ismousepoint%28__in_%29.md): Returns whether a region of the view contains a specified point, accounting for whether the view is flipped or not.
- [rightMouseDown:](../nsresponder/rightmousedown%28with_%29.md): Informs the receiver that the user has pressed the right mouse button.
- [mouseDownCanMoveWindow](mousedowncanmovewindow.md): A Boolean value indicating whether the view can pass mouse down events through to its superviews.
- [inputContext](inputcontext.md): The text input context object for the view.
