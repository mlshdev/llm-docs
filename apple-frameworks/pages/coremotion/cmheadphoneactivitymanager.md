> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmheadphoneactivitymanager](https://developer.apple.com/documentation/coremotion/cmheadphoneactivitymanager)

# CMHeadphoneActivityManager (Swift)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 11.0+

An object that starts and manages headphone activity services.

## Declaration

```swift
class CMHeadphoneActivityManager
```

<a id="overview"></a>

## Overview

This class delivers headphone activity updates to your app. Use an instance of the manager to determine if the device supports headphone activity updates, and to start and stop updates. Before using this class, check [isActivityAvailable](cmheadphoneactivitymanager/isactivityavailable.md) and [isStatusAvailable](cmheadphoneactivitymanager/isstatusavailable.md) to make sure the features are available.

This class provides similar information to [CMMotionActivityManager](cmmotionactivitymanager.md), except the activity information comes from headphone motion, rather than from device motion.

> **Important**

>  In iOS and macOS, include the [NSMotionUsageDescription](../bundleresources/information-property-list/nsmotionusagedescription.md) key in your app’s `Info.plist` file. If this key is absent, trying to start headphone activity updates terminates your app.

## Topics

### Checking Availability

- [isActivityAvailable](cmheadphoneactivitymanager/isactivityavailable.md): A Boolean value that indicates whether the current device supports headphone activity.
- [isActivityActive](cmheadphoneactivitymanager/isactivityactive.md): A Boolean value that indicates whether headphone motion activity is active.
- [isStatusAvailable](cmheadphoneactivitymanager/isstatusavailable.md): A Boolean value that indicates whether the current device supports headphone status.
- [isStatusActive](cmheadphoneactivitymanager/isstatusactive.md): A Boolean value that indicates whether headphone status is active.
- [authorizationStatus()](cmheadphoneactivitymanager/authorizationstatus%28%29.md): Returns the authorization status for monitoring headphone activity.

### Starting and Stopping Updates

- [startActivityUpdates(to:withHandler:)](cmheadphoneactivitymanager/startactivityupdates%28to_withhandler_%29.md): Starts headphone activity updates, providing data to the given handler through the given queue.
- [stopActivityUpdates()](cmheadphoneactivitymanager/stopactivityupdates%28%29.md): Stops headphone activity updates.
- [startStatusUpdates(to:withHandler:)](cmheadphoneactivitymanager/startstatusupdates%28to_withhandler_%29.md): Starts headphone status updates, providing data to the given handler through the given queue.
- [stopStatusUpdates()](cmheadphoneactivitymanager/stopstatusupdates%28%29.md): Stops headphone status updates.

### Supporting Types

- [CMHeadphoneActivityManager.Status](cmheadphoneactivitymanager/status.md): Headphone connection status updates.
- [CMHeadphoneActivityManager.ActivityHandler](cmheadphoneactivitymanager/activityhandler.md): The type for a handler to be invoked when headphone motion activity data is available.
- [CMHeadphoneActivityManager.StatusHandler](cmheadphoneactivitymanager/statushandler.md): The type for a handler to be invoked with status updates.

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

- [CMMotionActivityManager](cmmotionactivitymanager.md): An object that manages access to the motion data stored by the device.
- [CMMotionActivity](cmmotionactivity.md): The data for a single motion update event.
- [Getting motion-activity data from headphones](getting-motion-activity-data-from-headphones.md): Configure your app to listen for motion-activity changes from headphones.

# CMHeadphoneActivityManager (Objective-C)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 11.0+

An object that starts and manages headphone activity services.

## Declaration

```objectivec
@interface CMHeadphoneActivityManager : NSObject
```

<a id="overview"></a>

## Overview

This class delivers headphone activity updates to your app. Use an instance of the manager to determine if the device supports headphone activity updates, and to start and stop updates. Before using this class, check [activityAvailable](cmheadphoneactivitymanager/isactivityavailable.md) and [statusAvailable](cmheadphoneactivitymanager/isstatusavailable.md) to make sure the features are available.

This class provides similar information to [CMMotionActivityManager](cmmotionactivitymanager.md), except the activity information comes from headphone motion, rather than from device motion.

> **Important**

>  In iOS and macOS, include the [NSMotionUsageDescription](../bundleresources/information-property-list/nsmotionusagedescription.md) key in your app’s `Info.plist` file. If this key is absent, trying to start headphone activity updates terminates your app.

## Topics

### Checking Availability

- [activityAvailable](cmheadphoneactivitymanager/isactivityavailable.md): A Boolean value that indicates whether the current device supports headphone activity.
- [activityActive](cmheadphoneactivitymanager/isactivityactive.md): A Boolean value that indicates whether headphone motion activity is active.
- [statusAvailable](cmheadphoneactivitymanager/isstatusavailable.md): A Boolean value that indicates whether the current device supports headphone status.
- [statusActive](cmheadphoneactivitymanager/isstatusactive.md): A Boolean value that indicates whether headphone status is active.
- [authorizationStatus](cmheadphoneactivitymanager/authorizationstatus%28%29.md): Returns the authorization status for monitoring headphone activity.

### Starting and Stopping Updates

- [startActivityUpdatesToQueue:withHandler:](cmheadphoneactivitymanager/startactivityupdates%28to_withhandler_%29.md): Starts headphone activity updates, providing data to the given handler through the given queue.
- [stopActivityUpdates](cmheadphoneactivitymanager/stopactivityupdates%28%29.md): Stops headphone activity updates.
- [startStatusUpdatesToQueue:withHandler:](cmheadphoneactivitymanager/startstatusupdates%28to_withhandler_%29.md): Starts headphone status updates, providing data to the given handler through the given queue.
- [stopStatusUpdates](cmheadphoneactivitymanager/stopstatusupdates%28%29.md): Stops headphone status updates.

### Supporting Types

- [CMHeadphoneActivityStatus](cmheadphoneactivitymanager/status.md): Headphone connection status updates.
- [CMHeadphoneActivityHandler](cmheadphoneactivitymanager/activityhandler.md): The type for a handler to be invoked when headphone motion activity data is available.
- [CMHeadphoneActivityStatusHandler](cmheadphoneactivitymanager/statushandler.md): The type for a handler to be invoked with status updates.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Activity

- [CMMotionActivityManager](cmmotionactivitymanager.md): An object that manages access to the motion data stored by the device.
- [CMMotionActivity](cmmotionactivity.md): The data for a single motion update event.
