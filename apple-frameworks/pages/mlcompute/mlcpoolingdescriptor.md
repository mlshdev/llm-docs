> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcpoolingdescriptor](https://developer.apple.com/documentation/mlcompute/mlcpoolingdescriptor)

# MLCPoolingDescriptor (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A configuration object you use to create a pooling layer.

## Declaration

```swift
class MLCPoolingDescriptor
```

## Topics

### Creating Pooling Descriptors

- [init(type:kernelSizes:strides:dilationRates:paddingPolicy:)](mlcpoolingdescriptor/init%28type_kernelsizes_strides_dilationrates_paddingpolicy_%29.md): Deprecated. Creates a pooling descriptor with the pooling function type, kernel sizes, strides, dilation rates, and padding policy that you specify.

### Inspecting Pooling Descriptors

- [poolingType](mlcpoolingdescriptor/poolingtype-4ni07.md): Deprecated. The pooling operation type.
- [kernelSizes](mlcpoolingdescriptor/kernelsizes.md): Deprecated. A tuple that contains the kernel sizes for height and width.
- [strides](mlcpoolingdescriptor/strides.md): Deprecated. A tuple that contains the kernel strides for y and x.
- [dilationRates](mlcpoolingdescriptor/dilationrates.md): Deprecated. A tuple that contains the dilation rates for y and x.
- [paddingPolicy](mlcpoolingdescriptor/paddingpolicy-7p8a2.md): Deprecated. The padding policy.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Creating Pooling Layers

- [init(descriptor:)](mlcpoolinglayer/init%28descriptor_%29.md): Deprecated. Creates a pooling layer with the descriptor you specify.
- [MLCPoolingType](mlcpoolingtype-wb8j.md): Deprecated. A pooling function type for a pooling layer.

# MLCPoolingDescriptor (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A configuration object you use to create a pooling layer.

## Declaration

```objectivec
@interface MLCPoolingDescriptor : NSObject
```

## Topics

### Creating Pooling Descriptors

- [maxPoolingDescriptorWithKernelSizes:strides:paddingPolicy:paddingSizes:](mlcpoolingdescriptor/maxpoolingdescriptorwithkernelsizes_strides_paddingpolicy_paddingsizes_.md): Deprecated. Creates a descriptor for a max pooling function with the kernel sizes, strides, padding policy, and padding sizes that you specify.
- [maxPoolingDescriptorWithKernelSizes:strides:dilationRates:paddingPolicy:paddingSizes:](mlcpoolingdescriptor/maxpoolingdescriptorwithkernelsizes_strides_dilationrates_paddingpolicy_paddingsizes_.md): Deprecated. Creates a descriptor for a max pooling function with the kernel sizes, strides, dilation rates, padding policy, and padding sizes that you specify.
- [averagePoolingDescriptorWithKernelSizes:strides:paddingPolicy:paddingSizes:countIncludesPadding:](mlcpoolingdescriptor/averagepoolingdescriptorwithkernelsizes_strides_paddingpolicy_paddingsizes_countincludespadding_.md): Deprecated. Creates an average pooling descriptor with the kernel sizes, strides, padding policy, padding sizes, and zero padding option that you specify.
- [averagePoolingDescriptorWithKernelSizes:strides:dilationRates:paddingPolicy:paddingSizes:countIncludesPadding:](mlcpoolingdescriptor/averagepoolingdescriptorwithkernelsizes_strides_dilationrates_paddingpolicy_paddingsizes_countincludespadding_.md): Deprecated. Creates an average pooling descriptor with the kernel sizes, strides, dilution rates, padding policy and sizes, and zero padding option you specify.
- [l2NormPoolingDescriptorWithKernelSizes:strides:paddingPolicy:paddingSizes:](mlcpoolingdescriptor/l2normpoolingdescriptorwithkernelsizes_strides_paddingpolicy_paddingsizes_.md): Deprecated. Creates a descriptor for an L2 norm pooling function with the kernel sizes, strides, padding policy, and padding sizes that you specify.
- [l2NormPoolingDescriptorWithKernelSizes:strides:dilationRates:paddingPolicy:paddingSizes:](mlcpoolingdescriptor/l2normpoolingdescriptorwithkernelsizes_strides_dilationrates_paddingpolicy_paddingsizes_.md): Deprecated. Creates a descriptor for an L2 norm pooling function with the kernel sizes, strides, dilation rates, padding policy, and padding sizes you specify.
- [poolingDescriptorWithType:kernelSize:stride:](mlcpoolingdescriptor/poolingdescriptorwithtype_kernelsize_stride_.md): Deprecated. Creates a pooling descriptor with the pooling function, kernel size, and stride you specify.

### Inspecting Pooling Descriptors

- [poolingType](mlcpoolingdescriptor/poolingtype-9daku.md): Deprecated. The pooling operation type.
- [kernelWidth](mlcpoolingdescriptor/kernelwidth.md): Deprecated. The pooling kernel size in x.
- [kernelHeight](mlcpoolingdescriptor/kernelheight.md): Deprecated. The pooling kernel size in y.
- [strideInX](mlcpoolingdescriptor/strideinx.md): Deprecated. The stride of the kernel in x.
- [strideInY](mlcpoolingdescriptor/strideiny.md): Deprecated. The stride of the kernel in y.
- [dilationRateInX](mlcpoolingdescriptor/dilationrateinx.md): Deprecated. The kernel dilation rate, or stride of elements, in x.
- [dilationRateInY](mlcpoolingdescriptor/dilationrateiny.md): Deprecated. The kernel dilation rate, or stride of elements, in y.
- [paddingPolicy](mlcpoolingdescriptor/paddingpolicy-1e6rg.md): Deprecated. The padding policy.
- [paddingSizeInX](mlcpoolingdescriptor/paddingsizeinx.md): Deprecated. The padding size in x, left and right, to use if the padding policy is to use padding size.
- [paddingSizeInY](mlcpoolingdescriptor/paddingsizeiny.md): Deprecated. The padding size in y, top and bottom, to use if the padding policy is to use padding size.
- [countIncludesPadding](mlcpoolingdescriptor/countincludespadding.md): Deprecated. A Boolean that indicates whether you include zero padding in the averaging calculation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Creating Pooling Layers

- [layerWithDescriptor:](mlcpoolinglayer/init%28descriptor_%29.md): Deprecated. Creates a pooling layer with the descriptor you specify.
- [MLCPoolingType](mlcpoolingtype-8hrit.md): A pooling function type for a pooling layer.
