> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactionclassifier/datasource/labeleddirectories(at:)](https://developer.apple.com/documentation/createml/mlactionclassifier/datasource/labeleddirectories(at:))

# MLActionClassifier.DataSource.labeledDirectories(at:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** macOS 11.0+

The location of a folder with subfolders each of which contain sample videos of an action.

## Declaration

```swift
case labeledDirectories(at: URL)
```

<a id="discussion"></a>

## Discussion

The action classifier task uses each subfolder’s name as the label for an action.

## See Also

### Creating a data source

- [MLActionClassifier.DataSource.labeledFiles(at:)](labeledfiles%28at_%29.md): The location of a folder that contains video files whose names you use to label corresponding actions.
- [MLActionClassifier.DataSource.directoryWithVideosAndAnnotation(at:annotationFile:videoColumn:labelColumn:startTimeColumn:endTimeColumn:)](directorywithvideosandannotation%28at_annotationfile_videocolumn_labelcolumn_starttimecolumn_endtimecolumn_%29.md): The location of a directory of video files, and the location of an action annotation file.
- [MLActionClassifier.DataSource.labeledVideoData(table:videoColumn:labelColumn:startTimeColumn:endTimeColumn:)](labeledvideodata%28table_videocolumn_labelcolumn_starttimecolumn_endtimecolumn_%29.md): Deprecated. A data table that contains the locations of the video files and the action annotations.
