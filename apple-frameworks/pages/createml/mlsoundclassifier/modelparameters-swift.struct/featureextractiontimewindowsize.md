> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsoundclassifier/modelparameters-swift.struct/featureextractiontimewindowsize](https://developer.apple.com/documentation/createml/mlsoundclassifier/modelparameters-swift.struct/featureextractiontimewindowsize)

# featureExtractionTimeWindowSize

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

A time duration, in seconds, the training session uses for each audio sample it reads from an audio file in a dataset.

## Declaration

```swift
var featureExtractionTimeWindowSize: TimeInterval { get set }
```

<a id="discussion"></a>

## Discussion

The time-window size value defaults to `0.975` seconds and must be in the range `[0.5, 15.0]`.

Training sessions that use [MLSoundClassifier.ModelParameters.FeatureExtractorType.vggish(revision:)](featureextractortype/vggish%28revision_%29.md) ignore this value and always use a time-window size of `0.975` seconds.

## See Also

### Accessing the training parameters

- [validation](validation.md): The sound classifier’s validation dataset.
- [maxIterations](maxiterations.md): The largest number of iterations the training session can use.
- [overlapFactor](overlapfactor.md): The proportion of overlap that the training session uses to analyze two consecutive windows in the audio data.
- [algorithm](algorithm.md): The algorithm the training session uses to train the sound classifier.
