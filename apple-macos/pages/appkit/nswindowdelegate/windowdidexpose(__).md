> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowdelegate/windowdidexpose(_:)](https://developer.apple.com/documentation/appkit/nswindowdelegate/windowdidexpose(_:))

# windowDidExpose(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the delegate that the window has been exposed.

## Declaration

```swift
@MainActor optional func windowDidExpose(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [didExposeNotification](../nswindow/didexposenotification.md).

<a id="Discussion"></a>

## Discussion

You can retrieve the window object in question by sending [object](https://developer.apple.com/documentation/foundation/nsnotification/object) to `notification`.

# windowDidExpose: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the window has been exposed.

## Declaration

```objectivec
- (void) windowDidExpose:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSWindowDidExposeNotification](../nswindow/didexposenotification.md).

<a id="Discussion"></a>

## Discussion

You can retrieve the window object in question by sending [object](https://developer.apple.com/documentation/foundation/nsnotification/object) to `notification`.
