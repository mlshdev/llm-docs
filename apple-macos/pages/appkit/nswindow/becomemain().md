> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/becomemain()](https://developer.apple.com/documentation/appkit/nswindow/becomemain())

# becomeMain() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the window that it has become the main window.

## Declaration

```swift
func becomeMain()
```

<a id="Discussion"></a>

## Discussion

This method posts an [didBecomeMainNotification](didbecomemainnotification.md) to the default notification center.

Never invoke this method directly.

## See Also

### Related Documentation

- [becomeKey()](becomekey%28%29.md): Informs the window that it has become the key window.

### Managing Main Status

- [isMainWindow](ismainwindow.md): A Boolean value that indicates whether the window is the application’s main window.
- [canBecomeMain](canbecomemain.md): A Boolean value that indicates whether the window can become the application’s main window.
- [makeMain()](makemain%28%29.md): Makes the window the main window.
- [resignMain()](resignmain%28%29.md): Resigns the window’s main window status.

# becomeMainWindow (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the window that it has become the main window.

## Declaration

```objectivec
- (void) becomeMainWindow;
```

<a id="Discussion"></a>

## Discussion

This method posts an [NSWindowDidBecomeMainNotification](didbecomemainnotification.md) to the default notification center.

Never invoke this method directly.

## See Also

### Related Documentation

- [becomeKeyWindow](becomekey%28%29.md): Informs the window that it has become the key window.

### Managing Main Status

- [mainWindow](ismainwindow.md): A Boolean value that indicates whether the window is the application’s main window.
- [canBecomeMainWindow](canbecomemain.md): A Boolean value that indicates whether the window can become the application’s main window.
- [makeMainWindow](makemain%28%29.md): Makes the window the main window.
- [resignMainWindow](resignmain%28%29.md): Resigns the window’s main window status.
