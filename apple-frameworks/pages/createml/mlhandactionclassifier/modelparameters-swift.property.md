> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandactionclassifier/modelparameters-swift.property](https://developer.apple.com/documentation/createml/mlhandactionclassifier/modelparameters-swift.property)

# modelParameters

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

The hand action model’s configuration parameters.

## Declaration

```swift
let modelParameters: MLHandActionClassifier.ModelParameters
```

<a id="discussion"></a>

## Discussion

The property reflects the model parameters you provide to one of these methods that train a hand action classifier:

- 

<a id="doccomapplecreatemldocumentationCreateMLMLHandActionClassifiertraintrainingDataparameterssessionParameters"></a>

## \`\`doc://com.apple.createml/documentation/CreateML/MLHandActionClassifier/train(trainingData:parameters:sessionParameters:)\`\`

[makeTrainingSession(trainingData:parameters:sessionParameters:)](maketrainingsession%28trainingdata_parameters_sessionparameters_%29.md)

- [init(trainingData:parameters:)](init%28trainingdata_parameters_%29.md)

## See Also

### Inspecting a hand action classifier model

- [model](model.md): The underlying Core ML model of the hand action classifier stored in memory.
