> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/ismovable](https://developer.apple.com/documentation/appkit/nswindow/ismovable)

# isMovable (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

A Boolean value that indicates whether the window can be dragged by clicking in its title bar or background.

## Declaration

```swift
var isMovable: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the window can be moved by the user; otherwise, [false](https://developer.apple.com/documentation/swift/false).

When a window’s [isMovable](ismovable.md) property is [false](https://developer.apple.com/documentation/swift/false), the value of the [isMovableByWindowBackground](ismovablebywindowbackground.md) property is ignored. When the value of [isMovable](ismovable.md) is [false](https://developer.apple.com/documentation/swift/false), the window can only be dragged between spaces in F8 mode, and its relative screen position is always preserved. Note that a resizable window may still be resized, and the window frame may be changed programmatically. A nonmovable window will not be moved or resized by the system in response to a display reconfiguration. Applications may choose to enable application-controlled window dragging after disabling user-initiating dragging by handling the [mouseDown(with:)](../nsresponder/mousedown%28with_%29.md)/[mouseDragged(with:)](../nsresponder/mousedragged%28with_%29.md)/[mouseUp(with:)](../nsresponder/mouseup%28with_%29.md) sequence in [sendEvent(\_:)](sendevent%28__%29.md) in an `NSWindow` subclass.

## See Also

### Moving Windows

- [isMovableByWindowBackground](ismovablebywindowbackground.md): A Boolean value that indicates whether the window is movable by clicking and dragging anywhere in its background.
- [center()](center%28%29.md): Sets the window’s location to the center of the screen.

# movable (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

A Boolean value that indicates whether the window can be dragged by clicking in its title bar or background.

## Declaration

```objectivec
@property (getter=isMovable) BOOL movable;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the window can be moved by the user; otherwise, [false](https://developer.apple.com/documentation/swift/false).

When a window’s [movable](ismovable.md) property is [false](https://developer.apple.com/documentation/swift/false), the value of the [movableByWindowBackground](ismovablebywindowbackground.md) property is ignored. When the value of [movable](ismovable.md) is [false](https://developer.apple.com/documentation/swift/false), the window can only be dragged between spaces in F8 mode, and its relative screen position is always preserved. Note that a resizable window may still be resized, and the window frame may be changed programmatically. A nonmovable window will not be moved or resized by the system in response to a display reconfiguration. Applications may choose to enable application-controlled window dragging after disabling user-initiating dragging by handling the [mouseDown:](../nsresponder/mousedown%28with_%29.md)/[mouseDragged:](../nsresponder/mousedragged%28with_%29.md)/[mouseUp:](../nsresponder/mouseup%28with_%29.md) sequence in [sendEvent:](sendevent%28__%29.md) in an `NSWindow` subclass.

## See Also

### Moving Windows

- [movableByWindowBackground](ismovablebywindowbackground.md): A Boolean value that indicates whether the window is movable by clicking and dragging anywhere in its background.
- [center](center%28%29.md): Sets the window’s location to the center of the screen.
