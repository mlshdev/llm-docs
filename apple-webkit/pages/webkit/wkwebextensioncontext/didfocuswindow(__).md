> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/didfocuswindow(_:)](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/didfocuswindow(_:))

# didFocusWindow(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called by the app when a window gains focus to fire appropriate events with only this extension.

## Declaration

```swift
func didFocusWindow(_ focusedWindow: (any WKWebExtensionWindow)?)
```

## Parameters

- `focusedWindow`: The window that gained focus, or `nil` if no window has focus or a window has focus that is not visible to this extension.

<a id="discussion"></a>

## Discussion

This method informs only the specific extension that a window has gained focus. If the intention is to inform all loaded extensions consistently, you should use the respective method on the extension controller instead.

# didFocusWindow: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called by the app when a window gains focus to fire appropriate events with only this extension.

## Declaration

```objectivec
- (void) didFocusWindow:(id<WKWebExtensionWindow>) focusedWindow;
```

## Parameters

- `focusedWindow`: The window that gained focus, or `nil` if no window has focus or a window has focus that is not visible to this extension.

<a id="discussion"></a>

## Discussion

This method informs only the specific extension that a window has gained focus. If the intention is to inform all loaded extensions consistently, you should use the respective method on the extension controller instead.
