> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/makekeyandorderfront(_:)](https://developer.apple.com/documentation/appkit/nswindow/makekeyandorderfront(_:))

# makeKeyAndOrderFront(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Moves the window to the front of the screen list, within its level, and makes it the key window; that is, it shows the window.

## Declaration

```swift
func makeKeyAndOrderFront(_ sender: Any?)
```

## Parameters

- `sender`: The message’s sender.

## See Also

### Related Documentation

- [orderBack(\_:)](orderback%28__%29.md): Moves the window to the back of its level in the screen list, without changing either the key window or the main window.
- [orderFront(\_:)](orderfront%28__%29.md): Moves the window to the front of its level in the screen list, without changing either the key window or the main window.
- [level](level-swift.property.md): The window level of the window.
- [order(\_:relativeTo:)](order%28__relativeto_%29.md): Repositions the window’s window device in the window server’s screen list.
- [orderOut(\_:)](orderout%28__%29.md): Removes the window from the screen list, which hides the window.

### Managing Key Status

- [isKeyWindow](iskeywindow.md): A Boolean value that indicates whether the window is the key window for the application.
- [canBecomeKey](canbecomekey.md): A Boolean value that indicates whether the window can become the key window.
- [makeKey()](makekey%28%29.md): Makes the window the key window.
- [becomeKey()](becomekey%28%29.md): Informs the window that it has become the key window.
- [resignKey()](resignkey%28%29.md): Resigns the window’s key window status.

# makeKeyAndOrderFront: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Moves the window to the front of the screen list, within its level, and makes it the key window; that is, it shows the window.

## Declaration

```objectivec
- (void) makeKeyAndOrderFront:(id) sender;
```

## Parameters

- `sender`: The message’s sender.

## See Also

### Related Documentation

- [orderBack:](orderback%28__%29.md): Moves the window to the back of its level in the screen list, without changing either the key window or the main window.
- [orderFront:](orderfront%28__%29.md): Moves the window to the front of its level in the screen list, without changing either the key window or the main window.
- [level](level-swift.property.md): The window level of the window.
- [orderWindow:relativeTo:](order%28__relativeto_%29.md): Repositions the window’s window device in the window server’s screen list.
- [orderOut:](orderout%28__%29.md): Removes the window from the screen list, which hides the window.

### Managing Key Status

- [keyWindow](iskeywindow.md): A Boolean value that indicates whether the window is the key window for the application.
- [canBecomeKeyWindow](canbecomekey.md): A Boolean value that indicates whether the window can become the key window.
- [makeKeyWindow](makekey%28%29.md): Makes the window the key window.
- [becomeKeyWindow](becomekey%28%29.md): Informs the window that it has become the key window.
- [resignKeyWindow](resignkey%28%29.md): Resigns the window’s key window status.
