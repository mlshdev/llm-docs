> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsoundclassifier/modelparameters-swift.struct/algorithm](https://developer.apple.com/documentation/createml/mlsoundclassifier/modelparameters-swift.struct/algorithm)

# algorithm

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · visionOS 1.0+

The algorithm the training session uses to train the sound classifier.

## Declaration

```swift
var algorithm: MLSoundClassifier.ModelParameters.ModelAlgorithmType { get set }
```

## See Also

### Accessing the training parameters

- [validation](validation.md): The sound classifier’s validation dataset.
- [maxIterations](maxiterations.md): The largest number of iterations the training session can use.
- [overlapFactor](overlapfactor.md): The proportion of overlap that the training session uses to analyze two consecutive windows in the audio data.
- [featureExtractionTimeWindowSize](featureextractiontimewindowsize.md): A time duration, in seconds, the training session uses for each audio sample it reads from an audio file in a dataset.
