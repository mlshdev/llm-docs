> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wknavigationdelegate/webview(_:decidepolicyfor:decisionhandler:)-2ni62](https://developer.apple.com/documentation/webkit/wknavigationdelegate/webview(_:decidepolicyfor:decisionhandler:)-2ni62)

# webView(\_:decidePolicyFor:decisionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Asks the delegate for permission to navigate to new content based on the specified action information.

## Declaration

```swift
optional func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, decisionHandler: @escaping @MainActor @Sendable (WKNavigationActionPolicy) -> Void)
```

```swift
optional func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction) async -> WKNavigationActionPolicy
```

## Parameters

- `webView`: The web view from which the navigation request began.
- `navigationAction`: Details about the action that triggered the navigation request.
- `decisionHandler`: A completion handler block to call with the results about whether to allow or cancel the navigation. This handler has no return value and takes the following parameter:

  - **policy**: A constant that indicates whether to cancel or allow the navigation. For a list of possible values, see [WKNavigationActionPolicy](../wknavigationactionpolicy.md).

## Mentioned In

- [Replacing UIWebView in your app](../replacing-uiwebview-in-your-app.md)

<a id="Discussion"></a>

## Discussion

Use this method to allow or deny a navigation request that originated with the specified action. The web view calls this method after the interaction occurs but before it attempts to load any content. If you implement this method, always execute the `decisionHandler` block at some point. You may execute it synchronously from your delegate method’s implementation, or execute it asynchronously after your method returns.

If your delegate object implements the [webView(\_:decidePolicyFor:preferences:decisionHandler:)](webview%28__decidepolicyfor_preferences_decisionhandler_%29.md) method, the web view doesn’t call this method.

## See Also

### Allowing or denying navigation requests

- [webView(\_:decidePolicyFor:preferences:decisionHandler:)](webview%28__decidepolicyfor_preferences_decisionhandler_%29.md): Asks the delegate for permission to navigate to new content based on the specified preferences and action information.
- [WKNavigationActionPolicy](../wknavigationactionpolicy.md): Constants that indicate whether to allow or cancel navigation to a webpage from an action.
- [webView(\_:decidePolicyFor:decisionHandler:)](webview%28__decidepolicyfor_decisionhandler_%29-19mn2.md): Asks the delegate for permission to navigate to new content after the response to the navigation request is known.
- [WKNavigationResponsePolicy](../wknavigationresponsepolicy.md): Constants that indicate whether to allow or cancel navigation to a webpage from a response.

# webView:decidePolicyForNavigationAction:decisionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Asks the delegate for permission to navigate to new content based on the specified action information.

## Declaration

```objectivec
- (void) webView:(WKWebView *) webView decidePolicyForNavigationAction:(WKNavigationAction *) navigationAction decisionHandler:(void (^)(enum WKNavigationActionPolicy)) decisionHandler;
```

## Parameters

- `webView`: The web view from which the navigation request began.
- `navigationAction`: Details about the action that triggered the navigation request.
- `decisionHandler`: A completion handler block to call with the results about whether to allow or cancel the navigation. This handler has no return value and takes the following parameter:

  - **policy**: A constant that indicates whether to cancel or allow the navigation. For a list of possible values, see [WKNavigationActionPolicy](../wknavigationactionpolicy.md).

## Mentioned In

- [Replacing UIWebView in your app](../replacing-uiwebview-in-your-app.md)

<a id="Discussion"></a>

## Discussion

Use this method to allow or deny a navigation request that originated with the specified action. The web view calls this method after the interaction occurs but before it attempts to load any content. If you implement this method, always execute the `decisionHandler` block at some point. You may execute it synchronously from your delegate method’s implementation, or execute it asynchronously after your method returns.

If your delegate object implements the [webView:decidePolicyForNavigationAction:preferences:decisionHandler:](webview%28__decidepolicyfor_preferences_decisionhandler_%29.md) method, the web view doesn’t call this method.

## See Also

### Allowing or denying navigation requests

- [webView:decidePolicyForNavigationAction:preferences:decisionHandler:](webview%28__decidepolicyfor_preferences_decisionhandler_%29.md): Asks the delegate for permission to navigate to new content based on the specified preferences and action information.
- [WKNavigationActionPolicy](../wknavigationactionpolicy.md): Constants that indicate whether to allow or cancel navigation to a webpage from an action.
- [webView:decidePolicyForNavigationResponse:decisionHandler:](webview%28__decidepolicyfor_decisionhandler_%29-19mn2.md): Asks the delegate for permission to navigate to new content after the response to the navigation request is known.
- [WKNavigationResponsePolicy](../wknavigationresponsepolicy.md): Constants that indicate whether to allow or cancel navigation to a webpage from a response.
