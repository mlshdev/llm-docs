> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webresourceloaddelegate](https://developer.apple.com/documentation/webkit/webresourceloaddelegate)

# WebResourceLoadDelegate (Swift)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Web view resource load delegates implement this protocol to be notified on the progress of loading individual resources. Note that there can be hundreds of resources, such as images and other media, per page. So, if you just want to get page loading status see the WebFrameLoadDelegate protocol.

## Declaration

```swift
protocol WebResourceLoadDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

There’s a separate client request and server response made for each resource on a page. By implementing the [webView(\_:identifierForInitialRequest:from:)](webresourceloaddelegate/webview%28__identifierforinitialrequest_from_%29.md) method, resource load delegates provide a tracking object used to identify individual resources in subsequent calls to delegate methods. Delegates are then notified when resource loading starts, when data is incrementally received, when any load errors occur, and when the load is complete. Delegates may also change a request before it is sent. In some cases, depending on the page content and server redirects, methods defined in this protocol may be invoked multiple times (see individual method descriptions for more details). All the methods in this protocol are optional.

## Topics

### Setting Identifiers

- [webView(\_:identifierForInitialRequest:from:)](webresourceloaddelegate/webview%28__identifierforinitialrequest_from_%29.md): Deprecated. Returns an identifier object used to track the progress of loading a single resource.

### Loading Content

- [webView(\_:resource:willSend:redirectResponse:from:)](webresourceloaddelegate/webview%28__resource_willsend_redirectresponse_from_%29.md): Deprecated. Invoked before a request is initiated for a resource and returns a possibly modified request.
- [webView(\_:resource:didFinishLoadingFrom:)](webresourceloaddelegate/webview%28__resource_didfinishloadingfrom_%29.md): Deprecated. Invoked when all of the data for a given resource is loaded.
- [webView(\_:resource:didReceive:from:)](webresourceloaddelegate/webview%28__resource_didreceive_from_%29-22bdg.md): Deprecated. Invoked after a resource has been loaded.
- [webView(\_:resource:didReceiveContentLength:from:)](webresourceloaddelegate/webview%28__resource_didreceivecontentlength_from_%29.md): Deprecated. Invoked when some of the data for a given resource has arrived.
- [webView(\_:resource:didFailLoadingWithError:from:)](webresourceloaddelegate/webview%28__resource_didfailloadingwitherror_from_%29.md): Deprecated. Invoked when a resource failed to load.
- [webView(\_:plugInFailedWithError:dataSource:)](webresourceloaddelegate/webview%28__pluginfailedwitherror_datasource_%29.md): Deprecated. Invoked when a plug-in fails to load.

### Authenticating Resources

- [webView(\_:resource:didReceive:from:)](webresourceloaddelegate/webview%28__resource_didreceive_from_%29-54xbd.md): Deprecated. Invoked when an authentication challenge has been received for a resource.
- [webView(\_:resource:didCancel:from:)](webresourceloaddelegate/webview%28__resource_didcancel_from_%29.md): Deprecated. Invoked when an authentication challenge for a resource was canceled.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Loading Resources (Legacy)

- [WebResource](webresource.md): A `WebResource` object represents a downloaded URL. It encapsulates the data of the download as well as other resource properties such as the URL, MIME type, and frame name.

# WebResourceLoadDelegate (Objective-C)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Web view resource load delegates implement this protocol to be notified on the progress of loading individual resources. Note that there can be hundreds of resources, such as images and other media, per page. So, if you just want to get page loading status see the WebFrameLoadDelegate protocol.

## Declaration

```objectivec
@protocol WebResourceLoadDelegate <NSObject>
```

<a id="overview"></a>

## Overview

There’s a separate client request and server response made for each resource on a page. By implementing the [webView:identifierForInitialRequest:fromDataSource:](webresourceloaddelegate/webview%28__identifierforinitialrequest_from_%29.md) method, resource load delegates provide a tracking object used to identify individual resources in subsequent calls to delegate methods. Delegates are then notified when resource loading starts, when data is incrementally received, when any load errors occur, and when the load is complete. Delegates may also change a request before it is sent. In some cases, depending on the page content and server redirects, methods defined in this protocol may be invoked multiple times (see individual method descriptions for more details). All the methods in this protocol are optional.

## Topics

### Setting Identifiers

- [webView:identifierForInitialRequest:fromDataSource:](webresourceloaddelegate/webview%28__identifierforinitialrequest_from_%29.md): Deprecated. Returns an identifier object used to track the progress of loading a single resource.

### Loading Content

- [webView:resource:willSendRequest:redirectResponse:fromDataSource:](webresourceloaddelegate/webview%28__resource_willsend_redirectresponse_from_%29.md): Deprecated. Invoked before a request is initiated for a resource and returns a possibly modified request.
- [webView:resource:didFinishLoadingFromDataSource:](webresourceloaddelegate/webview%28__resource_didfinishloadingfrom_%29.md): Deprecated. Invoked when all of the data for a given resource is loaded.
- [webView:resource:didReceiveResponse:fromDataSource:](webresourceloaddelegate/webview%28__resource_didreceive_from_%29-22bdg.md): Deprecated. Invoked after a resource has been loaded.
- [webView:resource:didReceiveContentLength:fromDataSource:](webresourceloaddelegate/webview%28__resource_didreceivecontentlength_from_%29.md): Deprecated. Invoked when some of the data for a given resource has arrived.
- [webView:resource:didFailLoadingWithError:fromDataSource:](webresourceloaddelegate/webview%28__resource_didfailloadingwitherror_from_%29.md): Deprecated. Invoked when a resource failed to load.
- [webView:plugInFailedWithError:dataSource:](webresourceloaddelegate/webview%28__pluginfailedwitherror_datasource_%29.md): Deprecated. Invoked when a plug-in fails to load.

### Authenticating Resources

- [webView:resource:didReceiveAuthenticationChallenge:fromDataSource:](webresourceloaddelegate/webview%28__resource_didreceive_from_%29-54xbd.md): Deprecated. Invoked when an authentication challenge has been received for a resource.
- [webView:resource:didCancelAuthenticationChallenge:fromDataSource:](webresourceloaddelegate/webview%28__resource_didcancel_from_%29.md): Deprecated. Invoked when an authentication challenge for a resource was canceled.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Loading Resources (Legacy)

- [WebResource](webresource.md): A `WebResource` object represents a downloaded URL. It encapsulates the data of the download as well as other resource properties such as the URL, MIME type, and frame name.
