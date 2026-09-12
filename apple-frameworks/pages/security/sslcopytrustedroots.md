> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslcopytrustedroots](https://developer.apple.com/documentation/security/sslcopytrustedroots)

# SSLCopyTrustedRoots

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.9)

Retrieves the current list of trusted root certificates.

> To get the current set of trusted roots, call the [SSLCopyPeerTrust](sslcopypeertrust%28____%29.md) function to obtain the [SecTrustRef](sectrust.md) for the peer certificate chain, and then call the [SecTrustCopyCustomAnchorCertificates](sectrustcopycustomanchorcertificates%28____%29.md) function (see the [Trust](trust.md) section of [Certificate, Key, and Trust Services](certificate-key-and-trust-services.md)).

## Declaration

```objectivec
OSStatus SSLCopyTrustedRoots(SSLContextRef context, CFArrayRef*trustedRoots);
```

## Parameters

- `context`: An SSL session context reference.
- `trustedRoots`: On return, a pointer to a value of type `CFArrayRef`. This array contains values of type `SecCertificateRef` representing the current set of trusted roots. You must call the `CFRelease` function to release this array when you are finished with it.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

You can use the [SSLSetTrustedRoots](sslsettrustedroots.md) function to replace or add to the set of trusted root certificates. If [SSLSetTrustedRoots](sslsettrustedroots.md) has never been called for this session, the [SSLCopyTrustedRoots](sslcopytrustedroots.md) function returns the system’s default set of trusted root certificates.
