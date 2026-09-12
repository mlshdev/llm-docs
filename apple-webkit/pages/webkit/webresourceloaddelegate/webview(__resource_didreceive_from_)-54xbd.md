> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webresourceloaddelegate/webview(_:resource:didreceive:from:)-54xbd](https://developer.apple.com/documentation/webkit/webresourceloaddelegate/webview(_:resource:didreceive:from:)-54xbd)

# webView(\_:resource:didReceive:from:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Invoked when an authentication challenge has been received for a resource.

## Declaration

```swift
optional func webView(_ sender: WebView!, resource identifier: Any!, didReceive challenge: URLAuthenticationChallenge!, from dataSource: WebDataSource!)
```

## Parameters

- `sender`: The web view that sent this message.
- `identifier`: An identifier object used to track the resource being loaded by `dataSource`.
- `challenge`: The authentication challenge that was received.
- `dataSource`: The data source for this web view.

## See Also

### Authenticating Resources

- [webView(\_:resource:didCancel:from:)](webview%28__resource_didcancel_from_%29.md): Deprecated. Invoked when an authentication challenge for a resource was canceled.

# webView:resource:didReceiveAuthenticationChallenge:fromDataSource: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Invoked when an authentication challenge has been received for a resource.

## Declaration

```objectivec
- (void) webView:(WebView *) sender resource:(id) identifier didReceiveAuthenticationChallenge:(NSURLAuthenticationChallenge *) challenge fromDataSource:(WebDataSource *) dataSource;
```

## Parameters

- `sender`: The web view that sent this message.
- `identifier`: An identifier object used to track the resource being loaded by `dataSource`.
- `challenge`: The authentication challenge that was received.
- `dataSource`: The data source for this web view.

## See Also

### Authenticating Resources

- [webView:resource:didCancelAuthenticationChallenge:fromDataSource:](webview%28__resource_didcancel_from_%29.md): Deprecated. Invoked when an authentication challenge for a resource was canceled.
