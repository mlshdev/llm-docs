> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerinterstitialeventcontroller/cancelcurrentevent(withresumptionoffset:)](https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventcontroller/cancelcurrentevent(withresumptionoffset:))

# cancelCurrentEvent(withResumptionOffset:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Cancels the playback of all currently playing and scheduled interstitial events, and resumes playback of primary content.

## Declaration

```swift
func cancelCurrentEvent(withResumptionOffset resumptionOffset: CMTime)
```

## Parameters

- `resumptionOffset`: The time offset at which playback of the primary content resumes after interstitial playback finishes.

<a id="Discussion"></a>

## Discussion

When you cancel interstitial events using this method, the resumption offset value that you specify overrides the events’s [resumptionOffset](../avplayerinterstitialevent/resumptionoffset.md) value.

> **Note**

>  If you call this method during the handling of coinciding interstitial events, the system cancels all events for that time. Calling this method has no impact on schedule events that have dates or times later than this event.

## See Also

### Configuring the event schedule

- [events](events.md): The current schedule of interstitial events.
- [skipCurrentEvent()](skipcurrentevent%28%29.md): Causes the playback of the currently playing interstital event to be abandoned.

# cancelCurrentEventWithResumptionOffset: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Cancels the playback of all currently playing and scheduled interstitial events, and resumes playback of primary content.

## Declaration

```objectivec
- (void) cancelCurrentEventWithResumptionOffset:(CMTime) resumptionOffset;
```

## Parameters

- `resumptionOffset`: The time offset at which playback of the primary content resumes after interstitial playback finishes.

<a id="Discussion"></a>

## Discussion

When you cancel interstitial events using this method, the resumption offset value that you specify overrides the events’s [resumptionOffset](../avplayerinterstitialevent/resumptionoffset.md) value.

> **Note**

>  If you call this method during the handling of coinciding interstitial events, the system cancels all events for that time. Calling this method has no impact on schedule events that have dates or times later than this event.

## See Also

### Configuring the event schedule

- [events](events.md): The current schedule of interstitial events.
- [skipCurrentEvent](skipcurrentevent%28%29.md): Causes the playback of the currently playing interstital event to be abandoned.
