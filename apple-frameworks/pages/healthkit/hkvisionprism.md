> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkvisionprism](https://developer.apple.com/documentation/healthkit/hkvisionprism)

# HKVisionPrism (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Prescription data for eye alignment.

## Declaration

```swift
class HKVisionPrism
```

<a id="overview"></a>

## Overview

To include prism information in a glasses prescription, start by creating an [HKVisionPrism](hkvisionprism.md) object.

```swift
// The correction for eye alignment.
let prismQuantity = HKQuantity(unit: .prismDiopter(), doubleValue: +0.25)
let angle = HKQuantity(unit: .degreeAngle(), doubleValue: 15.0)
let prism = HKVisionPrism(amount: prismQuantity,
                          angle: angle,
                          eye: .right)
```

Then, pass this value to the [HKGlassesLensSpecification](hkglasseslensspecification.md)’s initializer.

```swift
// The prescription for the right eye.
let glassesRightEye = HKGlassesLensSpecification(sphere: sphere,
                                                 cylinder: cylinder,
                                                 axis: axis,
                                                 addPower: addPower,
                                                 vertexDistance: vertexDistance,
                                                 prism: prism,
                                                 farPupillaryDistance: farDistance,
                                                 nearPupillaryDistance: nearDistance)
```

Finally, create the glasses prescription and save it to the HealthKit store.

```swift
// The glasses prescription.
let prescription = HKGlassesPrescription(rightEyeSpecification: glassesRightEye,
                                               leftEyeSpecification: glassesLeftEye,
                                               dateIssued: dateIssued,
                                               expirationDate: expirationDate,
                                               device: HKDevice.local(),
                                               metadata: nil)
// Save the sample to the HealthKit store.
do {
    try await store.save(prescription)
} catch {
    // Handle the error here.
    fatalError("*** An error occurred while saving the prescription sample to the HealthKit store \(error.localizedDescription) ***")
}
```

## Topics

### Creating vision prism objects

- [init(amount:angle:eye:)](hkvisionprism/init%28amount_angle_eye_%29.md): Creates a new vision prism object, using a single quantity and an alignment angle.
- [init(verticalAmount:verticalBase:horizontalAmount:horizontalBase:eye:)](hkvisionprism/init%28verticalamount_verticalbase_horizontalamount_horizontalbase_eye_%29.md): Creates a new vision prism object that separates the correction strength into horizontal and vertical components.

### Accessing lens specification data

- [eye](hkvisionprism/eye.md): A value indicating which eye the correction applies to.
- [HKVisionEye](hkvisioneye.md): A value that specifies the eye for a vision prescription.
- [amount](hkvisionprism/amount.md): The strength of the correction.
- [angle](hkvisionprism/angle.md): The orientation of the adjustment.
- [horizontalAmount](hkvisionprism/horizontalamount.md): The strength of the horizontal correction.
- [horizontalBase](hkvisionprism/horizontalbase.md): The orientation of the horizontal portion of the correction.
- [verticalAmount](hkvisionprism/verticalamount.md): The strength of the vertical correction.
- [verticalBase](hkvisionprism/verticalbase.md): The orientation of the vertical portion of the correction.
- [HKPrismBase](hkprismbase.md): The orientation of the prism correction, represented by the location of the prism’s base (the thickest part of the prism).

### Initializers

- [init(coder:)](hkvisionprism/init%28coder_%29.md)

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

### Vision prescriptions

- [HKVisionPrescription](hkvisionprescription.md): A sample that stores a vision prescription.
- [HKGlassesPrescription](hkglassesprescription.md): A sample that stores a prescription for glasses.
- [HKContactsPrescription](hkcontactsprescription.md): A sample that store a prescription for contacts.
- [HKGlassesLensSpecification](hkglasseslensspecification.md): An object that contains the glasses prescription data for one eye.
- [HKContactsLensSpecification](hkcontactslensspecification.md): An object that contains the contacts prescription data for one eye.
- [HKLensSpecification](hklensspecification.md): An abstract superclass for lens specifications.
- [HKPrescriptionType](hkprescriptiontype.md): A type that identifies samples that store a prescription.

# HKVisionPrism (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Prescription data for eye alignment.

## Declaration

```objectivec
@interface HKVisionPrism : NSObject
```

<a id="overview"></a>

## Overview

To include prism information in a glasses prescription, start by creating an [HKVisionPrism](hkvisionprism.md) object.

```swift
// The correction for eye alignment.
let prismQuantity = HKQuantity(unit: .prismDiopter(), doubleValue: +0.25)
let angle = HKQuantity(unit: .degreeAngle(), doubleValue: 15.0)
let prism = HKVisionPrism(amount: prismQuantity,
                          angle: angle,
                          eye: .right)
```

Then, pass this value to the [HKGlassesLensSpecification](hkglasseslensspecification.md)’s initializer.

```swift
// The prescription for the right eye.
let glassesRightEye = HKGlassesLensSpecification(sphere: sphere,
                                                 cylinder: cylinder,
                                                 axis: axis,
                                                 addPower: addPower,
                                                 vertexDistance: vertexDistance,
                                                 prism: prism,
                                                 farPupillaryDistance: farDistance,
                                                 nearPupillaryDistance: nearDistance)
```

Finally, create the glasses prescription and save it to the HealthKit store.

```swift
// The glasses prescription.
let prescription = HKGlassesPrescription(rightEyeSpecification: glassesRightEye,
                                               leftEyeSpecification: glassesLeftEye,
                                               dateIssued: dateIssued,
                                               expirationDate: expirationDate,
                                               device: HKDevice.local(),
                                               metadata: nil)
// Save the sample to the HealthKit store.
do {
    try await store.save(prescription)
} catch {
    // Handle the error here.
    fatalError("*** An error occurred while saving the prescription sample to the HealthKit store \(error.localizedDescription) ***")
}
```

## Topics

### Creating vision prism objects

- [initWithAmount:angle:eye:](hkvisionprism/init%28amount_angle_eye_%29.md): Creates a new vision prism object, using a single quantity and an alignment angle.
- [initWithVerticalAmount:verticalBase:horizontalAmount:horizontalBase:eye:](hkvisionprism/init%28verticalamount_verticalbase_horizontalamount_horizontalbase_eye_%29.md): Creates a new vision prism object that separates the correction strength into horizontal and vertical components.

### Accessing lens specification data

- [eye](hkvisionprism/eye.md): A value indicating which eye the correction applies to.
- [HKVisionEye](hkvisioneye.md): A value that specifies the eye for a vision prescription.
- [amount](hkvisionprism/amount.md): The strength of the correction.
- [angle](hkvisionprism/angle.md): The orientation of the adjustment.
- [horizontalAmount](hkvisionprism/horizontalamount.md): The strength of the horizontal correction.
- [horizontalBase](hkvisionprism/horizontalbase.md): The orientation of the horizontal portion of the correction.
- [verticalAmount](hkvisionprism/verticalamount.md): The strength of the vertical correction.
- [verticalBase](hkvisionprism/verticalbase.md): The orientation of the vertical portion of the correction.
- [HKPrismBase](hkprismbase.md): The orientation of the prism correction, represented by the location of the prism’s base (the thickest part of the prism).

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Vision prescriptions

- [HKVisionPrescription](hkvisionprescription.md): A sample that stores a vision prescription.
- [HKGlassesPrescription](hkglassesprescription.md): A sample that stores a prescription for glasses.
- [HKContactsPrescription](hkcontactsprescription.md): A sample that store a prescription for contacts.
- [HKGlassesLensSpecification](hkglasseslensspecification.md): An object that contains the glasses prescription data for one eye.
- [HKContactsLensSpecification](hkcontactslensspecification.md): An object that contains the contacts prescription data for one eye.
- [HKLensSpecification](hklensspecification.md): An abstract superclass for lens specifications.
- [HKPrescriptionType](hkprescriptiontype.md): A type that identifies samples that store a prescription.
