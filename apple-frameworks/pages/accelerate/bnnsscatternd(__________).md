> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsscatternd(_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsscatternd(_:_:_:_:_:))

# BNNSScatterND(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 9.0+ (deprecated in 11.0)

Scatters the slices of a tensor.

> Use BNNSGraph\* APIs

## Declaration

```swift
func BNNSScatterND(_ op: BNNSReduceFunction, _ input: UnsafePointer<BNNSNDArrayDescriptor>, _ indices: UnsafePointer<BNNSNDArrayDescriptor>, _ output: UnsafeMutablePointer<BNNSNDArrayDescriptor>, _ filter_params: UnsafePointer<BNNSFilterParameters>?) -> Int32
```

## Parameters

- `op`: The reduction operation that defines how the function combines scattered values with existing output values.
- `input`: A pointer to the input descriptor.
- `indices`: A pointer to the indices descriptor.
- `output`: A pointer to the output descriptor.
- `filter_params`: The filter runtime parameters.

<a id="Discussion"></a>

## Discussion

Use [BNNSScatterND(\_:\_:\_:\_:\_:)](bnnsscatternd%28__________%29.md) to scatter slices — that you specify by index — into an output tensor.

The function interprets the indices array as a `k - 1` dimensional set of lookup vectors, therefore, the indices tensor must have `(k - 1) + 1` or `k` dimensions.

If the lookup vectors don’t define a full set of indices, the function treats the undefined indices as a slice.

[BNNSScatterND(\_:\_:\_:\_:\_:)](bnnsscatternd%28__________%29.md) is the inverse of [BNNSGatherND(\_:\_:\_:\_:)](bnnsgathernd%28________%29.md). The code samples below are based on the gathered values from the [BNNSGatherND(\_:\_:\_:\_:)](bnnsgathernd%28________%29.md) page.

The following code shows that a scalar index scatters a 2D slice:

```swift
let indices: [Int32] = [1] 
var indicesDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: indices,
    shape: .vector(1))
    
let gathereredValues: [Float] = [20.0, 21.0, 22.0, 23.0]
var gatheredDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: gathereredValues,
    shape: .matrixFirstMajor(2, 2))

var scatteredDescriptor = BNNSNDArrayDescriptor.allocate(
    repeating: Float(),
    shape: inputDescriptor.shape)

BNNSScatterND(BNNSReduceFunctionNone,
              &gatheredDescriptor,
              &indicesDescriptor,
              &scatteredDescriptor,
              nil)
```

On return, `scatteredDescriptor` contains the following values:

```swift
[ 0.0,  0.0,
  0.0,  0.0,

 20.0, 21.0,
 22.0, 23.0,

  0.0,  0.0,
  0.0,  0.0 ]
```

The following code shows that a 2D index scatters a 1D slice:

```swift
let indices: [Int32] = [1, 0] 
var indicesDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: indices,
    shape: .matrixFirstMajor(1, 2))
    
let gathereredValues: [Float] = [20.0, 21.0]
var gatheredDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: gathereredValues,
    shape: .matrixFirstMajor(1, 2))

var scatteredDescriptor = BNNSNDArrayDescriptor.allocate(
    repeating: Float(),
    shape: inputDescriptor.shape)

BNNSScatterND(BNNSReduceFunctionNone,
              &gatheredDescriptor,
              &indicesDescriptor,
              &scatteredDescriptor,
              nil)  
```

On return, `scatteredDescriptor` contains the following values:

```swift
[ 0.0,  0.0,
  0.0,  0.0,

 20.0, 21.0,
  0.0,  0.0,

  0.0,  0.0,
  0.0,  0.0 ]
```

The following code shows that a 3D index scatters a single element:

```swift
let indices: [Int32] = [
    1, 1, 1 
]
var indicesDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: indices,
    shape: .tensor3DFirstMajor(1, 1, 3))

let gathereredValues: [Float] = [23]
var gatheredDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: gathereredValues,
    shape: .matrixFirstMajor(1, 1))

var scatteredDescriptor = BNNSNDArrayDescriptor.allocate(
    repeating: Float(),
    shape: inputDescriptor.shape)

BNNSScatterND(BNNSReduceFunctionNone,
              &gatheredDescriptor,
              &indicesDescriptor,
              &scatteredDescriptor,
              nil)
```

On return, `scatteredDescriptor` contains the following values:

```swift
[ 0.0,  0.0,
  0.0,  0.0,

  0.0,  0.0,
  0.0, 23.0,

  0.0,  0.0,
  0.0,  0.0 ]
```

If multiple input values update the same output element, the function doesn’t define the order of update operations.

In particular, if you define the reduction as `BNNSReduceFunctionNone` the function doesn’t guarantee any particular value in the result.

## See Also

### Gather and scatter operations

- [Calculating the dominant colors in an image](calculating-the-dominant-colors-in-an-image.md): Find the main colors in an image by implementing k-means clustering using the Accelerate framework.
- [gather(input:indices:output:axis:filterParameters:)](bnns/gather%28input_indices_output_axis_filterparameters_%29.md): Deprecated. Gathers the elements of a tensor along a single axis.
- [gatherND(input:indices:output:filterParameters:)](bnns/gathernd%28input_indices_output_filterparameters_%29.md): Deprecated. Gathers the slices of a tensor.
- [scatter(input:indices:output:axis:reductionFunction:filterParameters:)](bnns/scatter%28input_indices_output_axis_reductionfunction_filterparameters_%29.md): Deprecated. Scatters the elements of a tensor along a single axis.
- [scatterND(input:indices:output:reductionFunction:filterParameters:)](bnns/scatternd%28input_indices_output_reductionfunction_filterparameters_%29.md): Deprecated. Scatters the slices of a tensor.
- [BNNSGather(\_:\_:\_:\_:\_:)](bnnsgather%28__________%29.md): Deprecated. Gathers the elements of a tensor along a single axis.
- [BNNSGatherND(\_:\_:\_:\_:)](bnnsgathernd%28________%29.md): Deprecated. Gathers the slices of a tensor.
- [BNNSScatter(\_:\_:\_:\_:\_:\_:)](bnnsscatter%28____________%29.md): Deprecated. Scatters the elements of a tensor along a single axis.

# BNNSScatterND (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 9.0+ (deprecated in 11.0)

Scatters the slices of a tensor.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
int BNNSScatterND(BNNSReduceFunction op, const BNNSNDArrayDescriptor *input, const BNNSNDArrayDescriptor *indices, BNNSNDArrayDescriptor *output, const BNNSFilterParameters *filter_params);
```

## Parameters

- `op`: The reduction operation that defines how the function combines scattered values with existing output values.
- `input`: A pointer to the input descriptor.
- `indices`: A pointer to the indices descriptor.
- `output`: A pointer to the output descriptor.
- `filter_params`: The filter runtime parameters.

<a id="Discussion"></a>

## Discussion

Use [BNNSScatterND](bnnsscatternd%28__________%29.md) to scatter slices — that you specify by index — into an output tensor.

The function interprets the indices array as a `k - 1` dimensional set of lookup vectors, therefore, the indices tensor must have `(k - 1) + 1` or `k` dimensions.

If the lookup vectors don’t define a full set of indices, the function treats the undefined indices as a slice.

[BNNSScatterND](bnnsscatternd%28__________%29.md) is the inverse of [BNNSGatherND](bnnsgathernd%28________%29.md). The code samples below are based on the gathered values from the [BNNSGatherND](bnnsgathernd%28________%29.md) page.

The following code shows that a scalar index scatters a 2D slice:

```swift
let indices: [Int32] = [1] 
var indicesDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: indices,
    shape: .vector(1))
    
let gathereredValues: [Float] = [20.0, 21.0, 22.0, 23.0]
var gatheredDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: gathereredValues,
    shape: .matrixFirstMajor(2, 2))

var scatteredDescriptor = BNNSNDArrayDescriptor.allocate(
    repeating: Float(),
    shape: inputDescriptor.shape)

BNNSScatterND(BNNSReduceFunctionNone,
              &gatheredDescriptor,
              &indicesDescriptor,
              &scatteredDescriptor,
              nil)
```

On return, `scatteredDescriptor` contains the following values:

```swift
[ 0.0,  0.0,
  0.0,  0.0,

 20.0, 21.0,
 22.0, 23.0,

  0.0,  0.0,
  0.0,  0.0 ]
```

The following code shows that a 2D index scatters a 1D slice:

```swift
let indices: [Int32] = [1, 0] 
var indicesDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: indices,
    shape: .matrixFirstMajor(1, 2))
    
let gathereredValues: [Float] = [20.0, 21.0]
var gatheredDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: gathereredValues,
    shape: .matrixFirstMajor(1, 2))

var scatteredDescriptor = BNNSNDArrayDescriptor.allocate(
    repeating: Float(),
    shape: inputDescriptor.shape)

BNNSScatterND(BNNSReduceFunctionNone,
              &gatheredDescriptor,
              &indicesDescriptor,
              &scatteredDescriptor,
              nil)  
```

On return, `scatteredDescriptor` contains the following values:

```swift
[ 0.0,  0.0,
  0.0,  0.0,

 20.0, 21.0,
  0.0,  0.0,

  0.0,  0.0,
  0.0,  0.0 ]
```

The following code shows that a 3D index scatters a single element:

```swift
let indices: [Int32] = [
    1, 1, 1 
]
var indicesDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: indices,
    shape: .tensor3DFirstMajor(1, 1, 3))

let gathereredValues: [Float] = [23]
var gatheredDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: gathereredValues,
    shape: .matrixFirstMajor(1, 1))

var scatteredDescriptor = BNNSNDArrayDescriptor.allocate(
    repeating: Float(),
    shape: inputDescriptor.shape)

BNNSScatterND(BNNSReduceFunctionNone,
              &gatheredDescriptor,
              &indicesDescriptor,
              &scatteredDescriptor,
              nil)
```

On return, `scatteredDescriptor` contains the following values:

```swift
[ 0.0,  0.0,
  0.0,  0.0,

  0.0,  0.0,
  0.0, 23.0,

  0.0,  0.0,
  0.0,  0.0 ]
```

If multiple input values update the same output element, the function doesn’t define the order of update operations.

In particular, if you define the reduction as `BNNSReduceFunctionNone` the function doesn’t guarantee any particular value in the result.

## See Also

### Gather and scatter operations

- [BNNSGather](bnnsgather%28__________%29.md): Deprecated. Gathers the elements of a tensor along a single axis.
- [BNNSGatherND](bnnsgathernd%28________%29.md): Deprecated. Gathers the slices of a tensor.
- [BNNSScatter](bnnsscatter%28____________%29.md): Deprecated. Scatters the elements of a tensor along a single axis.
