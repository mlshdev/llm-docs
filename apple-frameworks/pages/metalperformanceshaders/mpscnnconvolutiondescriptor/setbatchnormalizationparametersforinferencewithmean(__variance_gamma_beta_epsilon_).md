> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnconvolutiondescriptor/setbatchnormalizationparametersforinferencewithmean(_:variance:gamma:beta:epsilon:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolutiondescriptor/setbatchnormalizationparametersforinferencewithmean(_:variance:gamma:beta:epsilon:))

# setBatchNormalizationParametersForInferenceWithMean(\_:variance:gamma:beta:epsilon:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
func setBatchNormalizationParametersForInferenceWithMean(_ mean: UnsafePointer<Float>?, variance: UnsafePointer<Float>?, gamma: UnsafePointer<Float>?, beta: UnsafePointer<Float>?, epsilon: Float)
```

## See Also

### Instance Methods

- [encode(with:)](encode%28with_%29.md)
- [setNeuronToPReLUWithParametersA(\_:)](setneurontopreluwithparametersa%28__%29.md): Deprecated.
- [setNeuronType(\_:parameterA:parameterB:)](setneurontype%28__parametera_parameterb_%29.md): Deprecated.

# setBatchNormalizationParametersForInferenceWithMean:variance:gamma:beta:epsilon: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) setBatchNormalizationParametersForInferenceWithMean:(const float *) mean variance:(const float *) variance gamma:(const float *) gamma beta:(const float *) beta epsilon:(const float) epsilon;
```

## See Also

### Instance Methods

- [encodeWithCoder:](encode%28with_%29.md)
- [setNeuronToPReLUWithParametersA:](setneurontopreluwithparametersa%28__%29.md): Deprecated.
- [setNeuronType:parameterA:parameterB:](setneurontype%28__parametera_parameterb_%29.md): Deprecated.
