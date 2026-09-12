> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartworkoutintent/workoutgoalunittype](https://developer.apple.com/documentation/intents/instartworkoutintent/workoutgoalunittype)

# workoutGoalUnitType (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The units associated with the workout goal.

## Declaration

```swift
var workoutGoalUnitType: INWorkoutGoalUnitType { get }
```

<a id="Discussion"></a>

## Discussion

If the user specified a goal, this property contains the units for measuring that goal. The units reflect a distance, a time, or a unit of energy. You get the goal’s numerical value from the [goalValue](https://developer.apple.com/documentation/intents/instartworkoutintent/goalvalue-1dzvb) property.

## See Also

### Specifying Workout Details

- [workoutName](workoutname.md): The name of the workout.
- [goalValue](goalvalue-5oazy.md): The user-supplied numerical goal of the workout.
- [workoutLocationType](workoutlocationtype.md): The location of the workout.
- [isOpenEnded](isopenended-8hecn.md): A Boolean value that indicates whether the workout is open ended.

# workoutGoalUnitType (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The units associated with the workout goal.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INWorkoutGoalUnitType workoutGoalUnitType;
```

```objectivec
@property (atomic, assign, readonly) INWorkoutGoalUnitType workoutGoalUnitType;
```

<a id="Discussion"></a>

## Discussion

If the user specified a goal, this property contains the units for measuring that goal. The units reflect a distance, a time, or a unit of energy. You get the goal’s numerical value from the [goalValue](https://developer.apple.com/documentation/intents/instartworkoutintent/goalvalue-1dzvb) property.

## See Also

### Specifying Workout Details

- [workoutName](workoutname.md): The name of the workout.
- [goalValue](https://developer.apple.com/documentation/intents/instartworkoutintent/goalvalue-1dzvb): The numerical goal of the workout.
- [workoutLocationType](workoutlocationtype.md): The location of the workout.
- [isOpenEnded](https://developer.apple.com/documentation/intents/instartworkoutintent/isopenended-avvd): A Boolean value indicating whether the workout is open ended.
