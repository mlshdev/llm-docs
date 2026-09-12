> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsoundclassifier/modelparameters-swift.struct/init(validation:maxiterations:overlapfactor:)](https://developer.apple.com/documentation/createml/mlsoundclassifier/modelparameters-swift.struct/init(validation:maxiterations:overlapfactor:))

# init(validation:maxIterations:overlapFactor:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · visionOS 1.0+

Creates a new set of training parameters for a sound classifier with a validation dataset.

## Declaration

```swift
init(validation: MLSoundClassifier.ModelParameters.ValidationData = .split(strategy: .automatic), maxIterations: Int = 25, overlapFactor: Double = 0.5)
```

## Parameters

- `validation`: A validation dataset represented by an [MLSoundClassifier.ModelParameters.ValidationData](validationdata.md) instance.
- `maxIterations`: The largest number of iterations the training session can use to train the sound classifier.
- `overlapFactor`: A proportion of overlap the training session uses to analyze two consecutive windows in the audio data. The proportion must be in the range `[0.0, 1.0)`. Higher proportions generate more training data, but also increases the training time.

  The default value is `0.5`, which represents a 50% overlap.

## See Also

### Creating parameters

- [init(validation:maxIterations:overlapFactor:algorithm:)](init%28validation_maxiterations_overlapfactor_algorithm_%29.md): Creates a new set of training parameters for a sound classifier with a validation dataset and a training algorithm.
- [init(validation:maxIterations:overlapFactor:algorithm:featureExtractionTimeWindowSize:)](init%28validation_maxiterations_overlapfactor_algorithm_featureextractiontimewindowsize_%29.md): Creates a new set of training parameters for a sound classifier with a validation dataset, a training algorithm, and a time-window size.
