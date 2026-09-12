> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpolicydelegate/webview(_:decidepolicyformimetype:request:frame:decisionlistener:)](https://developer.apple.com/documentation/webkit/webpolicydelegate/webview(_:decidepolicyformimetype:request:frame:decisionlistener:))

# webView(\_:decidePolicyForMIMEType:request:frame:decisionListener:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Decides whether to display content with a given MIME type.

## Declaration

```swift
optional func webView(_ webView: WebView!, decidePolicyForMIMEType type: String!, request: URLRequest!, frame: WebFrame!, decisionListener listener: (any WebPolicyDecisionListener)!)
```

## Parameters

- `webView`: The associated web view.
- `type`: The MIME type of the content.
- `request`: The request to load the content.
- `frame`: The frame for displaying the content.
- `listener`: The object that receives the policy decision.

<a id="Discussion"></a>

## Discussion

This method is invoked during the process of loading content for `request` after the `webView:didStartProvisionalLoadForFrame:` method in the `WebFrameLoadDelegate` protocol is called by the `WebView` object. The web view implements a policy decision by sending one of the [WebPolicyDecisionListener](../webpolicydecisionlistener.md) protocol messages to `listener`.

If you do not implement this method, the default behavior is used. The listener is told to ignore the MIME type unless `webView` specifies it can handle the type in its [canShowMIMEType(\_:)](../webview-swift.class/canshowmimetype%28__%29.md) method.

In some rare cases, multiple responses may be received for a single resource. This happens in the case of multipart/x-mixed-replace, also known as a “server push.” In this case, this method will be invoked multiple times.

# webView:decidePolicyForMIMEType:request:frame:decisionListener: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Decides whether to display content with a given MIME type.

## Declaration

```objectivec
- (void) webView:(WebView *) webView decidePolicyForMIMEType:(NSString *) type request:(NSURLRequest *) request frame:(WebFrame *) frame decisionListener:(id<WebPolicyDecisionListener>) listener;
```

## Parameters

- `webView`: The associated web view.
- `type`: The MIME type of the content.
- `request`: The request to load the content.
- `frame`: The frame for displaying the content.
- `listener`: The object that receives the policy decision.

<a id="Discussion"></a>

## Discussion

This method is invoked during the process of loading content for `request` after the `webView:didStartProvisionalLoadForFrame:` method in the `WebFrameLoadDelegate` protocol is called by the `WebView` object. The web view implements a policy decision by sending one of the [WebPolicyDecisionListener](../webpolicydecisionlistener.md) protocol messages to `listener`.

If you do not implement this method, the default behavior is used. The listener is told to ignore the MIME type unless `webView` specifies it can handle the type in its [canShowMIMEType:](../webview-swift.class/canshowmimetype%28__%29.md) method.

In some rare cases, multiple responses may be received for a single resource. This happens in the case of multipart/x-mixed-replace, also known as a “server push.” In this case, this method will be invoked multiple times.
