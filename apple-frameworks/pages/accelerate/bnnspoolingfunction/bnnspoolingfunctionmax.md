> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnnspoolingfunction/bnnspoolingfunctionmax

# BNNSPoolingFunctionMax

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A function for pooling that computes the maximum of each element in the pooling kernel.

## Declaration

```objectivec
BNNSPoolingFunctionMax
```

## See Also

### Raw Values

- [BNNSPoolingFunctionUnMax](../bnnspoolingfunctionunmax.md): A function for pooling that’s the partial inverse of max pooling and sets all nonmaximal values to zero.
- [BNNSPoolingFunctionAverage](bnnspoolingfunctionaverage.md): Deprecated. A function for pooling that computes the average of each element in the pooling kernel.
- [BNNSPoolingFunctionAverageCountIncludePadding](../bnnspoolingfunctionaveragecountincludepadding.md): A function for pooling that computes the average of each element in the pooling kernel, including zero-padding.
- [BNNSPoolingFunctionAverageCountExcludePadding](../bnnspoolingfunctionaveragecountexcludepadding.md): A function for pooling that computes the average of each element in the pooling kernel, excluding zero-padding.
- [BNNSPoolingFunctionL2Norm](../bnnspoolingfunctionl2norm.md): A function for pooling that computes the square root of the sum of squares of each element in the pooling kernel.
