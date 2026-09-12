> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/scatter(input:indices:output:axis:reductionfunction:filterparameters:)](https://developer.apple.com/documentation/accelerate/bnns/scatter(input:indices:output:axis:reductionfunction:filterparameters:))

# scatter(input:indices:output:axis:reductionFunction:filterParameters:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Scatters the elements of a tensor along a single axis.

> Use the BNNSGraph API instead.

## Declaration

```swift
static func scatter(input: BNNSNDArrayDescriptor, indices: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, axis: Int, reductionFunction: BNNS.ReductionFunction, filterParameters: BNNSFilterParameters? = nil) throws
```

## Parameters

- `input`: The input descriptor.
- `indices`: The indices descriptor.
- `output`: The output descriptor.
- `axis`: The axis along which the operation scatters elements.
- `reductionFunction`: The reduction operation that the function uses to reduce existing output value with scattered value.
- `filterParameters`: The runtime filter parameters.

## See Also

### Related Documentation

- [BNNSScatter(\_:\_:\_:\_:\_:\_:)](../bnnsscatter%28____________%29.md): Deprecated. Scatters the elements of a tensor along a single axis.

### Gather and scatter operations

- [Calculating the dominant colors in an image](../calculating-the-dominant-colors-in-an-image.md): Find the main colors in an image by implementing k-means clustering using the Accelerate framework.
- [gather(input:indices:output:axis:filterParameters:)](gather%28input_indices_output_axis_filterparameters_%29.md): Deprecated. Gathers the elements of a tensor along a single axis.
- [gatherND(input:indices:output:filterParameters:)](gathernd%28input_indices_output_filterparameters_%29.md): Deprecated. Gathers the slices of a tensor.
- [scatterND(input:indices:output:reductionFunction:filterParameters:)](scatternd%28input_indices_output_reductionfunction_filterparameters_%29.md): Deprecated. Scatters the slices of a tensor.
- [BNNSGather(\_:\_:\_:\_:\_:)](../bnnsgather%28__________%29.md): Deprecated. Gathers the elements of a tensor along a single axis.
- [BNNSGatherND(\_:\_:\_:\_:)](../bnnsgathernd%28________%29.md): Deprecated. Gathers the slices of a tensor.
- [BNNSScatter(\_:\_:\_:\_:\_:\_:)](../bnnsscatter%28____________%29.md): Deprecated. Scatters the elements of a tensor along a single axis.
- [BNNSScatterND(\_:\_:\_:\_:\_:)](../bnnsscatternd%28__________%29.md): Deprecated. Scatters the slices of a tensor.
