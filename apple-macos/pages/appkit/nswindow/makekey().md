> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/makekey()](https://developer.apple.com/documentation/appkit/nswindow/makekey())

# makeKey() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Makes the window the key window.

## Declaration

```swift
func makeKey()
```

## See Also

### Related Documentation

- [makeMain()](makemain%28%29.md): Makes the window the main window.

### Managing Key Status

- [isKeyWindow](iskeywindow.md): A Boolean value that indicates whether the window is the key window for the application.
- [canBecomeKey](canbecomekey.md): A Boolean value that indicates whether the window can become the key window.
- [makeKeyAndOrderFront(\_:)](makekeyandorderfront%28__%29.md): Moves the window to the front of the screen list, within its level, and makes it the key window; that is, it shows the window.
- [becomeKey()](becomekey%28%29.md): Informs the window that it has become the key window.
- [resignKey()](resignkey%28%29.md): Resigns the window’s key window status.

# makeKeyWindow (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Makes the window the key window.

## Declaration

```objectivec
- (void) makeKeyWindow;
```

## See Also

### Related Documentation

- [makeMainWindow](makemain%28%29.md): Makes the window the main window.

### Managing Key Status

- [keyWindow](iskeywindow.md): A Boolean value that indicates whether the window is the key window for the application.
- [canBecomeKeyWindow](canbecomekey.md): A Boolean value that indicates whether the window can become the key window.
- [makeKeyAndOrderFront:](makekeyandorderfront%28__%29.md): Moves the window to the front of the screen list, within its level, and makes it the key window; that is, it shows the window.
- [becomeKeyWindow](becomekey%28%29.md): Informs the window that it has become the key window.
- [resignKeyWindow](resignkey%28%29.md): Resigns the window’s key window status.
