> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/ismovablebywindowbackground](https://developer.apple.com/documentation/appkit/nswindow/ismovablebywindowbackground)

# isMovableByWindowBackground (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the window is movable by clicking and dragging anywhere in its background.

## Declaration

```swift
var isMovableByWindowBackground: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the window is movable by clicking and dragging anywhere in its background; otherwise, [false](https://developer.apple.com/documentation/swift/false).

A window with a style mask of `NSTexturedBackgroundWindowMask` is movable by background by default. Sheets and drawers cannot be movable by window background.

## See Also

### Moving Windows

- [isMovable](ismovable.md): A Boolean value that indicates whether the window can be dragged by clicking in its title bar or background.
- [center()](center%28%29.md): Sets the window’s location to the center of the screen.

# movableByWindowBackground (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the window is movable by clicking and dragging anywhere in its background.

## Declaration

```objectivec
@property (getter=isMovableByWindowBackground) BOOL movableByWindowBackground;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the window is movable by clicking and dragging anywhere in its background; otherwise, [false](https://developer.apple.com/documentation/swift/false).

A window with a style mask of `NSTexturedBackgroundWindowMask` is movable by background by default. Sheets and drawers cannot be movable by window background.

## See Also

### Moving Windows

- [movable](ismovable.md): A Boolean value that indicates whether the window can be dragged by clicking in its title bar or background.
- [center](center%28%29.md): Sets the window’s location to the center of the screen.
