> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/removechildwindow(_:)](https://developer.apple.com/documentation/appkit/nswindow/removechildwindow(_:))

# removeChildWindow(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Detaches a given child window from the window.

## Declaration

```swift
func removeChildWindow(_ childWin: NSWindow)
```

## Parameters

- `childWin`: The child window to detach.

## See Also

### Managing Attached Windows

- [childWindows](childwindows.md): An array of the window’s attached child windows.
- [addChildWindow(\_:ordered:)](addchildwindow%28__ordered_%29.md): Adds a given window as a child window of the window.
- [parent](parent.md): The parent window to which the window is attached as a child.

# removeChildWindow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Detaches a given child window from the window.

## Declaration

```objectivec
- (void) removeChildWindow:(NSWindow *) childWin;
```

## Parameters

- `childWin`: The child window to detach.

## See Also

### Managing Attached Windows

- [childWindows](childwindows.md): An array of the window’s attached child windows.
- [addChildWindow:ordered:](addchildwindow%28__ordered_%29.md): Adds a given window as a child window of the window.
- [parentWindow](parent.md): The parent window to which the window is attached as a child.
