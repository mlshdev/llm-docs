> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/keywindow](https://developer.apple.com/documentation/appkit/nsapplication/keywindow)

# keyWindow (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The window that currently receives keyboard events.

## Declaration

```swift
weak var keyWindow: NSWindow? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` when there is no window receiving keyboard events. The property might be `nil` because the app’s storyboard file has not yet finished loading or when the receiver is not active.

## See Also

### Related Documentation

- [isKeyWindow](../nswindow/iskeywindow.md): A Boolean value that indicates whether the window is the key window for the application.

### Managing App Windows

- [mainWindow](mainwindow.md): The app’s main window.
- [window(withWindowNumber:)](window%28withwindownumber_%29.md): Returns the window corresponding to the specified window number.
- [windows](windows.md): An array of the app’s window objects.
- [makeWindowsPerform(\_:inOrder:)](makewindowsperform%28__inorder_%29.md): Deprecated. Sends the specified message to each of the app’s window objects until one returns a non-`nil` value.
- [enumerateWindows(options:using:)](enumeratewindows%28options_using_%29.md): Executes a block for each of the app’s windows.
- [NSApplication.WindowListOptions](windowlistoptions.md): This constant indicates a window ordering.

# keyWindow (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The window that currently receives keyboard events.

## Declaration

```objectivec
@property (weak, readonly, nullable) NSWindow * keyWindow;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` when there is no window receiving keyboard events. The property might be `nil` because the app’s storyboard file has not yet finished loading or when the receiver is not active.

## See Also

### Related Documentation

- [keyWindow](../nswindow/iskeywindow.md): A Boolean value that indicates whether the window is the key window for the application.

### Managing App Windows

- [mainWindow](mainwindow.md): The app’s main window.
- [windowWithWindowNumber:](window%28withwindownumber_%29.md): Returns the window corresponding to the specified window number.
- [windows](windows.md): An array of the app’s window objects.
- [makeWindowsPerform:inOrder:](makewindowsperform%28__inorder_%29.md): Deprecated. Sends the specified message to each of the app’s window objects until one returns a non-`nil` value.
- [enumerateWindowsWithOptions:usingBlock:](enumeratewindows%28options_using_%29.md): Executes a block for each of the app’s windows.
- [NSWindowListOptions](windowlistoptions.md): This constant indicates a window ordering.
