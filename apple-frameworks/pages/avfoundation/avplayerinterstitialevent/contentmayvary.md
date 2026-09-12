> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerinterstitialevent/contentmayvary](https://developer.apple.com/documentation/avfoundation/avplayerinterstitialevent/contentmayvary)

# contentMayVary (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A Boolean value that indicates whether an event’s content is dynamic and the server may respond with different interstitial assets for other participants in a coordinated playback session.

## Declaration

```swift
var contentMayVary: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value is [false](https://developer.apple.com/documentation/swift/false), the primary asset participates in coordinated playback, this event does as well.

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Inspecting timeline occupancy

- [timelineOccupancy](timelineoccupancy-swift.property.md): An event’s occupancy on the integrated timeline.
- [AVPlayerInterstitialEvent.TimelineOccupancy](timelineoccupancy-swift.enum.md): Constants that specify how an event occupies time on an integrated timeline.
- [supplementsPrimaryContent](supplementsprimarycontent.md): A Boolean value that indicates whether an event supplements the primary content and should present with the primary item.
- [plannedDuration](plannedduration.md): The planned duration of the event.

# contentMayVary (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A Boolean value that indicates whether an event’s content is dynamic and the server may respond with different interstitial assets for other participants in a coordinated playback session.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL contentMayVary;
```

<a id="Discussion"></a>

## Discussion

If the value is [false](https://developer.apple.com/documentation/swift/false), the primary asset participates in coordinated playback, this event does as well.

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Inspecting timeline occupancy

- [timelineOccupancy](timelineoccupancy-swift.property.md): An event’s occupancy on the integrated timeline.
- [AVPlayerInterstitialEventTimelineOccupancy](timelineoccupancy-swift.enum.md): Constants that specify how an event occupies time on an integrated timeline.
- [supplementsPrimaryContent](supplementsprimarycontent.md): A Boolean value that indicates whether an event supplements the primary content and should present with the primary item.
- [plannedDuration](plannedduration.md): The planned duration of the event.
