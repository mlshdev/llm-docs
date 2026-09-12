> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkvisionprescriptiontype](https://developer.apple.com/documentation/healthkit/hkvisionprescriptiontype)

# HKVisionPrescriptionType (Swift)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The type of vision prescription, for example a prescription for glasses or for contacts.

## Declaration

```swift
enum HKVisionPrescriptionType
```

## Topics

### Prescription types

- [HKVisionPrescriptionType.glasses](hkvisionprescriptiontype/glasses.md): A prescription for glasses.
- [HKVisionPrescriptionType.contacts](hkvisionprescriptiontype/contacts.md): A prescription for contacts.

### Initializers

- [init(rawValue:)](hkvisionprescriptiontype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing the prescription data

- [prescriptionType](hkvisionprescription/prescriptiontype.md): The type of vision prescription.
- [dateIssued](hkvisionprescription/dateissued.md): The date when the doctor issued the prescription.
- [expirationDate](hkvisionprescription/expirationdate.md): The date when the prescription expires.

# HKVisionPrescriptionType (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The type of vision prescription, for example a prescription for glasses or for contacts.

## Declaration

```objectivec
enum HKVisionPrescriptionType : NSUInteger;
```

## Topics

### Prescription types

- [HKVisionPrescriptionTypeGlasses](hkvisionprescriptiontype/glasses.md): A prescription for glasses.
- [HKVisionPrescriptionTypeContacts](hkvisionprescriptiontype/contacts.md): A prescription for contacts.

## See Also

### Accessing the prescription data

- [prescriptionType](hkvisionprescription/prescriptiontype.md): The type of vision prescription.
- [dateIssued](hkvisionprescription/dateissued.md): The date when the doctor issued the prescription.
- [expirationDate](hkvisionprescription/expirationdate.md): The date when the prescription expires.
