> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/didopenwindow(_:)](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/didopenwindow(_:))

# didOpenWindow(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called by the app when a new window is opened to fire appropriate events with only this extension.

## Declaration

```swift
func didOpenWindow(_ newWindow: any WKWebExtensionWindow)
```

## Parameters

- `newWindow`: The newly opened window.

<a id="discussion"></a>

## Discussion

This method informs only the specific extension of the opening of a new window. If the intention is to inform all loaded extensions consistently, you should use the respective method on the extension controller instead.

## See Also

### Related Documentation

- [didCloseWindow(\_:)](didclosewindow%28__%29.md): Called by the app when a window is closed to fire appropriate events with only this extension.
- [openWindows](openwindows.md): The open windows that are exposed to this extension.

# didOpenWindow: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called by the app when a new window is opened to fire appropriate events with only this extension.

## Declaration

```objectivec
- (void) didOpenWindow:(id<WKWebExtensionWindow>) newWindow;
```

## Parameters

- `newWindow`: The newly opened window.

<a id="discussion"></a>

## Discussion

This method informs only the specific extension of the opening of a new window. If the intention is to inform all loaded extensions consistently, you should use the respective method on the extension controller instead.

## See Also

### Related Documentation

- [didCloseWindow:](didclosewindow%28__%29.md): Called by the app when a window is closed to fire appropriate events with only this extension.
- [openWindows](openwindows.md): The open windows that are exposed to this extension.
