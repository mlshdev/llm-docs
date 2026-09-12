> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowdelegate/windowdidbecomekey(_:)](https://developer.apple.com/documentation/appkit/nswindowdelegate/windowdidbecomekey(_:))

# windowDidBecomeKey(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the delegate that the window has become the key window.

## Declaration

```swift
@MainActor optional func windowDidBecomeKey(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [didBecomeKeyNotification](../nswindow/didbecomekeynotification.md).

<a id="Discussion"></a>

## Discussion

You can retrieve the window object in question by sending [object](https://developer.apple.com/documentation/foundation/nsnotification/object) to `notification`.

## See Also

### Managing Key Status

- [windowDidResignKey(\_:)](windowdidresignkey%28__%29.md): Tells the delegate that the window has resigned key window status.

# windowDidBecomeKey: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the window has become the key window.

## Declaration

```objectivec
- (void) windowDidBecomeKey:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSWindowDidBecomeKeyNotification](../nswindow/didbecomekeynotification.md).

<a id="Discussion"></a>

## Discussion

You can retrieve the window object in question by sending [object](https://developer.apple.com/documentation/foundation/nsnotification/object) to `notification`.

## See Also

### Managing Key Status

- [windowDidResignKey:](windowdidresignkey%28__%29.md): Tells the delegate that the window has resigned key window status.
