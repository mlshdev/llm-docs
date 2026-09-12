> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkfhirrelease](https://developer.apple.com/documentation/healthkit/hkfhirrelease)

# HKFHIRRelease (Swift)

**Framework:** HealthKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Official releases of the FHIR specification.

## Declaration

```swift
struct HKFHIRRelease
```

<a id="overview"></a>

## Overview

Each release can have multiple versions.

## Topics

### Releases

- [dstu2](hkfhirrelease/dstu2.md): The Second Draft Standard for Trial Use (DSTU2) release.
- [r4](hkfhirrelease/r4.md): The Release 4 (R4) release.
- [unknown](hkfhirrelease/unknown.md): An unknown release.

### Initializers

- [init(rawValue:)](hkfhirrelease/init%28rawvalue_%29.md): Creates a new release from the provided string.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing the Release

- [fhirRelease](hkfhirversion/fhirrelease.md): An official release of the FHIR specification.

# HKFHIRRelease (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Official releases of the FHIR specification.

## Declaration

```objectivec
typedef NSString * HKFHIRRelease;
```

<a id="overview"></a>

## Overview

Each release can have multiple versions.

## Topics

### Releases

- [HKFHIRReleaseDSTU2](hkfhirrelease/dstu2.md): The Second Draft Standard for Trial Use (DSTU2) release.
- [HKFHIRReleaseR4](hkfhirrelease/r4.md): The Release 4 (R4) release.
- [HKFHIRReleaseUnknown](hkfhirrelease/unknown.md): An unknown release.

## See Also

### Accessing the Release

- [FHIRRelease](hkfhirversion/fhirrelease.md): An official release of the FHIR specification.
