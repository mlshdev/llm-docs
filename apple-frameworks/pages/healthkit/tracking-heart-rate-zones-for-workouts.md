> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/tracking-heart-rate-zones-for-workouts](https://developer.apple.com/documentation/healthkit/tracking-heart-rate-zones-for-workouts)

# Tracking heart rate zones for workouts

**Framework:** HealthKit  
**Kind:** Sample Code  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · watchOS 27.0+ · Xcode 27.0+

Start a workout on iOS or watchOS and track and display heart rate zones.

<a id="Overview"></a>

## Overview

> **Note**

> This sample code project is associated with WWDC26 session 207: [Deliver workout insights with HealthKit workout zones](https://developer.apple.com/wwdc26/207/).

<a id="Configure-the-sample-code-project"></a>

## Configure the sample code project

To configure the sample code project:

1. Open the sample with the latest version of Xcode.
2. Set the developer team for all targets to let Xcode automatically manage the provisioning profile. For more information, see [Set the bundle ID](https://developer.apple.com/documentation/xcode/preparing-your-app-for-distribution#Set-the-bundle-ID) and [Assign the project to a team](https://developer.apple.com/documentation/xcode/preparing-your-app-for-distribution#Assign-the-project-to-a-team).
3. In the Info pane of the `HKWorkoutZoneSample Watch App` target, change the value of the `WKCompanionAppBundleIdentifier` key to the bundle ID of the iOS app.

## See Also

### Workout zones

- [Accessing workout zone data](accessing-workout-zone-data.md): Provide training insights to people on your app using workout zone data.
- [HKWorkoutZone](hkworkoutzone.md): A structure that represents a single zone with defined thresholds for a quantity type.
- [HKWorkoutZoneConfiguration](hkworkoutzoneconfiguration.md): A structure that defines a complete set of zones for a quantity type.
- [HKWorkoutZoneDuration](hkworkoutzoneduration.md): A structure that represents the time spent in a specific zone during a workout or activity.
- [HKWorkoutZoneGroup](hkworkoutzonegroup.md): A structure that contains zone configuration and time-in-zone data for a quantity type.
- [HKLiveWorkoutZoneUpdate](hkliveworkoutzoneupdate.md): A structure that contains information about zone transitions during a live workout session.
