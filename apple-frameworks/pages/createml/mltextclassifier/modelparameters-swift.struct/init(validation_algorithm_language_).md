> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mltextclassifier/modelparameters-swift.struct/init(validation:algorithm:language:)](https://developer.apple.com/documentation/createml/mltextclassifier/modelparameters-swift.struct/init(validation:algorithm:language:))

# init(validation:algorithm:language:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · visionOS 1.0+

Creates model parameters for a text classifier with the specified validation data, algorithm, and language.

## Declaration

```swift
init(validation: MLTextClassifier.ModelParameters.ValidationData = .split(strategy: .automatic), algorithm: MLTextClassifier.ModelAlgorithmType = .maxEnt(revision: 1), language: NLLanguage? = nil)
```

## Parameters

- `validation`: The validation data to use during text classifier training.
- `algorithm`: An algorithm type for the classifier.
- `language`: The language of the text to classify.

## See Also

### Creating parameters

- [NLLanguage](../../../naturallanguage/nllanguage.md): The languages that the Natural Language framework supports.
- [MLTextClassifier.ModelAlgorithmType](../modelalgorithmtype.md): The type of algorithm that a text classifier uses.
- [MLTextClassifier.ModelParameters.ValidationData](validationdata-swift.enum.md): The validation data that a text classifier uses.
