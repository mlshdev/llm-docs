> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwtcpconnectionauthenticationdelegate/evaluatetrust(for:peercertificatechain:completionhandler:)](https://developer.apple.com/documentation/networkextension/nwtcpconnectionauthenticationdelegate/evaluatetrust(for:peercertificatechain:completionhandler:))

# evaluateTrust(for:peerCertificateChain:completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Override the default trust evaluation for the connection.

> Use the [sec_protocol_options_set_verify_block(\_:\_:\_:)](../../security/sec_protocol_options_set_verify_block%28______%29.md) function from the [Security](../../security.md) framework instead.

## Declaration

```swift
optional func evaluateTrust(for connection: NWTCPConnection, peerCertificateChain: [Any], completionHandler completion: @escaping (SecTrust) -> Void)
```

## Parameters

- `connection`: The connection sending this message
- `peerCertificateChain`: The connection peer’s certificate chain
- `completion`: The completion handler for passing the [SecTrust](../../security/sectrust.md) object to the connection. The `SecTrustRef` object `trust` is required and must not be `nil`. It will be evaluated using [SecTrustEvaluate(\_:\_:)](../../security/sectrustevaluate%28____%29.md) if necessary.

  The caller is responsible for keeping the argument object valid for the duration of the completion handler invocation.

<a id="Discussion"></a>

## Discussion

The caller can implement this optional protocol method to set up custom policies for peer certificate trust evaluation. If the delegate method is implemented, the caller is responsible for creating and setting up the [SecTrust](../../security/sectrust.md) object and passing it to the completion handler. Otherwise, the default trust evaluation policy is used for the connection.

## See Also

### Delegate methods

- [shouldEvaluateTrust(for:)](shouldevaluatetrust%28for_%29.md): Deprecated. Indicate that the delegate should override the default trust evaluation for the connection.
- [shouldProvideIdentity(for:)](shouldprovideidentity%28for_%29.md): Deprecated. Indicate that the delegate can provide an identity for the connection authentication.
- [provideIdentity(for:completionHandler:)](provideidentity%28for_completionhandler_%29.md): Deprecated. Provide the identity and an optional certificate chain to be used for authentication.

# evaluateTrustForConnection:peerCertificateChain:completionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Override the default trust evaluation for the connection.

> Use the [sec_protocol_options_set_verify_block](../../security/sec_protocol_options_set_verify_block%28______%29.md) function from the [Security](../../security.md) framework instead.

## Declaration

```objectivec
- (void) evaluateTrustForConnection:(NWTCPConnection *) connection peerCertificateChain:(NSArray<id> *) peerCertificateChain completionHandler:(void (^)(SecTrustRef trust)) completion;
```

## Parameters

- `connection`: The connection sending this message
- `peerCertificateChain`: The connection peer’s certificate chain
- `completion`: The completion handler for passing the [SecTrustRef](../../security/sectrust.md) object to the connection. The `SecTrustRef` object `trust` is required and must not be `nil`. It will be evaluated using [SecTrustEvaluate](../../security/sectrustevaluate%28____%29.md) if necessary.

  The caller is responsible for keeping the argument object valid for the duration of the completion handler invocation.

<a id="Discussion"></a>

## Discussion

The caller can implement this optional protocol method to set up custom policies for peer certificate trust evaluation. If the delegate method is implemented, the caller is responsible for creating and setting up the [SecTrustRef](../../security/sectrust.md) object and passing it to the completion handler. Otherwise, the default trust evaluation policy is used for the connection.

## See Also

### Delegate methods

- [shouldEvaluateTrustForConnection:](shouldevaluatetrust%28for_%29.md): Deprecated. Indicate that the delegate should override the default trust evaluation for the connection.
- [shouldProvideIdentityForConnection:](shouldprovideidentity%28for_%29.md): Deprecated. Indicate that the delegate can provide an identity for the connection authentication.
- [provideIdentityForConnection:completionHandler:](provideidentity%28for_completionhandler_%29.md): Deprecated. Provide the identity and an optional certificate chain to be used for authentication.
