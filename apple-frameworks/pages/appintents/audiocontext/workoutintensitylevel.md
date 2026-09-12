> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/audiocontext/workoutintensitylevel](https://developer.apple.com/documentation/appintents/audiocontext/workoutintensitylevel)

# AudioContext.WorkoutIntensityLevel

**Framework:** AppIntents  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The intensity level of a workout session.

## Declaration

```swift
struct WorkoutIntensityLevel
```

<a id="overview"></a>

## Overview

Use this type to specify a workout intensity level when donating entities for workout contexts. You can also initialize it with an `HKWorkoutActivityType` to donate entities for a specific workout type.

## Topics

### Initializers

- [init(\_:)](workoutintensitylevel/init%28__%29.md): Creates an intensity level from an `HKWorkoutActivityType`.
- [init(rawValue:)](workoutintensitylevel/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](workoutintensitylevel/rawvalue.md)

### Type Properties

- [high](workoutintensitylevel/high.md): A high-intensity workout such as running, HIIT, or cross-training.
- [low](workoutintensitylevel/low.md): A low-intensity workout such as yoga, stretching, or walking.
- [medium](workoutintensitylevel/medium.md): A medium-intensity workout such as cycling, hiking, or swimming.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
