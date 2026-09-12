> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wknavigationdelegate](https://developer.apple.com/documentation/webkit/wknavigationdelegate)

# WKNavigationDelegate (Swift)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Methods for accepting or rejecting navigation changes, and for tracking the progress of navigation requests.

## Declaration

```swift
@MainActor protocol WKNavigationDelegate : NSObjectProtocol
```

## Mentioned In

- [Replacing UIWebView in your app](replacing-uiwebview-in-your-app.md)

<a id="overview"></a>

## Overview

Implement the methods of the [WKNavigationDelegate](wknavigationdelegate.md) protocol in the object you use to coordinate changes in your web view’s main frame. As the user attempts to navigate web content, the web view coordinates with its navigation delegate to manage any transitions. For example, you might use these methods to restrict navigation from specific links within your content. You might also use them to track the progress of requests, and to respond to errors and authentication challenges.

## Topics

### Allowing or denying navigation requests

- [webView(\_:decidePolicyFor:preferences:decisionHandler:)](wknavigationdelegate/webview%28__decidepolicyfor_preferences_decisionhandler_%29.md): Asks the delegate for permission to navigate to new content based on the specified preferences and action information.
- [webView(\_:decidePolicyFor:decisionHandler:)](wknavigationdelegate/webview%28__decidepolicyfor_decisionhandler_%29-2ni62.md): Asks the delegate for permission to navigate to new content based on the specified action information.
- [WKNavigationActionPolicy](wknavigationactionpolicy.md): Constants that indicate whether to allow or cancel navigation to a webpage from an action.
- [webView(\_:decidePolicyFor:decisionHandler:)](wknavigationdelegate/webview%28__decidepolicyfor_decisionhandler_%29-19mn2.md): Asks the delegate for permission to navigate to new content after the response to the navigation request is known.
- [WKNavigationResponsePolicy](wknavigationresponsepolicy.md): Constants that indicate whether to allow or cancel navigation to a webpage from a response.

### Tracking the load progress of a request

- [webView(\_:didStartProvisionalNavigation:)](wknavigationdelegate/webview%28__didstartprovisionalnavigation_%29.md): Tells the delegate that navigation from the main frame has started.
- [webView(\_:didReceiveServerRedirectForProvisionalNavigation:)](wknavigationdelegate/webview%28__didreceiveserverredirectforprovisionalnavigation_%29.md): Tells the delegate that the web view received a server redirect for a request.
- [webView(\_:didCommit:)](wknavigationdelegate/webview%28__didcommit_%29.md): Tells the delegate that the web view has started to receive content for the main frame.
- [webView(\_:didFinish:)](wknavigationdelegate/webview%28__didfinish_%29.md): Tells the delegate that navigation is complete.

### Responding to authentication challenges

- [webView(\_:didReceive:completionHandler:)](wknavigationdelegate/webview%28__didreceive_completionhandler_%29.md): Asks the delegate to respond to an authentication challenge.
- [webView(\_:authenticationChallenge:shouldAllowDeprecatedTLS:)](wknavigationdelegate/webview%28__authenticationchallenge_shouldallowdeprecatedtls_%29.md): Asks the delegate whether to continue with a connection that uses a deprecated version of TLS.

### Responding to navigation errors

- [webView(\_:didFail:withError:)](wknavigationdelegate/webview%28__didfail_witherror_%29.md): Tells the delegate that an error occurred during navigation.
- [webView(\_:didFailProvisionalNavigation:withError:)](wknavigationdelegate/webview%28__didfailprovisionalnavigation_witherror_%29.md): Tells the delegate that an error occurred during the early navigation process.
- [webViewWebContentProcessDidTerminate(\_:)](wknavigationdelegate/webviewwebcontentprocessdidterminate%28__%29.md): Tells the delegate that the web view’s content process was terminated.

### Handling download progress

- [webView(\_:navigationResponse:didBecome:)](wknavigationdelegate/webview%28__navigationresponse_didbecome_%29.md): Tells the delegate that a navigation response became a download.
- [webView(\_:navigationAction:didBecome:)](wknavigationdelegate/webview%28__navigationaction_didbecome_%29.md): Tells the delegate that a navigation action became a download.

### Instance Methods

- [webView(\_:shouldGoTo:willUseInstantBack:completionHandler:)](wknavigationdelegate/webview%28__shouldgoto_willuseinstantback_completionhandler_%29.md)
- [webView(\_:willSubmitForm:submissionHandler:)](wknavigationdelegate/webview%28__willsubmitform_submissionhandler_%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Navigation

- [WKBackForwardList](wkbackforwardlist.md): An object that manages the list of previously loaded webpages, which the web view uses for forward and backward navigation.
- [WKBackForwardListItem](wkbackforwardlistitem.md): A representation of a webpage that the web view previously visited.
- [WKNavigation](wknavigation.md): An object that tracks the loading progress of a webpage.
- [WKNavigationAction](wknavigationaction.md): An object that contains information about an action that causes navigation to occur.
- [WKNavigationResponse](wknavigationresponse.md): An object that contains the response to a navigation request, and which you use to make navigation-related policy decisions.
- [WKFormInfo](wkforminfo.md)

# WKNavigationDelegate (Objective-C)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Methods for accepting or rejecting navigation changes, and for tracking the progress of navigation requests.

## Declaration

```objectivec
@protocol WKNavigationDelegate <NSObject>
```

## Mentioned In

- [Replacing UIWebView in your app](replacing-uiwebview-in-your-app.md)

<a id="overview"></a>

## Overview

Implement the methods of the [WKNavigationDelegate](wknavigationdelegate.md) protocol in the object you use to coordinate changes in your web view’s main frame. As the user attempts to navigate web content, the web view coordinates with its navigation delegate to manage any transitions. For example, you might use these methods to restrict navigation from specific links within your content. You might also use them to track the progress of requests, and to respond to errors and authentication challenges.

## Topics

### Allowing or denying navigation requests

- [webView:decidePolicyForNavigationAction:preferences:decisionHandler:](wknavigationdelegate/webview%28__decidepolicyfor_preferences_decisionhandler_%29.md): Asks the delegate for permission to navigate to new content based on the specified preferences and action information.
- [webView:decidePolicyForNavigationAction:decisionHandler:](wknavigationdelegate/webview%28__decidepolicyfor_decisionhandler_%29-2ni62.md): Asks the delegate for permission to navigate to new content based on the specified action information.
- [WKNavigationActionPolicy](wknavigationactionpolicy.md): Constants that indicate whether to allow or cancel navigation to a webpage from an action.
- [webView:decidePolicyForNavigationResponse:decisionHandler:](wknavigationdelegate/webview%28__decidepolicyfor_decisionhandler_%29-19mn2.md): Asks the delegate for permission to navigate to new content after the response to the navigation request is known.
- [WKNavigationResponsePolicy](wknavigationresponsepolicy.md): Constants that indicate whether to allow or cancel navigation to a webpage from a response.

### Tracking the load progress of a request

- [webView:didStartProvisionalNavigation:](wknavigationdelegate/webview%28__didstartprovisionalnavigation_%29.md): Tells the delegate that navigation from the main frame has started.
- [webView:didReceiveServerRedirectForProvisionalNavigation:](wknavigationdelegate/webview%28__didreceiveserverredirectforprovisionalnavigation_%29.md): Tells the delegate that the web view received a server redirect for a request.
- [webView:didCommitNavigation:](wknavigationdelegate/webview%28__didcommit_%29.md): Tells the delegate that the web view has started to receive content for the main frame.
- [webView:didFinishNavigation:](wknavigationdelegate/webview%28__didfinish_%29.md): Tells the delegate that navigation is complete.

### Responding to authentication challenges

- [webView:didReceiveAuthenticationChallenge:completionHandler:](wknavigationdelegate/webview%28__didreceive_completionhandler_%29.md): Asks the delegate to respond to an authentication challenge.
- [webView:authenticationChallenge:shouldAllowDeprecatedTLS:](wknavigationdelegate/webview%28__authenticationchallenge_shouldallowdeprecatedtls_%29.md): Asks the delegate whether to continue with a connection that uses a deprecated version of TLS.

### Responding to navigation errors

- [webView:didFailNavigation:withError:](wknavigationdelegate/webview%28__didfail_witherror_%29.md): Tells the delegate that an error occurred during navigation.
- [webView:didFailProvisionalNavigation:withError:](wknavigationdelegate/webview%28__didfailprovisionalnavigation_witherror_%29.md): Tells the delegate that an error occurred during the early navigation process.
- [webViewWebContentProcessDidTerminate:](wknavigationdelegate/webviewwebcontentprocessdidterminate%28__%29.md): Tells the delegate that the web view’s content process was terminated.

### Handling download progress

- [webView:navigationResponse:didBecomeDownload:](wknavigationdelegate/webview%28__navigationresponse_didbecome_%29.md): Tells the delegate that a navigation response became a download.
- [webView:navigationAction:didBecomeDownload:](wknavigationdelegate/webview%28__navigationaction_didbecome_%29.md): Tells the delegate that a navigation action became a download.

### Instance Methods

- [webView:shouldGoToBackForwardListItem:willUseInstantBack:completionHandler:](wknavigationdelegate/webview%28__shouldgoto_willuseinstantback_completionhandler_%29.md)
- [webView:willSubmitForm:submissionHandler:](wknavigationdelegate/webview%28__willsubmitform_submissionhandler_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Navigation

- [WKBackForwardList](wkbackforwardlist.md): An object that manages the list of previously loaded webpages, which the web view uses for forward and backward navigation.
- [WKBackForwardListItem](wkbackforwardlistitem.md): A representation of a webpage that the web view previously visited.
- [WKNavigation](wknavigation.md): An object that tracks the loading progress of a webpage.
- [WKNavigationAction](wknavigationaction.md): An object that contains information about an action that causes navigation to occur.
- [WKNavigationResponse](wknavigationresponse.md): An object that contains the response to a navigation request, and which you use to make navigation-related policy decisions.
- [WKFormInfo](wkforminfo.md)
