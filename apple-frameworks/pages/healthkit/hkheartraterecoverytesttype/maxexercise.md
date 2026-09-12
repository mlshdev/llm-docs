> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkheartraterecoverytesttype/maxexercise](https://developer.apple.com/documentation/healthkit/hkheartraterecoverytesttype/maxexercise)

# HKHeartRateRecoveryTestType.maxExercise (Swift)

**Framework:** HealthKit  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Measures a person’s actual heart-rate recovery.

## Declaration

```swift
case maxExercise
```

<a id="Discussion"></a>

## Discussion

In this test, a person exercises to their physical limit. The test measures their max heart rate during the workout, and then compares this with their heart rate after the workout ends. This lets the test calculate the actual heart rate recovery.

## See Also

### Heart-rate recovery tests

- [HKHeartRateRecoveryTestType.predictionNonExercise](predictionnonexercise.md): A test that estimates a person’s heart-rate recovery without using exercise.
- [HKHeartRateRecoveryTestType.predictionSubMaxExercise](predictionsubmaxexercise.md): A test that estimates a person’s heart-rate recovery using lower-intensity exercise.

# HKHeartRateRecoveryTestTypeMaxExercise (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Measures a person’s actual heart-rate recovery.

## Declaration

```objectivec
HKHeartRateRecoveryTestTypeMaxExercise
```

<a id="Discussion"></a>

## Discussion

In this test, a person exercises to their physical limit. The test measures their max heart rate during the workout, and then compares this with their heart rate after the workout ends. This lets the test calculate the actual heart rate recovery.

## See Also

### Heart-rate recovery tests

- [HKHeartRateRecoveryTestTypePredictionNonExercise](predictionnonexercise.md): A test that estimates a person’s heart-rate recovery without using exercise.
- [HKHeartRateRecoveryTestTypePredictionSubMaxExercise](predictionsubmaxexercise.md): A test that estimates a person’s heart-rate recovery using lower-intensity exercise.
