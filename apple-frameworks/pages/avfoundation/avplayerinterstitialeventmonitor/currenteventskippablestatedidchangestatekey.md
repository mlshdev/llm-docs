> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerinterstitialeventmonitor/currenteventskippablestatedidchangestatekey](https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventmonitor/currenteventskippablestatedidchangestatekey)

# currentEventSkippableStateDidChangeStateKey (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The dictionary key for the skippable event state in the payload of the AVPlayerInterstitialEventMonitorCurrentEventSkippableStateDidChangeNotification.

## Declaration

```swift
class let currentEventSkippableStateDidChangeStateKey: String
```

<a id="discussion"></a>

## Discussion

The value corresponding to this key is an NSNumber containing type AVPlayerInterstitialEventSkippableEventState.

## See Also

### Monitoring skipping

- [currentEventSkippableStateDidChangeNotification](currenteventskippablestatedidchangenotification.md): A notification that’s posted whenever the currentEventSkippableState of an AVPlayerInterstitialEventMonitor changes.
- [currentEventSkippableStateDidChangeEventKey](currenteventskippablestatedidchangeeventkey.md): The dictionary key for the AVPlayerInterstitial event that had its skippable event state changed in the payload of the AVPlayerInterstitialEventMonitorCurrentEventSkippableStateDidChangeNotification.
- [currentEventSkippableStateDidChangeSkipControlLabelKey](currenteventskippablestatedidchangeskipcontrollabelkey.md): The dictionary key for the skip label of the event in the payload of the AVPlayerInterstitialEventMonitorCurrentEventSkippableStateDidChangeNotification.
- [currentEventSkippedNotification](currenteventskippednotification.md): A notification that’s posted whenever an event was skipped via skip control.
- [currentEventSkippedEventKey](currenteventskippedeventkey.md): The dictionary key for the AVPlayerInterstitialEvent that was skipped in the payload of the AVPlayerInterstitialEventMonitorCurrentEventSkippedNotification.
- [currentEventSkipControlLabel](currenteventskipcontrollabel.md): The skip control label for the currentEvent.
- [currentEventSkippableState](currenteventskippablestate.md): The skippable event state for the currentEvent.

# AVPlayerInterstitialEventMonitorCurrentEventSkippableStateDidChangeStateKey (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The dictionary key for the skippable event state in the payload of the AVPlayerInterstitialEventMonitorCurrentEventSkippableStateDidChangeNotification.

## Declaration

```objectivec
extern NSString * const AVPlayerInterstitialEventMonitorCurrentEventSkippableStateDidChangeStateKey;
```

<a id="discussion"></a>

## Discussion

The value corresponding to this key is an NSNumber containing type AVPlayerInterstitialEventSkippableEventState.

## See Also

### Monitoring skipping

- [AVPlayerInterstitialEventMonitorCurrentEventSkippableStateDidChangeNotification](currenteventskippablestatedidchangenotification.md): A notification that’s posted whenever the currentEventSkippableState of an AVPlayerInterstitialEventMonitor changes.
- [AVPlayerInterstitialEventMonitorCurrentEventSkippableStateDidChangeEventKey](currenteventskippablestatedidchangeeventkey.md): The dictionary key for the AVPlayerInterstitial event that had its skippable event state changed in the payload of the AVPlayerInterstitialEventMonitorCurrentEventSkippableStateDidChangeNotification.
- [AVPlayerInterstitialEventMonitorCurrentEventSkippableStateDidChangeSkipControlLabelKey](currenteventskippablestatedidchangeskipcontrollabelkey.md): The dictionary key for the skip label of the event in the payload of the AVPlayerInterstitialEventMonitorCurrentEventSkippableStateDidChangeNotification.
- [AVPlayerInterstitialEventMonitorCurrentEventSkippedNotification](currenteventskippednotification.md): A notification that’s posted whenever an event was skipped via skip control.
- [AVPlayerInterstitialEventMonitorCurrentEventSkippedEventKey](currenteventskippedeventkey.md): The dictionary key for the AVPlayerInterstitialEvent that was skipped in the payload of the AVPlayerInterstitialEventMonitorCurrentEventSkippedNotification.
- [currentEventSkipControlLabel](currenteventskipcontrollabel.md): The skip control label for the currentEvent.
- [currentEventSkippableState](currenteventskippablestate.md): The skippable event state for the currentEvent.
