> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsndarraydescriptor/allocate(randomnormalusing:mean:standarddeviation:shape:batchsize:)](https://developer.apple.com/documentation/accelerate/bnnsndarraydescriptor/allocate(randomnormalusing:mean:standarddeviation:shape:batchsize:))

# allocate(randomNormalUsing:mean:standardDeviation:shape:batchSize:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

## Declaration

```swift
static func allocate<Scalar>(randomNormalUsing: BNNS.RandomGenerator, mean: Scalar, standardDeviation: Scalar, shape: BNNS.Shape, batchSize: Int = 1) -> BNNSNDArrayDescriptor? where Scalar : BNNSScalar, Scalar : BinaryFloatingPoint
```
