> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerinterstitialeventcontroller](https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventcontroller)

# AVPlayerInterstitialEventController (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that schedules interstitial events for items played by the primary player.

## Declaration

```swift
class AVPlayerInterstitialEventController
```

<a id="overview"></a>

## Overview

This class is a subclass of [AVPlayerInterstitialEventMonitor](avplayerinterstitialeventmonitor.md) that you use to manage the schedule of interstitial events to present during playback of primary content.

> **Important**

>  Creating an event controller and setting a schedule causes playback to ignore interstitial events present in the source media.

## Topics

### Creating an event controller

- [init(primaryPlayer:)](avplayerinterstitialeventcontroller/init%28primaryplayer_%29.md): Creates an event controller with a player item.

### Configuring the event schedule

- [events](avplayerinterstitialeventcontroller/events.md): The current schedule of interstitial events.
- [cancelCurrentEvent(withResumptionOffset:)](avplayerinterstitialeventcontroller/cancelcurrentevent%28withresumptionoffset_%29.md): Cancels the playback of all currently playing and scheduled interstitial events, and resumes playback of primary content.
- [skipCurrentEvent()](avplayerinterstitialeventcontroller/skipcurrentevent%28%29.md): Causes the playback of the currently playing interstital event to be abandoned.

### Accessing strings

- [localizedStringsBundle](avplayerinterstitialeventcontroller/localizedstringsbundle.md): The bundle that contains the localized strings to be used by the AVPlayerInterstitialEventController.
- [localizedStringsTableName](avplayerinterstitialeventcontroller/localizedstringstablename.md): The name of the table in the bundle that contains the localized strings to be used by the AVPlayerInterstitialEventController.

## Relationships

### Inherits From

- [AVPlayerInterstitialEventMonitor](avplayerinterstitialeventmonitor.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Interstitials

- [Providing an integrated view of your timeline when playing HLS interstitials](providing-an-integrated-view-of-your-timeline-when-playing-hls-interstitials.md): Go beyond simple ad insertion with point and fill occupancy HLS interstitials.
- [AVPlayerInterstitialEvent](avplayerinterstitialevent.md): An object that provides instructions for how a player presents interstitial content.
- [AVPlayerInterstitialEventMonitor](avplayerinterstitialeventmonitor.md): An object that monitors the scheduling and progress of interstitial events.
- [AVPlayerInterstitialEventMonitorScheduleRequestErrorKey](avplayerinterstitialeventmonitorschedulerequesterrorkey.md): userInfo dictionary key for the AVPlayerInterstitialEventMonitorScheduleRequestCompletedNotification. Value is NSError. Absent if the request succeeded
- [AVPlayerInterstitialEventMonitorScheduleRequestIdentifierKey](avplayerinterstitialeventmonitorschedulerequestidentifierkey.md): userInfo dictionary key for the AVPlayerInterstitialEventMonitorScheduleRequestCompletedNotification. Value is NSString.
- [AVPlayerInterstitialEventMonitorScheduleRequestResponseKey](avplayerinterstitialeventmonitorschedulerequestresponsekey.md): userInfo dictionary key for the AVPlayerInterstitialEventMonitorScheduleRequestCompletedNotification. Value is NSData. Absent if the request failed.
- [AVPlayerItemIntegratedTimeline](avplayeritemintegratedtimeline.md): An object that models the timeline and playback sequence of a primary player item and scheduled interstitial events.

# AVPlayerInterstitialEventController (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that schedules interstitial events for items played by the primary player.

## Declaration

```objectivec
@interface AVPlayerInterstitialEventController : AVPlayerInterstitialEventMonitor
```

<a id="overview"></a>

## Overview

This class is a subclass of [AVPlayerInterstitialEventMonitor](avplayerinterstitialeventmonitor.md) that you use to manage the schedule of interstitial events to present during playback of primary content.

> **Important**

>  Creating an event controller and setting a schedule causes playback to ignore interstitial events present in the source media.

## Topics

### Creating an event controller

- [initWithPrimaryPlayer:](avplayerinterstitialeventcontroller/init%28primaryplayer_%29.md): Creates an event controller with a player item.
- [interstitialEventControllerWithPrimaryPlayer:](avplayerinterstitialeventcontroller/interstitialeventcontrollerwithprimaryplayer_.md): A convenience initializer that creates an event controller with a player item.

### Configuring the event schedule

- [events](avplayerinterstitialeventcontroller/events.md): The current schedule of interstitial events.
- [cancelCurrentEventWithResumptionOffset:](avplayerinterstitialeventcontroller/cancelcurrentevent%28withresumptionoffset_%29.md): Cancels the playback of all currently playing and scheduled interstitial events, and resumes playback of primary content.
- [skipCurrentEvent](avplayerinterstitialeventcontroller/skipcurrentevent%28%29.md): Causes the playback of the currently playing interstital event to be abandoned.

### Accessing strings

- [localizedStringsBundle](avplayerinterstitialeventcontroller/localizedstringsbundle.md): The bundle that contains the localized strings to be used by the AVPlayerInterstitialEventController.
- [localizedStringsTableName](avplayerinterstitialeventcontroller/localizedstringstablename.md): The name of the table in the bundle that contains the localized strings to be used by the AVPlayerInterstitialEventController.

## Relationships

### Inherits From

- [AVPlayerInterstitialEventMonitor](avplayerinterstitialeventmonitor.md)

## See Also

### Interstitials

- [Providing an integrated view of your timeline when playing HLS interstitials](providing-an-integrated-view-of-your-timeline-when-playing-hls-interstitials.md): Go beyond simple ad insertion with point and fill occupancy HLS interstitials.
- [AVPlayerInterstitialEvent](avplayerinterstitialevent.md): An object that provides instructions for how a player presents interstitial content.
- [AVPlayerInterstitialEventMonitor](avplayerinterstitialeventmonitor.md): An object that monitors the scheduling and progress of interstitial events.
- [AVPlayerInterstitialEventMonitorScheduleRequestCompletedNotification](avplayerinterstitialeventmonitorschedulerequestcompletednotification.md): A notification that is posted whenever a daterange-schedule request completes.
- [AVPlayerInterstitialEventMonitorScheduleRequestErrorKey](avplayerinterstitialeventmonitorschedulerequesterrorkey.md): userInfo dictionary key for the AVPlayerInterstitialEventMonitorScheduleRequestCompletedNotification. Value is NSError. Absent if the request succeeded
- [AVPlayerInterstitialEventMonitorScheduleRequestIdentifierKey](avplayerinterstitialeventmonitorschedulerequestidentifierkey.md): userInfo dictionary key for the AVPlayerInterstitialEventMonitorScheduleRequestCompletedNotification. Value is NSString.
- [AVPlayerInterstitialEventMonitorScheduleRequestResponseKey](avplayerinterstitialeventmonitorschedulerequestresponsekey.md): userInfo dictionary key for the AVPlayerInterstitialEventMonitorScheduleRequestCompletedNotification. Value is NSData. Absent if the request failed.
- [AVPlayerItemIntegratedTimeline](avplayeritemintegratedtimeline.md): An object that models the timeline and playback sequence of a primary player item and scheduled interstitial events.
