> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowdelegate/windowdidupdate(_:)](https://developer.apple.com/documentation/appkit/nswindowdelegate/windowdidupdate(_:))

# windowDidUpdate(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the delegate that the window received an [update()](../nswindow/update%28%29.md) message.

## Declaration

```swift
@MainActor optional func windowDidUpdate(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [didUpdateNotification](../nswindow/didupdatenotification.md)

<a id="Discussion"></a>

## Discussion

You can retrieve the window object in question by sending [object](https://developer.apple.com/documentation/foundation/nsnotification/object) to `notification`.

# windowDidUpdate: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the window received an [update](../nswindow/update%28%29.md) message.

## Declaration

```objectivec
- (void) windowDidUpdate:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSWindowDidUpdateNotification](../nswindow/didupdatenotification.md)

<a id="Discussion"></a>

## Discussion

You can retrieve the window object in question by sending [object](https://developer.apple.com/documentation/foundation/nsnotification/object) to `notification`.
