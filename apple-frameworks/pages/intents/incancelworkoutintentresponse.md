> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incancelworkoutintentresponse](https://developer.apple.com/documentation/intents/incancelworkoutintentresponse)

# INCancelWorkoutIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Your app’s response to a cancel workout intent.

## Declaration

```swift
class INCancelWorkoutIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INCancelWorkoutIntentResponse](incancelworkoutintentresponse.md) object to specify whether your app is able to cancel a workout. The response object contains only the status code that indicates whether to launch your app or whether there was a problem.

You create an [INCancelWorkoutIntentResponse](incancelworkoutintentresponse.md) object in the [handle(intent:completion:)](incancelworkoutintenthandling/handle%28intent_completion_%29.md) and [confirm(intent:completion:)](incancelworkoutintenthandling/confirm%28intent_completion_%29.md) methods of your cancel workout handler object. For more information about implementing your handler object, see [INCancelWorkoutIntentHandling](incancelworkoutintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](incancelworkoutintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](incancelworkoutintentresponse/code.md): The code that indicates whether you successfully handled the intent.
- [INCancelWorkoutIntentResponseCode](incancelworkoutintentresponsecode.md): Constants that indicate the response state.

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

### Cancel a Workout

- [INCancelWorkoutIntentHandling](incancelworkoutintenthandling.md): The interface that handles requests to cancel a workout.
- [INCancelWorkoutIntent](incancelworkoutintent.md): A request to cancel an active workout.

# INCancelWorkoutIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Your app’s response to a cancel workout intent.

## Declaration

```objectivec
@interface INCancelWorkoutIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INCancelWorkoutIntentResponse](incancelworkoutintentresponse.md) object to specify whether your app is able to cancel a workout. The response object contains only the status code that indicates whether to launch your app or whether there was a problem.

You create an [INCancelWorkoutIntentResponse](incancelworkoutintentresponse.md) object in the [handleCancelWorkout:completion:](incancelworkoutintenthandling/handle%28intent_completion_%29.md) and [confirmCancelWorkout:completion:](incancelworkoutintenthandling/confirm%28intent_completion_%29.md) methods of your cancel workout handler object. For more information about implementing your handler object, see [INCancelWorkoutIntentHandling](incancelworkoutintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](incancelworkoutintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](incancelworkoutintentresponse/code.md): The code that indicates whether you successfully handled the intent.
- [INCancelWorkoutIntentResponseCode](incancelworkoutintentresponsecode.md): Constants that indicate the response state.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Cancel a Workout

- [INCancelWorkoutIntentHandling](incancelworkoutintenthandling.md): The interface that handles requests to cancel a workout.
- [INCancelWorkoutIntent](incancelworkoutintent.md): A request to cancel an active workout.
