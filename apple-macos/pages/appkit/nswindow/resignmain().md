> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/resignmain()](https://developer.apple.com/documentation/appkit/nswindow/resignmain())

# resignMain() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Resigns the window’s main window status.

## Declaration

```swift
func resignMain()
```

<a id="Discussion"></a>

## Discussion

This method sends [windowDidResignMain(\_:)](../nswindowdelegate/windowdidresignmain%28__%29.md) to the window’s delegate and posts [didResignMainNotification](didresignmainnotification.md) to the default notification center.

Never invoke this method directly.

## See Also

### Related Documentation

- [resignKey()](resignkey%28%29.md): Resigns the window’s key window status.

### Managing Main Status

- [isMainWindow](ismainwindow.md): A Boolean value that indicates whether the window is the application’s main window.
- [canBecomeMain](canbecomemain.md): A Boolean value that indicates whether the window can become the application’s main window.
- [makeMain()](makemain%28%29.md): Makes the window the main window.
- [becomeMain()](becomemain%28%29.md): Informs the window that it has become the main window.

# resignMainWindow (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Resigns the window’s main window status.

## Declaration

```objectivec
- (void) resignMainWindow;
```

<a id="Discussion"></a>

## Discussion

This method sends [windowDidResignMain:](../nswindowdelegate/windowdidresignmain%28__%29.md) to the window’s delegate and posts [NSWindowDidResignMainNotification](didresignmainnotification.md) to the default notification center.

Never invoke this method directly.

## See Also

### Related Documentation

- [resignKeyWindow](resignkey%28%29.md): Resigns the window’s key window status.

### Managing Main Status

- [mainWindow](ismainwindow.md): A Boolean value that indicates whether the window is the application’s main window.
- [canBecomeMainWindow](canbecomemain.md): A Boolean value that indicates whether the window can become the application’s main window.
- [makeMainWindow](makemain%28%29.md): Makes the window the main window.
- [becomeMainWindow](becomemain%28%29.md): Informs the window that it has become the main window.
