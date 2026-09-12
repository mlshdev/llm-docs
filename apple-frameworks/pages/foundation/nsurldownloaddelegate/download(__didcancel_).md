> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurldownloaddelegate/download(_:didcancel:)](https://developer.apple.com/documentation/foundation/nsurldownloaddelegate/download(_:didcancel:))

# download(\_:didCancel:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Sent if an authentication challenge is canceled due to the protocol implementation encountering an error.

## Declaration

```swift
optional func download(_ download: NSURLDownload, didCancel challenge: URLAuthenticationChallenge)
```

## Parameters

- `download`: The URL download object sending the message.
- `challenge`: The authentication challenge that caused the download object to cancel the download.

<a id="Discussion"></a>

## Discussion

If the delegate receives this message the download will fail and the delegate will receive a [download(\_:didFailWithError:)](download%28__didfailwitherror_%29.md) message.

## See Also

### Download Authentication

- [download(\_:canAuthenticateAgainstProtectionSpace:)](download%28__canauthenticateagainstprotectionspace_%29.md): Sent to determine whether the delegate is able to respond to a protection space’s form of authentication.
- [download(\_:didReceive:)](download%28__didreceive_%29-1pc0v.md): Sent when the URL download must authenticate a challenge in order to download the request.
- [downloadShouldUseCredentialStorage(\_:)](downloadshouldusecredentialstorage%28__%29.md): Sent to determine whether the URL loader should consult the credential storage to authenticate the download.

# download:didCancelAuthenticationChallenge: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Sent if an authentication challenge is canceled due to the protocol implementation encountering an error.

## Declaration

```objectivec
- (void) download:(NSURLDownload *) download didCancelAuthenticationChallenge:(NSURLAuthenticationChallenge *) challenge;
```

## Parameters

- `download`: The URL download object sending the message.
- `challenge`: The authentication challenge that caused the download object to cancel the download.

<a id="Discussion"></a>

## Discussion

If the delegate receives this message the download will fail and the delegate will receive a [download:didFailWithError:](download%28__didfailwitherror_%29.md) message.

## See Also

### Download Authentication

- [download:canAuthenticateAgainstProtectionSpace:](download%28__canauthenticateagainstprotectionspace_%29.md): Sent to determine whether the delegate is able to respond to a protection space’s form of authentication.
- [download:didReceiveAuthenticationChallenge:](download%28__didreceive_%29-1pc0v.md): Sent when the URL download must authenticate a challenge in order to download the request.
- [downloadShouldUseCredentialStorage:](downloadshouldusecredentialstorage%28__%29.md): Sent to determine whether the URL loader should consult the credential storage to authenticate the download.
