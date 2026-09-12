> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnlocalcontrastnormalization](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnlocalcontrastnormalization)

# MPSCNNLocalContrastNormalization (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A local-contrast normalization kernel.

## Declaration

```swift
class MPSCNNLocalContrastNormalization
```

<a id="overview"></a>

## Overview

The local contrast normalization kernel is quite similar to the spatial normalization kernel, described in the [MPSCNNSpatialNormalization](mpscnnspatialnormalization.md) class, in that it applies the kernel over local regions which extend spatially, but are in separate feature channels (i.e., they have the shape `1 x kernel width x kernel height`). However, instead of dividing by the local “energy” of the feature, the denominator uses the local variance of the feature - effectively the mean value of the feature is subtracted from the signal. For each feature channel, the function computes the variance `VAR(i,j)` and mean `M(i,j)` of `X(i,j)` inside each rectangle around the spatial point `(i,j)`. Then the result is computed for each element of `X` as follows:

![Y(i,j) = pm + ps \* ( X(i,j) - p0 \* M(i,j)) / (delta + alpha \* VAR(i,j))^beta](https://developer.apple.com/images/com.apple.metalperformanceshaders/media-2903532@2x.png)

Where `kw` and `kh` are the values of the `kernelWidth` and the `kernelHeight` properties, respectively, and the values of the [pm](mpscnnlocalcontrastnormalization/pm.md), [ps](mpscnnlocalcontrastnormalization/ps.md), and [p0](mpscnnlocalcontrastnormalization/p0.md) properties can be used to offset and scale the result in various ways. For example setting `pm=0`, `ps=1`, `p0=1`, `delta=0`, `alpha=1.0` and `beta=0.5` scales input data so that the result has unit variance and zero mean, provided that input variance is positive.

It is your responsibility to ensure that the combination of the values of the [delta](mpscnnlocalcontrastnormalization/delta.md) and [alpha](mpscnnlocalcontrastnormalization/alpha.md) properties does not result in a situation where the denominator becomes zero - in such situations the resulting pixel-value is undefined. A good way to guard against tiny variances is to regulate the expression with a small delta value, for example `delta=1/1024`.

> **Tip**

>  The encoding methods in the [MPSUnaryImageKernel](mpsunaryimagekernel.md) class can be used to encode an [MPSCNNLocalContrastNormalization](mpscnnlocalcontrastnormalization.md) object to a [MTLCommandBuffer](../metal/mtlcommandbuffer.md) object.

## Topics

### Initializers

- [init(coder:device:)](mpscnnlocalcontrastnormalization/init%28coder_device_%29.md): Initializes a local contrast normalization kernel.
- [init(device:kernelWidth:kernelHeight:)](mpscnnlocalcontrastnormalization/init%28device_kernelwidth_kernelheight_%29.md): Initializes a local contrast normalization kernel.

### Instance Properties

- [alpha](mpscnnlocalcontrastnormalization/alpha.md): The “alpha” variable of the kernel function.
- [beta](mpscnnlocalcontrastnormalization/beta.md): The “beta” variable of the kernel function.
- [delta](mpscnnlocalcontrastnormalization/delta.md): The “delta” variable of the kernel function.
- [p0](mpscnnlocalcontrastnormalization/p0.md): The “p0” variable of the kernel function.
- [pm](mpscnnlocalcontrastnormalization/pm.md): The “pm” variable of the kernel function.
- [ps](mpscnnlocalcontrastnormalization/ps.md): The “ps” variable of the kernel function.

### Instance Methods

- [init(device:kernelWidth:kernelHeight:)](mpscnnlocalcontrastnormalization/init%28device_kernelwidth_kernelheight_%29.md): Initializes a local contrast normalization kernel.

## Relationships

### Inherits From

- [MPSCNNKernel](mpscnnkernel.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Normalization Layers

- [MPSCNNCrossChannelNormalization](mpscnncrosschannelnormalization.md): A normalization kernel applied across feature channels.
- [MPSCNNCrossChannelNormalizationGradient](mpscnncrosschannelnormalizationgradient.md): A gradient normalization kernel applied across feature channels.
- [MPSCNNLocalContrastNormalizationGradient](mpscnnlocalcontrastnormalizationgradient.md): A gradient local-contrast normalization kernel.
- [MPSCNNSpatialNormalization](mpscnnspatialnormalization.md): A spatial normalization kernel.
- [MPSCNNSpatialNormalizationGradient](mpscnnspatialnormalizationgradient.md): A gradient spatial normalization kernel.
- [MPSCNNBatchNormalization](mpscnnbatchnormalization.md): A batch normalization kernel.
- [MPSCNNBatchNormalizationGradient](mpscnnbatchnormalizationgradient.md): A gradient batch normalization kernel.
- [MPSCNNBatchNormalizationState](mpscnnbatchnormalizationstate.md): An object that stores data required to execute batch normalization.
- [MPSCNNNormalizationMeanAndVarianceState](mpscnnnormalizationmeanandvariancestate.md): An object that stores mean and variance terms used to execute batch normalization.
- [MPSCNNBatchNormalizationStatistics](mpscnnbatchnormalizationstatistics.md): An object that stores statistics required to execute batch normalization.
- [MPSCNNBatchNormalizationStatisticsGradient](mpscnnbatchnormalizationstatisticsgradient.md): An object that stores the gradient of the loss function with respect to the batch statistics and batch normalization weights.
- [MPSCNNInstanceNormalization](mpscnninstancenormalization.md): An instance normalization kernel.
- [MPSCNNInstanceNormalizationGradient](mpscnninstancenormalizationgradient.md): A gradient instance normalization kernel.
- [MPSCNNInstanceNormalizationGradientState](mpscnninstancenormalizationgradientstate.md): An object that stores information required to execute a gradient pass for instance normalization.
- [MPSCNNNormalizationGammaAndBetaState](mpscnnnormalizationgammaandbetastate.md): An object that stores gamma and beta terms used to apply a scale and bias in instance- or batch-normalization operations.

# MPSCNNLocalContrastNormalization (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A local-contrast normalization kernel.

## Declaration

```objectivec
@interface MPSCNNLocalContrastNormalization : MPSCNNKernel
```

<a id="overview"></a>

## Overview

The local contrast normalization kernel is quite similar to the spatial normalization kernel, described in the [MPSCNNSpatialNormalization](mpscnnspatialnormalization.md) class, in that it applies the kernel over local regions which extend spatially, but are in separate feature channels (i.e., they have the shape `1 x kernel width x kernel height`). However, instead of dividing by the local “energy” of the feature, the denominator uses the local variance of the feature - effectively the mean value of the feature is subtracted from the signal. For each feature channel, the function computes the variance `VAR(i,j)` and mean `M(i,j)` of `X(i,j)` inside each rectangle around the spatial point `(i,j)`. Then the result is computed for each element of `X` as follows:

![Y(i,j) = pm + ps \* ( X(i,j) - p0 \* M(i,j)) / (delta + alpha \* VAR(i,j))^beta](https://developer.apple.com/images/com.apple.metalperformanceshaders/media-2903532@2x.png)

Where `kw` and `kh` are the values of the `kernelWidth` and the `kernelHeight` properties, respectively, and the values of the [pm](mpscnnlocalcontrastnormalization/pm.md), [ps](mpscnnlocalcontrastnormalization/ps.md), and [p0](mpscnnlocalcontrastnormalization/p0.md) properties can be used to offset and scale the result in various ways. For example setting `pm=0`, `ps=1`, `p0=1`, `delta=0`, `alpha=1.0` and `beta=0.5` scales input data so that the result has unit variance and zero mean, provided that input variance is positive.

It is your responsibility to ensure that the combination of the values of the [delta](mpscnnlocalcontrastnormalization/delta.md) and [alpha](mpscnnlocalcontrastnormalization/alpha.md) properties does not result in a situation where the denominator becomes zero - in such situations the resulting pixel-value is undefined. A good way to guard against tiny variances is to regulate the expression with a small delta value, for example `delta=1/1024`.

> **Tip**

>  The encoding methods in the [MPSUnaryImageKernel](mpsunaryimagekernel.md) class can be used to encode an [MPSCNNLocalContrastNormalization](mpscnnlocalcontrastnormalization.md) object to a [MTLCommandBuffer](../metal/mtlcommandbuffer.md) object.

## Topics

### Initializers

- [initWithCoder:device:](mpscnnlocalcontrastnormalization/init%28coder_device_%29.md): Initializes a local contrast normalization kernel.
- [initWithDevice:kernelWidth:kernelHeight:](mpscnnlocalcontrastnormalization/init%28device_kernelwidth_kernelheight_%29.md): Initializes a local contrast normalization kernel.

### Instance Properties

- [alpha](mpscnnlocalcontrastnormalization/alpha.md): The “alpha” variable of the kernel function.
- [beta](mpscnnlocalcontrastnormalization/beta.md): The “beta” variable of the kernel function.
- [delta](mpscnnlocalcontrastnormalization/delta.md): The “delta” variable of the kernel function.
- [p0](mpscnnlocalcontrastnormalization/p0.md): The “p0” variable of the kernel function.
- [pm](mpscnnlocalcontrastnormalization/pm.md): The “pm” variable of the kernel function.
- [ps](mpscnnlocalcontrastnormalization/ps.md): The “ps” variable of the kernel function.

### Instance Methods

- [initWithDevice:kernelWidth:kernelHeight:](mpscnnlocalcontrastnormalization/init%28device_kernelwidth_kernelheight_%29.md): Initializes a local contrast normalization kernel.

## Relationships

### Inherits From

- [MPSCNNKernel](mpscnnkernel.md)

## See Also

### Normalization Layers

- [MPSCNNCrossChannelNormalization](mpscnncrosschannelnormalization.md): A normalization kernel applied across feature channels.
- [MPSCNNCrossChannelNormalizationGradient](mpscnncrosschannelnormalizationgradient.md): A gradient normalization kernel applied across feature channels.
- [MPSCNNLocalContrastNormalizationGradient](mpscnnlocalcontrastnormalizationgradient.md): A gradient local-contrast normalization kernel.
- [MPSCNNSpatialNormalization](mpscnnspatialnormalization.md): A spatial normalization kernel.
- [MPSCNNSpatialNormalizationGradient](mpscnnspatialnormalizationgradient.md): A gradient spatial normalization kernel.
- [MPSCNNBatchNormalization](mpscnnbatchnormalization.md): A batch normalization kernel.
- [MPSCNNBatchNormalizationGradient](mpscnnbatchnormalizationgradient.md): A gradient batch normalization kernel.
- [MPSCNNBatchNormalizationState](mpscnnbatchnormalizationstate.md): An object that stores data required to execute batch normalization.
- [MPSCNNNormalizationMeanAndVarianceState](mpscnnnormalizationmeanandvariancestate.md): An object that stores mean and variance terms used to execute batch normalization.
- [MPSCNNBatchNormalizationStatistics](mpscnnbatchnormalizationstatistics.md): An object that stores statistics required to execute batch normalization.
- [MPSCNNBatchNormalizationStatisticsGradient](mpscnnbatchnormalizationstatisticsgradient.md): An object that stores the gradient of the loss function with respect to the batch statistics and batch normalization weights.
- [MPSCNNInstanceNormalization](mpscnninstancenormalization.md): An instance normalization kernel.
- [MPSCNNInstanceNormalizationGradient](mpscnninstancenormalizationgradient.md): A gradient instance normalization kernel.
- [MPSCNNInstanceNormalizationGradientState](mpscnninstancenormalizationgradientstate.md): An object that stores information required to execute a gradient pass for instance normalization.
- [MPSCNNNormalizationGammaAndBetaState](mpscnnnormalizationgammaandbetastate.md): An object that stores gamma and beta terms used to apply a scale and bias in instance- or batch-normalization operations.
