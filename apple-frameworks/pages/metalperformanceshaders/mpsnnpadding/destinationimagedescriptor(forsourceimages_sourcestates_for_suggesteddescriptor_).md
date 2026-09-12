> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnnpadding/destinationimagedescriptor(forsourceimages:sourcestates:for:suggesteddescriptor:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsnnpadding/destinationimagedescriptor(forsourceimages:sourcestates:for:suggesteddescriptor:))

# destinationImageDescriptor(forSourceImages:sourceStates:for:suggestedDescriptor:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
optional func destinationImageDescriptor(forSourceImages sourceImages: [MPSImage], sourceStates: [MPSState]?, for kernel: MPSKernel, suggestedDescriptor inDescriptor: MPSImageDescriptor) -> MPSImageDescriptor
```

## See Also

### Instance Methods

- [MPSImage](../mpsimage.md): A texture that may have more than four channels for use in convolutional neural networks.
- [MPSState](../mpsstate.md): An opaque data container for large storage in MPS CNN filters.
- [MPSKernel](../mpskernel.md): A standard interface for Metal Performance Shaders kernels.
- [MPSImageDescriptor](../mpsimagedescriptor.md): A description of the attributes used to create an [MPSImage](../mpsimage.md).
- [paddingMethod()](paddingmethod%28%29.md)
- [label()](label%28%29.md)
- [inverse()](inverse%28%29.md)

# destinationImageDescriptorForSourceImages:sourceStates:forKernel:suggestedDescriptor: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
- (MPSImageDescriptor *) destinationImageDescriptorForSourceImages:(NSArray<MPSImage *> *) sourceImages sourceStates:(NSArray<MPSState *> *) sourceStates forKernel:(MPSKernel *) kernel suggestedDescriptor:(MPSImageDescriptor *) inDescriptor;
```

## See Also

### Instance Methods

- [MPSImage](../mpsimage.md): A texture that may have more than four channels for use in convolutional neural networks.
- [MPSState](../mpsstate.md): An opaque data container for large storage in MPS CNN filters.
- [MPSKernel](../mpskernel.md): A standard interface for Metal Performance Shaders kernels.
- [MPSImageDescriptor](../mpsimagedescriptor.md): A description of the attributes used to create an [MPSImage](../mpsimage.md).
- [paddingMethod](paddingmethod%28%29.md)
- [label](label%28%29.md)
- [inverse](inverse%28%29.md)
