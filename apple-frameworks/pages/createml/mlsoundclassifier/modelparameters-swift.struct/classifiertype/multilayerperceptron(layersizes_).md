> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsoundclassifier/modelparameters-swift.struct/classifiertype/multilayerperceptron(layersizes:)](https://developer.apple.com/documentation/createml/mlsoundclassifier/modelparameters-swift.struct/classifiertype/multilayerperceptron(layersizes:))

# MLSoundClassifier.ModelParameters.ClassifierType.multilayerPerceptron(layerSizes:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** macOS 11.0+

A neural network model that uses three or more layers to classify an input into a category.

## Declaration

```swift
case multilayerPerceptron(layerSizes: [Int])
```

## Parameters

- `layerSizes`: An array of positive integers. Each element represents the number of units for that hidden layer.

<a id="discussion"></a>

## Discussion

The neural network has a minimum of three layers:

- An input layer
- One or more hidden layers
- An output layer

The number of integers in your `layerSizes` array determines the number of hidden layers in the neural network. Each integer in the array determines the size of that hidden layer.

## See Also

### Designating an algorithm’s classifier

- [MLSoundClassifier.ModelParameters.ClassifierType.logisticRegressor](logisticregressor.md): A statistical model that uses logistic regression to classify an input vector into a category.
