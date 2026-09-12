> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwtcpconnectionauthenticationdelegate/provideidentity(for:completionhandler:)](https://developer.apple.com/documentation/networkextension/nwtcpconnectionauthenticationdelegate/provideidentity(for:completionhandler:))

# provideIdentity(for:completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Provide the identity and an optional certificate chain to be used for authentication.

> Use the [sec_protocol_options_set_challenge_block(\_:\_:\_:)](../../security/sec_protocol_options_set_challenge_block%28______%29.md) function from the [Security](../../security.md) framework instead.

## Declaration

```swift
optional func provideIdentity(for connection: NWTCPConnection, completionHandler completion: @escaping (SecIdentity, [Any]) -> Void)
```

## Parameters

- `connection`: The connection sending this message
- `completion`: The completion handler for passing an identity and certificate chain to the connection. The `identity` is required and must not be `nil`. The `certificateChain` argument is optional, and is an array of one or more [SecCertificate](../../security/seccertificate.md) objects. The certificate chain must contain objects of type `SecCertificateRef` only. If the certificate chain is set, it will be used. Otherwise, the leaf certificate will be extracted from the [SecIdentity](../../security/secidentity.md) object and will be used for authentication.

  The caller is responsible for keeping the argument object(s) valid for the duration of the completion handler invocation.

<a id="Discussion"></a>

## Discussion

Optional. If this method is not implemented, the default certificate evaluation will be used.

## See Also

### Delegate methods

- [shouldEvaluateTrust(for:)](shouldevaluatetrust%28for_%29.md): Deprecated. Indicate that the delegate should override the default trust evaluation for the connection.
- [evaluateTrust(for:peerCertificateChain:completionHandler:)](evaluatetrust%28for_peercertificatechain_completionhandler_%29.md): Deprecated. Override the default trust evaluation for the connection.
- [shouldProvideIdentity(for:)](shouldprovideidentity%28for_%29.md): Deprecated. Indicate that the delegate can provide an identity for the connection authentication.

# provideIdentityForConnection:completionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Provide the identity and an optional certificate chain to be used for authentication.

> Use the [sec_protocol_options_set_challenge_block](../../security/sec_protocol_options_set_challenge_block%28______%29.md) function from the [Security](../../security.md) framework instead.

## Declaration

```objectivec
- (void) provideIdentityForConnection:(NWTCPConnection *) connection completionHandler:(void (^)(SecIdentityRef identity, NSArray<id> *certificateChain)) completion;
```

## Parameters

- `connection`: The connection sending this message
- `completion`: The completion handler for passing an identity and certificate chain to the connection. The `identity` is required and must not be `nil`. The `certificateChain` argument is optional, and is an array of one or more [SecCertificateRef](../../security/seccertificate.md) objects. The certificate chain must contain objects of type `SecCertificateRef` only. If the certificate chain is set, it will be used. Otherwise, the leaf certificate will be extracted from the [SecIdentityRef](../../security/secidentity.md) object and will be used for authentication.

  The caller is responsible for keeping the argument object(s) valid for the duration of the completion handler invocation.

<a id="Discussion"></a>

## Discussion

Optional. If this method is not implemented, the default certificate evaluation will be used.

## See Also

### Delegate methods

- [shouldEvaluateTrustForConnection:](shouldevaluatetrust%28for_%29.md): Deprecated. Indicate that the delegate should override the default trust evaluation for the connection.
- [evaluateTrustForConnection:peerCertificateChain:completionHandler:](evaluatetrust%28for_peercertificatechain_completionhandler_%29.md): Deprecated. Override the default trust evaluation for the connection.
- [shouldProvideIdentityForConnection:](shouldprovideidentity%28for_%29.md): Deprecated. Indicate that the delegate can provide an identity for the connection authentication.
