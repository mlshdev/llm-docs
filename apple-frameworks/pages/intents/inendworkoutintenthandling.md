> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inendworkoutintenthandling](https://developer.apple.com/documentation/intents/inendworkoutintenthandling)

# INEndWorkoutIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

An interface that handles requests to complete a workout.

## Declaration

```swift
protocol INEndWorkoutIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the [INEndWorkoutIntentHandling](inendworkoutintenthandling.md) protocol to resolve, confirm, and handle requests to end a workout using your app. Adopt this protocol in an object of your Intents extension capable of validating the workout name.

You don’t actually end the workout from your Intents extension. When your [handle(intent:completion:)](inendworkoutintenthandling/handle%28intent_completion_%29.md) returns, SiriKit launches your app and passes it an [NSUserActivity](../foundation/nsuseractivity.md) object that contains the end workout intent object and your response. Your app uses the information in those objects to end the workout.

## Topics

### Resolving the Intent Parameters

- [resolveWorkoutName(for:with:)](inendworkoutintenthandling/resolveworkoutname%28for_with_%29.md): Resolves the workout name that the user wants to end.

### Confirming the Response

- [confirm(intent:completion:)](inendworkoutintenthandling/confirm%28intent_completion_%29.md): Confirms your app can end the workout.

### Handling the Intent

- [handle(intent:completion:)](inendworkoutintenthandling/handle%28intent_completion_%29.md): Handles ending the workout.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INWorkoutsDomainHandling](inworkoutsdomainhandling.md)

## See Also

### End a Workout

- [INEndWorkoutIntent](inendworkoutintent.md): A request to end the current workout that also validates workout parameters and saves the results.
- [INEndWorkoutIntentResponse](inendworkoutintentresponse.md): Your app’s response to an end workout intent.

# INEndWorkoutIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

An interface that handles requests to complete a workout.

## Declaration

```objectivec
@protocol INEndWorkoutIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the [INEndWorkoutIntentHandling](inendworkoutintenthandling.md) protocol to resolve, confirm, and handle requests to end a workout using your app. Adopt this protocol in an object of your Intents extension capable of validating the workout name.

You don’t actually end the workout from your Intents extension. When your [handleEndWorkout:completion:](inendworkoutintenthandling/handle%28intent_completion_%29.md) returns, SiriKit launches your app and passes it an [NSUserActivity](../foundation/nsuseractivity.md) object that contains the end workout intent object and your response. Your app uses the information in those objects to end the workout.

## Topics

### Resolving the Intent Parameters

- [resolveWorkoutNameForEndWorkout:withCompletion:](inendworkoutintenthandling/resolveworkoutname%28for_with_%29.md): Resolves the workout name that the user wants to end.

### Confirming the Response

- [confirmEndWorkout:completion:](inendworkoutintenthandling/confirm%28intent_completion_%29.md): Confirms your app can end the workout.

### Handling the Intent

- [handleEndWorkout:completion:](inendworkoutintenthandling/handle%28intent_completion_%29.md): Handles ending the workout.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INWorkoutsDomainHandling](inworkoutsdomainhandling.md)

## See Also

### End a Workout

- [INEndWorkoutIntent](inendworkoutintent.md): A request to end the current workout that also validates workout parameters and saves the results.
- [INEndWorkoutIntentResponse](inendworkoutintentresponse.md): Your app’s response to an end workout intent.
