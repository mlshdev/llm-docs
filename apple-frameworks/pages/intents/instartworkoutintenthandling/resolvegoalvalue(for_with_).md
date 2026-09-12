> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartworkoutintenthandling/resolvegoalvalue(for:with:)](https://developer.apple.com/documentation/intents/instartworkoutintenthandling/resolvegoalvalue(for:with:))

# resolveGoalValue(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Resolves the numerical goal of a user’s workout.

## Declaration

```swift
optional func resolveGoalValue(for intent: INStartWorkoutIntent, with completion: @escaping @Sendable (INDoubleResolutionResult) -> Void)
```

```swift
optional func resolveGoalValue(for intent: INStartWorkoutIntent) async -> INDoubleResolutionResult
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block while implementing this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For a successful resolution, create a resolution result that includes the floating-point value you plan to use for the workout goal.

<a id="Discussion"></a>

## Discussion

This method resolves the numerical goal for the user’s workout. Use it to validate the goal supplied by the user. If you don’t implement this method, SiriKit assumes that you’re able to start the workout with the specified goal.

## See Also

### Resolving the Intent Parameters

- [resolveWorkoutName(for:with:)](resolveworkoutname%28for_with_%29.md): Resolves the workout name selected by the user.
- [resolveWorkoutGoalUnitType(for:with:)](resolveworkoutgoalunittype%28for_with_%29.md): Resolves the units for the user’s workout goal.
- [resolveWorkoutLocationType(for:with:)](resolveworkoutlocationtype%28for_with_%29.md): Resolves the location type of a user’s workout.
- [resolveIsOpenEnded(for:with:)](resolveisopenended%28for_with_%29.md): Resolves whether the user’s workout is open ended.

# resolveGoalValueForStartWorkout:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Resolves the numerical goal of a user’s workout.

## Declaration

```objectivec
- (void) resolveGoalValueForStartWorkout:(INStartWorkoutIntent *) intent withCompletion:(void (^)(INDoubleResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block while implementing this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For a successful resolution, create a resolution result that includes the floating-point value you plan to use for the workout goal.

<a id="Discussion"></a>

## Discussion

This method resolves the numerical goal for the user’s workout. Use it to validate the goal supplied by the user. If you don’t implement this method, SiriKit assumes that you’re able to start the workout with the specified goal.

## See Also

### Resolving the Intent Parameters

- [resolveWorkoutNameForStartWorkout:withCompletion:](resolveworkoutname%28for_with_%29.md): Resolves the workout name selected by the user.
- [resolveWorkoutGoalUnitTypeForStartWorkout:withCompletion:](resolveworkoutgoalunittype%28for_with_%29.md): Resolves the units for the user’s workout goal.
- [resolveWorkoutLocationTypeForStartWorkout:withCompletion:](resolveworkoutlocationtype%28for_with_%29.md): Resolves the location type of a user’s workout.
- [resolveIsOpenEndedForStartWorkout:withCompletion:](resolveisopenended%28for_with_%29.md): Resolves whether the user’s workout is open ended.
