> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/seccsflags/useclassicalsignature

# useClassicalSignature (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

## Declaration

```swift
static var useClassicalSignature: SecCSFlags { get }
```

<a id="discussion"></a>

## Discussion

When passed to a validation or inspection call on a dual-signed code object, select the classical (RSA) signature slot for validation and information retrieval. Mutually exclusive with kSecCSUsePostQuantumSignature; passing both returns errSecCSInvalidFlags.

# kSecCSUseClassicalSignature (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

## Declaration

```objectivec
kSecCSUseClassicalSignature
```

<a id="discussion"></a>

## Discussion

When passed to a validation or inspection call on a dual-signed code object, select the classical (RSA) signature slot for validation and information retrieval. Mutually exclusive with kSecCSUsePostQuantumSignature; passing both returns errSecCSInvalidFlags.
