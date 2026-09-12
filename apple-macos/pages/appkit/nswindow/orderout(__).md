> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/orderout(_:)](https://developer.apple.com/documentation/appkit/nswindow/orderout(_:))

# orderOut(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the window from the screen list, which hides the window.

## Declaration

```swift
func orderOut(_ sender: Any?)
```

## Parameters

- `sender`: The window to remove.

<a id="Discussion"></a>

## Discussion

If the window is the key or main window, the window object immediately behind it is made key or main in its place. Calling [orderOut(\_:)](orderout%28__%29.md) causes the window to be removed from the screen, but does not cause it to be released. See the [close()](close%28%29.md) method for information on when a window is released. Calling [orderOut(\_:)](orderout%28__%29.md) on a child window causes the window to be removed from its parent window before being removed.

The default animation based on the window type will be used when the window is ordered out unless it has been modified by the [animationBehavior](animationbehavior-swift.property.md) property.

## See Also

### Related Documentation

- [isReleasedWhenClosed](isreleasedwhenclosed.md): A Boolean value that indicates whether the window is released when it receives the `close` message.

### Managing Window Layers

- [orderBack(\_:)](orderback%28__%29.md): Moves the window to the back of its level in the screen list, without changing either the key window or the main window.
- [orderFront(\_:)](orderfront%28__%29.md): Moves the window to the front of its level in the screen list, without changing either the key window or the main window.
- [orderFrontRegardless()](orderfrontregardless%28%29.md): Moves the window to the front of its level, even if its application isn’t active, without changing either the key window or the main window.
- [order(\_:relativeTo:)](order%28__relativeto_%29.md): Repositions the window’s window device in the window server’s screen list.
- [level](level-swift.property.md): The window level of the window.
- [NSWindow.Level](level-swift.struct.md): The standard window levels in macOS.

# orderOut: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the window from the screen list, which hides the window.

## Declaration

```objectivec
- (void) orderOut:(id) sender;
```

## Parameters

- `sender`: The window to remove.

<a id="Discussion"></a>

## Discussion

If the window is the key or main window, the window object immediately behind it is made key or main in its place. Calling [orderOut:](orderout%28__%29.md) causes the window to be removed from the screen, but does not cause it to be released. See the [close](close%28%29.md) method for information on when a window is released. Calling [orderOut:](orderout%28__%29.md) on a child window causes the window to be removed from its parent window before being removed.

The default animation based on the window type will be used when the window is ordered out unless it has been modified by the [animationBehavior](animationbehavior-swift.property.md) property.

## See Also

### Related Documentation

- [releasedWhenClosed](isreleasedwhenclosed.md): A Boolean value that indicates whether the window is released when it receives the `close` message.

### Managing Window Layers

- [orderBack:](orderback%28__%29.md): Moves the window to the back of its level in the screen list, without changing either the key window or the main window.
- [orderFront:](orderfront%28__%29.md): Moves the window to the front of its level in the screen list, without changing either the key window or the main window.
- [orderFrontRegardless](orderfrontregardless%28%29.md): Moves the window to the front of its level, even if its application isn’t active, without changing either the key window or the main window.
- [orderWindow:relativeTo:](order%28__relativeto_%29.md): Repositions the window’s window device in the window server’s screen list.
- [level](level-swift.property.md): The window level of the window.
- [NSWindowLevel](level-swift.struct.md): The standard window levels in macOS.
