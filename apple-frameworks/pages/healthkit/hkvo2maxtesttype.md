> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkvo2maxtesttype](https://developer.apple.com/documentation/healthkit/hkvo2maxtesttype)

# HKVO2MaxTestType (Swift)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

Methods for calculating the user’s VO2 max rate.

## Declaration

```swift
enum HKVO2MaxTestType
```

<a id="overview"></a>

## Overview

VO2 max represents the maximal oxygen consumption during incremental exercise. VO2 max is an important indicator of fitness and endurance.

## Topics

### Test Types

- [HKVO2MaxTestType.maxExercise](hkvo2maxtesttype/maxexercise.md): A test that measures VO2 max rate by monitoring exercise to the user’s physical limit.
- [HKVO2MaxTestType.predictionSubMaxExercise](hkvo2maxtesttype/predictionsubmaxexercise.md): A calculation that estimates VO2 max rate based on low-intensity exercise.
- [HKVO2MaxTestType.predictionNonExercise](hkvo2maxtesttype/predictionnonexercise.md): A calculation that estimates VO2 max rate without any exercise.

### Enumeration Cases

- [HKVO2MaxTestType.predictionStepTest](hkvo2maxtesttype/predictionsteptest.md)

### Initializers

- [init(rawValue:)](hkvo2maxtesttype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# HKVO2MaxTestType (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

Methods for calculating the user’s VO2 max rate.

## Declaration

```objectivec
enum HKVO2MaxTestType : NSInteger;
```

<a id="overview"></a>

## Overview

VO2 max represents the maximal oxygen consumption during incremental exercise. VO2 max is an important indicator of fitness and endurance.

## Topics

### Test Types

- [HKVO2MaxTestTypeMaxExercise](hkvo2maxtesttype/maxexercise.md): A test that measures VO2 max rate by monitoring exercise to the user’s physical limit.
- [HKVO2MaxTestTypePredictionSubMaxExercise](hkvo2maxtesttype/predictionsubmaxexercise.md): A calculation that estimates VO2 max rate based on low-intensity exercise.
- [HKVO2MaxTestTypePredictionNonExercise](hkvo2maxtesttype/predictionnonexercise.md): A calculation that estimates VO2 max rate without any exercise.

### Enumeration Cases

- [HKVO2MaxTestTypePredictionStepTest](hkvo2maxtesttype/predictionsteptest.md)
