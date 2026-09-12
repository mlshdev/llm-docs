> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/poolingtype/unmax(indices:xdilationstride:ydilationstride:)](https://developer.apple.com/documentation/accelerate/bnns/poolingtype/unmax(indices:xdilationstride:ydilationstride:))

# BNNS.PoolingType.unMax(indices:xDilationStride:yDilationStride:)

**Framework:** Accelerate  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

A function for pooling that’s the partial inverse of max pooling and sets all nonmaximal values to zero.

> Use the BNNSGraph API instead.

## Declaration

```swift
case unMax(indices: UnsafeMutableBufferPointer<Int>? = nil, xDilationStride: Int = 0, yDilationStride: Int = 0)
```

## See Also

### Pooling Types

- [BNNS.PoolingType.average(countIncludesPadding:)](average%28countincludespadding_%29.md): Deprecated. A function for pooling that computes the average of each element in the pooling kernel.
- [BNNS.PoolingType.l2Norm](l2norm.md): Deprecated. A function for pooling that computes the square root of the sum of squares of each element in the pooling kernel.
- [BNNS.PoolingType.max(indices:xDilationStride:yDilationStride:)](max%28indices_xdilationstride_ydilationstride_%29.md): Deprecated. A function for pooling that computes the maximum of each element in the pooling kernel.
