> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimage/writebytes(_:datalayout:bytesperrow:bytesperimage:region:featurechannelinfo:imageindex:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsimage/writebytes(_:datalayout:bytesperrow:bytesperimage:region:featurechannelinfo:imageindex:))

# writeBytes(\_:dataLayout:bytesPerRow:bytesPerImage:region:featureChannelInfo:imageIndex:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```swift
func writeBytes(_ dataBytes: UnsafeRawPointer, dataLayout: MPSDataLayout, bytesPerRow: Int, bytesPerImage: Int, region: MTLRegion, featureChannelInfo: MPSImageReadWriteParams, imageIndex: Int)
```

# writeBytes:dataLayout:bytesPerRow:bytesPerImage:region:featureChannelInfo:imageIndex: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```objectivec
- (void) writeBytes:(const void *) dataBytes dataLayout:(MPSDataLayout) dataLayout bytesPerRow:(NSUInteger) bytesPerRow bytesPerImage:(NSUInteger) bytesPerImage region:(MTLRegion) region featureChannelInfo:(MPSImageReadWriteParams) featureChannelInfo imageIndex:(NSUInteger) imageIndex;
```
