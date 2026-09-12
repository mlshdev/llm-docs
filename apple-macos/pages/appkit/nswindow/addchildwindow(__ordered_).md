> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/addchildwindow(_:ordered:)](https://developer.apple.com/documentation/appkit/nswindow/addchildwindow(_:ordered:))

# addChildWindow(\_:ordered:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds a given window as a child window of the window.

## Declaration

```swift
func addChildWindow(_ childWin: NSWindow, ordered place: NSWindow.OrderingMode)
```

## Parameters

- `childWin`: The child window to order.
- `place`: \- [NSWindow.OrderingMode.above](orderingmode/above.md): `childWin` is ordered immediately in front of the window.

  - [NSWindow.OrderingMode.below](orderingmode/below.md): `childWin` is ordered immediately behind the window.

<a id="Discussion"></a>

## Discussion

After the `childWin` is added as a child of the window, it is maintained in relative position indicated by `place` for subsequent ordering operations involving either window. While this attachment is active, moving `childWin` will not cause the window to move (as in sliding a drawer in or out), but moving the window will cause `childWin` to move.

Note that you should not create cycles between parent and child windows. For example, you should not add window B as child of window A, then add window A as a child of window B.

## See Also

### Managing Attached Windows

- [childWindows](childwindows.md): An array of the window’s attached child windows.
- [removeChildWindow(\_:)](removechildwindow%28__%29.md): Detaches a given child window from the window.
- [parent](parent.md): The parent window to which the window is attached as a child.

# addChildWindow:ordered: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds a given window as a child window of the window.

## Declaration

```objectivec
- (void) addChildWindow:(NSWindow *) childWin ordered:(NSWindowOrderingMode) place;
```

## Parameters

- `childWin`: The child window to order.
- `place`: \- [NSWindowAbove](orderingmode/above.md): `childWin` is ordered immediately in front of the window.

  - [NSWindowBelow](orderingmode/below.md): `childWin` is ordered immediately behind the window.

<a id="Discussion"></a>

## Discussion

After the `childWin` is added as a child of the window, it is maintained in relative position indicated by `place` for subsequent ordering operations involving either window. While this attachment is active, moving `childWin` will not cause the window to move (as in sliding a drawer in or out), but moving the window will cause `childWin` to move.

Note that you should not create cycles between parent and child windows. For example, you should not add window B as child of window A, then add window A as a child of window B.

## See Also

### Managing Attached Windows

- [childWindows](childwindows.md): An array of the window’s attached child windows.
- [removeChildWindow:](removechildwindow%28__%29.md): Detaches a given child window from the window.
- [parentWindow](parent.md): The parent window to which the window is attached as a child.
