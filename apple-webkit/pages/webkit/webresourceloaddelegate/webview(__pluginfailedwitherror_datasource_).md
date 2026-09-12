> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webresourceloaddelegate/webview(_:pluginfailedwitherror:datasource:)](https://developer.apple.com/documentation/webkit/webresourceloaddelegate/webview(_:pluginfailedwitherror:datasource:))

# webView(\_:plugInFailedWithError:dataSource:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Invoked when a plug-in fails to load.

## Declaration

```swift
optional func webView(_ sender: WebView!, plugInFailedWithError error: (any Error)!, dataSource: WebDataSource!)
```

## Parameters

- `sender`: The web view that sent this message.
- `error`: The error that occurred during the process of loading that resource.

  The `userInfo` dictionary of `error` may contain additional information about the failure. If the `userInfo` dictionary is not `nil`, it may contain some or all of these key-value pairs. The value of the `NSErrorFailingURLKey` key is a URL string of the `SRC` attribute. The value of the [WebKitErrorPlugInNameKey](../webkiterrorpluginnamekey.md) key is a string containing the plug-in’s name. The value for the [WebKitErrorPlugInPageURLStringKey](../webkiterrorpluginpageurlstringkey.md) key is a URL string of the `PLUGINSPAGE` attribute. The value of the [WebKitErrorMIMETypeKey](../webkiterrormimetypekey.md) key is a string of the `TYPE` attribute.
- `dataSource`: The data source for this web view.

<a id="Discussion"></a>

## Discussion

This method might be invoked if a plug-in is not found, fails to load, or is not available for some reason. Delegates might implement this method to display or log a detailed error message. If you do not implement this method, no action is taken.

## See Also

### Loading Content

- [webView(\_:resource:willSend:redirectResponse:from:)](webview%28__resource_willsend_redirectresponse_from_%29.md): Deprecated. Invoked before a request is initiated for a resource and returns a possibly modified request.
- [webView(\_:resource:didFinishLoadingFrom:)](webview%28__resource_didfinishloadingfrom_%29.md): Deprecated. Invoked when all of the data for a given resource is loaded.
- [webView(\_:resource:didReceive:from:)](webview%28__resource_didreceive_from_%29-22bdg.md): Deprecated. Invoked after a resource has been loaded.
- [webView(\_:resource:didReceiveContentLength:from:)](webview%28__resource_didreceivecontentlength_from_%29.md): Deprecated. Invoked when some of the data for a given resource has arrived.
- [webView(\_:resource:didFailLoadingWithError:from:)](webview%28__resource_didfailloadingwitherror_from_%29.md): Deprecated. Invoked when a resource failed to load.

# webView:plugInFailedWithError:dataSource: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Invoked when a plug-in fails to load.

## Declaration

```objectivec
- (void) webView:(WebView *) sender plugInFailedWithError:(NSError *) error dataSource:(WebDataSource *) dataSource;
```

## Parameters

- `sender`: The web view that sent this message.
- `error`: The error that occurred during the process of loading that resource.

  The `userInfo` dictionary of `error` may contain additional information about the failure. If the `userInfo` dictionary is not `nil`, it may contain some or all of these key-value pairs. The value of the `NSErrorFailingURLKey` key is a URL string of the `SRC` attribute. The value of the [WebKitErrorPlugInNameKey](../webkiterrorpluginnamekey.md) key is a string containing the plug-in’s name. The value for the [WebKitErrorPlugInPageURLStringKey](../webkiterrorpluginpageurlstringkey.md) key is a URL string of the `PLUGINSPAGE` attribute. The value of the [WebKitErrorMIMETypeKey](../webkiterrormimetypekey.md) key is a string of the `TYPE` attribute.
- `dataSource`: The data source for this web view.

<a id="Discussion"></a>

## Discussion

This method might be invoked if a plug-in is not found, fails to load, or is not available for some reason. Delegates might implement this method to display or log a detailed error message. If you do not implement this method, no action is taken.

## See Also

### Loading Content

- [webView:resource:willSendRequest:redirectResponse:fromDataSource:](webview%28__resource_willsend_redirectresponse_from_%29.md): Deprecated. Invoked before a request is initiated for a resource and returns a possibly modified request.
- [webView:resource:didFinishLoadingFromDataSource:](webview%28__resource_didfinishloadingfrom_%29.md): Deprecated. Invoked when all of the data for a given resource is loaded.
- [webView:resource:didReceiveResponse:fromDataSource:](webview%28__resource_didreceive_from_%29-22bdg.md): Deprecated. Invoked after a resource has been loaded.
- [webView:resource:didReceiveContentLength:fromDataSource:](webview%28__resource_didreceivecontentlength_from_%29.md): Deprecated. Invoked when some of the data for a given resource has arrived.
- [webView:resource:didFailLoadingWithError:fromDataSource:](webview%28__resource_didfailloadingwitherror_from_%29.md): Deprecated. Invoked when a resource failed to load.
