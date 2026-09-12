> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkelectrocardiogram/classification-swift.enum](https://developer.apple.com/documentation/healthkit/hkelectrocardiogram/classification-swift.enum)

# HKElectrocardiogram.Classification (Swift)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Classifications returned by Apple Watch’s ECG algorithm.

## Declaration

```swift
enum Classification
```

## Topics

### Classifications

- [HKElectrocardiogram.Classification.sinusRhythm](classification-swift.enum/sinusrhythm.md): The sample exhibits no signs of atrial fibrillation.
- [HKElectrocardiogram.Classification.atrialFibrillation](classification-swift.enum/atrialfibrillation.md): The sample exhibits signs of atrial fibrillation.
- [HKElectrocardiogram.Classification.inconclusiveHighHeartRate](classification-swift.enum/inconclusivehighheartrate.md): An unclassifiable sample caused by a rapid heart rate.
- [HKElectrocardiogram.Classification.inconclusiveLowHeartRate](classification-swift.enum/inconclusivelowheartrate.md): An unclassifiable sample caused by a heart rate below 50 bpm.
- [HKElectrocardiogram.Classification.inconclusivePoorReading](classification-swift.enum/inconclusivepoorreading.md): An unclassifiable sample caused by an unclear signal.
- [HKElectrocardiogram.Classification.inconclusiveOther](classification-swift.enum/inconclusiveother.md): An unclassifiable sample caused by an unknown issue.
- [HKElectrocardiogram.Classification.unrecognized](classification-swift.enum/unrecognized.md): A sample classification that this version of HealthKit doesn’t recognize.
- [HKElectrocardiogram.Classification.notSet](classification-swift.enum/notset.md): A sample that doesn’t have an assigned classification.

### Initializers

- [init(rawValue:)](classification-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing Overview Information

- [classification](classification-swift.property.md): The ECG’s classification.
- [averageHeartRate](averageheartrate.md): The user’s average heart rate during the ECG.
- [symptomsStatus](symptomsstatus-swift.property.md): A value that indicates whether the user entered a symptom when they recorded the ECG.
- [HKElectrocardiogram.SymptomsStatus](symptomsstatus-swift.enum.md): Values indicating whether the user entered a symptom when they recorded the ECG.

# HKElectrocardiogramClassification (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Classifications returned by Apple Watch’s ECG algorithm.

## Declaration

```objectivec
enum HKElectrocardiogramClassification : NSInteger;
```

## Topics

### Classifications

- [HKElectrocardiogramClassificationSinusRhythm](classification-swift.enum/sinusrhythm.md): The sample exhibits no signs of atrial fibrillation.
- [HKElectrocardiogramClassificationAtrialFibrillation](classification-swift.enum/atrialfibrillation.md): The sample exhibits signs of atrial fibrillation.
- [HKElectrocardiogramClassificationInconclusiveHighHeartRate](classification-swift.enum/inconclusivehighheartrate.md): An unclassifiable sample caused by a rapid heart rate.
- [HKElectrocardiogramClassificationInconclusiveLowHeartRate](classification-swift.enum/inconclusivelowheartrate.md): An unclassifiable sample caused by a heart rate below 50 bpm.
- [HKElectrocardiogramClassificationInconclusivePoorReading](classification-swift.enum/inconclusivepoorreading.md): An unclassifiable sample caused by an unclear signal.
- [HKElectrocardiogramClassificationInconclusiveOther](classification-swift.enum/inconclusiveother.md): An unclassifiable sample caused by an unknown issue.
- [HKElectrocardiogramClassificationUnrecognized](classification-swift.enum/unrecognized.md): A sample classification that this version of HealthKit doesn’t recognize.
- [HKElectrocardiogramClassificationNotSet](classification-swift.enum/notset.md): A sample that doesn’t have an assigned classification.

## See Also

### Accessing Overview Information

- [classification](classification-swift.property.md): The ECG’s classification.
- [averageHeartRate](averageheartrate.md): The user’s average heart rate during the ECG.
- [symptomsStatus](symptomsstatus-swift.property.md): A value that indicates whether the user entered a symptom when they recorded the ECG.
- [HKElectrocardiogramSymptomsStatus](symptomsstatus-swift.enum.md): Values indicating whether the user entered a symptom when they recorded the ECG.
