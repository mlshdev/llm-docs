> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkelectrocardiogram/averageheartrate](https://developer.apple.com/documentation/healthkit/hkelectrocardiogram/averageheartrate)

# averageHeartRate (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

The user’s average heart rate during the ECG.

## Declaration

```swift
@NSCopying var averageHeartRate: HKQuantity? { get }
```

## See Also

### Accessing Overview Information

- [classification](classification-swift.property.md): The ECG’s classification.
- [HKElectrocardiogram.Classification](classification-swift.enum.md): Classifications returned by Apple Watch’s ECG algorithm.
- [symptomsStatus](symptomsstatus-swift.property.md): A value that indicates whether the user entered a symptom when they recorded the ECG.
- [HKElectrocardiogram.SymptomsStatus](symptomsstatus-swift.enum.md): Values indicating whether the user entered a symptom when they recorded the ECG.

# averageHeartRate (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

The user’s average heart rate during the ECG.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) HKQuantity * averageHeartRate;
```

## See Also

### Accessing Overview Information

- [classification](classification-swift.property.md): The ECG’s classification.
- [HKElectrocardiogramClassification](classification-swift.enum.md): Classifications returned by Apple Watch’s ECG algorithm.
- [symptomsStatus](symptomsstatus-swift.property.md): A value that indicates whether the user entered a symptom when they recorded the ECG.
- [HKElectrocardiogramSymptomsStatus](symptomsstatus-swift.enum.md): Values indicating whether the user entered a symptom when they recorded the ECG.
