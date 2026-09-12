> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnnreshape/encodebatch(commandbuffer:sourceimages:destinationstates:destinationstateistemporary:reshapedwidth:reshapedheight:reshapedfeaturechannels:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsnnreshape/encodebatch(commandbuffer:sourceimages:destinationstates:destinationstateistemporary:reshapedwidth:reshapedheight:reshapedfeaturechannels:))

# encodeBatch(commandBuffer:sourceImages:destinationStates:destinationStateIsTemporary:reshapedWidth:reshapedHeight:reshapedFeatureChannels:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

## Declaration

```swift
func encodeBatch(commandBuffer: any MTLCommandBuffer, sourceImages: [MPSImage], destinationStates outStates: AutoreleasingUnsafeMutablePointer<NSArray?>, destinationStateIsTemporary isTemporary: Bool, reshapedWidth: Int, reshapedHeight: Int, reshapedFeatureChannels: Int) -> [MPSImage]
```

# encodeBatchToCommandBuffer:sourceImages:destinationStates:destinationStateIsTemporary:reshapedWidth:reshapedHeight:reshapedFeatureChannels: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

## Declaration

```objectivec
- (MPSImageBatch *) encodeBatchToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceImages:(MPSImageBatch *) sourceImages destinationStates:(MPSStateBatch **) outStates destinationStateIsTemporary:(BOOL) isTemporary reshapedWidth:(NSUInteger) reshapedWidth reshapedHeight:(NSUInteger) reshapedHeight reshapedFeatureChannels:(NSUInteger) reshapedFeatureChannels;
```
