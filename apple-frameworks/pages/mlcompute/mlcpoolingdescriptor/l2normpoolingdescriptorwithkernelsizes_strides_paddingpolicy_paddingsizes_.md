> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcpoolingdescriptor/l2normpoolingdescriptorwithkernelsizes:strides:paddingpolicy:paddingsizes:](https://developer.apple.com/documentation/mlcompute/mlcpoolingdescriptor/l2normpoolingdescriptorwithkernelsizes:strides:paddingpolicy:paddingsizes:)

# l2NormPoolingDescriptorWithKernelSizes:strides:paddingPolicy:paddingSizes:

**Interface language:** Objective-C

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a descriptor for an L2 norm pooling function with the kernel sizes, strides, padding policy, and padding sizes that you specify.

## Declaration

```objectivec
+ (instancetype) l2NormPoolingDescriptorWithKernelSizes:(NSArray<NSNumber *> *) kernelSizes strides:(NSArray<NSNumber *> *) strides paddingPolicy:(MLCPaddingPolicy) paddingPolicy paddingSizes:(NSArray<NSNumber *> *) paddingSizes;
```

## Parameters

- `kernelSizes`: An array that contains the kernel sizes for y and x.
- `strides`: An array that contains the kernel strides for y and x.
- `paddingPolicy`: The padding policy.
- `paddingSizes`: An array that contains the padding sizes for y and x.

<a id="return-value"></a>

## Return Value

A pooling descriptor.

## See Also

### Creating Pooling Descriptors

- [maxPoolingDescriptorWithKernelSizes:strides:paddingPolicy:paddingSizes:](maxpoolingdescriptorwithkernelsizes_strides_paddingpolicy_paddingsizes_.md): Deprecated. Creates a descriptor for a max pooling function with the kernel sizes, strides, padding policy, and padding sizes that you specify.
- [maxPoolingDescriptorWithKernelSizes:strides:dilationRates:paddingPolicy:paddingSizes:](maxpoolingdescriptorwithkernelsizes_strides_dilationrates_paddingpolicy_paddingsizes_.md): Deprecated. Creates a descriptor for a max pooling function with the kernel sizes, strides, dilation rates, padding policy, and padding sizes that you specify.
- [averagePoolingDescriptorWithKernelSizes:strides:paddingPolicy:paddingSizes:countIncludesPadding:](averagepoolingdescriptorwithkernelsizes_strides_paddingpolicy_paddingsizes_countincludespadding_.md): Deprecated. Creates an average pooling descriptor with the kernel sizes, strides, padding policy, padding sizes, and zero padding option that you specify.
- [averagePoolingDescriptorWithKernelSizes:strides:dilationRates:paddingPolicy:paddingSizes:countIncludesPadding:](averagepoolingdescriptorwithkernelsizes_strides_dilationrates_paddingpolicy_paddingsizes_countincludespadding_.md): Deprecated. Creates an average pooling descriptor with the kernel sizes, strides, dilution rates, padding policy and sizes, and zero padding option you specify.
- [l2NormPoolingDescriptorWithKernelSizes:strides:dilationRates:paddingPolicy:paddingSizes:](l2normpoolingdescriptorwithkernelsizes_strides_dilationrates_paddingpolicy_paddingsizes_.md): Deprecated. Creates a descriptor for an L2 norm pooling function with the kernel sizes, strides, dilation rates, padding policy, and padding sizes you specify.
- [poolingDescriptorWithType:kernelSize:stride:](poolingdescriptorwithtype_kernelsize_stride_.md): Deprecated. Creates a pooling descriptor with the pooling function, kernel size, and stride you specify.
