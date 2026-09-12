> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccertificategetalgorithmid](https://developer.apple.com/documentation/security/seccertificategetalgorithmid)

# SecCertificateGetAlgorithmID

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Retrieves the algorithm identifier for a certificate.

## Declaration

```objectivec
OSStatus SecCertificateGetAlgorithmID(SecCertificateRef certificate, const SecAsn1AlgId **algid);
```

## Parameters

- `certificate`: The certificate object from which to retrieve the algorithm identifier.
- `algid`: On return, points to a struct that identifies the algorithm for this certificate. This pointer remains valid until the certificate reference is released. Do not attempt to free this pointer.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

The `CSSM_X509_ALGORITHM_IDENTIFIER` struct is defined in `Security.framework/x509defs.h` and discussed in *Common Security: CDSA and CSSM, version 2 (with corrigenda)* from [http://www.opengroup.org/security/cdsa.htm](http://www.opengroup.org/security/cdsa.htm). Possible algorithms are enumerated in `Security.framework/oidsalg.h`.
