> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wknavigationdelegate/webview(_:authenticationchallenge:shouldallowdeprecatedtls:)](https://developer.apple.com/documentation/webkit/wknavigationdelegate/webview(_:authenticationchallenge:shouldallowdeprecatedtls:))

# webView(\_:authenticationChallenge:shouldAllowDeprecatedTLS:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Asks the delegate whether to continue with a connection that uses a deprecated version of TLS.

## Declaration

```swift
optional func webView(_ webView: WKWebView, authenticationChallenge challenge: URLAuthenticationChallenge, shouldAllowDeprecatedTLS decisionHandler: @escaping @MainActor @Sendable (Bool) -> Void)
```

```swift
optional func webView(_ webView: WKWebView, shouldAllowDeprecatedTLSFor challenge: URLAuthenticationChallenge) async -> Bool
```

## Parameters

- `webView`: The web view that receives the authentication challenge.
- `challenge`: The authentication challenge.
- `decisionHandler`: The completion handler block to execute with the decision. This handler has no return value and takes the following parameter:

  - **decision**: A Boolean value that indicates whether to continue to use a deprecated version of TLS. Specify [true](https://developer.apple.com/documentation/swift/true) to continue, or [false](https://developer.apple.com/documentation/swift/false) to reject the connection.

<a id="Discussion"></a>

## Discussion

If you don’t implement this method, the web view uses system settings to determine whether to allow the use of deprecated versions of TLS.

## See Also

### Responding to authentication challenges

- [webView(\_:didReceive:completionHandler:)](webview%28__didreceive_completionhandler_%29.md): Asks the delegate to respond to an authentication challenge.

# webView:authenticationChallenge:shouldAllowDeprecatedTLS: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Asks the delegate whether to continue with a connection that uses a deprecated version of TLS.

## Declaration

```objectivec
- (void) webView:(WKWebView *) webView authenticationChallenge:(NSURLAuthenticationChallenge *) challenge shouldAllowDeprecatedTLS:(void (^)(_Bool)) decisionHandler;
```

## Parameters

- `webView`: The web view that receives the authentication challenge.
- `challenge`: The authentication challenge.
- `decisionHandler`: The completion handler block to execute with the decision. This handler has no return value and takes the following parameter:

  - **decision**: A Boolean value that indicates whether to continue to use a deprecated version of TLS. Specify [true](https://developer.apple.com/documentation/swift/true) to continue, or [false](https://developer.apple.com/documentation/swift/false) to reject the connection.

<a id="Discussion"></a>

## Discussion

If you don’t implement this method, the web view uses system settings to determine whether to allow the use of deprecated versions of TLS.

## See Also

### Responding to authentication challenges

- [webView:didReceiveAuthenticationChallenge:completionHandler:](webview%28__didreceive_completionhandler_%29.md): Asks the delegate to respond to an authentication challenge.
