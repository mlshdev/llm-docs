> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowdelegate/window(_:willusefullscreenpresentationoptions:)](https://developer.apple.com/documentation/appkit/nswindowdelegate/window(_:willusefullscreenpresentationoptions:))

# window(\_:willUseFullScreenPresentationOptions:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns the presentation options the window uses when transitioning to full-screen mode.

## Declaration

```swift
@MainActor optional func window(_ window: NSWindow, willUseFullScreenPresentationOptions proposedOptions: NSApplication.PresentationOptions = []) -> NSApplication.PresentationOptions
```

## Parameters

- `window`: The window to enter to full-screen mode.
- `proposedOptions`: The proposed options. See [NSApplication.PresentationOptions](../nsapplication/presentationoptions-swift.struct.md) for the possible values.

<a id="return-value"></a>

## Return Value

The options the window should use when transitioning to full-screen mode. These may be the same as the `proposedOptions` or may be modified.

## See Also

### Managing Full-Screen Presentation

- [window(\_:willUseFullScreenContentSize:)](window%28__willusefullscreencontentsize_%29.md): Called to allow the delegate to modify the full-screen content size.
- [windowWillEnterFullScreen(\_:)](windowwillenterfullscreen%28__%29.md): The window is about to enter full-screen mode.
- [windowDidEnterFullScreen(\_:)](windowdidenterfullscreen%28__%29.md): The window has entered full-screen mode.
- [windowWillExitFullScreen(\_:)](windowwillexitfullscreen%28__%29.md): The window is about to exit full-screen mode.
- [windowDidExitFullScreen(\_:)](windowdidexitfullscreen%28__%29.md): The window has left full-screen mode.

# window:willUseFullScreenPresentationOptions: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns the presentation options the window uses when transitioning to full-screen mode.

## Declaration

```objectivec
- (NSApplicationPresentationOptions) window:(NSWindow *) window willUseFullScreenPresentationOptions:(NSApplicationPresentationOptions) proposedOptions;
```

## Parameters

- `window`: The window to enter to full-screen mode.
- `proposedOptions`: The proposed options. See [NSApplicationPresentationOptions](../nsapplication/presentationoptions-swift.struct.md) for the possible values.

<a id="return-value"></a>

## Return Value

The options the window should use when transitioning to full-screen mode. These may be the same as the `proposedOptions` or may be modified.

## See Also

### Managing Full-Screen Presentation

- [window:willUseFullScreenContentSize:](window%28__willusefullscreencontentsize_%29.md): Called to allow the delegate to modify the full-screen content size.
- [windowWillEnterFullScreen:](windowwillenterfullscreen%28__%29.md): The window is about to enter full-screen mode.
- [windowDidEnterFullScreen:](windowdidenterfullscreen%28__%29.md): The window has entered full-screen mode.
- [windowWillExitFullScreen:](windowwillexitfullscreen%28__%29.md): The window is about to exit full-screen mode.
- [windowDidExitFullScreen:](windowdidexitfullscreen%28__%29.md): The window has left full-screen mode.
