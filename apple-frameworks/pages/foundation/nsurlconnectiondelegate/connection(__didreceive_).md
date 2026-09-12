> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlconnectiondelegate/connection(_:didreceive:)](https://developer.apple.com/documentation/foundation/nsurlconnectiondelegate/connection(_:didreceive:))

# connection(\_:didReceive:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Sent when a connection must authenticate a challenge in order to download its request.

> Use -connection:willSendRequestForAuthenticationChallenge: instead.

## Declaration

```swift
optional func connection(_ connection: NSURLConnection, didReceive challenge: URLAuthenticationChallenge)
```

## Parameters

- `connection`: The connection sending the message.
- `challenge`: The challenge that `connection` must authenticate in order to download its request.

<a id="Discussion"></a>

## Discussion

This method gives the delegate the opportunity to determine the course of action taken for the challenge: provide credentials, continue without providing credentials, or cancel the authentication challenge and the download.

> **Note**

>  This method is not called if the delegate implements the [connection(\_:willSendRequestFor:)](connection%28__willsendrequestfor_%29.md) method.

The delegate can determine the number of previous authentication challenges by sending the message [previousFailureCount](../urlauthenticationchallenge/previousfailurecount.md) to `challenge`.

If the previous failure count is 0 and the value returned by [proposedCredential](../urlauthenticationchallenge/proposedcredential.md) is `nil`, the delegate can create a new NSURLCredential object, providing information specific to the type of credential, and send a [use(\_:for:)](../urlauthenticationchallengesender/use%28__for_%29.md) message to `[challenge sender]`, passing the credential and `challenge` as parameters. If [proposedCredential](../urlauthenticationchallenge/proposedcredential.md) is not `nil`, the value is a credential from the URL or the shared credential storage that can be provided to the user as feedback.

The delegate may decide to abandon further attempts at authentication at any time by sending `[challenge sender]` a [continueWithoutCredential(for:)](../urlauthenticationchallengesender/continuewithoutcredential%28for_%29.md) or a [cancel(\_:)](../urlauthenticationchallengesender/cancel%28__%29.md) message. The specific action is implementation dependent.

If the delegate implements this method, the download will suspend until `[challenge sender]` is sent one of the following messages: [use(\_:for:)](../urlauthenticationchallengesender/use%28__for_%29.md), [continueWithoutCredential(for:)](../urlauthenticationchallengesender/continuewithoutcredential%28for_%29.md) or [cancel(\_:)](../urlauthenticationchallengesender/cancel%28__%29.md).

If the delegate does not implement this method the default implementation is used. If a valid credential for the request is provided as part of the URL, or is available from the NSURLCredentialStorage the `[challenge sender]` is sent a [use(\_:for:)](../urlauthenticationchallengesender/use%28__for_%29.md) with the credential. If the challenge has no credential or the credentials fail to authorize access, then [continueWithoutCredential(for:)](../urlauthenticationchallengesender/continuewithoutcredential%28for_%29.md) is sent to `[challenge sender]` instead.

## See Also

### Related Documentation

- [use(\_:for:)](../urlauthenticationchallengesender/use%28__for_%29.md): Attempt to use a given credential for a given authentication challenge.
- [continueWithoutCredential(for:)](../urlauthenticationchallengesender/continuewithoutcredential%28for_%29.md): Attempt to continue downloading a request without providing a credential for a given challenge.
- [cancel(\_:)](../urlauthenticationchallengesender/cancel%28__%29.md): Cancels a given authentication challenge.

### Connection Authentication

- [connection(\_:willSendRequestFor:)](connection%28__willsendrequestfor_%29.md): Tells the delegate that the connection will send a request for an authentication challenge.
- [connection(\_:canAuthenticateAgainstProtectionSpace:)](connection%28__canauthenticateagainstprotectionspace_%29.md): Deprecated. Sent to determine whether the delegate is able to respond to a protection space’s form of authentication.
- [connection(\_:didCancel:)](connection%28__didcancel_%29.md): Deprecated. Sent when a connection cancels an authentication challenge.
- [connectionShouldUseCredentialStorage(\_:)](connectionshouldusecredentialstorage%28__%29.md): Sent to determine whether the URL loader should use the credential storage for authenticating the connection.

# connection:didReceiveAuthenticationChallenge: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Sent when a connection must authenticate a challenge in order to download its request.

> Use -connection:willSendRequestForAuthenticationChallenge: instead.

## Declaration

```objectivec
- (void) connection:(NSURLConnection *) connection didReceiveAuthenticationChallenge:(NSURLAuthenticationChallenge *) challenge;
```

## Parameters

- `connection`: The connection sending the message.
- `challenge`: The challenge that `connection` must authenticate in order to download its request.

<a id="Discussion"></a>

## Discussion

This method gives the delegate the opportunity to determine the course of action taken for the challenge: provide credentials, continue without providing credentials, or cancel the authentication challenge and the download.

> **Note**

>  This method is not called if the delegate implements the [connection:willSendRequestForAuthenticationChallenge:](connection%28__willsendrequestfor_%29.md) method.

The delegate can determine the number of previous authentication challenges by sending the message [previousFailureCount](../urlauthenticationchallenge/previousfailurecount.md) to `challenge`.

If the previous failure count is 0 and the value returned by [proposedCredential](../urlauthenticationchallenge/proposedcredential.md) is `nil`, the delegate can create a new NSURLCredential object, providing information specific to the type of credential, and send a [useCredential:forAuthenticationChallenge:](../urlauthenticationchallengesender/use%28__for_%29.md) message to `[challenge sender]`, passing the credential and `challenge` as parameters. If [proposedCredential](../urlauthenticationchallenge/proposedcredential.md) is not `nil`, the value is a credential from the URL or the shared credential storage that can be provided to the user as feedback.

The delegate may decide to abandon further attempts at authentication at any time by sending `[challenge sender]` a [continueWithoutCredentialForAuthenticationChallenge:](../urlauthenticationchallengesender/continuewithoutcredential%28for_%29.md) or a [cancelAuthenticationChallenge:](../urlauthenticationchallengesender/cancel%28__%29.md) message. The specific action is implementation dependent.

If the delegate implements this method, the download will suspend until `[challenge sender]` is sent one of the following messages: [useCredential:forAuthenticationChallenge:](../urlauthenticationchallengesender/use%28__for_%29.md), [continueWithoutCredentialForAuthenticationChallenge:](../urlauthenticationchallengesender/continuewithoutcredential%28for_%29.md) or [cancelAuthenticationChallenge:](../urlauthenticationchallengesender/cancel%28__%29.md).

If the delegate does not implement this method the default implementation is used. If a valid credential for the request is provided as part of the URL, or is available from the NSURLCredentialStorage the `[challenge sender]` is sent a [useCredential:forAuthenticationChallenge:](../urlauthenticationchallengesender/use%28__for_%29.md) with the credential. If the challenge has no credential or the credentials fail to authorize access, then [continueWithoutCredentialForAuthenticationChallenge:](../urlauthenticationchallengesender/continuewithoutcredential%28for_%29.md) is sent to `[challenge sender]` instead.

## See Also

### Related Documentation

- [useCredential:forAuthenticationChallenge:](../urlauthenticationchallengesender/use%28__for_%29.md): Attempt to use a given credential for a given authentication challenge.
- [continueWithoutCredentialForAuthenticationChallenge:](../urlauthenticationchallengesender/continuewithoutcredential%28for_%29.md): Attempt to continue downloading a request without providing a credential for a given challenge.
- [cancelAuthenticationChallenge:](../urlauthenticationchallengesender/cancel%28__%29.md): Cancels a given authentication challenge.

### Connection Authentication

- [connection:willSendRequestForAuthenticationChallenge:](connection%28__willsendrequestfor_%29.md): Tells the delegate that the connection will send a request for an authentication challenge.
- [connection:canAuthenticateAgainstProtectionSpace:](connection%28__canauthenticateagainstprotectionspace_%29.md): Deprecated. Sent to determine whether the delegate is able to respond to a protection space’s form of authentication.
- [connection:didCancelAuthenticationChallenge:](connection%28__didcancel_%29.md): Deprecated. Sent when a connection cancels an authentication challenge.
- [connectionShouldUseCredentialStorage:](connectionshouldusecredentialstorage%28__%29.md): Sent to determine whether the URL loader should use the credential storage for authenticating the connection.
