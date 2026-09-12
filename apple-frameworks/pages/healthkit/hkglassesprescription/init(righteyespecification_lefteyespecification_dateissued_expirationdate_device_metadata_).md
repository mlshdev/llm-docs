> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkglassesprescription/init(righteyespecification:lefteyespecification:dateissued:expirationdate:device:metadata:)](https://developer.apple.com/documentation/healthkit/hkglassesprescription/init(righteyespecification:lefteyespecification:dateissued:expirationdate:device:metadata:))

# init(rightEyeSpecification:leftEyeSpecification:dateIssued:expirationDate:device:metadata:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a new glasses prescription sample.

## Declaration

```swift
convenience init(rightEyeSpecification: HKGlassesLensSpecification?, leftEyeSpecification: HKGlassesLensSpecification?, dateIssued: Date, expirationDate: Date?, device: HKDevice?, metadata: [String : Any]?)
```

## Parameters

- `rightEyeSpecification`: The lens specification for the right eye.
- `leftEyeSpecification`: The lens specification for the left eye.
- `dateIssued`: The date when the doctor issued the prescription.
- `expirationDate`: The date when the prescription expires.
- `device`: The device that generated the sample.
- `metadata`: Additional metadata about the sample.

# prescriptionWithRightEyeSpecification:leftEyeSpecification:dateIssued:expirationDate:device:metadata: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a new glasses prescription sample.

## Declaration

```objectivec
+ (instancetype) prescriptionWithRightEyeSpecification:(HKGlassesLensSpecification *) rightEyeSpecification leftEyeSpecification:(HKGlassesLensSpecification *) leftEyeSpecification dateIssued:(NSDate *) dateIssued expirationDate:(NSDate *) expirationDate device:(HKDevice *) device metadata:(NSDictionary<NSString *,id> *) metadata;
```

## Parameters

- `rightEyeSpecification`: The lens specification for the right eye.
- `leftEyeSpecification`: The lens specification for the left eye.
- `dateIssued`: The date when the doctor issued the prescription.
- `expirationDate`: The date when the prescription expires.
- `device`: The device that generated the sample.
- `metadata`: Additional metadata about the sample.
