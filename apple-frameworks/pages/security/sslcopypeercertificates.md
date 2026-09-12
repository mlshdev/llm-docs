> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslcopypeercertificates](https://developer.apple.com/documentation/security/sslcopypeercertificates)

# SSLCopyPeerCertificates

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.9)

Retrieves a peer certificate and its certificate chain.

> To get peer certificates, call [SSLCopyPeerTrust](sslcopypeertrust%28____%29.md) to obtain the [SecTrustRef](sectrust.md) for the peer certificate chain, then use the [SecTrustGetCertificateCount](sectrustgetcertificatecount%28__%29.md) and [SecTrustGetCertificateAtIndex](sectrustgetcertificateatindex%28____%29.md) functions to retrieve individual certificates in the chain (see the [Trust](trust.md) section of [Certificate, Key, and Trust Services](certificate-key-and-trust-services.md)).

## Declaration

```objectivec
OSStatus SSLCopyPeerCertificates(SSLContextRef context, CFArrayRef*certs);
```

## Parameters

- `context`: An SSL session context reference.
- `certs`: On return, a pointer to an array of values of type `SecCertificateRef` representing the peer certificate and the certificate chain used to validate it. The certificate at index 0 of the returned array is the peer certificate (the subject of the function call—the end certificate in the chain); the root certificate (or the closest certificate to it) is at the end of the returned array. The entire array is created by the Secure Transport library; you must call the `CFRelease` function for this array when you are finished with it.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

This function is valid any time after a handshake attempt. You can use it to examine a peer certificate, to examine a certificate chain to determine why a handshake attempt failed, or to retrieve the certificate chain in order to validate the certificate yourself. (To disable validation so that you can validate the certificate yourself, use the [SSLSetSessionOption](sslsetsessionoption%28______%29.md) function to set the session’s [kSSLSessionOptionBreakOnServerAuth](sslsessionoption/breakonserverauth.md) flag.)
