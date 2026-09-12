> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/badownloadmanagerdelegate/download(_:didreceive:completionhandler:)](https://developer.apple.com/documentation/backgroundassets/badownloadmanagerdelegate/download(_:didreceive:completionhandler:))

# download(\_:didReceive:completionHandler:) (Swift)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

Tells the delegate to resolve the specified URL authentication challenge.

## Declaration

```swift
optional func download(_ download: BADownload, didReceive challenge: URLAuthenticationChallenge, completionHandler: @escaping @Sendable (URLSession.AuthChallengeDisposition, URLCredential?) -> Void)
```

```swift
optional func download(_ download: BADownload, didReceive challenge: URLAuthenticationChallenge) async -> (URLSession.AuthChallengeDisposition, URLCredential?)
```

## Parameters

- `download`: The associated asset download.
- `challenge`: An object that provides the information you need to decide how to respond to the server’s request for authentication.
- `completionHandler`: The completion handler you call to tell the system how to respond to the challenge.

<a id="Discussion"></a>

## Discussion

The completion handler takes the following parameters:

- An [URLSession.AuthChallengeDisposition](../../foundation/urlsession/authchallengedisposition.md) that indicates whether the system processes, cancels, or rejects the challenge.
- If the specified dispostion is [URLSession.AuthChallengeDisposition.useCredential](../../foundation/urlsession/authchallengedisposition/usecredential.md), the [URLCredential](../../foundation/urlcredential.md) to use for authentication; otherwise, specify `nil`.

If you implement this method, make sure to call the completion handler promptly and with the necessary information. Otherwise, the server may deny the request and the associated asset download fails.

For more information about authentication challenges, see [Handling an authentication challenge](../../foundation/handling-an-authentication-challenge.md).

## See Also

### Reacting to download events

- [downloadDidBegin(\_:)](downloaddidbegin%28__%29.md): Informs the delegate about a started asset download.
- [download(\_:didWriteBytes:totalBytesWritten:totalBytesExpectedToWrite:)](download%28__didwritebytes_totalbyteswritten_totalbytesexpectedtowrite_%29.md): Informs the delegate about the progress of the specified asset download.
- [downloadDidPause(\_:)](downloaddidpause%28__%29.md): Informs the delegate about a paused asset download.

# download:didReceiveChallenge:completionHandler: (Objective-C)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

Tells the delegate to resolve the specified URL authentication challenge.

## Declaration

```objectivec
- (void) download:(BADownload *) download didReceiveChallenge:(NSURLAuthenticationChallenge *) challenge completionHandler:(void (^)(NSURLSessionAuthChallengeDisposition disposition, NSURLCredential *credential)) completionHandler;
```

## Parameters

- `download`: The associated asset download.
- `challenge`: An object that provides the information you need to decide how to respond to the server’s request for authentication.
- `completionHandler`: The completion handler you call to tell the system how to respond to the challenge.

<a id="Discussion"></a>

## Discussion

The completion handler takes the following parameters:

- An [NSURLSessionAuthChallengeDisposition](../../foundation/urlsession/authchallengedisposition.md) that indicates whether the system processes, cancels, or rejects the challenge.
- If the specified dispostion is [NSURLSessionAuthChallengeUseCredential](../../foundation/urlsession/authchallengedisposition/usecredential.md), the [NSURLCredential](../../foundation/urlcredential.md) to use for authentication; otherwise, specify `nil`.

If you implement this method, make sure to call the completion handler promptly and with the necessary information. Otherwise, the server may deny the request and the associated asset download fails.

For more information about authentication challenges, see [Handling an authentication challenge](../../foundation/handling-an-authentication-challenge.md).

## See Also

### Reacting to download events

- [downloadDidBegin:](downloaddidbegin%28__%29.md): Informs the delegate about a started asset download.
- [download:didWriteBytes:totalBytesWritten:totalBytesExpectedToWrite:](download%28__didwritebytes_totalbyteswritten_totalbytesexpectedtowrite_%29.md): Informs the delegate about the progress of the specified asset download.
- [downloadDidPause:](downloaddidpause%28__%29.md): Informs the delegate about a paused asset download.
