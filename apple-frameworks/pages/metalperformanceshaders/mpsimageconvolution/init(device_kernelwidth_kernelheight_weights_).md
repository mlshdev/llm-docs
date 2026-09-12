> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimageconvolution/init(device:kernelwidth:kernelheight:weights:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsimageconvolution/init(device:kernelwidth:kernelheight:weights:))

# init(device:kernelWidth:kernelHeight:weights:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Initializes a convolution filter.

## Declaration

```swift
init(device: any MTLDevice, kernelWidth: Int, kernelHeight: Int, weights kernelWeights: UnsafePointer<Float>)
```

## Parameters

- `device`: The Metal device the filter will run on.
- `kernelWidth`: The width of the kernel. Must be an odd number.
- `kernelHeight`: The height of the kernel. Must be an odd number.
- `kernelWeights`: A pointer to an array of `kernelWidth * kernelHeight` values to be used as the kernel. These values should be in row-major order.

<a id="return-value"></a>

## Return Value

An initialized convolution filter object.

# initWithDevice:kernelWidth:kernelHeight:weights: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Initializes a convolution filter.

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device kernelWidth:(NSUInteger) kernelWidth kernelHeight:(NSUInteger) kernelHeight weights:(const float *) kernelWeights;
```

## Parameters

- `device`: The Metal device the filter will run on.
- `kernelWidth`: The width of the kernel. Must be an odd number.
- `kernelHeight`: The height of the kernel. Must be an odd number.
- `kernelWeights`: A pointer to an array of `kernelWidth * kernelHeight` values to be used as the kernel. These values should be in row-major order.

<a id="return-value"></a>

## Return Value

An initialized convolution filter object.
