> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartworkoutintent](https://developer.apple.com/documentation/intents/instartworkoutintent)

# INStartWorkoutIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A request to start a workout for the user.

## Declaration

```swift
class INStartWorkoutIntent
```

## Mentioned In

- [Confirming the Details of an Intent](../sirikit/confirming-the-details-of-an-intent.md)

<a id="overview"></a>

## Overview

SiriKit creates an [INStartWorkoutIntent](instartworkoutintent.md) object when the user asks to start a workout using your app. A start workout intent identifies the user-selected workout type and goals.

To handle this intent, the handler object in your Intents extension must adopt the [INStartWorkoutIntentHandling](instartworkoutintenthandling.md) protocol. Your handler should confirm the request and create an [INStartWorkoutIntentResponse](instartworkoutintentresponse.md) object that indicates it’s possible to start the workout. For the successful handling of the intent, SiriKit launches your app and passes it an [NSUserActivity](../foundation/nsuseractivity.md) object your app must then use to start the workout.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents, Siri Suggestions |
| Always requires unlocked device | Yes |

## Topics

### Creating the Intent Object

- [init(workoutName:goalValue:workoutGoalUnitType:workoutLocationType:isOpenEnded:)](instartworkoutintent/init%28workoutname_goalvalue_workoutgoalunittype_workoutlocationtype_isopenended_%29.md): Initializes an intent object with the specified workout information.

### Specifying Workout Details

- [workoutName](instartworkoutintent/workoutname.md): The name of the workout.
- [goalValue](instartworkoutintent/goalvalue-5oazy.md): The user-supplied numerical goal of the workout.
- [workoutGoalUnitType](instartworkoutintent/workoutgoalunittype.md): The units associated with the workout goal.
- [workoutLocationType](instartworkoutintent/workoutlocationtype.md): The location of the workout.
- [isOpenEnded](instartworkoutintent/isopenended-8hecn.md): A Boolean value that indicates whether the workout is open ended.

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

### Start a Workout

- [INStartWorkoutIntentHandling](instartworkoutintenthandling.md): An interface that handles requests to start a workout.
- [INStartWorkoutIntentResponse](instartworkoutintentresponse.md): Your app’s response to a start workout intent.

# INStartWorkoutIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A request to start a workout for the user.

## Declaration

```objectivec
@interface INStartWorkoutIntent : INIntent
```

## Mentioned In

- [Confirming the Details of an Intent](../sirikit/confirming-the-details-of-an-intent.md)

<a id="overview"></a>

## Overview

SiriKit creates an [INStartWorkoutIntent](instartworkoutintent.md) object when the user asks to start a workout using your app. A start workout intent identifies the user-selected workout type and goals.

To handle this intent, the handler object in your Intents extension must adopt the [INStartWorkoutIntentHandling](instartworkoutintenthandling.md) protocol. Your handler should confirm the request and create an [INStartWorkoutIntentResponse](instartworkoutintentresponse.md) object that indicates it’s possible to start the workout. For the successful handling of the intent, SiriKit launches your app and passes it an [NSUserActivity](../foundation/nsuseractivity.md) object your app must then use to start the workout.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents, Siri Suggestions |
| Always requires unlocked device | Yes |

## Topics

### Creating the Intent Object

- [initWithWorkoutName:goalValue:workoutGoalUnitType:workoutLocationType:isOpenEnded:](https://developer.apple.com/documentation/intents/instartworkoutintent/initwithworkoutname:goalvalue:workoutgoalunittype:workoutlocationtype:isopenended:): Initializes an intent object with the specified workout information.

### Specifying Workout Details

- [workoutName](instartworkoutintent/workoutname.md): The name of the workout.
- [goalValue](https://developer.apple.com/documentation/intents/instartworkoutintent/goalvalue-1dzvb): The numerical goal of the workout.
- [workoutGoalUnitType](instartworkoutintent/workoutgoalunittype.md): The units associated with the workout goal.
- [workoutLocationType](instartworkoutintent/workoutlocationtype.md): The location of the workout.
- [isOpenEnded](https://developer.apple.com/documentation/intents/instartworkoutintent/isopenended-avvd): A Boolean value indicating whether the workout is open ended.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### Start a Workout

- [INStartWorkoutIntentHandling](instartworkoutintenthandling.md): An interface that handles requests to start a workout.
- [INStartWorkoutIntentResponse](instartworkoutintentresponse.md): Your app’s response to a start workout intent.
