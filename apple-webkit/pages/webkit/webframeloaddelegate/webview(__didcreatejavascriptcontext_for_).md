> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webframeloaddelegate/webview(_:didcreatejavascriptcontext:for:)](https://developer.apple.com/documentation/webkit/webframeloaddelegate/webview(_:didcreatejavascriptcontext:for:))

# webView(\_:didCreateJavaScriptContext:for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Notifies the delegate that a new JavaScript context has been created.

## Declaration

```swift
optional func webView(_ webView: WebView!, didCreateJavaScriptContext context: JSContext!, for frame: WebFrame!)
```

## Parameters

- `webView`: The view sending the message.
- `context`: The [JSContext](https://developer.apple.com/documentation/javascriptcore/jscontext) representing the frame’s JavaScript window object.
- `frame`: The [WebFrame](../webframe.md) to which the context belongs.

<a id="Discussion"></a>

## Discussion

If a delegate implements this method along with either [webView(\_:didClearWindowObject:for:)](webview%28__didclearwindowobject_for_%29.md) or [webView:windowScriptObjectAvailable:](webview_windowscriptobjectavailable_.md), only `webView:didCreateJavaScriptContext:forFrame:` will be invoked. This lets the delegate implement multiple versions to maintain backwards compatibility with older versions of WebKit.

# webView:didCreateJavaScriptContext:forFrame: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Notifies the delegate that a new JavaScript context has been created.

## Declaration

```objectivec
- (void) webView:(WebView *) webView didCreateJavaScriptContext:(JSContext *) context forFrame:(WebFrame *) frame;
```

## Parameters

- `webView`: The view sending the message.
- `context`: The [JSContext](https://developer.apple.com/documentation/javascriptcore/jscontext) representing the frame’s JavaScript window object.
- `frame`: The [WebFrame](../webframe.md) to which the context belongs.

<a id="Discussion"></a>

## Discussion

If a delegate implements this method along with either [webView:didClearWindowObject:forFrame:](webview%28__didclearwindowobject_for_%29.md) or [webView:windowScriptObjectAvailable:](webview_windowscriptobjectavailable_.md), only `webView:didCreateJavaScriptContext:forFrame:` will be invoked. This lets the delegate implement multiple versions to maintain backwards compatibility with older versions of WebKit.
