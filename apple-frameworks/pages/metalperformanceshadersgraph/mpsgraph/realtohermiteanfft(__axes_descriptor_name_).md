> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/realtohermiteanfft(_:axes:descriptor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/realtohermiteanfft(_:axes:descriptor:name:))

# realToHermiteanFFT(\_:axes:descriptor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a Real-to-Hermitean fast Fourier transform operation and returns the result tensor.

## Declaration

```swift
func realToHermiteanFFT(_ tensor: MPSGraphTensor, axes: [NSNumber], descriptor: MPSGraphFFTDescriptor, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: A Real-valued input tensor. Must have datatype `MPSDataTypeFloat32`, `MPSDatatypeFloat16` or `MPSDatatypeBFloat16`.
- `axes`: An array of numbers that specifies over which axes MPSGraph performs the Fourier transform - all axes must be contained within last four dimensions of the input tensor.
- `descriptor`: A descriptor that defines the parameters of the Fourier transform operation - see [MPSGraphFFTDescriptor](../mpsgraphfftdescriptor.md).
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor of type `MPSDataTypeComplexFloat32`, `MPSDataTypeComplexFloat16` or `MPSDataTypeComplexBFloat16` with reduced size (see Discussion).

<a id="discussion"></a>

## Discussion

This operation computes the fast Fourier transform of a real-valued input tensor according to the following formulae.

```md
    output[mu] = scale * sum_nu exp( +/- i * 2Pi * mu * nu / n ) input[nu], where
```

`scale = 1` for `scaling_mode = none`, `scale = 1/V_f` for `scaling_mode = size`, `scale = 1/sqrt(V_f)` for `scaling_mode = unitary`, where `V_f` is the volume of the transformation defined by the dimensions included in `axes` (`V_f = prod_{i \in axes} shape(input)[i]`) (see [scalingMode](../mpsgraphfftdescriptor/scalingmode.md)), `+` is selected in `+/-` when `inverse` is specified, otherwise `-` is used and the sum is done separately over each dimension in `axes` and `n` is the dimension length of that axis. With this API MPSGraph writes out only the results for the unique frequencies, resulting in a tensor which has size `(n/2)+1` in the last dimension defined by `axes`.

> **Tip**

> Currently MPSGraph supports the transformation only within the last four dimensions of the input tensor. In case you need to transform higher dimensions than the last four, you can tranpose the higher dimensions of the input with [transpose(\_:permutation:name:)](transpose%28__permutation_name_%29.md)  to be within that last four and then transpose the result tensor back with the inverse of the input transpose.

# realToHermiteanFFTWithTensor:axes:descriptor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a Real-to-Hermitean fast Fourier transform operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) realToHermiteanFFTWithTensor:(MPSGraphTensor *) tensor axes:(NSArray<NSNumber *> *) axes descriptor:(MPSGraphFFTDescriptor *) descriptor name:(NSString *) name;
```

## Parameters

- `tensor`: A Real-valued input tensor. Must have datatype `MPSDataTypeFloat32`, `MPSDatatypeFloat16` or `MPSDatatypeBFloat16`.
- `axes`: An array of numbers that specifies over which axes MPSGraph performs the Fourier transform - all axes must be contained within last four dimensions of the input tensor.
- `descriptor`: A descriptor that defines the parameters of the Fourier transform operation - see [MPSGraphFFTDescriptor](../mpsgraphfftdescriptor.md).
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor of type `MPSDataTypeComplexFloat32`, `MPSDataTypeComplexFloat16` or `MPSDataTypeComplexBFloat16` with reduced size (see Discussion).

<a id="discussion"></a>

## Discussion

This operation computes the fast Fourier transform of a real-valued input tensor according to the following formulae.

```md
    output[mu] = scale * sum_nu exp( +/- i * 2Pi * mu * nu / n ) input[nu], where
```

`scale = 1` for `scaling_mode = none`, `scale = 1/V_f` for `scaling_mode = size`, `scale = 1/sqrt(V_f)` for `scaling_mode = unitary`, where `V_f` is the volume of the transformation defined by the dimensions included in `axes` (`V_f = prod_{i \in axes} shape(input)[i]`) (see [scalingMode](../mpsgraphfftdescriptor/scalingmode.md)), `+` is selected in `+/-` when `inverse` is specified, otherwise `-` is used and the sum is done separately over each dimension in `axes` and `n` is the dimension length of that axis. With this API MPSGraph writes out only the results for the unique frequencies, resulting in a tensor which has size `(n/2)+1` in the last dimension defined by `axes`.

> **Tip**

> Currently MPSGraph supports the transformation only within the last four dimensions of the input tensor. In case you need to transform higher dimensions than the last four, you can tranpose the higher dimensions of the input with [transposeTensor:permutation:name:](transpose%28__permutation_name_%29.md)  to be within that last four and then transpose the result tensor back with the inverse of the input transpose.
