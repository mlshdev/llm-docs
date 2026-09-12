> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsndarray/arrayview(withdimensioncount:dimensionsizes:strides:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsndarray/arrayview(withdimensioncount:dimensionsizes:strides:))

# arrayView(withDimensionCount:dimensionSizes:strides:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```swift
func arrayView(withDimensionCount numberOfDimensions: Int, dimensionSizes: UnsafePointer<Int>, strides dimStrides: UnsafePointer<Int>) -> MPSNDArray?
```

# arrayViewWithDimensionCount:dimensionSizes:strides: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```objectivec
- (MPSNDArray *) arrayViewWithDimensionCount:(NSUInteger) numberOfDimensions dimensionSizes:(const NSUInteger *) dimensionSizes strides:(const NSUInteger *) dimStrides;
```
