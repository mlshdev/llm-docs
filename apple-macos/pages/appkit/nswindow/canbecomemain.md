> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/canbecomemain](https://developer.apple.com/documentation/appkit/nswindow/canbecomemain)

# canBecomeMain (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the window can become the application’s main window.

## Declaration

```swift
var canBecomeMain: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the window can become the main window; otherwise, [false](https://developer.apple.com/documentation/swift/false).

Attempts to make the window the main window are abandoned if the value of this property is [false](https://developer.apple.com/documentation/swift/false). The value of the property is [true](https://developer.apple.com/documentation/swift/true) if the window is visible, is not an [NSPanel](../nspanel.md) object, and has a title bar or a resize mechanism. Otherwise, the value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Main Status

- [isMainWindow](ismainwindow.md): A Boolean value that indicates whether the window is the application’s main window.
- [makeMain()](makemain%28%29.md): Makes the window the main window.
- [becomeMain()](becomemain%28%29.md): Informs the window that it has become the main window.
- [resignMain()](resignmain%28%29.md): Resigns the window’s main window status.

# canBecomeMainWindow (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the window can become the application’s main window.

## Declaration

```objectivec
@property (readonly) BOOL canBecomeMainWindow;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the window can become the main window; otherwise, [false](https://developer.apple.com/documentation/swift/false).

Attempts to make the window the main window are abandoned if the value of this property is [false](https://developer.apple.com/documentation/swift/false). The value of the property is [true](https://developer.apple.com/documentation/swift/true) if the window is visible, is not an [NSPanel](../nspanel.md) object, and has a title bar or a resize mechanism. Otherwise, the value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Main Status

- [mainWindow](ismainwindow.md): A Boolean value that indicates whether the window is the application’s main window.
- [makeMainWindow](makemain%28%29.md): Makes the window the main window.
- [becomeMainWindow](becomemain%28%29.md): Informs the window that it has become the main window.
- [resignMainWindow](resignmain%28%29.md): Resigns the window’s main window status.
