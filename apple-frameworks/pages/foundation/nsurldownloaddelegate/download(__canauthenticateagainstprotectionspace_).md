> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurldownloaddelegate/download(_:canauthenticateagainstprotectionspace:)](https://developer.apple.com/documentation/foundation/nsurldownloaddelegate/download(_:canauthenticateagainstprotectionspace:))

# download(\_:canAuthenticateAgainstProtectionSpace:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Sent to determine whether the delegate is able to respond to a protection space’s form of authentication.

## Declaration

```swift
optional func download(_ connection: NSURLDownload, canAuthenticateAgainstProtectionSpace protectionSpace: URLProtectionSpace) -> Bool
```

## Parameters

- `connection`: The download sending the message.
- `protectionSpace`: The protection space that generates an authentication challenge.

<a id="Discussion"></a>

## Discussion

This method is called before [download(\_:didReceive:)](download%28__didreceive_%29-1pc0v.md), allowing the delegate to inspect a protection space before attempting to authenticate against it. By returning [true](https://developer.apple.com/documentation/swift/true), the delegate indicates that it can handle the form of authentication, which it does in the subsequent call to [download(\_:didReceive:)](download%28__didreceive_%29-1pc0v.md). Not implementing this method is the same as returning [false](https://developer.apple.com/documentation/swift/false), in which case default authentication handling is used.

## See Also

### Download Authentication

- [download(\_:didCancel:)](download%28__didcancel_%29.md): Sent if an authentication challenge is canceled due to the protocol implementation encountering an error.
- [download(\_:didReceive:)](download%28__didreceive_%29-1pc0v.md): Sent when the URL download must authenticate a challenge in order to download the request.
- [downloadShouldUseCredentialStorage(\_:)](downloadshouldusecredentialstorage%28__%29.md): Sent to determine whether the URL loader should consult the credential storage to authenticate the download.

# download:canAuthenticateAgainstProtectionSpace: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Sent to determine whether the delegate is able to respond to a protection space’s form of authentication.

## Declaration

```objectivec
- (BOOL) download:(NSURLDownload *) connection canAuthenticateAgainstProtectionSpace:(NSURLProtectionSpace *) protectionSpace;
```

## Parameters

- `connection`: The download sending the message.
- `protectionSpace`: The protection space that generates an authentication challenge.

<a id="Discussion"></a>

## Discussion

This method is called before [download:didReceiveAuthenticationChallenge:](download%28__didreceive_%29-1pc0v.md), allowing the delegate to inspect a protection space before attempting to authenticate against it. By returning [true](https://developer.apple.com/documentation/swift/true), the delegate indicates that it can handle the form of authentication, which it does in the subsequent call to [download:didReceiveAuthenticationChallenge:](download%28__didreceive_%29-1pc0v.md). Not implementing this method is the same as returning [false](https://developer.apple.com/documentation/swift/false), in which case default authentication handling is used.

## See Also

### Download Authentication

- [download:didCancelAuthenticationChallenge:](download%28__didcancel_%29.md): Sent if an authentication challenge is canceled due to the protocol implementation encountering an error.
- [download:didReceiveAuthenticationChallenge:](download%28__didreceive_%29-1pc0v.md): Sent when the URL download must authenticate a challenge in order to download the request.
- [downloadShouldUseCredentialStorage:](downloadshouldusecredentialstorage%28__%29.md): Sent to determine whether the URL loader should consult the credential storage to authenticate the download.
