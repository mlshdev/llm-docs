> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurldownloaddelegate/downloadshouldusecredentialstorage(_:)](https://developer.apple.com/documentation/foundation/nsurldownloaddelegate/downloadshouldusecredentialstorage(_:))

# downloadShouldUseCredentialStorage(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Sent to determine whether the URL loader should consult the credential storage to authenticate the download.

## Declaration

```swift
optional func downloadShouldUseCredentialStorage(_ download: NSURLDownload) -> Bool
```

## Parameters

- `download`: The connection sending the message.

<a id="Discussion"></a>

## Discussion

This method is called before any attempt to authenticate is made.  By returning [false](https://developer.apple.com/documentation/swift/false), the delegate tells the download not to consult the credential storage and makes itself responsible for providing credentials for any authentication challenges.  Not implementing this method is the same as returing [true](https://developer.apple.com/documentation/swift/true). The delegate is free to consult the credential storage itself when it receives a [download(\_:didReceive:)](download%28__didreceive_%29-1pc0v.md) message.

## See Also

### Download Authentication

- [download(\_:canAuthenticateAgainstProtectionSpace:)](download%28__canauthenticateagainstprotectionspace_%29.md): Sent to determine whether the delegate is able to respond to a protection space’s form of authentication.
- [download(\_:didCancel:)](download%28__didcancel_%29.md): Sent if an authentication challenge is canceled due to the protocol implementation encountering an error.
- [download(\_:didReceive:)](download%28__didreceive_%29-1pc0v.md): Sent when the URL download must authenticate a challenge in order to download the request.

# downloadShouldUseCredentialStorage: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Sent to determine whether the URL loader should consult the credential storage to authenticate the download.

## Declaration

```objectivec
- (BOOL) downloadShouldUseCredentialStorage:(NSURLDownload *) download;
```

## Parameters

- `download`: The connection sending the message.

<a id="Discussion"></a>

## Discussion

This method is called before any attempt to authenticate is made.  By returning [false](https://developer.apple.com/documentation/swift/false), the delegate tells the download not to consult the credential storage and makes itself responsible for providing credentials for any authentication challenges.  Not implementing this method is the same as returing [true](https://developer.apple.com/documentation/swift/true). The delegate is free to consult the credential storage itself when it receives a [download:didReceiveAuthenticationChallenge:](download%28__didreceive_%29-1pc0v.md) message.

## See Also

### Download Authentication

- [download:canAuthenticateAgainstProtectionSpace:](download%28__canauthenticateagainstprotectionspace_%29.md): Sent to determine whether the delegate is able to respond to a protection space’s form of authentication.
- [download:didCancelAuthenticationChallenge:](download%28__didcancel_%29.md): Sent if an authentication challenge is canceled due to the protocol implementation encountering an error.
- [download:didReceiveAuthenticationChallenge:](download%28__didreceive_%29-1pc0v.md): Sent when the URL download must authenticate a challenge in order to download the request.
