> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/childwindows](https://developer.apple.com/documentation/appkit/nswindow/childwindows)

# childWindows (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array of the window’s attached child windows.

## Declaration

```swift
var childWindows: [NSWindow]? { get }
```

## See Also

### Managing Attached Windows

- [addChildWindow(\_:ordered:)](addchildwindow%28__ordered_%29.md): Adds a given window as a child window of the window.
- [removeChildWindow(\_:)](removechildwindow%28__%29.md): Detaches a given child window from the window.
- [parent](parent.md): The parent window to which the window is attached as a child.

# childWindows (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array of the window’s attached child windows.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSArray<__kindof NSWindow *> * childWindows;
```

## See Also

### Managing Attached Windows

- [addChildWindow:ordered:](addchildwindow%28__ordered_%29.md): Adds a given window as a child window of the window.
- [removeChildWindow:](removechildwindow%28__%29.md): Detaches a given child window from the window.
- [parentWindow](parent.md): The parent window to which the window is attached as a child.
