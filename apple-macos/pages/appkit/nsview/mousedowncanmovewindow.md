> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/mousedowncanmovewindow](https://developer.apple.com/documentation/appkit/nsview/mousedowncanmovewindow)

# mouseDownCanMoveWindow (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the view can pass mouse down events through to its superviews.

## Declaration

```swift
var mouseDownCanMoveWindow: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property lets you determine the region by which a window can be moved. The default value of this property is [false](https://developer.apple.com/documentation/swift/false) if the view is opaque; otherwise, it is set to [true](https://developer.apple.com/documentation/swift/true). Subclasses can override this property to return different values based on the event.

## See Also

### Handling Events in the View

- [acceptsFirstMouse(for:)](acceptsfirstmouse%28for_%29.md): Returns a Boolean value that indicates whether the view accepts the initial mouse-down event.
- [hitTest(\_:)](hittest%28__%29.md): Returns the farthest descendant of the view in the view hierarchy (including itself) that contains a specified point, or `nil` if that point lies completely outside the view.
- [isMousePoint(\_:in:)](ismousepoint%28__in_%29.md): Returns whether a region of the view contains a specified point, accounting for whether the view is flipped or not.
- [performKeyEquivalent(with:)](performkeyequivalent%28with_%29.md): Implemented by subclasses to respond to key equivalents (also known as keyboard shortcuts).
- [rightMouseDown(with:)](../nsresponder/rightmousedown%28with_%29.md): Informs the receiver that the user has pressed the right mouse button.
- [inputContext](inputcontext.md): The text input context object for the view.

# mouseDownCanMoveWindow (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the view can pass mouse down events through to its superviews.

## Declaration

```objectivec
@property (readonly) BOOL mouseDownCanMoveWindow;
```

<a id="Discussion"></a>

## Discussion

This property lets you determine the region by which a window can be moved. The default value of this property is [false](https://developer.apple.com/documentation/swift/false) if the view is opaque; otherwise, it is set to [true](https://developer.apple.com/documentation/swift/true). Subclasses can override this property to return different values based on the event.

## See Also

### Handling Events in the View

- [acceptsFirstMouse:](acceptsfirstmouse%28for_%29.md): Returns a Boolean value that indicates whether the view accepts the initial mouse-down event.
- [hitTest:](hittest%28__%29.md): Returns the farthest descendant of the view in the view hierarchy (including itself) that contains a specified point, or `nil` if that point lies completely outside the view.
- [mouse:inRect:](ismousepoint%28__in_%29.md): Returns whether a region of the view contains a specified point, accounting for whether the view is flipped or not.
- [performKeyEquivalent:](performkeyequivalent%28with_%29.md): Implemented by subclasses to respond to key equivalents (also known as keyboard shortcuts).
- [rightMouseDown:](../nsresponder/rightmousedown%28with_%29.md): Informs the receiver that the user has pressed the right mouse button.
- [inputContext](inputcontext.md): The text input context object for the view.
