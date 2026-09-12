> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inresumeworkoutintentresponse](https://developer.apple.com/documentation/intents/inresumeworkoutintentresponse)

# INResumeWorkoutIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Your app’s response to a resume workout intent.

## Declaration

```swift
class INResumeWorkoutIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INResumeWorkoutIntentResponse](inresumeworkoutintentresponse.md) object to specify whether your app is able to resume a workout. The response object contains only the status code that indicates whether to launch your app or whether there was a problem.

You create an [INResumeWorkoutIntentResponse](inresumeworkoutintentresponse.md) object in the [handle(intent:completion:)](inresumeworkoutintenthandling/handle%28intent_completion_%29.md) and [confirm(intent:completion:)](inresumeworkoutintenthandling/confirm%28intent_completion_%29.md) methods of your resume workout handler object. For more information about implementing your handler object, see [INResumeWorkoutIntentHandling](inresumeworkoutintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](inresumeworkoutintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](inresumeworkoutintentresponse/code.md): The code that indicates whether you successfully handled the intent.
- [INResumeWorkoutIntentResponseCode](inresumeworkoutintentresponsecode.md): Constants that indicate the response state.

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

### Resume a Workout

- [INResumeWorkoutIntentHandling](inresumeworkoutintenthandling.md): The interface that handles requests to resume a workout.
- [INResumeWorkoutIntent](inresumeworkoutintent.md): A request to resume a paused workout.

# INResumeWorkoutIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Your app’s response to a resume workout intent.

## Declaration

```objectivec
@interface INResumeWorkoutIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INResumeWorkoutIntentResponse](inresumeworkoutintentresponse.md) object to specify whether your app is able to resume a workout. The response object contains only the status code that indicates whether to launch your app or whether there was a problem.

You create an [INResumeWorkoutIntentResponse](inresumeworkoutintentresponse.md) object in the [handleResumeWorkout:completion:](inresumeworkoutintenthandling/handle%28intent_completion_%29.md) and [confirmResumeWorkout:completion:](inresumeworkoutintenthandling/confirm%28intent_completion_%29.md) methods of your resume workout handler object. For more information about implementing your handler object, see [INResumeWorkoutIntentHandling](inresumeworkoutintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](inresumeworkoutintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](inresumeworkoutintentresponse/code.md): The code that indicates whether you successfully handled the intent.
- [INResumeWorkoutIntentResponseCode](inresumeworkoutintentresponsecode.md): Constants that indicate the response state.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Resume a Workout

- [INResumeWorkoutIntentHandling](inresumeworkoutintenthandling.md): The interface that handles requests to resume a workout.
- [INResumeWorkoutIntent](inresumeworkoutintent.md): A request to resume a paused workout.
