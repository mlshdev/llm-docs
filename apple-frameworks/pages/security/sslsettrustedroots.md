> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslsettrustedroots](https://developer.apple.com/documentation/security/sslsettrustedroots)

# SSLSetTrustedRoots

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.9)

Augments or replaces the default set of trusted root certificates for this session.

> To trust specific roots in a session, first disable Secure Transport’s automatic verification of peer certificates by calling [SSLSetSessionOption](sslsetsessionoption%28______%29.md) to set [kSSLSessionOptionBreakOnServerAuth](sslsessionoption/breakonserverauth.md) to true. When [SSLHandshake](sslhandshake%28__%29.md) subsequently returns an errSSLServerAuthCompleted result, obtain the [SecTrustRef](sectrust.md) for the peer’s certificates and perform a custom trust evaluation with [SecTrustRef](sectrust.md) APIs (see the [Trust](trust.md) section of [Certificate, Key, and Trust Services](certificate-key-and-trust-services.md)).
>
> You can call [SecTrustSetAnchorCertificates](sectrustsetanchorcertificates%28____%29.md) to augment the system’s trusted root set, or [SecTrustSetAnchorCertificatesOnly](sectrustsetanchorcertificatesonly%28____%29.md) to make these the only trusted roots, prior to calling [SecTrustEvaluate](sectrustevaluate%28____%29.md).

## Declaration

```objectivec
OSStatus SSLSetTrustedRoots(SSLContextRef context, CFArrayRef trustedRoots, Boolean replaceExisting);
```

## Parameters

- `context`: An SSL session context reference.
- `trustedRoots`: A reference to an array of trusted root certificates of type `SecCertificateRef`.
- `replaceExisting`: A Boolean value indicating whether to replace or append the current trusted root certificate set. If this value is `true`, the specified root certificates become the only roots that are trusted during this session. If this value is `false`, the specified root certificates are added to the current set of trusted root certificates.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

Each successive call to this function with the `replaceExisting` parameter set to `false` results in accumulation of additional root certificates. To see the current set of trusted root certificates, call the [SSLCopyTrustedRoots](sslcopytrustedroots.md) function.
