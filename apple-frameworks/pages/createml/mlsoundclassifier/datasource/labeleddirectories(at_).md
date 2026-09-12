> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsoundclassifier/datasource/labeleddirectories(at:)](https://developer.apple.com/documentation/createml/mlsoundclassifier/datasource/labeleddirectories(at:))

# MLSoundClassifier.DataSource.labeledDirectories(at:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · visionOS 1.0+

Creates a data source from a folder with subfolders that each contain audio files.

## Declaration

```swift
case labeledDirectories(at: URL)
```

## Parameters

- `at`: URL : The URL to a folder in the file system that contains folders of audio files. The data source uses the name of each folder as the classification label for the audio content it contains.

<a id="discussion"></a>

## Discussion

This data source uses each subdirectory’s name as the label for the audio files contained within them. For example, for a directory that contains a `Laughter` subdirectory, the data source applies the label `"Laughter"` to each audio file in that subdirectory.

```swift
// Build a URL to the directory that contains the labeled directories.
let home = FileManager.default.homeDirectoryForCurrentUser
let documents = home.appendingPathComponent("Documents")
let labeledDirectories = documents.appendingPathComponent("Labeled Audio Directories")

// Labeled Audio Directories/
// ├── Laughter/
// │ ├── Laughter1.m4a
// │ ├── 20190229164259.m4a
// │ ├── .
// │ ├── .
// │ ├── .
// │ └── AudienceLaughing.mp3
// └── Applause
//   ├── misc-clapping.mp3
//   ├── 20190229164211.m4a
//   ├── .
//   ├── .
//   ├── .
//   └── AudienceClapping.m4a

// Create a data source from the labeled directories.
let soundDataSource = MLSoundClassifier.DataSource.labeledDirectories(at: labeledDirectories)

// Train a sound classifier with the data source.
let soundClassifier = try MLSoundClassifier(trainingData: soundDataSource)
```

## See Also

### Creating a data source

- [MLSoundClassifier.DataSource.labeledFiles(at:)](labeledfiles%28at_%29.md): Creates a data source from a folder that contains audio files, each named after the sound they represent.
- [MLSoundClassifier.DataSource.filesByLabel(\_:)](filesbylabel%28__%29.md): Creates a data source from a dictionary.
- [MLSoundClassifier.DataSource.features(table:featureColumn:labelColumn:parameters:)](features%28table_featurecolumn_labelcolumn_parameters_%29.md): Deprecated. Creates a data source from a data table of audio features.
- [MLSoundClassifier.DataSource.featuresDataFrame(\_:featureColumn:labelColumn:parameters:)](featuresdataframe%28__featurecolumn_labelcolumn_parameters_%29.md): Creates a data source from a data frame of audio features.
- [MLSoundClassifier.FeatureExtractionParameters](../featureextractionparameters.md): Parameters that affect the process of extracting sound features from audio files.
