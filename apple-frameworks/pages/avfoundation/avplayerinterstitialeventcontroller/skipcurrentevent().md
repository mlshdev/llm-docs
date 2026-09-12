> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerinterstitialeventcontroller/skipcurrentevent()](https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventcontroller/skipcurrentevent())

# skipCurrentEvent() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Causes the playback of the currently playing interstital event to be abandoned.

## Declaration

```swift
func skipCurrentEvent()
```

<a id="discussion"></a>

## Discussion

Note that coinciding events will NOT be skipped. This results in AVPlayerInterstitialEventMonitorCurrentEventSkippedNotification being posted. Has no effect while the currentEvent is nil.

## See Also

### Configuring the event schedule

- [events](events.md): The current schedule of interstitial events.
- [cancelCurrentEvent(withResumptionOffset:)](cancelcurrentevent%28withresumptionoffset_%29.md): Cancels the playback of all currently playing and scheduled interstitial events, and resumes playback of primary content.

# skipCurrentEvent (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Causes the playback of the currently playing interstital event to be abandoned.

## Declaration

```objectivec
- (void) skipCurrentEvent;
```

<a id="discussion"></a>

## Discussion

Note that coinciding events will NOT be skipped. This results in AVPlayerInterstitialEventMonitorCurrentEventSkippedNotification being posted. Has no effect while the currentEvent is nil.

## See Also

### Configuring the event schedule

- [events](events.md): The current schedule of interstitial events.
- [cancelCurrentEventWithResumptionOffset:](cancelcurrentevent%28withresumptionoffset_%29.md): Cancels the playback of all currently playing and scheduled interstitial events, and resumes playback of primary content.
