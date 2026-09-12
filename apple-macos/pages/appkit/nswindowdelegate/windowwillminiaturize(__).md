> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowdelegate/windowwillminiaturize(_:)](https://developer.apple.com/documentation/appkit/nswindowdelegate/windowwillminiaturize(_:))

# windowWillMiniaturize(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the delegate that the window is about to be minimized.

## Declaration

```swift
@MainActor optional func windowWillMiniaturize(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [willMiniaturizeNotification](../nswindow/willminiaturizenotification.md).

<a id="Discussion"></a>

## Discussion

You can retrieve the `NSWindow` object in question by sending [object](https://developer.apple.com/documentation/foundation/nsnotification/object) to `notification`.

## See Also

### Minimizing Windows

- [windowDidMiniaturize(\_:)](windowdidminiaturize%28__%29.md): Tells the delegate that the window has been minimized.
- [windowDidDeminiaturize(\_:)](windowdiddeminiaturize%28__%29.md): Tells the delegate that the window has been deminimized.

# windowWillMiniaturize: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the window is about to be minimized.

## Declaration

```objectivec
- (void) windowWillMiniaturize:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSWindowWillMiniaturizeNotification](../nswindow/willminiaturizenotification.md).

<a id="Discussion"></a>

## Discussion

You can retrieve the `NSWindow` object in question by sending [object](https://developer.apple.com/documentation/foundation/nsnotification/object) to `notification`.

## See Also

### Minimizing Windows

- [windowDidMiniaturize:](windowdidminiaturize%28__%29.md): Tells the delegate that the window has been minimized.
- [windowDidDeminiaturize:](windowdiddeminiaturize%28__%29.md): Tells the delegate that the window has been deminimized.
