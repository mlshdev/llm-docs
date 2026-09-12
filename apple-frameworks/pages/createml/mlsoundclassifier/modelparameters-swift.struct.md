> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsoundclassifier/modelparameters-swift.struct](https://developer.apple.com/documentation/createml/mlsoundclassifier/modelparameters-swift.struct)

# MLSoundClassifier.ModelParameters

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · visionOS 1.0+

Parameters that affect the process of training a sound-classifier model.

## Declaration

```swift
struct ModelParameters
```

<a id="overview"></a>

## Overview

By default, a sound-classifier training session’s transfer-learning algorithm uses the [MLSoundClassifier.ModelParameters.FeatureExtractorType.audioFeaturePrint(type:revision:)](modelparameters-swift.struct/featureextractortype/audiofeatureprint%28type_revision_%29.md) feature extractor. See [MLSoundClassifier.ModelParameters.FeatureExtractorType](modelparameters-swift.struct/featureextractortype.md) for more information.

## Topics

### Creating parameters

- [init(validation:maxIterations:overlapFactor:)](modelparameters-swift.struct/init%28validation_maxiterations_overlapfactor_%29.md): Creates a new set of training parameters for a sound classifier with a validation dataset.
- [init(validation:maxIterations:overlapFactor:algorithm:)](modelparameters-swift.struct/init%28validation_maxiterations_overlapfactor_algorithm_%29.md): Creates a new set of training parameters for a sound classifier with a validation dataset and a training algorithm.
- [init(validation:maxIterations:overlapFactor:algorithm:featureExtractionTimeWindowSize:)](modelparameters-swift.struct/init%28validation_maxiterations_overlapfactor_algorithm_featureextractiontimewindowsize_%29.md): Creates a new set of training parameters for a sound classifier with a validation dataset, a training algorithm, and a time-window size.

### Accessing the training parameters

- [validation](modelparameters-swift.struct/validation.md): The sound classifier’s validation dataset.
- [maxIterations](modelparameters-swift.struct/maxiterations.md): The largest number of iterations the training session can use.
- [overlapFactor](modelparameters-swift.struct/overlapfactor.md): The proportion of overlap that the training session uses to analyze two consecutive windows in the audio data.
- [algorithm](modelparameters-swift.struct/algorithm.md): The algorithm the training session uses to train the sound classifier.
- [featureExtractionTimeWindowSize](modelparameters-swift.struct/featureextractiontimewindowsize.md): A time duration, in seconds, the training session uses for each audio sample it reads from an audio file in a dataset.

### Describing parameters

- [description](modelparameters-swift.struct/description.md): A text representation of the model parameters.
- [debugDescription](modelparameters-swift.struct/debugdescription.md): A text representation of the model parameters that’s suitable for output during debugging.
- [playgroundDescription](modelparameters-swift.struct/playgrounddescription.md): A description of the parameters in a playground.

### Supporting types

- [MLSoundClassifier.ModelParameters.ValidationData](modelparameters-swift.struct/validationdata.md): The source of a validation dataset for a sound classifier.
- [MLSoundClassifier.ModelParameters.ModelAlgorithmType](modelparameters-swift.struct/modelalgorithmtype.md): The algorithm options to train a sound classifier.
- [MLSoundClassifier.ModelParameters.ClassifierType](modelparameters-swift.struct/classifiertype.md): The classifier options for a sound classifier training algorithm.
- [MLSoundClassifier.ModelParameters.FeatureExtractorType](modelparameters-swift.struct/featureextractortype.md): The feature-extractor options for a sound-classifier training algorithm.
- [MLSoundClassifier.ModelParameters.FeaturePrintType](modelparameters-swift.struct/featureprinttype.md): The type options for an Audio Feature Print feature extractor.

### Default Implementations

- [CustomDebugStringConvertible Implementations](modelparameters-swift.struct/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](modelparameters-swift.struct/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](modelparameters-swift.struct/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomPlaygroundDisplayConvertible](https://developer.apple.com/documentation/swift/customplaygrounddisplayconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Supporting types

- [MLSoundClassifier.DataSource](datasource.md): A representation of a sound-classifier dataset located in the file system or in a data table.
