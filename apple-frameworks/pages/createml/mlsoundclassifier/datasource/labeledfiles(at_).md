> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsoundclassifier/datasource/labeledfiles(at:)](https://developer.apple.com/documentation/createml/mlsoundclassifier/datasource/labeledfiles(at:))

# MLSoundClassifier.DataSource.labeledFiles(at:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · visionOS 1.0+

Creates a data source from a folder that contains audio files, each named after the sound they represent.

## Declaration

```swift
case labeledFiles(at: URL)
```

## Parameters

- `at`: URL: The URL to a folder in the file system that contains audio files. The data source uses the first component of each audio file’s name as its classification label.

<a id="discussion"></a>

## Discussion

Create a sound classifier data source from a directory of audio files with the `labeledFiles` case. You must name each file with a sound classification label, followed by a period and an arbitrary string, ending with the file extension. For example, you can name a sound classifier’s training files as `Laughter.3.png`, `Applause.1.jpg`, `Applause.2.jpg`, and so on.

In this example, these audio file names give a sound classifier at least two class labels:

- `Laughter`
- `Applause`

## See Also

### Creating a data source

- [MLSoundClassifier.DataSource.labeledDirectories(at:)](labeleddirectories%28at_%29.md): Creates a data source from a folder with subfolders that each contain audio files.
- [MLSoundClassifier.DataSource.filesByLabel(\_:)](filesbylabel%28__%29.md): Creates a data source from a dictionary.
- [MLSoundClassifier.DataSource.features(table:featureColumn:labelColumn:parameters:)](features%28table_featurecolumn_labelcolumn_parameters_%29.md): Deprecated. Creates a data source from a data table of audio features.
- [MLSoundClassifier.DataSource.featuresDataFrame(\_:featureColumn:labelColumn:parameters:)](featuresdataframe%28__featurecolumn_labelcolumn_parameters_%29.md): Creates a data source from a data frame of audio features.
- [MLSoundClassifier.FeatureExtractionParameters](../featureextractionparameters.md): Parameters that affect the process of extracting sound features from audio files.
