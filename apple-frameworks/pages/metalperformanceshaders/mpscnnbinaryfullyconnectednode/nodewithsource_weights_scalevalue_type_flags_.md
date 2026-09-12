> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnbinaryfullyconnectednode/nodewithsource:weights:scalevalue:type:flags:](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnbinaryfullyconnectednode/nodewithsource:weights:scalevalue:type:flags:)

# nodeWithSource:weights:scaleValue:type:flags:

**Interface language:** Objective-C

**Framework:** Metal Performance Shaders  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
+ (instancetype) nodeWithSource:(MPSNNImageNode *) sourceNode weights:(id<MPSCNNConvolutionDataSource>) weights scaleValue:(float) scaleValue type:(MPSCNNBinaryConvolutionType) type flags:(MPSCNNBinaryConvolutionFlags) flags;
```

## See Also

### Type Methods

- [nodeWithSource:weights:outputBiasTerms:outputScaleTerms:inputBiasTerms:inputScaleTerms:type:flags:](nodewithsource_weights_outputbiasterms_outputscaleterms_inputbiasterms_inputscaleterms_type_flags_.md)
