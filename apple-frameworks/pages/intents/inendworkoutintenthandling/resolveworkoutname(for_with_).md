> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inendworkoutintenthandling/resolveworkoutname(for:with:)](https://developer.apple.com/documentation/intents/inendworkoutintenthandling/resolveworkoutname(for:with:))

# resolveWorkoutName(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Resolves the workout name that the user wants to end.

## Declaration

```swift
optional func resolveWorkoutName(for intent: INEndWorkoutIntent, with completion: @escaping @Sendable (INSpeakableStringResolutionResult) -> Void)
```

```swift
optional func resolveWorkoutName(for intent: INEndWorkoutIntent) async -> INSpeakableStringResolutionResult
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block while implementing this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For a successful resolution, create a resolution result that includes the workout name that you plan to end.

<a id="Discussion"></a>

## Discussion

This method validates the user-supplied workout name. If you don’t implement this method, SiriKit assumes that you are able to end the requested workout with the specified name.

# resolveWorkoutNameForEndWorkout:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Resolves the workout name that the user wants to end.

## Declaration

```objectivec
- (void) resolveWorkoutNameForEndWorkout:(INEndWorkoutIntent *) intent withCompletion:(void (^)(INSpeakableStringResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block while implementing this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For a successful resolution, create a resolution result that includes the workout name that you plan to end.

<a id="Discussion"></a>

## Discussion

This method validates the user-supplied workout name. If you don’t implement this method, SiriKit assumes that you are able to end the requested workout with the specified name.
