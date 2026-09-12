> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerinterstitialevent/timelineoccupancy-swift.enum](https://developer.apple.com/documentation/avfoundation/avplayerinterstitialevent/timelineoccupancy-swift.enum)

# AVPlayerInterstitialEvent.TimelineOccupancy (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Constants that specify how an event occupies time on an integrated timeline.

## Declaration

```swift
enum TimelineOccupancy
```

## Topics

### Values

- [AVPlayerInterstitialEvent.TimelineOccupancy.singlePoint](timelineoccupancy-swift.enum/singlepoint.md): The event occupies a single point on the integrated timeline.
- [AVPlayerInterstitialEvent.TimelineOccupancy.fill](timelineoccupancy-swift.enum/fill.md): The event fills the integrated timeline with the duration of this event.

### Initializers

- [init(rawValue:)](timelineoccupancy-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting timeline occupancy

- [timelineOccupancy](timelineoccupancy-swift.property.md): An event’s occupancy on the integrated timeline.
- [supplementsPrimaryContent](supplementsprimarycontent.md): A Boolean value that indicates whether an event supplements the primary content and should present with the primary item.
- [contentMayVary](contentmayvary.md): A Boolean value that indicates whether an event’s content is dynamic and the server may respond with different interstitial assets for other participants in a coordinated playback session.
- [plannedDuration](plannedduration.md): The planned duration of the event.

# AVPlayerInterstitialEventTimelineOccupancy (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Constants that specify how an event occupies time on an integrated timeline.

## Declaration

```objectivec
enum AVPlayerInterstitialEventTimelineOccupancy : NSInteger;
```

## Topics

### Values

- [AVPlayerInterstitialEventTimelineOccupancySinglePoint](timelineoccupancy-swift.enum/singlepoint.md): The event occupies a single point on the integrated timeline.
- [AVPlayerInterstitialEventTimelineOccupancyFill](timelineoccupancy-swift.enum/fill.md): The event fills the integrated timeline with the duration of this event.

## See Also

### Inspecting timeline occupancy

- [timelineOccupancy](timelineoccupancy-swift.property.md): An event’s occupancy on the integrated timeline.
- [supplementsPrimaryContent](supplementsprimarycontent.md): A Boolean value that indicates whether an event supplements the primary content and should present with the primary item.
- [contentMayVary](contentmayvary.md): A Boolean value that indicates whether an event’s content is dynamic and the server may respond with different interstitial assets for other participants in a coordinated playback session.
- [plannedDuration](plannedduration.md): The planned duration of the event.
