> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inresumeworkoutintenthandling/confirm(intent:completion:)](https://developer.apple.com/documentation/intents/inresumeworkoutintenthandling/confirm(intent:completion:))

# confirm(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Confirms that your app is able to resume the workout.

## Declaration

```swift
optional func confirm(intent: INResumeWorkoutIntent, completion: @escaping @Sendable (INResumeWorkoutIntentResponse) -> Void)
```

```swift
optional func confirm(intent: INResumeWorkoutIntent) async -> INResumeWorkoutIntentResponse
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use the information in this object to get the information specified by the user.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **response**: The [INResumeWorkoutIntentResponse](../inresumeworkoutintentresponse.md) object that contains the status of whether your app is able to resume the workout. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

This method validates that your app is currently able to resume the user’s workout. For example, verifying that a workout is currently paused.

# confirmResumeWorkout:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Confirms that your app is able to resume the workout.

## Declaration

```objectivec
- (void) confirmResumeWorkout:(INResumeWorkoutIntent *) intent completion:(void (^)(INResumeWorkoutIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use the information in this object to get the information specified by the user.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **response**: The [INResumeWorkoutIntentResponse](../inresumeworkoutintentresponse.md) object that contains the status of whether your app is able to resume the workout. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

This method validates that your app is currently able to resume the user’s workout. For example, verifying that a workout is currently paused.
