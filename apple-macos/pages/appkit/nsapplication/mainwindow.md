> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/mainwindow](https://developer.apple.com/documentation/appkit/nsapplication/mainwindow)

# mainWindow (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The app’s main window.

## Declaration

```swift
weak var mainWindow: NSWindow? { get }
```

<a id="Discussion"></a>

## Discussion

The value in this property is `nil` when the app’s storyboard or nib file has not yet finished loading. It might also be `nil` when the app is inactive or hidden.

## See Also

### Related Documentation

- [isMainWindow](../nswindow/ismainwindow.md): A Boolean value that indicates whether the window is the application’s main window.

### Managing App Windows

- [keyWindow](keywindow.md): The window that currently receives keyboard events.
- [window(withWindowNumber:)](window%28withwindownumber_%29.md): Returns the window corresponding to the specified window number.
- [windows](windows.md): An array of the app’s window objects.
- [makeWindowsPerform(\_:inOrder:)](makewindowsperform%28__inorder_%29.md): Deprecated. Sends the specified message to each of the app’s window objects until one returns a non-`nil` value.
- [enumerateWindows(options:using:)](enumeratewindows%28options_using_%29.md): Executes a block for each of the app’s windows.
- [NSApplication.WindowListOptions](windowlistoptions.md): This constant indicates a window ordering.

# mainWindow (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The app’s main window.

## Declaration

```objectivec
@property (weak, readonly, nullable) NSWindow * mainWindow;
```

<a id="Discussion"></a>

## Discussion

The value in this property is `nil` when the app’s storyboard or nib file has not yet finished loading. It might also be `nil` when the app is inactive or hidden.

## See Also

### Related Documentation

- [mainWindow](../nswindow/ismainwindow.md): A Boolean value that indicates whether the window is the application’s main window.

### Managing App Windows

- [keyWindow](keywindow.md): The window that currently receives keyboard events.
- [windowWithWindowNumber:](window%28withwindownumber_%29.md): Returns the window corresponding to the specified window number.
- [windows](windows.md): An array of the app’s window objects.
- [makeWindowsPerform:inOrder:](makewindowsperform%28__inorder_%29.md): Deprecated. Sends the specified message to each of the app’s window objects until one returns a non-`nil` value.
- [enumerateWindowsWithOptions:usingBlock:](enumeratewindows%28options_using_%29.md): Executes a block for each of the app’s windows.
- [NSWindowListOptions](windowlistoptions.md): This constant indicates a window ordering.
