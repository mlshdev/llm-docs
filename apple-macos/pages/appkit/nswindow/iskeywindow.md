> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/iskeywindow](https://developer.apple.com/documentation/appkit/nswindow/iskeywindow)

# isKeyWindow (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the window is the key window for the application.

## Declaration

```swift
var isKeyWindow: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the window is the key window for the application; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [isMainWindow](ismainwindow.md): A Boolean value that indicates whether the window is the application’s main window.

### Managing Key Status

- [canBecomeKey](canbecomekey.md): A Boolean value that indicates whether the window can become the key window.
- [makeKey()](makekey%28%29.md): Makes the window the key window.
- [makeKeyAndOrderFront(\_:)](makekeyandorderfront%28__%29.md): Moves the window to the front of the screen list, within its level, and makes it the key window; that is, it shows the window.
- [becomeKey()](becomekey%28%29.md): Informs the window that it has become the key window.
- [resignKey()](resignkey%28%29.md): Resigns the window’s key window status.

# keyWindow (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the window is the key window for the application.

## Declaration

```objectivec
@property (readonly, getter=isKeyWindow) BOOL keyWindow;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the window is the key window for the application; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [mainWindow](ismainwindow.md): A Boolean value that indicates whether the window is the application’s main window.

### Managing Key Status

- [canBecomeKeyWindow](canbecomekey.md): A Boolean value that indicates whether the window can become the key window.
- [makeKeyWindow](makekey%28%29.md): Makes the window the key window.
- [makeKeyAndOrderFront:](makekeyandorderfront%28__%29.md): Moves the window to the front of the screen list, within its level, and makes it the key window; that is, it shows the window.
- [becomeKeyWindow](becomekey%28%29.md): Informs the window that it has become the key window.
- [resignKeyWindow](resignkey%28%29.md): Resigns the window’s key window status.
