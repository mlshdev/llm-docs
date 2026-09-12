> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowdelegate/windowdidchangescreen(_:)](https://developer.apple.com/documentation/appkit/nswindowdelegate/windowdidchangescreen(_:))

# windowDidChangeScreen(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the delegate that the window has changed screens.

## Declaration

```swift
@MainActor optional func windowDidChangeScreen(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [didChangeScreenNotification](../nswindow/didchangescreennotification.md).

<a id="Discussion"></a>

## Discussion

You can retrieve the `NSWindow` object in question by sending [object](https://developer.apple.com/documentation/foundation/nsnotification/object) to `notification`.

## See Also

### Moving Windows

- [windowWillMove(\_:)](windowwillmove%28__%29.md): Tells the delegate that the window is about to move.
- [windowDidMove(\_:)](windowdidmove%28__%29.md): Tells the delegate that the window has moved.
- [windowDidChangeScreenProfile(\_:)](windowdidchangescreenprofile%28__%29.md): Tells the delegate that the window has changed screen display profiles.
- [windowDidChangeBackingProperties(\_:)](windowdidchangebackingproperties%28__%29.md): Tells the delegate that the window backing properties changed.

# windowDidChangeScreen: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the window has changed screens.

## Declaration

```objectivec
- (void) windowDidChangeScreen:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSWindowDidChangeScreenNotification](../nswindow/didchangescreennotification.md).

<a id="Discussion"></a>

## Discussion

You can retrieve the `NSWindow` object in question by sending [object](https://developer.apple.com/documentation/foundation/nsnotification/object) to `notification`.

## See Also

### Moving Windows

- [windowWillMove:](windowwillmove%28__%29.md): Tells the delegate that the window is about to move.
- [windowDidMove:](windowdidmove%28__%29.md): Tells the delegate that the window has moved.
- [windowDidChangeScreenProfile:](windowdidchangescreenprofile%28__%29.md): Tells the delegate that the window has changed screen display profiles.
- [windowDidChangeBackingProperties:](windowdidchangebackingproperties%28__%29.md): Tells the delegate that the window backing properties changed.
