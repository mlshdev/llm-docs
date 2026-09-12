> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerinterstitialeventmonitor](https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventmonitor)

# AVPlayerInterstitialEventMonitor (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that monitors the scheduling and progress of interstitial events.

## Declaration

```swift
class AVPlayerInterstitialEventMonitor
```

<a id="overview"></a>

## Overview

This object monitors interstitial events that exist within the content of the primary items, such as events defined by an HLS media playlist, and also events managed by an [AVPlayerInterstitialEventController](avplayerinterstitialeventcontroller.md) object. You can access the schedule of interstitial events through the [events](avplayerinterstitialeventmonitor/events.md) property.

When it’s time to present an interstitial event, the system suspends playback of the primary item and changes its player’s [timeControlStatus](avplayer/timecontrolstatus-swift.property.md) to [AVPlayer.TimeControlStatus.waitingToPlayAtSpecifiedRate](avplayer/timecontrolstatus-swift.enum/waitingtoplayatspecifiedrate.md) with a [reasonForWaitingToPlay](avplayer/reasonforwaitingtoplay.md) value of [interstitialEvent](avplayer/waitingreason/interstitialevent.md). When the system suspends primary playback, it creates player items based on the event’s [templateItems](avplayerinterstitialevent/templateitems.md) to play interstitial content. The interstitial player temporarily assumes the primary player’s output configuration, such as routing its visual output to player layers that reference the primary player. After the interstitial player finishes playback, or its current item otherwise becomes `nil`, playback of primary content resumes.

## Topics

### Creating a monitor

- [init(primaryPlayer:)](avplayerinterstitialeventmonitor/init%28primaryplayer_%29.md): Creates an observer with a player item.

### Monitoring the current event

- [currentEvent](avplayerinterstitialeventmonitor/currentevent.md): The current interstitial event.
- [currentEventDidChangeNotification](avplayerinterstitialeventmonitor/currenteventdidchangenotification.md): A notification the system posts when the monitor’s current interstitial event changes.

### Monitoring the event schedule

- [events](avplayerinterstitialeventmonitor/events.md): The schedule of interstitial events.
- [eventsDidChangeNotification](avplayerinterstitialeventmonitor/eventsdidchangenotification.md): A notification the system posts when the monitor’s schedule of interstitial events changes.
- [interstitialEventWasUnscheduledNotification](avplayerinterstitialeventmonitor/interstitialeventwasunschedulednotification.md): A notification that is posted whenever an AVPlayerInterstitialEvent with loaded assets was unscheduled prior to playing.
- [interstitialEventWasUnscheduledEventKey](avplayerinterstitialeventmonitor/interstitialeventwasunscheduledeventkey.md): The dictionary key for the AVPlayerInterstitialEvent that was unscheduled in the payload of the AVPlayerInterstitialEventMonitorInterstitialEventWasUnscheduledNotification.
- [interstitialEventWasUnscheduledErrorKey](avplayerinterstitialeventmonitor/interstitialeventwasunschedulederrorkey.md): The dictionary key to indicate whether the event that was unscheduled was due to an error.
- [interstitialEventDidFinishNotification](avplayerinterstitialeventmonitor/interstitialeventdidfinishnotification.md): A notification that is posted whenever an AVPlayerInterstitialEvent finished playing.
- [interstitialEventDidFinishEventKey](avplayerinterstitialeventmonitor/interstitialeventdidfinisheventkey.md): The dictionary key for the AVPlayerInterstitialEvent that finished playing in the payload of the AVPlayerInterstitialEventMonitorInterstitialEventDidFinishNotification.
- [interstitialEventDidFinishPlayoutTimeKey](avplayerinterstitialeventmonitor/interstitialeventdidfinishplayouttimekey.md): The dictionary key for the playout time of the event that finished playing in the payload of the AVPlayerInterstitialEventMonitorInterstitialEventDidFinishNotification.
- [interstitialEventDidFinishDidPlayEntireEventKey](avplayerinterstitialeventmonitor/interstitialeventdidfinishdidplayentireeventkey.md): The dictionary key to indicate whether the event that finished playing was fully played out in the payload of the AVPlayerInterstitialEventMonitorInterstitialEventDidFinishNotification.

### Monitoring the asset list response

- [assetListResponseStatusDidChangeNotification](avplayerinterstitialeventmonitor/assetlistresponsestatusdidchangenotification.md): A notification the system posts when the status of an interstitial event’s asset list response changes.
- [AVPlayerInterstitialEventAssetListResponseStatus](avplayerinterstitialeventassetlistresponsestatus.md): Constants that describe the status of the asset list response for an interstitial event.

### Monitoring skipping

- [currentEventSkippableStateDidChangeNotification](avplayerinterstitialeventmonitor/currenteventskippablestatedidchangenotification.md): A notification that’s posted whenever the currentEventSkippableState of an AVPlayerInterstitialEventMonitor changes.
- [currentEventSkippableStateDidChangeEventKey](avplayerinterstitialeventmonitor/currenteventskippablestatedidchangeeventkey.md): The dictionary key for the AVPlayerInterstitial event that had its skippable event state changed in the payload of the AVPlayerInterstitialEventMonitorCurrentEventSkippableStateDidChangeNotification.
- [currentEventSkippableStateDidChangeStateKey](avplayerinterstitialeventmonitor/currenteventskippablestatedidchangestatekey.md): The dictionary key for the skippable event state in the payload of the AVPlayerInterstitialEventMonitorCurrentEventSkippableStateDidChangeNotification.
- [currentEventSkippableStateDidChangeSkipControlLabelKey](avplayerinterstitialeventmonitor/currenteventskippablestatedidchangeskipcontrollabelkey.md): The dictionary key for the skip label of the event in the payload of the AVPlayerInterstitialEventMonitorCurrentEventSkippableStateDidChangeNotification.
- [currentEventSkippedNotification](avplayerinterstitialeventmonitor/currenteventskippednotification.md): A notification that’s posted whenever an event was skipped via skip control.
- [currentEventSkippedEventKey](avplayerinterstitialeventmonitor/currenteventskippedeventkey.md): The dictionary key for the AVPlayerInterstitialEvent that was skipped in the payload of the AVPlayerInterstitialEventMonitorCurrentEventSkippedNotification.
- [currentEventSkipControlLabel](avplayerinterstitialeventmonitor/currenteventskipcontrollabel.md): The skip control label for the currentEvent.
- [currentEventSkippableState](avplayerinterstitialeventmonitor/currenteventskippablestate.md): The skippable event state for the currentEvent.

### Accessing the players

- [primaryPlayer](avplayerinterstitialeventmonitor/primaryplayer.md): An object that plays primary content.
- [interstitialPlayer](avplayerinterstitialeventmonitor/interstitialplayer.md): An object that plays interstitial content.

### Structures

- [AVPlayerInterstitialEventMonitor.ScheduleRequestCompleted](avplayerinterstitialeventmonitor/schedulerequestcompleted.md): A NotificationCenter AsyncMessage that is sent when a daterange-schedule request completes

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVPlayerInterstitialEventController](avplayerinterstitialeventcontroller.md)

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
- [AVPlayerInterstitialEventMonitorScheduleRequestErrorKey](avplayerinterstitialeventmonitorschedulerequesterrorkey.md): userInfo dictionary key for the AVPlayerInterstitialEventMonitorScheduleRequestCompletedNotification. Value is NSError. Absent if the request succeeded
- [AVPlayerInterstitialEventMonitorScheduleRequestIdentifierKey](avplayerinterstitialeventmonitorschedulerequestidentifierkey.md): userInfo dictionary key for the AVPlayerInterstitialEventMonitorScheduleRequestCompletedNotification. Value is NSString.
- [AVPlayerInterstitialEventMonitorScheduleRequestResponseKey](avplayerinterstitialeventmonitorschedulerequestresponsekey.md): userInfo dictionary key for the AVPlayerInterstitialEventMonitorScheduleRequestCompletedNotification. Value is NSData. Absent if the request failed.
- [AVPlayerItemIntegratedTimeline](avplayeritemintegratedtimeline.md): An object that models the timeline and playback sequence of a primary player item and scheduled interstitial events.

# AVPlayerInterstitialEventMonitor (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that monitors the scheduling and progress of interstitial events.

## Declaration

```objectivec
@interface AVPlayerInterstitialEventMonitor : NSObject
```

<a id="overview"></a>

## Overview

This object monitors interstitial events that exist within the content of the primary items, such as events defined by an HLS media playlist, and also events managed by an [AVPlayerInterstitialEventController](avplayerinterstitialeventcontroller.md) object. You can access the schedule of interstitial events through the [events](avplayerinterstitialeventmonitor/events.md) property.

When it’s time to present an interstitial event, the system suspends playback of the primary item and changes its player’s [timeControlStatus](avplayer/timecontrolstatus-swift.property.md) to [AVPlayerTimeControlStatusWaitingToPlayAtSpecifiedRate](avplayer/timecontrolstatus-swift.enum/waitingtoplayatspecifiedrate.md) with a [reasonForWaitingToPlay](avplayer/reasonforwaitingtoplay.md) value of [AVPlayerWaitingDuringInterstitialEventReason](avplayer/waitingreason/interstitialevent.md). When the system suspends primary playback, it creates player items based on the event’s [templateItems](avplayerinterstitialevent/templateitems.md) to play interstitial content. The interstitial player temporarily assumes the primary player’s output configuration, such as routing its visual output to player layers that reference the primary player. After the interstitial player finishes playback, or its current item otherwise becomes `nil`, playback of primary content resumes.

## Topics

### Creating a monitor

- [initWithPrimaryPlayer:](avplayerinterstitialeventmonitor/init%28primaryplayer_%29.md): Creates an observer with a player item.
- [interstitialEventMonitorWithPrimaryPlayer:](avplayerinterstitialeventmonitor/interstitialeventmonitorwithprimaryplayer_.md): A convenience initializer that creates an observer with a player item.

### Monitoring the current event

- [currentEvent](avplayerinterstitialeventmonitor/currentevent.md): The current interstitial event.
- [AVPlayerInterstitialEventMonitorCurrentEventDidChangeNotification](avplayerinterstitialeventmonitor/currenteventdidchangenotification.md): A notification the system posts when the monitor’s current interstitial event changes.

### Monitoring the event schedule

- [events](avplayerinterstitialeventmonitor/events.md): The schedule of interstitial events.
- [AVPlayerInterstitialEventMonitorEventsDidChangeNotification](avplayerinterstitialeventmonitor/eventsdidchangenotification.md): A notification the system posts when the monitor’s schedule of interstitial events changes.
- [AVPlayerInterstitialEventMonitorInterstitialEventWasUnscheduledNotification](avplayerinterstitialeventmonitor/interstitialeventwasunschedulednotification.md): A notification that is posted whenever an AVPlayerInterstitialEvent with loaded assets was unscheduled prior to playing.
- [AVPlayerInterstitialEventMonitorInterstitialEventWasUnscheduledEventKey](avplayerinterstitialeventmonitor/interstitialeventwasunscheduledeventkey.md): The dictionary key for the AVPlayerInterstitialEvent that was unscheduled in the payload of the AVPlayerInterstitialEventMonitorInterstitialEventWasUnscheduledNotification.
- [AVPlayerInterstitialEventMonitorInterstitialEventWasUnscheduledErrorKey](avplayerinterstitialeventmonitor/interstitialeventwasunschedulederrorkey.md): The dictionary key to indicate whether the event that was unscheduled was due to an error.
- [AVPlayerInterstitialEventMonitorInterstitialEventDidFinishNotification](avplayerinterstitialeventmonitor/interstitialeventdidfinishnotification.md): A notification that is posted whenever an AVPlayerInterstitialEvent finished playing.
- [AVPlayerInterstitialEventMonitorInterstitialEventDidFinishEventKey](avplayerinterstitialeventmonitor/interstitialeventdidfinisheventkey.md): The dictionary key for the AVPlayerInterstitialEvent that finished playing in the payload of the AVPlayerInterstitialEventMonitorInterstitialEventDidFinishNotification.
- [AVPlayerInterstitialEventMonitorInterstitialEventDidFinishPlayoutTimeKey](avplayerinterstitialeventmonitor/interstitialeventdidfinishplayouttimekey.md): The dictionary key for the playout time of the event that finished playing in the payload of the AVPlayerInterstitialEventMonitorInterstitialEventDidFinishNotification.
- [AVPlayerInterstitialEventMonitorInterstitialEventDidFinishDidPlayEntireEventKey](avplayerinterstitialeventmonitor/interstitialeventdidfinishdidplayentireeventkey.md): The dictionary key to indicate whether the event that finished playing was fully played out in the payload of the AVPlayerInterstitialEventMonitorInterstitialEventDidFinishNotification.

### Monitoring the asset list response

- [AVPlayerInterstitialEventMonitorAssetListResponseStatusDidChangeNotification](avplayerinterstitialeventmonitor/assetlistresponsestatusdidchangenotification.md): A notification the system posts when the status of an interstitial event’s asset list response changes.
- [AVPlayerInterstitialEventAssetListResponseStatus](avplayerinterstitialeventassetlistresponsestatus.md): Constants that describe the status of the asset list response for an interstitial event.

### Monitoring skipping

- [AVPlayerInterstitialEventMonitorCurrentEventSkippableStateDidChangeNotification](avplayerinterstitialeventmonitor/currenteventskippablestatedidchangenotification.md): A notification that’s posted whenever the currentEventSkippableState of an AVPlayerInterstitialEventMonitor changes.
- [AVPlayerInterstitialEventMonitorCurrentEventSkippableStateDidChangeEventKey](avplayerinterstitialeventmonitor/currenteventskippablestatedidchangeeventkey.md): The dictionary key for the AVPlayerInterstitial event that had its skippable event state changed in the payload of the AVPlayerInterstitialEventMonitorCurrentEventSkippableStateDidChangeNotification.
- [AVPlayerInterstitialEventMonitorCurrentEventSkippableStateDidChangeStateKey](avplayerinterstitialeventmonitor/currenteventskippablestatedidchangestatekey.md): The dictionary key for the skippable event state in the payload of the AVPlayerInterstitialEventMonitorCurrentEventSkippableStateDidChangeNotification.
- [AVPlayerInterstitialEventMonitorCurrentEventSkippableStateDidChangeSkipControlLabelKey](avplayerinterstitialeventmonitor/currenteventskippablestatedidchangeskipcontrollabelkey.md): The dictionary key for the skip label of the event in the payload of the AVPlayerInterstitialEventMonitorCurrentEventSkippableStateDidChangeNotification.
- [AVPlayerInterstitialEventMonitorCurrentEventSkippedNotification](avplayerinterstitialeventmonitor/currenteventskippednotification.md): A notification that’s posted whenever an event was skipped via skip control.
- [AVPlayerInterstitialEventMonitorCurrentEventSkippedEventKey](avplayerinterstitialeventmonitor/currenteventskippedeventkey.md): The dictionary key for the AVPlayerInterstitialEvent that was skipped in the payload of the AVPlayerInterstitialEventMonitorCurrentEventSkippedNotification.
- [currentEventSkipControlLabel](avplayerinterstitialeventmonitor/currenteventskipcontrollabel.md): The skip control label for the currentEvent.
- [currentEventSkippableState](avplayerinterstitialeventmonitor/currenteventskippablestate.md): The skippable event state for the currentEvent.

### Accessing the players

- [primaryPlayer](avplayerinterstitialeventmonitor/primaryplayer.md): An object that plays primary content.
- [interstitialPlayer](avplayerinterstitialeventmonitor/interstitialplayer.md): An object that plays interstitial content.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVPlayerInterstitialEventController](avplayerinterstitialeventcontroller.md)

## See Also

### Interstitials

- [Providing an integrated view of your timeline when playing HLS interstitials](providing-an-integrated-view-of-your-timeline-when-playing-hls-interstitials.md): Go beyond simple ad insertion with point and fill occupancy HLS interstitials.
- [AVPlayerInterstitialEvent](avplayerinterstitialevent.md): An object that provides instructions for how a player presents interstitial content.
- [AVPlayerInterstitialEventController](avplayerinterstitialeventcontroller.md): An object that schedules interstitial events for items played by the primary player.
- [AVPlayerInterstitialEventMonitorScheduleRequestCompletedNotification](avplayerinterstitialeventmonitorschedulerequestcompletednotification.md): A notification that is posted whenever a daterange-schedule request completes.
- [AVPlayerInterstitialEventMonitorScheduleRequestErrorKey](avplayerinterstitialeventmonitorschedulerequesterrorkey.md): userInfo dictionary key for the AVPlayerInterstitialEventMonitorScheduleRequestCompletedNotification. Value is NSError. Absent if the request succeeded
- [AVPlayerInterstitialEventMonitorScheduleRequestIdentifierKey](avplayerinterstitialeventmonitorschedulerequestidentifierkey.md): userInfo dictionary key for the AVPlayerInterstitialEventMonitorScheduleRequestCompletedNotification. Value is NSString.
- [AVPlayerInterstitialEventMonitorScheduleRequestResponseKey](avplayerinterstitialeventmonitorschedulerequestresponsekey.md): userInfo dictionary key for the AVPlayerInterstitialEventMonitorScheduleRequestCompletedNotification. Value is NSData. Absent if the request failed.
- [AVPlayerItemIntegratedTimeline](avplayeritemintegratedtimeline.md): An object that models the timeline and playback sequence of a primary player item and scheduled interstitial events.
