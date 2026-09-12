> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/building-a-workout-app-for-iphone-and-ipad](https://developer.apple.com/documentation/healthkit/building-a-workout-app-for-iphone-and-ipad)

# Building a workout app for iPhone and iPad

**Interface languages:** Swift, Objective-C

**Framework:** HealthKit  
**Kind:** Sample Code  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · Xcode 26.0+

Start a workout in iOS, control it from the Lock Screen with App Intents, and present the workout status with Live Activities.

<a id="Overview"></a>

## Overview

> **Note**

> This sample code project is associated with WWDC25 session 322: [Track workouts with HealthKit on iPhone and iPad](https://developer.apple.com/wwdc25/322/).

<a id="Configure-the-sample-code-project"></a>

### Configure the sample code project

To configure the sample code project, do the following:

1. Open the sample with the latest version of Xcode.
2. Set the developer team for all targets to let Xcode automatically manage the provisioning profile. For more information, see [Set the bundle ID](https://developer.apple.com/documentation/xcode/preparing-your-app-for-distribution) and [Assign the project to a team](https://developer.apple.com/documentation/xcode/preparing-your-app-for-distribution).

## See Also

### Sessions

- [Running workout sessions](running-workout-sessions.md): Track a workout on Apple Watch.
- [Build a workout app for Apple Watch](build-a-workout-app-for-apple-watch.md): Create your own workout app, quickly and easily, with HealthKit and SwiftUI.
- [Building a multidevice workout app](building-a-multidevice-workout-app.md): Mirror a workout from a watchOS app to its companion iOS app, and perform bidirectional communication between them.
- [HKWorkoutSession](hkworkoutsession.md): A session that tracks a person’s workout.
- [HKWorkoutConfiguration](hkworkoutconfiguration.md): An object that contains configuration information about a workout session.
- [HKWorkoutSessionState](hkworkoutsessionstate.md): A workout session’s state.
- [HKLiveWorkoutBuilder](hkliveworkoutbuilder.md): A builder object that constructs a workout incrementally based on live data from an active workout session.
- [HKLiveWorkoutBuilderDelegate](hkliveworkoutbuilderdelegate.md): A protocol that defines methods for receiving updates from a live workout builder.
- [HKLiveWorkoutDataSource](hkliveworkoutdatasource.md): A data source that automatically provides live data from an active workout session.
