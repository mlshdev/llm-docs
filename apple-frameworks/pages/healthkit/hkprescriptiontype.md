> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkprescriptiontype](https://developer.apple.com/documentation/healthkit/hkprescriptiontype)

# HKPrescriptionType (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

A type that identifies samples that store a prescription.

## Declaration

```swift
class HKPrescriptionType
```

<a id="overview"></a>

## Overview

The [HKPrescriptionType](hkprescriptiontype.md) class is a concrete subclass of the [HKSampleType](hksampletype.md) class. To create a vision prescription type instances, use the [visionPrescriptionType()](hkobjecttype/visionprescriptiontype%28%29.md) convenience method.

Use this data type to request permission to save vision prescriptions to the HealthKit store.

```swift
// Create the prescription data type.
let visionPrescriptionType = HKObjectType.visionPrescriptionType()

// Request authorization to save vision prescription samples.
store.requestAuthorization(toShare: [visionPrescriptionType],
                           read: []) { success, error in
    if let error {
        // Handle errors here.
        fatalError("*** An error occurred while requesting permission: \(error.localizedDescription) ***")
    }
}
```

> **Note**

> Important Vision prescription samples require per-object authorization. Requesting authorization to read these samples using [requestAuthorization(toShare:read:)](hkhealthstore/requestauthorization%28toshare_read_%29.md) fails with an error. Instead, use [requestPerObjectReadAuthorization(for:predicate:completion:)](hkhealthstore/requestperobjectreadauthorization%28for_predicate_completion_%29.md) to request authorization before querying for samples.

## Relationships

### Inherits From

- [HKSampleType](hksampletype.md)

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

### Vision prescriptions

- [HKVisionPrescription](hkvisionprescription.md): A sample that stores a vision prescription.
- [HKGlassesPrescription](hkglassesprescription.md): A sample that stores a prescription for glasses.
- [HKContactsPrescription](hkcontactsprescription.md): A sample that store a prescription for contacts.
- [HKGlassesLensSpecification](hkglasseslensspecification.md): An object that contains the glasses prescription data for one eye.
- [HKContactsLensSpecification](hkcontactslensspecification.md): An object that contains the contacts prescription data for one eye.
- [HKLensSpecification](hklensspecification.md): An abstract superclass for lens specifications.
- [HKVisionPrism](hkvisionprism.md): Prescription data for eye alignment.

# HKPrescriptionType (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

A type that identifies samples that store a prescription.

## Declaration

```objectivec
@interface HKPrescriptionType : HKSampleType
```

<a id="overview"></a>

## Overview

The [HKPrescriptionType](hkprescriptiontype.md) class is a concrete subclass of the [HKSampleType](hksampletype.md) class. To create a vision prescription type instances, use the [visionPrescriptionType](hkobjecttype/visionprescriptiontype%28%29.md) convenience method.

Use this data type to request permission to save vision prescriptions to the HealthKit store.

```swift
// Create the prescription data type.
let visionPrescriptionType = HKObjectType.visionPrescriptionType()

// Request authorization to save vision prescription samples.
store.requestAuthorization(toShare: [visionPrescriptionType],
                           read: []) { success, error in
    if let error {
        // Handle errors here.
        fatalError("*** An error occurred while requesting permission: \(error.localizedDescription) ***")
    }
}
```

> **Note**

> Important Vision prescription samples require per-object authorization. Requesting authorization to read these samples using [requestAuthorization(toShare:read:)](hkhealthstore/requestauthorization%28toshare_read_%29.md) fails with an error. Instead, use [requestPerObjectReadAuthorizationForType:predicate:completion:](hkhealthstore/requestperobjectreadauthorization%28for_predicate_completion_%29.md) to request authorization before querying for samples.

## Relationships

### Inherits From

- [HKSampleType](hksampletype.md)

## See Also

### Vision prescriptions

- [HKVisionPrescription](hkvisionprescription.md): A sample that stores a vision prescription.
- [HKGlassesPrescription](hkglassesprescription.md): A sample that stores a prescription for glasses.
- [HKContactsPrescription](hkcontactsprescription.md): A sample that store a prescription for contacts.
- [HKGlassesLensSpecification](hkglasseslensspecification.md): An object that contains the glasses prescription data for one eye.
- [HKContactsLensSpecification](hkcontactslensspecification.md): An object that contains the contacts prescription data for one eye.
- [HKLensSpecification](hklensspecification.md): An abstract superclass for lens specifications.
- [HKVisionPrism](hkvisionprism.md): Prescription data for eye alignment.
