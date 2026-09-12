> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartworkoutintenthandling/handle(intent:completion:)](https://developer.apple.com/documentation/intents/instartworkoutintenthandling/handle(intent:completion:))

# handle(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Handles starting the workout.

## Declaration

```swift
func handle(intent: INStartWorkoutIntent, completion: @escaping @Sendable (INStartWorkoutIntentResponse) -> Void)
```

```swift
func handle(intent: INStartWorkoutIntent) async -> INStartWorkoutIntentResponse
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. The object’s information has already been resolved and confirmed by the user.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **response**: The [INStartWorkoutIntentResponse](../instartworkoutintentresponse.md) object you create to report the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to transfer control of starting the workout to your app. When your response object contains the [INStartWorkoutIntentResponseCode.continueInApp](../instartworkoutintentresponsecode/continueinapp.md) code, SiriKit automatically launches your app and passes it the [NSUserActivity](../../foundation/nsuseractivity.md) object from your response object.

# handleStartWorkout:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Handles starting the workout.

## Declaration

```objectivec
- (void) handleStartWorkout:(INStartWorkoutIntent *) intent completion:(void (^)(INStartWorkoutIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. The object’s information has already been resolved and confirmed by the user.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **response**: The [INStartWorkoutIntentResponse](../instartworkoutintentresponse.md) object you create to report the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to transfer control of starting the workout to your app. When your response object contains the [INStartWorkoutIntentResponseCodeContinueInApp](../instartworkoutintentresponsecode/continueinapp.md) code, SiriKit automatically launches your app and passes it the [NSUserActivity](../../foundation/nsuseractivity.md) object from your response object.
