> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wknavigationdelegate/webview(_:decidepolicyfor:decisionhandler:)-19mn2](https://developer.apple.com/documentation/webkit/wknavigationdelegate/webview(_:decidepolicyfor:decisionhandler:)-19mn2)

# webView(\_:decidePolicyFor:decisionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Asks the delegate for permission to navigate to new content after the response to the navigation request is known.

## Declaration

```swift
optional func webView(_ webView: WKWebView, decidePolicyFor navigationResponse: WKNavigationResponse, decisionHandler: @escaping @MainActor @Sendable (WKNavigationResponsePolicy) -> Void)
```

```swift
optional func webView(_ webView: WKWebView, decidePolicyFor navigationResponse: WKNavigationResponse) async -> WKNavigationResponsePolicy
```

## Parameters

- `webView`: The web view from which the navigation request began.
- `navigationResponse`: Descriptive information about the navigation response.
- `decisionHandler`: A completion handler block to call with the results about whether to allow or cancel the navigation. This handler has no return value and takes the following parameter:

  - **policy**: A constant that indicates whether to cancel or allow the navigation. For a list of possible values, see [WKNavigationResponsePolicy](../wknavigationresponsepolicy.md).

## Mentioned In

- [Replacing UIWebView in your app](../replacing-uiwebview-in-your-app.md)

<a id="Discussion"></a>

## Discussion

Use this method to allow or deny a navigation request after the web view receives the response to its original URL request. The `navigationResponse` parameter contains the details of the response, including the type of data that the response contains. If you implement this method, always execute the `decisionHandler` block at some point. You may execute it synchronously from your delegate method’s implementation, or execute it asynchronously after your method returns.

## See Also

### Allowing or denying navigation requests

- [webView(\_:decidePolicyFor:preferences:decisionHandler:)](webview%28__decidepolicyfor_preferences_decisionhandler_%29.md): Asks the delegate for permission to navigate to new content based on the specified preferences and action information.
- [webView(\_:decidePolicyFor:decisionHandler:)](webview%28__decidepolicyfor_decisionhandler_%29-2ni62.md): Asks the delegate for permission to navigate to new content based on the specified action information.
- [WKNavigationActionPolicy](../wknavigationactionpolicy.md): Constants that indicate whether to allow or cancel navigation to a webpage from an action.
- [WKNavigationResponsePolicy](../wknavigationresponsepolicy.md): Constants that indicate whether to allow or cancel navigation to a webpage from a response.

# webView:decidePolicyForNavigationResponse:decisionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Asks the delegate for permission to navigate to new content after the response to the navigation request is known.

## Declaration

```objectivec
- (void) webView:(WKWebView *) webView decidePolicyForNavigationResponse:(WKNavigationResponse *) navigationResponse decisionHandler:(void (^)(enum WKNavigationResponsePolicy)) decisionHandler;
```

## Parameters

- `webView`: The web view from which the navigation request began.
- `navigationResponse`: Descriptive information about the navigation response.
- `decisionHandler`: A completion handler block to call with the results about whether to allow or cancel the navigation. This handler has no return value and takes the following parameter:

  - **policy**: A constant that indicates whether to cancel or allow the navigation. For a list of possible values, see [WKNavigationResponsePolicy](../wknavigationresponsepolicy.md).

## Mentioned In

- [Replacing UIWebView in your app](../replacing-uiwebview-in-your-app.md)

<a id="Discussion"></a>

## Discussion

Use this method to allow or deny a navigation request after the web view receives the response to its original URL request. The `navigationResponse` parameter contains the details of the response, including the type of data that the response contains. If you implement this method, always execute the `decisionHandler` block at some point. You may execute it synchronously from your delegate method’s implementation, or execute it asynchronously after your method returns.

## See Also

### Allowing or denying navigation requests

- [webView:decidePolicyForNavigationAction:preferences:decisionHandler:](webview%28__decidepolicyfor_preferences_decisionhandler_%29.md): Asks the delegate for permission to navigate to new content based on the specified preferences and action information.
- [webView:decidePolicyForNavigationAction:decisionHandler:](webview%28__decidepolicyfor_decisionhandler_%29-2ni62.md): Asks the delegate for permission to navigate to new content based on the specified action information.
- [WKNavigationActionPolicy](../wknavigationactionpolicy.md): Constants that indicate whether to allow or cancel navigation to a webpage from an action.
- [WKNavigationResponsePolicy](../wknavigationresponsepolicy.md): Constants that indicate whether to allow or cancel navigation to a webpage from a response.
