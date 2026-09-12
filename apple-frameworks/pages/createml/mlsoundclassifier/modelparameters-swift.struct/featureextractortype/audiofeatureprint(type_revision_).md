> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsoundclassifier/modelparameters-swift.struct/featureextractortype/audiofeatureprint(type:revision:)](https://developer.apple.com/documentation/createml/mlsoundclassifier/modelparameters-swift.struct/featureextractortype/audiofeatureprint(type:revision:))

# MLSoundClassifier.ModelParameters.FeatureExtractorType.audioFeaturePrint(type:revision:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Represents the Audio Feature Print extractor.

## Declaration

```swift
case audioFeaturePrint(type: MLSoundClassifier.ModelParameters.FeaturePrintType = .sound, revision: Int = 1)
```

## Parameters

- `type`: An Audio Feature Print extractor type.
- `revision`: A version of the extractor you pass to `type`.

<a id="discussion"></a>

## Discussion

The case uses the newest version of [MLSoundClassifier.ModelParameters.FeaturePrintType.sound](../featureprinttype/sound.md) if you don’t provide associated values for `type` and `revision`.

## See Also

### Designating a feature extractor

- [MLSoundClassifier.ModelParameters.FeaturePrintType](../featureprinttype.md): The type options for an Audio Feature Print feature extractor.
- [MLSoundClassifier.ModelParameters.FeatureExtractorType.vggish(revision:)](vggish%28revision_%29.md): Represents the VGGish feature extractor, which is compatible with older OS versions.
