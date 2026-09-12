> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/window(withwindownumber:)](https://developer.apple.com/documentation/appkit/nsapplication/window(withwindownumber:))

# window(withWindowNumber:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the window corresponding to the specified window number.

## Declaration

```swift
func window(withWindowNumber windowNum: Int) -> NSWindow?
```

## Parameters

- `windowNum`: The unique window number associated with the desired [NSWindow](../nswindow.md) object.

<a id="return-value"></a>

## Return Value

The desired window object or `nil` if the window could not be found.

<a id="Discussion"></a>

## Discussion

[window(withWindowNumber:)](window%28withwindownumber_%29.md) may return `nil` for window numbers found using [windowNumbers(options:)](../nswindow/windownumbers%28options_%29.md) if there is no corresponding window object owned by your app—for example, the menu bar.

## See Also

### Managing App Windows

- [keyWindow](keywindow.md): The window that currently receives keyboard events.
- [mainWindow](mainwindow.md): The app’s main window.
- [windows](windows.md): An array of the app’s window objects.
- [makeWindowsPerform(\_:inOrder:)](makewindowsperform%28__inorder_%29.md): Deprecated. Sends the specified message to each of the app’s window objects until one returns a non-`nil` value.
- [enumerateWindows(options:using:)](enumeratewindows%28options_using_%29.md): Executes a block for each of the app’s windows.
- [NSApplication.WindowListOptions](windowlistoptions.md): This constant indicates a window ordering.

# windowWithWindowNumber: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the window corresponding to the specified window number.

## Declaration

```objectivec
- (NSWindow *) windowWithWindowNumber:(NSInteger) windowNum;
```

## Parameters

- `windowNum`: The unique window number associated with the desired [NSWindow](../nswindow.md) object.

<a id="return-value"></a>

## Return Value

The desired window object or `nil` if the window could not be found.

<a id="Discussion"></a>

## Discussion

[windowWithWindowNumber:](window%28withwindownumber_%29.md) may return `nil` for window numbers found using [windowNumbersWithOptions:](../nswindow/windownumbers%28options_%29.md) if there is no corresponding window object owned by your app—for example, the menu bar.

## See Also

### Managing App Windows

- [keyWindow](keywindow.md): The window that currently receives keyboard events.
- [mainWindow](mainwindow.md): The app’s main window.
- [windows](windows.md): An array of the app’s window objects.
- [makeWindowsPerform:inOrder:](makewindowsperform%28__inorder_%29.md): Deprecated. Sends the specified message to each of the app’s window objects until one returns a non-`nil` value.
- [enumerateWindowsWithOptions:usingBlock:](enumeratewindows%28options_using_%29.md): Executes a block for each of the app’s windows.
- [NSWindowListOptions](windowlistoptions.md): This constant indicates a window ordering.
