> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerinterstitialevent/plannedduration](https://developer.apple.com/documentation/avfoundation/avplayerinterstitialevent/plannedduration)

# plannedDuration (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The planned duration of the event.

## Declaration

```swift
var plannedDuration: CMTime { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [zero](../../coremedia/cmtime/zero.md).

## See Also

### Inspecting timeline occupancy

- [timelineOccupancy](timelineoccupancy-swift.property.md): An event’s occupancy on the integrated timeline.
- [AVPlayerInterstitialEvent.TimelineOccupancy](timelineoccupancy-swift.enum.md): Constants that specify how an event occupies time on an integrated timeline.
- [supplementsPrimaryContent](supplementsprimarycontent.md): A Boolean value that indicates whether an event supplements the primary content and should present with the primary item.
- [contentMayVary](contentmayvary.md): A Boolean value that indicates whether an event’s content is dynamic and the server may respond with different interstitial assets for other participants in a coordinated playback session.

# plannedDuration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The planned duration of the event.

## Declaration

```objectivec
@property (nonatomic, readwrite) CMTime plannedDuration;
```

<a id="Discussion"></a>

## Discussion

The default value is [kCMTimeZero](../../coremedia/cmtime/zero.md).

## See Also

### Inspecting timeline occupancy

- [timelineOccupancy](timelineoccupancy-swift.property.md): An event’s occupancy on the integrated timeline.
- [AVPlayerInterstitialEventTimelineOccupancy](timelineoccupancy-swift.enum.md): Constants that specify how an event occupies time on an integrated timeline.
- [supplementsPrimaryContent](supplementsprimarycontent.md): A Boolean value that indicates whether an event supplements the primary content and should present with the primary item.
- [contentMayVary](contentmayvary.md): A Boolean value that indicates whether an event’s content is dynamic and the server may respond with different interstitial assets for other participants in a coordinated playback session.
