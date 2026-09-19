> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrdeviceattestationdeviceinfo/elementssignature

# elementsSignature (Swift)

**Framework:** Matter  
**Kind:** Instance Property  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 26.1+ · macOS 26.1+ · tvOS 26.1+ · visionOS 26.0+ · watchOS 26.1+

A signature, using the device attestation private key of the device that sent the attestation information, over the concatenation of elementsTLV and attestationChallenge.

## Declaration

```swift
var elementsSignature: Data { get }
```

# elementsSignature (Objective-C)

**Framework:** Matter  
**Kind:** Instance Property  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 26.1+ · macOS 26.1+ · tvOS 26.1+ · visionOS 26.0+ · watchOS 26.1+

A signature, using the device attestation private key of the device that sent the attestation information, over the concatenation of elementsTLV and attestationChallenge.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSData * elementsSignature;
```
