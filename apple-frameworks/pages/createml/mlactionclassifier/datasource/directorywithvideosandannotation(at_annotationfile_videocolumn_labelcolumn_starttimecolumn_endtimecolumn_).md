> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactionclassifier/datasource/directorywithvideosandannotation(at:annotationfile:videocolumn:labelcolumn:starttimecolumn:endtimecolumn:)](https://developer.apple.com/documentation/createml/mlactionclassifier/datasource/directorywithvideosandannotation(at:annotationfile:videocolumn:labelcolumn:starttimecolumn:endtimecolumn:))

# MLActionClassifier.DataSource.directoryWithVideosAndAnnotation(at:annotationFile:videoColumn:labelColumn:startTimeColumn:endTimeColumn:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** macOS 11.0+

The location of a directory of video files, and the location of an action annotation file.

## Declaration

```swift
case directoryWithVideosAndAnnotation(at: URL, annotationFile: URL, videoColumn: String, labelColumn: String, startTimeColumn: String? = nil, endTimeColumn: String? = nil)
```

## Parameters

- `at`: The location of a directory that contains video files.
- `annotationFile`: The location of a JSON or CSV file with object annotations for the images.
- `videoColumn`: The name of the column that contains the URLs to the video files.
- `labelColumn`: The name of the column that contains the labels of the action the person demonstrates in the video file.
- `startTimeColumn`: The name of the column that contains the action’s starting-time in the video file.
- `endTimeColumn `: The name of the column that contains the action’s ending-time in the video file.

## See Also

### Creating a data source

- [MLActionClassifier.DataSource.labeledDirectories(at:)](labeleddirectories%28at_%29.md): The location of a folder with subfolders each of which contain sample videos of an action.
- [MLActionClassifier.DataSource.labeledFiles(at:)](labeledfiles%28at_%29.md): The location of a folder that contains video files whose names you use to label corresponding actions.
- [MLActionClassifier.DataSource.labeledVideoData(table:videoColumn:labelColumn:startTimeColumn:endTimeColumn:)](labeledvideodata%28table_videocolumn_labelcolumn_starttimecolumn_endtimecolumn_%29.md): Deprecated. A data table that contains the locations of the video files and the action annotations.
