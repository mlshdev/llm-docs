> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtroperationalcsrinfo/init(csrnonce:csrelementstlv:attestationsignature:)-82w0o

# init(csrNonce:csrElementsTLV:attestationSignature:) (Swift)

**Framework:** Matter  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
init?(csrNonce: Data, csrElementsTLV: Data, attestationSignature: Data)
```

# initWithCSRNonce:csrElementsTLV:attestationSignature: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```objectivec
- (instancetype) initWithCSRNonce:(NSData *) csrNonce csrElementsTLV:(MTRTLVBytes) csrElementsTLV attestationSignature:(NSData *) attestationSignature;
```
