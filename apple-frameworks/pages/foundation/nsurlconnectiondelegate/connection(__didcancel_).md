> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlconnectiondelegate/connection(_:didcancel:)](https://developer.apple.com/documentation/foundation/nsurlconnectiondelegate/connection(_:didcancel:))

# connection(\_:didCancel:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Sent when a connection cancels an authentication challenge.

> Use -connection:willSendRequestForAuthenticationChallenge: instead.

## Declaration

```swift
optional func connection(_ connection: NSURLConnection, didCancel challenge: URLAuthenticationChallenge)
```

## Parameters

- `connection`: The connection sending the message.
- `challenge`: The challenge that was canceled.

## See Also

### Connection Authentication

- [connection(\_:willSendRequestFor:)](connection%28__willsendrequestfor_%29.md): Tells the delegate that the connection will send a request for an authentication challenge.
- [connection(\_:canAuthenticateAgainstProtectionSpace:)](connection%28__canauthenticateagainstprotectionspace_%29.md): Deprecated. Sent to determine whether the delegate is able to respond to a protection space’s form of authentication.
- [connection(\_:didReceive:)](connection%28__didreceive_%29.md): Deprecated. Sent when a connection must authenticate a challenge in order to download its request.
- [connectionShouldUseCredentialStorage(\_:)](connectionshouldusecredentialstorage%28__%29.md): Sent to determine whether the URL loader should use the credential storage for authenticating the connection.

# connection:didCancelAuthenticationChallenge: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Sent when a connection cancels an authentication challenge.

> Use -connection:willSendRequestForAuthenticationChallenge: instead.

## Declaration

```objectivec
- (void) connection:(NSURLConnection *) connection didCancelAuthenticationChallenge:(NSURLAuthenticationChallenge *) challenge;
```

## Parameters

- `connection`: The connection sending the message.
- `challenge`: The challenge that was canceled.

## See Also

### Connection Authentication

- [connection:willSendRequestForAuthenticationChallenge:](connection%28__willsendrequestfor_%29.md): Tells the delegate that the connection will send a request for an authentication challenge.
- [connection:canAuthenticateAgainstProtectionSpace:](connection%28__canauthenticateagainstprotectionspace_%29.md): Deprecated. Sent to determine whether the delegate is able to respond to a protection space’s form of authentication.
- [connection:didReceiveAuthenticationChallenge:](connection%28__didreceive_%29.md): Deprecated. Sent when a connection must authenticate a challenge in order to download its request.
- [connectionShouldUseCredentialStorage:](connectionshouldusecredentialstorage%28__%29.md): Sent to determine whether the URL loader should use the credential storage for authenticating the connection.
