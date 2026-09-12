> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmotionactivitymanager](https://developer.apple.com/documentation/coremotion/cmmotionactivitymanager)

# CMMotionActivityManager (Swift)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

An object that manages access to the motion data stored by the device.

## Declaration

```swift
class CMMotionActivityManager
```

<a id="overview"></a>

## Overview

Motion data reflects whether the user is walking, running, in a vehicle, or stationary for periods of time. Using this class, you can ask for notifications when the current type of motion changes or you can gather past motion change data. For example, a navigation app might look for changes in the current type of motion and offer different directions for each.

> **Important**

>  To use this API, you must include the [NSMotionUsageDescription](../bundleresources/information-property-list/nsmotionusagedescription.md) key in your app’s `Info.plist` file and provide a usage description string for this key. The usage description appears in the prompt that the user must accept the first time the system asks the user to access motion data for your app. If you don’t include a usage description string, your app crashes when you call this API.

## Topics

### Determining Activity Availability

- [isActivityAvailable()](cmmotionactivitymanager/isactivityavailable%28%29.md): Returns a Boolean indicating whether motion data is available on the current device.
- [authorizationStatus()](cmmotionactivitymanager/authorizationstatus%28%29.md): Returns a value indicating whether the app is authorized to retrieve stored motion data.
- [CMAuthorizationStatus](cmauthorizationstatus.md): The authorization status for motion-related features.

### Starting and Stopping Activity Updates

- [startActivityUpdates(to:withHandler:)](cmmotionactivitymanager/startactivityupdates%28to_withhandler_%29.md): Starts the delivery of current motion data updates to your app.
- [stopActivityUpdates()](cmmotionactivitymanager/stopactivityupdates%28%29.md): Stops the delivery of motion updates to your app
- [CMMotionActivityHandler](cmmotionactivityhandler.md): A block that reports the current motion associated with the device.

### Getting Historical Activity Data

- [queryActivityStarting(from:to:to:withHandler:)](cmmotionactivitymanager/queryactivitystarting%28from_to_to_withhandler_%29.md): Gathers and returns historical motion data for the specified time period
- [CMMotionActivityQueryHandler](cmmotionactivityqueryhandler.md): A block that reports the motion updates that occurred between the specified query interval.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Activity

- [CMHeadphoneActivityManager](cmheadphoneactivitymanager.md): An object that starts and manages headphone activity services.
- [CMMotionActivity](cmmotionactivity.md): The data for a single motion update event.
- [Getting motion-activity data from headphones](getting-motion-activity-data-from-headphones.md): Configure your app to listen for motion-activity changes from headphones.

# CMMotionActivityManager (Objective-C)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

An object that manages access to the motion data stored by the device.

## Declaration

```objectivec
@interface CMMotionActivityManager : NSObject
```

<a id="overview"></a>

## Overview

Motion data reflects whether the user is walking, running, in a vehicle, or stationary for periods of time. Using this class, you can ask for notifications when the current type of motion changes or you can gather past motion change data. For example, a navigation app might look for changes in the current type of motion and offer different directions for each.

> **Important**

>  To use this API, you must include the [NSMotionUsageDescription](../bundleresources/information-property-list/nsmotionusagedescription.md) key in your app’s `Info.plist` file and provide a usage description string for this key. The usage description appears in the prompt that the user must accept the first time the system asks the user to access motion data for your app. If you don’t include a usage description string, your app crashes when you call this API.

## Topics

### Determining Activity Availability

- [isActivityAvailable](cmmotionactivitymanager/isactivityavailable%28%29.md): Returns a Boolean indicating whether motion data is available on the current device.
- [authorizationStatus](cmmotionactivitymanager/authorizationstatus%28%29.md): Returns a value indicating whether the app is authorized to retrieve stored motion data.
- [CMAuthorizationStatus](cmauthorizationstatus.md): The authorization status for motion-related features.

### Starting and Stopping Activity Updates

- [startActivityUpdatesToQueue:withHandler:](cmmotionactivitymanager/startactivityupdates%28to_withhandler_%29.md): Starts the delivery of current motion data updates to your app.
- [stopActivityUpdates](cmmotionactivitymanager/stopactivityupdates%28%29.md): Stops the delivery of motion updates to your app
- [CMMotionActivityHandler](cmmotionactivityhandler.md): A block that reports the current motion associated with the device.

### Getting Historical Activity Data

- [queryActivityStartingFromDate:toDate:toQueue:withHandler:](cmmotionactivitymanager/queryactivitystarting%28from_to_to_withhandler_%29.md): Gathers and returns historical motion data for the specified time period
- [CMMotionActivityQueryHandler](cmmotionactivityqueryhandler.md): A block that reports the motion updates that occurred between the specified query interval.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Activity

- [CMHeadphoneActivityManager](cmheadphoneactivitymanager.md): An object that starts and manages headphone activity services.
- [CMMotionActivity](cmmotionactivity.md): The data for a single motion update event.
