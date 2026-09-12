> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mattersupport/matteradddeviceextensionrequesthandler/devicecredential](https://developer.apple.com/documentation/mattersupport/matteradddeviceextensionrequesthandler/devicecredential)

# MatterAddDeviceExtensionRequestHandler.DeviceCredential

**Framework:** MatterSupport  
**Kind:** Structure  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 14.0+ · visionOS

A collection of device credentials the device presents during commissioning.

## Declaration

```swift
struct DeviceCredential
```

## Topics

### Creating the credential

- [init(certificationDeclaration:deviceAttestationCertificate:productAttestationIntermediateCertificate:)](devicecredential/init%28certificationdeclaration_deviceattestationcertificate_productattestationintermediatecertificate_%29.md): Creates the credential object.

### Getting the properties

- [certificationDeclaration](devicecredential/certificationdeclaration.md): The device’s Certification Declaration as defined in the Matter specification.
- [deviceAttestationCertificate](devicecredential/deviceattestationcertificate.md): The device’s Device Attestation Certificate as defined in the Matter specification.
- [productAttestationIntermediateCertificate](devicecredential/productattestationintermediatecertificate.md): The device’s Product Attestation Intermediate Certificate as defined in the Matter specification.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring and validating the device

- [configureDevice(named:in:)](configuredevice%28named_in_%29.md): Configures the device with selected attributes.
- [validateDeviceCredential(\_:)](validatedevicecredential%28__%29.md): Performs verification and attestation checks.
- [rooms(in:)](rooms%28in_%29.md): Provides rooms that correspond to a home in the device setup.
