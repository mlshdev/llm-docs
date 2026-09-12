> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlhandleclient/urlhandle:resourcedidfailloadingwithreason:](https://developer.apple.com/documentation/foundation/nsurlhandleclient/urlhandle:resourcedidfailloadingwithreason:)

# URLHandle:resourceDidFailLoadingWithReason:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.4)

Sent when the URL handle failed to load resource data for some reason other than being canceled.

> Use [NSURLConnection](../nsurlconnection.md) or [NSURLDownload](../nsurldownload.md) instead; see [URL Loading System](../url-loading-system.md).

## Declaration

```objectivec
- (void) URLHandle:(NSURLHandle *) sender resourceDidFailLoadingWithReason:(NSString *) reason;
```

## Parameters

- `sender`: The URL handle sending the message.
- `reason`: A human-readable, localized string describing why the load failed.

## See Also

### Notification methods

- [URLHandleResourceDidBeginLoading:](urlhandleresourcedidbeginloading_.md): Deprecated. Sent when an URL handle begins loading resource data.
- [URLHandleResourceDidCancelLoading:](urlhandleresourcedidcancelloading_.md): Deprecated. Sent when an URL handle has canceled loading resource data in response to a programmatic request.
- [URLHandleResourceDidFinishLoading:](urlhandleresourcedidfinishloading_.md): Deprecated. Sent when an URL handle finishes loading resource data.
- [URLHandle:resourceDataDidBecomeAvailable:](urlhandle_resourcedatadidbecomeavailable_.md): Deprecated. Sent periodically by an URL handle when new resource data becomes available.
