> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectrustoptionflags](https://developer.apple.com/documentation/security/sectrustoptionflags)

# SecTrustOptionFlags (Swift)

**Framework:** Security  
**Kind:** Structure  
**Availability:** macOS 10.0+

The option flags used to condition a trust evaluation.

## Declaration

```swift
struct SecTrustOptionFlags
```

<a id="overview"></a>

## Overview

Use these flags in calls to the [SecTrustSetOptions(\_:\_:)](sectrustsetoptions%28____%29.md) function.

## Topics

### Initializers

- [init(rawValue:)](sectrustoptionflags/init%28rawvalue_%29.md): Initializes a trust option flags structure.

### Flags

- [allowExpired](sectrustoptionflags/allowexpired.md): Allow expired certificates (except for the root certificate).
- [leafIsCA](sectrustoptionflags/leafisca.md): Allow CA certificates as leaf certificates.
- [fetchIssuerFromNet](sectrustoptionflags/fetchissuerfromnet.md): Allow network downloads of CA certificates.
- [allowExpiredRoot](sectrustoptionflags/allowexpiredroot.md): Allow expired root certificates.
- [requireRevPerCert](sectrustoptionflags/requirerevpercert.md): Require a positive revocation check for each certificate.
- [useTrustSettings](sectrustoptionflags/usetrustsettings.md): Use TrustSettings instead of anchors.
- [implicitAnchors](sectrustoptionflags/implicitanchors.md): Treat properly self-signed certificates as anchors implicitly.

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

# SecTrustOptionFlags (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** macOS 10.0+

The option flags used to condition a trust evaluation.

## Declaration

```objectivec
enum SecTrustOptionFlags : uint32_t;
```

<a id="overview"></a>

## Overview

Use these flags in calls to the [SecTrustSetOptions](sectrustsetoptions%28____%29.md) function.

## Topics

### Flags

- [kSecTrustOptionAllowExpired](sectrustoptionflags/allowexpired.md): Allow expired certificates (except for the root certificate).
- [kSecTrustOptionLeafIsCA](sectrustoptionflags/leafisca.md): Allow CA certificates as leaf certificates.
- [kSecTrustOptionFetchIssuerFromNet](sectrustoptionflags/fetchissuerfromnet.md): Allow network downloads of CA certificates.
- [kSecTrustOptionAllowExpiredRoot](sectrustoptionflags/allowexpiredroot.md): Allow expired root certificates.
- [kSecTrustOptionRequireRevPerCert](sectrustoptionflags/requirerevpercert.md): Require a positive revocation check for each certificate.
- [kSecTrustOptionUseTrustSettings](sectrustoptionflags/usetrustsettings.md): Use TrustSettings instead of anchors.
- [kSecTrustOptionImplicitAnchors](sectrustoptionflags/implicitanchors.md): Treat properly self-signed certificates as anchors implicitly.
