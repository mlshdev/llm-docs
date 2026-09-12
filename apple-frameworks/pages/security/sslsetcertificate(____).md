> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslsetcertificate(_:_:)](https://developer.apple.com/documentation/security/sslsetcertificate(_:_:))

# SSLSetCertificate(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15)

Specifies this connection’s certificate or certificates.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLSetCertificate(_ context: SSLContext, _ certRefs: CFArray?) -> OSStatus
```

## Parameters

- `context`: An SSL session context reference.
- `certRefs`: The certificates to set. This array contains items of type `SecCertificateRef`, except for `certRefs[0]`, which is of type `SecIdentityRef`.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

## Mentioned In

- [Using the Secure Socket Layer for Network Communication](using-the-secure-socket-layer-for-network-communication.md)

<a id="Discussion"></a>

## Discussion

Setting the certificate or certificates is mandatory for server connections, but is optional for clients. Specifying a certificate for a client enables SSL client-side authentication. You must place in `certRefs[0]` a `SecIdentityRef` object that identifies the leaf certificate and its corresponding private key. Specifying a root certificate is optional; if it’s not specified, the root certificate that verifies the certificate chain specified here must be present in the system wide set of trusted anchor certificates.

This function must be called before calling [SSLHandshake(\_:)](sslhandshake%28__%29.md), or immediately after [SSLHandshake(\_:)](sslhandshake%28__%29.md) has returned `errSSLClientCertRequested` (that is, before the handshake is resumed by calling [SSLHandshake(\_:)](sslhandshake%28__%29.md) again).

Secure Transport assumes the following:

- The certificate references remain valid for the lifetime of the session.
- The identity specified in `certRefs[0]` is capable of signing.

The required capabilities of the identity specified in `certRefs[0]`—and of the optional certificate specified in the [SSLSetEncryptionCertificate(\_:\_:)](sslsetencryptioncertificate%28____%29.md) function—are highly dependent on the application. For example, to work as a server with Netscape clients, the identity specified here must be capable of both signing and encrypting. Use the [SSLCopyDistinguishedNames(\_:\_:)](sslcopydistinguishednames%28____%29.md) function to get a list of certificates acceptable to the server.

# SSLSetCertificate (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Specifies this connection’s certificate or certificates.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLSetCertificate(SSLContextRef context, CFArrayRef certRefs);
```

## Parameters

- `context`: An SSL session context reference.
- `certRefs`: The certificates to set. This array contains items of type `SecCertificateRef`, except for `certRefs[0]`, which is of type `SecIdentityRef`.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

## Mentioned In

- [Using the Secure Socket Layer for Network Communication](using-the-secure-socket-layer-for-network-communication.md)

<a id="Discussion"></a>

## Discussion

Setting the certificate or certificates is mandatory for server connections, but is optional for clients. Specifying a certificate for a client enables SSL client-side authentication. You must place in `certRefs[0]` a `SecIdentityRef` object that identifies the leaf certificate and its corresponding private key. Specifying a root certificate is optional; if it’s not specified, the root certificate that verifies the certificate chain specified here must be present in the system wide set of trusted anchor certificates.

This function must be called before calling [SSLHandshake](sslhandshake%28__%29.md), or immediately after [SSLHandshake](sslhandshake%28__%29.md) has returned `errSSLClientCertRequested` (that is, before the handshake is resumed by calling [SSLHandshake](sslhandshake%28__%29.md) again).

Secure Transport assumes the following:

- The certificate references remain valid for the lifetime of the session.
- The identity specified in `certRefs[0]` is capable of signing.

The required capabilities of the identity specified in `certRefs[0]`—and of the optional certificate specified in the [SSLSetEncryptionCertificate](sslsetencryptioncertificate%28____%29.md) function—are highly dependent on the application. For example, to work as a server with Netscape clients, the identity specified here must be capable of both signing and encrypting. Use the [SSLCopyDistinguishedNames](sslcopydistinguishednames%28____%29.md) function to get a list of certificates acceptable to the server.
