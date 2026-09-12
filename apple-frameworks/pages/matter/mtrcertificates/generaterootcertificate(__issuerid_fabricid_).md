> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrcertificates/generaterootcertificate(_:issuerid:fabricid:)](https://developer.apple.com/documentation/matter/mtrcertificates/generaterootcertificate(_:issuerid:fabricid:))

# generateRootCertificate(\_:issuerId:fabricId:) (Swift)

**Framework:** Matter  
**Kind:** Type Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use createRootCertificate:issuerID:fabricID:error:

## Declaration

```swift
class func generateRootCertificate(_ keypair: any MTRKeypair, issuerId: NSNumber?, fabricId: NSNumber?) throws -> Data
```

# generateRootCertificate:issuerId:fabricId:error: (Objective-C)

**Framework:** Matter  
**Kind:** Type Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use createRootCertificate:issuerID:fabricID:error:

## Declaration

```objectivec
+ (NSData *) generateRootCertificate:(id<MTRKeypair>) keypair issuerId:(NSNumber *) issuerId fabricId:(NSNumber *) fabricId error:(NSError **) error;
```
