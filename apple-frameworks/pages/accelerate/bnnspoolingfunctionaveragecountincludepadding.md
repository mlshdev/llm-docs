> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnspoolingfunctionaveragecountincludepadding](https://developer.apple.com/documentation/accelerate/bnnspoolingfunctionaveragecountincludepadding)

# BNNSPoolingFunctionAverageCountIncludePadding (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A function for pooling that computes the average of each element in the pooling kernel, including zero-padding.

## Declaration

```swift
var BNNSPoolingFunctionAverageCountIncludePadding: BNNSPoolingFunction { get }
```

## See Also

### Raw Values

- [init(\_:)](bnnspoolingfunction/init%28__%29.md)
- [init(rawValue:)](bnnspoolingfunction/init%28rawvalue_%29.md)
- [rawValue](bnnspoolingfunction/rawvalue.md)
- [BNNSPoolingFunctionUnMax](bnnspoolingfunctionunmax.md): A function for pooling that’s the partial inverse of max pooling and sets all nonmaximal values to zero.
- [BNNSPoolingFunctionAverageCountExcludePadding](bnnspoolingfunctionaveragecountexcludepadding.md): A function for pooling that computes the average of each element in the pooling kernel, excluding zero-padding.
- [BNNSPoolingFunctionL2Norm](bnnspoolingfunctionl2norm.md): A function for pooling that computes the square root of the sum of squares of each element in the pooling kernel.

# BNNSPoolingFunctionAverageCountIncludePadding (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A function for pooling that computes the average of each element in the pooling kernel, including zero-padding.

## Declaration

```objectivec
BNNSPoolingFunctionAverageCountIncludePadding
```

## See Also

### Raw Values

- [BNNSPoolingFunctionMax](bnnspoolingfunction/bnnspoolingfunctionmax.md): A function for pooling that computes the maximum of each element in the pooling kernel.
- [BNNSPoolingFunctionUnMax](bnnspoolingfunctionunmax.md): A function for pooling that’s the partial inverse of max pooling and sets all nonmaximal values to zero.
- [BNNSPoolingFunctionAverage](bnnspoolingfunction/bnnspoolingfunctionaverage.md): Deprecated. A function for pooling that computes the average of each element in the pooling kernel.
- [BNNSPoolingFunctionAverageCountExcludePadding](bnnspoolingfunctionaveragecountexcludepadding.md): A function for pooling that computes the average of each element in the pooling kernel, excluding zero-padding.
- [BNNSPoolingFunctionL2Norm](bnnspoolingfunctionl2norm.md): A function for pooling that computes the square root of the sum of squares of each element in the pooling kernel.
