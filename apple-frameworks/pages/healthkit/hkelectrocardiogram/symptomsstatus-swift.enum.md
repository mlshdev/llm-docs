> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkelectrocardiogram/symptomsstatus-swift.enum](https://developer.apple.com/documentation/healthkit/hkelectrocardiogram/symptomsstatus-swift.enum)

# HKElectrocardiogram.SymptomsStatus (Swift)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Values indicating whether the user entered a symptom when they recorded the ECG.

## Declaration

```swift
enum SymptomsStatus
```

## Topics

### Status

- [HKElectrocardiogram.SymptomsStatus.none](symptomsstatus-swift.enum/none.md): The user didn’t experience any symptoms during the duration of the electrocardiogram reading.
- [HKElectrocardiogram.SymptomsStatus.present](symptomsstatus-swift.enum/present.md): The user added a symptom when they recorded the ECG.
- [HKElectrocardiogram.SymptomsStatus.notSet](symptomsstatus-swift.enum/notset.md): The user didn’t specify whether or not they experienced symptoms.

### Initializers

- [init(rawValue:)](symptomsstatus-swift.enum/init%28rawvalue_%29.md)

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
- [HKElectrocardiogram.Classification](classification-swift.enum.md): Classifications returned by Apple Watch’s ECG algorithm.
- [averageHeartRate](averageheartrate.md): The user’s average heart rate during the ECG.
- [symptomsStatus](symptomsstatus-swift.property.md): A value that indicates whether the user entered a symptom when they recorded the ECG.

# HKElectrocardiogramSymptomsStatus (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Values indicating whether the user entered a symptom when they recorded the ECG.

## Declaration

```objectivec
enum HKElectrocardiogramSymptomsStatus : NSInteger;
```

## Topics

### Status

- [HKElectrocardiogramSymptomsStatusNone](symptomsstatus-swift.enum/none.md): The user didn’t experience any symptoms during the duration of the electrocardiogram reading.
- [HKElectrocardiogramSymptomsStatusPresent](symptomsstatus-swift.enum/present.md): The user added a symptom when they recorded the ECG.
- [HKElectrocardiogramSymptomsStatusNotSet](symptomsstatus-swift.enum/notset.md): The user didn’t specify whether or not they experienced symptoms.

## See Also

### Accessing Overview Information

- [classification](classification-swift.property.md): The ECG’s classification.
- [HKElectrocardiogramClassification](classification-swift.enum.md): Classifications returned by Apple Watch’s ECG algorithm.
- [averageHeartRate](averageheartrate.md): The user’s average heart rate during the ECG.
- [symptomsStatus](symptomsstatus-swift.property.md): A value that indicates whether the user entered a symptom when they recorded the ECG.
