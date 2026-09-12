> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webresourceloaddelegate/webview(_:resource:didfinishloadingfrom:)](https://developer.apple.com/documentation/webkit/webresourceloaddelegate/webview(_:resource:didfinishloadingfrom:))

# webView(\_:resource:didFinishLoadingFrom:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Invoked when all of the data for a given resource is loaded.

## Declaration

```swift
optional func webView(_ sender: WebView!, resource identifier: Any!, didFinishLoadingFrom dataSource: WebDataSource!)
```

## Parameters

- `sender`: The web view that sent this message.
- `identifier`: An identifier object used to track the resource being loaded by `dataSource`.
- `dataSource`: The data source for this web view.

<a id="Discussion"></a>

## Discussion

The `identifier` parameter is used to track the resource being loaded by `dataSource`. Delegates might implement this method to update the load status of an individual resource.

## See Also

### Loading Content

- [webView(\_:resource:willSend:redirectResponse:from:)](webview%28__resource_willsend_redirectresponse_from_%29.md): Deprecated. Invoked before a request is initiated for a resource and returns a possibly modified request.
- [webView(\_:resource:didReceive:from:)](webview%28__resource_didreceive_from_%29-22bdg.md): Deprecated. Invoked after a resource has been loaded.
- [webView(\_:resource:didReceiveContentLength:from:)](webview%28__resource_didreceivecontentlength_from_%29.md): Deprecated. Invoked when some of the data for a given resource has arrived.
- [webView(\_:resource:didFailLoadingWithError:from:)](webview%28__resource_didfailloadingwitherror_from_%29.md): Deprecated. Invoked when a resource failed to load.
- [webView(\_:plugInFailedWithError:dataSource:)](webview%28__pluginfailedwitherror_datasource_%29.md): Deprecated. Invoked when a plug-in fails to load.

# webView:resource:didFinishLoadingFromDataSource: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Invoked when all of the data for a given resource is loaded.

## Declaration

```objectivec
- (void) webView:(WebView *) sender resource:(id) identifier didFinishLoadingFromDataSource:(WebDataSource *) dataSource;
```

## Parameters

- `sender`: The web view that sent this message.
- `identifier`: An identifier object used to track the resource being loaded by `dataSource`.
- `dataSource`: The data source for this web view.

<a id="Discussion"></a>

## Discussion

The `identifier` parameter is used to track the resource being loaded by `dataSource`. Delegates might implement this method to update the load status of an individual resource.

## See Also

### Loading Content

- [webView:resource:willSendRequest:redirectResponse:fromDataSource:](webview%28__resource_willsend_redirectresponse_from_%29.md): Deprecated. Invoked before a request is initiated for a resource and returns a possibly modified request.
- [webView:resource:didReceiveResponse:fromDataSource:](webview%28__resource_didreceive_from_%29-22bdg.md): Deprecated. Invoked after a resource has been loaded.
- [webView:resource:didReceiveContentLength:fromDataSource:](webview%28__resource_didreceivecontentlength_from_%29.md): Deprecated. Invoked when some of the data for a given resource has arrived.
- [webView:resource:didFailLoadingWithError:fromDataSource:](webview%28__resource_didfailloadingwitherror_from_%29.md): Deprecated. Invoked when a resource failed to load.
- [webView:plugInFailedWithError:dataSource:](webview%28__pluginfailedwitherror_datasource_%29.md): Deprecated. Invoked when a plug-in fails to load.
