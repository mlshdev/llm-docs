> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkvisionprescription/prescriptiontype](https://developer.apple.com/documentation/healthkit/hkvisionprescription/prescriptiontype)

# prescriptionType (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The type of vision prescription.

## Declaration

```swift
var prescriptionType: HKVisionPrescriptionType { get }
```

<a id="Discussion"></a>

## Discussion

This property contains a value that indicates the type of prescription. For a list of possible values, see [HKVisionPrescriptionType](../hkvisionprescriptiontype.md).

## See Also

### Related Documentation

- [HKGlassesPrescription](../hkglassesprescription.md): A sample that stores a prescription for glasses.
- [HKContactsPrescription](../hkcontactsprescription.md): A sample that store a prescription for contacts.

### Accessing the prescription data

- [HKVisionPrescriptionType](../hkvisionprescriptiontype.md): The type of vision prescription, for example a prescription for glasses or for contacts.
- [dateIssued](dateissued.md): The date when the doctor issued the prescription.
- [expirationDate](expirationdate.md): The date when the prescription expires.

# prescriptionType (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The type of vision prescription.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) HKVisionPrescriptionType prescriptionType;
```

<a id="Discussion"></a>

## Discussion

This property contains a value that indicates the type of prescription. For a list of possible values, see [HKVisionPrescriptionType](../hkvisionprescriptiontype.md).

## See Also

### Related Documentation

- [HKGlassesPrescription](../hkglassesprescription.md): A sample that stores a prescription for glasses.
- [HKContactsPrescription](../hkcontactsprescription.md): A sample that store a prescription for contacts.

### Accessing the prescription data

- [HKVisionPrescriptionType](../hkvisionprescriptiontype.md): The type of vision prescription, for example a prescription for glasses or for contacts.
- [dateIssued](dateissued.md): The date when the doctor issued the prescription.
- [expirationDate](expirationdate.md): The date when the prescription expires.
