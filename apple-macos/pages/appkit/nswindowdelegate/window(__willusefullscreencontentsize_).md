> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowdelegate/window(_:willusefullscreencontentsize:)](https://developer.apple.com/documentation/appkit/nswindowdelegate/window(_:willusefullscreencontentsize:))

# window(\_:willUseFullScreenContentSize:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Called to allow the delegate to modify the full-screen content size.

## Declaration

```swift
@MainActor optional func window(_ window: NSWindow, willUseFullScreenContentSize proposedSize: NSSize) -> NSSize
```

## Parameters

- `window`: The window to enter to full-screen mode.
- `proposedSize`: The proposed window size.

<a id="return-value"></a>

## Return Value

The window size to use when displaying content size.

## See Also

### Managing Full-Screen Presentation

- [window(\_:willUseFullScreenPresentationOptions:)](window%28__willusefullscreenpresentationoptions_%29.md): Returns the presentation options the window uses when transitioning to full-screen mode.
- [windowWillEnterFullScreen(\_:)](windowwillenterfullscreen%28__%29.md): The window is about to enter full-screen mode.
- [windowDidEnterFullScreen(\_:)](windowdidenterfullscreen%28__%29.md): The window has entered full-screen mode.
- [windowWillExitFullScreen(\_:)](windowwillexitfullscreen%28__%29.md): The window is about to exit full-screen mode.
- [windowDidExitFullScreen(\_:)](windowdidexitfullscreen%28__%29.md): The window has left full-screen mode.

# window:willUseFullScreenContentSize: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Called to allow the delegate to modify the full-screen content size.

## Declaration

```objectivec
- (NSSize) window:(NSWindow *) window willUseFullScreenContentSize:(NSSize) proposedSize;
```

## Parameters

- `window`: The window to enter to full-screen mode.
- `proposedSize`: The proposed window size.

<a id="return-value"></a>

## Return Value

The window size to use when displaying content size.

## See Also

### Managing Full-Screen Presentation

- [window:willUseFullScreenPresentationOptions:](window%28__willusefullscreenpresentationoptions_%29.md): Returns the presentation options the window uses when transitioning to full-screen mode.
- [windowWillEnterFullScreen:](windowwillenterfullscreen%28__%29.md): The window is about to enter full-screen mode.
- [windowDidEnterFullScreen:](windowdidenterfullscreen%28__%29.md): The window has entered full-screen mode.
- [windowWillExitFullScreen:](windowwillexitfullscreen%28__%29.md): The window is about to exit full-screen mode.
- [windowDidExitFullScreen:](windowdidexitfullscreen%28__%29.md): The window has left full-screen mode.
