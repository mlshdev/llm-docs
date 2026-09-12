> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkelectrocardiogram/symptomsstatus-swift.property](https://developer.apple.com/documentation/healthkit/hkelectrocardiogram/symptomsstatus-swift.property)

# symptomsStatus (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

A value that indicates whether the user entered a symptom when they recorded the ECG.

## Declaration

```swift
var symptomsStatus: HKElectrocardiogram.SymptomsStatus { get }
```

<a id="Discussion"></a>

## Discussion

If the value is [HKElectrocardiogram.SymptomsStatus.present](symptomsstatus-swift.enum/present.md), you can access the symptoms by querying for the [HKCategorySample](../hkcategorysample.md) samples associated with the electrocardiogram sample. Use [predicateForObjectsAssociated(electrocardiogram:)](../hkquery/predicateforobjectsassociated%28electrocardiogram_%29.md) to create the predicate for the associated symptoms.

## See Also

### Accessing Overview Information

- [classification](classification-swift.property.md): The ECG’s classification.
- [HKElectrocardiogram.Classification](classification-swift.enum.md): Classifications returned by Apple Watch’s ECG algorithm.
- [averageHeartRate](averageheartrate.md): The user’s average heart rate during the ECG.
- [HKElectrocardiogram.SymptomsStatus](symptomsstatus-swift.enum.md): Values indicating whether the user entered a symptom when they recorded the ECG.

# symptomsStatus (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

A value that indicates whether the user entered a symptom when they recorded the ECG.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) HKElectrocardiogramSymptomsStatus symptomsStatus;
```

<a id="Discussion"></a>

## Discussion

If the value is [HKElectrocardiogramSymptomsStatusPresent](symptomsstatus-swift.enum/present.md), you can access the symptoms by querying for the [HKCategorySample](../hkcategorysample.md) samples associated with the electrocardiogram sample. Use [predicateForObjectsAssociatedWithElectrocardiogram:](../hkquery/predicateforobjectsassociated%28electrocardiogram_%29.md) to create the predicate for the associated symptoms.

## See Also

### Accessing Overview Information

- [classification](classification-swift.property.md): The ECG’s classification.
- [HKElectrocardiogramClassification](classification-swift.enum.md): Classifications returned by Apple Watch’s ECG algorithm.
- [averageHeartRate](averageheartrate.md): The user’s average heart rate during the ECG.
- [HKElectrocardiogramSymptomsStatus](symptomsstatus-swift.enum.md): Values indicating whether the user entered a symptom when they recorded the ECG.
