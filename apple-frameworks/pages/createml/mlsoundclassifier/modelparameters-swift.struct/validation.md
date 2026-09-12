> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsoundclassifier/modelparameters-swift.struct/validation](https://developer.apple.com/documentation/createml/mlsoundclassifier/modelparameters-swift.struct/validation)

# validation

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · visionOS 1.0+

The sound classifier’s validation dataset.

## Declaration

```swift
var validation: MLSoundClassifier.ModelParameters.ValidationData
```

## See Also

### Accessing the training parameters

- [maxIterations](maxiterations.md): The largest number of iterations the training session can use.
- [overlapFactor](overlapfactor.md): The proportion of overlap that the training session uses to analyze two consecutive windows in the audio data.
- [algorithm](algorithm.md): The algorithm the training session uses to train the sound classifier.
- [featureExtractionTimeWindowSize](featureextractiontimewindowsize.md): A time duration, in seconds, the training session uses for each audio sample it reads from an audio file in a dataset.
