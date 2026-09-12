> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/enumeratewindows(options:using:)](https://developer.apple.com/documentation/appkit/nsapplication/enumeratewindows(options:using:))

# enumerateWindows(options:using:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Executes a block for each of the app’s windows.

## Declaration

```swift
func enumerateWindows(options: NSApplication.WindowListOptions = [], using block: (NSWindow, UnsafeMutablePointer<ObjCBool>) -> Void)
```

## Parameters

- `options`: A constant that indicates window ordering. See [NSApplication.WindowListOptions](windowlistoptions.md) for possible values.
- `block`: The block to execute for each window. The block takes the following parameters:

  - **window**: The window for which to execute the block.
  - **stop**: A Boolean value that stops the enumeration early when set to [true](https://developer.apple.com/documentation/swift/true) (the default value is [false](https://developer.apple.com/documentation/swift/false)).

## See Also

### Managing App Windows

- [keyWindow](keywindow.md): The window that currently receives keyboard events.
- [mainWindow](mainwindow.md): The app’s main window.
- [window(withWindowNumber:)](window%28withwindownumber_%29.md): Returns the window corresponding to the specified window number.
- [windows](windows.md): An array of the app’s window objects.
- [makeWindowsPerform(\_:inOrder:)](makewindowsperform%28__inorder_%29.md): Deprecated. Sends the specified message to each of the app’s window objects until one returns a non-`nil` value.
- [NSApplication.WindowListOptions](windowlistoptions.md): This constant indicates a window ordering.

# enumerateWindowsWithOptions:usingBlock: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Executes a block for each of the app’s windows.

## Declaration

```objectivec
- (void) enumerateWindowsWithOptions:(NSWindowListOptions) options usingBlock:(void (^)(NSWindow *window, BOOL *stop)) block;
```

## Parameters

- `options`: A constant that indicates window ordering. See [NSWindowListOptions](windowlistoptions.md) for possible values.
- `block`: The block to execute for each window. The block takes the following parameters:

  - **window**: The window for which to execute the block.
  - **stop**: A Boolean value that stops the enumeration early when set to [true](https://developer.apple.com/documentation/swift/true) (the default value is [false](https://developer.apple.com/documentation/swift/false)).

## See Also

### Managing App Windows

- [keyWindow](keywindow.md): The window that currently receives keyboard events.
- [mainWindow](mainwindow.md): The app’s main window.
- [windowWithWindowNumber:](window%28withwindownumber_%29.md): Returns the window corresponding to the specified window number.
- [windows](windows.md): An array of the app’s window objects.
- [makeWindowsPerform:inOrder:](makewindowsperform%28__inorder_%29.md): Deprecated. Sends the specified message to each of the app’s window objects until one returns a non-`nil` value.
- [NSWindowListOptions](windowlistoptions.md): This constant indicates a window ordering.
