> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsndarrayallocator/array(for:arraydescriptor:kernel:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsndarrayallocator/array(for:arraydescriptor:kernel:))

# array(for:arrayDescriptor:kernel:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
func array(for cmdBuf: any MTLCommandBuffer, arrayDescriptor descriptor: MPSNDArrayDescriptor, kernel: MPSKernel) -> MPSNDArray
```

# arrayForCommandBuffer:arrayDescriptor:kernel: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
- (MPSNDArray *) arrayForCommandBuffer:(id<MTLCommandBuffer>) cmdBuf arrayDescriptor:(MPSNDArrayDescriptor *) descriptor kernel:(MPSKernel *) kernel;
```
