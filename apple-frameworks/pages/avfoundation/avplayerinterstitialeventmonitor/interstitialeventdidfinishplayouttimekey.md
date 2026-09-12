> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerinterstitialeventmonitor/interstitialeventdidfinishplayouttimekey](https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventmonitor/interstitialeventdidfinishplayouttimekey)

# interstitialEventDidFinishPlayoutTimeKey (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The dictionary key for the playout time of the event that finished playing in the payload of the AVPlayerInterstitialEventMonitorInterstitialEventDidFinishNotification.

## Declaration

```swift
class let interstitialEventDidFinishPlayoutTimeKey: String
```

<a id="discussion"></a>

## Discussion

The value corresponding to this key is of type CMTime as a NSDictionary.

## See Also

### Monitoring the event schedule

- [events](events.md): The schedule of interstitial events.
- [eventsDidChangeNotification](eventsdidchangenotification.md): A notification the system posts when the monitor’s schedule of interstitial events changes.
- [interstitialEventWasUnscheduledNotification](interstitialeventwasunschedulednotification.md): A notification that is posted whenever an AVPlayerInterstitialEvent with loaded assets was unscheduled prior to playing.
- [interstitialEventWasUnscheduledEventKey](interstitialeventwasunscheduledeventkey.md): The dictionary key for the AVPlayerInterstitialEvent that was unscheduled in the payload of the AVPlayerInterstitialEventMonitorInterstitialEventWasUnscheduledNotification.
- [interstitialEventWasUnscheduledErrorKey](interstitialeventwasunschedulederrorkey.md): The dictionary key to indicate whether the event that was unscheduled was due to an error.
- [interstitialEventDidFinishNotification](interstitialeventdidfinishnotification.md): A notification that is posted whenever an AVPlayerInterstitialEvent finished playing.
- [interstitialEventDidFinishEventKey](interstitialeventdidfinisheventkey.md): The dictionary key for the AVPlayerInterstitialEvent that finished playing in the payload of the AVPlayerInterstitialEventMonitorInterstitialEventDidFinishNotification.
- [interstitialEventDidFinishDidPlayEntireEventKey](interstitialeventdidfinishdidplayentireeventkey.md): The dictionary key to indicate whether the event that finished playing was fully played out in the payload of the AVPlayerInterstitialEventMonitorInterstitialEventDidFinishNotification.

# AVPlayerInterstitialEventMonitorInterstitialEventDidFinishPlayoutTimeKey (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The dictionary key for the playout time of the event that finished playing in the payload of the AVPlayerInterstitialEventMonitorInterstitialEventDidFinishNotification.

## Declaration

```objectivec
extern NSString * const AVPlayerInterstitialEventMonitorInterstitialEventDidFinishPlayoutTimeKey;
```

<a id="discussion"></a>

## Discussion

The value corresponding to this key is of type CMTime as a NSDictionary.

## See Also

### Monitoring the event schedule

- [events](events.md): The schedule of interstitial events.
- [AVPlayerInterstitialEventMonitorEventsDidChangeNotification](eventsdidchangenotification.md): A notification the system posts when the monitor’s schedule of interstitial events changes.
- [AVPlayerInterstitialEventMonitorInterstitialEventWasUnscheduledNotification](interstitialeventwasunschedulednotification.md): A notification that is posted whenever an AVPlayerInterstitialEvent with loaded assets was unscheduled prior to playing.
- [AVPlayerInterstitialEventMonitorInterstitialEventWasUnscheduledEventKey](interstitialeventwasunscheduledeventkey.md): The dictionary key for the AVPlayerInterstitialEvent that was unscheduled in the payload of the AVPlayerInterstitialEventMonitorInterstitialEventWasUnscheduledNotification.
- [AVPlayerInterstitialEventMonitorInterstitialEventWasUnscheduledErrorKey](interstitialeventwasunschedulederrorkey.md): The dictionary key to indicate whether the event that was unscheduled was due to an error.
- [AVPlayerInterstitialEventMonitorInterstitialEventDidFinishNotification](interstitialeventdidfinishnotification.md): A notification that is posted whenever an AVPlayerInterstitialEvent finished playing.
- [AVPlayerInterstitialEventMonitorInterstitialEventDidFinishEventKey](interstitialeventdidfinisheventkey.md): The dictionary key for the AVPlayerInterstitialEvent that finished playing in the payload of the AVPlayerInterstitialEventMonitorInterstitialEventDidFinishNotification.
- [AVPlayerInterstitialEventMonitorInterstitialEventDidFinishDidPlayEntireEventKey](interstitialeventdidfinishdidplayentireeventkey.md): The dictionary key to indicate whether the event that finished playing was fully played out in the payload of the AVPlayerInterstitialEventMonitorInterstitialEventDidFinishNotification.
