> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wknavigationdelegate/webview(_:didreceive:completionhandler:)](https://developer.apple.com/documentation/webkit/wknavigationdelegate/webview(_:didreceive:completionhandler:))

# webView(\_:didReceive:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Asks the delegate to respond to an authentication challenge.

## Declaration

```swift
optional func webView(_ webView: WKWebView, didReceive challenge: URLAuthenticationChallenge, completionHandler: @escaping @MainActor @Sendable (URLSession.AuthChallengeDisposition, URLCredential?) -> Void)
```

```swift
optional func webView(_ webView: WKWebView, respondTo challenge: URLAuthenticationChallenge) async -> (URLSession.AuthChallengeDisposition, URLCredential?)
```

## Parameters

- `webView`: The web view that receives the authentication challenge.
- `challenge`: The authentication challenge.
- `completionHandler`: A completion handler block to execute with the response. This handler has no return value and takes the following parameters:

  - **disposition**: The option to use to handle the challenge. For a list of options, see [URLSession.AuthChallengeDisposition](https://developer.apple.com/documentation/foundation/urlsession/authchallengedisposition).
  - **credential**: The credential to use for authentication when the `disposition` parameter contains the value [URLSession.AuthChallengeDisposition.useCredential](https://developer.apple.com/documentation/foundation/urlsession/authchallengedisposition/usecredential). Specify `nil` to continue without a credential.

## Mentioned In

- [Replacing UIWebView in your app](../replacing-uiwebview-in-your-app.md)

<a id="Discussion"></a>

## Discussion

If you don’t implement this method, the web view responds to the authentication challenge with the [URLSession.AuthChallengeDisposition.rejectProtectionSpace](https://developer.apple.com/documentation/foundation/urlsession/authchallengedisposition/rejectprotectionspace) disposition.

## See Also

### Responding to authentication challenges

- [webView(\_:authenticationChallenge:shouldAllowDeprecatedTLS:)](webview%28__authenticationchallenge_shouldallowdeprecatedtls_%29.md): Asks the delegate whether to continue with a connection that uses a deprecated version of TLS.

# webView:didReceiveAuthenticationChallenge:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Asks the delegate to respond to an authentication challenge.

## Declaration

```objectivec
- (void) webView:(WKWebView *) webView didReceiveAuthenticationChallenge:(NSURLAuthenticationChallenge *) challenge completionHandler:(void (^)(enum NSURLSessionAuthChallengeDisposition, NSURLCredential *)) completionHandler;
```

## Parameters

- `webView`: The web view that receives the authentication challenge.
- `challenge`: The authentication challenge.
- `completionHandler`: A completion handler block to execute with the response. This handler has no return value and takes the following parameters:

  - **disposition**: The option to use to handle the challenge. For a list of options, see [NSURLSessionAuthChallengeDisposition](https://developer.apple.com/documentation/foundation/urlsession/authchallengedisposition).
  - **credential**: The credential to use for authentication when the `disposition` parameter contains the value [NSURLSessionAuthChallengeUseCredential](https://developer.apple.com/documentation/foundation/urlsession/authchallengedisposition/usecredential). Specify `nil` to continue without a credential.

## Mentioned In

- [Replacing UIWebView in your app](../replacing-uiwebview-in-your-app.md)

<a id="Discussion"></a>

## Discussion

If you don’t implement this method, the web view responds to the authentication challenge with the [NSURLSessionAuthChallengeRejectProtectionSpace](https://developer.apple.com/documentation/foundation/urlsession/authchallengedisposition/rejectprotectionspace) disposition.

## See Also

### Responding to authentication challenges

- [webView:authenticationChallenge:shouldAllowDeprecatedTLS:](webview%28__authenticationchallenge_shouldallowdeprecatedtls_%29.md): Asks the delegate whether to continue with a connection that uses a deprecated version of TLS.
