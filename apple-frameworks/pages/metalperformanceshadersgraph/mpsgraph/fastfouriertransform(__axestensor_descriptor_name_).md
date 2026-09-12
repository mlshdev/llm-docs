> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/fastfouriertransform(_:axestensor:descriptor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/fastfouriertransform(_:axestensor:descriptor:name:))

# fastFourierTransform(\_:axesTensor:descriptor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a fast Fourier transform operation and returns the result tensor.

## Declaration

```swift
func fastFourierTransform(_ tensor: MPSGraphTensor, axesTensor: MPSGraphTensor, descriptor: MPSGraphFFTDescriptor, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: A complex or real-valued input tensor.
- `axesTensor`: A tensor of rank one containing the axes over which MPSGraph performs the transformation. See [fastFourierTransform(\_:axes:descriptor:name:)](fastfouriertransform%28__axes_descriptor_name_%29.md).
- `descriptor`: A descriptor that defines the parameters of the Fourier transform operation - see [MPSGraphFFTDescriptor](../mpsgraphfftdescriptor.md).
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid complex-valued MPSGraphTensor of the same shape as `tensor`.

<a id="discussion"></a>

## Discussion

This operation computes the fast Fourier transform of the input tensor according to the following formulae.

```md
    output[mu] = scale * sum_nu exp( +/- i * 2Pi * mu * nu / n ) input[nu], where
```

`scale = 1` for `scaling_mode = none`, `scale = 1/V_f` for `scaling_mode = size`, `scale = 1/sqrt(V_f)` for `scaling_mode = unitary`, where `V_f` is the volume of the transformation defined by the dimensions included in `axes` (`V_f = prod_{i \in axes} shape(input)[i]`) (see [scalingMode](../mpsgraphfftdescriptor/scalingmode.md)), `+` is selected in `+/-` when `inverse` is specified, otherwise `-` is used and the sum is done separately over each dimension in `axes` and `n` is the dimension length of that axis.

> **Tip**

> Currently MPSGraph supports the transformation only within the last four dimensions of the input tensor. In case you need to transform higher dimensions than the last four, you can tranpose the higher dimensions of the input with [transpose(\_:permutation:name:)](transpose%28__permutation_name_%29.md)  to be within that last four and then transpose the result tensor back with the inverse of the input transpose.

# fastFourierTransformWithTensor:axesTensor:descriptor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a fast Fourier transform operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) fastFourierTransformWithTensor:(MPSGraphTensor *) tensor axesTensor:(MPSGraphTensor *) axesTensor descriptor:(MPSGraphFFTDescriptor *) descriptor name:(NSString *) name;
```

## Parameters

- `tensor`: A complex or real-valued input tensor.
- `axesTensor`: A tensor of rank one containing the axes over which MPSGraph performs the transformation. See [fastFourierTransformWithTensor:axes:descriptor:name:](fastfouriertransform%28__axes_descriptor_name_%29.md).
- `descriptor`: A descriptor that defines the parameters of the Fourier transform operation - see [MPSGraphFFTDescriptor](../mpsgraphfftdescriptor.md).
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid complex-valued MPSGraphTensor of the same shape as `tensor`.

<a id="discussion"></a>

## Discussion

This operation computes the fast Fourier transform of the input tensor according to the following formulae.

```md
    output[mu] = scale * sum_nu exp( +/- i * 2Pi * mu * nu / n ) input[nu], where
```

`scale = 1` for `scaling_mode = none`, `scale = 1/V_f` for `scaling_mode = size`, `scale = 1/sqrt(V_f)` for `scaling_mode = unitary`, where `V_f` is the volume of the transformation defined by the dimensions included in `axes` (`V_f = prod_{i \in axes} shape(input)[i]`) (see [scalingMode](../mpsgraphfftdescriptor/scalingmode.md)), `+` is selected in `+/-` when `inverse` is specified, otherwise `-` is used and the sum is done separately over each dimension in `axes` and `n` is the dimension length of that axis.

> **Tip**

> Currently MPSGraph supports the transformation only within the last four dimensions of the input tensor. In case you need to transform higher dimensions than the last four, you can tranpose the higher dimensions of the input with [transposeTensor:permutation:name:](transpose%28__permutation_name_%29.md)  to be within that last four and then transpose the result tensor back with the inverse of the input transpose.
