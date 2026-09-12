> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdeviceattestationdeviceinfo](https://developer.apple.com/documentation/matter/mtrdeviceattestationdeviceinfo)

# MTRDeviceAttestationDeviceInfo (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRDeviceAttestationDeviceInfo
```

## Topics

### Instance Properties

- [basicInformationProductID](mtrdeviceattestationdeviceinfo/basicinformationproductid.md)
- [basicInformationVendorID](mtrdeviceattestationdeviceinfo/basicinformationvendorid.md)
- [certificateDeclaration](mtrdeviceattestationdeviceinfo/certificatedeclaration.md): Deprecated.
- [dacCertificate](mtrdeviceattestationdeviceinfo/daccertificate.md)
- [dacPAICertificate](mtrdeviceattestationdeviceinfo/dacpaicertificate.md)
- [productID](mtrdeviceattestationdeviceinfo/productid.md)
- [vendorID](mtrdeviceattestationdeviceinfo/vendorid.md)
- [attestationChallenge](mtrdeviceattestationdeviceinfo/attestationchallenge.md): The attestation challenge from the secure session.
- [attestationNonce](mtrdeviceattestationdeviceinfo/attestationnonce.md): The attestation nonce from the AttestationRequest command.
- [certificationDeclaration](mtrdeviceattestationdeviceinfo/certificationdeclaration.md): The certification declaration of the device, if available. This is a DER-encoded string representing a CMS-formatted certification declaration. May be nil only if attestation verification failed.
- [elementsSignature](mtrdeviceattestationdeviceinfo/elementssignature.md): A signature, using the device attestation private key of the device that sent the attestation information, over the concatenation of elementsTLV and attestationChallenge.
- [elementsTLV](mtrdeviceattestationdeviceinfo/elementstlv.md): The TLV-encoded attestation_elements_message that was used to find the certificationDeclaration (possibly unsuccessfully).

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MTRDeviceAttestationDeviceInfo (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRDeviceAttestationDeviceInfo : NSObject
```

## Topics

### Instance Properties

- [basicInformationProductID](mtrdeviceattestationdeviceinfo/basicinformationproductid.md)
- [basicInformationVendorID](mtrdeviceattestationdeviceinfo/basicinformationvendorid.md)
- [certificateDeclaration](mtrdeviceattestationdeviceinfo/certificatedeclaration.md): Deprecated.
- [dacCertificate](mtrdeviceattestationdeviceinfo/daccertificate.md)
- [dacPAICertificate](mtrdeviceattestationdeviceinfo/dacpaicertificate.md)
- [productID](mtrdeviceattestationdeviceinfo/productid.md)
- [vendorID](mtrdeviceattestationdeviceinfo/vendorid.md)
- [attestationChallenge](mtrdeviceattestationdeviceinfo/attestationchallenge.md): The attestation challenge from the secure session.
- [attestationNonce](mtrdeviceattestationdeviceinfo/attestationnonce.md): The attestation nonce from the AttestationRequest command.
- [certificationDeclaration](mtrdeviceattestationdeviceinfo/certificationdeclaration.md): The certification declaration of the device, if available. This is a DER-encoded string representing a CMS-formatted certification declaration. May be nil only if attestation verification failed.
- [elementsSignature](mtrdeviceattestationdeviceinfo/elementssignature.md): A signature, using the device attestation private key of the device that sent the attestation information, over the concatenation of elementsTLV and attestationChallenge.
- [elementsTLV](mtrdeviceattestationdeviceinfo/elementstlv.md): The TLV-encoded attestation_elements_message that was used to find the certificationDeclaration (possibly unsuccessfully).

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
