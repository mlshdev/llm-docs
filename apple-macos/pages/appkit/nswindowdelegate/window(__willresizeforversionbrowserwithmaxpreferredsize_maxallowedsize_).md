> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowdelegate/window(_:willresizeforversionbrowserwithmaxpreferredsize:maxallowedsize:)](https://developer.apple.com/documentation/appkit/nswindowdelegate/window(_:willresizeforversionbrowserwithmaxpreferredsize:maxallowedsize:))

# window(\_:willResizeForVersionBrowserWithMaxPreferredSize:maxAllowedSize:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the delegate the window will resize for presentation during version browsing.

## Declaration

```swift
@MainActor optional func window(_ window: NSWindow, willResizeForVersionBrowserWithMaxPreferredSize maxPreferredFrameSize: NSSize, maxAllowedSize maxAllowedFrameSize: NSSize) -> NSSize
```

## Parameters

- `window`: The window being presented in a version browser.
- `maxPreferredFrameSize`: The maximum size the version browser would prefer the window to be.
- `maxAllowedFrameSize`: The maximum allowed size for the window (the full-screen frame minus the margins required to ensure the Versions controls are still visible).

<a id="return-value"></a>

## Return Value

The size that the window should be.

<a id="Discussion"></a>

## Discussion

Windows entering the version browser will be resized to the size returned by this method. If either dimension of the returned size is larger than the `maxPreferredFrameSize`, the window will also be scaled down to ensure it fits properly in the version browser.

If this method is not implemented, the version browser will use [windowWillUseStandardFrame(\_:defaultFrame:)](windowwillusestandardframe%28__defaultframe_%29.md) to determine the resulting window frame size.

## See Also

### Managing Presentation in Version Browsers

- [windowWillEnterVersionBrowser(\_:)](windowwillenterversionbrowser%28__%29.md): Tells the delegate the window is about to enter version browsing.
- [windowDidEnterVersionBrowser(\_:)](windowdidenterversionbrowser%28__%29.md): Tells the delegate that the window has entered version browsing.
- [windowWillExitVersionBrowser(\_:)](windowwillexitversionbrowser%28__%29.md): Tells the delegate that the window is about to leave version browsing.
- [windowDidExitVersionBrowser(\_:)](windowdidexitversionbrowser%28__%29.md): Tells the delegate that the window has left version browsing.

# window:willResizeForVersionBrowserWithMaxPreferredSize:maxAllowedSize: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the delegate the window will resize for presentation during version browsing.

## Declaration

```objectivec
- (NSSize) window:(NSWindow *) window willResizeForVersionBrowserWithMaxPreferredSize:(NSSize) maxPreferredFrameSize maxAllowedSize:(NSSize) maxAllowedFrameSize;
```

## Parameters

- `window`: The window being presented in a version browser.
- `maxPreferredFrameSize`: The maximum size the version browser would prefer the window to be.
- `maxAllowedFrameSize`: The maximum allowed size for the window (the full-screen frame minus the margins required to ensure the Versions controls are still visible).

<a id="return-value"></a>

## Return Value

The size that the window should be.

<a id="Discussion"></a>

## Discussion

Windows entering the version browser will be resized to the size returned by this method. If either dimension of the returned size is larger than the `maxPreferredFrameSize`, the window will also be scaled down to ensure it fits properly in the version browser.

If this method is not implemented, the version browser will use [windowWillUseStandardFrame:defaultFrame:](windowwillusestandardframe%28__defaultframe_%29.md) to determine the resulting window frame size.

## See Also

### Managing Presentation in Version Browsers

- [windowWillEnterVersionBrowser:](windowwillenterversionbrowser%28__%29.md): Tells the delegate the window is about to enter version browsing.
- [windowDidEnterVersionBrowser:](windowdidenterversionbrowser%28__%29.md): Tells the delegate that the window has entered version browsing.
- [windowWillExitVersionBrowser:](windowwillexitversionbrowser%28__%29.md): Tells the delegate that the window is about to leave version browsing.
- [windowDidExitVersionBrowser:](windowdidexitversionbrowser%28__%29.md): Tells the delegate that the window has left version browsing.
