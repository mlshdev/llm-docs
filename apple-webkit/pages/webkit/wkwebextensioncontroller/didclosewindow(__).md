> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontroller/didclosewindow(_:)](https://developer.apple.com/documentation/webkit/wkwebextensioncontroller/didclosewindow(_:))

# didCloseWindow(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Should be called by the app when a window is closed to fire appropriate events with all loaded web extensions.

## Declaration

```swift
func didCloseWindow(_ closedWindow: any WKWebExtensionWindow)
```

<a id="discussion"></a>

## Discussion

- closedWindow: The window that was closed.

This method informs all loaded extensions of the closure of a window, ensuring consistent understanding across extensions.

If the intention is to inform only a specific extension, you should use the respective method on that extension’s context instead.

## See Also

### Related Documentation

- [didOpenWindow(\_:)](didopenwindow%28__%29.md): Should be called by the app when a new window is opened to fire appropriate events with all loaded web extensions.

# didCloseWindow: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Should be called by the app when a window is closed to fire appropriate events with all loaded web extensions.

## Declaration

```objectivec
- (void) didCloseWindow:(id<WKWebExtensionWindow>) closedWindow;
```

<a id="discussion"></a>

## Discussion

- closedWindow: The window that was closed.

This method informs all loaded extensions of the closure of a window, ensuring consistent understanding across extensions.

If the intention is to inform only a specific extension, you should use the respective method on that extension’s context instead.

## See Also

### Related Documentation

- [didOpenWindow:](didopenwindow%28__%29.md): Should be called by the app when a new window is opened to fire appropriate events with all loaded web extensions.
