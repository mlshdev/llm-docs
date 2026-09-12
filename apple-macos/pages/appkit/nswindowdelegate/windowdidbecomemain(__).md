> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowdelegate/windowdidbecomemain(_:)](https://developer.apple.com/documentation/appkit/nswindowdelegate/windowdidbecomemain(_:))

# windowDidBecomeMain(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the delegate that the window has become main.

## Declaration

```swift
@MainActor optional func windowDidBecomeMain(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [didBecomeMainNotification](../nswindow/didbecomemainnotification.md).

<a id="Discussion"></a>

## Discussion

You can retrieve the window object in question by sending [object](https://developer.apple.com/documentation/foundation/nsnotification/object) to `notification`.

## See Also

### Managing Main Status

- [windowDidResignMain(\_:)](windowdidresignmain%28__%29.md): Tells the delegate that the window has resigned main window status.

# windowDidBecomeMain: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the window has become main.

## Declaration

```objectivec
- (void) windowDidBecomeMain:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSWindowDidBecomeMainNotification](../nswindow/didbecomemainnotification.md).

<a id="Discussion"></a>

## Discussion

You can retrieve the window object in question by sending [object](https://developer.apple.com/documentation/foundation/nsnotification/object) to `notification`.

## See Also

### Managing Main Status

- [windowDidResignMain:](windowdidresignmain%28__%29.md): Tells the delegate that the window has resigned main window status.
