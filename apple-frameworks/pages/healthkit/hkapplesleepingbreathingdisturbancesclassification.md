> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkapplesleepingbreathingdisturbancesclassification](https://developer.apple.com/documentation/healthkit/hkapplesleepingbreathingdisturbancesclassification)

# HKAppleSleepingBreathingDisturbancesClassification (Swift)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
enum HKAppleSleepingBreathingDisturbancesClassification
```

## Topics

### Enumeration Cases

- [HKAppleSleepingBreathingDisturbancesClassification.elevated](hkapplesleepingbreathingdisturbancesclassification/elevated.md)
- [HKAppleSleepingBreathingDisturbancesClassification.notElevated](hkapplesleepingbreathingdisturbancesclassification/notelevated.md)

### Instance Properties

- [minimum](hkapplesleepingbreathingdisturbancesclassification/minimum.md)

### Initializers

- [init(classifying:)](hkapplesleepingbreathingdisturbancesclassification/init%28classifying_%29.md)
- [init(rawValue:)](hkapplesleepingbreathingdisturbancesclassification/init%28rawvalue_%29.md)

### Default Implementations

- [CaseIterable Implementations](hkapplesleepingbreathingdisturbancesclassification/caseiterable-implementations.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Mindfulness and sleep

- [mindfulSession](hkcategorytypeidentifier/mindfulsession.md): A category sample type for recording a mindful session.
- [sleepAnalysis](hkcategorytypeidentifier/sleepanalysis.md): A category sample type for sleep analysis information.
- [appleSleepingWristTemperature](hkquantitytypeidentifier/applesleepingwristtemperature.md): A quantity sample type that records the wrist temperature during sleep.

# HKAppleSleepingBreathingDisturbancesClassification (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```objectivec
enum HKAppleSleepingBreathingDisturbancesClassification : NSInteger;
```

## Topics

### Enumeration Cases

- [HKAppleSleepingBreathingDisturbancesClassificationElevated](hkapplesleepingbreathingdisturbancesclassification/elevated.md)
- [HKAppleSleepingBreathingDisturbancesClassificationNotElevated](hkapplesleepingbreathingdisturbancesclassification/notelevated.md)

### Instance Properties

- [HKAppleSleepingBreathingDisturbancesMinimumQuantityForClassification](hkapplesleepingbreathingdisturbancesclassification/minimum.md)

## See Also

### Mindfulness and sleep

- [HKCategoryTypeIdentifierMindfulSession](hkcategorytypeidentifier/mindfulsession.md): A category sample type for recording a mindful session.
- [HKCategoryTypeIdentifierSleepAnalysis](hkcategorytypeidentifier/sleepanalysis.md): A category sample type for sleep analysis information.
- [HKCategoryValueSleepAnalysisAsleepValues](hkcategoryvaluesleepanalysisasleepvalues.md)
- [HKQuantityTypeIdentifierAppleSleepingWristTemperature](hkquantitytypeidentifier/applesleepingwristtemperature.md): A quantity sample type that records the wrist temperature during sleep.
- [HKAppleSleepingBreathingDisturbancesClassificationForQuantity](hkapplesleepingbreathingdisturbancesclassificationforquantity.md)
