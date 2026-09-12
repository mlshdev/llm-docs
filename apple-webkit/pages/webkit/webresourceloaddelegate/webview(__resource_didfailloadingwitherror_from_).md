> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webresourceloaddelegate/webview(_:resource:didfailloadingwitherror:from:)](https://developer.apple.com/documentation/webkit/webresourceloaddelegate/webview(_:resource:didfailloadingwitherror:from:))

# webView(\_:resource:didFailLoadingWithError:from:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Invoked when a resource failed to load.

## Declaration

```swift
optional func webView(_ sender: WebView!, resource identifier: Any!, didFailLoadingWithError error: (any Error)!, from dataSource: WebDataSource!)
```

## Parameters

- `sender`: The web view that sent this message.
- `identifier`: An identifier object used to track the resource being loaded by `dataSource`.
- `error`: The error that occurred loading that resource.
- `dataSource`: The data source for this web view.

<a id="Discussion"></a>

## Discussion

Delegates might implement this method to display or log a detailed error message.

## See Also

### Loading Content

- [webView(\_:resource:willSend:redirectResponse:from:)](webview%28__resource_willsend_redirectresponse_from_%29.md): Deprecated. Invoked before a request is initiated for a resource and returns a possibly modified request.
- [webView(\_:resource:didFinishLoadingFrom:)](webview%28__resource_didfinishloadingfrom_%29.md): Deprecated. Invoked when all of the data for a given resource is loaded.
- [webView(\_:resource:didReceive:from:)](webview%28__resource_didreceive_from_%29-22bdg.md): Deprecated. Invoked after a resource has been loaded.
- [webView(\_:resource:didReceiveContentLength:from:)](webview%28__resource_didreceivecontentlength_from_%29.md): Deprecated. Invoked when some of the data for a given resource has arrived.
- [webView(\_:plugInFailedWithError:dataSource:)](webview%28__pluginfailedwitherror_datasource_%29.md): Deprecated. Invoked when a plug-in fails to load.

# webView:resource:didFailLoadingWithError:fromDataSource: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Invoked when a resource failed to load.

## Declaration

```objectivec
- (void) webView:(WebView *) sender resource:(id) identifier didFailLoadingWithError:(NSError *) error fromDataSource:(WebDataSource *) dataSource;
```

## Parameters

- `sender`: The web view that sent this message.
- `identifier`: An identifier object used to track the resource being loaded by `dataSource`.
- `error`: The error that occurred loading that resource.
- `dataSource`: The data source for this web view.

<a id="Discussion"></a>

## Discussion

Delegates might implement this method to display or log a detailed error message.

## See Also

### Loading Content

- [webView:resource:willSendRequest:redirectResponse:fromDataSource:](webview%28__resource_willsend_redirectresponse_from_%29.md): Deprecated. Invoked before a request is initiated for a resource and returns a possibly modified request.
- [webView:resource:didFinishLoadingFromDataSource:](webview%28__resource_didfinishloadingfrom_%29.md): Deprecated. Invoked when all of the data for a given resource is loaded.
- [webView:resource:didReceiveResponse:fromDataSource:](webview%28__resource_didreceive_from_%29-22bdg.md): Deprecated. Invoked after a resource has been loaded.
- [webView:resource:didReceiveContentLength:fromDataSource:](webview%28__resource_didreceivecontentlength_from_%29.md): Deprecated. Invoked when some of the data for a given resource has arrived.
- [webView:plugInFailedWithError:dataSource:](webview%28__pluginfailedwitherror_datasource_%29.md): Deprecated. Invoked when a plug-in fails to load.
