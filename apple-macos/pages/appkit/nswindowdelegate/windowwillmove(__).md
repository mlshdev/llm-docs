> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowdelegate/windowwillmove(_:)](https://developer.apple.com/documentation/appkit/nswindowdelegate/windowwillmove(_:))

# windowWillMove(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the delegate that the window is about to move.

## Declaration

```swift
@MainActor optional func windowWillMove(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [willMoveNotification](../nswindow/willmovenotification.md).

<a id="Discussion"></a>

## Discussion

You can retrieve the `NSWindow` object in question by sending [object](https://developer.apple.com/documentation/foundation/nsnotification/object) to `notification`.

## See Also

### Moving Windows

- [windowDidMove(\_:)](windowdidmove%28__%29.md): Tells the delegate that the window has moved.
- [windowDidChangeScreen(\_:)](windowdidchangescreen%28__%29.md): Tells the delegate that the window has changed screens.
- [windowDidChangeScreenProfile(\_:)](windowdidchangescreenprofile%28__%29.md): Tells the delegate that the window has changed screen display profiles.
- [windowDidChangeBackingProperties(\_:)](windowdidchangebackingproperties%28__%29.md): Tells the delegate that the window backing properties changed.

# windowWillMove: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the window is about to move.

## Declaration

```objectivec
- (void) windowWillMove:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSWindowWillMoveNotification](../nswindow/willmovenotification.md).

<a id="Discussion"></a>

## Discussion

You can retrieve the `NSWindow` object in question by sending [object](https://developer.apple.com/documentation/foundation/nsnotification/object) to `notification`.

## See Also

### Moving Windows

- [windowDidMove:](windowdidmove%28__%29.md): Tells the delegate that the window has moved.
- [windowDidChangeScreen:](windowdidchangescreen%28__%29.md): Tells the delegate that the window has changed screens.
- [windowDidChangeScreenProfile:](windowdidchangescreenprofile%28__%29.md): Tells the delegate that the window has changed screen display profiles.
- [windowDidChangeBackingProperties:](windowdidchangebackingproperties%28__%29.md): Tells the delegate that the window backing properties changed.
