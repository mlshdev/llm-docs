> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcpoolingdescriptor/poolingdescriptorwithtype:kernelsize:stride:](https://developer.apple.com/documentation/mlcompute/mlcpoolingdescriptor/poolingdescriptorwithtype:kernelsize:stride:)

# poolingDescriptorWithType:kernelSize:stride:

**Interface language:** Objective-C

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a pooling descriptor with the pooling function, kernel size, and stride you specify.

## Declaration

```objectivec
+ (instancetype) poolingDescriptorWithType:(MLCPoolingType) poolingType kernelSize:(NSUInteger) kernelSize stride:(NSUInteger) stride;
```

## Parameters

- `poolingType`: The pooling function type.
- `kernelSize`: The kernel size for y and x.
- `stride`: The kernel stride for y and x.

## See Also

### Creating Pooling Descriptors

- [maxPoolingDescriptorWithKernelSizes:strides:paddingPolicy:paddingSizes:](maxpoolingdescriptorwithkernelsizes_strides_paddingpolicy_paddingsizes_.md): Deprecated. Creates a descriptor for a max pooling function with the kernel sizes, strides, padding policy, and padding sizes that you specify.
- [maxPoolingDescriptorWithKernelSizes:strides:dilationRates:paddingPolicy:paddingSizes:](maxpoolingdescriptorwithkernelsizes_strides_dilationrates_paddingpolicy_paddingsizes_.md): Deprecated. Creates a descriptor for a max pooling function with the kernel sizes, strides, dilation rates, padding policy, and padding sizes that you specify.
- [averagePoolingDescriptorWithKernelSizes:strides:paddingPolicy:paddingSizes:countIncludesPadding:](averagepoolingdescriptorwithkernelsizes_strides_paddingpolicy_paddingsizes_countincludespadding_.md): Deprecated. Creates an average pooling descriptor with the kernel sizes, strides, padding policy, padding sizes, and zero padding option that you specify.
- [averagePoolingDescriptorWithKernelSizes:strides:dilationRates:paddingPolicy:paddingSizes:countIncludesPadding:](averagepoolingdescriptorwithkernelsizes_strides_dilationrates_paddingpolicy_paddingsizes_countincludespadding_.md): Deprecated. Creates an average pooling descriptor with the kernel sizes, strides, dilution rates, padding policy and sizes, and zero padding option you specify.
- [l2NormPoolingDescriptorWithKernelSizes:strides:paddingPolicy:paddingSizes:](l2normpoolingdescriptorwithkernelsizes_strides_paddingpolicy_paddingsizes_.md): Deprecated. Creates a descriptor for an L2 norm pooling function with the kernel sizes, strides, padding policy, and padding sizes that you specify.
- [l2NormPoolingDescriptorWithKernelSizes:strides:dilationRates:paddingPolicy:paddingSizes:](l2normpoolingdescriptorwithkernelsizes_strides_dilationrates_paddingpolicy_paddingsizes_.md): Deprecated. Creates a descriptor for an L2 norm pooling function with the kernel sizes, strides, dilation rates, padding policy, and padding sizes you specify.
