> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandactionclassifier/modelparameters-swift.struct/validation](https://developer.apple.com/documentation/createml/mlhandactionclassifier/modelparameters-swift.struct/validation)

# validation

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

A dataset the hand action classifier task uses to evaluate the model that’s distinct from the training dataset.

## Declaration

```swift
var validation: MLHandActionClassifier.ModelParameters.ValidationData
```

<a id="discussion"></a>

## Discussion

The task produces [validationMetrics](../validationmetrics.md) by evaluating the model with the [validation](validation.md) dataset.

## See Also

### Accessing hand action training parameters

- [maximumIterations](maximumiterations.md): The largest number of training iterations you allow the training session to use.
- [batchSize](batchsize.md): The number of videos the model training session uses for each training iteration.
- [targetFrameRate](targetframerate.md): The number of video frames per second the hand action classifier model expects as its input at runtime.
- [predictionWindowSize](predictionwindowsize.md): The number of video frames the model training session uses to train a hand action classifier.
- [algorithm](algorithm.md): The algorithm the training session uses to create the hand action classifier.
- [augmentationOptions](augmentationoptions.md): The variations the training session uses to add more variety to its training dataset.
