> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hklensspecification](https://developer.apple.com/documentation/healthkit/hklensspecification)

# HKLensSpecification (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

An abstract superclass for lens specifications.

## Declaration

```swift
class HKLensSpecification
```

<a id="overview"></a>

## Overview

Don’t instantiate this class directly. Instead, use one of its concrete subclasses: [HKGlassesLensSpecification](hkglasseslensspecification.md) or [HKContactsLensSpecification](hkcontactslensspecification.md).

## Topics

### Accessing lens specification data

- [sphere](hklensspecification/sphere.md): The correction for farsightedness.
- [cylinder](hklensspecification/cylinder.md): Part of the correction for astigmatism that measures the strength of the correction.
- [axis](hklensspecification/axis.md): Part of the correction for astigmatism that measures the orientation fo the correction.
- [addPower](hklensspecification/addpower.md): The correction for nearsightedness.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [HKContactsLensSpecification](hkcontactslensspecification.md)
- [HKGlassesLensSpecification](hkglasseslensspecification.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Vision prescriptions

- [HKVisionPrescription](hkvisionprescription.md): A sample that stores a vision prescription.
- [HKGlassesPrescription](hkglassesprescription.md): A sample that stores a prescription for glasses.
- [HKContactsPrescription](hkcontactsprescription.md): A sample that store a prescription for contacts.
- [HKGlassesLensSpecification](hkglasseslensspecification.md): An object that contains the glasses prescription data for one eye.
- [HKContactsLensSpecification](hkcontactslensspecification.md): An object that contains the contacts prescription data for one eye.
- [HKVisionPrism](hkvisionprism.md): Prescription data for eye alignment.
- [HKPrescriptionType](hkprescriptiontype.md): A type that identifies samples that store a prescription.

# HKLensSpecification (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

An abstract superclass for lens specifications.

## Declaration

```objectivec
@interface HKLensSpecification : NSObject
```

<a id="overview"></a>

## Overview

Don’t instantiate this class directly. Instead, use one of its concrete subclasses: [HKGlassesLensSpecification](hkglasseslensspecification.md) or [HKContactsLensSpecification](hkcontactslensspecification.md).

## Topics

### Accessing lens specification data

- [sphere](hklensspecification/sphere.md): The correction for farsightedness.
- [cylinder](hklensspecification/cylinder.md): Part of the correction for astigmatism that measures the strength of the correction.
- [axis](hklensspecification/axis.md): Part of the correction for astigmatism that measures the orientation fo the correction.
- [addPower](hklensspecification/addpower.md): The correction for nearsightedness.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [HKContactsLensSpecification](hkcontactslensspecification.md)
- [HKGlassesLensSpecification](hkglasseslensspecification.md)

## See Also

### Vision prescriptions

- [HKVisionPrescription](hkvisionprescription.md): A sample that stores a vision prescription.
- [HKGlassesPrescription](hkglassesprescription.md): A sample that stores a prescription for glasses.
- [HKContactsPrescription](hkcontactsprescription.md): A sample that store a prescription for contacts.
- [HKGlassesLensSpecification](hkglasseslensspecification.md): An object that contains the glasses prescription data for one eye.
- [HKContactsLensSpecification](hkcontactslensspecification.md): An object that contains the contacts prescription data for one eye.
- [HKVisionPrism](hkvisionprism.md): Prescription data for eye alignment.
- [HKPrescriptionType](hkprescriptiontype.md): A type that identifies samples that store a prescription.
