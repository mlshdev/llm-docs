> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mattersupport/matteradddeviceextensionrequesthandler/devicecredential/init(certificationdeclaration:deviceattestationcertificate:productattestationintermediatecertificate:)](https://developer.apple.com/documentation/mattersupport/matteradddeviceextensionrequesthandler/devicecredential/init(certificationdeclaration:deviceattestationcertificate:productattestationintermediatecertificate:))

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
