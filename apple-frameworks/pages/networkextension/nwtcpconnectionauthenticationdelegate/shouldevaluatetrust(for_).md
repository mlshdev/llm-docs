> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwtcpconnectionauthenticationdelegate/shouldevaluatetrust(for:)](https://developer.apple.com/documentation/networkextension/nwtcpconnectionauthenticationdelegate/shouldevaluatetrust(for:))

# shouldEvaluateTrust(for:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Indicate that the delegate should override the default trust evaluation for the connection.

> Use the [sec_protocol_options_set_verify_block(\_:\_:\_:)](../../security/sec_protocol_options_set_verify_block%28______%29.md) function from the [Security](../../security.md) framework instead.

## Declaration

```swift
optional func shouldEvaluateTrust(for connection: NWTCPConnection) -> Bool
```

## Parameters

- `connection`: The connection sending this message

<a id="return-value"></a>

## Return Value

Return [true](https://developer.apple.com/documentation/swift/true) to take over the default trust evaluation, in which case the delegate method `evaluateTrustForConnection:peerCertificateChain:completionHandler`: will be called.

<a id="Discussion"></a>

## Discussion

The caller can implement this optional protocol method to decide whether it wants to take over the default trust evaluation for this connection. If this delegate method is not implemented, the return value will default to YES if  `provideIdentityForConnection:completionHandler:` is implemented.

## See Also

### Delegate methods

- [evaluateTrust(for:peerCertificateChain:completionHandler:)](evaluatetrust%28for_peercertificatechain_completionhandler_%29.md): Deprecated. Override the default trust evaluation for the connection.
- [shouldProvideIdentity(for:)](shouldprovideidentity%28for_%29.md): Deprecated. Indicate that the delegate can provide an identity for the connection authentication.
- [provideIdentity(for:completionHandler:)](provideidentity%28for_completionhandler_%29.md): Deprecated. Provide the identity and an optional certificate chain to be used for authentication.

# shouldEvaluateTrustForConnection: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Indicate that the delegate should override the default trust evaluation for the connection.

> Use the [sec_protocol_options_set_verify_block](../../security/sec_protocol_options_set_verify_block%28______%29.md) function from the [Security](../../security.md) framework instead.

## Declaration

```objectivec
- (BOOL) shouldEvaluateTrustForConnection:(NWTCPConnection *) connection;
```

## Parameters

- `connection`: The connection sending this message

<a id="return-value"></a>

## Return Value

Return [true](https://developer.apple.com/documentation/swift/true) to take over the default trust evaluation, in which case the delegate method `evaluateTrustForConnection:peerCertificateChain:completionHandler`: will be called.

<a id="Discussion"></a>

## Discussion

The caller can implement this optional protocol method to decide whether it wants to take over the default trust evaluation for this connection. If this delegate method is not implemented, the return value will default to YES if  `provideIdentityForConnection:completionHandler:` is implemented.

## See Also

### Delegate methods

- [evaluateTrustForConnection:peerCertificateChain:completionHandler:](evaluatetrust%28for_peercertificatechain_completionhandler_%29.md): Deprecated. Override the default trust evaluation for the connection.
- [shouldProvideIdentityForConnection:](shouldprovideidentity%28for_%29.md): Deprecated. Indicate that the delegate can provide an identity for the connection authentication.
- [provideIdentityForConnection:completionHandler:](provideidentity%28for_completionhandler_%29.md): Deprecated. Provide the identity and an optional certificate chain to be used for authentication.
