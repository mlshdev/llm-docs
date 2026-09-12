> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtroperationalcsrinfo/init(csr:csrnonce:csrelementstlv:attestationsignature:)-69823](https://developer.apple.com/documentation/matter/mtroperationalcsrinfo/init(csr:csrnonce:csrelementstlv:attestationsignature:)-69823)

# init(csr:csrNonce:csrElementsTLV:attestationSignature:) (Swift)

**Framework:** Matter  
**Kind:** Initializer  
**Availability:** iOS 16.4+ (deprecated in 17.0) · iPadOS 16.4+ (deprecated in 17.0) · Mac Catalyst 16.4+ (deprecated in 17.0) · macOS 13.3+ (deprecated in 14.0) · tvOS 16.4+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.4+ (deprecated in 10.0)

> Please use one of the initializers that validates the input

## Declaration

```swift
init(csr: Data, csrNonce: Data, csrElementsTLV: Data, attestationSignature: Data)
```

# initWithCSR:csrNonce:csrElementsTLV:attestationSignature: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ (deprecated in 17.0) · iPadOS 16.4+ (deprecated in 17.0) · Mac Catalyst 16.4+ (deprecated in 17.0) · macOS 13.3+ (deprecated in 14.0) · tvOS 16.4+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.4+ (deprecated in 10.0)

> Please use one of the initializers that validates the input

## Declaration

```objectivec
- (instancetype) initWithCSR:(MTRCSRDERBytes) csr csrNonce:(NSData *) csrNonce csrElementsTLV:(MTRTLVBytes) csrElementsTLV attestationSignature:(NSData *) attestationSignature;
```
