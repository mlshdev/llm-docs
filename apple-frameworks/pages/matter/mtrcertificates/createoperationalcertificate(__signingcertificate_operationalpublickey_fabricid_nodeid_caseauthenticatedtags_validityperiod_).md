> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrcertificates/createoperationalcertificate(_:signingcertificate:operationalpublickey:fabricid:nodeid:caseauthenticatedtags:validityperiod:)](https://developer.apple.com/documentation/matter/mtrcertificates/createoperationalcertificate(_:signingcertificate:operationalpublickey:fabricid:nodeid:caseauthenticatedtags:validityperiod:))

# createOperationalCertificate(\_:signingCertificate:operationalPublicKey:fabricID:nodeID:caseAuthenticatedTags:validityPeriod:) (Swift)

**Framework:** Matter  
**Kind:** Type Method  
**Availability:** iOS 16.6+ · iPadOS 16.6+ · Mac Catalyst 16.6+ · macOS 13.5+ · tvOS 16.6+ · visionOS 1.0+ · watchOS 9.6+

## Declaration

```swift
class func createOperationalCertificate(_ signingKeypair: any MTRKeypair, signingCertificate: Data, operationalPublicKey: SecKey, fabricID: NSNumber, nodeID: NSNumber, caseAuthenticatedTags: Set<NSNumber>?, validityPeriod: DateInterval) throws -> Data
```

# createOperationalCertificate:signingCertificate:operationalPublicKey:fabricID:nodeID:caseAuthenticatedTags:validityPeriod:error: (Objective-C)

**Framework:** Matter  
**Kind:** Type Method  
**Availability:** iOS 16.6+ · iPadOS 16.6+ · Mac Catalyst 16.6+ · macOS 13.5+ · tvOS 16.6+ · visionOS 1.0+ · watchOS 9.6+

## Declaration

```objectivec
+ (MTRCertificateDERBytes) createOperationalCertificate:(id<MTRKeypair>) signingKeypair signingCertificate:(MTRCertificateDERBytes) signingCertificate operationalPublicKey:(SecKeyRef) operationalPublicKey fabricID:(NSNumber *) fabricID nodeID:(NSNumber *) nodeID caseAuthenticatedTags:(NSSet<NSNumber *> *) caseAuthenticatedTags validityPeriod:(NSDateInterval *) validityPeriod error:(NSError **) error;
```
