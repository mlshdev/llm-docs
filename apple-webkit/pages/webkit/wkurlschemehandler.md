> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkurlschemehandler](https://developer.apple.com/documentation/webkit/wkurlschemehandler)

# WKURLSchemeHandler (Swift)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

A protocol for loading resources with URL schemes that WebKit doesn’t handle.

## Declaration

```swift
@MainActor protocol WKURLSchemeHandler : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Adopt the [WKURLSchemeHandler](wkurlschemehandler.md) protocol in objects that handle custom URL schemes for your web content. Custom schemes let you integrate custom resource types into your web content, and you may define custom schemes for resources that your app requires. For example, you might use a custom scheme to integrate content that is available only on the user’s device, such as the user’s photos. Adopt this protocol in one of your app’s objects and register it using the [setURLSchemeHandler(\_:forURLScheme:)](wkwebviewconfiguration/seturlschemehandler%28__forurlscheme_%29.md) method of [WKWebViewConfiguration](wkwebviewconfiguration.md).

When a web view encounters a resource that uses a custom scheme, it creates a [WKURLSchemeTask](wkurlschemetask.md) object and passes it to the methods of your scheme handler object. Use the [webView(\_:start:)](wkurlschemehandler/webview%28__start_%29.md) method to begin loading the resource. While your handler loads the object, the web view may call your handler’s [webView(\_:stop:)](wkurlschemehandler/webview%28__stop_%29.md) method to notify you that the resource is no longer needed.

## Topics

### Loading a Custom Resource

- [webView(\_:start:)](wkurlschemehandler/webview%28__start_%29.md): Asks your handler to begin loading the data for the specified resource.

### Responding to a Canceled Resource Request

- [webView(\_:stop:)](wkurlschemehandler/webview%28__stop_%29.md): Asks your handler to stop loading the data for the specified resource.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Web data management

- [WKWebsiteDataStore](wkwebsitedatastore.md): An object that manages cookies, disk and memory caches, and other types of data for a web view.
- [WKWebsiteDataRecord](wkwebsitedatarecord.md): A record of the data that a particular website stores persistently.
- [WKHTTPCookieStore](wkhttpcookiestore.md): An object that manages the HTTP cookies associated with a particular web view.
- [WKURLSchemeTask](wkurlschemetask.md): An interface that WebKit uses to request custom resources from your app.
- [readAccessURL](https://developer.apple.com/documentation/foundation/nsattributedstring/documentreadingoptionkey/readaccessurl): The local files WebKit can access when loading content.

# WKURLSchemeHandler (Objective-C)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

A protocol for loading resources with URL schemes that WebKit doesn’t handle.

## Declaration

```objectivec
@protocol WKURLSchemeHandler <NSObject>
```

<a id="overview"></a>

## Overview

Adopt the [WKURLSchemeHandler](wkurlschemehandler.md) protocol in objects that handle custom URL schemes for your web content. Custom schemes let you integrate custom resource types into your web content, and you may define custom schemes for resources that your app requires. For example, you might use a custom scheme to integrate content that is available only on the user’s device, such as the user’s photos. Adopt this protocol in one of your app’s objects and register it using the [setURLSchemeHandler:forURLScheme:](wkwebviewconfiguration/seturlschemehandler%28__forurlscheme_%29.md) method of [WKWebViewConfiguration](wkwebviewconfiguration.md).

When a web view encounters a resource that uses a custom scheme, it creates a [WKURLSchemeTask](wkurlschemetask.md) object and passes it to the methods of your scheme handler object. Use the [webView:startURLSchemeTask:](wkurlschemehandler/webview%28__start_%29.md) method to begin loading the resource. While your handler loads the object, the web view may call your handler’s [webView:stopURLSchemeTask:](wkurlschemehandler/webview%28__stop_%29.md) method to notify you that the resource is no longer needed.

## Topics

### Loading a Custom Resource

- [webView:startURLSchemeTask:](wkurlschemehandler/webview%28__start_%29.md): Asks your handler to begin loading the data for the specified resource.

### Responding to a Canceled Resource Request

- [webView:stopURLSchemeTask:](wkurlschemehandler/webview%28__stop_%29.md): Asks your handler to stop loading the data for the specified resource.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Web data management

- [WKWebsiteDataStore](wkwebsitedatastore.md): An object that manages cookies, disk and memory caches, and other types of data for a web view.
- [WKWebsiteDataRecord](wkwebsitedatarecord.md): A record of the data that a particular website stores persistently.
- [WKHTTPCookieStore](wkhttpcookiestore.md): An object that manages the HTTP cookies associated with a particular web view.
- [WKURLSchemeTask](wkurlschemetask.md): An interface that WebKit uses to request custom resources from your app.
- [NSReadAccessURLDocumentOption](nsreadaccessurldocumentoption.md)
- [WKCookiePolicy](wkhttpcookiestore/cookiepolicy.md): An enumeration with cases that indicate whether a cookie store allows cookie storage.
