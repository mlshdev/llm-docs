> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerinterstitialeventmonitorschedulerequestcompletednotification](https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventmonitorschedulerequestcompletednotification)

# AVPlayerInterstitialEventMonitorScheduleRequestCompletedNotification

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+ · watchOS 26.4+

A notification that is posted whenever a daterange-schedule request completes.

## Declaration

```objectivec
extern NSNotificationName const AVPlayerInterstitialEventMonitorScheduleRequestCompletedNotification;
```

<a id="discussion"></a>

## Discussion

The userInfo dictionary can contain the following keys and values:

1. AVPlayerInterstitialEventMonitorScheduleRequestIdentifierKey, whose value is an NSString identifying the schedule.
2. AVPlayerInterstitialEventMonitorScheduleRequestResponseKey, whose value is an NSData carrying the JSON response. Absent if request failed.
3. AVPlayerInterstitialEventMonitorScheduleRequestErrorKey, whose value is an NSError.

## See Also

### Interstitials

- [Providing an integrated view of your timeline when playing HLS interstitials](providing-an-integrated-view-of-your-timeline-when-playing-hls-interstitials.md): Go beyond simple ad insertion with point and fill occupancy HLS interstitials.
- [AVPlayerInterstitialEvent](avplayerinterstitialevent.md): An object that provides instructions for how a player presents interstitial content.
- [AVPlayerInterstitialEventController](avplayerinterstitialeventcontroller.md): An object that schedules interstitial events for items played by the primary player.
- [AVPlayerInterstitialEventMonitor](avplayerinterstitialeventmonitor.md): An object that monitors the scheduling and progress of interstitial events.
- [AVPlayerInterstitialEventMonitorScheduleRequestErrorKey](avplayerinterstitialeventmonitorschedulerequesterrorkey.md): userInfo dictionary key for the AVPlayerInterstitialEventMonitorScheduleRequestCompletedNotification. Value is NSError. Absent if the request succeeded
- [AVPlayerInterstitialEventMonitorScheduleRequestIdentifierKey](avplayerinterstitialeventmonitorschedulerequestidentifierkey.md): userInfo dictionary key for the AVPlayerInterstitialEventMonitorScheduleRequestCompletedNotification. Value is NSString.
- [AVPlayerInterstitialEventMonitorScheduleRequestResponseKey](avplayerinterstitialeventmonitorschedulerequestresponsekey.md): userInfo dictionary key for the AVPlayerInterstitialEventMonitorScheduleRequestCompletedNotification. Value is NSData. Absent if the request failed.
- [AVPlayerItemIntegratedTimeline](avplayeritemintegratedtimeline.md): An object that models the timeline and playback sequence of a primary player item and scheduled interstitial events.
