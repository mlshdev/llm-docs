> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlconnectiondelegate/connection(_:willsendrequestfor:)](https://developer.apple.com/documentation/foundation/nsurlconnectiondelegate/connection(_:willsendrequestfor:))

# connection(\_:willSendRequestFor:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the connection will send a request for an authentication challenge.

## Declaration

```swift
optional func connection(_ connection: NSURLConnection, willSendRequestFor challenge: URLAuthenticationChallenge)
```

## Parameters

- `connection`: The connection sending the message.
- `challenge`: The authentication challenge for which a request is being sent.

<a id="Discussion"></a>

## Discussion

This method allows the delegate to make an informed decision about connection authentication at once. If the delegate implements this method, it has no need to implement [connection(\_:canAuthenticateAgainstProtectionSpace:)](connection%28__canauthenticateagainstprotectionspace_%29.md) or [connection(\_:didReceive:)](connection%28__didreceive_%29.md). In fact, those other methods are not invoked (except on older operating systems, where applicable).

In this method,you *must* invoke one of the challenge-responder methods ([URLAuthenticationChallengeSender](../urlauthenticationchallengesender.md) protocol):

- [use(\_:for:)](../urlauthenticationchallengesender/use%28__for_%29.md)
- [continueWithoutCredential(for:)](../urlauthenticationchallengesender/continuewithoutcredential%28for_%29.md)
- [cancel(\_:)](../urlauthenticationchallengesender/cancel%28__%29.md)
- [performDefaultHandling(for:)](../urlauthenticationchallengesender/performdefaulthandling%28for_%29.md)
- [rejectProtectionSpaceAndContinue(with:)](../urlauthenticationchallengesender/rejectprotectionspaceandcontinue%28with_%29.md)

> **Important**

>  Your delegate method is called on the thread where the connection is scheduled. Always call the methods above on that same thread.

You might also want to analyze `challenge` for the authentication scheme and the proposed credential before calling a [URLAuthenticationChallengeSender](../urlauthenticationchallengesender.md) method. You should never assume that a proposed credential is present. You can either create your own credential and respond with that, or you can send the proposed credential back. (Because this object is immutable, if you want to change it you must copy it and then modify the copy.)

## See Also

### Related Documentation

- [URL Loading System](../url-loading-system.md): Interact with URLs and communicate with servers using standard Internet protocols.

### Connection Authentication

- [connection(\_:canAuthenticateAgainstProtectionSpace:)](connection%28__canauthenticateagainstprotectionspace_%29.md): Deprecated. Sent to determine whether the delegate is able to respond to a protection space’s form of authentication.
- [connection(\_:didCancel:)](connection%28__didcancel_%29.md): Deprecated. Sent when a connection cancels an authentication challenge.
- [connection(\_:didReceive:)](connection%28__didreceive_%29.md): Deprecated. Sent when a connection must authenticate a challenge in order to download its request.
- [connectionShouldUseCredentialStorage(\_:)](connectionshouldusecredentialstorage%28__%29.md): Sent to determine whether the URL loader should use the credential storage for authenticating the connection.

# connection:willSendRequestForAuthenticationChallenge: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the connection will send a request for an authentication challenge.

## Declaration

```objectivec
- (void) connection:(NSURLConnection *) connection willSendRequestForAuthenticationChallenge:(NSURLAuthenticationChallenge *) challenge;
```

## Parameters

- `connection`: The connection sending the message.
- `challenge`: The authentication challenge for which a request is being sent.

<a id="Discussion"></a>

## Discussion

This method allows the delegate to make an informed decision about connection authentication at once. If the delegate implements this method, it has no need to implement [connection:canAuthenticateAgainstProtectionSpace:](connection%28__canauthenticateagainstprotectionspace_%29.md) or [connection:didReceiveAuthenticationChallenge:](connection%28__didreceive_%29.md). In fact, those other methods are not invoked (except on older operating systems, where applicable).

In this method,you *must* invoke one of the challenge-responder methods ([NSURLAuthenticationChallengeSender](../urlauthenticationchallengesender.md) protocol):

- [useCredential:forAuthenticationChallenge:](../urlauthenticationchallengesender/use%28__for_%29.md)
- [continueWithoutCredentialForAuthenticationChallenge:](../urlauthenticationchallengesender/continuewithoutcredential%28for_%29.md)
- [cancelAuthenticationChallenge:](../urlauthenticationchallengesender/cancel%28__%29.md)
- [performDefaultHandlingForAuthenticationChallenge:](../urlauthenticationchallengesender/performdefaulthandling%28for_%29.md)
- [rejectProtectionSpaceAndContinueWithChallenge:](../urlauthenticationchallengesender/rejectprotectionspaceandcontinue%28with_%29.md)

> **Important**

>  Your delegate method is called on the thread where the connection is scheduled. Always call the methods above on that same thread.

You might also want to analyze `challenge` for the authentication scheme and the proposed credential before calling a [NSURLAuthenticationChallengeSender](../urlauthenticationchallengesender.md) method. You should never assume that a proposed credential is present. You can either create your own credential and respond with that, or you can send the proposed credential back. (Because this object is immutable, if you want to change it you must copy it and then modify the copy.)

## See Also

### Related Documentation

- [URL Loading System](../url-loading-system.md): Interact with URLs and communicate with servers using standard Internet protocols.

### Connection Authentication

- [connection:canAuthenticateAgainstProtectionSpace:](connection%28__canauthenticateagainstprotectionspace_%29.md): Deprecated. Sent to determine whether the delegate is able to respond to a protection space’s form of authentication.
- [connection:didCancelAuthenticationChallenge:](connection%28__didcancel_%29.md): Deprecated. Sent when a connection cancels an authentication challenge.
- [connection:didReceiveAuthenticationChallenge:](connection%28__didreceive_%29.md): Deprecated. Sent when a connection must authenticate a challenge in order to download its request.
- [connectionShouldUseCredentialStorage:](connectionshouldusecredentialstorage%28__%29.md): Sent to determine whether the URL loader should use the credential storage for authenticating the connection.
