> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowdelegate/windowwillexitversionbrowser(_:)](https://developer.apple.com/documentation/appkit/nswindowdelegate/windowwillexitversionbrowser(_:))

# windowWillExitVersionBrowser(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the delegate that the window is about to leave version browsing.

## Declaration

```swift
@MainActor optional func windowWillExitVersionBrowser(_ notification: Notification)
```

## Parameters

- `notification`: An [willExitVersionBrowserNotification](../nswindow/willexitversionbrowsernotification.md) notification.

## See Also

### Managing Presentation in Version Browsers

- [window(\_:willResizeForVersionBrowserWithMaxPreferredSize:maxAllowedSize:)](window%28__willresizeforversionbrowserwithmaxpreferredsize_maxallowedsize_%29.md): Tells the delegate the window will resize for presentation during version browsing.
- [windowWillEnterVersionBrowser(\_:)](windowwillenterversionbrowser%28__%29.md): Tells the delegate the window is about to enter version browsing.
- [windowDidEnterVersionBrowser(\_:)](windowdidenterversionbrowser%28__%29.md): Tells the delegate that the window has entered version browsing.
- [windowDidExitVersionBrowser(\_:)](windowdidexitversionbrowser%28__%29.md): Tells the delegate that the window has left version browsing.

# windowWillExitVersionBrowser: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the delegate that the window is about to leave version browsing.

## Declaration

```objectivec
- (void) windowWillExitVersionBrowser:(NSNotification *) notification;
```

## Parameters

- `notification`: An [NSWindowWillExitVersionBrowserNotification](../nswindow/willexitversionbrowsernotification.md) notification.

## See Also

### Managing Presentation in Version Browsers

- [window:willResizeForVersionBrowserWithMaxPreferredSize:maxAllowedSize:](window%28__willresizeforversionbrowserwithmaxpreferredsize_maxallowedsize_%29.md): Tells the delegate the window will resize for presentation during version browsing.
- [windowWillEnterVersionBrowser:](windowwillenterversionbrowser%28__%29.md): Tells the delegate the window is about to enter version browsing.
- [windowDidEnterVersionBrowser:](windowdidenterversionbrowser%28__%29.md): Tells the delegate that the window has entered version browsing.
- [windowDidExitVersionBrowser:](windowdidexitversionbrowser%28__%29.md): Tells the delegate that the window has left version browsing.
