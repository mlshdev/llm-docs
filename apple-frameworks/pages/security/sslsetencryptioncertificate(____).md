> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslsetencryptioncertificate(_:_:)](https://developer.apple.com/documentation/security/sslsetencryptioncertificate(_:_:))

# SSLSetEncryptionCertificate(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 9.0) · iPadOS 5.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.11)

Specifies the encryption certificates used for this connection.

> Using separate RSA certificates for encryption and signing is no longer supported.

## Declaration

```swift
func SSLSetEncryptionCertificate(_ context: SSLContext, _ certRefs: CFArray) -> OSStatus
```

## Parameters

- `context`: An SSL session context reference.
- `certRefs`: A value of type `CFArrayRef` referring to an array of certificate references. The references are type `SecCertificateRef`, except for `certRefs[0]`, which is of type `SecIdentityRef`.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

Use this function in one of the following cases:

- The leaf certificate specified in the [SSLSetCertificate(\_:\_:)](sslsetcertificate%28____%29.md) function is not capable of encryption.
- The leaf certificate specified in the [SSLSetCertificate(\_:\_:)](sslsetcertificate%28____%29.md) function contains a key that is too large or strong for legal encryption in this session. In this case, a weaker certificate is specified here and is used for server-initiated key exchange.

The following assumptions are made:

- The `certRefs` parameter’s references remain valid for the lifetime of the connection.
- The specified `certRefs[0]` value is capable of encryption.

This function can be called only when no session is active.

SSL servers that enforce the SSL3 or TLS1 specification to the letter do not accept encryption certificates with key sizes larger than 512 bits for exportable ciphers (that is, for SSL sessions with 40-bit session keys). Therefore, if you wish to support exportable ciphers and your certificate has a key larger than 512 bits, you must specify a separate encryption certificate.

# SSLSetEncryptionCertificate (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 9.0) · iPadOS 5.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.11) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Specifies the encryption certificates used for this connection.

> Using separate RSA certificates for encryption and signing is no longer supported.

## Declaration

```objectivec
OSStatus SSLSetEncryptionCertificate(SSLContextRef context, CFArrayRef certRefs);
```

## Parameters

- `context`: An SSL session context reference.
- `certRefs`: A value of type `CFArrayRef` referring to an array of certificate references. The references are type `SecCertificateRef`, except for `certRefs[0]`, which is of type `SecIdentityRef`.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

Use this function in one of the following cases:

- The leaf certificate specified in the [SSLSetCertificate](sslsetcertificate%28____%29.md) function is not capable of encryption.
- The leaf certificate specified in the [SSLSetCertificate](sslsetcertificate%28____%29.md) function contains a key that is too large or strong for legal encryption in this session. In this case, a weaker certificate is specified here and is used for server-initiated key exchange.

The following assumptions are made:

- The `certRefs` parameter’s references remain valid for the lifetime of the connection.
- The specified `certRefs[0]` value is capable of encryption.

This function can be called only when no session is active.

SSL servers that enforce the SSL3 or TLS1 specification to the letter do not accept encryption certificates with key sizes larger than 512 bits for exportable ciphers (that is, for SSL sessions with 40-bit session keys). Therefore, if you wish to support exportable ciphers and your certificate has a key larger than 512 bits, you must specify a separate encryption certificate.
