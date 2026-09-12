> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/attestationinfo/init(challenge:nonce:elements:elementssignature:dac:pai:certificationdeclaration:firmwareinfo:)](https://developer.apple.com/documentation/matter/attestationinfo/init(challenge:nonce:elements:elementssignature:dac:pai:certificationdeclaration:firmwareinfo:))

# init(challenge:nonce:elements:elementsSignature:dac:pai:certificationDeclaration:firmwareInfo:) (Swift)

**Framework:** Matter  
**Kind:** Initializer  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use MTRDeviceAttestationInfo

## Declaration

```swift
init(challenge: Data, nonce: Data, elements: Data, elementsSignature: Data, dac: Data, pai: Data, certificationDeclaration: Data, firmwareInfo: Data)
```

# initWithChallenge:nonce:elements:elementsSignature:dac:pai:certificationDeclaration:firmwareInfo: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use MTRDeviceAttestationInfo

## Declaration

```objectivec
- (instancetype) initWithChallenge:(NSData *) challenge nonce:(NSData *) nonce elements:(NSData *) elements elementsSignature:(NSData *) elementsSignature dac:(NSData *) dac pai:(NSData *) pai certificationDeclaration:(NSData *) certificationDeclaration firmwareInfo:(NSData *) firmwareInfo;
```
