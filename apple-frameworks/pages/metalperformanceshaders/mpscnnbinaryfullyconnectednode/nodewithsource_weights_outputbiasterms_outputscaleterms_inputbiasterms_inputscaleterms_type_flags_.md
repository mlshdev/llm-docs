> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnbinaryfullyconnectednode/nodewithsource:weights:outputbiasterms:outputscaleterms:inputbiasterms:inputscaleterms:type:flags:](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnbinaryfullyconnectednode/nodewithsource:weights:outputbiasterms:outputscaleterms:inputbiasterms:inputscaleterms:type:flags:)

# nodeWithSource:weights:outputBiasTerms:outputScaleTerms:inputBiasTerms:inputScaleTerms:type:flags:

**Interface language:** Objective-C

**Framework:** Metal Performance Shaders  
**Kind:** Type Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```objectivec
+ (instancetype) nodeWithSource:(MPSNNImageNode *) sourceNode weights:(id<MPSCNNConvolutionDataSource>) weights outputBiasTerms:(const float *) outputBiasTerms outputScaleTerms:(const float *) outputScaleTerms inputBiasTerms:(const float *) inputBiasTerms inputScaleTerms:(const float *) inputScaleTerms type:(MPSCNNBinaryConvolutionType) type flags:(MPSCNNBinaryConvolutionFlags) flags;
```

## See Also

### Type Methods

- [nodeWithSource:weights:scaleValue:type:flags:](nodewithsource_weights_scalevalue_type_flags_.md)
