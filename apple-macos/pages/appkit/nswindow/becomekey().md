> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/becomekey()](https://developer.apple.com/documentation/appkit/nswindow/becomekey())

# becomeKey() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the window that it has become the key window.

## Declaration

```swift
func becomeKey()
```

<a id="Discussion"></a>

## Discussion

This method reestablishes the window’s first responder, sends the `becomeKeyWindow` message to that object if it responds, and posts [didBecomeKeyNotification](didbecomekeynotification.md) to the default notification center.

Never invoke this method directly.

## See Also

### Managing Key Status

- [isKeyWindow](iskeywindow.md): A Boolean value that indicates whether the window is the key window for the application.
- [canBecomeKey](canbecomekey.md): A Boolean value that indicates whether the window can become the key window.
- [makeKey()](makekey%28%29.md): Makes the window the key window.
- [makeKeyAndOrderFront(\_:)](makekeyandorderfront%28__%29.md): Moves the window to the front of the screen list, within its level, and makes it the key window; that is, it shows the window.
- [resignKey()](resignkey%28%29.md): Resigns the window’s key window status.

# becomeKeyWindow (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the window that it has become the key window.

## Declaration

```objectivec
- (void) becomeKeyWindow;
```

<a id="Discussion"></a>

## Discussion

This method reestablishes the window’s first responder, sends the `becomeKeyWindow` message to that object if it responds, and posts [NSWindowDidBecomeKeyNotification](didbecomekeynotification.md) to the default notification center.

Never invoke this method directly.

## See Also

### Managing Key Status

- [keyWindow](iskeywindow.md): A Boolean value that indicates whether the window is the key window for the application.
- [canBecomeKeyWindow](canbecomekey.md): A Boolean value that indicates whether the window can become the key window.
- [makeKeyWindow](makekey%28%29.md): Makes the window the key window.
- [makeKeyAndOrderFront:](makekeyandorderfront%28__%29.md): Moves the window to the front of the screen list, within its level, and makes it the key window; that is, it shows the window.
- [resignKeyWindow](resignkey%28%29.md): Resigns the window’s key window status.
