> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontrollerdelegate/webextensioncontroller(_:focusedwindowfor:)](https://developer.apple.com/documentation/webkit/wkwebextensioncontrollerdelegate/webextensioncontroller(_:focusedwindowfor:))

# webExtensionController(\_:focusedWindowFor:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called when an extension context requests the currently focused window.

## Declaration

```swift
optional func webExtensionController(_ controller: WKWebExtensionController, focusedWindowFor extensionContext: WKWebExtensionContext) -> (any WKWebExtensionWindow)?
```

## Parameters

- `controller`: The web extension controller that is managing the extension.
- `extensionContext`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

This method can be optionally implemented by the app to designate the window currently in focus to the extension.

If not implemented, the first window in the result of [webExtensionController(\_:openWindowsFor:)](webextensioncontroller%28__openwindowsfor_%29.md) is used.

## See Also

### Related Documentation

- [webExtensionController(\_:openWindowsFor:)](webextensioncontroller%28__openwindowsfor_%29.md): Called when an extension context requests the list of ordered open windows.

# webExtensionController:focusedWindowForExtensionContext: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called when an extension context requests the currently focused window.

## Declaration

```objectivec
- (id<WKWebExtensionWindow>) webExtensionController:(WKWebExtensionController *) controller focusedWindowForExtensionContext:(WKWebExtensionContext *) extensionContext;
```

## Parameters

- `controller`: The web extension controller that is managing the extension.
- `extensionContext`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

This method can be optionally implemented by the app to designate the window currently in focus to the extension.

If not implemented, the first window in the result of [webExtensionController:openWindowsForExtensionContext:](webextensioncontroller%28__openwindowsfor_%29.md) is used.

## See Also

### Related Documentation

- [webExtensionController:openWindowsForExtensionContext:](webextensioncontroller%28__openwindowsfor_%29.md): Called when an extension context requests the list of ordered open windows.
