> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowdelegate/windowdidchangescreenprofile(_:)](https://developer.apple.com/documentation/appkit/nswindowdelegate/windowdidchangescreenprofile(_:))

# windowDidChangeScreenProfile(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the delegate that the window has changed screen display profiles.

## Declaration

```swift
@MainActor optional func windowDidChangeScreenProfile(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [didChangeScreenProfileNotification](../nswindow/didchangescreenprofilenotification.md).

<a id="Discussion"></a>

## Discussion

You can retrieve the `NSWindow` object in question by sending [object](https://developer.apple.com/documentation/foundation/nsnotification/object) to `notification`.

If your app runs in macOS 10.7.3 or later, you should instead watch for the notification `NSWindowDidChangeBackingPropertiesNotification`.

## See Also

### Moving Windows

- [windowWillMove(\_:)](windowwillmove%28__%29.md): Tells the delegate that the window is about to move.
- [windowDidMove(\_:)](windowdidmove%28__%29.md): Tells the delegate that the window has moved.
- [windowDidChangeScreen(\_:)](windowdidchangescreen%28__%29.md): Tells the delegate that the window has changed screens.
- [windowDidChangeBackingProperties(\_:)](windowdidchangebackingproperties%28__%29.md): Tells the delegate that the window backing properties changed.

# windowDidChangeScreenProfile: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the window has changed screen display profiles.

## Declaration

```objectivec
- (void) windowDidChangeScreenProfile:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSWindowDidChangeScreenProfileNotification](../nswindow/didchangescreenprofilenotification.md).

<a id="Discussion"></a>

## Discussion

You can retrieve the `NSWindow` object in question by sending [object](https://developer.apple.com/documentation/foundation/nsnotification/object) to `notification`.

If your app runs in macOS 10.7.3 or later, you should instead watch for the notification `NSWindowDidChangeBackingPropertiesNotification`.

## See Also

### Moving Windows

- [windowWillMove:](windowwillmove%28__%29.md): Tells the delegate that the window is about to move.
- [windowDidMove:](windowdidmove%28__%29.md): Tells the delegate that the window has moved.
- [windowDidChangeScreen:](windowdidchangescreen%28__%29.md): Tells the delegate that the window has changed screens.
- [windowDidChangeBackingProperties:](windowdidchangebackingproperties%28__%29.md): Tells the delegate that the window backing properties changed.
