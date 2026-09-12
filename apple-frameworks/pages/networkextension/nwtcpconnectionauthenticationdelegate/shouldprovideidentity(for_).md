> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwtcpconnectionauthenticationdelegate/shouldprovideidentity(for:)](https://developer.apple.com/documentation/networkextension/nwtcpconnectionauthenticationdelegate/shouldprovideidentity(for:))

# shouldProvideIdentity(for:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Indicate that the delegate can provide an identity for the connection authentication.

> Use the [sec_protocol_options_set_challenge_block(\_:\_:\_:)](../../security/sec_protocol_options_set_challenge_block%28______%29.md) function from the [Security](../../security.md) framework instead.

## Declaration

```swift
optional func shouldProvideIdentity(for connection: NWTCPConnection) -> Bool
```

## Parameters

- `connection`: The connection sending this message.

<a id="return-value"></a>

## Return Value

Return [true](https://developer.apple.com/documentation/swift/true) to provide the identity for this connection, in which case the delegate method [provideIdentity(for:completionHandler:)](provideidentity%28for_completionhandler_%29.md) will be called.

<a id="Discussion"></a>

## Discussion

The caller can implement this optional protocol method to decide whether it wants to provide the identity for this connection for authentication. If this delegate method is not implemented, the return value will default to YES if [provideIdentity(for:completionHandler:)](provideidentity%28for_completionhandler_%29.md) is implemented.

## See Also

### Delegate methods

- [shouldEvaluateTrust(for:)](shouldevaluatetrust%28for_%29.md): Deprecated. Indicate that the delegate should override the default trust evaluation for the connection.
- [evaluateTrust(for:peerCertificateChain:completionHandler:)](evaluatetrust%28for_peercertificatechain_completionhandler_%29.md): Deprecated. Override the default trust evaluation for the connection.
- [provideIdentity(for:completionHandler:)](provideidentity%28for_completionhandler_%29.md): Deprecated. Provide the identity and an optional certificate chain to be used for authentication.

# shouldProvideIdentityForConnection: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Indicate that the delegate can provide an identity for the connection authentication.

> Use the [sec_protocol_options_set_challenge_block](../../security/sec_protocol_options_set_challenge_block%28______%29.md) function from the [Security](../../security.md) framework instead.

## Declaration

```objectivec
- (BOOL) shouldProvideIdentityForConnection:(NWTCPConnection *) connection;
```

## Parameters

- `connection`: The connection sending this message.

<a id="return-value"></a>

## Return Value

Return [true](https://developer.apple.com/documentation/swift/true) to provide the identity for this connection, in which case the delegate method [provideIdentityForConnection:completionHandler:](provideidentity%28for_completionhandler_%29.md) will be called.

<a id="Discussion"></a>

## Discussion

The caller can implement this optional protocol method to decide whether it wants to provide the identity for this connection for authentication. If this delegate method is not implemented, the return value will default to YES if [provideIdentityForConnection:completionHandler:](provideidentity%28for_completionhandler_%29.md) is implemented.

## See Also

### Delegate methods

- [shouldEvaluateTrustForConnection:](shouldevaluatetrust%28for_%29.md): Deprecated. Indicate that the delegate should override the default trust evaluation for the connection.
- [evaluateTrustForConnection:peerCertificateChain:completionHandler:](evaluatetrust%28for_peercertificatechain_completionhandler_%29.md): Deprecated. Override the default trust evaluation for the connection.
- [provideIdentityForConnection:completionHandler:](provideidentity%28for_completionhandler_%29.md): Deprecated. Provide the identity and an optional certificate chain to be used for authentication.
