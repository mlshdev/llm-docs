> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslsetallowsanyroot](https://developer.apple.com/documentation/security/sslsetallowsanyroot)

# SSLSetAllowsAnyRoot

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.9)

Specifies whether root certificates from unrecognized certification authorities are allowed.

> To ignore unknown root certificate errors, first disable Secure Transport’s automatic verification of peer certificates by calling
>
> [SSLSetSessionOption](sslsetsessionoption%28______%29.md) to set [kSSLSessionOptionBreakOnServerAuth](sslsessionoption/breakonserverauth.md) to [true](https://developer.apple.com/documentation/swift/true). When [SSLHandshake](sslhandshake%28__%29.md) subsequently returns an `errSSLServerAuthCompleted` result, obtain the [SecTrustRef](sectrust.md) for the peer’s certificates and perform a custom trust evaluation with [SecTrustRef](sectrust.md) APIs (see the [Trust](trust.md) section of [Certificate, Key, and Trust Services](certificate-key-and-trust-services.md)).
>
> Note that an unknown root certificate will cause [SecTrustEvaluate](sectrustevaluate%28____%29.md) to report [kSecTrustResultRecoverableTrustFailure](sectrustresulttype/recoverabletrustfailure.md) as the trust result.

## Declaration

```objectivec
OSStatus SSLSetAllowsAnyRoot(SSLContextRef context, Boolean anyRoot);
```

## Parameters

- `context`: An SSL session context reference.
- `anyRoot`: A Boolean flag specifying whether root certificates from unrecognized certification authorities (CAs) are allowed. The default for this flag is `false`, specifying that roots from unrecognized CAs are not allowed.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

The system maintains a set of root certificates signed by known, trusted root CAs. When the `anyRoot` flag is `true`, Secure Transport does not return an error if one of the following two conditions occurs:

- The peer returns a certificate chain with a root certificate, and the chain verifies to that root, but the CA for the root certificate is not one of the known, trusted root CAs. This results in an `errSSLUnknownRootCert` result code when the `anyRoot` flag is `false`.
- The peer returns a certificate chain that does not contain a root certificate, and the server can’t verify the chain to one of the trusted root certificates. This results in an `errSSLNoRootCert` result code when the `anyRoot` flag is `false`.

Both of these error conditions are ignored when the `anyRoot` flag is `true`, allowing connection to a peer for which trust could not be established.

If you use this function to allow an untrusted root to be used for validation of a certificate—for example, after prompting the user for permission to do so—remember to set the `anyRoot` Boolean value back to `false`. If you don’t, any random root certificate can be used for signing a certificate chain. To add a certificate to the list of trusted roots, use the [SecTrustSetAnchorCertificates](sectrustsetanchorcertificates%28____%29.md) function.
