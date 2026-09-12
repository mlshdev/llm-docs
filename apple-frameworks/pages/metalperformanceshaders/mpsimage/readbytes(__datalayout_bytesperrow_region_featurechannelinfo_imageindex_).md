> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimage/readbytes(_:datalayout:bytesperrow:region:featurechannelinfo:imageindex:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsimage/readbytes(_:datalayout:bytesperrow:region:featurechannelinfo:imageindex:))

# readBytes(\_:dataLayout:bytesPerRow:region:featureChannelInfo:imageIndex:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
func readBytes(_ dataBytes: UnsafeMutableRawPointer, dataLayout: MPSDataLayout, bytesPerRow: Int, region: MTLRegion, featureChannelInfo: MPSImageReadWriteParams, imageIndex: Int)
```

## See Also

### Methods to Read and Write Raw Data

- [readBytes(\_:dataLayout:imageIndex:)](readbytes%28__datalayout_imageindex_%29.md)
- [writeBytes(\_:dataLayout:bytesPerRow:region:featureChannelInfo:imageIndex:)](writebytes%28__datalayout_bytesperrow_region_featurechannelinfo_imageindex_%29.md)
- [writeBytes(\_:dataLayout:imageIndex:)](writebytes%28__datalayout_imageindex_%29.md)
- [MPSImageReadWriteParams](../mpsimagereadwriteparams.md): Parameters that control reading and writing of a particular set of feature channels.
- [MPSDataLayout](../mpsdatalayout.md): Options that define how buffer data is arranged.

# readBytes:dataLayout:bytesPerRow:region:featureChannelInfo:imageIndex: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) readBytes:(void *) dataBytes dataLayout:(MPSDataLayout) dataLayout bytesPerRow:(NSUInteger) bytesPerRow region:(MTLRegion) region featureChannelInfo:(MPSImageReadWriteParams) featureChannelInfo imageIndex:(NSUInteger) imageIndex;
```

## See Also

### Methods to Read and Write Raw Data

- [readBytes:dataLayout:imageIndex:](readbytes%28__datalayout_imageindex_%29.md)
- [writeBytes:dataLayout:bytesPerRow:region:featureChannelInfo:imageIndex:](writebytes%28__datalayout_bytesperrow_region_featurechannelinfo_imageindex_%29.md)
- [writeBytes:dataLayout:imageIndex:](writebytes%28__datalayout_imageindex_%29.md)
- [MPSImageReadWriteParams](../mpsimagereadwriteparams.md): Parameters that control reading and writing of a particular set of feature channels.
- [MPSDataLayout](../mpsdatalayout.md): Options that define how buffer data is arranged.
