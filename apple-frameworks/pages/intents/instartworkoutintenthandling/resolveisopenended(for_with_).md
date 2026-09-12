> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartworkoutintenthandling/resolveisopenended(for:with:)](https://developer.apple.com/documentation/intents/instartworkoutintenthandling/resolveisopenended(for:with:))

# resolveIsOpenEnded(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Resolves whether the user’s workout is open ended.

## Declaration

```swift
optional func resolveIsOpenEnded(for intent: INStartWorkoutIntent, with completion: @escaping @Sendable (INBooleanResolutionResult) -> Void)
```

```swift
optional func resolveIsOpenEnded(for intent: INStartWorkoutIntent) async -> INBooleanResolutionResult
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block while implementing this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The resolution result object containing information about your proposed resolution. For a successful resolution, create a resolution result that includes the Boolean value indicating whether you plan to start the workout with an open-ended or fixed goal. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

This method resolves whether the workout is open ended. If you don’t implement this method, SiriKit assumes that you’re able to start either an open ended or fixed goal workout.

## See Also

### Resolving the Intent Parameters

- [resolveWorkoutName(for:with:)](resolveworkoutname%28for_with_%29.md): Resolves the workout name selected by the user.
- [resolveGoalValue(for:with:)](resolvegoalvalue%28for_with_%29.md): Resolves the numerical goal of a user’s workout.
- [resolveWorkoutGoalUnitType(for:with:)](resolveworkoutgoalunittype%28for_with_%29.md): Resolves the units for the user’s workout goal.
- [resolveWorkoutLocationType(for:with:)](resolveworkoutlocationtype%28for_with_%29.md): Resolves the location type of a user’s workout.

# resolveIsOpenEndedForStartWorkout:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Resolves whether the user’s workout is open ended.

## Declaration

```objectivec
- (void) resolveIsOpenEndedForStartWorkout:(INStartWorkoutIntent *) intent withCompletion:(void (^)(INBooleanResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block while implementing this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The resolution result object containing information about your proposed resolution. For a successful resolution, create a resolution result that includes the Boolean value indicating whether you plan to start the workout with an open-ended or fixed goal. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

This method resolves whether the workout is open ended. If you don’t implement this method, SiriKit assumes that you’re able to start either an open ended or fixed goal workout.

## See Also

### Resolving the Intent Parameters

- [resolveWorkoutNameForStartWorkout:withCompletion:](resolveworkoutname%28for_with_%29.md): Resolves the workout name selected by the user.
- [resolveGoalValueForStartWorkout:withCompletion:](resolvegoalvalue%28for_with_%29.md): Resolves the numerical goal of a user’s workout.
- [resolveWorkoutGoalUnitTypeForStartWorkout:withCompletion:](resolveworkoutgoalunittype%28for_with_%29.md): Resolves the units for the user’s workout goal.
- [resolveWorkoutLocationTypeForStartWorkout:withCompletion:](resolveworkoutlocationtype%28for_with_%29.md): Resolves the location type of a user’s workout.
