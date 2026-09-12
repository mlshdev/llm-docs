> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/ismainwindow](https://developer.apple.com/documentation/appkit/nswindow/ismainwindow)

# isMainWindow (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the window is the application’s main window.

## Declaration

```swift
var isMainWindow: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the window is the main window for the application; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [isKeyWindow](iskeywindow.md): A Boolean value that indicates whether the window is the key window for the application.

### Managing Main Status

- [canBecomeMain](canbecomemain.md): A Boolean value that indicates whether the window can become the application’s main window.
- [makeMain()](makemain%28%29.md): Makes the window the main window.
- [becomeMain()](becomemain%28%29.md): Informs the window that it has become the main window.
- [resignMain()](resignmain%28%29.md): Resigns the window’s main window status.

# mainWindow (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the window is the application’s main window.

## Declaration

```objectivec
@property (readonly, getter=isMainWindow) BOOL mainWindow;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the window is the main window for the application; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [keyWindow](iskeywindow.md): A Boolean value that indicates whether the window is the key window for the application.

### Managing Main Status

- [canBecomeMainWindow](canbecomemain.md): A Boolean value that indicates whether the window can become the application’s main window.
- [makeMainWindow](makemain%28%29.md): Makes the window the main window.
- [becomeMainWindow](becomemain%28%29.md): Informs the window that it has become the main window.
- [resignMainWindow](resignmain%28%29.md): Resigns the window’s main window status.
