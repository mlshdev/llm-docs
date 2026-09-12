> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowdelegate/windowdidmove(_:)](https://developer.apple.com/documentation/appkit/nswindowdelegate/windowdidmove(_:))

# windowDidMove(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the delegate that the window has moved.

## Declaration

```swift
@MainActor optional func windowDidMove(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [didMoveNotification](../nswindow/didmovenotification.md).

<a id="Discussion"></a>

## Discussion

You can retrieve the `NSWindow` object in question by sending [object](https://developer.apple.com/documentation/foundation/nsnotification/object) to `notification`.

## See Also

### Moving Windows

- [windowWillMove(\_:)](windowwillmove%28__%29.md): Tells the delegate that the window is about to move.
- [windowDidChangeScreen(\_:)](windowdidchangescreen%28__%29.md): Tells the delegate that the window has changed screens.
- [windowDidChangeScreenProfile(\_:)](windowdidchangescreenprofile%28__%29.md): Tells the delegate that the window has changed screen display profiles.
- [windowDidChangeBackingProperties(\_:)](windowdidchangebackingproperties%28__%29.md): Tells the delegate that the window backing properties changed.

# windowDidMove: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the window has moved.

## Declaration

```objectivec
- (void) windowDidMove:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSWindowDidMoveNotification](../nswindow/didmovenotification.md).

<a id="Discussion"></a>

## Discussion

You can retrieve the `NSWindow` object in question by sending [object](https://developer.apple.com/documentation/foundation/nsnotification/object) to `notification`.

## See Also

### Moving Windows

- [windowWillMove:](windowwillmove%28__%29.md): Tells the delegate that the window is about to move.
- [windowDidChangeScreen:](windowdidchangescreen%28__%29.md): Tells the delegate that the window has changed screens.
- [windowDidChangeScreenProfile:](windowdidchangescreenprofile%28__%29.md): Tells the delegate that the window has changed screen display profiles.
- [windowDidChangeBackingProperties:](windowdidchangebackingproperties%28__%29.md): Tells the delegate that the window backing properties changed.
