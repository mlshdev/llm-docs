> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsndarray/arrayview(with:descriptor:aliasing:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsndarray/arrayview(with:descriptor:aliasing:))

# arrayView(with:descriptor:aliasing:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
func arrayView(with cmdBuf: any MTLCommandBuffer, descriptor: MPSNDArrayDescriptor, aliasing: MPSAliasingStrategy) -> MPSNDArray?
```

# arrayViewWithCommandBuffer:descriptor:aliasing: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (MPSNDArray *) arrayViewWithCommandBuffer:(id<MTLCommandBuffer>) cmdBuf descriptor:(MPSNDArrayDescriptor *) descriptor aliasing:(MPSAliasingStrategy) aliasing;
```
