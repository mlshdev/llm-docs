> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/parent](https://developer.apple.com/documentation/appkit/nswindow/parent)

# parent (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The parent window to which the window is attached as a child.

## Declaration

```swift
weak var parent: NSWindow? { get set }
```

<a id="Discussion"></a>

## Discussion

This property should be set from a subclass when it is overridden by a subclass’s implementation. It should not be set otherwise.

Note that calling [orderOut(\_:)](orderout%28__%29.md) on a child window causes the window to be removed from its parent window before it is itself removed.

## See Also

### Managing Attached Windows

- [childWindows](childwindows.md): An array of the window’s attached child windows.
- [addChildWindow(\_:ordered:)](addchildwindow%28__ordered_%29.md): Adds a given window as a child window of the window.
- [removeChildWindow(\_:)](removechildwindow%28__%29.md): Detaches a given child window from the window.

# parentWindow (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The parent window to which the window is attached as a child.

## Declaration

```objectivec
@property (weak, nullable) NSWindow * parentWindow;
```

<a id="Discussion"></a>

## Discussion

This property should be set from a subclass when it is overridden by a subclass’s implementation. It should not be set otherwise.

Note that calling [orderOut:](orderout%28__%29.md) on a child window causes the window to be removed from its parent window before it is itself removed.

## See Also

### Managing Attached Windows

- [childWindows](childwindows.md): An array of the window’s attached child windows.
- [addChildWindow:ordered:](addchildwindow%28__ordered_%29.md): Adds a given window as a child window of the window.
- [removeChildWindow:](removechildwindow%28__%29.md): Detaches a given child window from the window.
