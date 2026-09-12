> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemintegratedtimelinesnapshot](https://developer.apple.com/documentation/avfoundation/avplayeritemintegratedtimelinesnapshot)

# AVPlayerItemIntegratedTimelineSnapshot (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An immutable representation of inspectable details of an integrated timeline object.

## Declaration

```swift
class AVPlayerItemIntegratedTimelineSnapshot
```

<a id="overview"></a>

## Overview

A snapshot doesn’t reflect the new timeline state as playback progresses. You can request a new snapshot instance from an [AVPlayerItemIntegratedTimeline](avplayeritemintegratedtimeline.md) that reflect the latest timeline state.

## Topics

### Inspecting the snapshot

- [duration](avplayeritemintegratedtimelinesnapshot/duration.md): The total duration of the primary item and scheduled interstitial events.
- [currentSegment](avplayeritemintegratedtimelinesnapshot/currentsegment.md): The currently playing segment.
- [segments](avplayeritemintegratedtimelinesnapshot/segments.md): The segments for this snapshot.
- [AVPlayerItemSegment](avplayeritemsegment.md): An immutable object that represents a segment of time on the integrated timeline.
- [currentTime](avplayeritemintegratedtimelinesnapshot/currenttime.md): The current time on the integrated timeline when the system created the snapshot.
- [currentDate](avplayeritemintegratedtimelinesnapshot/currentdate.md): The current date on the integrated timeline when the system created the snapshot.

### Time mapping

- [segmentAndOffsetIntoSegment(forTimelineTime:)](avplayeritemintegratedtimelinesnapshot/segmentandoffsetintosegment%28fortimelinetime_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting snapshots

- [currentSnapshot](avplayeritemintegratedtimeline/currentsnapshot.md): An immutable representation of the timeline state at time of request.
- [snapshotsOutOfSyncNotification](avplayeritemintegratedtimeline/snapshotsoutofsyncnotification.md): A notification the system posts when the snapshot objects provided by this timeline become out of sync with the current timeline state.

# AVPlayerItemIntegratedTimelineSnapshot (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An immutable representation of inspectable details of an integrated timeline object.

## Declaration

```objectivec
@interface AVPlayerItemIntegratedTimelineSnapshot : NSObject
```

<a id="overview"></a>

## Overview

A snapshot doesn’t reflect the new timeline state as playback progresses. You can request a new snapshot instance from an [AVPlayerItemIntegratedTimeline](avplayeritemintegratedtimeline.md) that reflect the latest timeline state.

## Topics

### Inspecting the snapshot

- [duration](avplayeritemintegratedtimelinesnapshot/duration.md): The total duration of the primary item and scheduled interstitial events.
- [currentSegment](avplayeritemintegratedtimelinesnapshot/currentsegment.md): The currently playing segment.
- [segments](avplayeritemintegratedtimelinesnapshot/segments.md): The segments for this snapshot.
- [AVPlayerItemSegment](avplayeritemsegment.md): An immutable object that represents a segment of time on the integrated timeline.
- [currentTime](avplayeritemintegratedtimelinesnapshot/currenttime.md): The current time on the integrated timeline when the system created the snapshot.
- [currentDate](avplayeritemintegratedtimelinesnapshot/currentdate.md): The current date on the integrated timeline when the system created the snapshot.

### Time mapping

- [mapTime:toSegment:atSegmentOffset:](avplayeritemintegratedtimelinesnapshot/maptime_tosegment_atsegmentoffset_.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Inspecting snapshots

- [currentSnapshot](avplayeritemintegratedtimeline/currentsnapshot.md): An immutable representation of the timeline state at time of request.
- [AVPlayerIntegratedTimelineSnapshotsOutOfSyncNotification](avplayeritemintegratedtimeline/snapshotsoutofsyncnotification.md): A notification the system posts when the snapshot objects provided by this timeline become out of sync with the current timeline state.
