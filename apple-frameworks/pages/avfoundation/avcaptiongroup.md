> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptiongroup](https://developer.apple.com/documentation/avfoundation/avcaptiongroup)

# AVCaptionGroup (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

An object that represents zero or more captions that intersect in time.

## Declaration

```swift
class AVCaptionGroup
```

## Topics

### Creating a caption group

- [init(timeRange:)](avcaptiongroup/init%28timerange_%29.md): Creates a caption group with a time range.
- [init(captions:timeRange:)](avcaptiongroup/init%28captions_timerange_%29.md): Creates a caption group with captions and a time range.

### Inspecting the caption group

- [captions](avcaptiongroup/captions.md): The captions associated with the caption group.
- [timeRange](avcaptiongroup/timerange.md): The time range of the caption group.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [AVAssetReaderOutput.SupportedPayload](avassetreaderoutput/supportedpayload.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Groups

- [AVCaptionGrouper](avcaptiongrouper.md): An object that analyzes the temporal overlaps of caption objects to create caption groups for each span of concurrent captions.

# AVCaptionGroup (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

An object that represents zero or more captions that intersect in time.

## Declaration

```objectivec
@interface AVCaptionGroup : NSObject
```

## Topics

### Creating a caption group

- [initWithTimeRange:](avcaptiongroup/init%28timerange_%29.md): Creates a caption group with a time range.
- [initWithCaptions:timeRange:](avcaptiongroup/init%28captions_timerange_%29.md): Creates a caption group with captions and a time range.

### Inspecting the caption group

- [captions](avcaptiongroup/captions.md): The captions associated with the caption group.
- [timeRange](avcaptiongroup/timerange.md): The time range of the caption group.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Groups

- [AVCaptionGrouper](avcaptiongrouper.md): An object that analyzes the temporal overlaps of caption objects to create caption groups for each span of concurrent captions.
