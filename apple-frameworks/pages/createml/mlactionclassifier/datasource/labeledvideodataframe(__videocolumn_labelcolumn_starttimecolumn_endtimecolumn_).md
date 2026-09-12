> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactionclassifier/datasource/labeledvideodataframe(_:videocolumn:labelcolumn:starttimecolumn:endtimecolumn:)](https://developer.apple.com/documentation/createml/mlactionclassifier/datasource/labeledvideodataframe(_:videocolumn:labelcolumn:starttimecolumn:endtimecolumn:))

# MLActionClassifier.DataSource.labeledVideoDataFrame(\_:videoColumn:labelColumn:startTimeColumn:endTimeColumn:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** macOS 12.0+

A data source made up of video references in a data frame.

## Declaration

```swift
case labeledVideoDataFrame(DataFrame, videoColumn: String = __Defaults.videoColumnName, labelColumn: String = __Defaults.labelColumnName, startTimeColumn: String? = nil, endTimeColumn: String? = nil)
```

## Parameters

- `dataFrame`: A `DataFrame` containing video paths and labels.
- `videoColumn`: The name of the column containing the video paths. Defaults to “videoPath”.
- `labelColumn`: The name of the column containing the labels. Defaults to “label”.
- `startTimeColumn`: The name of the column containing the start time. If `nil` start time is 0.
- `endTimeColumn`: The name of the column containing the end time. If `nil` end time is the end of the video.

<a id="discussion"></a>

## Discussion

The data frame must contain a column of video file paths and a column of labels. It can also contain columns with start and end times.

## See Also

### Extracting key points

- [extractKeypoints(targetFrameRate:)](extractkeypoints%28targetframerate_%29.md): Extracts key points from video files if necessary.
- [MLActionClassifier.DataSource.labeledKeypointsDataFrame(\_:sessionIdColumn:labelColumn:featureColumn:)](labeledkeypointsdataframe%28__sessionidcolumn_labelcolumn_featurecolumn_%29.md): A data source made up of keypoints in a data frame.
- [MLActionClassifier.DataSource.labeledKeypointsData(table:sessionIdColumn:labelColumn:featureColumn:)](labeledkeypointsdata%28table_sessionidcolumn_labelcolumn_featurecolumn_%29.md): Deprecated. A data table that contains the human body landmark movement data.
