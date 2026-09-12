> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webresourceloaddelegate/webview(_:resource:didcancel:from:)](https://developer.apple.com/documentation/webkit/webresourceloaddelegate/webview(_:resource:didcancel:from:))

# webView(\_:resource:didCancel:from:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Invoked when an authentication challenge for a resource was canceled.

## Declaration

```swift
optional func webView(_ sender: WebView!, resource identifier: Any!, didCancel challenge: URLAuthenticationChallenge!, from dataSource: WebDataSource!)
```

## Parameters

- `sender`: The web view that sent this message.
- `identifier`: An identifier object used to track the resource being loaded by `dataSource`.
- `challenge`: The authentication challenge that was canceled.
- `dataSource`: The data source for this web view.

## See Also

### Authenticating Resources

- [webView(\_:resource:didReceive:from:)](webview%28__resource_didreceive_from_%29-54xbd.md): Deprecated. Invoked when an authentication challenge has been received for a resource.

# webView:resource:didCancelAuthenticationChallenge:fromDataSource: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Invoked when an authentication challenge for a resource was canceled.

## Declaration

```objectivec
- (void) webView:(WebView *) sender resource:(id) identifier didCancelAuthenticationChallenge:(NSURLAuthenticationChallenge *) challenge fromDataSource:(WebDataSource *) dataSource;
```

## Parameters

- `sender`: The web view that sent this message.
- `identifier`: An identifier object used to track the resource being loaded by `dataSource`.
- `challenge`: The authentication challenge that was canceled.
- `dataSource`: The data source for this web view.

## See Also

### Authenticating Resources

- [webView:resource:didReceiveAuthenticationChallenge:fromDataSource:](webview%28__resource_didreceive_from_%29-54xbd.md): Deprecated. Invoked when an authentication challenge has been received for a resource.
