> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/canbecomekey](https://developer.apple.com/documentation/appkit/nswindow/canbecomekey)

# canBecomeKey (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the window can become the key window.

## Declaration

```swift
var canBecomeKey: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the window can become the key window, otherwise, [false](https://developer.apple.com/documentation/swift/false).

Attempts to make the window the key window are abandoned if the value of this property is [false](https://developer.apple.com/documentation/swift/false). The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the window has a title bar or a resize bar, or [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Managing Key Status

- [isKeyWindow](iskeywindow.md): A Boolean value that indicates whether the window is the key window for the application.
- [makeKey()](makekey%28%29.md): Makes the window the key window.
- [makeKeyAndOrderFront(\_:)](makekeyandorderfront%28__%29.md): Moves the window to the front of the screen list, within its level, and makes it the key window; that is, it shows the window.
- [becomeKey()](becomekey%28%29.md): Informs the window that it has become the key window.
- [resignKey()](resignkey%28%29.md): Resigns the window’s key window status.

# canBecomeKeyWindow (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the window can become the key window.

## Declaration

```objectivec
@property (readonly) BOOL canBecomeKeyWindow;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the window can become the key window, otherwise, [false](https://developer.apple.com/documentation/swift/false).

Attempts to make the window the key window are abandoned if the value of this property is [false](https://developer.apple.com/documentation/swift/false). The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the window has a title bar or a resize bar, or [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Managing Key Status

- [keyWindow](iskeywindow.md): A Boolean value that indicates whether the window is the key window for the application.
- [makeKeyWindow](makekey%28%29.md): Makes the window the key window.
- [makeKeyAndOrderFront:](makekeyandorderfront%28__%29.md): Moves the window to the front of the screen list, within its level, and makes it the key window; that is, it shows the window.
- [becomeKeyWindow](becomekey%28%29.md): Informs the window that it has become the key window.
- [resignKeyWindow](resignkey%28%29.md): Resigns the window’s key window status.
