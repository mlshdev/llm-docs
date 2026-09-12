> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnspoolingfunction](https://developer.apple.com/documentation/accelerate/bnnspoolingfunction)

# BNNSPoolingFunction (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe pooling functions.

## Declaration

```swift
struct BNNSPoolingFunction
```

## Topics

### Pooling Functions

- [max](bnnspoolingfunction/max.md): Deprecated. A function for pooling that computes the maximum of each element in the pooling kernel.
- [average](bnnspoolingfunction/average.md): Deprecated. A function for pooling that computes the average of each element in the pooling kernel.

### Raw Values

- [init(\_:)](bnnspoolingfunction/init%28__%29.md)
- [init(rawValue:)](bnnspoolingfunction/init%28rawvalue_%29.md)
- [rawValue](bnnspoolingfunction/rawvalue.md)
- [BNNSPoolingFunctionUnMax](bnnspoolingfunctionunmax.md): A function for pooling that’s the partial inverse of max pooling and sets all nonmaximal values to zero.
- [BNNSPoolingFunctionAverageCountIncludePadding](bnnspoolingfunctionaveragecountincludepadding.md): A function for pooling that computes the average of each element in the pooling kernel, including zero-padding.
- [BNNSPoolingFunctionAverageCountExcludePadding](bnnspoolingfunctionaveragecountexcludepadding.md): A function for pooling that computes the average of each element in the pooling kernel, excluding zero-padding.
- [BNNSPoolingFunctionL2Norm](bnnspoolingfunctionl2norm.md): A function for pooling that computes the square root of the sum of squares of each element in the pooling kernel.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Pooling layers

- [BNNSPoolingLayerParameters](bnnspoolinglayerparameters.md): Deprecated. A structure containing pooling layer parameters.
- [BNNSFilterCreatePoolingLayer(\_:\_:\_:\_:)](bnnsfiltercreatepoolinglayer%28________%29.md): Deprecated. Returns a pooling filter, initialized with input, output, layer, and filter parameters.
- [BNNS.PoolingLayer](bnns/poolinglayer.md): Deprecated. A layer object that wraps a pooling filter and manages its deinitialization.
- [BNNSPoolingFunctionAverage](bnnspoolingfunctionaverage.md): Deprecated.
- [BNNSPoolingFunctionMax](bnnspoolingfunctionmax.md): Deprecated.
- [BNNSLayerParametersPooling](bnnslayerparameterspooling.md): Deprecated. A structure that contains the parameters of a pooling layer.
- [BNNSFilterCreateLayerPooling(\_:\_:)](bnnsfiltercreatelayerpooling%28____%29.md): Deprecated. Returns a new pooling layer.
- [BNNSPoolingFilterApplyBatch(\_:\_:\_:\_:\_:\_:\_:\_:)](bnnspoolingfilterapplybatch%28________________%29.md): Deprecated. Applies a pooling filter to a set of input objects, writing the result to a set of output objects.
- [BNNSPoolingFilterApplyBackwardBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnspoolingfilterapplybackwardbatch%28__________________________%29.md): Deprecated. Applies a pooling filter backward to generate gradients.
- [BNNSPoolingFilterApplyBatchEx(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnspoolingfilterapplybatchex%28__________________%29.md): Deprecated. Applies a pooling filter to a set of input objects with support for multiple data types for indices.
- [BNNSPoolingFilterApplyBackwardBatchEx(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnspoolingfilterapplybackwardbatchex%28____________________________%29.md): Deprecated. Applies a pooling filter backward to generate gradients with support for multiple data types for indices.

# BNNSPoolingFunction (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe pooling functions.

## Declaration

```objectivec
typedef enum { ... } BNNSPoolingFunction;
```

## Topics

### Raw Values

- [BNNSPoolingFunctionMax](bnnspoolingfunction/bnnspoolingfunctionmax.md): A function for pooling that computes the maximum of each element in the pooling kernel.
- [BNNSPoolingFunctionUnMax](bnnspoolingfunctionunmax.md): A function for pooling that’s the partial inverse of max pooling and sets all nonmaximal values to zero.
- [BNNSPoolingFunctionAverage](bnnspoolingfunction/bnnspoolingfunctionaverage.md): Deprecated. A function for pooling that computes the average of each element in the pooling kernel.
- [BNNSPoolingFunctionAverageCountIncludePadding](bnnspoolingfunctionaveragecountincludepadding.md): A function for pooling that computes the average of each element in the pooling kernel, including zero-padding.
- [BNNSPoolingFunctionAverageCountExcludePadding](bnnspoolingfunctionaveragecountexcludepadding.md): A function for pooling that computes the average of each element in the pooling kernel, excluding zero-padding.
- [BNNSPoolingFunctionL2Norm](bnnspoolingfunctionl2norm.md): A function for pooling that computes the square root of the sum of squares of each element in the pooling kernel.

## See Also

### Pooling layers

- [BNNSPoolingLayerParameters](bnnspoolinglayerparameters.md): Deprecated. A structure containing pooling layer parameters.
- [BNNSFilterCreatePoolingLayer](bnnsfiltercreatepoolinglayer%28________%29.md): Deprecated. Returns a pooling filter, initialized with input, output, layer, and filter parameters.
- [BNNSLayerParametersPooling](bnnslayerparameterspooling.md): Deprecated. A structure that contains the parameters of a pooling layer.
- [BNNSFilterCreateLayerPooling](bnnsfiltercreatelayerpooling%28____%29.md): Deprecated. Returns a new pooling layer.
- [BNNSPoolingFilterApplyBatch](bnnspoolingfilterapplybatch%28________________%29.md): Deprecated. Applies a pooling filter to a set of input objects, writing the result to a set of output objects.
- [BNNSPoolingFilterApplyBackwardBatch](bnnspoolingfilterapplybackwardbatch%28__________________________%29.md): Deprecated. Applies a pooling filter backward to generate gradients.
- [BNNSPoolingFilterApplyBatchEx](bnnspoolingfilterapplybatchex%28__________________%29.md): Deprecated. Applies a pooling filter to a set of input objects with support for multiple data types for indices.
- [BNNSPoolingFilterApplyBackwardBatchEx](bnnspoolingfilterapplybackwardbatchex%28____________________________%29.md): Deprecated. Applies a pooling filter backward to generate gradients with support for multiple data types for indices.
