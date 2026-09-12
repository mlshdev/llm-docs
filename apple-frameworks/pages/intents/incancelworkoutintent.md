> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incancelworkoutintent](https://developer.apple.com/documentation/intents/incancelworkoutintent)

# INCancelWorkoutIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A request to cancel an active workout.

## Declaration

```swift
class INCancelWorkoutIntent
```

<a id="overview"></a>

## Overview

SiriKit creates an [INCancelWorkoutIntent](incancelworkoutintent.md) object when the user asks to cancel a currently running workout. Canceling a workout stops the workout and doesn’t record any progress toward the workout goals. Use this intent object to get the workout parameters.

To handle this intent, the handler object in your Intents extension must adopt the [INCancelWorkoutIntentHandling](incancelworkoutintenthandling.md) protocol. Your handler should confirm the request and create an [INCancelWorkoutIntentResponse](incancelworkoutintentresponse.md) object to indicate it’s possible to cancel the workout. For the successful handling of the intent, SiriKit launches your app and passes it an [NSUserActivity](../foundation/nsuseractivity.md) object that your app must then use to cancel the workout.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents, Siri Suggestions |
| Always requires unlocked device | Yes |

## Topics

### Creating the Intent Object

- [init(workoutName:)](incancelworkoutintent/init%28workoutname_%29.md): Initializes an intent object with the specified workout name.

### Specifying Workout Details

- [workoutName](incancelworkoutintent/workoutname.md): The name of the workout.

## Relationships

### Inherits From

- [INIntent](inintent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [INIntentSetImageKeyPath](inintentsetimagekeypath.md)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Cancel a Workout

- [INCancelWorkoutIntentHandling](incancelworkoutintenthandling.md): The interface that handles requests to cancel a workout.
- [INCancelWorkoutIntentResponse](incancelworkoutintentresponse.md): Your app’s response to a cancel workout intent.

# INCancelWorkoutIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A request to cancel an active workout.

## Declaration

```objectivec
@interface INCancelWorkoutIntent : INIntent
```

<a id="overview"></a>

## Overview

SiriKit creates an [INCancelWorkoutIntent](incancelworkoutintent.md) object when the user asks to cancel a currently running workout. Canceling a workout stops the workout and doesn’t record any progress toward the workout goals. Use this intent object to get the workout parameters.

To handle this intent, the handler object in your Intents extension must adopt the [INCancelWorkoutIntentHandling](incancelworkoutintenthandling.md) protocol. Your handler should confirm the request and create an [INCancelWorkoutIntentResponse](incancelworkoutintentresponse.md) object to indicate it’s possible to cancel the workout. For the successful handling of the intent, SiriKit launches your app and passes it an [NSUserActivity](../foundation/nsuseractivity.md) object that your app must then use to cancel the workout.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents, Siri Suggestions |
| Always requires unlocked device | Yes |

## Topics

### Creating the Intent Object

- [initWithWorkoutName:](incancelworkoutintent/init%28workoutname_%29.md): Initializes an intent object with the specified workout name.

### Specifying Workout Details

- [workoutName](incancelworkoutintent/workoutname.md): The name of the workout.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### Cancel a Workout

- [INCancelWorkoutIntentHandling](incancelworkoutintenthandling.md): The interface that handles requests to cancel a workout.
- [INCancelWorkoutIntentResponse](incancelworkoutintentresponse.md): Your app’s response to a cancel workout intent.
