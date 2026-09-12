> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkvisionprescription/init(type:dateissued:expirationdate:device:metadata:)](https://developer.apple.com/documentation/healthkit/hkvisionprescription/init(type:dateissued:expirationdate:device:metadata:))

# init(type:dateIssued:expirationDate:device:metadata:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a new vision prescription sample.

## Declaration

```swift
convenience init(type: HKVisionPrescriptionType, dateIssued: Date, expirationDate: Date?, device: HKDevice?, metadata: [String : Any]?)
```

## Parameters

- `type`: A value that indicates the type of prescription. For a list of possible values, see [HKVisionPrescriptionType](../hkvisionprescriptiontype.md).
- `dateIssued`: The date when the doctor issued the prescription.
- `expirationDate`: The date when the prescription expires.
- `device`: The device that generated the sample.
- `metadata`: Additional metadata about the sample.

<a id="Discussion"></a>

## Discussion

Use this initializer to create an image-only prescription. Here, you attach the prescription as an image or PDF to a simple sample. The sample contains only basic information about the prescription, such as the issue and expiration dates. To see the prescription data, people must view the attached image or PDF.

To create a vision prescription sample that contains the full data for the prescription, use [HKGlassesPrescription](../hkglassesprescription.md) or [HKContactsPrescription](../hkcontactsprescription.md) instead.

## See Also

### Related Documentation

- [HKGlassesPrescription](../hkglassesprescription.md): A sample that stores a prescription for glasses.
- [HKContactsPrescription](../hkcontactsprescription.md): A sample that store a prescription for contacts.

# prescriptionWithType:dateIssued:expirationDate:device:metadata: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a new vision prescription sample.

## Declaration

```objectivec
+ (instancetype) prescriptionWithType:(HKVisionPrescriptionType) type dateIssued:(NSDate *) dateIssued expirationDate:(NSDate *) expirationDate device:(HKDevice *) device metadata:(NSDictionary<NSString *,id> *) metadata;
```

## Parameters

- `type`: A value that indicates the type of prescription. For a list of possible values, see [HKVisionPrescriptionType](../hkvisionprescriptiontype.md).
- `dateIssued`: The date when the doctor issued the prescription.
- `expirationDate`: The date when the prescription expires.
- `device`: The device that generated the sample.
- `metadata`: Additional metadata about the sample.

<a id="Discussion"></a>

## Discussion

Use this initializer to create an image-only prescription. Here, you attach the prescription as an image or PDF to a simple sample. The sample contains only basic information about the prescription, such as the issue and expiration dates. To see the prescription data, people must view the attached image or PDF.

To create a vision prescription sample that contains the full data for the prescription, use [HKGlassesPrescription](../hkglassesprescription.md) or [HKContactsPrescription](../hkcontactsprescription.md) instead.

## See Also

### Related Documentation

- [HKGlassesPrescription](../hkglassesprescription.md): A sample that stores a prescription for glasses.
- [HKContactsPrescription](../hkcontactsprescription.md): A sample that store a prescription for contacts.
