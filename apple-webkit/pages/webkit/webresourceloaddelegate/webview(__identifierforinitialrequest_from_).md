> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webresourceloaddelegate/webview(_:identifierforinitialrequest:from:)](https://developer.apple.com/documentation/webkit/webresourceloaddelegate/webview(_:identifierforinitialrequest:from:))

# webView(\_:identifierForInitialRequest:from:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns an identifier object used to track the progress of loading a single resource.

## Declaration

```swift
optional func webView(_ sender: WebView!, identifierForInitialRequest request: URLRequest!, from dataSource: WebDataSource!) -> Any!
```

## Parameters

- `sender`: The web view that sent this message.
- `request`: The request that initiated this load for `dataSource`.
- `dataSource`: The data source for this web view.

<a id="return-value"></a>

## Return Value

An identifier object that is retained by `sender` and passed as a parameter to all other delegate messages pertaining to this resource.

<a id="Discussion"></a>

## Discussion

Delegates might implement this method to begin tracking the progress of loading an individual resource. Note that this method is invoked once per load where as the [webView(\_:resource:willSend:redirectResponse:from:)](webview%28__resource_willsend_redirectresponse_from_%29.md) method may be invoked multiple times.

## See Also

### Related Documentation

- [WebKit Objective-C Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DisplayWebContent/DisplayWebContent.html#//apple_ref/doc/uid/10000164i)

# webView:identifierForInitialRequest:fromDataSource: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns an identifier object used to track the progress of loading a single resource.

## Declaration

```objectivec
- (id) webView:(WebView *) sender identifierForInitialRequest:(NSURLRequest *) request fromDataSource:(WebDataSource *) dataSource;
```

## Parameters

- `sender`: The web view that sent this message.
- `request`: The request that initiated this load for `dataSource`.
- `dataSource`: The data source for this web view.

<a id="return-value"></a>

## Return Value

An identifier object that is retained by `sender` and passed as a parameter to all other delegate messages pertaining to this resource.

<a id="Discussion"></a>

## Discussion

Delegates might implement this method to begin tracking the progress of loading an individual resource. Note that this method is invoked once per load where as the [webView:resource:willSendRequest:redirectResponse:fromDataSource:](webview%28__resource_willsend_redirectresponse_from_%29.md) method may be invoked multiple times.

## See Also

### Related Documentation

- [WebKit Objective-C Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DisplayWebContent/DisplayWebContent.html#//apple_ref/doc/uid/10000164i)
