> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventmonitor/currenteventdidchangenotification

# currentEventDidChangeNotification (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A notification the system posts when the monitor’s current interstitial event changes.

## Declaration

```swift
class let currentEventDidChangeNotification: NSNotification.Name
```

## See Also

### Monitoring the current event

- [currentEvent](currentevent.md): The current interstitial event.

# AVPlayerInterstitialEventMonitorCurrentEventDidChangeNotification (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A notification the system posts when the monitor’s current interstitial event changes.

## Declaration

```objectivec
extern NSNotificationName const AVPlayerInterstitialEventMonitorCurrentEventDidChangeNotification;
```

## See Also

### Monitoring the current event

- [currentEvent](currentevent.md): The current interstitial event.
