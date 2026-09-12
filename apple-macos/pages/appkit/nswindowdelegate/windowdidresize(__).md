> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowdelegate/windowdidresize(_:)](https://developer.apple.com/documentation/appkit/nswindowdelegate/windowdidresize(_:))

# windowDidResize(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the delegate that the window has been resized.

## Declaration

```swift
@MainActor optional func windowDidResize(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [didResizeNotification](../nswindow/didresizenotification.md).

<a id="Discussion"></a>

## Discussion

You can retrieve the window object in question by sending [object](https://developer.apple.com/documentation/foundation/nsnotification/object) to `notification`.

## See Also

### Sizing Windows

- [windowWillResize(\_:to:)](windowwillresize%28__to_%29.md): Tells the delegate that the window is being resized (whether by the user or through one of the `setFrame...` methods other than [setFrame(\_:display:)](../nswindow/setframe%28__display_%29.md)).
- [windowWillStartLiveResize(\_:)](windowwillstartliveresize%28__%29.md): Tells the delegate that the window is about to be live resized.
- [windowDidEndLiveResize(\_:)](windowdidendliveresize%28__%29.md): Tells the delegate that a live resize operation on the window has ended.

# windowDidResize: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the window has been resized.

## Declaration

```objectivec
- (void) windowDidResize:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSWindowDidResizeNotification](../nswindow/didresizenotification.md).

<a id="Discussion"></a>

## Discussion

You can retrieve the window object in question by sending [object](https://developer.apple.com/documentation/foundation/nsnotification/object) to `notification`.

## See Also

### Sizing Windows

- [windowWillResize:toSize:](windowwillresize%28__to_%29.md): Tells the delegate that the window is being resized (whether by the user or through one of the `setFrame...` methods other than [setFrame:display:](../nswindow/setframe%28__display_%29.md)).
- [windowWillStartLiveResize:](windowwillstartliveresize%28__%29.md): Tells the delegate that the window is about to be live resized.
- [windowDidEndLiveResize:](windowdidendliveresize%28__%29.md): Tells the delegate that a live resize operation on the window has ended.
