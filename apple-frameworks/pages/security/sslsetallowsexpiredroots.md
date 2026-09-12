> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslsetallowsexpiredroots](https://developer.apple.com/documentation/security/sslsetallowsexpiredroots)

# SSLSetAllowsExpiredRoots

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.9)

Specifies whether expired root certificates are allowed.

> To ignore expired certificate errors, first disable Secure Transport’s automatic verification of peer certificates by calling [SSLSetSessionOption](sslsetsessionoption%28______%29.md) to set [kSSLSessionOptionBreakOnServerAuth](sslsessionoption/breakonserverauth.md) to [true](https://developer.apple.com/documentation/swift/true). When [SSLHandshake](sslhandshake%28__%29.md) subsequently returns an `errSSLServerAuthCompleted` result, obtain the [SecTrustRef](sectrust.md) for the peer’s certificates and perform a custom trust evaluation with [SecTrustRef](sectrust.md) APIs (see the [Trust](trust.md) section of [Certificate, Key, and Trust Services](certificate-key-and-trust-services.md)).
>
> The [SecTrustSetOptions](sectrustsetoptions%28____%29.md) function allows you to specify that the expiration status of certificates should be ignored for this evaluation. The [kSecTrustOptionAllowExpiredRoot](sectrustoptionflags/allowexpiredroot.md) option can be used instead of [kSecTrustOptionAllowExpired](sectrustoptionflags/allowexpired.md) to allow expired roots only.

## Declaration

```objectivec
OSStatus SSLSetAllowsExpiredRoots(SSLContextRef context, Boolean allowsExpired);
```

## Parameters

- `context`: An SSL session context reference.
- `allowsExpired`: A Boolean value indicating whether to allow expired root certificates. Pass `true` to allow expired roots.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

The default value for the `allowsExpired` flag is `false`. When this flag is `false`, Secure Transport returns an `errSSLCertExpired` result code during handshake if the root certificate is expired.

You can use the [SSLGetAllowsExpiredRoots](sslgetallowsexpiredroots.md) function to determine the current setting of the `allowsExpired` flag.

Use the [SSLSetAllowsExpiredCerts](sslsetallowsexpiredcerts.md) function to set a value that determines whether expired non-root certificates are allowed.
