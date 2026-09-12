> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerinterstitialevent/timelineoccupancy-swift.property](https://developer.apple.com/documentation/avfoundation/avplayerinterstitialevent/timelineoccupancy-swift.property)

# timelineOccupancy (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An event’s occupancy on the integrated timeline.

## Declaration

```swift
var timelineOccupancy: AVPlayerInterstitialEvent.TimelineOccupancy { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [AVPlayerInterstitialEvent.TimelineOccupancy.singlePoint](timelineoccupancy-swift.enum/singlepoint.md).

## See Also

### Inspecting timeline occupancy

- [AVPlayerInterstitialEvent.TimelineOccupancy](timelineoccupancy-swift.enum.md): Constants that specify how an event occupies time on an integrated timeline.
- [supplementsPrimaryContent](supplementsprimarycontent.md): A Boolean value that indicates whether an event supplements the primary content and should present with the primary item.
- [contentMayVary](contentmayvary.md): A Boolean value that indicates whether an event’s content is dynamic and the server may respond with different interstitial assets for other participants in a coordinated playback session.
- [plannedDuration](plannedduration.md): The planned duration of the event.

# timelineOccupancy (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An event’s occupancy on the integrated timeline.

## Declaration

```objectivec
@property (nonatomic, readonly) AVPlayerInterstitialEventTimelineOccupancy timelineOccupancy;
```

<a id="Discussion"></a>

## Discussion

The default value is [AVPlayerInterstitialEventTimelineOccupancySinglePoint](timelineoccupancy-swift.enum/singlepoint.md).

## See Also

### Inspecting timeline occupancy

- [AVPlayerInterstitialEventTimelineOccupancy](timelineoccupancy-swift.enum.md): Constants that specify how an event occupies time on an integrated timeline.
- [supplementsPrimaryContent](supplementsprimarycontent.md): A Boolean value that indicates whether an event supplements the primary content and should present with the primary item.
- [contentMayVary](contentmayvary.md): A Boolean value that indicates whether an event’s content is dynamic and the server may respond with different interstitial assets for other participants in a coordinated playback session.
- [plannedDuration](plannedduration.md): The planned duration of the event.
