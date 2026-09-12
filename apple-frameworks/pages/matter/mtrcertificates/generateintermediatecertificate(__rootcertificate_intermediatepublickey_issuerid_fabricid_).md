> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrcertificates/generateintermediatecertificate(_:rootcertificate:intermediatepublickey:issuerid:fabricid:)](https://developer.apple.com/documentation/matter/mtrcertificates/generateintermediatecertificate(_:rootcertificate:intermediatepublickey:issuerid:fabricid:))

# generateIntermediateCertificate(\_:rootCertificate:intermediatePublicKey:issuerId:fabricId:) (Swift)

**Framework:** Matter  
**Kind:** Type Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use createIntermediateCertificate:rootCertificate:intermediatePublicKey:issuerID:fabricID:error:

## Declaration

```swift
class func generateIntermediateCertificate(_ rootKeypair: any MTRKeypair, rootCertificate: Data, intermediatePublicKey: SecKey, issuerId: NSNumber?, fabricId: NSNumber?) throws -> Data
```

# generateIntermediateCertificate:rootCertificate:intermediatePublicKey:issuerId:fabricId:error: (Objective-C)

**Framework:** Matter  
**Kind:** Type Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use createIntermediateCertificate:rootCertificate:intermediatePublicKey:issuerID:fabricID:error:

## Declaration

```objectivec
+ (NSData *) generateIntermediateCertificate:(id<MTRKeypair>) rootKeypair rootCertificate:(NSData *) rootCertificate intermediatePublicKey:(SecKeyRef) intermediatePublicKey issuerId:(NSNumber *) issuerId fabricId:(NSNumber *) fabricId error:(NSError **) error;
```
