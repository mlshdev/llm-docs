> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgather(_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsgather(_:_:_:_:_:))

# BNNSGather(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 9.0+ (deprecated in 11.0)

Gathers the elements of a tensor along a single axis.

> Use BNNSGraph\* APIs

## Declaration

```swift
func BNNSGather(_ axis: Int, _ input: UnsafePointer<BNNSNDArrayDescriptor>, _ indices: UnsafePointer<BNNSNDArrayDescriptor>, _ output: UnsafeMutablePointer<BNNSNDArrayDescriptor>, _ filter_params: UnsafePointer<BNNSFilterParameters>?) -> Int32
```

## Parameters

- `axis`: The axis along which the operation gathers the indices.
- `input`: A pointer to the input descriptor.
- `indices`: A pointer to the indices descriptor.
- `output`: A pointer to the output descriptor.
- `filter_params`: The filter runtime parameters.

<a id="Discussion"></a>

## Discussion

Use [BNNSGather(\_:\_:\_:\_:\_:)](bnnsgather%28__________%29.md) to gather elements — that you specify by index — into an output tensor.

In the simplest case, use [BNNSGather(\_:\_:\_:\_:\_:)](bnnsgather%28__________%29.md) to gather elements from a 1D vector with indices defined as a 1D vector. The following code gathers the four elements at indices `[1, 3, 7, 5]`:

```swift
let values: [Float] = [10, 20, 30, 40, 50, 60, 70, 80]
var inputDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: values,
    shape: .vector(values.count))

let indices: [Int32] = [1, 3, 7, 5]
var indicesDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: indices,
    shape: .vector(indices.count))

var outputDescriptor = BNNSNDArrayDescriptor.allocateUninitialized(
    scalarType: Float.self,
    shape: indicesDescriptor.shape)

let error = BNNSGather(0,
                       &inputDescriptor,
                       &indicesDescriptor,
                       &outputDescriptor,
                       nil)

```

On return, `outputDescriptor` contains the values `[20.0, 40.0, 80.0, 60.0]`.

[BNNSGather(\_:\_:\_:\_:\_:)](bnnsgather%28__________%29.md) supports gathering from a tensor with two or more dimensions using indices defined as a 1D vector. In this case, the indices correspond to the values along an entire axis and the input and output shapes must match.

The following code generates a 3 x 4 matrix from the rows of a 3 x 3 matrix:

```swift
let values: [Float] = [10, 20, 30,
                       40, 50, 60,
                       70, 80, 90]
var inputDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: values,
    shape: .matrixRowMajor(3, 3))

let indices: [Int32] = [0, 1, // Elements `0, 1` from row `0` = `10, 20`
                        2, 0, // Elements `2, 0` from row `1` = `60, 40`
                        1, 1] // Elements `1, 1` from row `2` = `80, 80`
var indicesDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: indices,
    shape: .matrixRowMajor(2, 3))

var outputDescriptor = BNNSNDArrayDescriptor.allocateUninitialized(
    scalarType: Float.self,
    shape: indicesDescriptor.shape)

let error = BNNSGather(1, // axis
                       &inputDescriptor,
                       &indicesDescriptor,
                       &outputDescriptor,
                       nil)
```

On return, `outputDescriptor` contains the following values:

```swift
 [ 10.0, 20.0,
   60.0, 40.0,
   80.0, 80.0 ]
```

The function returns an error if any of the indices are out of range.

## See Also

### Gather and scatter operations

- [Calculating the dominant colors in an image](calculating-the-dominant-colors-in-an-image.md): Find the main colors in an image by implementing k-means clustering using the Accelerate framework.
- [gather(input:indices:output:axis:filterParameters:)](bnns/gather%28input_indices_output_axis_filterparameters_%29.md): Deprecated. Gathers the elements of a tensor along a single axis.
- [gatherND(input:indices:output:filterParameters:)](bnns/gathernd%28input_indices_output_filterparameters_%29.md): Deprecated. Gathers the slices of a tensor.
- [scatter(input:indices:output:axis:reductionFunction:filterParameters:)](bnns/scatter%28input_indices_output_axis_reductionfunction_filterparameters_%29.md): Deprecated. Scatters the elements of a tensor along a single axis.
- [scatterND(input:indices:output:reductionFunction:filterParameters:)](bnns/scatternd%28input_indices_output_reductionfunction_filterparameters_%29.md): Deprecated. Scatters the slices of a tensor.
- [BNNSGatherND(\_:\_:\_:\_:)](bnnsgathernd%28________%29.md): Deprecated. Gathers the slices of a tensor.
- [BNNSScatter(\_:\_:\_:\_:\_:\_:)](bnnsscatter%28____________%29.md): Deprecated. Scatters the elements of a tensor along a single axis.
- [BNNSScatterND(\_:\_:\_:\_:\_:)](bnnsscatternd%28__________%29.md): Deprecated. Scatters the slices of a tensor.

# BNNSGather (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 9.0+ (deprecated in 11.0)

Gathers the elements of a tensor along a single axis.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
int BNNSGather(size_t axis, const BNNSNDArrayDescriptor *input, const BNNSNDArrayDescriptor *indices, BNNSNDArrayDescriptor *output, const BNNSFilterParameters *filter_params);
```

## Parameters

- `axis`: The axis along which the operation gathers the indices.
- `input`: A pointer to the input descriptor.
- `indices`: A pointer to the indices descriptor.
- `output`: A pointer to the output descriptor.
- `filter_params`: The filter runtime parameters.

<a id="Discussion"></a>

## Discussion

Use [BNNSGather](bnnsgather%28__________%29.md) to gather elements — that you specify by index — into an output tensor.

In the simplest case, use [BNNSGather](bnnsgather%28__________%29.md) to gather elements from a 1D vector with indices defined as a 1D vector. The following code gathers the four elements at indices `[1, 3, 7, 5]`:

```swift
let values: [Float] = [10, 20, 30, 40, 50, 60, 70, 80]
var inputDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: values,
    shape: .vector(values.count))

let indices: [Int32] = [1, 3, 7, 5]
var indicesDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: indices,
    shape: .vector(indices.count))

var outputDescriptor = BNNSNDArrayDescriptor.allocateUninitialized(
    scalarType: Float.self,
    shape: indicesDescriptor.shape)

let error = BNNSGather(0,
                       &inputDescriptor,
                       &indicesDescriptor,
                       &outputDescriptor,
                       nil)

```

On return, `outputDescriptor` contains the values `[20.0, 40.0, 80.0, 60.0]`.

[BNNSGather](bnnsgather%28__________%29.md) supports gathering from a tensor with two or more dimensions using indices defined as a 1D vector. In this case, the indices correspond to the values along an entire axis and the input and output shapes must match.

The following code generates a 3 x 4 matrix from the rows of a 3 x 3 matrix:

```swift
let values: [Float] = [10, 20, 30,
                       40, 50, 60,
                       70, 80, 90]
var inputDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: values,
    shape: .matrixRowMajor(3, 3))

let indices: [Int32] = [0, 1, // Elements `0, 1` from row `0` = `10, 20`
                        2, 0, // Elements `2, 0` from row `1` = `60, 40`
                        1, 1] // Elements `1, 1` from row `2` = `80, 80`
var indicesDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: indices,
    shape: .matrixRowMajor(2, 3))

var outputDescriptor = BNNSNDArrayDescriptor.allocateUninitialized(
    scalarType: Float.self,
    shape: indicesDescriptor.shape)

let error = BNNSGather(1, // axis
                       &inputDescriptor,
                       &indicesDescriptor,
                       &outputDescriptor,
                       nil)
```

On return, `outputDescriptor` contains the following values:

```swift
 [ 10.0, 20.0,
   60.0, 40.0,
   80.0, 80.0 ]
```

The function returns an error if any of the indices are out of range.

## See Also

### Gather and scatter operations

- [BNNSGatherND](bnnsgathernd%28________%29.md): Deprecated. Gathers the slices of a tensor.
- [BNNSScatter](bnnsscatter%28____________%29.md): Deprecated. Scatters the elements of a tensor along a single axis.
- [BNNSScatterND](bnnsscatternd%28__________%29.md): Deprecated. Scatters the slices of a tensor.
