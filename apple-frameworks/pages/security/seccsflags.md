> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccsflags](https://developer.apple.com/documentation/security/seccsflags)

# SecCSFlags (Swift)

**Framework:** Security  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Values that can be used in the `flags` parameter to most code signing functions.

## Declaration

```swift
struct SecCSFlags
```

<a id="overview"></a>

## Overview

All of the bits in the [SecCSFlags](seccsflags.md) enumeration are reserved by Apple. If you set any bits not defined here, the behavior is undefined.

## Topics

### Initializers

- [init(rawValue:)](seccsflags/init%28rawvalue_%29.md)

### Constants

- [considerExpiration](seccsflags/considerexpiration.md): Consider expired certificates invalid.
- [enforceRevocationChecks](seccsflags/enforcerevocationchecks.md)
- [checkTrustedAnchors](seccsflags/checktrustedanchors.md)
- [noNetworkAccess](seccsflags/nonetworkaccess.md)
- [reportProgress](seccsflags/reportprogress.md)
- [quickCheck](seccsflags/quickcheck.md)

### Type Properties

- [applyEmbeddedPolicy](seccsflags/applyembeddedpolicy.md)
- [matchGuestRequirementInKernel](seccsflags/matchguestrequirementinkernel.md)
- [stripDisallowedXattrs](seccsflags/stripdisallowedxattrs.md)
- [useClassicalSignature](seccsflags/useclassicalsignature.md)
- [usePostQuantumSignature](seccsflags/usepostquantumsignature.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# SecCSFlags (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Values that can be used in the `flags` parameter to most code signing functions.

## Declaration

```objectivec
enum SecCSFlags : uint32_t;
```

<a id="overview"></a>

## Overview

All of the bits in the [SecCSFlags](seccsflags.md) enumeration are reserved by Apple. If you set any bits not defined here, the behavior is undefined.

## Topics

### Constants

- [kSecCSDefaultFlags](seccsflags/kseccsdefaultflags.md): No flags (use the default behavior).
- [kSecCSConsiderExpiration](seccsflags/considerexpiration.md): Consider expired certificates invalid.
- [kSecCSEnforceRevocationChecks](seccsflags/enforcerevocationchecks.md)
- [kSecCSCheckTrustedAnchors](seccsflags/checktrustedanchors.md)
- [kSecCSNoNetworkAccess](seccsflags/nonetworkaccess.md)
- [kSecCSReportProgress](seccsflags/reportprogress.md)
- [kSecCSQuickCheck](seccsflags/quickcheck.md)

### Type Properties

- [kSecCSApplyEmbeddedPolicy](seccsflags/applyembeddedpolicy.md)
- [kSecCSMatchGuestRequirementInKernel](seccsflags/matchguestrequirementinkernel.md)
- [kSecCSStripDisallowedXattrs](seccsflags/stripdisallowedxattrs.md)

### Enumeration Cases

- [kSecCSUseSignature1](seccsflags/kseccsusesignature1.md)
- [kSecCSUseSignature2](seccsflags/kseccsusesignature2.md)
- [kSecCSUseClassicalSignature](seccsflags/useclassicalsignature.md)
- [kSecCSUsePostQuantumSignature](seccsflags/usepostquantumsignature.md)
