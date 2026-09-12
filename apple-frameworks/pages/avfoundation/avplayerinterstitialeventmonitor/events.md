> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerinterstitialeventmonitor/events](https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventmonitor/events)

# events (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The schedule of interstitial events.

## Declaration

```swift
var events: [AVPlayerInterstitialEvent] { get }
```

<a id="Discussion"></a>

## Discussion

When the primary player’s content specifies the schedule of interstitial events intrinsically, this property value typically changes whenever primary player’s [currentItem](../avplayer/currentitem.md) changes. For HLS content that specifies interstitials using of `DATERANGE` tags, the value of this property may also change whenever the set of `DATERANGE` tags in the current item’s media playlist changes.

When you specify the schedule of interstitial events using an [AVPlayerInterstitialEventController](../avplayerinterstitialeventcontroller.md), this property value changes only when you update the interstitial event controller’s schedule.

> **Note**

>  The elements in the [events](events.md) array are immutable. Attempting to modify them generates an exception. To alter an event, make a copy and modify the new instance.

## See Also

### Monitoring the event schedule

- [eventsDidChangeNotification](eventsdidchangenotification.md): A notification the system posts when the monitor’s schedule of interstitial events changes.
- [interstitialEventWasUnscheduledNotification](interstitialeventwasunschedulednotification.md): A notification that is posted whenever an AVPlayerInterstitialEvent with loaded assets was unscheduled prior to playing.
- [interstitialEventWasUnscheduledEventKey](interstitialeventwasunscheduledeventkey.md): The dictionary key for the AVPlayerInterstitialEvent that was unscheduled in the payload of the AVPlayerInterstitialEventMonitorInterstitialEventWasUnscheduledNotification.
- [interstitialEventWasUnscheduledErrorKey](interstitialeventwasunschedulederrorkey.md): The dictionary key to indicate whether the event that was unscheduled was due to an error.
- [interstitialEventDidFinishNotification](interstitialeventdidfinishnotification.md): A notification that is posted whenever an AVPlayerInterstitialEvent finished playing.
- [interstitialEventDidFinishEventKey](interstitialeventdidfinisheventkey.md): The dictionary key for the AVPlayerInterstitialEvent that finished playing in the payload of the AVPlayerInterstitialEventMonitorInterstitialEventDidFinishNotification.
- [interstitialEventDidFinishPlayoutTimeKey](interstitialeventdidfinishplayouttimekey.md): The dictionary key for the playout time of the event that finished playing in the payload of the AVPlayerInterstitialEventMonitorInterstitialEventDidFinishNotification.
- [interstitialEventDidFinishDidPlayEntireEventKey](interstitialeventdidfinishdidplayentireeventkey.md): The dictionary key to indicate whether the event that finished playing was fully played out in the payload of the AVPlayerInterstitialEventMonitorInterstitialEventDidFinishNotification.

# events (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The schedule of interstitial events.

## Declaration

```objectivec
@property (copy, readonly) NSArray<AVPlayerInterstitialEvent *> * events;
```

<a id="Discussion"></a>

## Discussion

When the primary player’s content specifies the schedule of interstitial events intrinsically, this property value typically changes whenever primary player’s [currentItem](../avplayer/currentitem.md) changes. For HLS content that specifies interstitials using of `DATERANGE` tags, the value of this property may also change whenever the set of `DATERANGE` tags in the current item’s media playlist changes.

When you specify the schedule of interstitial events using an [AVPlayerInterstitialEventController](../avplayerinterstitialeventcontroller.md), this property value changes only when you update the interstitial event controller’s schedule.

> **Note**

>  The elements in the [events](events.md) array are immutable. Attempting to modify them generates an exception. To alter an event, make a copy and modify the new instance.

## See Also

### Monitoring the event schedule

- [AVPlayerInterstitialEventMonitorEventsDidChangeNotification](eventsdidchangenotification.md): A notification the system posts when the monitor’s schedule of interstitial events changes.
- [AVPlayerInterstitialEventMonitorInterstitialEventWasUnscheduledNotification](interstitialeventwasunschedulednotification.md): A notification that is posted whenever an AVPlayerInterstitialEvent with loaded assets was unscheduled prior to playing.
- [AVPlayerInterstitialEventMonitorInterstitialEventWasUnscheduledEventKey](interstitialeventwasunscheduledeventkey.md): The dictionary key for the AVPlayerInterstitialEvent that was unscheduled in the payload of the AVPlayerInterstitialEventMonitorInterstitialEventWasUnscheduledNotification.
- [AVPlayerInterstitialEventMonitorInterstitialEventWasUnscheduledErrorKey](interstitialeventwasunschedulederrorkey.md): The dictionary key to indicate whether the event that was unscheduled was due to an error.
- [AVPlayerInterstitialEventMonitorInterstitialEventDidFinishNotification](interstitialeventdidfinishnotification.md): A notification that is posted whenever an AVPlayerInterstitialEvent finished playing.
- [AVPlayerInterstitialEventMonitorInterstitialEventDidFinishEventKey](interstitialeventdidfinisheventkey.md): The dictionary key for the AVPlayerInterstitialEvent that finished playing in the payload of the AVPlayerInterstitialEventMonitorInterstitialEventDidFinishNotification.
- [AVPlayerInterstitialEventMonitorInterstitialEventDidFinishPlayoutTimeKey](interstitialeventdidfinishplayouttimekey.md): The dictionary key for the playout time of the event that finished playing in the payload of the AVPlayerInterstitialEventMonitorInterstitialEventDidFinishNotification.
- [AVPlayerInterstitialEventMonitorInterstitialEventDidFinishDidPlayEntireEventKey](interstitialeventdidfinishdidplayentireeventkey.md): The dictionary key to indicate whether the event that finished playing was fully played out in the payload of the AVPlayerInterstitialEventMonitorInterstitialEventDidFinishNotification.
