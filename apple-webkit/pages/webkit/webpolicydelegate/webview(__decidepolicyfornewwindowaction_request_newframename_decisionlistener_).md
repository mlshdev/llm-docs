> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpolicydelegate/webview(_:decidepolicyfornewwindowaction:request:newframename:decisionlistener:)](https://developer.apple.com/documentation/webkit/webpolicydelegate/webview(_:decidepolicyfornewwindowaction:request:newframename:decisionlistener:))

# webView(\_:decidePolicyForNewWindowAction:request:newFrameName:decisionListener:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Decides whether to allow a targeted navigation event, such as opening a link in a new window.

## Declaration

```swift
optional func webView(_ webView: WebView!, decidePolicyForNewWindowAction actionInformation: [AnyHashable : Any]!, request: URLRequest!, newFrameName frameName: String!, decisionListener listener: (any WebPolicyDecisionListener)!)
```

## Parameters

- `webView`: The `WebView` object for which this object is the policy delegate.
- `actionInformation`: A description of the action that triggered the navigation request. The possible key-value pairs in this dictionary are defined in `Making content decisions`.
- `request`: The request for which the new window action is performed.
- `frameName`: The name of the new frame that contains the content returned from the request.
- `listener`: The `WebPolicyDecisionListener` object that receives the policy decision.

<a id="Discussion"></a>

## Discussion

This method is invoked when a targeted navigation decision needs to be made. A targeted navigation typically opens a new window to display content.  The receiver implements a policy decision by sending one of the [WebPolicyDecisionListener](../webpolicydecisionlistener.md) protocol messages to `listener`. This method allows delegates to modify the behavior of targeted links which normally open a new window. Delegates might do something else, such as download or present the content in a special way. If this method sends [use()](../webpolicydecisionlistener/use%28%29.md) to `listener` then the new window will be opened, and [webView(\_:decidePolicyForNavigationAction:request:frame:decisionListener:)](webview%28__decidepolicyfornavigationaction_request_frame_decisionlistener_%29.md) will be invoked with a [WebNavigationType.other](../webnavigationtype/other.md) as the value for the [WebActionNavigationTypeKey](../webactionnavigationtypekey.md) key in the action dictionary.

The default behavior sends [use()](../webpolicydecisionlistener/use%28%29.md) to `listener`.

# webView:decidePolicyForNewWindowAction:request:newFrameName:decisionListener: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Decides whether to allow a targeted navigation event, such as opening a link in a new window.

## Declaration

```objectivec
- (void) webView:(WebView *) webView decidePolicyForNewWindowAction:(NSDictionary *) actionInformation request:(NSURLRequest *) request newFrameName:(NSString *) frameName decisionListener:(id<WebPolicyDecisionListener>) listener;
```

## Parameters

- `webView`: The `WebView` object for which this object is the policy delegate.
- `actionInformation`: A description of the action that triggered the navigation request. The possible key-value pairs in this dictionary are defined in `Making content decisions`.
- `request`: The request for which the new window action is performed.
- `frameName`: The name of the new frame that contains the content returned from the request.
- `listener`: The `WebPolicyDecisionListener` object that receives the policy decision.

<a id="Discussion"></a>

## Discussion

This method is invoked when a targeted navigation decision needs to be made. A targeted navigation typically opens a new window to display content.  The receiver implements a policy decision by sending one of the [WebPolicyDecisionListener](../webpolicydecisionlistener.md) protocol messages to `listener`. This method allows delegates to modify the behavior of targeted links which normally open a new window. Delegates might do something else, such as download or present the content in a special way. If this method sends [use](../webpolicydecisionlistener/use%28%29.md) to `listener` then the new window will be opened, and [webView:decidePolicyForNavigationAction:request:frame:decisionListener:](webview%28__decidepolicyfornavigationaction_request_frame_decisionlistener_%29.md) will be invoked with a [WebNavigationTypeOther](../webnavigationtype/other.md) as the value for the [WebActionNavigationTypeKey](../webactionnavigationtypekey.md) key in the action dictionary.

The default behavior sends [use](../webpolicydecisionlistener/use%28%29.md) to `listener`.
