> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackuserinterfaceplaybackposition](https://developer.apple.com/documentation/avkit/avplaybackuserinterfaceplaybackposition)

# AVPlaybackUserInterfacePlaybackPosition (Swift)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A snapshot comprising a playback position recorded at a known host time and the rate of position advancement.

## Declaration

```swift
class AVPlaybackUserInterfacePlaybackPosition
```

<a id="overview"></a>

## Overview

All three fields must be captured atomically by the conformer.

## Topics

### Initializers

- [init(coder:)](avplaybackuserinterfaceplaybackposition/init%28coder_%29.md)
- [init(position:hostTime:rate:)](avplaybackuserinterfaceplaybackposition/init%28position_hosttime_rate_%29.md): Creates a new playback position snapshot.

### Instance Properties

- [hostTime](avplaybackuserinterfaceplaybackposition/hosttime.md): The mach host time at which `position` was accurate.
- [position](avplaybackuserinterfaceplaybackposition/position.md): The playback position at the time of the snapshot.
- [rate](avplaybackuserinterfaceplaybackposition/rate.md): The rate of position advancement at the time of the snapshot. Zero when paused; negative during reverse scan.

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
- [AVPlaybackUserInterfaceTimelineSegment](avplaybackuserinterfacetimelinesegment.md): Represents a contiguous segment of timeline content with specific playback characteristics.
- [AVPlaybackUserInterfaceTimelineSegmentType](avplaybackuserinterfacetimelinesegmenttype.md): Describes the type of content within a timeline segment.

# AVPlaybackUserInterfacePlaybackPosition (Objective-C)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A snapshot comprising a playback position recorded at a known host time and the rate of position advancement.

## Declaration

```objectivec
@interface AVPlaybackUserInterfacePlaybackPosition : NSObject
```

<a id="overview"></a>

## Overview

All three fields must be captured atomically by the conformer.

## Topics

### Instance Properties

- [hostTime](avplaybackuserinterfaceplaybackposition/hosttime.md): The mach host time at which `position` was accurate.
- [position](avplaybackuserinterfaceplaybackposition/position.md): The playback position at the time of the snapshot.
- [rate](avplaybackuserinterfaceplaybackposition/rate.md): The rate of position advancement at the time of the snapshot. Zero when paused; negative during reverse scan.

### Instance Methods

- [initWithPosition:hostTime:rate:](avplaybackuserinterfaceplaybackposition/init%28position_hosttime_rate_%29.md): Creates a new playback position snapshot.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Timeline

- [AVPlaybackUserInterfaceTimeControllable](avplaybackuserinterfacetimecontrollable-62fq2.md): Provides time control and navigation capabilities for media content.
- [AVPlaybackUserInterfaceTimelineSegment](avplaybackuserinterfacetimelinesegment.md): Represents a contiguous segment of timeline content with specific playback characteristics.
- [AVPlaybackUserInterfaceTimelineSegmentType](avplaybackuserinterfacetimelinesegmenttype.md): Describes the type of content within a timeline segment.
