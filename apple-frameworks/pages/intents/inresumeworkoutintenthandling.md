> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inresumeworkoutintenthandling](https://developer.apple.com/documentation/intents/inresumeworkoutintenthandling)

# INResumeWorkoutIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The interface that handles requests to resume a workout.

## Declaration

```swift
protocol INResumeWorkoutIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the [INResumeWorkoutIntentHandling](inresumeworkoutintenthandling.md) protocol to resolve, confirm, and handle requests to resume a paused workout that’s using your app. Adopt this protocol in an object of your Intents extension that’s capable of validating the workout name.

You don’t actually resume the workout from your Intents extension. When your [handle(intent:completion:)](inresumeworkoutintenthandling/handle%28intent_completion_%29.md) returns, Siri launches your app and passes it an [NSUserActivity](../foundation/nsuseractivity.md) object that contains the intent object and your response. Your app uses the information in those objects to resume the workout.

## Topics

### Resolving the Intent Parameters

- [resolveWorkoutName(for:with:)](inresumeworkoutintenthandling/resolveworkoutname%28for_with_%29.md): Resolves the workout name that the user wants to resume.

### Confirming the Response

- [confirm(intent:completion:)](inresumeworkoutintenthandling/confirm%28intent_completion_%29.md): Confirms that your app is able to resume the workout.

### Handling the Intent

- [handle(intent:completion:)](inresumeworkoutintenthandling/handle%28intent_completion_%29.md): Handles resuming the workout.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INWorkoutsDomainHandling](inworkoutsdomainhandling.md)

## See Also

### Resume a Workout

- [INResumeWorkoutIntent](inresumeworkoutintent.md): A request to resume a paused workout.
- [INResumeWorkoutIntentResponse](inresumeworkoutintentresponse.md): Your app’s response to a resume workout intent.

# INResumeWorkoutIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The interface that handles requests to resume a workout.

## Declaration

```objectivec
@protocol INResumeWorkoutIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the [INResumeWorkoutIntentHandling](inresumeworkoutintenthandling.md) protocol to resolve, confirm, and handle requests to resume a paused workout that’s using your app. Adopt this protocol in an object of your Intents extension that’s capable of validating the workout name.

You don’t actually resume the workout from your Intents extension. When your [handleResumeWorkout:completion:](inresumeworkoutintenthandling/handle%28intent_completion_%29.md) returns, Siri launches your app and passes it an [NSUserActivity](../foundation/nsuseractivity.md) object that contains the intent object and your response. Your app uses the information in those objects to resume the workout.

## Topics

### Resolving the Intent Parameters

- [resolveWorkoutNameForResumeWorkout:withCompletion:](inresumeworkoutintenthandling/resolveworkoutname%28for_with_%29.md): Resolves the workout name that the user wants to resume.

### Confirming the Response

- [confirmResumeWorkout:completion:](inresumeworkoutintenthandling/confirm%28intent_completion_%29.md): Confirms that your app is able to resume the workout.

### Handling the Intent

- [handleResumeWorkout:completion:](inresumeworkoutintenthandling/handle%28intent_completion_%29.md): Handles resuming the workout.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INWorkoutsDomainHandling](inworkoutsdomainhandling.md)

## See Also

### Resume a Workout

- [INResumeWorkoutIntent](inresumeworkoutintent.md): A request to resume a paused workout.
- [INResumeWorkoutIntentResponse](inresumeworkoutintentresponse.md): Your app’s response to a resume workout intent.
