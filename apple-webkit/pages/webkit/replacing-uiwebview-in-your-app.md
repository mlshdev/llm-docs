> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/replacing-uiwebview-in-your-app](https://developer.apple.com/documentation/webkit/replacing-uiwebview-in-your-app)

# Replacing UIWebView in your app (Swift)

**Framework:** WebKit  
**Kind:** Article

Find a suitable alternative to handle your app’s web content.

<a id="overview"></a>

## Overview

If your app is using [UIWebView](https://developer.apple.com/documentation/uikit/uiwebview), you need to replace it with another Apple technology, because this class is now deprecated. Choose among several technologies, based on your app’s functionality and the degree of configurability you need. This article explores some alternatives and specifically the configuration and architectural changes of [WKWebView](wkwebview.md).

<a id="Consider-alternative-technologies"></a>

### Consider alternative technologies

Before beginning a migration away from [UIWebView](https://developer.apple.com/documentation/uikit/uiwebview), consider whether it can be replaced with other tools. Apple has a variety of technologies that can replace a web view to accomplish similar functionality, and possibly a richer feature set with less code.

If you need an in-app web browser and don’t need deep customization of that experience, [SFSafariViewController](https://developer.apple.com/documentation/safariservices/sfsafariviewcontroller) is a good choice. It handles all the features you’d need to implement in a basic browser and more.

If you need to authenticate your users, use [ASWebAuthenticationSession](https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsession).

If you need to display maps or map tiles, consider using [MKMapView](https://developer.apple.com/documentation/mapkit/mkmapview).

<a id="Update-to-WKWebView"></a>

### Update to WKWebView

If you need a high degree of configurability or are using web content in ways unrelated to browsing, use [WKWebView](wkwebview.md).

[WKWebView](wkwebview.md) isn’t a drop-in replacement for [UIWebView](https://developer.apple.com/documentation/uikit/uiwebview). It has a different architecture that requires rethinking how you use web views, as well as code changes to implement its functionality. You may not be able to implement some features in [WKWebView](wkwebview.md).

<a id="Implement-delegates-for-functionality"></a>

### Implement delegates for functionality

[WKWebView](wkwebview.md) uses various delegates to implement functionality that’s similar to [UIWebViewDelegate](https://developer.apple.com/documentation/uikit/uiwebviewdelegate). The table below shows the [UIWebViewDelegate](https://developer.apple.com/documentation/uikit/uiwebviewdelegate) methods and their [WKWebView](wkwebview.md) equivalents in the [WKNavigationDelegate](wknavigationdelegate.md) column.

| `UIWebViewDelegate` | `WKNavigationDelegate` |
| --- | --- |
| [webViewDidStartLoad(\_:)](https://developer.apple.com/documentation/uikit/uiwebviewdelegate/webviewdidstartload%28_:%29) | [webView(\_:didStartProvisionalNavigation:)](wknavigationdelegate/webview%28__didstartprovisionalnavigation_%29.md) |
| [webViewDidFinishLoad(\_:)](https://developer.apple.com/documentation/uikit/uiwebviewdelegate/webviewdidfinishload%28_:%29) | [webView(\_:didFinish:)](wknavigationdelegate/webview%28__didfinish_%29.md) |
| [webView(\_:didFailLoadWithError:)](https://developer.apple.com/documentation/uikit/uiwebviewdelegate/webview%28_:didfailloadwitherror:%29) | [webView(\_:didFailProvisionalNavigation:withError:)](wknavigationdelegate/webview%28__didfailprovisionalnavigation_witherror_%29.md) or [webView(\_:didFail:withError:)](wknavigationdelegate/webview%28__didfail_witherror_%29.md) |
| [webView(\_:shouldStartLoadWith:navigationType:)](https://developer.apple.com/documentation/uikit/uiwebviewdelegate/webview%28_:shouldstartloadwith:navigationtype:%29) | [webView(\_:decidePolicyFor:decisionHandler:)](wknavigationdelegate/webview%28__decidepolicyfor_decisionhandler_%29-2ni62.md) or [webView(\_:decidePolicyFor:decisionHandler:)](wknavigationdelegate/webview%28__decidepolicyfor_decisionhandler_%29-19mn2.md) |
| [connection(\_:didReceive:)](https://developer.apple.com/documentation/foundation/nsurlconnectiondelegate/connection%28_:didreceive:%29) | [webView(\_:didReceive:completionHandler:)](wknavigationdelegate/webview%28__didreceive_completionhandler_%29.md) |

> **Note**

>  The [webView(\_:decidePolicyFor:decisionHandler:)](wknavigationdelegate/webview%28__decidepolicyfor_decisionhandler_%29-2ni62.md) function doesn’t return a Boolean as its [UIWebView](https://developer.apple.com/documentation/uikit/uiwebview) counterpart did; it uses the `decisionHandler` to return an [WKNavigationActionPolicy.allow](wknavigationactionpolicy/allow.md) or [WKNavigationActionPolicy.cancel](wknavigationactionpolicy/cancel.md) value.

<a id="Plan-for-architectural-changes"></a>

### Plan for architectural changes

One major architectural difference between [UIWebView](https://developer.apple.com/documentation/uikit/uiwebview) and [WKWebView](wkwebview.md) is that the methods of [WKWebView](wkwebview.md) tend to be asynchronous, while the methods of [UIWebView](https://developer.apple.com/documentation/uikit/uiwebview) were synchronous.

This difference requires code and architecture changes in your app. Another major change relates to creating single sign on (SSO) functionality. Cookie restrictions across the entire [WKWebView](wkwebview.md) landscape, mean SSO functionality in [WKWebView](wkwebview.md) isn’t supported for third-party cookies and clients should use a token-based authentication system like OAuth for SSO. Third-party cookies are cookies for a domain other than the domain for which the context was loaded. APIs in the [Authentication Services](https://developer.apple.com/documentation/authenticationservices) framework are specifically built to do this.

## See Also

### Web views

- [Viewing Desktop or Mobile Web Content Using a Web View](viewing-desktop-or-mobile-web-content-using-a-web-view.md): Implement a simple iPad web browser that can view either the desktop or mobile version of a website.
- [WKWebView](wkwebview.md): An object that displays interactive web content, such as for an in-app browser.
- [WKUIDelegate](wkuidelegate.md): The methods for presenting native user interface elements on behalf of a webpage.

# Replacing UIWebView in your app (Objective-C)

**Framework:** WebKit  
**Kind:** Article

Find a suitable alternative to handle your app’s web content.

<a id="overview"></a>

## Overview

If your app is using [UIWebView](https://developer.apple.com/documentation/uikit/uiwebview), you need to replace it with another Apple technology, because this class is now deprecated. Choose among several technologies, based on your app’s functionality and the degree of configurability you need. This article explores some alternatives and specifically the configuration and architectural changes of [WKWebView](wkwebview.md).

<a id="Consider-alternative-technologies"></a>

### Consider alternative technologies

Before beginning a migration away from [UIWebView](https://developer.apple.com/documentation/uikit/uiwebview), consider whether it can be replaced with other tools. Apple has a variety of technologies that can replace a web view to accomplish similar functionality, and possibly a richer feature set with less code.

If you need an in-app web browser and don’t need deep customization of that experience, [SFSafariViewController](https://developer.apple.com/documentation/safariservices/sfsafariviewcontroller) is a good choice. It handles all the features you’d need to implement in a basic browser and more.

If you need to authenticate your users, use [ASWebAuthenticationSession](https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsession).

If you need to display maps or map tiles, consider using [MKMapView](https://developer.apple.com/documentation/mapkit/mkmapview).

<a id="Update-to-WKWebView"></a>

### Update to WKWebView

If you need a high degree of configurability or are using web content in ways unrelated to browsing, use [WKWebView](wkwebview.md).

[WKWebView](wkwebview.md) isn’t a drop-in replacement for [UIWebView](https://developer.apple.com/documentation/uikit/uiwebview). It has a different architecture that requires rethinking how you use web views, as well as code changes to implement its functionality. You may not be able to implement some features in [WKWebView](wkwebview.md).

<a id="Implement-delegates-for-functionality"></a>

### Implement delegates for functionality

[WKWebView](wkwebview.md) uses various delegates to implement functionality that’s similar to [UIWebViewDelegate](https://developer.apple.com/documentation/uikit/uiwebviewdelegate). The table below shows the [UIWebViewDelegate](https://developer.apple.com/documentation/uikit/uiwebviewdelegate) methods and their [WKWebView](wkwebview.md) equivalents in the [WKNavigationDelegate](wknavigationdelegate.md) column.

| `UIWebViewDelegate` | `WKNavigationDelegate` |
| --- | --- |
| [webViewDidStartLoad:](https://developer.apple.com/documentation/uikit/uiwebviewdelegate/webviewdidstartload%28_:%29) | [webView:didStartProvisionalNavigation:](wknavigationdelegate/webview%28__didstartprovisionalnavigation_%29.md) |
| [webViewDidFinishLoad:](https://developer.apple.com/documentation/uikit/uiwebviewdelegate/webviewdidfinishload%28_:%29) | [webView:didFinishNavigation:](wknavigationdelegate/webview%28__didfinish_%29.md) |
| [webView:didFailLoadWithError:](https://developer.apple.com/documentation/uikit/uiwebviewdelegate/webview%28_:didfailloadwitherror:%29) | [webView:didFailProvisionalNavigation:withError:](wknavigationdelegate/webview%28__didfailprovisionalnavigation_witherror_%29.md) or [webView:didFailNavigation:withError:](wknavigationdelegate/webview%28__didfail_witherror_%29.md) |
| [webView:shouldStartLoadWithRequest:navigationType:](https://developer.apple.com/documentation/uikit/uiwebviewdelegate/webview%28_:shouldstartloadwith:navigationtype:%29) | [webView:decidePolicyForNavigationAction:decisionHandler:](wknavigationdelegate/webview%28__decidepolicyfor_decisionhandler_%29-2ni62.md) or [webView:decidePolicyForNavigationResponse:decisionHandler:](wknavigationdelegate/webview%28__decidepolicyfor_decisionhandler_%29-19mn2.md) |
| [connection:didReceiveAuthenticationChallenge:](https://developer.apple.com/documentation/foundation/nsurlconnectiondelegate/connection%28_:didreceive:%29) | [webView:didReceiveAuthenticationChallenge:completionHandler:](wknavigationdelegate/webview%28__didreceive_completionhandler_%29.md) |

> **Note**

>  The [webView:decidePolicyForNavigationAction:decisionHandler:](wknavigationdelegate/webview%28__decidepolicyfor_decisionhandler_%29-2ni62.md) function doesn’t return a Boolean as its [UIWebView](https://developer.apple.com/documentation/uikit/uiwebview) counterpart did; it uses the `decisionHandler` to return an [WKNavigationActionPolicyAllow](wknavigationactionpolicy/allow.md) or [WKNavigationActionPolicyCancel](wknavigationactionpolicy/cancel.md) value.

<a id="Plan-for-architectural-changes"></a>

### Plan for architectural changes

One major architectural difference between [UIWebView](https://developer.apple.com/documentation/uikit/uiwebview) and [WKWebView](wkwebview.md) is that the methods of [WKWebView](wkwebview.md) tend to be asynchronous, while the methods of [UIWebView](https://developer.apple.com/documentation/uikit/uiwebview) were synchronous.

This difference requires code and architecture changes in your app. Another major change relates to creating single sign on (SSO) functionality. Cookie restrictions across the entire [WKWebView](wkwebview.md) landscape, mean SSO functionality in [WKWebView](wkwebview.md) isn’t supported for third-party cookies and clients should use a token-based authentication system like OAuth for SSO. Third-party cookies are cookies for a domain other than the domain for which the context was loaded. APIs in the [Authentication Services](https://developer.apple.com/documentation/authenticationservices) framework are specifically built to do this.

## See Also

### Web views

- [WKWebView](wkwebview.md): An object that displays interactive web content, such as for an in-app browser.
- [WKUIDelegate](wkuidelegate.md): The methods for presenting native user interface elements on behalf of a webpage.
