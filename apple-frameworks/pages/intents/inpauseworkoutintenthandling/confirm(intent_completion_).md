> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpauseworkoutintenthandling/confirm(intent:completion:)](https://developer.apple.com/documentation/intents/inpauseworkoutintenthandling/confirm(intent:completion:))

# confirm(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Confirms that you can pause the current workout.

## Declaration

```swift
optional func confirm(intent: INPauseWorkoutIntent, completion: @escaping @Sendable (INPauseWorkoutIntentResponse) -> Void)
```

```swift
optional func confirm(intent: INPauseWorkoutIntent) async -> INPauseWorkoutIntentResponse
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use the information in this object to get user-specified information.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **response**: The [INPauseWorkoutIntentResponse](../inpauseworkoutintentresponse.md) object that contains the status of whether your app is able to pause the workout. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

This method validates that your app is able to pause the user’s current workout. For example, verify that a workout is currently in progress and you can pause it.

# confirmPauseWorkout:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Confirms that you can pause the current workout.

## Declaration

```objectivec
- (void) confirmPauseWorkout:(INPauseWorkoutIntent *) intent completion:(void (^)(INPauseWorkoutIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use the information in this object to get user-specified information.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **response**: The [INPauseWorkoutIntentResponse](../inpauseworkoutintentresponse.md) object that contains the status of whether your app is able to pause the workout. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

This method validates that your app is able to pause the user’s current workout. For example, verify that a workout is currently in progress and you can pause it.
