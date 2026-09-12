> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackuserinterfacetimelinesegmenttype](https://developer.apple.com/documentation/avkit/avplaybackuserinterfacetimelinesegmenttype)

# AVPlaybackUserInterfaceTimelineSegmentType (Swift)

**Framework:** AVKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Describes the type of content within a timeline segment.

## Declaration

```swift
enum AVPlaybackUserInterfaceTimelineSegmentType
```

## Topics

### Enumeration Cases

- [AVPlaybackUserInterfaceTimelineSegmentType.advertisement](avplaybackuserinterfacetimelinesegmenttype/advertisement.md): The segment contains an advertisement.
- [AVPlaybackUserInterfaceTimelineSegmentType.bonus](avplaybackuserinterfacetimelinesegmenttype/bonus.md): The segment contains bonus content, such as a post-credits scene or supplemental material.
- [AVPlaybackUserInterfaceTimelineSegmentType.credits](avplaybackuserinterfacetimelinesegmenttype/credits.md): The segment contains end credits.
- [AVPlaybackUserInterfaceTimelineSegmentType.intro](avplaybackuserinterfacetimelinesegmenttype/intro.md): The segment contains an opening title sequence.
- [AVPlaybackUserInterfaceTimelineSegmentType.other](avplaybackuserinterfacetimelinesegmenttype/other.md): The segment contains auxiliary content of an unspecified type.
- [AVPlaybackUserInterfaceTimelineSegmentType.primary](avplaybackuserinterfacetimelinesegmenttype/primary.md): The segment contains primary program content.
- [AVPlaybackUserInterfaceTimelineSegmentType.recap](avplaybackuserinterfacetimelinesegmenttype/recap.md): The segment contains a recap of previous content.
- [AVPlaybackUserInterfaceTimelineSegmentType.trailer](avplaybackuserinterfacetimelinesegmenttype/trailer.md): The segment contains a trailer or preview for other content.

### Initializers

- [init(rawValue:)](avplaybackuserinterfacetimelinesegmenttype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Timeline

- [AVPlaybackUserInterfaceTimeControllable](avplaybackuserinterfacetimecontrollable-50vcy.md): Provides time control and navigation capabilities for media content.
- [AVPlaybackUserInterfacePlaybackPosition](avplaybackuserinterfaceplaybackposition.md): A snapshot comprising a playback position recorded at a known host time and the rate of position advancement.
- [AVPlaybackUserInterfaceTimelineSegment](avplaybackuserinterfacetimelinesegment.md): Represents a contiguous segment of timeline content with specific playback characteristics.

# AVPlaybackUserInterfaceTimelineSegmentType (Objective-C)

**Framework:** AVKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Describes the type of content within a timeline segment.

## Declaration

```objectivec
enum AVPlaybackUserInterfaceTimelineSegmentType : NSInteger;
```

## Topics

### Enumeration Cases

- [AVPlaybackUserInterfaceTimelineSegmentTypeAdvertisement](avplaybackuserinterfacetimelinesegmenttype/advertisement.md): The segment contains an advertisement.
- [AVPlaybackUserInterfaceTimelineSegmentTypeBonus](avplaybackuserinterfacetimelinesegmenttype/bonus.md): The segment contains bonus content, such as a post-credits scene or supplemental material.
- [AVPlaybackUserInterfaceTimelineSegmentTypeCredits](avplaybackuserinterfacetimelinesegmenttype/credits.md): The segment contains end credits.
- [AVPlaybackUserInterfaceTimelineSegmentTypeIntro](avplaybackuserinterfacetimelinesegmenttype/intro.md): The segment contains an opening title sequence.
- [AVPlaybackUserInterfaceTimelineSegmentTypeOther](avplaybackuserinterfacetimelinesegmenttype/other.md): The segment contains auxiliary content of an unspecified type.
- [AVPlaybackUserInterfaceTimelineSegmentTypePrimary](avplaybackuserinterfacetimelinesegmenttype/primary.md): The segment contains primary program content.
- [AVPlaybackUserInterfaceTimelineSegmentTypeRecap](avplaybackuserinterfacetimelinesegmenttype/recap.md): The segment contains a recap of previous content.
- [AVPlaybackUserInterfaceTimelineSegmentTypeTrailer](avplaybackuserinterfacetimelinesegmenttype/trailer.md): The segment contains a trailer or preview for other content.

## See Also

### Timeline

- [AVPlaybackUserInterfaceTimeControllable](avplaybackuserinterfacetimecontrollable-62fq2.md): Provides time control and navigation capabilities for media content.
- [AVPlaybackUserInterfacePlaybackPosition](avplaybackuserinterfaceplaybackposition.md): A snapshot comprising a playback position recorded at a known host time and the rate of position advancement.
- [AVPlaybackUserInterfaceTimelineSegment](avplaybackuserinterfacetimelinesegment.md): Represents a contiguous segment of timeline content with specific playback characteristics.
