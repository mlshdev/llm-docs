> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpolicydelegate/webview(_:decidepolicyfornavigationaction:request:frame:decisionlistener:)](https://developer.apple.com/documentation/webkit/webpolicydelegate/webview(_:decidepolicyfornavigationaction:request:frame:decisionlistener:))

# webView(\_:decidePolicyForNavigationAction:request:frame:decisionListener:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Routes a navigation action internally or to an external viewer.

## Declaration

```swift
optional func webView(_ webView: WebView!, decidePolicyForNavigationAction actionInformation: [AnyHashable : Any]!, request: URLRequest!, frame: WebFrame!, decisionListener listener: (any WebPolicyDecisionListener)!)
```

## Parameters

- `webView`: The `WebView` object for which this object is the policy delegate.
- `actionInformation`: A description of the action that triggered the navigation request. The possible key-value pairs in this dictionary are defined in `Action Dictionary Keys`.
- `request`: The request for which the navigation is made.
- `frame`: The `WebFrame` object in which the action occurred.
- `listener`: The `WebPolicyDecisionListener` object that receives the policy decision.

<a id="Discussion"></a>

## Discussion

This method is invoked when a navigation decision needs to be made. The web view implements a policy decision by sending one of the [WebPolicyDecisionListener](../webpolicydecisionlistener.md) protocol messages to `listener`. This method is invoked whenever a server redirect is encountered, and before loading starts.

If you do not implement this method, the default behavior is used. The listener handles the navigation internally if the request is for an error page or if the [canHandle(\_:)](https://developer.apple.com/documentation/foundation/nsurlconnection/canhandle%28_:%29) method of the `NSURLConnection` class returns [true](https://developer.apple.com/documentation/swift/true) when passed `request`. Otherwise, the listener ignores the navigation, and it is handled externally.

# webView:decidePolicyForNavigationAction:request:frame:decisionListener: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Routes a navigation action internally or to an external viewer.

## Declaration

```objectivec
- (void) webView:(WebView *) webView decidePolicyForNavigationAction:(NSDictionary *) actionInformation request:(NSURLRequest *) request frame:(WebFrame *) frame decisionListener:(id<WebPolicyDecisionListener>) listener;
```

## Parameters

- `webView`: The `WebView` object for which this object is the policy delegate.
- `actionInformation`: A description of the action that triggered the navigation request. The possible key-value pairs in this dictionary are defined in `Action Dictionary Keys`.
- `request`: The request for which the navigation is made.
- `frame`: The `WebFrame` object in which the action occurred.
- `listener`: The `WebPolicyDecisionListener` object that receives the policy decision.

<a id="Discussion"></a>

## Discussion

This method is invoked when a navigation decision needs to be made. The web view implements a policy decision by sending one of the [WebPolicyDecisionListener](../webpolicydecisionlistener.md) protocol messages to `listener`. This method is invoked whenever a server redirect is encountered, and before loading starts.

If you do not implement this method, the default behavior is used. The listener handles the navigation internally if the request is for an error page or if the [canHandleRequest:](https://developer.apple.com/documentation/foundation/nsurlconnection/canhandle%28_:%29) method of the `NSURLConnection` class returns [true](https://developer.apple.com/documentation/swift/true) when passed `request`. Otherwise, the listener ignores the navigation, and it is handled externally.
