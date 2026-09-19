> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrcertificates/generateoperationalcertificate(_:signingcertificate:operationalpublickey:fabricid:nodeid:caseauthenticatedtags:)

# generateOperationalCertificate(\_:signingCertificate:operationalPublicKey:fabricId:nodeId:caseAuthenticatedTags:) (Swift)

**Framework:** Matter  
**Kind:** Type Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Plase use createOperationalCertificate:signingCertificate:operationalPublicKey:fabricID:nodeID:caseAuthenticatedTags:error:

## Declaration

```swift
class func generateOperationalCertificate(_ signingKeypair: any MTRKeypair, signingCertificate: Data, operationalPublicKey: SecKey, fabricId: NSNumber, nodeId: NSNumber, caseAuthenticatedTags: [NSNumber]?) throws -> Data
```

# generateOperationalCertificate:signingCertificate:operationalPublicKey:fabricId:nodeId:caseAuthenticatedTags:error: (Objective-C)

**Framework:** Matter  
**Kind:** Type Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Plase use createOperationalCertificate:signingCertificate:operationalPublicKey:fabricID:nodeID:caseAuthenticatedTags:error:

## Declaration

```objectivec
+ (NSData *) generateOperationalCertificate:(id<MTRKeypair>) signingKeypair signingCertificate:(NSData *) signingCertificate operationalPublicKey:(SecKeyRef) operationalPublicKey fabricId:(NSNumber *) fabricId nodeId:(NSNumber *) nodeId caseAuthenticatedTags:(NSArray<NSNumber *> *) caseAuthenticatedTags error:(NSError **) error;
```
