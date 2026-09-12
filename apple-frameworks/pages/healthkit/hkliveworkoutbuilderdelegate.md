> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkliveworkoutbuilderdelegate](https://developer.apple.com/documentation/healthkit/hkliveworkoutbuilderdelegate)

# HKLiveWorkoutBuilderDelegate (Swift)

**Framework:** HealthKit  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS · watchOS 5.0+

A protocol that defines methods for receiving updates from a live workout builder.

## Declaration

```swift
protocol HKLiveWorkoutBuilderDelegate : NSObjectProtocol
```

## Mentioned In

- [Running workout sessions](running-workout-sessions.md)
- [Accessing workout zone data](accessing-workout-zone-data.md)

<a id="overview"></a>

## Overview

Conform to this protocol to receive notifications about workout data collection, events, activities, and zone changes during a live workout session.

## Topics

### Receiving data updates

- [workoutBuilder(\_:didCollectDataOf:)](hkliveworkoutbuilderdelegate/workoutbuilder%28__didcollectdataof_%29.md): Tells the delegate that new data has been added to the builder.
- [workoutBuilderDidCollectEvent(\_:)](hkliveworkoutbuilderdelegate/workoutbuilderdidcollectevent%28__%29.md): Tells the delegate that a new event has been added to the builder.

### Receiving activity updates

- [workoutBuilder(\_:didBegin:)](hkliveworkoutbuilderdelegate/workoutbuilder%28__didbegin_%29.md): Tells the delegate that a new workout activity has started.
- [workoutBuilder(\_:didEnd:)](hkliveworkoutbuilderdelegate/workoutbuilder%28__didend_%29.md): Tells the delegate that the current workout activity has ended.

### Receiving zone updates

- [workoutBuilder(\_:didUpdateWorkoutZone:)](hkliveworkoutbuilderdelegate/workoutbuilder%28__didupdateworkoutzone_%29.md): Tells the delegate that the person changed zones during the workout.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Sessions

- [Running workout sessions](running-workout-sessions.md): Track a workout on Apple Watch.
- [Build a workout app for Apple Watch](build-a-workout-app-for-apple-watch.md): Create your own workout app, quickly and easily, with HealthKit and SwiftUI.
- [Building a multidevice workout app](building-a-multidevice-workout-app.md): Mirror a workout from a watchOS app to its companion iOS app, and perform bidirectional communication between them.
- [Building a workout app for iPhone and iPad](building-a-workout-app-for-iphone-and-ipad.md): Start a workout in iOS, control it from the Lock Screen with App Intents, and present the workout status with Live Activities.
- [HKWorkoutSession](hkworkoutsession.md): A session that tracks a person’s workout.
- [HKWorkoutConfiguration](hkworkoutconfiguration.md): An object that contains configuration information about a workout session.
- [HKWorkoutSessionState](hkworkoutsessionstate.md): A workout session’s state.
- [HKLiveWorkoutBuilder](hkliveworkoutbuilder.md): A builder object that constructs a workout incrementally based on live data from an active workout session.
- [HKLiveWorkoutDataSource](hkliveworkoutdatasource.md): A data source that automatically provides live data from an active workout session.

# HKLiveWorkoutBuilderDelegate (Objective-C)

**Framework:** HealthKit  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS · watchOS 5.0+

A protocol that defines methods for receiving updates from a live workout builder.

## Declaration

```objectivec
@protocol HKLiveWorkoutBuilderDelegate <NSObject>
```

## Mentioned In

- [Running workout sessions](running-workout-sessions.md)
- [Accessing workout zone data](accessing-workout-zone-data.md)

<a id="overview"></a>

## Overview

Conform to this protocol to receive notifications about workout data collection, events, activities, and zone changes during a live workout session.

## Topics

### Receiving data updates

- [workoutBuilder:didCollectDataOfTypes:](hkliveworkoutbuilderdelegate/workoutbuilder%28__didcollectdataof_%29.md): Tells the delegate that new data has been added to the builder.
- [workoutBuilderDidCollectEvent:](hkliveworkoutbuilderdelegate/workoutbuilderdidcollectevent%28__%29.md): Tells the delegate that a new event has been added to the builder.

### Receiving activity updates

- [workoutBuilder:didBeginActivity:](hkliveworkoutbuilderdelegate/workoutbuilder%28__didbegin_%29.md): Tells the delegate that a new workout activity has started.
- [workoutBuilder:didEndActivity:](hkliveworkoutbuilderdelegate/workoutbuilder%28__didend_%29.md): Tells the delegate that the current workout activity has ended.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Sessions

- [Running workout sessions](running-workout-sessions.md): Track a workout on Apple Watch.
- [Build a workout app for Apple Watch](build-a-workout-app-for-apple-watch.md): Create your own workout app, quickly and easily, with HealthKit and SwiftUI.
- [Building a multidevice workout app](building-a-multidevice-workout-app.md): Mirror a workout from a watchOS app to its companion iOS app, and perform bidirectional communication between them.
- [Building a workout app for iPhone and iPad](building-a-workout-app-for-iphone-and-ipad.md): Start a workout in iOS, control it from the Lock Screen with App Intents, and present the workout status with Live Activities.
- [HKWorkoutSession](hkworkoutsession.md): A session that tracks a person’s workout.
- [HKWorkoutConfiguration](hkworkoutconfiguration.md): An object that contains configuration information about a workout session.
- [HKWorkoutSessionState](hkworkoutsessionstate.md): A workout session’s state.
- [HKLiveWorkoutBuilder](hkliveworkoutbuilder.md): A builder object that constructs a workout incrementally based on live data from an active workout session.
- [HKLiveWorkoutDataSource](hkliveworkoutdatasource.md): A data source that automatically provides live data from an active workout session.
