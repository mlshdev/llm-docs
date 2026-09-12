> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsoundclassifier/modelparameters-swift.struct/featureextractortype/vggish(revision:)](https://developer.apple.com/documentation/createml/mlsoundclassifier/modelparameters-swift.struct/featureextractortype/vggish(revision:))

# MLSoundClassifier.ModelParameters.FeatureExtractorType.vggish(revision:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · visionOS 1.0+

Represents the VGGish feature extractor, which is compatible with older OS versions.

## Declaration

```swift
case vggish(revision: Int = 1)
```

## Parameters

- `revision`: A version of the VGGish feature extractor.

<a id="discussion"></a>

## Discussion

The case uses the newest version if you don’t provide an associated value for `revision`.

## See Also

### Designating a feature extractor

- [MLSoundClassifier.ModelParameters.FeatureExtractorType.audioFeaturePrint(type:revision:)](audiofeatureprint%28type_revision_%29.md): Represents the Audio Feature Print extractor.
- [MLSoundClassifier.ModelParameters.FeaturePrintType](../featureprinttype.md): The type options for an Audio Feature Print feature extractor.
