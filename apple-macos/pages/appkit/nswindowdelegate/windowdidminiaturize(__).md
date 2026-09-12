> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowdelegate/windowdidminiaturize(_:)](https://developer.apple.com/documentation/appkit/nswindowdelegate/windowdidminiaturize(_:))

# windowDidMiniaturize(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the delegate that the window has been minimized.

## Declaration

```swift
@MainActor optional func windowDidMiniaturize(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [didMiniaturizeNotification](../nswindow/didminiaturizenotification.md).

<a id="Discussion"></a>

## Discussion

You can retrieve the `NSWindow` object in question by sending [object](https://developer.apple.com/documentation/foundation/nsnotification/object) to `notification`.

## See Also

### Minimizing Windows

- [windowWillMiniaturize(\_:)](windowwillminiaturize%28__%29.md): Tells the delegate that the window is about to be minimized.
- [windowDidDeminiaturize(\_:)](windowdiddeminiaturize%28__%29.md): Tells the delegate that the window has been deminimized.

# windowDidMiniaturize: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the window has been minimized.

## Declaration

```objectivec
- (void) windowDidMiniaturize:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSWindowDidMiniaturizeNotification](../nswindow/didminiaturizenotification.md).

<a id="Discussion"></a>

## Discussion

You can retrieve the `NSWindow` object in question by sending [object](https://developer.apple.com/documentation/foundation/nsnotification/object) to `notification`.

## See Also

### Minimizing Windows

- [windowWillMiniaturize:](windowwillminiaturize%28__%29.md): Tells the delegate that the window is about to be minimized.
- [windowDidDeminiaturize:](windowdiddeminiaturize%28__%29.md): Tells the delegate that the window has been deminimized.
