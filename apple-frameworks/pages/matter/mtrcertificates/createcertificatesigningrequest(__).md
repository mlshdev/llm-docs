> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrcertificates/createcertificatesigningrequest(_:)](https://developer.apple.com/documentation/matter/mtrcertificates/createcertificatesigningrequest(_:))

# createCertificateSigningRequest(\_:) (Swift)

**Framework:** Matter  
**Kind:** Type Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class func createCertificateSigningRequest(_ keypair: any MTRKeypair) throws -> Data
```

# createCertificateSigningRequest:error: (Objective-C)

**Framework:** Matter  
**Kind:** Type Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
+ (MTRCSRDERBytes) createCertificateSigningRequest:(id<MTRKeypair>) keypair error:(NSError **) error;
```
