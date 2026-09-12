> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslsetallowsexpiredcerts](https://developer.apple.com/documentation/security/sslsetallowsexpiredcerts)

# SSLSetAllowsExpiredCerts

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.9)

Specifies whether certificate expiration times are ignored.

> To ignore expired certificate errors, first disable Secure Transport’s automatic verification of peer certificates by calling [SSLSetSessionOption](sslsetsessionoption%28______%29.md) to set [kSSLSessionOptionBreakOnServerAuth](sslsessionoption/breakonserverauth.md) to true. When [SSLHandshake](sslhandshake%28__%29.md) subsequently returns an `errSSLServerAuthCompleted` result, obtain the [SecTrustRef](sectrust.md) for the peer’s certificates and perform a custom trust evaluation with [SecTrustRef](sectrust.md) APIs (see the [Trust](trust.md) section of [Certificate, Key, and Trust Services](certificate-key-and-trust-services.md)).
>
> The [SecTrustSetOptions](sectrustsetoptions%28____%29.md) function allows you to specify that the expiration status of certificates should be ignored for this evaluation.

## Declaration

```objectivec
OSStatus SSLSetAllowsExpiredCerts(SSLContextRef context, Boolean allowsExpired);
```

## Parameters

- `context`: An SSL session context reference.
- `allowsExpired`: A Boolean flag representing whether the certificate expiration times are ignored. The default for this flag is `false`, meaning expired certificates result in an `errSSLCertExpired` result code.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

You can use this function to allow the handshake to succeed even if one or more certificates in the certificate chain have expired. You can use the [SSLGetAllowsExpiredCerts](sslgetallowsexpiredcerts.md) function to determine the current setting of the `allowsExpired` flag.

Use the [SSLSetAllowsExpiredRoots](sslsetallowsexpiredroots.md) function to set a flag specifying whether expired root certificates are allowed.
