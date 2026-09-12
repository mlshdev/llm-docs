> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpauseworkoutintent](https://developer.apple.com/documentation/intents/inpauseworkoutintent)

# INPauseWorkoutIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A request to pause the current workout that also stops the gathering of workout data.

## Declaration

```swift
class INPauseWorkoutIntent
```

<a id="overview"></a>

## Overview

SiriKit creates an [INPauseWorkoutIntent](inpauseworkoutintent.md) object when the user asks to pause a currently running workout. Pausing a workout stops the gathering of workout data without clearing the current workout progress information. Use this intent object to validate workout parameters.

To handle this intent, the handler object in your Intents extension must adopt the [INPauseWorkoutIntentHandling](inpauseworkoutintenthandling.md) protocol. Your handler should confirm the request and create an [INPauseWorkoutIntentResponse](inpauseworkoutintentresponse.md) object that indicates it’s possible to pause the workout. SiriKit launches your app and passes it an [NSUserActivity](../foundation/nsuseractivity.md) object that your app must then use to pause the workout.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents, Siri Suggestions |
| Always requires unlocked device | Yes |

## Topics

### Creating the Intent Object

- [init(workoutName:)](inpauseworkoutintent/init%28workoutname_%29.md): Initializes an intent object with the specified workout name.

### Specifying Workout Details

- [workoutName](inpauseworkoutintent/workoutname.md): The name of the workout to pause.

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

### Pause a Workout

- [INPauseWorkoutIntentHandling](inpauseworkoutintenthandling.md): An interface that handles requests to pause a workout.
- [INPauseWorkoutIntentResponse](inpauseworkoutintentresponse.md): Your app’s response to a pause workout intent.

# INPauseWorkoutIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A request to pause the current workout that also stops the gathering of workout data.

## Declaration

```objectivec
@interface INPauseWorkoutIntent : INIntent
```

<a id="overview"></a>

## Overview

SiriKit creates an [INPauseWorkoutIntent](inpauseworkoutintent.md) object when the user asks to pause a currently running workout. Pausing a workout stops the gathering of workout data without clearing the current workout progress information. Use this intent object to validate workout parameters.

To handle this intent, the handler object in your Intents extension must adopt the [INPauseWorkoutIntentHandling](inpauseworkoutintenthandling.md) protocol. Your handler should confirm the request and create an [INPauseWorkoutIntentResponse](inpauseworkoutintentresponse.md) object that indicates it’s possible to pause the workout. SiriKit launches your app and passes it an [NSUserActivity](../foundation/nsuseractivity.md) object that your app must then use to pause the workout.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents, Siri Suggestions |
| Always requires unlocked device | Yes |

## Topics

### Creating the Intent Object

- [initWithWorkoutName:](inpauseworkoutintent/init%28workoutname_%29.md): Initializes an intent object with the specified workout name.

### Specifying Workout Details

- [workoutName](inpauseworkoutintent/workoutname.md): The name of the workout to pause.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### Pause a Workout

- [INPauseWorkoutIntentHandling](inpauseworkoutintenthandling.md): An interface that handles requests to pause a workout.
- [INPauseWorkoutIntentResponse](inpauseworkoutintentresponse.md): Your app’s response to a pause workout intent.
