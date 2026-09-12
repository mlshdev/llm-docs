> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartworkoutintentresponse](https://developer.apple.com/documentation/intents/instartworkoutintentresponse)

# INStartWorkoutIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Your app’s response to a start workout intent.

## Declaration

```swift
class INStartWorkoutIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INStartWorkoutIntentResponse](instartworkoutintentresponse.md) object to specify whether your app is able to start a workout. The response object contains only the response code that indicates whether to launch your app or whether there was a problem.

You create an [INStartWorkoutIntentResponse](instartworkoutintentresponse.md) object in the [confirm(intent:completion:)](instartworkoutintenthandling/confirm%28intent_completion_%29.md) and [handle(intent:completion:)](instartworkoutintenthandling/handle%28intent_completion_%29.md) methods of your start workout handler object. For more information about implementing your handler object, see [INStartWorkoutIntentHandling](instartworkoutintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](instartworkoutintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](instartworkoutintentresponse/code.md): The code that indicates whether you successfully handled the intent.
- [INStartWorkoutIntentResponseCode](instartworkoutintentresponsecode.md): Constants that indicate the response state.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Start a Workout

- [INStartWorkoutIntentHandling](instartworkoutintenthandling.md): An interface that handles requests to start a workout.
- [INStartWorkoutIntent](instartworkoutintent.md): A request to start a workout for the user.

# INStartWorkoutIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Your app’s response to a start workout intent.

## Declaration

```objectivec
@interface INStartWorkoutIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INStartWorkoutIntentResponse](instartworkoutintentresponse.md) object to specify whether your app is able to start a workout. The response object contains only the response code that indicates whether to launch your app or whether there was a problem.

You create an [INStartWorkoutIntentResponse](instartworkoutintentresponse.md) object in the [confirmStartWorkout:completion:](instartworkoutintenthandling/confirm%28intent_completion_%29.md) and [handleStartWorkout:completion:](instartworkoutintenthandling/handle%28intent_completion_%29.md) methods of your start workout handler object. For more information about implementing your handler object, see [INStartWorkoutIntentHandling](instartworkoutintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](instartworkoutintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](instartworkoutintentresponse/code.md): The code that indicates whether you successfully handled the intent.
- [INStartWorkoutIntentResponseCode](instartworkoutintentresponsecode.md): Constants that indicate the response state.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Start a Workout

- [INStartWorkoutIntentHandling](instartworkoutintenthandling.md): An interface that handles requests to start a workout.
- [INStartWorkoutIntent](instartworkoutintent.md): A request to start a workout for the user.
