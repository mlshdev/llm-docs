> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inendworkoutintentresponse](https://developer.apple.com/documentation/intents/inendworkoutintentresponse)

# INEndWorkoutIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Your app’s response to an end workout intent.

## Declaration

```swift
class INEndWorkoutIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INEndWorkoutIntentResponse](inendworkoutintentresponse.md) object to specify whether your app is able to end a workout. The response object contains only the status code that indicates whether to launch your app or whether there was a problem.

You create an [INEndWorkoutIntentResponse](inendworkoutintentresponse.md) object in the [handle(intent:completion:)](inendworkoutintenthandling/handle%28intent_completion_%29.md) and [confirm(intent:completion:)](inendworkoutintenthandling/confirm%28intent_completion_%29.md) methods of your end workout handler object. For more information about implementing your handler object, see [INEndWorkoutIntentHandling](inendworkoutintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](inendworkoutintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](inendworkoutintentresponse/code.md): The code that indicates whether you successfully handled the intent.
- [INEndWorkoutIntentResponseCode](inendworkoutintentresponsecode.md): Constants that indicate the response state.

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

### End a Workout

- [INEndWorkoutIntentHandling](inendworkoutintenthandling.md): An interface that handles requests to complete a workout.
- [INEndWorkoutIntent](inendworkoutintent.md): A request to end the current workout that also validates workout parameters and saves the results.

# INEndWorkoutIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Your app’s response to an end workout intent.

## Declaration

```objectivec
@interface INEndWorkoutIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INEndWorkoutIntentResponse](inendworkoutintentresponse.md) object to specify whether your app is able to end a workout. The response object contains only the status code that indicates whether to launch your app or whether there was a problem.

You create an [INEndWorkoutIntentResponse](inendworkoutintentresponse.md) object in the [handleEndWorkout:completion:](inendworkoutintenthandling/handle%28intent_completion_%29.md) and [confirmEndWorkout:completion:](inendworkoutintenthandling/confirm%28intent_completion_%29.md) methods of your end workout handler object. For more information about implementing your handler object, see [INEndWorkoutIntentHandling](inendworkoutintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](inendworkoutintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](inendworkoutintentresponse/code.md): The code that indicates whether you successfully handled the intent.
- [INEndWorkoutIntentResponseCode](inendworkoutintentresponsecode.md): Constants that indicate the response state.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### End a Workout

- [INEndWorkoutIntentHandling](inendworkoutintenthandling.md): An interface that handles requests to complete a workout.
- [INEndWorkoutIntent](inendworkoutintent.md): A request to end the current workout that also validates workout parameters and saves the results.
