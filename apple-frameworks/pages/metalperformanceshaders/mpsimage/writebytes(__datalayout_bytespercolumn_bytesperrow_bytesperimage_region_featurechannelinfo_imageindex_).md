> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimage/writebytes(_:datalayout:bytespercolumn:bytesperrow:bytesperimage:region:featurechannelinfo:imageindex:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsimage/writebytes(_:datalayout:bytespercolumn:bytesperrow:bytesperimage:region:featurechannelinfo:imageindex:))

# writeBytes(\_:dataLayout:bytesPerColumn:bytesPerRow:bytesPerImage:region:featureChannelInfo:imageIndex:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
func writeBytes(_ dataBytes: UnsafeRawPointer, dataLayout: MPSDataLayout, bytesPerColumn: Int, bytesPerRow: Int, bytesPerImage: Int, region: MTLRegion, featureChannelInfo: MPSImageReadWriteParams, imageIndex: Int)
```

# writeBytes:dataLayout:bytesPerColumn:bytesPerRow:bytesPerImage:region:featureChannelInfo:imageIndex: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) writeBytes:(const void *) dataBytes dataLayout:(MPSDataLayout) dataLayout bytesPerColumn:(NSUInteger) bytesPerColumn bytesPerRow:(NSUInteger) bytesPerRow bytesPerImage:(NSUInteger) bytesPerImage region:(MTLRegion) region featureChannelInfo:(MPSImageReadWriteParams) featureChannelInfo imageIndex:(NSUInteger) imageIndex;
```
