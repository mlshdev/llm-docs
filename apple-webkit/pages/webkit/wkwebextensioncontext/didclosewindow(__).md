> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/didclosewindow(_:)](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/didclosewindow(_:))

# didCloseWindow(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called by the app when a window is closed to fire appropriate events with only this extension.

## Declaration

```swift
func didCloseWindow(_ closedWindow: any WKWebExtensionWindow)
```

## Parameters

- `closedWindow`: The window that was closed.

<a id="discussion"></a>

## Discussion

This method informs only the specific extension of the closure of a window. If the intention is to inform all loaded extensions consistently, you should use the respective method on the extension controller instead.

## See Also

### Related Documentation

- [didOpenWindow(\_:)](didopenwindow%28__%29.md): Called by the app when a new window is opened to fire appropriate events with only this extension.
- [openWindows](openwindows.md): The open windows that are exposed to this extension.

# didCloseWindow: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called by the app when a window is closed to fire appropriate events with only this extension.

## Declaration

```objectivec
- (void) didCloseWindow:(id<WKWebExtensionWindow>) closedWindow;
```

## Parameters

- `closedWindow`: The window that was closed.

<a id="discussion"></a>

## Discussion

This method informs only the specific extension of the closure of a window. If the intention is to inform all loaded extensions consistently, you should use the respective method on the extension controller instead.

## See Also

### Related Documentation

- [didOpenWindow:](didopenwindow%28__%29.md): Called by the app when a new window is opened to fire appropriate events with only this extension.
- [openWindows](openwindows.md): The open windows that are exposed to this extension.
