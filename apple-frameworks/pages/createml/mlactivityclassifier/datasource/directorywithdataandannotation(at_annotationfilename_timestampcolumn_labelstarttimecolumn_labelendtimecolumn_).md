> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactivityclassifier/datasource/directorywithdataandannotation(at:annotationfilename:timestampcolumn:labelstarttimecolumn:labelendtimecolumn:)](https://developer.apple.com/documentation/createml/mlactivityclassifier/datasource/directorywithdataandannotation(at:annotationfilename:timestampcolumn:labelstarttimecolumn:labelendtimecolumn:))

# MLActivityClassifier.DataSource.directoryWithDataAndAnnotation(at:annotationFileName:timeStampColumn:labelStartTimeColumn:labelEndTimeColumn:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** macOS 10.15+

An activity classifier data source that uses a directory that contains sensor data files and one annotation file.

## Declaration

```swift
case directoryWithDataAndAnnotation(at: URL, annotationFileName: String, timeStampColumn: String, labelStartTimeColumn: String, labelEndTimeColumn: String)
```

## Parameters

- `at`: The location URL of a directory in the file system that contains sensor data files and an activity annotation file.
- `annotationFileName`: The name of the activity annotation file.
- `timeStampColumn`: The name of the column that contains the timestamps for each sensor data sample.
- `labelStartTimeColumn`: The name of the column that contains the activity’s starting-time index in the data file.
- `labelEndTimeColumn`: The name of the column that contains the activity’s ending-time index in the data file.

<a id="discussion"></a>

## Discussion

Create a data source by gathering all activity data files, and one annotation file, into a directory. Pass that directory’s [URL](../../../foundation/url.md) and the relevant column names of the annotation file to [MLActivityClassifier.DataSource.directoryWithDataAndAnnotation(at:annotationFileName:timeStampColumn:labelStartTimeColumn:labelEndTimeColumn:)](directorywithdataandannotation%28at_annotationfilename_timestampcolumn_labelstarttimecolumn_labelendtimecolumn_%29.md).

## See Also

### Creating a data source

- [MLActivityClassifier.DataSource.labeledDirectories(at:)](labeleddirectories%28at_%29.md): An activity classifier data source that uses a directory of directories that contain sensor data files.
