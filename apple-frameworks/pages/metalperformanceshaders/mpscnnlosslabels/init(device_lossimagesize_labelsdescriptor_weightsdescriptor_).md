> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpscnnlosslabels/init(device:lossimagesize:labelsdescriptor:weightsdescriptor:)

# init(device:lossImageSize:labelsDescriptor:weightsDescriptor:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```swift
init(device: any MTLDevice, lossImageSize: MTLSize, labelsDescriptor: MPSCNNLossDataDescriptor, weightsDescriptor: MPSCNNLossDataDescriptor?)
```

# initWithDevice:lossImageSize:labelsDescriptor:weightsDescriptor: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device lossImageSize:(MTLSize) lossImageSize labelsDescriptor:(MPSCNNLossDataDescriptor *) labelsDescriptor weightsDescriptor:(MPSCNNLossDataDescriptor *) weightsDescriptor;
```
