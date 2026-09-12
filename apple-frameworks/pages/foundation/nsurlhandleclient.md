> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlhandleclient](https://developer.apple.com/documentation/foundation/nsurlhandleclient)

# NSURLHandleClient

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** macOS 10.0+ (deprecated in 10.4)

The interface implemented by URL handle clients.

## Declaration

```objectivec
@protocol NSURLHandleClient
```

<a id="overview"></a>

## Overview

[NSURLHandleClient](nsurlhandleclient.md) is deprecated in macOS 10.4 and later. Applications that are intended for deployment in macOS 10.3 or later should use [NSURLConnection](nsurlconnection.md) or [NSURLDownload](nsurldownload.md) instead; see [URL Loading System](url-loading-system.md).

## Topics

### Notification methods

- [URLHandleResourceDidBeginLoading:](nsurlhandleclient/urlhandleresourcedidbeginloading_.md): Deprecated. Sent when an URL handle begins loading resource data.
- [URLHandleResourceDidCancelLoading:](nsurlhandleclient/urlhandleresourcedidcancelloading_.md): Deprecated. Sent when an URL handle has canceled loading resource data in response to a programmatic request.
- [URLHandleResourceDidFinishLoading:](nsurlhandleclient/urlhandleresourcedidfinishloading_.md): Deprecated. Sent when an URL handle finishes loading resource data.
- [URLHandle:resourceDataDidBecomeAvailable:](nsurlhandleclient/urlhandle_resourcedatadidbecomeavailable_.md): Deprecated. Sent periodically by an URL handle when new resource data becomes available.
- [URLHandle:resourceDidFailLoadingWithReason:](nsurlhandleclient/urlhandle_resourcedidfailloadingwithreason_.md): Deprecated. Sent when the URL handle failed to load resource data for some reason other than being canceled.

## See Also

### URL Handle

- [NSURLHandle](nsurlhandle.md): An object that accesses and manages resource data indicated by a URL.
