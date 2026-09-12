> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkvisionprescription](https://developer.apple.com/documentation/healthkit/hkvisionprescription)

# HKVisionPrescription (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

A sample that stores a vision prescription.

## Declaration

```swift
class HKVisionPrescription
```

<a id="overview"></a>

## Overview

Use this class to create an image-only prescription. Here, you attach the prescription as an image or PDF to a simple sample. The sample contains only basic information about the prescription, such as the issue and expiration dates. To see the prescription data, people must view the attached image or PDF.

> **Important**

>  Some regions may require an image of the original prescription to validate the prescription record.

To create an image-only prescription, start by creating an [HKVisionPrescription](hkvisionprescription.md) sample object.

```swift
// Create a minimal prescription sample that just holds an image attachment.
let prescription = HKVisionPrescription(type: .glasses,
                                        dateIssued: Date(),
                                        expirationDate: nil,
                                        device: HKDevice.local(),
                                        metadata: nil)
```

Next, save the sample to the HealthKit store.

```swift
// Save the sample to the HealthKit store.
do {
    try await store.save(prescription)
} catch {
    // Handle the error here.
    fatalError("*** An error occurred while saving the prescription sample to the HealthKit store \(error.localizedDescription) ***")
}
```

Then, you can attach the image or PDF to the sample.

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

For more information about adding images or pdfs as attachments, see [HKAttachmentStore](hkattachmentstore.md). To create a vision prescription sample that contains the full data for the prescription, use [HKGlassesPrescription](hkglassesprescription.md) or [HKContactsPrescription](hkcontactsprescription.md) instead.

## Topics

### Creating vision prescription samples

- [init(type:dateIssued:expirationDate:device:metadata:)](hkvisionprescription/init%28type_dateissued_expirationdate_device_metadata_%29.md): Creates a new vision prescription sample.

### Accessing the prescription data

- [prescriptionType](hkvisionprescription/prescriptiontype.md): The type of vision prescription.
- [HKVisionPrescriptionType](hkvisionprescriptiontype.md): The type of vision prescription, for example a prescription for glasses or for contacts.
- [dateIssued](hkvisionprescription/dateissued.md): The date when the doctor issued the prescription.
- [expirationDate](hkvisionprescription/expirationdate.md): The date when the prescription expires.

## Relationships

### Inherits From

- [HKSample](hksample.md)

### Inherited By

- [HKContactsPrescription](hkcontactsprescription.md)
- [HKGlassesPrescription](hkglassesprescription.md)

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

- [HKGlassesPrescription](hkglassesprescription.md): A sample that stores a prescription for glasses.
- [HKContactsPrescription](hkcontactsprescription.md): A sample that store a prescription for contacts.
- [HKGlassesLensSpecification](hkglasseslensspecification.md): An object that contains the glasses prescription data for one eye.
- [HKContactsLensSpecification](hkcontactslensspecification.md): An object that contains the contacts prescription data for one eye.
- [HKLensSpecification](hklensspecification.md): An abstract superclass for lens specifications.
- [HKVisionPrism](hkvisionprism.md): Prescription data for eye alignment.
- [HKPrescriptionType](hkprescriptiontype.md): A type that identifies samples that store a prescription.

# HKVisionPrescription (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

A sample that stores a vision prescription.

## Declaration

```objectivec
@interface HKVisionPrescription : HKSample
```

<a id="overview"></a>

## Overview

Use this class to create an image-only prescription. Here, you attach the prescription as an image or PDF to a simple sample. The sample contains only basic information about the prescription, such as the issue and expiration dates. To see the prescription data, people must view the attached image or PDF.

> **Important**

>  Some regions may require an image of the original prescription to validate the prescription record.

To create an image-only prescription, start by creating an [HKVisionPrescription](hkvisionprescription.md) sample object.

```swift
// Create a minimal prescription sample that just holds an image attachment.
let prescription = HKVisionPrescription(type: .glasses,
                                        dateIssued: Date(),
                                        expirationDate: nil,
                                        device: HKDevice.local(),
                                        metadata: nil)
```

Next, save the sample to the HealthKit store.

```swift
// Save the sample to the HealthKit store.
do {
    try await store.save(prescription)
} catch {
    // Handle the error here.
    fatalError("*** An error occurred while saving the prescription sample to the HealthKit store \(error.localizedDescription) ***")
}
```

Then, you can attach the image or PDF to the sample.

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

For more information about adding images or pdfs as attachments, see [HKAttachmentStore](hkattachmentstore.md). To create a vision prescription sample that contains the full data for the prescription, use [HKGlassesPrescription](hkglassesprescription.md) or [HKContactsPrescription](hkcontactsprescription.md) instead.

## Topics

### Creating vision prescription samples

- [prescriptionWithType:dateIssued:expirationDate:device:metadata:](hkvisionprescription/init%28type_dateissued_expirationdate_device_metadata_%29.md): Creates a new vision prescription sample.

### Accessing the prescription data

- [prescriptionType](hkvisionprescription/prescriptiontype.md): The type of vision prescription.
- [HKVisionPrescriptionType](hkvisionprescriptiontype.md): The type of vision prescription, for example a prescription for glasses or for contacts.
- [dateIssued](hkvisionprescription/dateissued.md): The date when the doctor issued the prescription.
- [expirationDate](hkvisionprescription/expirationdate.md): The date when the prescription expires.

## Relationships

### Inherits From

- [HKSample](hksample.md)

### Inherited By

- [HKContactsPrescription](hkcontactsprescription.md)
- [HKGlassesPrescription](hkglassesprescription.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Vision prescriptions

- [HKGlassesPrescription](hkglassesprescription.md): A sample that stores a prescription for glasses.
- [HKContactsPrescription](hkcontactsprescription.md): A sample that store a prescription for contacts.
- [HKGlassesLensSpecification](hkglasseslensspecification.md): An object that contains the glasses prescription data for one eye.
- [HKContactsLensSpecification](hkcontactslensspecification.md): An object that contains the contacts prescription data for one eye.
- [HKLensSpecification](hklensspecification.md): An abstract superclass for lens specifications.
- [HKVisionPrism](hkvisionprism.md): Prescription data for eye alignment.
- [HKPrescriptionType](hkprescriptiontype.md): A type that identifies samples that store a prescription.
