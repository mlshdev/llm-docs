> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrcertificates/createintermediatecertificate(_:rootcertificate:intermediatepublickey:issuerid:fabricid:validityperiod:)](https://developer.apple.com/documentation/matter/mtrcertificates/createintermediatecertificate(_:rootcertificate:intermediatepublickey:issuerid:fabricid:validityperiod:))

# createIntermediateCertificate(\_:rootCertificate:intermediatePublicKey:issuerID:fabricID:validityPeriod:) (Swift)

**Framework:** Matter  
**Kind:** Type Method  
**Availability:** iOS 16.6+ · iPadOS 16.6+ · Mac Catalyst 16.6+ · macOS 13.5+ · tvOS 16.6+ · visionOS 1.0+ · watchOS 9.6+

## Declaration

```swift
class func createIntermediateCertificate(_ rootKeypair: any MTRKeypair, rootCertificate: Data, intermediatePublicKey: SecKey, issuerID: NSNumber?, fabricID: NSNumber?, validityPeriod: DateInterval) throws -> Data
```

# createIntermediateCertificate:rootCertificate:intermediatePublicKey:issuerID:fabricID:validityPeriod:error: (Objective-C)

**Framework:** Matter  
**Kind:** Type Method  
**Availability:** iOS 16.6+ · iPadOS 16.6+ · Mac Catalyst 16.6+ · macOS 13.5+ · tvOS 16.6+ · visionOS 1.0+ · watchOS 9.6+

## Declaration

```objectivec
+ (MTRCertificateDERBytes) createIntermediateCertificate:(id<MTRKeypair>) rootKeypair rootCertificate:(MTRCertificateDERBytes) rootCertificate intermediatePublicKey:(SecKeyRef) intermediatePublicKey issuerID:(NSNumber *) issuerID fabricID:(NSNumber *) fabricID validityPeriod:(NSDateInterval *) validityPeriod error:(NSError **) error;
```
