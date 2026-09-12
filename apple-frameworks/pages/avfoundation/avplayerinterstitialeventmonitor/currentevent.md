> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerinterstitialeventmonitor/currentevent](https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventmonitor/currentevent)

# currentEvent (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The current interstitial event.

## Declaration

```swift
var currentEvent: AVPlayerInterstitialEvent? { get }
```

<a id="Discussion"></a>

## Discussion

The value is `nil` when primary content is playing.

## See Also

### Monitoring the current event

- [currentEventDidChangeNotification](currenteventdidchangenotification.md): A notification the system posts when the monitor’s current interstitial event changes.

# currentEvent (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The current interstitial event.

## Declaration

```objectivec
@property (readonly, nullable) AVPlayerInterstitialEvent * currentEvent;
```

<a id="Discussion"></a>

## Discussion

The value is `nil` when primary content is playing.

## See Also

### Monitoring the current event

- [AVPlayerInterstitialEventMonitorCurrentEventDidChangeNotification](currenteventdidchangenotification.md): A notification the system posts when the monitor’s current interstitial event changes.
