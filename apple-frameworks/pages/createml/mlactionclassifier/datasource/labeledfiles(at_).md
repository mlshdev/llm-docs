> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactionclassifier/datasource/labeledfiles(at:)](https://developer.apple.com/documentation/createml/mlactionclassifier/datasource/labeledfiles(at:))

# MLActionClassifier.DataSource.labeledFiles(at:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** macOS 11.0+

The location of a folder that contains video files whose names you use to label corresponding actions.

## Declaration

```swift
case labeledFiles(at: URL)
```

<a id="discussion"></a>

## Discussion

Use this case to create a data source from a folder of all your sample video files. Name each file using the action’s label, followed by a period and an arbitrary string, followed by the file extension. For example, an exercise action classifier might have files named squat.3.mov, lunge.1.mov, lunge.2.mov, and so on.

## See Also

### Creating a data source

- [MLActionClassifier.DataSource.labeledDirectories(at:)](labeleddirectories%28at_%29.md): The location of a folder with subfolders each of which contain sample videos of an action.
- [MLActionClassifier.DataSource.directoryWithVideosAndAnnotation(at:annotationFile:videoColumn:labelColumn:startTimeColumn:endTimeColumn:)](directorywithvideosandannotation%28at_annotationfile_videocolumn_labelcolumn_starttimecolumn_endtimecolumn_%29.md): The location of a directory of video files, and the location of an action annotation file.
- [MLActionClassifier.DataSource.labeledVideoData(table:videoColumn:labelColumn:startTimeColumn:endTimeColumn:)](labeledvideodata%28table_videocolumn_labelcolumn_starttimecolumn_endtimecolumn_%29.md): Deprecated. A data table that contains the locations of the video files and the action annotations.
