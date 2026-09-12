> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlimageclassifier/modelparameters-swift.struct/classifiertype/logisticregressor](https://developer.apple.com/documentation/createml/mlimageclassifier/modelparameters-swift.struct/classifiertype/logisticregressor)

# MLImageClassifier.ModelParameters.ClassifierType.logisticRegressor

**Framework:** Create ML  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · visionOS 1.0+

Logistic regression is a statistical model that classifies input feature vector into different categories.

## Declaration

```swift
case logisticRegressor
```

## See Also

### Designating an algorithm’s classifier

- [MLImageClassifier.ModelParameters.ClassifierType.multilayerPerceptron(layerSizes:)](multilayerperceptron%28layersizes_%29.md): Multilayer perceptron, layerSizes holds a list of positive integers that represent the number of hidden units in each layer. An additional fully connected layer with a Softmax activation output will be added that maps to probabilities of sound categories.
