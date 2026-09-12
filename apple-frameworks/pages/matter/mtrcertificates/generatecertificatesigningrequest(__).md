> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrcertificates/generatecertificatesigningrequest(_:)](https://developer.apple.com/documentation/matter/mtrcertificates/generatecertificatesigningrequest(_:))

# generateCertificateSigningRequest(\_:) (Swift)

**Framework:** Matter  
**Kind:** Type Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use createCertificateSigningRequest:error:

## Declaration

```swift
class func generateCertificateSigningRequest(_ keypair: any MTRKeypair) throws -> Data
```

# generateCertificateSigningRequest:error: (Objective-C)

**Framework:** Matter  
**Kind:** Type Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use createCertificateSigningRequest:error:

## Declaration

```objectivec
+ (NSData *) generateCertificateSigningRequest:(id<MTRKeypair>) keypair error:(NSError **) error;
```
