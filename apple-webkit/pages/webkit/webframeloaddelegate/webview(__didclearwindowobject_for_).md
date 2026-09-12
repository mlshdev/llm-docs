> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webframeloaddelegate/webview(_:didclearwindowobject:for:)](https://developer.apple.com/documentation/webkit/webframeloaddelegate/webview(_:didclearwindowobject:for:))

# webView(\_:didClearWindowObject:for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Called when the JavaScript window object in a frame is ready for loading.

## Declaration

```swift
optional func webView(_ webView: WebView!, didClearWindowObject windowObject: WebScriptObject!, for frame: WebFrame!)
```

## Parameters

- `webView`: The web view sending this message.
- `windowObject`: The cleared JavaScript window object.
- `frame`: The frame containing the JavaScript window object.

<a id="Discussion"></a>

## Discussion

Use this method to set custom properties on the window object before the page is actually loaded. Every time a frame loads or is reloaded all DOM properties are cleared from the window object so the new page has a fresh window object to use. If the page you are loading depends on specific window object properties to exist, they should be added at this point before any scripts are executed.

# webView:didClearWindowObject:forFrame: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Called when the JavaScript window object in a frame is ready for loading.

## Declaration

```objectivec
- (void) webView:(WebView *) webView didClearWindowObject:(WebScriptObject *) windowObject forFrame:(WebFrame *) frame;
```

## Parameters

- `webView`: The web view sending this message.
- `windowObject`: The cleared JavaScript window object.
- `frame`: The frame containing the JavaScript window object.

<a id="Discussion"></a>

## Discussion

Use this method to set custom properties on the window object before the page is actually loaded. Every time a frame loads or is reloaded all DOM properties are cleared from the window object so the new page has a fresh window object to use. If the page you are loading depends on specific window object properties to exist, they should be added at this point before any scripts are executed.
