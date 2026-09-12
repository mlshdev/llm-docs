> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/resignkey()](https://developer.apple.com/documentation/appkit/nswindow/resignkey())

# resignKey() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Resigns the window’s key window status.

## Declaration

```swift
func resignKey()
```

<a id="Discussion"></a>

## Discussion

This method sends [resignKey()](resignkey%28%29.md) to the window’s first responder, sends [windowDidResignKey(\_:)](../nswindowdelegate/windowdidresignkey%28__%29.md) to the window’s delegate, and posts [didResignKeyNotification](didresignkeynotification.md) to the default notification center.

Never invoke this method directly.

## See Also

### Related Documentation

- [resignMain()](resignmain%28%29.md): Resigns the window’s main window status.

### Managing Key Status

- [isKeyWindow](iskeywindow.md): A Boolean value that indicates whether the window is the key window for the application.
- [canBecomeKey](canbecomekey.md): A Boolean value that indicates whether the window can become the key window.
- [makeKey()](makekey%28%29.md): Makes the window the key window.
- [makeKeyAndOrderFront(\_:)](makekeyandorderfront%28__%29.md): Moves the window to the front of the screen list, within its level, and makes it the key window; that is, it shows the window.
- [becomeKey()](becomekey%28%29.md): Informs the window that it has become the key window.

# resignKeyWindow (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Resigns the window’s key window status.

## Declaration

```objectivec
- (void) resignKeyWindow;
```

<a id="Discussion"></a>

## Discussion

This method sends [resignKeyWindow](resignkey%28%29.md) to the window’s first responder, sends [windowDidResignKey:](../nswindowdelegate/windowdidresignkey%28__%29.md) to the window’s delegate, and posts [NSWindowDidResignKeyNotification](didresignkeynotification.md) to the default notification center.

Never invoke this method directly.

## See Also

### Related Documentation

- [resignMainWindow](resignmain%28%29.md): Resigns the window’s main window status.

### Managing Key Status

- [keyWindow](iskeywindow.md): A Boolean value that indicates whether the window is the key window for the application.
- [canBecomeKeyWindow](canbecomekey.md): A Boolean value that indicates whether the window can become the key window.
- [makeKeyWindow](makekey%28%29.md): Makes the window the key window.
- [makeKeyAndOrderFront:](makekeyandorderfront%28__%29.md): Moves the window to the front of the screen list, within its level, and makes it the key window; that is, it shows the window.
- [becomeKeyWindow](becomekey%28%29.md): Informs the window that it has become the key window.
