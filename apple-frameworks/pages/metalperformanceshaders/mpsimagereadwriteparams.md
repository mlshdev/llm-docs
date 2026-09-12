> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagereadwriteparams](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagereadwriteparams)

# MPSImageReadWriteParams (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Parameters that control reading and writing of a particular set of feature channels.

## Declaration

```swift
struct MPSImageReadWriteParams
```

## Topics

### Instance Properties

- [featureChannelOffset](mpsimagereadwriteparams/featurechanneloffset.md)
- [numberOfFeatureChannelsToReadWrite](mpsimagereadwriteparams/numberoffeaturechannelstoreadwrite.md)

### Initializers

- [init()](mpsimagereadwriteparams/init%28%29.md)
- [init(featureChannelOffset:numberOfFeatureChannelsToReadWrite:)](mpsimagereadwriteparams/init%28featurechanneloffset_numberoffeaturechannelstoreadwrite_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Methods to Read and Write Raw Data

- [readBytes(\_:dataLayout:bytesPerRow:region:featureChannelInfo:imageIndex:)](mpsimage/readbytes%28__datalayout_bytesperrow_region_featurechannelinfo_imageindex_%29.md)
- [readBytes(\_:dataLayout:imageIndex:)](mpsimage/readbytes%28__datalayout_imageindex_%29.md)
- [writeBytes(\_:dataLayout:bytesPerRow:region:featureChannelInfo:imageIndex:)](mpsimage/writebytes%28__datalayout_bytesperrow_region_featurechannelinfo_imageindex_%29.md)
- [writeBytes(\_:dataLayout:imageIndex:)](mpsimage/writebytes%28__datalayout_imageindex_%29.md)
- [MPSDataLayout](mpsdatalayout.md): Options that define how buffer data is arranged.

# MPSImageReadWriteParams (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Parameters that control reading and writing of a particular set of feature channels.

## Declaration

```objectivec
typedef struct { ... } MPSImageReadWriteParams;
```

## Topics

### Instance Properties

- [featureChannelOffset](mpsimagereadwriteparams/featurechanneloffset.md)
- [numberOfFeatureChannelsToReadWrite](mpsimagereadwriteparams/numberoffeaturechannelstoreadwrite.md)

## See Also

### Methods to Read and Write Raw Data

- [readBytes:dataLayout:bytesPerRow:region:featureChannelInfo:imageIndex:](mpsimage/readbytes%28__datalayout_bytesperrow_region_featurechannelinfo_imageindex_%29.md)
- [readBytes:dataLayout:imageIndex:](mpsimage/readbytes%28__datalayout_imageindex_%29.md)
- [writeBytes:dataLayout:bytesPerRow:region:featureChannelInfo:imageIndex:](mpsimage/writebytes%28__datalayout_bytesperrow_region_featurechannelinfo_imageindex_%29.md)
- [writeBytes:dataLayout:imageIndex:](mpsimage/writebytes%28__datalayout_imageindex_%29.md)
- [MPSDataLayout](mpsdatalayout.md): Options that define how buffer data is arranged.
