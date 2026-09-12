> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactionclassifier/modelparameters-swift.struct/algorithm](https://developer.apple.com/documentation/createml/mlactionclassifier/modelparameters-swift.struct/algorithm)

# algorithm

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The algorithm the training session uses to train the action classifier.

## Declaration

```swift
var algorithm: MLActionClassifier.ModelParameters.ModelAlgorithmType
```

## See Also

### Accessing the training parameters

- [maximumIterations](maximumiterations.md): The largest number of training iterations the training session can use.
- [batchSize](batchsize.md): The number of videos the training session uses for each of its training iterations.
- [targetFrameRate](targetframerate.md): The number of frames the training session uses per second of video to train an action classifier.
- [predictionWindowSize](predictionwindowsize.md): The number of frames the training session uses to train an action classifier.
- [augmentationOptions](augmentationoptions.md): The variations the training session uses to generate more variety in the training dataset.
- [validation](validation.md): The action classifier’s validation dataset.
