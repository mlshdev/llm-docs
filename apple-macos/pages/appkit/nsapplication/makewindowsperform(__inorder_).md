> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/makewindowsperform(_:inorder:)](https://developer.apple.com/documentation/appkit/nsapplication/makewindowsperform(_:inorder:))

# makeWindowsPerform(\_:inOrder:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Sends the specified message to each of the app’s window objects until one returns a non-`nil` value.

> Use [enumerateWindows(options:using:)](enumeratewindows%28options_using_%29.md) instead.

## Declaration

```swift
func makeWindowsPerform(_ selector: Selector, inOrder: Bool) -> NSWindow?
```

## Parameters

- `selector`: The selector to perform on each window. This method must not take any arguments and must return a value whose type that can be compared to `nil`.
- `inOrder`: If [true](https://developer.apple.com/documentation/swift/true), the `aSelector` message is sent to each of the window server’s onscreen windows, going in z-order, until one returns a non-`nil` value. A minimized window is not considered to be onscreen for this check. If [false](https://developer.apple.com/documentation/swift/false), the message is sent to all windows in `NSApp`’s window list, regardless of whether or not they are onscreen. This order is unspecified.

<a id="return-value"></a>

## Return Value

The window that returned a non-`nil` value or `nil` if all windows returned nil from `aSelector`.

## See Also

### Related Documentation

- [tryToPerform(\_:with:)](trytoperform%28__with_%29.md): Dispatches an action message to the specified target.
- [sendAction(\_:to:from:)](sendaction%28__to_from_%29.md): Sends the given action message to the given target.

### Managing App Windows

- [keyWindow](keywindow.md): The window that currently receives keyboard events.
- [mainWindow](mainwindow.md): The app’s main window.
- [window(withWindowNumber:)](window%28withwindownumber_%29.md): Returns the window corresponding to the specified window number.
- [windows](windows.md): An array of the app’s window objects.
- [enumerateWindows(options:using:)](enumeratewindows%28options_using_%29.md): Executes a block for each of the app’s windows.
- [NSApplication.WindowListOptions](windowlistoptions.md): This constant indicates a window ordering.

# makeWindowsPerform:inOrder: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Sends the specified message to each of the app’s window objects until one returns a non-`nil` value.

> Use [enumerateWindowsWithOptions:usingBlock:](enumeratewindows%28options_using_%29.md) instead.

## Declaration

```objectivec
- (NSWindow *) makeWindowsPerform:(SEL) selector inOrder:(BOOL) inOrder;
```

## Parameters

- `selector`: The selector to perform on each window. This method must not take any arguments and must return a value whose type that can be compared to `nil`.
- `inOrder`: If [true](https://developer.apple.com/documentation/swift/true), the `aSelector` message is sent to each of the window server’s onscreen windows, going in z-order, until one returns a non-`nil` value. A minimized window is not considered to be onscreen for this check. If [false](https://developer.apple.com/documentation/swift/false), the message is sent to all windows in `NSApp`’s window list, regardless of whether or not they are onscreen. This order is unspecified.

<a id="return-value"></a>

## Return Value

The window that returned a non-`nil` value or `nil` if all windows returned nil from `aSelector`.

## See Also

### Related Documentation

- [tryToPerform:with:](trytoperform%28__with_%29.md): Dispatches an action message to the specified target.
- [sendAction:to:from:](sendaction%28__to_from_%29.md): Sends the given action message to the given target.

### Managing App Windows

- [keyWindow](keywindow.md): The window that currently receives keyboard events.
- [mainWindow](mainwindow.md): The app’s main window.
- [windowWithWindowNumber:](window%28withwindownumber_%29.md): Returns the window corresponding to the specified window number.
- [windows](windows.md): An array of the app’s window objects.
- [enumerateWindowsWithOptions:usingBlock:](enumeratewindows%28options_using_%29.md): Executes a block for each of the app’s windows.
- [NSWindowListOptions](windowlistoptions.md): This constant indicates a window ordering.
