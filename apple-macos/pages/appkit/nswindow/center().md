> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/center()](https://developer.apple.com/documentation/appkit/nswindow/center())

# center() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the window’s location to the center of the screen.

## Declaration

```swift
func center()
```

<a id="Discussion"></a>

## Discussion

The window is placed exactly in the center horizontally and somewhat above center vertically. Such a placement carries a certain visual immediacy and importance. This method doesn’t put the window onscreen, however; use [makeKeyAndOrderFront(\_:)](makekeyandorderfront%28__%29.md) to do that.

You typically use this method to place a window—most likely an alert dialog—where the user can’t miss it. This method is invoked automatically when a panel is placed on the screen by the [runModal(for:)](../nsapplication/runmodal%28for_%29.md) method of the `NSApplication` class.

## See Also

### Moving Windows

- [isMovableByWindowBackground](ismovablebywindowbackground.md): A Boolean value that indicates whether the window is movable by clicking and dragging anywhere in its background.
- [isMovable](ismovable.md): A Boolean value that indicates whether the window can be dragged by clicking in its title bar or background.

# center (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the window’s location to the center of the screen.

## Declaration

```objectivec
- (void) center;
```

<a id="Discussion"></a>

## Discussion

The window is placed exactly in the center horizontally and somewhat above center vertically. Such a placement carries a certain visual immediacy and importance. This method doesn’t put the window onscreen, however; use [makeKeyAndOrderFront:](makekeyandorderfront%28__%29.md) to do that.

You typically use this method to place a window—most likely an alert dialog—where the user can’t miss it. This method is invoked automatically when a panel is placed on the screen by the [runModalForWindow:](../nsapplication/runmodal%28for_%29.md) method of the `NSApplication` class.

## See Also

### Moving Windows

- [movableByWindowBackground](ismovablebywindowbackground.md): A Boolean value that indicates whether the window is movable by clicking and dragging anywhere in its background.
- [movable](ismovable.md): A Boolean value that indicates whether the window can be dragged by clicking in its title bar or background.
