> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsoundclassifier/datasource/featuresdataframe(_:featurecolumn:labelcolumn:parameters:)](https://developer.apple.com/documentation/createml/mlsoundclassifier/datasource/featuresdataframe(_:featurecolumn:labelcolumn:parameters:))

# MLSoundClassifier.DataSource.featuresDataFrame(\_:featureColumn:labelColumn:parameters:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Creates a data source from a data frame of audio features.

## Declaration

```swift
case featuresDataFrame(DataFrame, featureColumn: String = __Defaults.featureColumnName, labelColumn: String = __Defaults.labelColumnName, parameters: MLSoundClassifier.FeatureExtractionParameters = FeatureExtractionParameters())
```

## Parameters

- `dataFrame`: A data frame that contains labeled audio data.
- `featureColumn`: The name of the column that contains the audio features.
- `labelColumn`: The name of the column that contains the audio labels.
- `parameters`: An [MLSoundClassifier.FeatureExtractionParameters](../featureextractionparameters.md) instance you use to configure the feature-extraction phase.

<a id="discussion"></a>

## Discussion

Use [extractFeatures(trainingData:parameters:sessionParameters:)](../extractfeatures%28trainingdata_parameters_sessionparameters_%29.md) to create a [DataFrame](../../../tabulardata/dataframe.md) of audio features.

## See Also

### Creating a data source

- [MLSoundClassifier.DataSource.labeledDirectories(at:)](labeleddirectories%28at_%29.md): Creates a data source from a folder with subfolders that each contain audio files.
- [MLSoundClassifier.DataSource.labeledFiles(at:)](labeledfiles%28at_%29.md): Creates a data source from a folder that contains audio files, each named after the sound they represent.
- [MLSoundClassifier.DataSource.filesByLabel(\_:)](filesbylabel%28__%29.md): Creates a data source from a dictionary.
- [MLSoundClassifier.DataSource.features(table:featureColumn:labelColumn:parameters:)](features%28table_featurecolumn_labelcolumn_parameters_%29.md): Deprecated. Creates a data source from a data table of audio features.
- [MLSoundClassifier.FeatureExtractionParameters](../featureextractionparameters.md): Parameters that affect the process of extracting sound features from audio files.
