> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incancelworkoutintenthandling/handle(intent:completion:)](https://developer.apple.com/documentation/intents/incancelworkoutintenthandling/handle(intent:completion:))

# handle(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Handles the canceling of the workout.

## Declaration

```swift
func handle(intent: INCancelWorkoutIntent, completion: @escaping @Sendable (INCancelWorkoutIntentResponse) -> Void)
```

```swift
func handle(intent: INCancelWorkoutIntent) async -> INCancelWorkoutIntentResponse
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. The object’s information has already been resolved and confirmed by the user.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **response**: The [INCancelWorkoutIntentResponse](../incancelworkoutintentresponse.md) object you create to report the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

This method transfers control of starting the workout over to your app. When your response object contains the [INCancelWorkoutIntentResponseCode.continueInApp](../incancelworkoutintentresponsecode/continueinapp.md) code, SiriKit automatically launches your app and passes it the [NSUserActivity](../../foundation/nsuseractivity.md) object from your response object.

# handleCancelWorkout:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Handles the canceling of the workout.

## Declaration

```objectivec
- (void) handleCancelWorkout:(INCancelWorkoutIntent *) intent completion:(void (^)(INCancelWorkoutIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. The object’s information has already been resolved and confirmed by the user.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **response**: The [INCancelWorkoutIntentResponse](../incancelworkoutintentresponse.md) object you create to report the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

This method transfers control of starting the workout over to your app. When your response object contains the [INCancelWorkoutIntentResponseCodeContinueInApp](../incancelworkoutintentresponsecode/continueinapp.md) code, SiriKit automatically launches your app and passes it the [NSUserActivity](../../foundation/nsuseractivity.md) object from your response object.
