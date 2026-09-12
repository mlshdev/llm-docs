> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrcertificates/publickey(fromcsr:)](https://developer.apple.com/documentation/matter/mtrcertificates/publickey(fromcsr:))

# publicKey(fromCSR:) (Swift)

**Framework:** Matter  
**Kind:** Type Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
class func publicKey(fromCSR csr: Data) throws -> Data
```

# publicKeyFromCSR:error: (Objective-C)

**Framework:** Matter  
**Kind:** Type Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
+ (NSData *) publicKeyFromCSR:(MTRCSRDERBytes) csr error:(NSError **) error;
```
