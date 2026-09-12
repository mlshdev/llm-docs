> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/verificationresult/verificationerror/invalidcertificatechain](https://developer.apple.com/documentation/storekit/verificationresult/verificationerror/invalidcertificatechain)

# VerificationResult.VerificationError.invalidCertificateChain

**Framework:** StoreKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An error indicating that the certificate chain is invalid.

## Declaration

```swift
case invalidCertificateChain
```

<a id="Discussion"></a>

## Discussion

This error may occur if one or more certificates in the certiificate chain are expired or from an untrusted source.

## See Also

### Error Codes

- [VerificationResult.VerificationError.invalidDeviceVerification](invaliddeviceverification.md): An error that indicates the signed value wasn’t generated for the current device.
- [VerificationResult.VerificationError.invalidEncoding](invalidencoding.md): An error that indicates the signature, certificate chain, or other part of value uses invalid encoding.
- [VerificationResult.VerificationError.invalidSignature](invalidsignature.md): An error that indicates that the signature didn’t match the header and payload.
- [VerificationResult.VerificationError.missingRequiredProperties](missingrequiredproperties.md): An error that indicates the header or payload are missing information that’s required to verify the signature.
- [VerificationResult.VerificationError.revokedCertificate](revokedcertificate.md): An error that indicates the certificate chain includes a revoked certificate.
