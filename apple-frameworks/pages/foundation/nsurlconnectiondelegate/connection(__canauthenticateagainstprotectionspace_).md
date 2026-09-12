> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlconnectiondelegate/connection(_:canauthenticateagainstprotectionspace:)](https://developer.apple.com/documentation/foundation/nsurlconnectiondelegate/connection(_:canauthenticateagainstprotectionspace:))

# connection(\_:canAuthenticateAgainstProtectionSpace:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.6+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Sent to determine whether the delegate is able to respond to a protection space’s form of authentication.

> Use -connection:willSendRequestForAuthenticationChallenge: instead.

## Declaration

```swift
optional func connection(_ connection: NSURLConnection, canAuthenticateAgainstProtectionSpace protectionSpace: URLProtectionSpace) -> Bool
```

## Parameters

- `connection`: The connection sending the message.
- `protectionSpace`: The protection space that generates an authentication challenge.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the delegate if able to respond to a protection space’s form of authentication, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method is called before [connection(\_:didReceive:)](connection%28__didreceive_%29.md), allowing the delegate to inspect a protection space before attempting to authenticate against it. By returning [true](https://developer.apple.com/documentation/swift/true), the delegate indicates that it can handle the form of authentication, which it does in the subsequent call to [connection(\_:didReceive:)](connection%28__didreceive_%29.md). If the delegate returns [false](https://developer.apple.com/documentation/swift/false), the system attempts to use the user’s keychain to authenticate. If your delegate does not implement this method and the protection space uses client certificate authentication or server trust authentication, the system behaves as if you returned [false](https://developer.apple.com/documentation/swift/false). The system behaves as if you returned [true](https://developer.apple.com/documentation/swift/true) for all other authentication methods.

> **Note**

>  This method is not called if the delegate implements the [connection(\_:willSendRequestFor:)](connection%28__willsendrequestfor_%29.md) method.

## See Also

### Connection Authentication

- [connection(\_:willSendRequestFor:)](connection%28__willsendrequestfor_%29.md): Tells the delegate that the connection will send a request for an authentication challenge.
- [connection(\_:didCancel:)](connection%28__didcancel_%29.md): Deprecated. Sent when a connection cancels an authentication challenge.
- [connection(\_:didReceive:)](connection%28__didreceive_%29.md): Deprecated. Sent when a connection must authenticate a challenge in order to download its request.
- [connectionShouldUseCredentialStorage(\_:)](connectionshouldusecredentialstorage%28__%29.md): Sent to determine whether the URL loader should use the credential storage for authenticating the connection.

# connection:canAuthenticateAgainstProtectionSpace: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.6+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Sent to determine whether the delegate is able to respond to a protection space’s form of authentication.

> Use -connection:willSendRequestForAuthenticationChallenge: instead.

## Declaration

```objectivec
- (BOOL) connection:(NSURLConnection *) connection canAuthenticateAgainstProtectionSpace:(NSURLProtectionSpace *) protectionSpace;
```

## Parameters

- `connection`: The connection sending the message.
- `protectionSpace`: The protection space that generates an authentication challenge.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the delegate if able to respond to a protection space’s form of authentication, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method is called before [connection:didReceiveAuthenticationChallenge:](connection%28__didreceive_%29.md), allowing the delegate to inspect a protection space before attempting to authenticate against it. By returning [true](https://developer.apple.com/documentation/swift/true), the delegate indicates that it can handle the form of authentication, which it does in the subsequent call to [connection:didReceiveAuthenticationChallenge:](connection%28__didreceive_%29.md). If the delegate returns [false](https://developer.apple.com/documentation/swift/false), the system attempts to use the user’s keychain to authenticate. If your delegate does not implement this method and the protection space uses client certificate authentication or server trust authentication, the system behaves as if you returned [false](https://developer.apple.com/documentation/swift/false). The system behaves as if you returned [true](https://developer.apple.com/documentation/swift/true) for all other authentication methods.

> **Note**

>  This method is not called if the delegate implements the [connection:willSendRequestForAuthenticationChallenge:](connection%28__willsendrequestfor_%29.md) method.

## See Also

### Connection Authentication

- [connection:willSendRequestForAuthenticationChallenge:](connection%28__willsendrequestfor_%29.md): Tells the delegate that the connection will send a request for an authentication challenge.
- [connection:didCancelAuthenticationChallenge:](connection%28__didcancel_%29.md): Deprecated. Sent when a connection cancels an authentication challenge.
- [connection:didReceiveAuthenticationChallenge:](connection%28__didreceive_%29.md): Deprecated. Sent when a connection must authenticate a challenge in order to download its request.
- [connectionShouldUseCredentialStorage:](connectionshouldusecredentialstorage%28__%29.md): Sent to determine whether the URL loader should use the credential storage for authenticating the connection.
