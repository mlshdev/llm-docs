> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkdownloaddelegate/download(_:didreceive:completionhandler:)](https://developer.apple.com/documentation/webkit/wkdownloaddelegate/download(_:didreceive:completionhandler:))

# download(\_:didReceive:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

Asks the delegate to respond to an authentication challenge.

## Declaration

```swift
optional func download(_ download: WKDownload, didReceive challenge: URLAuthenticationChallenge, completionHandler: @escaping @MainActor @Sendable (URLSession.AuthChallengeDisposition, URLCredential?) -> Void)
```

```swift
optional func download(_ download: WKDownload, respondTo challenge: URLAuthenticationChallenge) async -> (URLSession.AuthChallengeDisposition, URLCredential?)
```

## Parameters

- `download`: The download that received the authentication challenge.
- `challenge`: The authentication challenge.
- `completionHandler`: A closure you must invoke to respond to the authentication challenge. Provide the closure with a disposition that describes how to respond to the authorization challenge, and optional credentials.

<a id="Discussion"></a>

## Discussion

Determine how to respond to the authentication challenge in this method. Then invoke `completionHandler` with a disposition that describes how to respond to the authorization challenge, and optional credentials.

If you don’t implement this method, the web view responds to the challenge with [URLSession.AuthChallengeDisposition.rejectProtectionSpace](https://developer.apple.com/documentation/foundation/urlsession/authchallengedisposition/rejectprotectionspace).

## See Also

### Responding to Authorization Challenges

- [WKDownload.RedirectPolicy](../wkdownload/redirectpolicy.md): An enumeration with cases that indicate whether to proceed with a redirect.

# download:didReceiveAuthenticationChallenge:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Asks the delegate to respond to an authentication challenge.

## Declaration

```objectivec
- (void) download:(WKDownload *) download didReceiveAuthenticationChallenge:(NSURLAuthenticationChallenge *) challenge completionHandler:(void (^)(enum NSURLSessionAuthChallengeDisposition, NSURLCredential *)) completionHandler;
```

## Parameters

- `download`: The download that received the authentication challenge.
- `challenge`: The authentication challenge.
- `completionHandler`: A closure you must invoke to respond to the authentication challenge. Provide the closure with a disposition that describes how to respond to the authorization challenge, and optional credentials.

<a id="Discussion"></a>

## Discussion

Determine how to respond to the authentication challenge in this method. Then invoke `completionHandler` with a disposition that describes how to respond to the authorization challenge, and optional credentials.

If you don’t implement this method, the web view responds to the challenge with [NSURLSessionAuthChallengeRejectProtectionSpace](https://developer.apple.com/documentation/foundation/urlsession/authchallengedisposition/rejectprotectionspace).

## See Also

### Responding to Authorization Challenges

- [WKDownloadRedirectPolicy](../wkdownload/redirectpolicy.md): An enumeration with cases that indicate whether to proceed with a redirect.
