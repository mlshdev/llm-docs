> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incancelworkoutintenthandling/confirm(intent:completion:)](https://developer.apple.com/documentation/intents/incancelworkoutintenthandling/confirm(intent:completion:))

# confirm(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Confirms that your app is able to cancel the workout.

## Declaration

```swift
optional func confirm(intent: INCancelWorkoutIntent, completion: @escaping @Sendable (INCancelWorkoutIntentResponse) -> Void)
```

```swift
optional func confirm(intent: INCancelWorkoutIntent) async -> INCancelWorkoutIntentResponse
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use the information in this object to get the user-specified information.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **response**: The [INCancelWorkoutIntentResponse](../incancelworkoutintentresponse.md) object that contains the status of whether your app is able to cancel the workout. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

This method validates that your app is currently able to cancel the user’s workout. For example, verify that a workout is currently in progress and you can cancel it.

# confirmCancelWorkout:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Confirms that your app is able to cancel the workout.

## Declaration

```objectivec
- (void) confirmCancelWorkout:(INCancelWorkoutIntent *) intent completion:(void (^)(INCancelWorkoutIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use the information in this object to get the user-specified information.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **response**: The [INCancelWorkoutIntentResponse](../incancelworkoutintentresponse.md) object that contains the status of whether your app is able to cancel the workout. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

This method validates that your app is currently able to cancel the user’s workout. For example, verify that a workout is currently in progress and you can cancel it.
