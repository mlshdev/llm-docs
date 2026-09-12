> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowdelegate/windowdidresignkey(_:)](https://developer.apple.com/documentation/appkit/nswindowdelegate/windowdidresignkey(_:))

# windowDidResignKey(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the delegate that the window has resigned key window status.

## Declaration

```swift
@MainActor optional func windowDidResignKey(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [didResignKeyNotification](../nswindow/didresignkeynotification.md).

<a id="Discussion"></a>

## Discussion

You can retrieve the window object in question by sending [object](https://developer.apple.com/documentation/foundation/nsnotification/object) to `notification`.

## See Also

### Managing Key Status

- [windowDidBecomeKey(\_:)](windowdidbecomekey%28__%29.md): Tells the delegate that the window has become the key window.

# windowDidResignKey: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the window has resigned key window status.

## Declaration

```objectivec
- (void) windowDidResignKey:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSWindowDidResignKeyNotification](../nswindow/didresignkeynotification.md).

<a id="Discussion"></a>

## Discussion

You can retrieve the window object in question by sending [object](https://developer.apple.com/documentation/foundation/nsnotification/object) to `notification`.

## See Also

### Managing Key Status

- [windowDidBecomeKey:](windowdidbecomekey%28__%29.md): Tells the delegate that the window has become the key window.
