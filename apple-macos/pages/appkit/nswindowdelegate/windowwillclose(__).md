> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowdelegate/windowwillclose(_:)](https://developer.apple.com/documentation/appkit/nswindowdelegate/windowwillclose(_:))

# windowWillClose(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the delegate that the window is about to close.

## Declaration

```swift
@MainActor optional func windowWillClose(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [willCloseNotification](../nswindow/willclosenotification.md).

<a id="Discussion"></a>

## Discussion

You can retrieve the `NSWindow` object in question by sending [object](https://developer.apple.com/documentation/foundation/nsnotification/object) to `notification`.

## See Also

### Closing Windows

- [windowShouldClose(\_:)](windowshouldclose%28__%29.md): Tells the delegate that the user has attempted to close a window or the window has received a [performClose(\_:)](../nswindow/performclose%28__%29.md) message.

# windowWillClose: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the window is about to close.

## Declaration

```objectivec
- (void) windowWillClose:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSWindowWillCloseNotification](../nswindow/willclosenotification.md).

<a id="Discussion"></a>

## Discussion

You can retrieve the `NSWindow` object in question by sending [object](https://developer.apple.com/documentation/foundation/nsnotification/object) to `notification`.

## See Also

### Closing Windows

- [windowShouldClose:](windowshouldclose%28__%29.md): Tells the delegate that the user has attempted to close a window or the window has received a [performClose:](../nswindow/performclose%28__%29.md) message.
