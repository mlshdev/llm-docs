> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webresourceloaddelegate/webview(_:resource:willsend:redirectresponse:from:)](https://developer.apple.com/documentation/webkit/webresourceloaddelegate/webview(_:resource:willsend:redirectresponse:from:))

# webView(\_:resource:willSend:redirectResponse:from:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Invoked before a request is initiated for a resource and returns a possibly modified request.

## Declaration

```swift
optional func webView(_ sender: WebView!, resource identifier: Any!, willSend request: URLRequest!, redirectResponse: URLResponse!, from dataSource: WebDataSource!) -> URLRequest!
```

## Parameters

- `sender`: The web view that sent this message.
- `identifier`: An identifier object used to track the resource being loaded by `dataSource`.
- `request`: The request that is sent.
- `redirectResponse`: The redirect server response. If `nil`, there is no redirect in progress.
- `dataSource`: The data source for this web view.

<a id="return-value"></a>

## Return Value

A possibly modified request.

<a id="Discussion"></a>

## Discussion

Delegates might implement this method to modify resource requests before they are sent. Note that this method might be invoked multiple times per load (as a result of a server redirect) where as the  [webView(\_:identifierForInitialRequest:from:)](webview%28__identifierforinitialrequest_from_%29.md) method is invoked once.

## See Also

### Loading Content

- [webView(\_:resource:didFinishLoadingFrom:)](webview%28__resource_didfinishloadingfrom_%29.md): Deprecated. Invoked when all of the data for a given resource is loaded.
- [webView(\_:resource:didReceive:from:)](webview%28__resource_didreceive_from_%29-22bdg.md): Deprecated. Invoked after a resource has been loaded.
- [webView(\_:resource:didReceiveContentLength:from:)](webview%28__resource_didreceivecontentlength_from_%29.md): Deprecated. Invoked when some of the data for a given resource has arrived.
- [webView(\_:resource:didFailLoadingWithError:from:)](webview%28__resource_didfailloadingwitherror_from_%29.md): Deprecated. Invoked when a resource failed to load.
- [webView(\_:plugInFailedWithError:dataSource:)](webview%28__pluginfailedwitherror_datasource_%29.md): Deprecated. Invoked when a plug-in fails to load.

# webView:resource:willSendRequest:redirectResponse:fromDataSource: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Invoked before a request is initiated for a resource and returns a possibly modified request.

## Declaration

```objectivec
- (NSURLRequest *) webView:(WebView *) sender resource:(id) identifier willSendRequest:(NSURLRequest *) request redirectResponse:(NSURLResponse *) redirectResponse fromDataSource:(WebDataSource *) dataSource;
```

## Parameters

- `sender`: The web view that sent this message.
- `identifier`: An identifier object used to track the resource being loaded by `dataSource`.
- `request`: The request that is sent.
- `redirectResponse`: The redirect server response. If `nil`, there is no redirect in progress.
- `dataSource`: The data source for this web view.

<a id="return-value"></a>

## Return Value

A possibly modified request.

<a id="Discussion"></a>

## Discussion

Delegates might implement this method to modify resource requests before they are sent. Note that this method might be invoked multiple times per load (as a result of a server redirect) where as the  [webView:identifierForInitialRequest:fromDataSource:](webview%28__identifierforinitialrequest_from_%29.md) method is invoked once.

## See Also

### Loading Content

- [webView:resource:didFinishLoadingFromDataSource:](webview%28__resource_didfinishloadingfrom_%29.md): Deprecated. Invoked when all of the data for a given resource is loaded.
- [webView:resource:didReceiveResponse:fromDataSource:](webview%28__resource_didreceive_from_%29-22bdg.md): Deprecated. Invoked after a resource has been loaded.
- [webView:resource:didReceiveContentLength:fromDataSource:](webview%28__resource_didreceivecontentlength_from_%29.md): Deprecated. Invoked when some of the data for a given resource has arrived.
- [webView:resource:didFailLoadingWithError:fromDataSource:](webview%28__resource_didfailloadingwitherror_from_%29.md): Deprecated. Invoked when a resource failed to load.
- [webView:plugInFailedWithError:dataSource:](webview%28__pluginfailedwitherror_datasource_%29.md): Deprecated. Invoked when a plug-in fails to load.
