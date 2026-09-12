> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcontactsprescription](https://developer.apple.com/documentation/healthkit/hkcontactsprescription)

# HKContactsPrescription (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

A sample that store a prescription for contacts.

## Declaration

```swift
class HKContactsPrescription
```

<a id="overview"></a>

## Overview

To create a sample that stores a contacts prescription, start by defining a specification for each eye. Each lens specification object requires a `sphere` parameter. This measures the lens’s strength for correcting either nearsightedness or farsightedness (measured in [diopter()](hkunit/diopter%28%29.md) units).

```swift
// The correction for farsightedness.
let sphere = HKQuantity(unit: .diopter(), doubleValue: -0.75)
```

Next, create values for any of the prescription’s optional parameters. For example, if the prescription corrects for astigmatism, create the `cylinder` and `axis` values. The `cylinder` value uses [diopter()](hkunit/diopter%28%29.md) units, while the `axis` uses [degreeAngle()](hkunit/degreeangle%28%29.md).

```swift
// The corrections for astigmatism.
let cylinder = HKQuantity(unit: .diopter(), doubleValue: -0.5)
let axis = HKQuantity(unit: .degreeAngle(), doubleValue: 155.0)
```

To add a multifocal correction for reading, create an `addPower` value using [diopter()](hkunit/diopter%28%29.md) units.

```swift
// Multifocal correction for reading.
let addPower = HKQuantity(unit: .diopter(), doubleValue: +2.00)
```

To add fitting information for the contact lens, create `baseCurve` and `diameter` values. Both of these values use millimeters.

```swift
// The fitting information.
let baseCurve = HKQuantity(unit: HKUnit.meterUnit(with: .milli),
                           doubleValue: 9.0)

let diameter = HKQuantity(unit: HKUnit.meterUnit(with: .milli),
                          doubleValue: 12.0)
```

Then you can create the [HKContactsLensSpecification](hkcontactslensspecification.md) lens specification.

```swift
// The prescription for the right eye.
let contactsRightEye = HKContactsLensSpecification(sphere: sphere,
                                                   cylinder: cylinder,
                                                   axis: axis,
                                                   addPower: addPower,
                                                   baseCurve: baseCurve,
                                                   diameter: diameter)
```

After you create your lens specifications, you can create an [HKContactsPrescription](hkcontactsprescription.md) sample.

```swift
// The date the doctor issued the prescription.
let dateIssued = Date()

// The date when the prescription expires.
let expirationDate = dateIssued.addingTimeInterval(60 * 24 * 365)

// The contacts prescription.
let prescription = HKContactsPrescription(rightEyeSpecification: contactsRightEye,
                                          leftEyeSpecification: contactsLeftEye,
                                          brand: "MyBrand Name",
                                          dateIssued: dateIssued,
                                          expirationDate: expirationDate,
                                          device: HKDevice.local(),
                                          metadata: nil)
```

Then save the sample to the HealthKit store.

```swift
// Save the sample to the HealthKit store.
do {
    try await store.save(prescription)
} catch {
    // Handle the error here.
    fatalError("*** An error occurred while saving the prescription sample to the HealthKit store \(error.localizedDescription) ***")
}
```

Finally, add an image or PDF of the prescription to the sample as an attachment.

```swift
// Get the attachment store.
let attachmentStore = HKAttachmentStore(healthStore: store)

// Attach the image to the sample.
do {
    _ = try await attachmentStore.addAttachment(to: prescription,
                                                name: "Glasses Prescription",
                                                contentType: type,
                                                url: url)
} catch {
    // Handle the error.
    fatalError("*** An error occurred while attaching the image: \(error.localizedDescription) ***")
}
```

> **Important**

>  Some regions may require an image of the original prescription to validate the prescription record. You can add an image or PDF of the prescription as an attachment. For more information about how to add an attachment, see [HKAttachmentStore](hkattachmentstore.md).

## Topics

### Creating contacts prescription samples

- [init(rightEyeSpecification:leftEyeSpecification:brand:dateIssued:expirationDate:device:metadata:)](hkcontactsprescription/init%28righteyespecification_lefteyespecification_brand_dateissued_expirationdate_device_metadata_%29.md): Creates a new glasses prescription sample.

### Accessing the contacts prescription data

- [brand](hkcontactsprescription/brand.md): The name of the prescribed brand, based on the contact lens fitting.
- [leftEye](hkcontactsprescription/lefteye.md): The lens specification for the left eye.
- [rightEye](hkcontactsprescription/righteye.md): The lens specification for the right eye.

## Relationships

### Inherits From

- [HKVisionPrescription](hkvisionprescription.md)

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
- [HKGlassesLensSpecification](hkglasseslensspecification.md): An object that contains the glasses prescription data for one eye.
- [HKContactsLensSpecification](hkcontactslensspecification.md): An object that contains the contacts prescription data for one eye.
- [HKLensSpecification](hklensspecification.md): An abstract superclass for lens specifications.
- [HKVisionPrism](hkvisionprism.md): Prescription data for eye alignment.
- [HKPrescriptionType](hkprescriptiontype.md): A type that identifies samples that store a prescription.

# HKContactsPrescription (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

A sample that store a prescription for contacts.

## Declaration

```objectivec
@interface HKContactsPrescription : HKVisionPrescription
```

<a id="overview"></a>

## Overview

To create a sample that stores a contacts prescription, start by defining a specification for each eye. Each lens specification object requires a `sphere` parameter. This measures the lens’s strength for correcting either nearsightedness or farsightedness (measured in [diopterUnit](hkunit/diopter%28%29.md) units).

```swift
// The correction for farsightedness.
let sphere = HKQuantity(unit: .diopter(), doubleValue: -0.75)
```

Next, create values for any of the prescription’s optional parameters. For example, if the prescription corrects for astigmatism, create the `cylinder` and `axis` values. The `cylinder` value uses [diopterUnit](hkunit/diopter%28%29.md) units, while the `axis` uses [degreeAngleUnit](hkunit/degreeangle%28%29.md).

```swift
// The corrections for astigmatism.
let cylinder = HKQuantity(unit: .diopter(), doubleValue: -0.5)
let axis = HKQuantity(unit: .degreeAngle(), doubleValue: 155.0)
```

To add a multifocal correction for reading, create an `addPower` value using [diopterUnit](hkunit/diopter%28%29.md) units.

```swift
// Multifocal correction for reading.
let addPower = HKQuantity(unit: .diopter(), doubleValue: +2.00)
```

To add fitting information for the contact lens, create `baseCurve` and `diameter` values. Both of these values use millimeters.

```swift
// The fitting information.
let baseCurve = HKQuantity(unit: HKUnit.meterUnit(with: .milli),
                           doubleValue: 9.0)

let diameter = HKQuantity(unit: HKUnit.meterUnit(with: .milli),
                          doubleValue: 12.0)
```

Then you can create the [HKContactsLensSpecification](hkcontactslensspecification.md) lens specification.

```swift
// The prescription for the right eye.
let contactsRightEye = HKContactsLensSpecification(sphere: sphere,
                                                   cylinder: cylinder,
                                                   axis: axis,
                                                   addPower: addPower,
                                                   baseCurve: baseCurve,
                                                   diameter: diameter)
```

After you create your lens specifications, you can create an [HKContactsPrescription](hkcontactsprescription.md) sample.

```swift
// The date the doctor issued the prescription.
let dateIssued = Date()

// The date when the prescription expires.
let expirationDate = dateIssued.addingTimeInterval(60 * 24 * 365)

// The contacts prescription.
let prescription = HKContactsPrescription(rightEyeSpecification: contactsRightEye,
                                          leftEyeSpecification: contactsLeftEye,
                                          brand: "MyBrand Name",
                                          dateIssued: dateIssued,
                                          expirationDate: expirationDate,
                                          device: HKDevice.local(),
                                          metadata: nil)
```

Then save the sample to the HealthKit store.

```swift
// Save the sample to the HealthKit store.
do {
    try await store.save(prescription)
} catch {
    // Handle the error here.
    fatalError("*** An error occurred while saving the prescription sample to the HealthKit store \(error.localizedDescription) ***")
}
```

Finally, add an image or PDF of the prescription to the sample as an attachment.

```swift
// Get the attachment store.
let attachmentStore = HKAttachmentStore(healthStore: store)

// Attach the image to the sample.
do {
    _ = try await attachmentStore.addAttachment(to: prescription,
                                                name: "Glasses Prescription",
                                                contentType: type,
                                                url: url)
} catch {
    // Handle the error.
    fatalError("*** An error occurred while attaching the image: \(error.localizedDescription) ***")
}
```

> **Important**

>  Some regions may require an image of the original prescription to validate the prescription record. You can add an image or PDF of the prescription as an attachment. For more information about how to add an attachment, see [HKAttachmentStore](hkattachmentstore.md).

## Topics

### Creating contacts prescription samples

- [prescriptionWithRightEyeSpecification:leftEyeSpecification:brand:dateIssued:expirationDate:device:metadata:](hkcontactsprescription/init%28righteyespecification_lefteyespecification_brand_dateissued_expirationdate_device_metadata_%29.md): Creates a new glasses prescription sample.

### Accessing the contacts prescription data

- [brand](hkcontactsprescription/brand.md): The name of the prescribed brand, based on the contact lens fitting.
- [leftEye](hkcontactsprescription/lefteye.md): The lens specification for the left eye.
- [rightEye](hkcontactsprescription/righteye.md): The lens specification for the right eye.

## Relationships

### Inherits From

- [HKVisionPrescription](hkvisionprescription.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Vision prescriptions

- [HKVisionPrescription](hkvisionprescription.md): A sample that stores a vision prescription.
- [HKGlassesPrescription](hkglassesprescription.md): A sample that stores a prescription for glasses.
- [HKGlassesLensSpecification](hkglasseslensspecification.md): An object that contains the glasses prescription data for one eye.
- [HKContactsLensSpecification](hkcontactslensspecification.md): An object that contains the contacts prescription data for one eye.
- [HKLensSpecification](hklensspecification.md): An abstract superclass for lens specifications.
- [HKVisionPrism](hkvisionprism.md): Prescription data for eye alignment.
- [HKPrescriptionType](hkprescriptiontype.md): A type that identifies samples that store a prescription.
