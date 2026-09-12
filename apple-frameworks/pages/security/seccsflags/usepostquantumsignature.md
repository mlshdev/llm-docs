> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccsflags/usepostquantumsignature](https://developer.apple.com/documentation/security/seccsflags/usepostquantumsignature)

# usePostQuantumSignature (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

## Declaration

```swift
static var usePostQuantumSignature: SecCSFlags { get }
```

<a id="discussion"></a>

## Discussion

When passed to a validation or inspection call on a dual-signed code object, select the post-quantum (PQ) signature slot for validation and information retrieval. Mutually exclusive with kSecCSUseClassicalSignature.

# kSecCSUsePostQuantumSignature (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

## Declaration

```objectivec
kSecCSUsePostQuantumSignature
```

<a id="discussion"></a>

## Discussion

When passed to a validation or inspection call on a dual-signed code object, select the post-quantum (PQ) signature slot for validation and information retrieval. Mutually exclusive with kSecCSUseClassicalSignature.
