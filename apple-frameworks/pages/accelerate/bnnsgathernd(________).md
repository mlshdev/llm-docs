> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgathernd(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsgathernd(_:_:_:_:))

# BNNSGatherND(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 9.0+ (deprecated in 11.0)

Gathers the slices of a tensor.

> Use BNNSGraph\* APIs

## Declaration

```swift
func BNNSGatherND(_ input: UnsafePointer<BNNSNDArrayDescriptor>, _ indices: UnsafePointer<BNNSNDArrayDescriptor>, _ output: UnsafeMutablePointer<BNNSNDArrayDescriptor>, _ filter_params: UnsafePointer<BNNSFilterParameters>?) -> Int32
```

## Parameters

- `input`: A pointer to the input descriptor.
- `indices`: A pointer to the indices descriptor.
- `output`: A pointer to the output descriptor.
- `filter_params`: The filter runtime parameters.

<a id="Discussion"></a>

## Discussion

Use [BNNSGatherND(\_:\_:\_:\_:)](bnnsgathernd%28________%29.md) to gather slices — that you specify by index — into an output tensor.

The function interprets the indices array as a `k - 1` dimensional set of lookup vectors, therefore, the indices tensor must have `(k - 1) + 1` or `k` dimensions.

If the lookup vectors don’t define a full set of indices, the function treats the undefined indices as a slice.

For example, given the following input values:

```swift
let values: [Float] = [10, 11,
                       12, 13,
                       
                       20, 21,
                       22, 23,
                       
                       30, 31,
                       32, 33]

var inputDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: values,
    shape: .tensor3DFirstMajor(3, 2, 2))
```

The following code shows that a scalar index gathers a 2D slice:

```swift
let indices: [Int32] = [1] // Elements `20, 21, 22, 23` from slice `1`
var indicesDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: indices,
    shape: .vector(1))

var outputDescriptor = BNNSNDArrayDescriptor.allocateUninitialized(
    scalarType: Float.self,
    shape: .matrixFirstMajor(2, 2))

let error = BNNSGatherND(&inputDescriptor,
                         &indicesDescriptor,
                         &outputDescriptor,
                         nil)
                         
// `outputDescriptor` contains `[20.0, 21.0, 22.0, 23.0]`   
```

The following code shows that a 2D index gathers a 1D slice:

```swift
let indices: [Int32] = [1, 0] // Elements `20, 21` from row `0` of slice `1`
var indicesDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: indices,
    shape: .matrixFirstMajor(1, 2))

var outputDescriptor = BNNSNDArrayDescriptor.allocateUninitialized(
    scalarType: Float.self,
    shape: .matrixFirstMajor(1, 2))

let error = BNNSGatherND(&inputDescriptor,
                         &indicesDescriptor,
                         &outputDescriptor,
                         nil)

// `outputDescriptor` contains `[20.0, 21.0]`
```

The following code shows that a 3D index gathers a single element:

```swift
let indices: [Int32] = [1, 1, 1] // Element `23` (index `1`) from row `1` of slice `1`
var indicesDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: indices,
    shape: .tensor3DFirstMajor(1, 1, 3))

var outputDescriptor = BNNSNDArrayDescriptor.allocateUninitialized(
    scalarType: Float.self,
    shape: .matrixFirstMajor(1, 1))

let error = BNNSGatherND(&inputDescriptor,
                         &indicesDescriptor,
                         &outputDescriptor,
                         nil)
                         
// `outputDescriptor` contains `[23.0]`  
```

## See Also

### Gather and scatter operations

- [Calculating the dominant colors in an image](calculating-the-dominant-colors-in-an-image.md): Find the main colors in an image by implementing k-means clustering using the Accelerate framework.
- [gather(input:indices:output:axis:filterParameters:)](bnns/gather%28input_indices_output_axis_filterparameters_%29.md): Deprecated. Gathers the elements of a tensor along a single axis.
- [gatherND(input:indices:output:filterParameters:)](bnns/gathernd%28input_indices_output_filterparameters_%29.md): Deprecated. Gathers the slices of a tensor.
- [scatter(input:indices:output:axis:reductionFunction:filterParameters:)](bnns/scatter%28input_indices_output_axis_reductionfunction_filterparameters_%29.md): Deprecated. Scatters the elements of a tensor along a single axis.
- [scatterND(input:indices:output:reductionFunction:filterParameters:)](bnns/scatternd%28input_indices_output_reductionfunction_filterparameters_%29.md): Deprecated. Scatters the slices of a tensor.
- [BNNSGather(\_:\_:\_:\_:\_:)](bnnsgather%28__________%29.md): Deprecated. Gathers the elements of a tensor along a single axis.
- [BNNSScatter(\_:\_:\_:\_:\_:\_:)](bnnsscatter%28____________%29.md): Deprecated. Scatters the elements of a tensor along a single axis.
- [BNNSScatterND(\_:\_:\_:\_:\_:)](bnnsscatternd%28__________%29.md): Deprecated. Scatters the slices of a tensor.

# BNNSGatherND (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 9.0+ (deprecated in 11.0)

Gathers the slices of a tensor.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
int BNNSGatherND(const BNNSNDArrayDescriptor *input, const BNNSNDArrayDescriptor *indices, BNNSNDArrayDescriptor *output, const BNNSFilterParameters *filter_params);
```

## Parameters

- `input`: A pointer to the input descriptor.
- `indices`: A pointer to the indices descriptor.
- `output`: A pointer to the output descriptor.
- `filter_params`: The filter runtime parameters.

<a id="Discussion"></a>

## Discussion

Use [BNNSGatherND](bnnsgathernd%28________%29.md) to gather slices — that you specify by index — into an output tensor.

The function interprets the indices array as a `k - 1` dimensional set of lookup vectors, therefore, the indices tensor must have `(k - 1) + 1` or `k` dimensions.

If the lookup vectors don’t define a full set of indices, the function treats the undefined indices as a slice.

For example, given the following input values:

```swift
let values: [Float] = [10, 11,
                       12, 13,
                       
                       20, 21,
                       22, 23,
                       
                       30, 31,
                       32, 33]

var inputDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: values,
    shape: .tensor3DFirstMajor(3, 2, 2))
```

The following code shows that a scalar index gathers a 2D slice:

```swift
let indices: [Int32] = [1] // Elements `20, 21, 22, 23` from slice `1`
var indicesDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: indices,
    shape: .vector(1))

var outputDescriptor = BNNSNDArrayDescriptor.allocateUninitialized(
    scalarType: Float.self,
    shape: .matrixFirstMajor(2, 2))

let error = BNNSGatherND(&inputDescriptor,
                         &indicesDescriptor,
                         &outputDescriptor,
                         nil)
                         
// `outputDescriptor` contains `[20.0, 21.0, 22.0, 23.0]`   
```

The following code shows that a 2D index gathers a 1D slice:

```swift
let indices: [Int32] = [1, 0] // Elements `20, 21` from row `0` of slice `1`
var indicesDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: indices,
    shape: .matrixFirstMajor(1, 2))

var outputDescriptor = BNNSNDArrayDescriptor.allocateUninitialized(
    scalarType: Float.self,
    shape: .matrixFirstMajor(1, 2))

let error = BNNSGatherND(&inputDescriptor,
                         &indicesDescriptor,
                         &outputDescriptor,
                         nil)

// `outputDescriptor` contains `[20.0, 21.0]`
```

The following code shows that a 3D index gathers a single element:

```swift
let indices: [Int32] = [1, 1, 1] // Element `23` (index `1`) from row `1` of slice `1`
var indicesDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: indices,
    shape: .tensor3DFirstMajor(1, 1, 3))

var outputDescriptor = BNNSNDArrayDescriptor.allocateUninitialized(
    scalarType: Float.self,
    shape: .matrixFirstMajor(1, 1))

let error = BNNSGatherND(&inputDescriptor,
                         &indicesDescriptor,
                         &outputDescriptor,
                         nil)
                         
// `outputDescriptor` contains `[23.0]`  
```

## See Also

### Gather and scatter operations

- [BNNSGather](bnnsgather%28__________%29.md): Deprecated. Gathers the elements of a tensor along a single axis.
- [BNNSScatter](bnnsscatter%28____________%29.md): Deprecated. Scatters the elements of a tensor along a single axis.
- [BNNSScatterND](bnnsscatternd%28__________%29.md): Deprecated. Scatters the slices of a tensor.
