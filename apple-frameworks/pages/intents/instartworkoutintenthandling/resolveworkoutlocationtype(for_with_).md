> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartworkoutintenthandling/resolveworkoutlocationtype(for:with:)](https://developer.apple.com/documentation/intents/instartworkoutintenthandling/resolveworkoutlocationtype(for:with:))

# resolveWorkoutLocationType(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Resolves the location type of a user’s workout.

## Declaration

```swift
optional func resolveWorkoutLocationType(for intent: INStartWorkoutIntent, with completion: @escaping @Sendable (INWorkoutLocationTypeResolutionResult) -> Void)
```

```swift
optional func resolveWorkoutLocationType(for intent: INStartWorkoutIntent) async -> INWorkoutLocationTypeResolutionResult
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block while implementing this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For a successful resolution, create a resolution result that includes the [INWorkoutLocationType](../inworkoutlocationtype.md) constant you plan to use for the workout location.

<a id="Discussion"></a>

## Discussion

This method resolves the user-supplied workout location. If you don’t implement this method, SiriKit assumes that you’re able to start the workout in the specified location.

## See Also

### Resolving the Intent Parameters

- [resolveWorkoutName(for:with:)](resolveworkoutname%28for_with_%29.md): Resolves the workout name selected by the user.
- [resolveGoalValue(for:with:)](resolvegoalvalue%28for_with_%29.md): Resolves the numerical goal of a user’s workout.
- [resolveWorkoutGoalUnitType(for:with:)](resolveworkoutgoalunittype%28for_with_%29.md): Resolves the units for the user’s workout goal.
- [resolveIsOpenEnded(for:with:)](resolveisopenended%28for_with_%29.md): Resolves whether the user’s workout is open ended.

# resolveWorkoutLocationTypeForStartWorkout:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Resolves the location type of a user’s workout.

## Declaration

```objectivec
- (void) resolveWorkoutLocationTypeForStartWorkout:(INStartWorkoutIntent *) intent withCompletion:(void (^)(INWorkoutLocationTypeResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block while implementing this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For a successful resolution, create a resolution result that includes the [INWorkoutLocationType](../inworkoutlocationtype.md) constant you plan to use for the workout location.

<a id="Discussion"></a>

## Discussion

This method resolves the user-supplied workout location. If you don’t implement this method, SiriKit assumes that you’re able to start the workout in the specified location.

## See Also

### Resolving the Intent Parameters

- [resolveWorkoutNameForStartWorkout:withCompletion:](resolveworkoutname%28for_with_%29.md): Resolves the workout name selected by the user.
- [resolveGoalValueForStartWorkout:withCompletion:](resolvegoalvalue%28for_with_%29.md): Resolves the numerical goal of a user’s workout.
- [resolveWorkoutGoalUnitTypeForStartWorkout:withCompletion:](resolveworkoutgoalunittype%28for_with_%29.md): Resolves the units for the user’s workout goal.
- [resolveIsOpenEndedForStartWorkout:withCompletion:](resolveisopenended%28for_with_%29.md): Resolves whether the user’s workout is open ended.
