> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webresourceloaddelegate/webview(_:resource:didreceive:from:)-22bdg](https://developer.apple.com/documentation/webkit/webresourceloaddelegate/webview(_:resource:didreceive:from:)-22bdg)

# webView(\_:resource:didReceive:from:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Invoked after a resource has been loaded.

## Declaration

```swift
optional func webView(_ sender: WebView!, resource identifier: Any!, didReceive response: URLResponse!, from dataSource: WebDataSource!)
```

## Parameters

- `sender`: The web view that sent this message.
- `identifier`: An identifier object used to track the resource being loaded by `dataSource`.
- `response`: The reply that was received.
- `dataSource`: The data source for this web view.

<a id="Discussion"></a>

## Discussion

In some rare cases, multiple responses may be received for a single resource. This happens in the case of multipart/x-mixed-replace, also known as a *server push*. In this case, delegates should assume that the progress of loading this resource restarts, and the expected content length may change.

## See Also

### Loading Content

- [webView(\_:resource:willSend:redirectResponse:from:)](webview%28__resource_willsend_redirectresponse_from_%29.md): Deprecated. Invoked before a request is initiated for a resource and returns a possibly modified request.
- [webView(\_:resource:didFinishLoadingFrom:)](webview%28__resource_didfinishloadingfrom_%29.md): Deprecated. Invoked when all of the data for a given resource is loaded.
- [webView(\_:resource:didReceiveContentLength:from:)](webview%28__resource_didreceivecontentlength_from_%29.md): Deprecated. Invoked when some of the data for a given resource has arrived.
- [webView(\_:resource:didFailLoadingWithError:from:)](webview%28__resource_didfailloadingwitherror_from_%29.md): Deprecated. Invoked when a resource failed to load.
- [webView(\_:plugInFailedWithError:dataSource:)](webview%28__pluginfailedwitherror_datasource_%29.md): Deprecated. Invoked when a plug-in fails to load.

# webView:resource:didReceiveResponse:fromDataSource: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Invoked after a resource has been loaded.

## Declaration

```objectivec
- (void) webView:(WebView *) sender resource:(id) identifier didReceiveResponse:(NSURLResponse *) response fromDataSource:(WebDataSource *) dataSource;
```

## Parameters

- `sender`: The web view that sent this message.
- `identifier`: An identifier object used to track the resource being loaded by `dataSource`.
- `response`: The reply that was received.
- `dataSource`: The data source for this web view.

<a id="Discussion"></a>

## Discussion

In some rare cases, multiple responses may be received for a single resource. This happens in the case of multipart/x-mixed-replace, also known as a *server push*. In this case, delegates should assume that the progress of loading this resource restarts, and the expected content length may change.

## See Also

### Loading Content

- [webView:resource:willSendRequest:redirectResponse:fromDataSource:](webview%28__resource_willsend_redirectresponse_from_%29.md): Deprecated. Invoked before a request is initiated for a resource and returns a possibly modified request.
- [webView:resource:didFinishLoadingFromDataSource:](webview%28__resource_didfinishloadingfrom_%29.md): Deprecated. Invoked when all of the data for a given resource is loaded.
- [webView:resource:didReceiveContentLength:fromDataSource:](webview%28__resource_didreceivecontentlength_from_%29.md): Deprecated. Invoked when some of the data for a given resource has arrived.
- [webView:resource:didFailLoadingWithError:fromDataSource:](webview%28__resource_didfailloadingwitherror_from_%29.md): Deprecated. Invoked when a resource failed to load.
- [webView:plugInFailedWithError:dataSource:](webview%28__pluginfailedwitherror_datasource_%29.md): Deprecated. Invoked when a plug-in fails to load.
