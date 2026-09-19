> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrcertificates/createrootcertificate(_:issuerid:fabricid:)

# createRootCertificate(\_:issuerID:fabricID:) (Swift)

**Framework:** Matter  
**Kind:** Type Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
class func createRootCertificate(_ keypair: any MTRKeypair, issuerID: NSNumber?, fabricID: NSNumber?) throws -> Data
```

# createRootCertificate:issuerID:fabricID:error: (Objective-C)

**Framework:** Matter  
**Kind:** Type Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
+ (MTRCertificateDERBytes) createRootCertificate:(id<MTRKeypair>) keypair issuerID:(NSNumber *) issuerID fabricID:(NSNumber *) fabricID error:(NSError **) error;
```
