> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsstate/destinationimagedescriptor(forsourceimages:sourcestates:for:suggesteddescriptor:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsstate/destinationimagedescriptor(forsourceimages:sourcestates:for:suggesteddescriptor:))

# destinationImageDescriptor(forSourceImages:sourceStates:for:suggestedDescriptor:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
func destinationImageDescriptor(forSourceImages sourceImages: [MPSImage], sourceStates: [MPSState]?, for kernel: MPSKernel, suggestedDescriptor inDescriptor: MPSImageDescriptor) -> MPSImageDescriptor
```

# destinationImageDescriptorForSourceImages:sourceStates:forKernel:suggestedDescriptor: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
- (MPSImageDescriptor *) destinationImageDescriptorForSourceImages:(NSArray<MPSImage *> *) sourceImages sourceStates:(NSArray<MPSState *> *) sourceStates forKernel:(MPSKernel *) kernel suggestedDescriptor:(MPSImageDescriptor *) inDescriptor;
```
