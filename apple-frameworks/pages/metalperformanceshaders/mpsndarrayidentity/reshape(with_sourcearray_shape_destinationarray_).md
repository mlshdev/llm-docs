> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsndarrayidentity/reshape(with:sourcearray:shape:destinationarray:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsndarrayidentity/reshape(with:sourcearray:shape:destinationarray:))

# reshape(with:sourceArray:shape:destinationArray:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```swift
func reshape(with cmdBuf: (any MTLCommandBuffer)?, sourceArray: MPSNDArray, shape: [NSNumber], destinationArray: MPSNDArray?) -> MPSNDArray?
```

# reshapeWithCommandBuffer:sourceArray:shape:destinationArray: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```objectivec
- (MPSNDArray *) reshapeWithCommandBuffer:(id<MTLCommandBuffer>) cmdBuf sourceArray:(MPSNDArray *) sourceArray shape:(MPSShape *) shape destinationArray:(MPSNDArray *) destinationArray;
```
