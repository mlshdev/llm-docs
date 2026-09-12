> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlconnectiondelegate/connectionshouldusecredentialstorage(_:)](https://developer.apple.com/documentation/foundation/nsurlconnectiondelegate/connectionshouldusecredentialstorage(_:))

# connectionShouldUseCredentialStorage(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sent to determine whether the URL loader should use the credential storage for authenticating the connection.

## Declaration

```swift
optional func connectionShouldUseCredentialStorage(_ connection: NSURLConnection) -> Bool
```

## Parameters

- `connection`: The connection sending the message.

<a id="Discussion"></a>

## Discussion

This method is called before any attempt to authenticate is made.

If you return [false](https://developer.apple.com/documentation/swift/false), the connection does not consult the credential storage automatically, and does not store credentials. However, in your connection:didReceiveAuthenticationChallenge: method, you can consult the credential storage yourself and store credentials yourself, as needed.

Not implementing this method is the same as returning [true](https://developer.apple.com/documentation/swift/true).

> **Important**

>  Prior to iOS 7 and OS X v10.9, the `connectionShouldUseCredentialStorage:` method is never called on delegates that implement the [connection(\_:willSendRequestFor:)](connection%28__willsendrequestfor_%29.md) method.
>
> In later operating systems, if the delegate implements the [connection(\_:willSendRequestFor:)](connection%28__willsendrequestfor_%29.md) method, the `connectionShouldUseCredentialStorage:` method is called *only* if the app’s deployment target is at least iOS 7 or OS X v10.9.

## See Also

### Connection Authentication

- [connection(\_:willSendRequestFor:)](connection%28__willsendrequestfor_%29.md): Tells the delegate that the connection will send a request for an authentication challenge.
- [connection(\_:canAuthenticateAgainstProtectionSpace:)](connection%28__canauthenticateagainstprotectionspace_%29.md): Deprecated. Sent to determine whether the delegate is able to respond to a protection space’s form of authentication.
- [connection(\_:didCancel:)](connection%28__didcancel_%29.md): Deprecated. Sent when a connection cancels an authentication challenge.
- [connection(\_:didReceive:)](connection%28__didreceive_%29.md): Deprecated. Sent when a connection must authenticate a challenge in order to download its request.

# connectionShouldUseCredentialStorage: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sent to determine whether the URL loader should use the credential storage for authenticating the connection.

## Declaration

```objectivec
- (BOOL) connectionShouldUseCredentialStorage:(NSURLConnection *) connection;
```

## Parameters

- `connection`: The connection sending the message.

<a id="Discussion"></a>

## Discussion

This method is called before any attempt to authenticate is made.

If you return [false](https://developer.apple.com/documentation/swift/false), the connection does not consult the credential storage automatically, and does not store credentials. However, in your connection:didReceiveAuthenticationChallenge: method, you can consult the credential storage yourself and store credentials yourself, as needed.

Not implementing this method is the same as returning [true](https://developer.apple.com/documentation/swift/true).

> **Important**

>  Prior to iOS 7 and OS X v10.9, the `connectionShouldUseCredentialStorage:` method is never called on delegates that implement the [connection:willSendRequestForAuthenticationChallenge:](connection%28__willsendrequestfor_%29.md) method.
>
> In later operating systems, if the delegate implements the [connection:willSendRequestForAuthenticationChallenge:](connection%28__willsendrequestfor_%29.md) method, the `connectionShouldUseCredentialStorage:` method is called *only* if the app’s deployment target is at least iOS 7 or OS X v10.9.

## See Also

### Connection Authentication

- [connection:willSendRequestForAuthenticationChallenge:](connection%28__willsendrequestfor_%29.md): Tells the delegate that the connection will send a request for an authentication challenge.
- [connection:canAuthenticateAgainstProtectionSpace:](connection%28__canauthenticateagainstprotectionspace_%29.md): Deprecated. Sent to determine whether the delegate is able to respond to a protection space’s form of authentication.
- [connection:didCancelAuthenticationChallenge:](connection%28__didcancel_%29.md): Deprecated. Sent when a connection cancels an authentication challenge.
- [connection:didReceiveAuthenticationChallenge:](connection%28__didreceive_%29.md): Deprecated. Sent when a connection must authenticate a challenge in order to download its request.
