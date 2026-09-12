> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkelectrocardiogram/classification-swift.property](https://developer.apple.com/documentation/healthkit/hkelectrocardiogram/classification-swift.property)

# classification (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

The ECG’s classification.

## Declaration

```swift
var classification: HKElectrocardiogram.Classification { get }
```

## See Also

### Accessing Overview Information

- [HKElectrocardiogram.Classification](classification-swift.enum.md): Classifications returned by Apple Watch’s ECG algorithm.
- [averageHeartRate](averageheartrate.md): The user’s average heart rate during the ECG.
- [symptomsStatus](symptomsstatus-swift.property.md): A value that indicates whether the user entered a symptom when they recorded the ECG.
- [HKElectrocardiogram.SymptomsStatus](symptomsstatus-swift.enum.md): Values indicating whether the user entered a symptom when they recorded the ECG.

# classification (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

The ECG’s classification.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) HKElectrocardiogramClassification classification;
```

## See Also

### Accessing Overview Information

- [HKElectrocardiogramClassification](classification-swift.enum.md): Classifications returned by Apple Watch’s ECG algorithm.
- [averageHeartRate](averageheartrate.md): The user’s average heart rate during the ECG.
- [symptomsStatus](symptomsstatus-swift.property.md): A value that indicates whether the user entered a symptom when they recorded the ECG.
- [HKElectrocardiogramSymptomsStatus](symptomsstatus-swift.enum.md): Values indicating whether the user entered a symptom when they recorded the ECG.
