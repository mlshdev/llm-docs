> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnspatialnormalization](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnspatialnormalization)

# MPSCNNSpatialNormalization (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A spatial normalization kernel.

## Declaration

```swift
class MPSCNNSpatialNormalization
```

<a id="overview"></a>

## Overview

The spatial normalization for a feature channel applies the kernel over local regions which extend spatially, but are in separate feature channels (i.e., they have the shape `1 x kernel width x kernel height`).

For each feature channel, the function computes the sum of squares of `X` inside each rectangle, `N2(i,j)`. It then divides each element of `X` as follows:

![Y(i,j) = X(i,j) / (delta + alpha/(kw\*kh) \* N2(i,j))^beta](https://developer.apple.com/images/com.apple.metalperformanceshaders/media-2903551@2x.png)

Where `kw` and `kh` are the values of the `kernelWidth` and `kernelHeight` properties, respectively. It is your responsibility to ensure that the combination of the values of the [delta](mpscnnspatialnormalization/delta.md) and [alpha](mpscnnspatialnormalization/alpha.md) `kernelWidth` `kernelHeight` properties does not result in a situation where the denominator becomes zero (in such situations the resulting pixel-value is undefined).

> **Note**

>  The encoding methods in the [MPSUnaryImageKernel](mpsunaryimagekernel.md) class can be used to encode an [MPSCNNSpatialNormalization](mpscnnspatialnormalization.md) object to a [MTLCommandBuffer](../metal/mtlcommandbuffer.md) object.

## Topics

### Initializers

- [init(coder:device:)](mpscnnspatialnormalization/init%28coder_device_%29.md): Initializes a spatial normalization kernel.
- [init(device:kernelWidth:kernelHeight:)](mpscnnspatialnormalization/init%28device_kernelwidth_kernelheight_%29.md): Initializes a spatial normalization kernel.

### Instance Properties

- [alpha](mpscnnspatialnormalization/alpha.md): The “alpha” variable of the kernel function.
- [beta](mpscnnspatialnormalization/beta.md): The “beta” variable of the kernel function.
- [delta](mpscnnspatialnormalization/delta.md): The “delta” variable of the kernel function.

### Instance Methods

- [init(device:kernelWidth:kernelHeight:)](mpscnnspatialnormalization/init%28device_kernelwidth_kernelheight_%29.md): Initializes a spatial normalization kernel.

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
- [MPSCNNLocalContrastNormalization](mpscnnlocalcontrastnormalization.md): A local-contrast normalization kernel.
- [MPSCNNLocalContrastNormalizationGradient](mpscnnlocalcontrastnormalizationgradient.md): A gradient local-contrast normalization kernel.
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

# MPSCNNSpatialNormalization (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A spatial normalization kernel.

## Declaration

```objectivec
@interface MPSCNNSpatialNormalization : MPSCNNKernel
```

<a id="overview"></a>

## Overview

The spatial normalization for a feature channel applies the kernel over local regions which extend spatially, but are in separate feature channels (i.e., they have the shape `1 x kernel width x kernel height`).

For each feature channel, the function computes the sum of squares of `X` inside each rectangle, `N2(i,j)`. It then divides each element of `X` as follows:

![Y(i,j) = X(i,j) / (delta + alpha/(kw\*kh) \* N2(i,j))^beta](https://developer.apple.com/images/com.apple.metalperformanceshaders/media-2903551@2x.png)

Where `kw` and `kh` are the values of the `kernelWidth` and `kernelHeight` properties, respectively. It is your responsibility to ensure that the combination of the values of the [delta](mpscnnspatialnormalization/delta.md) and [alpha](mpscnnspatialnormalization/alpha.md) `kernelWidth` `kernelHeight` properties does not result in a situation where the denominator becomes zero (in such situations the resulting pixel-value is undefined).

> **Note**

>  The encoding methods in the [MPSUnaryImageKernel](mpsunaryimagekernel.md) class can be used to encode an [MPSCNNSpatialNormalization](mpscnnspatialnormalization.md) object to a [MTLCommandBuffer](../metal/mtlcommandbuffer.md) object.

## Topics

### Initializers

- [initWithCoder:device:](mpscnnspatialnormalization/init%28coder_device_%29.md): Initializes a spatial normalization kernel.
- [initWithDevice:kernelWidth:kernelHeight:](mpscnnspatialnormalization/init%28device_kernelwidth_kernelheight_%29.md): Initializes a spatial normalization kernel.

### Instance Properties

- [alpha](mpscnnspatialnormalization/alpha.md): The “alpha” variable of the kernel function.
- [beta](mpscnnspatialnormalization/beta.md): The “beta” variable of the kernel function.
- [delta](mpscnnspatialnormalization/delta.md): The “delta” variable of the kernel function.

### Instance Methods

- [initWithDevice:kernelWidth:kernelHeight:](mpscnnspatialnormalization/init%28device_kernelwidth_kernelheight_%29.md): Initializes a spatial normalization kernel.

## Relationships

### Inherits From

- [MPSCNNKernel](mpscnnkernel.md)

## See Also

### Normalization Layers

- [MPSCNNCrossChannelNormalization](mpscnncrosschannelnormalization.md): A normalization kernel applied across feature channels.
- [MPSCNNCrossChannelNormalizationGradient](mpscnncrosschannelnormalizationgradient.md): A gradient normalization kernel applied across feature channels.
- [MPSCNNLocalContrastNormalization](mpscnnlocalcontrastnormalization.md): A local-contrast normalization kernel.
- [MPSCNNLocalContrastNormalizationGradient](mpscnnlocalcontrastnormalizationgradient.md): A gradient local-contrast normalization kernel.
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
