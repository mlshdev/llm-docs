> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrdeviceattestationdeviceinfo/certificationdeclaration

# certificationDeclaration (Swift)

**Framework:** Matter  
**Kind:** Instance Property  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 26.1+ · macOS 26.1+ · tvOS 26.1+ · visionOS 26.0+ · watchOS 26.1+

The certification declaration of the device, if available.  This is a DER-encoded string representing a CMS-formatted certification declaration.  May be nil only if attestation verification failed.

## Declaration

```swift
var certificationDeclaration: Data? { get }
```

# certificationDeclaration (Objective-C)

**Framework:** Matter  
**Kind:** Instance Property  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 26.1+ · macOS 26.1+ · tvOS 26.1+ · visionOS 26.0+ · watchOS 26.1+

The certification declaration of the device, if available.  This is a DER-encoded string representing a CMS-formatted certification declaration.  May be nil only if attestation verification failed.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSData * certificationDeclaration;
```
