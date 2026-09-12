> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnconvolution/init(device:convolutiondescriptor:kernelweights:biasterms:flags:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolution/init(device:convolutiondescriptor:kernelweights:biasterms:flags:))

# init(device:convolutionDescriptor:kernelWeights:biasTerms:flags:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 10.0+ (deprecated in 11.0) · macOS 10.13+ · tvOS 10.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

Initializes a convolution kernel.

## Declaration

```swift
init(device: any MTLDevice, convolutionDescriptor: MPSCNNConvolutionDescriptor, kernelWeights: UnsafePointer<Float>, biasTerms: UnsafePointer<Float>?, flags: MPSCNNConvolutionFlags)
```

## Parameters

- `device`: The device on which this kernel will run.
- `convolutionDescriptor`: A pointer to a valid convolution descriptor.
- `kernelWeights`: A pointer to a weights array.

  Each entry is a float value. The number of entries is equal to [inputFeatureChannels](../mpscnnconvolutiondescriptor/inputfeaturechannels.md) `*` [outputFeatureChannels](../mpscnnconvolutiondescriptor/outputfeaturechannels.md) `*` [kernelHeight](../mpscnnconvolutiondescriptor/kernelheight.md) `*` [kernelWidth](../mpscnnconvolutiondescriptor/kernelwidth.md).

  The layout of the filter weight is arranged so that it can be reinterpreted as a 4D tensor (array) `weight[outputChannels][kernelHeight][kernelWidth][inputChannels/groups]`

  Weights are converted to half float precision (`fp16`) internally for best performance.
- `biasTerms`: A pointer to bias terms to be applied to the convolution output.

  Each entry is a float value. The number of entries is the number of output feature maps.
- `flags`: Currently unused.

  This value must be [MPSCNNConvolutionFlags.none](../mpscnnconvolutionflags/none.md).

<a id="return-value"></a>

## Return Value

A valid [MPSCNNConvolution](../mpscnnconvolution.md) object or `nil`, if failure.

## See Also

### Initializers

- [init(coder:device:)](init%28coder_device_%29.md)
- [MPSCNNConvolutionDescriptor](../mpscnnconvolutiondescriptor.md): A description of the attributes of a convolution kernel.
- [MPSCNNConvolutionFlags](../mpscnnconvolutionflags.md): Options used to control how kernel weights are stored and used in the CNN kernels
- [init(device:weights:)](init%28device_weights_%29.md)
- [MPSCNNConvolutionDataSource](../mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.

# initWithDevice:convolutionDescriptor:kernelWeights:biasTerms:flags: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · macOS 10.13+ · tvOS 10.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

Initializes a convolution kernel.

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device convolutionDescriptor:(const MPSCNNConvolutionDescriptor *) convolutionDescriptor kernelWeights:(const float *) kernelWeights biasTerms:(const float *) biasTerms flags:(MPSCNNConvolutionFlags) flags;
```

## Parameters

- `device`: The device on which this kernel will run.
- `convolutionDescriptor`: A pointer to a valid convolution descriptor.
- `kernelWeights`: A pointer to a weights array.

  Each entry is a float value. The number of entries is equal to [inputFeatureChannels](../mpscnnconvolutiondescriptor/inputfeaturechannels.md) `*` [outputFeatureChannels](../mpscnnconvolutiondescriptor/outputfeaturechannels.md) `*` [kernelHeight](../mpscnnconvolutiondescriptor/kernelheight.md) `*` [kernelWidth](../mpscnnconvolutiondescriptor/kernelwidth.md).

  The layout of the filter weight is arranged so that it can be reinterpreted as a 4D tensor (array) `weight[outputChannels][kernelHeight][kernelWidth][inputChannels/groups]`

  Weights are converted to half float precision (`fp16`) internally for best performance.
- `biasTerms`: A pointer to bias terms to be applied to the convolution output.

  Each entry is a float value. The number of entries is the number of output feature maps.
- `flags`: Currently unused.

  This value must be [MPSCNNConvolutionFlagsNone](../mpscnnconvolutionflags/none.md).

<a id="return-value"></a>

## Return Value

A valid [MPSCNNConvolution](../mpscnnconvolution.md) object or `nil`, if failure.

## See Also

### Initializers

- [initWithCoder:device:](init%28coder_device_%29.md)
- [MPSCNNConvolutionDescriptor](../mpscnnconvolutiondescriptor.md): A description of the attributes of a convolution kernel.
- [MPSCNNConvolutionFlags](../mpscnnconvolutionflags.md): Options used to control how kernel weights are stored and used in the CNN kernels
- [initWithDevice:weights:](init%28device_weights_%29.md)
- [MPSCNNConvolutionDataSource](../mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.
