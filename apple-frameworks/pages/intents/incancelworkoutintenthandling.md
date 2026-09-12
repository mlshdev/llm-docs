> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incancelworkoutintenthandling](https://developer.apple.com/documentation/intents/incancelworkoutintenthandling)

# INCancelWorkoutIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The interface that handles requests to cancel a workout.

## Declaration

```swift
protocol INCancelWorkoutIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the [INCancelWorkoutIntentHandling](incancelworkoutintenthandling.md) protocol to resolve, confirm, and handle requests to cancel a workout using your app. Adopt this protocol in an object of your Intents extension capable of validating the workout name.

You don’t actually cancel the workout from your Intents extension. When your [handle(intent:completion:)](incancelworkoutintenthandling/handle%28intent_completion_%29.md) returns, SiriKit launches your app and passes it an [NSUserActivity](../foundation/nsuseractivity.md) object that contains the cancel workout intent object and your response. Your app uses the information in those objects to handle the cancellation.

## Topics

### Resolving the Intent Parameters

- [resolveWorkoutName(for:with:)](incancelworkoutintenthandling/resolveworkoutname%28for_with_%29.md): Resolves the workout name that the user wants to cancel.

### Confirming the Response

- [confirm(intent:completion:)](incancelworkoutintenthandling/confirm%28intent_completion_%29.md): Confirms that your app is able to cancel the workout.

### Handling the Intent

- [handle(intent:completion:)](incancelworkoutintenthandling/handle%28intent_completion_%29.md): Handles the canceling of the workout.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INWorkoutsDomainHandling](inworkoutsdomainhandling.md)

## See Also

### Cancel a Workout

- [INCancelWorkoutIntent](incancelworkoutintent.md): A request to cancel an active workout.
- [INCancelWorkoutIntentResponse](incancelworkoutintentresponse.md): Your app’s response to a cancel workout intent.

# INCancelWorkoutIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The interface that handles requests to cancel a workout.

## Declaration

```objectivec
@protocol INCancelWorkoutIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the [INCancelWorkoutIntentHandling](incancelworkoutintenthandling.md) protocol to resolve, confirm, and handle requests to cancel a workout using your app. Adopt this protocol in an object of your Intents extension capable of validating the workout name.

You don’t actually cancel the workout from your Intents extension. When your [handleCancelWorkout:completion:](incancelworkoutintenthandling/handle%28intent_completion_%29.md) returns, SiriKit launches your app and passes it an [NSUserActivity](../foundation/nsuseractivity.md) object that contains the cancel workout intent object and your response. Your app uses the information in those objects to handle the cancellation.

## Topics

### Resolving the Intent Parameters

- [resolveWorkoutNameForCancelWorkout:withCompletion:](incancelworkoutintenthandling/resolveworkoutname%28for_with_%29.md): Resolves the workout name that the user wants to cancel.

### Confirming the Response

- [confirmCancelWorkout:completion:](incancelworkoutintenthandling/confirm%28intent_completion_%29.md): Confirms that your app is able to cancel the workout.

### Handling the Intent

- [handleCancelWorkout:completion:](incancelworkoutintenthandling/handle%28intent_completion_%29.md): Handles the canceling of the workout.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INWorkoutsDomainHandling](inworkoutsdomainhandling.md)

## See Also

### Cancel a Workout

- [INCancelWorkoutIntent](incancelworkoutintent.md): A request to cancel an active workout.
- [INCancelWorkoutIntentResponse](incancelworkoutintentresponse.md): Your app’s response to a cancel workout intent.
