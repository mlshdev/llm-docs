> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcpoolingdescriptor/init(type:kernelsizes:strides:dilationrates:paddingpolicy:)](https://developer.apple.com/documentation/mlcompute/mlcpoolingdescriptor/init(type:kernelsizes:strides:dilationrates:paddingpolicy:))

# init(type:kernelSizes:strides:dilationRates:paddingPolicy:)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0)

Creates a pooling descriptor with the pooling function type, kernel sizes, strides, dilation rates, and padding policy that you specify.

> Use Metal Performance Shaders Graph or BNNS instead.

## Declaration

```swift
convenience init(type: MLCPoolingType, kernelSizes: (height: Int, width: Int), strides: (y: Int, x: Int) = (y: 1, x: 1), dilationRates: (y: Int, x: Int) = (y: 1, x: 1), paddingPolicy: MLCPaddingPolicy = .same)
```

## Parameters

- `type`: The pooling function type.
- `kernelSizes`: A tuple that contains the kernel sizes for y and x.
- `strides`: A tuple that contains the kernel strides for y and x.
- `dilationRates`: A tuple that contains the dilation rates for y and x.
- `paddingPolicy`: The padding policy.
