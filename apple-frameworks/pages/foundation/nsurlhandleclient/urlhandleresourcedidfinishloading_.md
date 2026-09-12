> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlhandleclient/urlhandleresourcedidfinishloading:](https://developer.apple.com/documentation/foundation/nsurlhandleclient/urlhandleresourcedidfinishloading:)

# URLHandleResourceDidFinishLoading:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.4)

Sent when an URL handle finishes loading resource data.

> Use [NSURLConnection](../nsurlconnection.md) or [NSURLDownload](../nsurldownload.md) instead; see [URL Loading System](../url-loading-system.md).

## Declaration

```objectivec
- (void) URLHandleResourceDidFinishLoading:(NSURLHandle *) sender;
```

## Parameters

- `sender`: The URL handle sending the message.

## See Also

### Notification methods

- [URLHandleResourceDidBeginLoading:](urlhandleresourcedidbeginloading_.md): Deprecated. Sent when an URL handle begins loading resource data.
- [URLHandleResourceDidCancelLoading:](urlhandleresourcedidcancelloading_.md): Deprecated. Sent when an URL handle has canceled loading resource data in response to a programmatic request.
- [URLHandle:resourceDataDidBecomeAvailable:](urlhandle_resourcedatadidbecomeavailable_.md): Deprecated. Sent periodically by an URL handle when new resource data becomes available.
- [URLHandle:resourceDidFailLoadingWithReason:](urlhandle_resourcedidfailloadingwithreason_.md): Deprecated. Sent when the URL handle failed to load resource data for some reason other than being canceled.
