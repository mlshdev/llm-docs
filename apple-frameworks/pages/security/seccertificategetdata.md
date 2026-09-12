> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccertificategetdata](https://developer.apple.com/documentation/security/seccertificategetdata)

# SecCertificateGetData

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Retrieves the data for a certificate.

## Declaration

```objectivec
OSStatus SecCertificateGetData(SecCertificateRef certificate, CSSM_DATA_PTR data);
```

## Parameters

- `certificate`: A certificate object for the certificate from which to retrieve the data.
- `data`: On return, points to the data for the certificate specified. You must allocate the space for a `CSSM_DATA` structure before calling this function. This data pointer is only guaranteed to remain valid as long as the certificate remains unchanged and valid.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

This function requires a certificate object, which can, for example, be created with the [SecCertificateCreateFromData](seccertificatecreatefromdata.md) function, obtained from an identity with the [SecIdentityCopyCertificate](secidentitycopycertificate%28____%29.md) function, or obtained over a network (see [Secure Transport](secure-transport.md)).
