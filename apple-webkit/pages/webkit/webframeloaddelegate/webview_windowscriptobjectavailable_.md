> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webframeloaddelegate/webview:windowscriptobjectavailable:](https://developer.apple.com/documentation/webkit/webframeloaddelegate/webview:windowscriptobjectavailable:)

# webView:windowScriptObjectAvailable:

**Interface language:** Objective-C

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.5)

Called when a frame’s scripting object for a page is available. Use the [webView:didClearWindowObject:forFrame:](webview%28__didclearwindowobject_for_%29.md) method instead.

## Declaration

```objectivec
- (void) webView:(WebView *) webView windowScriptObjectAvailable:(WebScriptObject *) windowScriptObject;
```

## Parameters

- `webView`: The web view containing the frame.
- `windowScriptObject`: The window object in the scripting environment.

<a id="Discussion"></a>

## Discussion

This method is invoked before the page is actually loaded.

## See Also

### Related Documentation

- [windowScriptObject](../webview-swift.class/windowscriptobject.md): Deprecated. The receiver’s window object from the scripting environment.
