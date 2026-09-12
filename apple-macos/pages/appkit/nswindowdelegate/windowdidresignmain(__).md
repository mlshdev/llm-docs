> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowdelegate/windowdidresignmain(_:)](https://developer.apple.com/documentation/appkit/nswindowdelegate/windowdidresignmain(_:))

# windowDidResignMain(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the delegate that the window has resigned main window status.

## Declaration

```swift
@MainActor optional func windowDidResignMain(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [didResignMainNotification](../nswindow/didresignmainnotification.md).

<a id="Discussion"></a>

## Discussion

You can retrieve the window object in question by sending [object](https://developer.apple.com/documentation/foundation/nsnotification/object) to `notification`.

## See Also

### Managing Main Status

- [windowDidBecomeMain(\_:)](windowdidbecomemain%28__%29.md): Tells the delegate that the window has become main.

# windowDidResignMain: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the window has resigned main window status.

## Declaration

```objectivec
- (void) windowDidResignMain:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSWindowDidResignMainNotification](../nswindow/didresignmainnotification.md).

<a id="Discussion"></a>

## Discussion

You can retrieve the window object in question by sending [object](https://developer.apple.com/documentation/foundation/nsnotification/object) to `notification`.

## See Also

### Managing Main Status

- [windowDidBecomeMain:](windowdidbecomemain%28__%29.md): Tells the delegate that the window has become main.
