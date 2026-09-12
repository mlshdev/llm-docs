> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpauseworkoutintenthandling](https://developer.apple.com/documentation/intents/inpauseworkoutintenthandling)

# INPauseWorkoutIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

An interface that handles requests to pause a workout.

## Declaration

```swift
protocol INPauseWorkoutIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the [INPauseWorkoutIntentHandling](inpauseworkoutintenthandling.md) protocol to resolve, confirm, and handle requests to pause a workout that’s using your app. Adopt this protocol in an object of your Intents extension that’s capable of validating the workout name.

You don’t actually pause the workout from your Intents extension. When the [handle(intent:completion:)](inpauseworkoutintenthandling/handle%28intent_completion_%29.md) returns, SiriKit launches your app and passes it to an [NSUserActivity](../foundation/nsuseractivity.md) object that contains the intent object and your response. Your app uses the information in those objects to pause the workout.

## Topics

### Resolving the Intent Parameters

- [resolveWorkoutName(for:with:)](inpauseworkoutintenthandling/resolveworkoutname%28for_with_%29.md): Resolves the name of the workout that the user wants to pause.

### Confirming the Intent

- [confirm(intent:completion:)](inpauseworkoutintenthandling/confirm%28intent_completion_%29.md): Confirms that you can pause the current workout.

### Handling the Intent

- [handle(intent:completion:)](inpauseworkoutintenthandling/handle%28intent_completion_%29.md): Handle pausing the workout.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INWorkoutsDomainHandling](inworkoutsdomainhandling.md)

## See Also

### Pause a Workout

- [INPauseWorkoutIntent](inpauseworkoutintent.md): A request to pause the current workout that also stops the gathering of workout data.
- [INPauseWorkoutIntentResponse](inpauseworkoutintentresponse.md): Your app’s response to a pause workout intent.

# INPauseWorkoutIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

An interface that handles requests to pause a workout.

## Declaration

```objectivec
@protocol INPauseWorkoutIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the [INPauseWorkoutIntentHandling](inpauseworkoutintenthandling.md) protocol to resolve, confirm, and handle requests to pause a workout that’s using your app. Adopt this protocol in an object of your Intents extension that’s capable of validating the workout name.

You don’t actually pause the workout from your Intents extension. When the [handlePauseWorkout:completion:](inpauseworkoutintenthandling/handle%28intent_completion_%29.md) returns, SiriKit launches your app and passes it to an [NSUserActivity](../foundation/nsuseractivity.md) object that contains the intent object and your response. Your app uses the information in those objects to pause the workout.

## Topics

### Resolving the Intent Parameters

- [resolveWorkoutNameForPauseWorkout:withCompletion:](inpauseworkoutintenthandling/resolveworkoutname%28for_with_%29.md): Resolves the name of the workout that the user wants to pause.

### Confirming the Intent

- [confirmPauseWorkout:completion:](inpauseworkoutintenthandling/confirm%28intent_completion_%29.md): Confirms that you can pause the current workout.

### Handling the Intent

- [handlePauseWorkout:completion:](inpauseworkoutintenthandling/handle%28intent_completion_%29.md): Handle pausing the workout.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INWorkoutsDomainHandling](inworkoutsdomainhandling.md)

## See Also

### Pause a Workout

- [INPauseWorkoutIntent](inpauseworkoutintent.md): A request to pause the current workout that also stops the gathering of workout data.
- [INPauseWorkoutIntentResponse](inpauseworkoutintentresponse.md): Your app’s response to a pause workout intent.
