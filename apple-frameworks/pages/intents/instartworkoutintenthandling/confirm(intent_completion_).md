> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartworkoutintenthandling/confirm(intent:completion:)](https://developer.apple.com/documentation/intents/instartworkoutintenthandling/confirm(intent:completion:))

# confirm(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Validates that your app is able to start the workout.

## Declaration

```swift
optional func confirm(intent: INStartWorkoutIntent, completion: @escaping @Sendable (INStartWorkoutIntentResponse) -> Void)
```

```swift
optional func confirm(intent: INStartWorkoutIntent) async -> INStartWorkoutIntentResponse
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. This object’s information has already been resolved by the user.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **response**: The [INStartWorkoutIntentResponse](../instartworkoutintentresponse.md) object contains the status of whether your app is able to start the workout. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

This method validates that your app is able to start the workout. For example, checking that a workout isn’t already in progress or that data you need for the workout is available.

# confirmStartWorkout:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Validates that your app is able to start the workout.

## Declaration

```objectivec
- (void) confirmStartWorkout:(INStartWorkoutIntent *) intent completion:(void (^)(INStartWorkoutIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. This object’s information has already been resolved by the user.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **response**: The [INStartWorkoutIntentResponse](../instartworkoutintentresponse.md) object contains the status of whether your app is able to start the workout. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

This method validates that your app is able to start the workout. For example, checking that a workout isn’t already in progress or that data you need for the workout is available.
