> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpsndarrayallocator/array(for:arraydescriptor:kernel:)

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
