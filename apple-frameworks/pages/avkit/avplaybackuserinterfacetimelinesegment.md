> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackuserinterfacetimelinesegment](https://developer.apple.com/documentation/avkit/avplaybackuserinterfacetimelinesegment)

# AVPlaybackUserInterfaceTimelineSegment (Swift)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Represents a contiguous segment of timeline content with specific playback characteristics.

## Declaration

```swift
class AVPlaybackUserInterfaceTimelineSegment
```

<a id="overview"></a>

## Overview

Timeline segments divide media content into distinct regions, each with its own classification and behavior rules. Segments are typically used to distinguish between primary content and auxiliary content such as advertisements or bonus material, and to control whether users can seek or skip through specific portions of the timeline.

## Topics

### Initializers

- [init(coder:)](avplaybackuserinterfacetimelinesegment/init%28coder_%29.md)
- [init(timeRange:segmentType:marked:requiresLinearPlayback:identifier:)](avplaybackuserinterfacetimelinesegment/init%28timerange_segmenttype_marked_requireslinearplayback_identifier_%29.md): Initializes a new timeline segment with the specified characteristics.

### Instance Properties

- [identifier](avplaybackuserinterfacetimelinesegment/identifier.md): Optional external identifier for tracking or analytics purposes. May correspond to advertisement IDs, chapter markers, or other external systems.
- [isMarked](avplaybackuserinterfacetimelinesegment/ismarked.md): Indicates whether this segment should be visually highlighted or marked in the timeline UI.
- [requiresLinearPlayback](avplaybackuserinterfacetimelinesegment/requireslinearplayback.md): Indicates whether this segment must be played sequentially without seeking or skipping. Typically used for advertisements or important announcements.
- [segmentType](avplaybackuserinterfacetimelinesegment/segmenttype.md): The type of content within this segment, indicating whether it is primary program content or a specific category of auxiliary content.
- [timeRange](avplaybackuserinterfacetimelinesegment/timerange.md): The time range defining the segment’s position and duration within the overall timeline.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Timeline

- [AVPlaybackUserInterfaceTimeControllable](avplaybackuserinterfacetimecontrollable-50vcy.md): Provides time control and navigation capabilities for media content.
- [AVPlaybackUserInterfacePlaybackPosition](avplaybackuserinterfaceplaybackposition.md): A snapshot comprising a playback position recorded at a known host time and the rate of position advancement.
- [AVPlaybackUserInterfaceTimelineSegmentType](avplaybackuserinterfacetimelinesegmenttype.md): Describes the type of content within a timeline segment.

# AVPlaybackUserInterfaceTimelineSegment (Objective-C)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Represents a contiguous segment of timeline content with specific playback characteristics.

## Declaration

```objectivec
@interface AVPlaybackUserInterfaceTimelineSegment : NSObject
```

<a id="overview"></a>

## Overview

Timeline segments divide media content into distinct regions, each with its own classification and behavior rules. Segments are typically used to distinguish between primary content and auxiliary content such as advertisements or bonus material, and to control whether users can seek or skip through specific portions of the timeline.

## Topics

### Instance Properties

- [identifier](avplaybackuserinterfacetimelinesegment/identifier.md): Optional external identifier for tracking or analytics purposes. May correspond to advertisement IDs, chapter markers, or other external systems.
- [marked](avplaybackuserinterfacetimelinesegment/ismarked.md): Indicates whether this segment should be visually highlighted or marked in the timeline UI.
- [requiresLinearPlayback](avplaybackuserinterfacetimelinesegment/requireslinearplayback.md): Indicates whether this segment must be played sequentially without seeking or skipping. Typically used for advertisements or important announcements.
- [segmentType](avplaybackuserinterfacetimelinesegment/segmenttype.md): The type of content within this segment, indicating whether it is primary program content or a specific category of auxiliary content.
- [timeRange](avplaybackuserinterfacetimelinesegment/timerange.md): The time range defining the segment’s position and duration within the overall timeline.

### Instance Methods

- [initWithTimeRange:segmentType:marked:requiresLinearPlayback:identifier:](avplaybackuserinterfacetimelinesegment/init%28timerange_segmenttype_marked_requireslinearplayback_identifier_%29.md): Initializes a new timeline segment with the specified characteristics.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Timeline

- [AVPlaybackUserInterfaceTimeControllable](avplaybackuserinterfacetimecontrollable-62fq2.md): Provides time control and navigation capabilities for media content.
- [AVPlaybackUserInterfacePlaybackPosition](avplaybackuserinterfaceplaybackposition.md): A snapshot comprising a playback position recorded at a known host time and the rate of position advancement.
- [AVPlaybackUserInterfaceTimelineSegmentType](avplaybackuserinterfacetimelinesegmenttype.md): Describes the type of content within a timeline segment.
