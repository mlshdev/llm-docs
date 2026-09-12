> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/windows](https://developer.apple.com/documentation/appkit/nsapplication/windows)

# windows (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array of the app’s window objects.

## Declaration

```swift
var windows: [NSWindow] { get }
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [NSWindow](../nswindow.md) objects corresponding to all currently existing windows for the app. The array includes all onscreen and offscreen windows, whether or not they are visible on any space. There is no guarantee of the order of the windows in the array.

## See Also

### Managing App Windows

- [keyWindow](keywindow.md): The window that currently receives keyboard events.
- [mainWindow](mainwindow.md): The app’s main window.
- [window(withWindowNumber:)](window%28withwindownumber_%29.md): Returns the window corresponding to the specified window number.
- [makeWindowsPerform(\_:inOrder:)](makewindowsperform%28__inorder_%29.md): Deprecated. Sends the specified message to each of the app’s window objects until one returns a non-`nil` value.
- [enumerateWindows(options:using:)](enumeratewindows%28options_using_%29.md): Executes a block for each of the app’s windows.
- [NSApplication.WindowListOptions](windowlistoptions.md): This constant indicates a window ordering.

# windows (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array of the app’s window objects.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSWindow *> * windows;
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [NSWindow](../nswindow.md) objects corresponding to all currently existing windows for the app. The array includes all onscreen and offscreen windows, whether or not they are visible on any space. There is no guarantee of the order of the windows in the array.

## See Also

### Managing App Windows

- [keyWindow](keywindow.md): The window that currently receives keyboard events.
- [mainWindow](mainwindow.md): The app’s main window.
- [windowWithWindowNumber:](window%28withwindownumber_%29.md): Returns the window corresponding to the specified window number.
- [makeWindowsPerform:inOrder:](makewindowsperform%28__inorder_%29.md): Deprecated. Sends the specified message to each of the app’s window objects until one returns a non-`nil` value.
- [enumerateWindowsWithOptions:usingBlock:](enumeratewindows%28options_using_%29.md): Executes a block for each of the app’s windows.
- [NSWindowListOptions](windowlistoptions.md): This constant indicates a window ordering.
