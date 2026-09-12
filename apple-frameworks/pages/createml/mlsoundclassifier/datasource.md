> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsoundclassifier/datasource](https://developer.apple.com/documentation/createml/mlsoundclassifier/datasource)

# MLSoundClassifier.DataSource

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · visionOS 1.0+

A representation of a sound-classifier dataset located in the file system or in a data table.

## Declaration

```swift
enum DataSource
```

<a id="overview"></a>

## Overview

Use a data source to represent a dataset for training, validating, or testing a sound classifier.

## Topics

### Creating a data source

- [MLSoundClassifier.DataSource.labeledDirectories(at:)](datasource/labeleddirectories%28at_%29.md): Creates a data source from a folder with subfolders that each contain audio files.
- [MLSoundClassifier.DataSource.labeledFiles(at:)](datasource/labeledfiles%28at_%29.md): Creates a data source from a folder that contains audio files, each named after the sound they represent.
- [MLSoundClassifier.DataSource.filesByLabel(\_:)](datasource/filesbylabel%28__%29.md): Creates a data source from a dictionary.
- [MLSoundClassifier.DataSource.features(table:featureColumn:labelColumn:parameters:)](datasource/features%28table_featurecolumn_labelcolumn_parameters_%29.md): Deprecated. Creates a data source from a data table of audio features.
- [MLSoundClassifier.DataSource.featuresDataFrame(\_:featureColumn:labelColumn:parameters:)](datasource/featuresdataframe%28__featurecolumn_labelcolumn_parameters_%29.md): Creates a data source from a data frame of audio features.
- [MLSoundClassifier.FeatureExtractionParameters](featureextractionparameters.md): Parameters that affect the process of extracting sound features from audio files.

### Retrieving the data

- [labeledSounds()](datasource/labeledsounds%28%29.md): Generates a dictionary of the data source’s labeled audio files.

### Partitioning the data

- [stratifiedSplit(proportions:seed:)](datasource/stratifiedsplit%28proportions_seed_%29.md): Generates an array of labeled audio dictionaries by splitting the data source into strata.
- [stratifiedSplit(proportions:generator:)](datasource/stratifiedsplit%28proportions_generator_%29.md): Generates an array of labeled audio dictionaries by splitting the data source into strata using the random-number generator.

## See Also

### Supporting types

- [MLSoundClassifier.ModelParameters](modelparameters-swift.struct.md): Parameters that affect the process of training a sound-classifier model.
