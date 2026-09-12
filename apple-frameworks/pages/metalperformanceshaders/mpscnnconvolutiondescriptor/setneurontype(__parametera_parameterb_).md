> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnconvolutiondescriptor/setneurontype(_:parametera:parameterb:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolutiondescriptor/setneurontype(_:parametera:parameterb:))

# setNeuronType(\_:parameterA:parameterB:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 11.3) · iPadOS 11.0+ (deprecated in 11.3) · Mac Catalyst 11.0+ (deprecated in 11.3) · macOS 10.13+ (deprecated in 10.13.4) · tvOS 11.0+ (deprecated in 11.3) · visionOS 1.0+ (deprecated in 1.0)

## Declaration

```swift
func setNeuronType(_ neuronType: MPSCNNNeuronType, parameterA: Float, parameterB: Float)
```

## See Also

### Instance Methods

- [encode(with:)](encode%28with_%29.md)
- [setBatchNormalizationParametersForInferenceWithMean(\_:variance:gamma:beta:epsilon:)](setbatchnormalizationparametersforinferencewithmean%28__variance_gamma_beta_epsilon_%29.md)
- [setNeuronToPReLUWithParametersA(\_:)](setneurontopreluwithparametersa%28__%29.md): Deprecated.

# setNeuronType:parameterA:parameterB: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 11.3) · iPadOS 11.0+ (deprecated in 11.3) · macOS 10.13+ (deprecated in 10.13.4) · tvOS 11.0+ (deprecated in 11.3) · visionOS 1.0+ (deprecated in 1.0)

## Declaration

```objectivec
- (void) setNeuronType:(MPSCNNNeuronType) neuronType parameterA:(float) parameterA parameterB:(float) parameterB;
```

## See Also

### Instance Methods

- [encodeWithCoder:](encode%28with_%29.md)
- [setBatchNormalizationParametersForInferenceWithMean:variance:gamma:beta:epsilon:](setbatchnormalizationparametersforinferencewithmean%28__variance_gamma_beta_epsilon_%29.md)
- [setNeuronToPReLUWithParametersA:](setneurontopreluwithparametersa%28__%29.md): Deprecated.
