> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowdelegate/windowdiddeminiaturize(_:)](https://developer.apple.com/documentation/appkit/nswindowdelegate/windowdiddeminiaturize(_:))

# windowDidDeminiaturize(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the delegate that the window has been deminimized.

## Declaration

```swift
@MainActor optional func windowDidDeminiaturize(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [didDeminiaturizeNotification](../nswindow/diddeminiaturizenotification.md)

<a id="Discussion"></a>

## Discussion

You can retrieve the `NSWindow` object in question by sending [object](https://developer.apple.com/documentation/foundation/nsnotification/object) to `notification`.

## See Also

### Minimizing Windows

- [windowWillMiniaturize(\_:)](windowwillminiaturize%28__%29.md): Tells the delegate that the window is about to be minimized.
- [windowDidMiniaturize(\_:)](windowdidminiaturize%28__%29.md): Tells the delegate that the window has been minimized.

# windowDidDeminiaturize: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the window has been deminimized.

## Declaration

```objectivec
- (void) windowDidDeminiaturize:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSWindowDidDeminiaturizeNotification](../nswindow/diddeminiaturizenotification.md)

<a id="Discussion"></a>

## Discussion

You can retrieve the `NSWindow` object in question by sending [object](https://developer.apple.com/documentation/foundation/nsnotification/object) to `notification`.

## See Also

### Minimizing Windows

- [windowWillMiniaturize:](windowwillminiaturize%28__%29.md): Tells the delegate that the window is about to be minimized.
- [windowDidMiniaturize:](windowdidminiaturize%28__%29.md): Tells the delegate that the window has been minimized.
