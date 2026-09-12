> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inresumeworkoutintenthandling/handle(intent:completion:)](https://developer.apple.com/documentation/intents/inresumeworkoutintenthandling/handle(intent:completion:))

# handle(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Handles resuming the workout.

## Declaration

```swift
func handle(intent: INResumeWorkoutIntent, completion: @escaping @Sendable (INResumeWorkoutIntentResponse) -> Void)
```

```swift
func handle(intent: INResumeWorkoutIntent) async -> INResumeWorkoutIntentResponse
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. This object’s information has already been resolved and confirmed by the user.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **response**: The [INResumeWorkoutIntentResponse](../inresumeworkoutintentresponse.md) object you create to report the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to turn control of resuming the workout to your app. When your response object contains the [INResumeWorkoutIntentResponseCode.continueInApp](../inresumeworkoutintentresponsecode/continueinapp.md) code, SiriKit automatically launches your app and passes it the [NSUserActivity](../../foundation/nsuseractivity.md) object from your response object.

# handleResumeWorkout:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Handles resuming the workout.

## Declaration

```objectivec
- (void) handleResumeWorkout:(INResumeWorkoutIntent *) intent completion:(void (^)(INResumeWorkoutIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. This object’s information has already been resolved and confirmed by the user.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **response**: The [INResumeWorkoutIntentResponse](../inresumeworkoutintentresponse.md) object you create to report the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to turn control of resuming the workout to your app. When your response object contains the [INResumeWorkoutIntentResponseCodeContinueInApp](../inresumeworkoutintentresponsecode/continueinapp.md) code, SiriKit automatically launches your app and passes it the [NSUserActivity](../../foundation/nsuseractivity.md) object from your response object.
