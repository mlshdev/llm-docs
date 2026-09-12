> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurldownloaddelegate/download(_:didreceive:)-1pc0v](https://developer.apple.com/documentation/foundation/nsurldownloaddelegate/download(_:didreceive:)-1pc0v)

# download(\_:didReceive:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Sent when the URL download must authenticate a challenge in order to download the request.

## Declaration

```swift
optional func download(_ download: NSURLDownload, didReceive challenge: URLAuthenticationChallenge)
```

## Parameters

- `download`: The URL download object sending the message.
- `challenge`: The URL authentication challenge that must be authenticated in order to download the request.

<a id="Discussion"></a>

## Discussion

This method gives the delegate the opportunity to determine the course of action taken for the challenge: provide credentials, continue without providing credentials or cancel the authentication challenge and the download.

The delegate can determine the number of previous authentication challenges by sending the message [previousFailureCount](../urlauthenticationchallenge/previousfailurecount.md) to `challenge`.

If the previous failure count is 0 and the value returned by [proposedCredential](../urlauthenticationchallenge/proposedcredential.md) is `nil`, the delegate can create a new NSURLCredential object, providing information specific to the type of credential, and send a [use(\_:for:)](../urlauthenticationchallengesender/use%28__for_%29.md) message to `[challenge sender]`, passing the credential and `challenge` as parameters. If [proposedCredential](../urlauthenticationchallenge/proposedcredential.md) is not `nil`, the value is a credential from the URL or the shared credential storage that can be provided to the user as feedback.

The delegate may decide to abandon further attempts at authentication at any time by sending `[challenge sender]` a [continueWithoutCredential(for:)](../urlauthenticationchallengesender/continuewithoutcredential%28for_%29.md) or a [cancel(\_:)](../urlauthenticationchallengesender/cancel%28__%29.md) message. The specific action is implementation dependent.

If the delegate implements this method, the download will suspend until `[challenge sender]` is sent one of the following messages: [use(\_:for:)](../urlauthenticationchallengesender/use%28__for_%29.md), [continueWithoutCredential(for:)](../urlauthenticationchallengesender/continuewithoutcredential%28for_%29.md) or [cancel(\_:)](../urlauthenticationchallengesender/cancel%28__%29.md).

If the delegate does not implement this method the default implementation is used. If a valid credential for the request is provided as part of the URL, or is available from the NSURLCredentialStorage the `[challenge sender]` is sent a [use(\_:for:)](../urlauthenticationchallengesender/use%28__for_%29.md) with the credential. If the challenge has no credential or the credentials fail to authorize access, then [continueWithoutCredential(for:)](../urlauthenticationchallengesender/continuewithoutcredential%28for_%29.md) is sent to `[challenge sender]` instead.

## See Also

### Download Authentication

- [download(\_:canAuthenticateAgainstProtectionSpace:)](download%28__canauthenticateagainstprotectionspace_%29.md): Sent to determine whether the delegate is able to respond to a protection space’s form of authentication.
- [download(\_:didCancel:)](download%28__didcancel_%29.md): Sent if an authentication challenge is canceled due to the protocol implementation encountering an error.
- [downloadShouldUseCredentialStorage(\_:)](downloadshouldusecredentialstorage%28__%29.md): Sent to determine whether the URL loader should consult the credential storage to authenticate the download.

# download:didReceiveAuthenticationChallenge: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Sent when the URL download must authenticate a challenge in order to download the request.

## Declaration

```objectivec
- (void) download:(NSURLDownload *) download didReceiveAuthenticationChallenge:(NSURLAuthenticationChallenge *) challenge;
```

## Parameters

- `download`: The URL download object sending the message.
- `challenge`: The URL authentication challenge that must be authenticated in order to download the request.

<a id="Discussion"></a>

## Discussion

This method gives the delegate the opportunity to determine the course of action taken for the challenge: provide credentials, continue without providing credentials or cancel the authentication challenge and the download.

The delegate can determine the number of previous authentication challenges by sending the message [previousFailureCount](../urlauthenticationchallenge/previousfailurecount.md) to `challenge`.

If the previous failure count is 0 and the value returned by [proposedCredential](../urlauthenticationchallenge/proposedcredential.md) is `nil`, the delegate can create a new NSURLCredential object, providing information specific to the type of credential, and send a [useCredential:forAuthenticationChallenge:](../urlauthenticationchallengesender/use%28__for_%29.md) message to `[challenge sender]`, passing the credential and `challenge` as parameters. If [proposedCredential](../urlauthenticationchallenge/proposedcredential.md) is not `nil`, the value is a credential from the URL or the shared credential storage that can be provided to the user as feedback.

The delegate may decide to abandon further attempts at authentication at any time by sending `[challenge sender]` a [continueWithoutCredentialForAuthenticationChallenge:](../urlauthenticationchallengesender/continuewithoutcredential%28for_%29.md) or a [cancelAuthenticationChallenge:](../urlauthenticationchallengesender/cancel%28__%29.md) message. The specific action is implementation dependent.

If the delegate implements this method, the download will suspend until `[challenge sender]` is sent one of the following messages: [useCredential:forAuthenticationChallenge:](../urlauthenticationchallengesender/use%28__for_%29.md), [continueWithoutCredentialForAuthenticationChallenge:](../urlauthenticationchallengesender/continuewithoutcredential%28for_%29.md) or [cancelAuthenticationChallenge:](../urlauthenticationchallengesender/cancel%28__%29.md).

If the delegate does not implement this method the default implementation is used. If a valid credential for the request is provided as part of the URL, or is available from the NSURLCredentialStorage the `[challenge sender]` is sent a [useCredential:forAuthenticationChallenge:](../urlauthenticationchallengesender/use%28__for_%29.md) with the credential. If the challenge has no credential or the credentials fail to authorize access, then [continueWithoutCredentialForAuthenticationChallenge:](../urlauthenticationchallengesender/continuewithoutcredential%28for_%29.md) is sent to `[challenge sender]` instead.

## See Also

### Download Authentication

- [download:canAuthenticateAgainstProtectionSpace:](download%28__canauthenticateagainstprotectionspace_%29.md): Sent to determine whether the delegate is able to respond to a protection space’s form of authentication.
- [download:didCancelAuthenticationChallenge:](download%28__didcancel_%29.md): Sent if an authentication challenge is canceled due to the protocol implementation encountering an error.
- [downloadShouldUseCredentialStorage:](downloadshouldusecredentialstorage%28__%29.md): Sent to determine whether the URL loader should consult the credential storage to authenticate the download.
