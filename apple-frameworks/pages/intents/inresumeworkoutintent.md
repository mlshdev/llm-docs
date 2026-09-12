> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inresumeworkoutintent](https://developer.apple.com/documentation/intents/inresumeworkoutintent)

# INResumeWorkoutIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A request to resume a paused workout.

## Declaration

```swift
class INResumeWorkoutIntent
```

<a id="overview"></a>

## Overview

SiriKit creates an [INResumeWorkoutIntent](inresumeworkoutintent.md) object when the user asks to resume a currently paused workout. Resuming a workout resumes gathering workout data and counting that data toward the user’s current workout goal. Use this intent object to validate the workout parameters.

To handle this intent, the handler object in your Intents extension must adopt the [INResumeWorkoutIntentHandling](inresumeworkoutintenthandling.md) protocol. Your handler should confirm the request and create an [INResumeWorkoutIntentResponse](inresumeworkoutintentresponse.md) object that indicates it’s possible to resume the workout. For the successful handling of the intent, SiriKit launches your app and passes it an [NSUserActivity](../foundation/nsuseractivity.md) object your app must then use to resume the workout.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents, Siri Suggestions |
| Always requires unlocked device | Yes |

## Topics

### Creating the Intent Object

- [init(workoutName:)](inresumeworkoutintent/init%28workoutname_%29.md): Initializes an intent object with the specified workout name.

### Specifying Workout Details

- [workoutName](inresumeworkoutintent/workoutname.md): The name of the workout.

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

### Resume a Workout

- [INResumeWorkoutIntentHandling](inresumeworkoutintenthandling.md): The interface that handles requests to resume a workout.
- [INResumeWorkoutIntentResponse](inresumeworkoutintentresponse.md): Your app’s response to a resume workout intent.

# INResumeWorkoutIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A request to resume a paused workout.

## Declaration

```objectivec
@interface INResumeWorkoutIntent : INIntent
```

<a id="overview"></a>

## Overview

SiriKit creates an [INResumeWorkoutIntent](inresumeworkoutintent.md) object when the user asks to resume a currently paused workout. Resuming a workout resumes gathering workout data and counting that data toward the user’s current workout goal. Use this intent object to validate the workout parameters.

To handle this intent, the handler object in your Intents extension must adopt the [INResumeWorkoutIntentHandling](inresumeworkoutintenthandling.md) protocol. Your handler should confirm the request and create an [INResumeWorkoutIntentResponse](inresumeworkoutintentresponse.md) object that indicates it’s possible to resume the workout. For the successful handling of the intent, SiriKit launches your app and passes it an [NSUserActivity](../foundation/nsuseractivity.md) object your app must then use to resume the workout.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents, Siri Suggestions |
| Always requires unlocked device | Yes |

## Topics

### Creating the Intent Object

- [initWithWorkoutName:](inresumeworkoutintent/init%28workoutname_%29.md): Initializes an intent object with the specified workout name.

### Specifying Workout Details

- [workoutName](inresumeworkoutintent/workoutname.md): The name of the workout.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### Resume a Workout

- [INResumeWorkoutIntentHandling](inresumeworkoutintenthandling.md): The interface that handles requests to resume a workout.
- [INResumeWorkoutIntentResponse](inresumeworkoutintentresponse.md): Your app’s response to a resume workout intent.
