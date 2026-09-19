> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpsndarrayidentity/reshape(with:sourcearray:dimensioncount:dimensionsizes:destinationarray:)

# reshape(with:sourceArray:dimensionCount:dimensionSizes:destinationArray:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```swift
func reshape(with cmdBuf: (any MTLCommandBuffer)?, sourceArray: MPSNDArray, dimensionCount numberOfDimensions: Int, dimensionSizes: UnsafeMutablePointer<Int>, destinationArray: MPSNDArray?) -> MPSNDArray?
```

# reshapeWithCommandBuffer:sourceArray:dimensionCount:dimensionSizes:destinationArray: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```objectivec
- (MPSNDArray *) reshapeWithCommandBuffer:(id<MTLCommandBuffer>) cmdBuf sourceArray:(MPSNDArray *) sourceArray dimensionCount:(NSUInteger) numberOfDimensions dimensionSizes:(NSUInteger *) dimensionSizes destinationArray:(MPSNDArray *) destinationArray;
```
