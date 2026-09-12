> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutconfiguration](https://developer.apple.com/documentation/healthkit/hkworkoutconfiguration)

# HKWorkoutConfiguration (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 3.0+

An object that contains configuration information about a workout session.

## Declaration

```swift
class HKWorkoutConfiguration
```

<a id="overview"></a>

## Overview

As with many HealthKit classes, don’t subclass the [HKWorkoutConfiguration](hkworkoutconfiguration.md) class.

## Topics

### Session settings

- [activityType](hkworkoutconfiguration/activitytype.md): The workout session’s activity type.
- [locationType](hkworkoutconfiguration/locationtype.md): The workout session’s location.
- [HKWorkoutSessionLocationType](hkworkoutsessionlocationtype.md): A constant indicating whether the workout session takes place indoors or outdoors.
- [swimmingLocationType](hkworkoutconfiguration/swimminglocationtype.md): The workout session’s swimming location.
- [HKWorkoutSwimmingLocationType](hkworkoutswimminglocationtype.md): The possible locations for swimming.
- [lapLength](hkworkoutconfiguration/laplength.md): The length of the lap for a workout session.

### Initializers

- [init(coder:)](hkworkoutconfiguration/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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

### Sessions

- [Running workout sessions](running-workout-sessions.md): Track a workout on Apple Watch.
- [Build a workout app for Apple Watch](build-a-workout-app-for-apple-watch.md): Create your own workout app, quickly and easily, with HealthKit and SwiftUI.
- [Building a multidevice workout app](building-a-multidevice-workout-app.md): Mirror a workout from a watchOS app to its companion iOS app, and perform bidirectional communication between them.
- [Building a workout app for iPhone and iPad](building-a-workout-app-for-iphone-and-ipad.md): Start a workout in iOS, control it from the Lock Screen with App Intents, and present the workout status with Live Activities.
- [HKWorkoutSession](hkworkoutsession.md): A session that tracks a person’s workout.
- [HKWorkoutSessionState](hkworkoutsessionstate.md): A workout session’s state.
- [HKLiveWorkoutBuilder](hkliveworkoutbuilder.md): A builder object that constructs a workout incrementally based on live data from an active workout session.
- [HKLiveWorkoutBuilderDelegate](hkliveworkoutbuilderdelegate.md): A protocol that defines methods for receiving updates from a live workout builder.
- [HKLiveWorkoutDataSource](hkliveworkoutdatasource.md): A data source that automatically provides live data from an active workout session.

# HKWorkoutConfiguration (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 3.0+

An object that contains configuration information about a workout session.

## Declaration

```objectivec
@interface HKWorkoutConfiguration : NSObject
```

<a id="overview"></a>

## Overview

As with many HealthKit classes, don’t subclass the [HKWorkoutConfiguration](hkworkoutconfiguration.md) class.

## Topics

### Session settings

- [activityType](hkworkoutconfiguration/activitytype.md): The workout session’s activity type.
- [locationType](hkworkoutconfiguration/locationtype.md): The workout session’s location.
- [HKWorkoutSessionLocationType](hkworkoutsessionlocationtype.md): A constant indicating whether the workout session takes place indoors or outdoors.
- [swimmingLocationType](hkworkoutconfiguration/swimminglocationtype.md): The workout session’s swimming location.
- [HKWorkoutSwimmingLocationType](hkworkoutswimminglocationtype.md): The possible locations for swimming.
- [lapLength](hkworkoutconfiguration/laplength.md): The length of the lap for a workout session.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Sessions

- [Running workout sessions](running-workout-sessions.md): Track a workout on Apple Watch.
- [Build a workout app for Apple Watch](build-a-workout-app-for-apple-watch.md): Create your own workout app, quickly and easily, with HealthKit and SwiftUI.
- [Building a multidevice workout app](building-a-multidevice-workout-app.md): Mirror a workout from a watchOS app to its companion iOS app, and perform bidirectional communication between them.
- [Building a workout app for iPhone and iPad](building-a-workout-app-for-iphone-and-ipad.md): Start a workout in iOS, control it from the Lock Screen with App Intents, and present the workout status with Live Activities.
- [HKWorkoutSession](hkworkoutsession.md): A session that tracks a person’s workout.
- [HKWorkoutSessionState](hkworkoutsessionstate.md): A workout session’s state.
- [HKLiveWorkoutBuilder](hkliveworkoutbuilder.md): A builder object that constructs a workout incrementally based on live data from an active workout session.
- [HKLiveWorkoutBuilderDelegate](hkliveworkoutbuilderdelegate.md): A protocol that defines methods for receiving updates from a live workout builder.
- [HKLiveWorkoutDataSource](hkliveworkoutdatasource.md): A data source that automatically provides live data from an active workout session.
