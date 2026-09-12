> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwtcpconnectionauthenticationdelegate](https://developer.apple.com/documentation/networkextension/nwtcpconnectionauthenticationdelegate)

# NWTCPConnectionAuthenticationDelegate (Swift)

**Framework:** Network Extension  
**Kind:** Protocol  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

A delegate protocol to customize the TLS authentication done by a connection.

> Use the [sec_protocol_options_t](../security/sec_protocol_options_t.md) type from the [Security](../security.md) framework instead.

## Declaration

```swift
protocol NWTCPConnectionAuthenticationDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

A delegate is not required for an [NWTCPConnection](nwtcpconnection.md) object.

## Topics

### Delegate methods

- [shouldEvaluateTrust(for:)](nwtcpconnectionauthenticationdelegate/shouldevaluatetrust%28for_%29.md): Deprecated. Indicate that the delegate should override the default trust evaluation for the connection.
- [evaluateTrust(for:peerCertificateChain:completionHandler:)](nwtcpconnectionauthenticationdelegate/evaluatetrust%28for_peercertificatechain_completionhandler_%29.md): Deprecated. Override the default trust evaluation for the connection.
- [shouldProvideIdentity(for:)](nwtcpconnectionauthenticationdelegate/shouldprovideidentity%28for_%29.md): Deprecated. Indicate that the delegate can provide an identity for the connection authentication.
- [provideIdentity(for:completionHandler:)](nwtcpconnectionauthenticationdelegate/provideidentity%28for_completionhandler_%29.md): Deprecated. Provide the identity and an optional certificate chain to be used for authentication.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### TCP connections

- [NWTCPConnection](nwtcpconnection.md): Deprecated. An object to manage a TCP connection, with or without TLS.
- [NWTLSParameters](nwtlsparameters.md): Deprecated. TLS properties for creating a connection.

# NWTCPConnectionAuthenticationDelegate (Objective-C)

**Framework:** Network Extension  
**Kind:** Protocol  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

A delegate protocol to customize the TLS authentication done by a connection.

> Use the [sec_protocol_options_t](../security/sec_protocol_options_t.md) type from the [Security](../security.md) framework instead.

## Declaration

```objectivec
@protocol NWTCPConnectionAuthenticationDelegate <NSObject>
```

<a id="overview"></a>

## Overview

A delegate is not required for an [NWTCPConnection](nwtcpconnection.md) object.

## Topics

### Delegate methods

- [shouldEvaluateTrustForConnection:](nwtcpconnectionauthenticationdelegate/shouldevaluatetrust%28for_%29.md): Deprecated. Indicate that the delegate should override the default trust evaluation for the connection.
- [evaluateTrustForConnection:peerCertificateChain:completionHandler:](nwtcpconnectionauthenticationdelegate/evaluatetrust%28for_peercertificatechain_completionhandler_%29.md): Deprecated. Override the default trust evaluation for the connection.
- [shouldProvideIdentityForConnection:](nwtcpconnectionauthenticationdelegate/shouldprovideidentity%28for_%29.md): Deprecated. Indicate that the delegate can provide an identity for the connection authentication.
- [provideIdentityForConnection:completionHandler:](nwtcpconnectionauthenticationdelegate/provideidentity%28for_completionhandler_%29.md): Deprecated. Provide the identity and an optional certificate chain to be used for authentication.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### TCP connections

- [NWTCPConnection](nwtcpconnection.md): Deprecated. An object to manage a TCP connection, with or without TLS.
- [NWTLSParameters](nwtlsparameters.md): Deprecated. TLS properties for creating a connection.
