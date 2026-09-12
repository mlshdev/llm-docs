> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackuserinterfacetimecontrollable-50vcy](https://developer.apple.com/documentation/avkit/avplaybackuserinterfacetimecontrollable-50vcy)

# AVPlaybackUserInterfaceTimeControllable

**Framework:** AVKit  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Provides time control and navigation capabilities for media content.

## Declaration

```swift
@MainActor protocol AVPlaybackUserInterfaceTimeControllable : AnyObject, Observable
```

## Topics

### Instance Properties

- [currentSegment](avplaybackuserinterfacetimecontrollable-50vcy/currentsegment.md): The segment containing the current playback position.
- [playbackPosition](avplaybackuserinterfacetimecontrollable-50vcy/playbackposition.md): A snapshot of the current playback position. Must be updated — with a fresh `hostTime` — on play, pause, seek, scan, and buffering state changes. Must be observable.
- [seekableTimeRanges](avplaybackuserinterfacetimecontrollable-50vcy/seekabletimeranges.md): Time ranges within the timeline where seeking operations are permitted.
- [segments](avplaybackuserinterfacetimecontrollable-50vcy/segments.md): Segments representing different content types within the timeline.
- [timeRange](avplaybackuserinterfacetimecontrollable-50vcy/timerange.md): The time range representing the total duration and bounds of the media content.

### Instance Methods

- [seek(to:tolerance:)](avplaybackuserinterfacetimecontrollable-50vcy/seek%28to_tolerance_%29.md): Requests a seek to the specified position.

## Relationships

### Inherits From

- [Observable](https://developer.apple.com/documentation/observation/observable)

### Inherited By

- [AVPlaybackUserInterfaceControllable](avplaybackuserinterfacecontrollable-92fri.md)

## See Also

### Timeline

- [AVPlaybackUserInterfacePlaybackPosition](avplaybackuserinterfaceplaybackposition.md): A snapshot comprising a playback position recorded at a known host time and the rate of position advancement.
- [AVPlaybackUserInterfaceTimelineSegment](avplaybackuserinterfacetimelinesegment.md): Represents a contiguous segment of timeline content with specific playback characteristics.
- [AVPlaybackUserInterfaceTimelineSegmentType](avplaybackuserinterfacetimelinesegmenttype.md): Describes the type of content within a timeline segment.
