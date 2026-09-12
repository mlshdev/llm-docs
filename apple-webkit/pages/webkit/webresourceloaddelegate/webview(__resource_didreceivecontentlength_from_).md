> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webresourceloaddelegate/webview(_:resource:didreceivecontentlength:from:)](https://developer.apple.com/documentation/webkit/webresourceloaddelegate/webview(_:resource:didreceivecontentlength:from:))

# webView(\_:resource:didReceiveContentLength:from:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Invoked when some of the data for a given resource has arrived.

## Declaration

```swift
optional func webView(_ sender: WebView!, resource identifier: Any!, didReceiveContentLength length: Int, from dataSource: WebDataSource!)
```

## Parameters

- `sender`: The web view that sent this message.
- `identifier`: An identifier object used to track the resource being loaded by `dataSource`.
- `length`: The amount of incremental data received for this resource—the amount of data loaded since the last time this method was invoked for this resource, not the total amount received for this resource.

  The `length` parameter type was changed from type `unsigned int` to type `NSUInteger` in OS X v10.5.
- `dataSource`: The data source for this web view.

<a id="Discussion"></a>

## Discussion

Delegates might implement this method to update the load status of an individual resource.

## See Also

### Loading Content

- [webView(\_:resource:willSend:redirectResponse:from:)](webview%28__resource_willsend_redirectresponse_from_%29.md): Deprecated. Invoked before a request is initiated for a resource and returns a possibly modified request.
- [webView(\_:resource:didFinishLoadingFrom:)](webview%28__resource_didfinishloadingfrom_%29.md): Deprecated. Invoked when all of the data for a given resource is loaded.
- [webView(\_:resource:didReceive:from:)](webview%28__resource_didreceive_from_%29-22bdg.md): Deprecated. Invoked after a resource has been loaded.
- [webView(\_:resource:didFailLoadingWithError:from:)](webview%28__resource_didfailloadingwitherror_from_%29.md): Deprecated. Invoked when a resource failed to load.
- [webView(\_:plugInFailedWithError:dataSource:)](webview%28__pluginfailedwitherror_datasource_%29.md): Deprecated. Invoked when a plug-in fails to load.

# webView:resource:didReceiveContentLength:fromDataSource: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Invoked when some of the data for a given resource has arrived.

## Declaration

```objectivec
- (void) webView:(WebView *) sender resource:(id) identifier didReceiveContentLength:(NSInteger) length fromDataSource:(WebDataSource *) dataSource;
```

## Parameters

- `sender`: The web view that sent this message.
- `identifier`: An identifier object used to track the resource being loaded by `dataSource`.
- `length`: The amount of incremental data received for this resource—the amount of data loaded since the last time this method was invoked for this resource, not the total amount received for this resource.

  The `length` parameter type was changed from type `unsigned int` to type `NSUInteger` in OS X v10.5.
- `dataSource`: The data source for this web view.

<a id="Discussion"></a>

## Discussion

Delegates might implement this method to update the load status of an individual resource.

## See Also

### Loading Content

- [webView:resource:willSendRequest:redirectResponse:fromDataSource:](webview%28__resource_willsend_redirectresponse_from_%29.md): Deprecated. Invoked before a request is initiated for a resource and returns a possibly modified request.
- [webView:resource:didFinishLoadingFromDataSource:](webview%28__resource_didfinishloadingfrom_%29.md): Deprecated. Invoked when all of the data for a given resource is loaded.
- [webView:resource:didReceiveResponse:fromDataSource:](webview%28__resource_didreceive_from_%29-22bdg.md): Deprecated. Invoked after a resource has been loaded.
- [webView:resource:didFailLoadingWithError:fromDataSource:](webview%28__resource_didfailloadingwitherror_from_%29.md): Deprecated. Invoked when a resource failed to load.
- [webView:plugInFailedWithError:dataSource:](webview%28__pluginfailedwitherror_datasource_%29.md): Deprecated. Invoked when a plug-in fails to load.
