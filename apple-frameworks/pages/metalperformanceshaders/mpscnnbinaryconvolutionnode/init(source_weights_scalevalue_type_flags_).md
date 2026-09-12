> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnbinaryconvolutionnode/init(source:weights:scalevalue:type:flags:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnbinaryconvolutionnode/init(source:weights:scalevalue:type:flags:))

# init(source:weights:scaleValue:type:flags:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
init(source sourceNode: MPSNNImageNode, weights: any MPSCNNConvolutionDataSource, scaleValue: Float, type: MPSCNNBinaryConvolutionType, flags: MPSCNNBinaryConvolutionFlags)
```

## See Also

### Initializers

- [MPSCNNConvolutionDataSource](../mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.
- [MPSCNNBinaryConvolutionType](../mpscnnbinaryconvolutiontype.md): Options that defines what operations are used to perform binary convolution.
- [MPSCNNBinaryConvolutionFlags](../mpscnnbinaryconvolutionflags.md): Options used to control binary convolution kernels.
- [init(source:weights:outputBiasTerms:outputScaleTerms:inputBiasTerms:inputScaleTerms:type:flags:)](init%28source_weights_outputbiasterms_outputscaleterms_inputbiasterms_inputscaleterms_type_flags_%29.md)

# initWithSource:weights:scaleValue:type:flags: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) initWithSource:(MPSNNImageNode *) sourceNode weights:(id<MPSCNNConvolutionDataSource>) weights scaleValue:(float) scaleValue type:(MPSCNNBinaryConvolutionType) type flags:(MPSCNNBinaryConvolutionFlags) flags;
```

## See Also

### Initializers

- [MPSCNNConvolutionDataSource](../mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.
- [MPSCNNBinaryConvolutionType](../mpscnnbinaryconvolutiontype.md): Options that defines what operations are used to perform binary convolution.
- [MPSCNNBinaryConvolutionFlags](../mpscnnbinaryconvolutionflags.md): Options used to control binary convolution kernels.
- [initWithSource:weights:outputBiasTerms:outputScaleTerms:inputBiasTerms:inputScaleTerms:type:flags:](init%28source_weights_outputbiasterms_outputscaleterms_inputbiasterms_inputscaleterms_type_flags_%29.md)
