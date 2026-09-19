> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpsnnreshape/encode(commandbuffer:sourceimage:destinationstate:destinationstateistemporary:reshapedwidth:reshapedheight:reshapedfeaturechannels:)

# encode(commandBuffer:sourceImage:destinationState:destinationStateIsTemporary:reshapedWidth:reshapedHeight:reshapedFeatureChannels:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

## Declaration

```swift
func encode(commandBuffer: any MTLCommandBuffer, sourceImage: MPSImage, destinationState outState: AutoreleasingUnsafeMutablePointer<MPSState?>, destinationStateIsTemporary isTemporary: Bool, reshapedWidth: Int, reshapedHeight: Int, reshapedFeatureChannels: Int) -> MPSImage
```

# encodeToCommandBuffer:sourceImage:destinationState:destinationStateIsTemporary:reshapedWidth:reshapedHeight:reshapedFeatureChannels: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

## Declaration

```objectivec
- (MPSImage *) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceImage:(MPSImage *) sourceImage destinationState:(MPSState **) outState destinationStateIsTemporary:(BOOL) isTemporary reshapedWidth:(NSUInteger) reshapedWidth reshapedHeight:(NSUInteger) reshapedHeight reshapedFeatureChannels:(NSUInteger) reshapedFeatureChannels;
```
