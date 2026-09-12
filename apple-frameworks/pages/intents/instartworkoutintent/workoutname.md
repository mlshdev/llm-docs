> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartworkoutintent/workoutname](https://developer.apple.com/documentation/intents/instartworkoutintent/workoutname)

# workoutName (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The name of the workout.

## Declaration

```swift
@NSCopying var workoutName: INSpeakableString? { get }
```

<a id="Discussion"></a>

## Discussion

If the user requested a specific workout, this property contains the name of that workout. The workout name can be user-specified, a workout name defined in your app’s global vocabulary file, or a custom workout name spoken by the user.

## See Also

### Specifying Workout Details

- [goalValue](goalvalue-5oazy.md): The user-supplied numerical goal of the workout.
- [workoutGoalUnitType](workoutgoalunittype.md): The units associated with the workout goal.
- [workoutLocationType](workoutlocationtype.md): The location of the workout.
- [isOpenEnded](isopenended-8hecn.md): A Boolean value that indicates whether the workout is open ended.

# workoutName (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The name of the workout.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INSpeakableString * workoutName;
```

```objectivec
@property (atomic, copy, readonly, nullable) INSpeakableString * workoutName;
```

<a id="Discussion"></a>

## Discussion

If the user requested a specific workout, this property contains the name of that workout. The workout name can be user-specified, a workout name defined in your app’s global vocabulary file, or a custom workout name spoken by the user.

## See Also

### Specifying Workout Details

- [goalValue](https://developer.apple.com/documentation/intents/instartworkoutintent/goalvalue-1dzvb): The numerical goal of the workout.
- [workoutGoalUnitType](workoutgoalunittype.md): The units associated with the workout goal.
- [workoutLocationType](workoutlocationtype.md): The location of the workout.
- [isOpenEnded](https://developer.apple.com/documentation/intents/instartworkoutintent/isopenended-avvd): A Boolean value indicating whether the workout is open ended.
