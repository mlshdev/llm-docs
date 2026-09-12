> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemintegratedtimeline](https://developer.apple.com/documentation/avfoundation/avplayeritemintegratedtimeline)

# AVPlayerItemIntegratedTimeline (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An object that models the timeline and playback sequence of a primary player item and scheduled interstitial events.

## Declaration

```swift
class AVPlayerItemIntegratedTimeline
```

<a id="overview"></a>

## Overview

The timeline models all regions to traverse during playback. A player may not present portions of the primary item when exiting an interstitial event with a positive resumption offset.

## Topics

### Inspecting snapshots

- [currentSnapshot](avplayeritemintegratedtimeline/currentsnapshot.md): An immutable representation of the timeline state at time of request.
- [AVPlayerItemIntegratedTimelineSnapshot](avplayeritemintegratedtimelinesnapshot.md): An immutable representation of inspectable details of an integrated timeline object.
- [snapshotsOutOfSyncNotification](avplayeritemintegratedtimeline/snapshotsoutofsyncnotification.md): A notification the system posts when the snapshot objects provided by this timeline become out of sync with the current timeline state.

### Inspecting the time and date

- [currentTime](avplayeritemintegratedtimeline/currenttime.md): The current time on the integrated timeline.
- [currentDate](avplayeritemintegratedtimeline/currentdate.md): The current date of playback.

### Seeking

- [seek(to:toleranceBefore:toleranceAfter:completionHandler:)](avplayeritemintegratedtimeline/seek%28to_tolerancebefore_toleranceafter_completionhandler_%29.md): Seeks to a particular time in the integrated time domain.
- [seek(to:completionHandler:)](avplayeritemintegratedtimeline/seek%28to_completionhandler_%29.md): Seeks to a particular date in the integrated time domain.

### Observing time changes

- [periodicTimes(forInterval:)](avplayeritemintegratedtimeline/periodictimes%28forinterval_%29.md): Returns an asynchronous sequence of times periodically as playback progresses.
- [boundaryTimes(for:offsetsIntoSegment:)](avplayeritemintegratedtimeline/boundarytimes%28for_offsetsintosegment_%29.md): Returns an asynchronous sequence of times whenever playback reaches a segment time in the segment.
- [AVPlayerItemIntegratedTimeline.BoundaryTimes](avplayeritemintegratedtimeline/boundarytimes.md): An asynchronous sequence of boundary time values.
- [AVPlayerItemIntegratedTimeline.PeriodicTimes](avplayeritemintegratedtimeline/periodictimes.md): An asynchronous sequence of periodic time values.
- [AVPlayerItemIntegratedTimelineObserver](avplayeritemintegratedtimelineobserver.md): A protocol for objects that perform timeline observations.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Interstitials

- [Providing an integrated view of your timeline when playing HLS interstitials](providing-an-integrated-view-of-your-timeline-when-playing-hls-interstitials.md): Go beyond simple ad insertion with point and fill occupancy HLS interstitials.
- [AVPlayerInterstitialEvent](avplayerinterstitialevent.md): An object that provides instructions for how a player presents interstitial content.
- [AVPlayerInterstitialEventController](avplayerinterstitialeventcontroller.md): An object that schedules interstitial events for items played by the primary player.
- [AVPlayerInterstitialEventMonitor](avplayerinterstitialeventmonitor.md): An object that monitors the scheduling and progress of interstitial events.
- [AVPlayerInterstitialEventMonitorScheduleRequestErrorKey](avplayerinterstitialeventmonitorschedulerequesterrorkey.md): userInfo dictionary key for the AVPlayerInterstitialEventMonitorScheduleRequestCompletedNotification. Value is NSError. Absent if the request succeeded
- [AVPlayerInterstitialEventMonitorScheduleRequestIdentifierKey](avplayerinterstitialeventmonitorschedulerequestidentifierkey.md): userInfo dictionary key for the AVPlayerInterstitialEventMonitorScheduleRequestCompletedNotification. Value is NSString.
- [AVPlayerInterstitialEventMonitorScheduleRequestResponseKey](avplayerinterstitialeventmonitorschedulerequestresponsekey.md): userInfo dictionary key for the AVPlayerInterstitialEventMonitorScheduleRequestCompletedNotification. Value is NSData. Absent if the request failed.

# AVPlayerItemIntegratedTimeline (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An object that models the timeline and playback sequence of a primary player item and scheduled interstitial events.

## Declaration

```objectivec
@interface AVPlayerItemIntegratedTimeline : NSObject
```

<a id="overview"></a>

## Overview

The timeline models all regions to traverse during playback. A player may not present portions of the primary item when exiting an interstitial event with a positive resumption offset.

## Topics

### Inspecting snapshots

- [currentSnapshot](avplayeritemintegratedtimeline/currentsnapshot.md): An immutable representation of the timeline state at time of request.
- [AVPlayerItemIntegratedTimelineSnapshot](avplayeritemintegratedtimelinesnapshot.md): An immutable representation of inspectable details of an integrated timeline object.
- [AVPlayerIntegratedTimelineSnapshotsOutOfSyncNotification](avplayeritemintegratedtimeline/snapshotsoutofsyncnotification.md): A notification the system posts when the snapshot objects provided by this timeline become out of sync with the current timeline state.

### Inspecting the time and date

- [currentTime](avplayeritemintegratedtimeline/currenttime.md): The current time on the integrated timeline.
- [currentDate](avplayeritemintegratedtimeline/currentdate.md): The current date of playback.

### Seeking

- [seekToTime:toleranceBefore:toleranceAfter:completionHandler:](avplayeritemintegratedtimeline/seek%28to_tolerancebefore_toleranceafter_completionhandler_%29.md): Seeks to a particular time in the integrated time domain.
- [seekToDate:completionHandler:](avplayeritemintegratedtimeline/seek%28to_completionhandler_%29.md): Seeks to a particular date in the integrated time domain.

### Observing time changes

- [addPeriodicTimeObserverForInterval:queue:usingBlock:](avplayeritemintegratedtimeline/addperiodictimeobserverforinterval_queue_usingblock_.md): Requests invocation of a block during playback to report changing time.
- [addBoundaryTimeObserverForSegment:offsetsIntoSegment:queue:usingBlock:](avplayeritemintegratedtimeline/addboundarytimeobserverforsegment_offsetsintosegment_queue_usingblock_.md): Requests invocation of a block when traversing an offset in a segment during playback.
- [removeTimeObserver:](avplayeritemintegratedtimeline/removetimeobserver_.md): Cancels a previously registered time observer.
- [AVPlayerItemIntegratedTimelineObserver](avplayeritemintegratedtimelineobserver.md): A protocol for objects that perform timeline observations.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Interstitials

- [Providing an integrated view of your timeline when playing HLS interstitials](providing-an-integrated-view-of-your-timeline-when-playing-hls-interstitials.md): Go beyond simple ad insertion with point and fill occupancy HLS interstitials.
- [AVPlayerInterstitialEvent](avplayerinterstitialevent.md): An object that provides instructions for how a player presents interstitial content.
- [AVPlayerInterstitialEventController](avplayerinterstitialeventcontroller.md): An object that schedules interstitial events for items played by the primary player.
- [AVPlayerInterstitialEventMonitor](avplayerinterstitialeventmonitor.md): An object that monitors the scheduling and progress of interstitial events.
- [AVPlayerInterstitialEventMonitorScheduleRequestCompletedNotification](avplayerinterstitialeventmonitorschedulerequestcompletednotification.md): A notification that is posted whenever a daterange-schedule request completes.
- [AVPlayerInterstitialEventMonitorScheduleRequestErrorKey](avplayerinterstitialeventmonitorschedulerequesterrorkey.md): userInfo dictionary key for the AVPlayerInterstitialEventMonitorScheduleRequestCompletedNotification. Value is NSError. Absent if the request succeeded
- [AVPlayerInterstitialEventMonitorScheduleRequestIdentifierKey](avplayerinterstitialeventmonitorschedulerequestidentifierkey.md): userInfo dictionary key for the AVPlayerInterstitialEventMonitorScheduleRequestCompletedNotification. Value is NSString.
- [AVPlayerInterstitialEventMonitorScheduleRequestResponseKey](avplayerinterstitialeventmonitorschedulerequestresponsekey.md): userInfo dictionary key for the AVPlayerInterstitialEventMonitorScheduleRequestCompletedNotification. Value is NSData. Absent if the request failed.
