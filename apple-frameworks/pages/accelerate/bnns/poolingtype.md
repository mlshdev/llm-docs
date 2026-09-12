> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/poolingtype](https://developer.apple.com/documentation/accelerate/bnns/poolingtype)

# BNNS.PoolingType

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Constants that describe pooling types.

> Use the BNNSGraph API instead.

## Declaration

```swift
enum PoolingType
```

## Topics

### Pooling Types

- [BNNS.PoolingType.average(countIncludesPadding:)](poolingtype/average%28countincludespadding_%29.md): Deprecated. A function for pooling that computes the average of each element in the pooling kernel.
- [BNNS.PoolingType.l2Norm](poolingtype/l2norm.md): Deprecated. A function for pooling that computes the square root of the sum of squares of each element in the pooling kernel.
- [BNNS.PoolingType.max(indices:xDilationStride:yDilationStride:)](poolingtype/max%28indices_xdilationstride_ydilationstride_%29.md): Deprecated. A function for pooling that computes the maximum of each element in the pooling kernel.
- [BNNS.PoolingType.unMax(indices:xDilationStride:yDilationStride:)](poolingtype/unmax%28indices_xdilationstride_ydilationstride_%29.md): Deprecated. A function for pooling that’s the partial inverse of max pooling and sets all nonmaximal values to zero.

### Instance Properties

- [bnnsPoolingFunction](poolingtype/bnnspoolingfunction.md): Deprecated. The underlying pooling function structure.

### Enumeration Cases

- [BNNS.PoolingType.maxEx(indicesDescriptor:xDilationStride:yDilationStride:)](poolingtype/maxex%28indicesdescriptor_xdilationstride_ydilationstride_%29.md): Deprecated.
- [BNNS.PoolingType.unMaxEx(indicesDescriptor:xDilationStride:yDilationStride:)](poolingtype/unmaxex%28indicesdescriptor_xdilationstride_ydilationstride_%29.md): Deprecated.
