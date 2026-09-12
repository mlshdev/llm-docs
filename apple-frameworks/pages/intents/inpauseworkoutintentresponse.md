> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpauseworkoutintentresponse](https://developer.apple.com/documentation/intents/inpauseworkoutintentresponse)

# INPauseWorkoutIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Your app’s response to a pause workout intent.

## Declaration

```swift
class INPauseWorkoutIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INPauseWorkoutIntentResponse](inpauseworkoutintentresponse.md) object to specify whether your app is able to pause a workout. The response object contains only the status code that indicates whether to launch your app or whether there was a problem.

You create an [INPauseWorkoutIntentResponse](inpauseworkoutintentresponse.md) object in the [handle(intent:completion:)](inpauseworkoutintenthandling/handle%28intent_completion_%29.md) and [confirm(intent:completion:)](inpauseworkoutintenthandling/confirm%28intent_completion_%29.md) methods of your pause workout handler object. For more information about implementing your handler object, see [INPauseWorkoutIntentHandling](inpauseworkoutintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](inpauseworkoutintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](inpauseworkoutintentresponse/code.md): The code that indicates whether you successfully handled the intent.
- [INPauseWorkoutIntentResponseCode](inpauseworkoutintentresponsecode.md): Constants that indicate the response state.

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

### Pause a Workout

- [INPauseWorkoutIntentHandling](inpauseworkoutintenthandling.md): An interface that handles requests to pause a workout.
- [INPauseWorkoutIntent](inpauseworkoutintent.md): A request to pause the current workout that also stops the gathering of workout data.

# INPauseWorkoutIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Your app’s response to a pause workout intent.

## Declaration

```objectivec
@interface INPauseWorkoutIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INPauseWorkoutIntentResponse](inpauseworkoutintentresponse.md) object to specify whether your app is able to pause a workout. The response object contains only the status code that indicates whether to launch your app or whether there was a problem.

You create an [INPauseWorkoutIntentResponse](inpauseworkoutintentresponse.md) object in the [handlePauseWorkout:completion:](inpauseworkoutintenthandling/handle%28intent_completion_%29.md) and [confirmPauseWorkout:completion:](inpauseworkoutintenthandling/confirm%28intent_completion_%29.md) methods of your pause workout handler object. For more information about implementing your handler object, see [INPauseWorkoutIntentHandling](inpauseworkoutintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](inpauseworkoutintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](inpauseworkoutintentresponse/code.md): The code that indicates whether you successfully handled the intent.
- [INPauseWorkoutIntentResponseCode](inpauseworkoutintentresponsecode.md): Constants that indicate the response state.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Pause a Workout

- [INPauseWorkoutIntentHandling](inpauseworkoutintenthandling.md): An interface that handles requests to pause a workout.
- [INPauseWorkoutIntent](inpauseworkoutintent.md): A request to pause the current workout that also stops the gathering of workout data.
