> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inendworkoutintenthandling/confirm(intent:completion:)](https://developer.apple.com/documentation/intents/inendworkoutintenthandling/confirm(intent:completion:))

# confirm(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Confirms your app can end the workout.

## Declaration

```swift
optional func confirm(intent: INEndWorkoutIntent, completion: @escaping @Sendable (INEndWorkoutIntentResponse) -> Void)
```

```swift
optional func confirm(intent: INEndWorkoutIntent) async -> INEndWorkoutIntentResponse
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object’s information to get the user-specified workout details.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **response**: The [INEndWorkoutIntentResponse](../inendworkoutintentresponse.md) object that contains the status of whether your app is able to end the workout. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

This method validates that your app is currently able to end the user’s workout. For example, verify that a workout is currently in progress and whether you can end it.

# confirmEndWorkout:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Confirms your app can end the workout.

## Declaration

```objectivec
- (void) confirmEndWorkout:(INEndWorkoutIntent *) intent completion:(void (^)(INEndWorkoutIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object’s information to get the user-specified workout details.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **response**: The [INEndWorkoutIntentResponse](../inendworkoutintentresponse.md) object that contains the status of whether your app is able to end the workout. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

This method validates that your app is currently able to end the user’s workout. For example, verify that a workout is currently in progress and whether you can end it.
