> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkfhirversion](https://developer.apple.com/documentation/healthkit/hkfhirversion)

# HKFHIRVersion (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+

The FHIR version.

## Declaration

```swift
class HKFHIRVersion
```

<a id="overview"></a>

## Overview

Use an [HKFHIRVersion](hkfhirversion.md) instance to represent the version of the Fast Healthcare Interoperability Resources (FHIR) standard used to create a [HKFHIRResource](hkfhirresource.md) sample.

## Topics

### Creating Version Objects

- [init(fromVersionString:)](hkfhirversion/init%28fromversionstring_%29.md): Creates an FHIR version object from a string representation of the version.
- [primaryDSTU2()](hkfhirversion/primarydstu2%28%29.md): Returns the primary Second Draft Standard for Trial Use (DSTU2) version.
- [primaryR4()](hkfhirversion/primaryr4%28%29.md): Returns the primary Release 4 (R4) version.

### Accessing Version Data

- [majorVersion](hkfhirversion/majorversion.md): The standard’s major version number.
- [minorVersion](hkfhirversion/minorversion.md): The standard’s minor version number.
- [patchVersion](hkfhirversion/patchversion.md): The standard’s patch version number.
- [stringRepresentation](hkfhirversion/stringrepresentation.md): A string representation of the version.

### Accessing the Release

- [fhirRelease](hkfhirversion/fhirrelease.md): An official release of the FHIR specification.
- [HKFHIRRelease](hkfhirrelease.md): Official releases of the FHIR specification.

### Initializers

- [init(coder:)](hkfhirversion/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing FHIR Data

- [identifier](hkfhirresource/identifier.md): The value from the FHIR resource’s `id` field.
- [fhirVersion](hkfhirresource/fhirversion.md): The FHIR version used by this resource.
- [resourceType](hkfhirresource/resourcetype.md): The value from the FHIR resource’s `resourceType` field.
- [HKFHIRResourceType](hkfhirresourcetype.md): The FHIR resource types supported in HealthKit.
- [sourceURL](hkfhirresource/sourceurl.md): The full URL for the source of the FHIR resource.
- [data](hkfhirresource/data.md): The JSON representation of the FHIR resource.

# HKFHIRVersion (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+

The FHIR version.

## Declaration

```objectivec
@interface HKFHIRVersion : NSObject
```

<a id="overview"></a>

## Overview

Use an [HKFHIRVersion](hkfhirversion.md) instance to represent the version of the Fast Healthcare Interoperability Resources (FHIR) standard used to create a [HKFHIRResource](hkfhirresource.md) sample.

## Topics

### Creating Version Objects

- [versionFromVersionString:error:](hkfhirversion/init%28fromversionstring_%29.md): Creates an FHIR version object from a string representation of the version.
- [primaryDSTU2Version](hkfhirversion/primarydstu2%28%29.md): Returns the primary Second Draft Standard for Trial Use (DSTU2) version.
- [primaryR4Version](hkfhirversion/primaryr4%28%29.md): Returns the primary Release 4 (R4) version.

### Accessing Version Data

- [majorVersion](hkfhirversion/majorversion.md): The standard’s major version number.
- [minorVersion](hkfhirversion/minorversion.md): The standard’s minor version number.
- [patchVersion](hkfhirversion/patchversion.md): The standard’s patch version number.
- [stringRepresentation](hkfhirversion/stringrepresentation.md): A string representation of the version.

### Accessing the Release

- [FHIRRelease](hkfhirversion/fhirrelease.md): An official release of the FHIR specification.
- [HKFHIRRelease](hkfhirrelease.md): Official releases of the FHIR specification.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Accessing FHIR Data

- [identifier](hkfhirresource/identifier.md): The value from the FHIR resource’s `id` field.
- [FHIRVersion](hkfhirresource/fhirversion.md): The FHIR version used by this resource.
- [resourceType](hkfhirresource/resourcetype.md): The value from the FHIR resource’s `resourceType` field.
- [HKFHIRResourceType](hkfhirresourcetype.md): The FHIR resource types supported in HealthKit.
- [sourceURL](hkfhirresource/sourceurl.md): The full URL for the source of the FHIR resource.
- [data](hkfhirresource/data.md): The JSON representation of the FHIR resource.
