> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartworkoutintenthandling/resolveworkoutgoalunittype(for:with:)](https://developer.apple.com/documentation/intents/instartworkoutintenthandling/resolveworkoutgoalunittype(for:with:))

# resolveWorkoutGoalUnitType(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Resolves the units for the user’s workout goal.

## Declaration

```swift
optional func resolveWorkoutGoalUnitType(for intent: INStartWorkoutIntent, with completion: @escaping @Sendable (INWorkoutGoalUnitTypeResolutionResult) -> Void)
```

```swift
optional func resolveWorkoutGoalUnitType(for intent: INStartWorkoutIntent) async -> INWorkoutGoalUnitTypeResolutionResult
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block while implementing this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For a successful resolution, create a resolution result that includes the [INWorkoutGoalUnitType](../inworkoutgoalunittype.md) constant you plan to use for the workout goal.

<a id="Discussion"></a>

## Discussion

This method resolves the units for the user’s goal. Use it to validate the units of the user-supplied workout goal. If you don’t implement this method, SiriKit assumes that you’re able to start the workout with the specified goal.

## See Also

### Resolving the Intent Parameters

- [resolveWorkoutName(for:with:)](resolveworkoutname%28for_with_%29.md): Resolves the workout name selected by the user.
- [resolveGoalValue(for:with:)](resolvegoalvalue%28for_with_%29.md): Resolves the numerical goal of a user’s workout.
- [resolveWorkoutLocationType(for:with:)](resolveworkoutlocationtype%28for_with_%29.md): Resolves the location type of a user’s workout.
- [resolveIsOpenEnded(for:with:)](resolveisopenended%28for_with_%29.md): Resolves whether the user’s workout is open ended.

# resolveWorkoutGoalUnitTypeForStartWorkout:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Resolves the units for the user’s workout goal.

## Declaration

```objectivec
- (void) resolveWorkoutGoalUnitTypeForStartWorkout:(INStartWorkoutIntent *) intent withCompletion:(void (^)(INWorkoutGoalUnitTypeResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block while implementing this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For a successful resolution, create a resolution result that includes the [INWorkoutGoalUnitType](../inworkoutgoalunittype.md) constant you plan to use for the workout goal.

<a id="Discussion"></a>

## Discussion

This method resolves the units for the user’s goal. Use it to validate the units of the user-supplied workout goal. If you don’t implement this method, SiriKit assumes that you’re able to start the workout with the specified goal.

## See Also

### Resolving the Intent Parameters

- [resolveWorkoutNameForStartWorkout:withCompletion:](resolveworkoutname%28for_with_%29.md): Resolves the workout name selected by the user.
- [resolveGoalValueForStartWorkout:withCompletion:](resolvegoalvalue%28for_with_%29.md): Resolves the numerical goal of a user’s workout.
- [resolveWorkoutLocationTypeForStartWorkout:withCompletion:](resolveworkoutlocationtype%28for_with_%29.md): Resolves the location type of a user’s workout.
- [resolveIsOpenEndedForStartWorkout:withCompletion:](resolveisopenended%28for_with_%29.md): Resolves whether the user’s workout is open ended.
