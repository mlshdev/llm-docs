> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerinterstitialevent/supplementsprimarycontent](https://developer.apple.com/documentation/avfoundation/avplayerinterstitialevent/supplementsprimarycontent)

# supplementsPrimaryContent (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A Boolean value that indicates whether an event supplements the primary content and should present with the primary item.

## Declaration

```swift
var supplementsPrimaryContent: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Inspecting timeline occupancy

- [timelineOccupancy](timelineoccupancy-swift.property.md): An event’s occupancy on the integrated timeline.
- [AVPlayerInterstitialEvent.TimelineOccupancy](timelineoccupancy-swift.enum.md): Constants that specify how an event occupies time on an integrated timeline.
- [contentMayVary](contentmayvary.md): A Boolean value that indicates whether an event’s content is dynamic and the server may respond with different interstitial assets for other participants in a coordinated playback session.
- [plannedDuration](plannedduration.md): The planned duration of the event.

# supplementsPrimaryContent (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A Boolean value that indicates whether an event supplements the primary content and should present with the primary item.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL supplementsPrimaryContent;
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Inspecting timeline occupancy

- [timelineOccupancy](timelineoccupancy-swift.property.md): An event’s occupancy on the integrated timeline.
- [AVPlayerInterstitialEventTimelineOccupancy](timelineoccupancy-swift.enum.md): Constants that specify how an event occupies time on an integrated timeline.
- [contentMayVary](contentmayvary.md): A Boolean value that indicates whether an event’s content is dynamic and the server may respond with different interstitial assets for other participants in a coordinated playback session.
- [plannedDuration](plannedduration.md): The planned duration of the event.
