> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartworkoutintent/workoutlocationtype](https://developer.apple.com/documentation/intents/instartworkoutintent/workoutlocationtype)

# workoutLocationType (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The location of the workout.

## Declaration

```swift
var workoutLocationType: INWorkoutLocationType { get }
```

<a id="Discussion"></a>

## Discussion

When you measure indoor and outdoor workouts differently, use this property to determine the workout’s location.

## See Also

### Specifying Workout Details

- [workoutName](workoutname.md): The name of the workout.
- [goalValue](goalvalue-5oazy.md): The user-supplied numerical goal of the workout.
- [workoutGoalUnitType](workoutgoalunittype.md): The units associated with the workout goal.
- [isOpenEnded](isopenended-8hecn.md): A Boolean value that indicates whether the workout is open ended.

# workoutLocationType (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The location of the workout.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INWorkoutLocationType workoutLocationType;
```

```objectivec
@property (atomic, assign, readonly) INWorkoutLocationType workoutLocationType;
```

<a id="Discussion"></a>

## Discussion

When you measure indoor and outdoor workouts differently, use this property to determine the workout’s location.

## See Also

### Specifying Workout Details

- [workoutName](workoutname.md): The name of the workout.
- [goalValue](https://developer.apple.com/documentation/intents/instartworkoutintent/goalvalue-1dzvb): The numerical goal of the workout.
- [workoutGoalUnitType](workoutgoalunittype.md): The units associated with the workout goal.
- [isOpenEnded](https://developer.apple.com/documentation/intents/instartworkoutintent/isopenended-avvd): A Boolean value indicating whether the workout is open ended.
