> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsdatalayout](https://developer.apple.com/documentation/metalperformanceshaders/mpsdatalayout)

# MPSDataLayout (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Options that define how buffer data is arranged.

## Declaration

```swift
enum MPSDataLayout
```

## Topics

### Enumeration Cases

- [MPSDataLayout.featureChannelsxHeightxWidth](mpsdatalayout/featurechannelsxheightxwidth.md)
- [MPSDataLayout.HeightxWidthxFeatureChannels](mpsdatalayout/heightxwidthxfeaturechannels.md)

### Initializers

- [init(rawValue:)](mpsdatalayout/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Methods to Read and Write Raw Data

- [readBytes(\_:dataLayout:bytesPerRow:region:featureChannelInfo:imageIndex:)](mpsimage/readbytes%28__datalayout_bytesperrow_region_featurechannelinfo_imageindex_%29.md)
- [readBytes(\_:dataLayout:imageIndex:)](mpsimage/readbytes%28__datalayout_imageindex_%29.md)
- [writeBytes(\_:dataLayout:bytesPerRow:region:featureChannelInfo:imageIndex:)](mpsimage/writebytes%28__datalayout_bytesperrow_region_featurechannelinfo_imageindex_%29.md)
- [writeBytes(\_:dataLayout:imageIndex:)](mpsimage/writebytes%28__datalayout_imageindex_%29.md)
- [MPSImageReadWriteParams](mpsimagereadwriteparams.md): Parameters that control reading and writing of a particular set of feature channels.

# MPSDataLayout (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Options that define how buffer data is arranged.

## Declaration

```objectivec
enum MPSDataLayout : NSUInteger;
```

## Topics

### Enumeration Cases

- [MPSDataLayoutFeatureChannelsxHeightxWidth](mpsdatalayout/featurechannelsxheightxwidth.md)
- [MPSDataLayoutHeightxWidthxFeatureChannels](mpsdatalayout/heightxwidthxfeaturechannels.md)

## See Also

### Methods to Read and Write Raw Data

- [readBytes:dataLayout:bytesPerRow:region:featureChannelInfo:imageIndex:](mpsimage/readbytes%28__datalayout_bytesperrow_region_featurechannelinfo_imageindex_%29.md)
- [readBytes:dataLayout:imageIndex:](mpsimage/readbytes%28__datalayout_imageindex_%29.md)
- [writeBytes:dataLayout:bytesPerRow:region:featureChannelInfo:imageIndex:](mpsimage/writebytes%28__datalayout_bytesperrow_region_featurechannelinfo_imageindex_%29.md)
- [writeBytes:dataLayout:imageIndex:](mpsimage/writebytes%28__datalayout_imageindex_%29.md)
- [MPSImageReadWriteParams](mpsimagereadwriteparams.md): Parameters that control reading and writing of a particular set of feature channels.
