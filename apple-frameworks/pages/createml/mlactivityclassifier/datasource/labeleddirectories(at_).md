> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactivityclassifier/datasource/labeleddirectories(at:)](https://developer.apple.com/documentation/createml/mlactivityclassifier/datasource/labeleddirectories(at:))

# MLActivityClassifier.DataSource.labeledDirectories(at:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** macOS 10.15+

An activity classifier data source that uses a directory of directories that contain sensor data files.

## Declaration

```swift
case labeledDirectories(at: URL)
```

## Parameters

- `at`: A [URL](../../../foundation/url.md) of a directory in the file system that contains directories, each named with an activity label for the sensor data files.

<a id="discussion"></a>

## Discussion

Create a data source by organizing each activity’s data files into a directory and naming each directory with the label for that activity.

> **Note**

> Each data file must contain exactly one entire recording of an activity.

For example, to organize data files for an activity classifier that recognizes walking, jogging, and running, start by creating directories named “walk”, “jog”, and “run”. Place all the files of walking sensor data into the “walk” directory, and so on.

Next, gather all the activity directories into a directory and pass its [URL](../../../foundation/url.md) to [MLActivityClassifier.DataSource.labeledDirectories(at:)](labeleddirectories%28at_%29.md).

## See Also

### Creating a data source

- [MLActivityClassifier.DataSource.directoryWithDataAndAnnotation(at:annotationFileName:timeStampColumn:labelStartTimeColumn:labelEndTimeColumn:)](directorywithdataandannotation%28at_annotationfilename_timestampcolumn_labelstarttimecolumn_labelendtimecolumn_%29.md): An activity classifier data source that uses a directory that contains sensor data files and one annotation file.
