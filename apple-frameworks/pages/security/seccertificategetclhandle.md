> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccertificategetclhandle](https://developer.apple.com/documentation/security/seccertificategetclhandle)

# SecCertificateGetCLHandle

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Retrieves the certificate library handle from a certificate object.

## Declaration

```objectivec
OSStatus SecCertificateGetCLHandle(SecCertificateRef certificate, CSSM_CL_HANDLE *clHandle);
```

## Parameters

- `certificate`: The certificate object from which to obtain the certificate library handle.
- `clHandle`: On return, points to the certificate library handle of the specified certificate. This handle remains valid until the certificate object is released.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

The certificate library handle is the CSSM identifier of the certificate library module that is managing the certificate. The certificate library handle is used as an input to a number of CSSM functions.
