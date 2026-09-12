> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/modelcompatibilityerror/incompatiblemetadatakey(name:)](https://developer.apple.com/documentation/createmlcomponents/modelcompatibilityerror/incompatiblemetadatakey(name:))

# ModelCompatibilityError.incompatibleMetadataKey(name:)

**Framework:** Create ML Components  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

An error that indicates that the metadata key has the wrong type.

## Declaration

```swift
case incompatibleMetadataKey(name: String)
```

## See Also

### Analyzing the error

- [ModelCompatibilityError.incompatibleInputCount(expected:actual:)](incompatibleinputcount%28expected_actual_%29.md): An error that indicates that the number of model inputs is wrong.
- [ModelCompatibilityError.incompatibleInputDataFormat(expected:actual:)](incompatibleinputdataformat%28expected_actual_%29.md): An error that indicates that the input data has the wrong format.
- [ModelCompatibilityError.incompatibleInputMultiArrayDataType(\_:)](incompatibleinputmultiarraydatatype%28__%29.md): An error that indicates that the input multi array has the wrong value type.
- [ModelCompatibilityError.incompatibleLabelType](incompatiblelabeltype.md): An error that indicates that the label has the wrong type.
- [ModelCompatibilityError.incompatibleOutputCount(expected:actual:)](incompatibleoutputcount%28expected_actual_%29.md): An error that indicates that the number of model outputs is wrong.
- [ModelCompatibilityError.incompatibleOutputDataFormat(expected:actual:)](incompatibleoutputdataformat%28expected_actual_%29.md): An error that indicates that the output data has the wrong format.
- [ModelCompatibilityError.missingInput(name:)](missinginput%28name_%29.md): An error that indicates that the input is missing from the model.
- [ModelCompatibilityError.missingLabel](missinglabel.md): An error that indicates that the label output is missing from the model.
- [ModelCompatibilityError.missingLabelProbabilities](missinglabelprobabilities.md): An error that indicates that the label probabilities output is missing from the model.
- [ModelCompatibilityError.missingOutput(name:)](missingoutput%28name_%29.md): An error that indicates that the output is missing from the model.
- [ModelCompatibilityError.missingPredictedFeature](missingpredictedfeature.md): An error that indicates that the regressor model output is missing.
