> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutsession](https://developer.apple.com/documentation/healthkit/hkworkoutsession)

# HKWorkoutSession (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 2.0+

A session that tracks a person’s workout.

## Declaration

```swift
class HKWorkoutSession
```

## Mentioned In

- [Running workout sessions](running-workout-sessions.md)

<a id="overview"></a>

## Overview

The session fine-tunes Apple Watch’s sensors for the specified activity. All workout sessions generate high-frequency heart rate samples; however, an outdoor cycling activity generates accurate location data, while an indoor cycling activity doesn’t.

Collecting heart rate data on iPhone or iPad requires pairing with an external heart rate sensor because these devices don’t have one. iPhone and iPad can collect various workout metrics, but the system may generate different samples than those specifically requested by an app.

You can modify the default types of data collected during a workout. After someone saves a workout, you can access and display summary statistics or chart metrics over time.

iPhone typically locks during workouts. For privacy reasons, health data usually isn’t accessible while the device is locked. However, the system can prompt someone to provide your app access to workout data even when their device is locked. You can then display Live Activities on the Lock Screen, providing health metrics without requiring the person to unlock their phone.

Siri support extends to the Lock Screen, allowing people to start, pause, resume, or cancel workouts hands-free. You can integrate Siri intents into your apps to enable this functionality.

Apple Watch runs one workout session at a time. If a second workout starts while your workout is running, your [HKWorkoutSessionDelegate](hkworkoutsessiondelegate.md) object receives an [HKError.Code.errorAnotherWorkoutSessionStarted](hkerror/code/erroranotherworkoutsessionstarted.md) error, and your session ends.

## Topics

### Creating workout sessions

- [init(healthStore:configuration:)](hkworkoutsession/init%28healthstore_configuration_%29.md): Returns a newly instantiated workout session with an associated workout builder.

### Monitoring the session

- [delegate](hkworkoutsession/delegate.md): The workout session’s delegate.
- [HKWorkoutSessionDelegate](hkworkoutsessiondelegate.md): The session delegate protocol that defines an interface for receiving notifications about errors and changes in the workout session’s state.

### Accessing the workout builder

- [associatedWorkoutBuilder()](hkworkoutsession/associatedworkoutbuilder%28%29.md): Returns the live workout builder associated with the workout session.

### Managing the workout

- [prepare()](hkworkoutsession/prepare%28%29.md): Prepares the workout session.
- [startActivity(with:)](hkworkoutsession/startactivity%28with_%29.md): Starts the workout session activity, and sets the start date.
- [pause()](hkworkoutsession/pause%28%29.md): Pauses the workout session.
- [resume()](hkworkoutsession/resume%28%29.md): Resumes the workout session.
- [stopActivity(with:)](hkworkoutsession/stopactivity%28with_%29.md): Stops the workout session activity, and sets the end date.
- [end()](hkworkoutsession/end%28%29.md): Ends the workout session.

### Working with remote workout sessions

- [startMirroringToCompanionDevice(completion:)](hkworkoutsession/startmirroringtocompaniondevice%28completion_%29.md): Starts mirroring the workout session to the companion iOS device.
- [stopMirroringToCompanionDevice(completion:)](hkworkoutsession/stopmirroringtocompaniondevice%28completion_%29.md): Stops mirroring the workout session to the companion iOS device.
- [sendToRemoteWorkoutSession(data:completion:)](hkworkoutsession/sendtoremoteworkoutsession%28data_completion_%29.md): Sends the provided data to the remote workout session.

### Accessing session data

- [endDate](hkworkoutsession/enddate.md): The ending time and date for this workout session.
- [startDate](hkworkoutsession/startdate.md): The starting time and date for this workout session.
- [state](hkworkoutsession/state.md): The workout session’s current state.
- [type](hkworkoutsession/type.md): A value that indicates whether the session is a primary session or a mirrored session.
- [workoutConfiguration](hkworkoutsession/workoutconfiguration.md): The configuration object that describes this workout.

### Managing workout activities

- [currentActivity](hkworkoutsession/currentactivity.md): The current workout activity.
- [beginNewActivity(configuration:date:metadata:)](hkworkoutsession/beginnewactivity%28configuration_date_metadata_%29.md): Begins a new workout activity in the workout session.
- [endCurrentActivity(on:)](hkworkoutsession/endcurrentactivity%28on_%29.md): Ends the current workout activity.

### Deprecated methods

- [init(activityType:locationType:)](hkworkoutsession/init%28activitytype_locationtype_%29.md): Deprecated. Returns a newly instantiated workout session.
- [init(configuration:)](hkworkoutsession/init%28configuration_%29.md): Deprecated. Returns a newly instantiated workout session.
- [activityType](hkworkoutsession/activitytype.md): Deprecated. The workout activity performed during this session.
- [locationType](hkworkoutsession/locationtype.md): Deprecated. A value that indicates whether the workout session occurred indoors or outdoors.

### Initializers

- [init(coder:)](hkworkoutsession/init%28coder_%29.md)

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
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sessions

- [Running workout sessions](running-workout-sessions.md): Track a workout on Apple Watch.
- [Build a workout app for Apple Watch](build-a-workout-app-for-apple-watch.md): Create your own workout app, quickly and easily, with HealthKit and SwiftUI.
- [Building a multidevice workout app](building-a-multidevice-workout-app.md): Mirror a workout from a watchOS app to its companion iOS app, and perform bidirectional communication between them.
- [Building a workout app for iPhone and iPad](building-a-workout-app-for-iphone-and-ipad.md): Start a workout in iOS, control it from the Lock Screen with App Intents, and present the workout status with Live Activities.
- [HKWorkoutConfiguration](hkworkoutconfiguration.md): An object that contains configuration information about a workout session.
- [HKWorkoutSessionState](hkworkoutsessionstate.md): A workout session’s state.
- [HKLiveWorkoutBuilder](hkliveworkoutbuilder.md): A builder object that constructs a workout incrementally based on live data from an active workout session.
- [HKLiveWorkoutBuilderDelegate](hkliveworkoutbuilderdelegate.md): A protocol that defines methods for receiving updates from a live workout builder.
- [HKLiveWorkoutDataSource](hkliveworkoutdatasource.md): A data source that automatically provides live data from an active workout session.

# HKWorkoutSession (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 2.0+

A session that tracks a person’s workout.

## Declaration

```objectivec
@interface HKWorkoutSession : NSObject
```

## Mentioned In

- [Running workout sessions](running-workout-sessions.md)

<a id="overview"></a>

## Overview

The session fine-tunes Apple Watch’s sensors for the specified activity. All workout sessions generate high-frequency heart rate samples; however, an outdoor cycling activity generates accurate location data, while an indoor cycling activity doesn’t.

Collecting heart rate data on iPhone or iPad requires pairing with an external heart rate sensor because these devices don’t have one. iPhone and iPad can collect various workout metrics, but the system may generate different samples than those specifically requested by an app.

You can modify the default types of data collected during a workout. After someone saves a workout, you can access and display summary statistics or chart metrics over time.

iPhone typically locks during workouts. For privacy reasons, health data usually isn’t accessible while the device is locked. However, the system can prompt someone to provide your app access to workout data even when their device is locked. You can then display Live Activities on the Lock Screen, providing health metrics without requiring the person to unlock their phone.

Siri support extends to the Lock Screen, allowing people to start, pause, resume, or cancel workouts hands-free. You can integrate Siri intents into your apps to enable this functionality.

Apple Watch runs one workout session at a time. If a second workout starts while your workout is running, your [HKWorkoutSessionDelegate](hkworkoutsessiondelegate.md) object receives an [HKErrorAnotherWorkoutSessionStarted](hkerror/code/erroranotherworkoutsessionstarted.md) error, and your session ends.

## Topics

### Creating workout sessions

- [initWithHealthStore:configuration:error:](hkworkoutsession/init%28healthstore_configuration_%29.md): Returns a newly instantiated workout session with an associated workout builder.

### Monitoring the session

- [delegate](hkworkoutsession/delegate.md): The workout session’s delegate.
- [HKWorkoutSessionDelegate](hkworkoutsessiondelegate.md): The session delegate protocol that defines an interface for receiving notifications about errors and changes in the workout session’s state.

### Accessing the workout builder

- [associatedWorkoutBuilder](hkworkoutsession/associatedworkoutbuilder%28%29.md): Returns the live workout builder associated with the workout session.

### Managing the workout

- [prepare](hkworkoutsession/prepare%28%29.md): Prepares the workout session.
- [startActivityWithDate:](hkworkoutsession/startactivity%28with_%29.md): Starts the workout session activity, and sets the start date.
- [pause](hkworkoutsession/pause%28%29.md): Pauses the workout session.
- [resume](hkworkoutsession/resume%28%29.md): Resumes the workout session.
- [stopActivityWithDate:](hkworkoutsession/stopactivity%28with_%29.md): Stops the workout session activity, and sets the end date.
- [end](hkworkoutsession/end%28%29.md): Ends the workout session.

### Working with remote workout sessions

- [startMirroringToCompanionDeviceWithCompletion:](hkworkoutsession/startmirroringtocompaniondevice%28completion_%29.md): Starts mirroring the workout session to the companion iOS device.
- [stopMirroringToCompanionDeviceWithCompletion:](hkworkoutsession/stopmirroringtocompaniondevice%28completion_%29.md): Stops mirroring the workout session to the companion iOS device.
- [sendDataToRemoteWorkoutSession:completion:](hkworkoutsession/sendtoremoteworkoutsession%28data_completion_%29.md): Sends the provided data to the remote workout session.

### Accessing session data

- [endDate](hkworkoutsession/enddate.md): The ending time and date for this workout session.
- [startDate](hkworkoutsession/startdate.md): The starting time and date for this workout session.
- [state](hkworkoutsession/state.md): The workout session’s current state.
- [type](hkworkoutsession/type.md): A value that indicates whether the session is a primary session or a mirrored session.
- [workoutConfiguration](hkworkoutsession/workoutconfiguration.md): The configuration object that describes this workout.

### Managing workout activities

- [currentActivity](hkworkoutsession/currentactivity.md): The current workout activity.
- [beginNewActivityWithConfiguration:date:metadata:](hkworkoutsession/beginnewactivity%28configuration_date_metadata_%29.md): Begins a new workout activity in the workout session.
- [endCurrentActivityOnDate:](hkworkoutsession/endcurrentactivity%28on_%29.md): Ends the current workout activity.

### Deprecated methods

- [initWithActivityType:locationType:](hkworkoutsession/init%28activitytype_locationtype_%29.md): Deprecated. Returns a newly instantiated workout session.
- [initWithConfiguration:error:](hkworkoutsession/init%28configuration_%29.md): Deprecated. Returns a newly instantiated workout session.
- [activityType](hkworkoutsession/activitytype.md): Deprecated. The workout activity performed during this session.
- [locationType](hkworkoutsession/locationtype.md): Deprecated. A value that indicates whether the workout session occurred indoors or outdoors.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Sessions

- [Running workout sessions](running-workout-sessions.md): Track a workout on Apple Watch.
- [Build a workout app for Apple Watch](build-a-workout-app-for-apple-watch.md): Create your own workout app, quickly and easily, with HealthKit and SwiftUI.
- [Building a multidevice workout app](building-a-multidevice-workout-app.md): Mirror a workout from a watchOS app to its companion iOS app, and perform bidirectional communication between them.
- [Building a workout app for iPhone and iPad](building-a-workout-app-for-iphone-and-ipad.md): Start a workout in iOS, control it from the Lock Screen with App Intents, and present the workout status with Live Activities.
- [HKWorkoutConfiguration](hkworkoutconfiguration.md): An object that contains configuration information about a workout session.
- [HKWorkoutSessionState](hkworkoutsessionstate.md): A workout session’s state.
- [HKLiveWorkoutBuilder](hkliveworkoutbuilder.md): A builder object that constructs a workout incrementally based on live data from an active workout session.
- [HKLiveWorkoutBuilderDelegate](hkliveworkoutbuilderdelegate.md): A protocol that defines methods for receiving updates from a live workout builder.
- [HKLiveWorkoutDataSource](hkliveworkoutdatasource.md): A data source that automatically provides live data from an active workout session.
