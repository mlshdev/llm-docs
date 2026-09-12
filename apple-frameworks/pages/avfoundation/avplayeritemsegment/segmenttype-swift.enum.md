> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemsegment/segmenttype-swift.enum](https://developer.apple.com/documentation/avfoundation/avplayeritemsegment/segmenttype-swift.enum)

# AVPlayerItemSegment.SegmentType (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Constants that specify the type of segment.

## Declaration

```swift
enum SegmentType
```

## Topics

### Segment types

- [AVPlayerItemSegment.SegmentType.primary](segmenttype-swift.enum/primary.md): A segment that represents playback of a primary item.
- [AVPlayerItemSegment.SegmentType.interstitial](segmenttype-swift.enum/interstitial.md): A segment that represents playback of an interstitial event.

### Initializers

- [init(rawValue:)](segmenttype-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Identifying the type

- [segmentType](segmenttype-swift.property.md): The type content this segment represents.

# AVPlayerItemSegmentType (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Constants that specify the type of segment.

## Declaration

```objectivec
enum AVPlayerItemSegmentType : NSInteger;
```

## Topics

### Segment types

- [AVPlayerItemSegmentTypePrimary](segmenttype-swift.enum/primary.md): A segment that represents playback of a primary item.
- [AVPlayerItemSegmentTypeInterstitial](segmenttype-swift.enum/interstitial.md): A segment that represents playback of an interstitial event.

## See Also

### Identifying the type

- [segmentType](segmenttype-swift.property.md): The type content this segment represents.
