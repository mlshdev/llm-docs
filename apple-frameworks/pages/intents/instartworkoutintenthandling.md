> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartworkoutintenthandling](https://developer.apple.com/documentation/intents/instartworkoutintenthandling)

# INStartWorkoutIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

An interface that handles requests to start a workout.

## Declaration

```swift
protocol INStartWorkoutIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the [INStartWorkoutIntentHandling](instartworkoutintenthandling.md) protocol to resolve, confirm, and handle requests to start a workout using your app. Adopt this protocol in an object of your Intents extension capable of validating the workout name or goals.

You don’t actually start a workout from your Intents extension. When your [handle(intent:completion:)](instartworkoutintenthandling/handle%28intent_completion_%29.md) returns, Siri launches your app and passes it an [NSUserActivity](../foundation/nsuseractivity.md) object that contains the [INStartWorkoutIntent](instartworkoutintent.md) object and your response. Your app uses the information in those objects to start the workout.

## Topics

### Resolving the Intent Parameters

- [resolveWorkoutName(for:with:)](instartworkoutintenthandling/resolveworkoutname%28for_with_%29.md): Resolves the workout name selected by the user.
- [resolveGoalValue(for:with:)](instartworkoutintenthandling/resolvegoalvalue%28for_with_%29.md): Resolves the numerical goal of a user’s workout.
- [resolveWorkoutGoalUnitType(for:with:)](instartworkoutintenthandling/resolveworkoutgoalunittype%28for_with_%29.md): Resolves the units for the user’s workout goal.
- [resolveWorkoutLocationType(for:with:)](instartworkoutintenthandling/resolveworkoutlocationtype%28for_with_%29.md): Resolves the location type of a user’s workout.
- [resolveIsOpenEnded(for:with:)](instartworkoutintenthandling/resolveisopenended%28for_with_%29.md): Resolves whether the user’s workout is open ended.

### Confirming the Response

- [confirm(intent:completion:)](instartworkoutintenthandling/confirm%28intent_completion_%29.md): Validates that your app is able to start the workout.

### Handling the Intent

- [handle(intent:completion:)](instartworkoutintenthandling/handle%28intent_completion_%29.md): Handles starting the workout.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INWorkoutsDomainHandling](inworkoutsdomainhandling.md)

## See Also

### Start a Workout

- [INStartWorkoutIntent](instartworkoutintent.md): A request to start a workout for the user.
- [INStartWorkoutIntentResponse](instartworkoutintentresponse.md): Your app’s response to a start workout intent.

# INStartWorkoutIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

An interface that handles requests to start a workout.

## Declaration

```objectivec
@protocol INStartWorkoutIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the [INStartWorkoutIntentHandling](instartworkoutintenthandling.md) protocol to resolve, confirm, and handle requests to start a workout using your app. Adopt this protocol in an object of your Intents extension capable of validating the workout name or goals.

You don’t actually start a workout from your Intents extension. When your [handleStartWorkout:completion:](instartworkoutintenthandling/handle%28intent_completion_%29.md) returns, Siri launches your app and passes it an [NSUserActivity](../foundation/nsuseractivity.md) object that contains the [INStartWorkoutIntent](instartworkoutintent.md) object and your response. Your app uses the information in those objects to start the workout.

## Topics

### Resolving the Intent Parameters

- [resolveWorkoutNameForStartWorkout:withCompletion:](instartworkoutintenthandling/resolveworkoutname%28for_with_%29.md): Resolves the workout name selected by the user.
- [resolveGoalValueForStartWorkout:withCompletion:](instartworkoutintenthandling/resolvegoalvalue%28for_with_%29.md): Resolves the numerical goal of a user’s workout.
- [resolveWorkoutGoalUnitTypeForStartWorkout:withCompletion:](instartworkoutintenthandling/resolveworkoutgoalunittype%28for_with_%29.md): Resolves the units for the user’s workout goal.
- [resolveWorkoutLocationTypeForStartWorkout:withCompletion:](instartworkoutintenthandling/resolveworkoutlocationtype%28for_with_%29.md): Resolves the location type of a user’s workout.
- [resolveIsOpenEndedForStartWorkout:withCompletion:](instartworkoutintenthandling/resolveisopenended%28for_with_%29.md): Resolves whether the user’s workout is open ended.

### Confirming the Response

- [confirmStartWorkout:completion:](instartworkoutintenthandling/confirm%28intent_completion_%29.md): Validates that your app is able to start the workout.

### Handling the Intent

- [handleStartWorkout:completion:](instartworkoutintenthandling/handle%28intent_completion_%29.md): Handles starting the workout.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INWorkoutsDomainHandling](inworkoutsdomainhandling.md)

## See Also

### Start a Workout

- [INStartWorkoutIntent](instartworkoutintent.md): A request to start a workout for the user.
- [INStartWorkoutIntentResponse](instartworkoutintentresponse.md): Your app’s response to a start workout intent.
