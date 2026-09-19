> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mattersupport/matteradddeviceextensionrequesthandler/devicecredential/init(certificationdeclaration:deviceattestationcertificate:productattestationintermediatecertificate:)

# init(certificationDeclaration:deviceAttestationCertificate:productAttestationIntermediateCertificate:)

**Framework:** MatterSupport  
**Kind:** Initializer  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 14.0+ · visionOS

Creates the credential object.

## Declaration

```swift
init(certificationDeclaration: Data, deviceAttestationCertificate: Data, productAttestationIntermediateCertificate: Data)
```

## Parameters

- `certificationDeclaration`: The device’s Certification Declaration.
- `deviceAttestationCertificate`: The device’s Device Attestation Certificate.
- `productAttestationIntermediateCertificate`: The device’s Product Attestation Intermediate Certificate.
