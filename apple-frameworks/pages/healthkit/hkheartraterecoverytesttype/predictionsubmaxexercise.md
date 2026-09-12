> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkheartraterecoverytesttype/predictionsubmaxexercise](https://developer.apple.com/documentation/healthkit/hkheartraterecoverytesttype/predictionsubmaxexercise)

# HKHeartRateRecoveryTestType.predictionSubMaxExercise (Swift)

**Framework:** HealthKit  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

A test that estimates a person’s heart-rate recovery using lower-intensity exercise.

## Declaration

```swift
case predictionSubMaxExercise
```

<a id="Discussion"></a>

## Discussion

In this test, a person performs lower-intensity exercise, staying below their physical limit. The test then estimates their actual heart rate recovery based on the difference between their exercising heart rate, and the rate of recovery after the exercise ends.

## See Also

### Heart-rate recovery tests

- [HKHeartRateRecoveryTestType.maxExercise](maxexercise.md): Measures a person’s actual heart-rate recovery.
- [HKHeartRateRecoveryTestType.predictionNonExercise](predictionnonexercise.md): A test that estimates a person’s heart-rate recovery without using exercise.

# HKHeartRateRecoveryTestTypePredictionSubMaxExercise (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

A test that estimates a person’s heart-rate recovery using lower-intensity exercise.

## Declaration

```objectivec
HKHeartRateRecoveryTestTypePredictionSubMaxExercise
```

<a id="Discussion"></a>

## Discussion

In this test, a person performs lower-intensity exercise, staying below their physical limit. The test then estimates their actual heart rate recovery based on the difference between their exercising heart rate, and the rate of recovery after the exercise ends.

## See Also

### Heart-rate recovery tests

- [HKHeartRateRecoveryTestTypeMaxExercise](maxexercise.md): Measures a person’s actual heart-rate recovery.
- [HKHeartRateRecoveryTestTypePredictionNonExercise](predictionnonexercise.md): A test that estimates a person’s heart-rate recovery without using exercise.
