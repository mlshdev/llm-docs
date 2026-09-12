> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemsegment](https://developer.apple.com/documentation/avfoundation/avplayeritemsegment)

# AVPlayerItemSegment (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An immutable object that represents a segment of time on the integrated timeline.

## Declaration

```swift
class AVPlayerItemSegment
```

## Topics

### Identifying the type

- [segmentType](avplayeritemsegment/segmenttype-swift.property.md): The type content this segment represents.
- [AVPlayerItemSegment.SegmentType](avplayeritemsegment/segmenttype-swift.enum.md): Constants that specify the type of segment.

### Inspecting the segment

- [timeMapping](avplayeritemsegment/timemapping.md): The time mapping for this segment.
- [loadedTimeRanges](avplayeritemsegment/loadedtimeranges-879hc.md): The time ranges for the segment that have media data is readily available.
- [startDate](avplayeritemsegment/startdate.md): The date at which a segment starts.
- [interstitialEvent](avplayeritemsegment/interstitialevent.md): The associated interstitial event for this segment.

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

### Inspecting the snapshot

- [duration](avplayeritemintegratedtimelinesnapshot/duration.md): The total duration of the primary item and scheduled interstitial events.
- [currentSegment](avplayeritemintegratedtimelinesnapshot/currentsegment.md): The currently playing segment.
- [segments](avplayeritemintegratedtimelinesnapshot/segments.md): The segments for this snapshot.
- [currentTime](avplayeritemintegratedtimelinesnapshot/currenttime.md): The current time on the integrated timeline when the system created the snapshot.
- [currentDate](avplayeritemintegratedtimelinesnapshot/currentdate.md): The current date on the integrated timeline when the system created the snapshot.

# AVPlayerItemSegment (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An immutable object that represents a segment of time on the integrated timeline.

## Declaration

```objectivec
@interface AVPlayerItemSegment : NSObject
```

## Topics

### Identifying the type

- [segmentType](avplayeritemsegment/segmenttype-swift.property.md): The type content this segment represents.
- [AVPlayerItemSegmentType](avplayeritemsegment/segmenttype-swift.enum.md): Constants that specify the type of segment.

### Inspecting the segment

- [timeMapping](avplayeritemsegment/timemapping.md): The time mapping for this segment.
- [loadedTimeRanges](avplayeritemsegment/loadedtimeranges-2p0fl.md): The time ranges for the segment that have media data is readily available.
- [startDate](avplayeritemsegment/startdate.md): The date at which a segment starts.
- [interstitialEvent](avplayeritemsegment/interstitialevent.md): The associated interstitial event for this segment.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Inspecting the snapshot

- [duration](avplayeritemintegratedtimelinesnapshot/duration.md): The total duration of the primary item and scheduled interstitial events.
- [currentSegment](avplayeritemintegratedtimelinesnapshot/currentsegment.md): The currently playing segment.
- [segments](avplayeritemintegratedtimelinesnapshot/segments.md): The segments for this snapshot.
- [currentTime](avplayeritemintegratedtimelinesnapshot/currenttime.md): The current time on the integrated timeline when the system created the snapshot.
- [currentDate](avplayeritemintegratedtimelinesnapshot/currentdate.md): The current date on the integrated timeline when the system created the snapshot.
