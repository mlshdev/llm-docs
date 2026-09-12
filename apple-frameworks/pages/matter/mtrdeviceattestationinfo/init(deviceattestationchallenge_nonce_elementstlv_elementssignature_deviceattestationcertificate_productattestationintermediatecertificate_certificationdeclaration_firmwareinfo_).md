> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdeviceattestationinfo/init(deviceattestationchallenge:nonce:elementstlv:elementssignature:deviceattestationcertificate:productattestationintermediatecertificate:certificationdeclaration:firmwareinfo:)](https://developer.apple.com/documentation/matter/mtrdeviceattestationinfo/init(deviceattestationchallenge:nonce:elementstlv:elementssignature:deviceattestationcertificate:productattestationintermediatecertificate:certificationdeclaration:firmwareinfo:))

# init(deviceAttestationChallenge:nonce:elementsTLV:elementsSignature:deviceAttestationCertificate:productAttestationIntermediateCertificate:certificationDeclaration:firmwareInfo:) (Swift)

**Framework:** Matter  
**Kind:** Initializer  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
init(deviceAttestationChallenge challenge: Data, nonce: Data, elementsTLV: Data, elementsSignature: Data, deviceAttestationCertificate: Data, productAttestationIntermediateCertificate processAttestationIntermediateCertificate: Data, certificationDeclaration: Data, firmwareInfo: Data)
```

# initWithDeviceAttestationChallenge:nonce:elementsTLV:elementsSignature:deviceAttestationCertificate:productAttestationIntermediateCertificate:certificationDeclaration:firmwareInfo: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (instancetype) initWithDeviceAttestationChallenge:(NSData *) challenge nonce:(NSData *) nonce elementsTLV:(MTRTLVBytes) elementsTLV elementsSignature:(NSData *) elementsSignature deviceAttestationCertificate:(MTRCertificateDERBytes) deviceAttestationCertificate productAttestationIntermediateCertificate:(MTRCertificateDERBytes) processAttestationIntermediateCertificate certificationDeclaration:(NSData *) certificationDeclaration firmwareInfo:(NSData *) firmwareInfo;
```
