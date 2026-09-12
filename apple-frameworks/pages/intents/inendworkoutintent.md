> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inendworkoutintent](https://developer.apple.com/documentation/intents/inendworkoutintent)

# INEndWorkoutIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A request to end the current workout that also validates workout parameters and saves the results.

## Declaration

```swift
class INEndWorkoutIntent
```

<a id="overview"></a>

## Overview

SiriKit creates an [INEndWorkoutIntent](inendworkoutintent.md) object when the user asks to finish an in-progress workout. Finishing a workout stops it and records any progress made toward the workout’s goals. Use this intent object to validate the workout parameters.

To handle this intent, the handler object in your Intents extension must adopt the [INEndWorkoutIntentHandling](inendworkoutintenthandling.md) protocol. Your handler should confirm the request and create an [INEndWorkoutIntentResponse](inendworkoutintentresponse.md) object that indicates it’s possible to end the workout. For the successful handling of the intent, SiriKit launches your app and passes it an [NSUserActivity](../foundation/nsuseractivity.md) object your app must then use to end the workout.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents, Siri Suggestions |
| Always requires unlocked device | Yes |

## Topics

### Creating the Intent Object

- [init(workoutName:)](inendworkoutintent/init%28workoutname_%29.md): Initializes an intent object with the specified workout name.

### Specifying Workout Details

- [workoutName](inendworkoutintent/workoutname.md): The name of the workout.

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

### End a Workout

- [INEndWorkoutIntentHandling](inendworkoutintenthandling.md): An interface that handles requests to complete a workout.
- [INEndWorkoutIntentResponse](inendworkoutintentresponse.md): Your app’s response to an end workout intent.

# INEndWorkoutIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A request to end the current workout that also validates workout parameters and saves the results.

## Declaration

```objectivec
@interface INEndWorkoutIntent : INIntent
```

<a id="overview"></a>

## Overview

SiriKit creates an [INEndWorkoutIntent](inendworkoutintent.md) object when the user asks to finish an in-progress workout. Finishing a workout stops it and records any progress made toward the workout’s goals. Use this intent object to validate the workout parameters.

To handle this intent, the handler object in your Intents extension must adopt the [INEndWorkoutIntentHandling](inendworkoutintenthandling.md) protocol. Your handler should confirm the request and create an [INEndWorkoutIntentResponse](inendworkoutintentresponse.md) object that indicates it’s possible to end the workout. For the successful handling of the intent, SiriKit launches your app and passes it an [NSUserActivity](../foundation/nsuseractivity.md) object your app must then use to end the workout.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents, Siri Suggestions |
| Always requires unlocked device | Yes |

## Topics

### Creating the Intent Object

- [initWithWorkoutName:](inendworkoutintent/init%28workoutname_%29.md): Initializes an intent object with the specified workout name.

### Specifying Workout Details

- [workoutName](inendworkoutintent/workoutname.md): The name of the workout.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### End a Workout

- [INEndWorkoutIntentHandling](inendworkoutintenthandling.md): An interface that handles requests to complete a workout.
- [INEndWorkoutIntentResponse](inendworkoutintentresponse.md): Your app’s response to an end workout intent.
