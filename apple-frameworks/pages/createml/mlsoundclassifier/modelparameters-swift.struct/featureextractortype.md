> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsoundclassifier/modelparameters-swift.struct/featureextractortype](https://developer.apple.com/documentation/createml/mlsoundclassifier/modelparameters-swift.struct/featureextractortype)

# MLSoundClassifier.ModelParameters.FeatureExtractorType

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · visionOS 1.0+

The feature-extractor options for a sound-classifier training algorithm.

## Declaration

```swift
enum FeatureExtractorType
```

<a id="overview"></a>

## Overview

Use the [MLSoundClassifier.ModelParameters.FeatureExtractorType.audioFeaturePrint(type:revision:)](featureextractortype/audiofeatureprint%28type_revision_%29.md) feature extractor to create a model with the following advantages over `vggish`:

- More accurate predictions
- Lower latency
- Smaller model file size
- Less training time

Use [MLSoundClassifier.ModelParameters.FeatureExtractorType.vggish(revision:)](featureextractortype/vggish%28revision_%29.md) to support older OS versions.

## Topics

### Designating a feature extractor

- [MLSoundClassifier.ModelParameters.FeatureExtractorType.audioFeaturePrint(type:revision:)](featureextractortype/audiofeatureprint%28type_revision_%29.md): Represents the Audio Feature Print extractor.
- [MLSoundClassifier.ModelParameters.FeaturePrintType](featureprinttype.md): The type options for an Audio Feature Print feature extractor.
- [MLSoundClassifier.ModelParameters.FeatureExtractorType.vggish(revision:)](featureextractortype/vggish%28revision_%29.md): Represents the VGGish feature extractor, which is compatible with older OS versions.

### Describing a feature extractor

- [description](featureextractortype/description.md): A text representation of the feature-extractor type.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [MLSoundClassifier.ModelParameters.ValidationData](validationdata.md): The source of a validation dataset for a sound classifier.
- [MLSoundClassifier.ModelParameters.ModelAlgorithmType](modelalgorithmtype.md): The algorithm options to train a sound classifier.
- [MLSoundClassifier.ModelParameters.ClassifierType](classifiertype.md): The classifier options for a sound classifier training algorithm.
- [MLSoundClassifier.ModelParameters.FeaturePrintType](featureprinttype.md): The type options for an Audio Feature Print feature extractor.
