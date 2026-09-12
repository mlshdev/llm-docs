> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowdelegate/windowwillexitfullscreen(_:)](https://developer.apple.com/documentation/appkit/nswindowdelegate/windowwillexitfullscreen(_:))

# windowWillExitFullScreen(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

The window is about to exit full-screen mode.

## Declaration

```swift
@MainActor optional func windowWillExitFullScreen(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [willExitFullScreenNotification](../nswindow/willexitfullscreennotification.md).

## See Also

### Managing Full-Screen Presentation

- [window(\_:willUseFullScreenContentSize:)](window%28__willusefullscreencontentsize_%29.md): Called to allow the delegate to modify the full-screen content size.
- [window(\_:willUseFullScreenPresentationOptions:)](window%28__willusefullscreenpresentationoptions_%29.md): Returns the presentation options the window uses when transitioning to full-screen mode.
- [windowWillEnterFullScreen(\_:)](windowwillenterfullscreen%28__%29.md): The window is about to enter full-screen mode.
- [windowDidEnterFullScreen(\_:)](windowdidenterfullscreen%28__%29.md): The window has entered full-screen mode.
- [windowDidExitFullScreen(\_:)](windowdidexitfullscreen%28__%29.md): The window has left full-screen mode.

# windowWillExitFullScreen: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

The window is about to exit full-screen mode.

## Declaration

```objectivec
- (void) windowWillExitFullScreen:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSWindowWillExitFullScreenNotification](../nswindow/willexitfullscreennotification.md).

## See Also

### Managing Full-Screen Presentation

- [window:willUseFullScreenContentSize:](window%28__willusefullscreencontentsize_%29.md): Called to allow the delegate to modify the full-screen content size.
- [window:willUseFullScreenPresentationOptions:](window%28__willusefullscreenpresentationoptions_%29.md): Returns the presentation options the window uses when transitioning to full-screen mode.
- [windowWillEnterFullScreen:](windowwillenterfullscreen%28__%29.md): The window is about to enter full-screen mode.
- [windowDidEnterFullScreen:](windowdidenterfullscreen%28__%29.md): The window has entered full-screen mode.
- [windowDidExitFullScreen:](windowdidexitfullscreen%28__%29.md): The window has left full-screen mode.
