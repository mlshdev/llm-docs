> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactionclassifier/datasource/labeledkeypointsdataframe(_:sessionidcolumn:labelcolumn:featurecolumn:)](https://developer.apple.com/documentation/createml/mlactionclassifier/datasource/labeledkeypointsdataframe(_:sessionidcolumn:labelcolumn:featurecolumn:))

# MLActionClassifier.DataSource.labeledKeypointsDataFrame(\_:sessionIdColumn:labelColumn:featureColumn:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** macOS 12.0+

A data source made up of keypoints in a data frame.

## Declaration

```swift
case labeledKeypointsDataFrame(DataFrame, sessionIdColumn: String = __Defaults.sessionIdColumnName, labelColumn: String = __Defaults.labelColumnName, featureColumn: String = __Defaults.featureColumnName)
```

## Parameters

- `dataFrame`: A `DataFrame` containing keypoints and labels.
- `sessionIdColumn`: The name of the column containing session identifiers. Defaults to “session_id”.
- `labelColumn`: The name of the column containing the labels. Defaults to “label”.
- `featureColumn`: The name of the column containing the keypoints. Defaults to “keypoints”.

<a id="discussion"></a>

## Discussion

The data frame must contain a column of session identifiers, a column of labels, and a column of keypoints. Each set of keypoints must be a multi-dimensional `1x3x18` array that contains the x, y, and z coordinates of each of the 18 keypoints. See `VNRecognizedPointsObservation` for more details.

## See Also

### Extracting key points

- [extractKeypoints(targetFrameRate:)](extractkeypoints%28targetframerate_%29.md): Extracts key points from video files if necessary.
- [MLActionClassifier.DataSource.labeledKeypointsData(table:sessionIdColumn:labelColumn:featureColumn:)](labeledkeypointsdata%28table_sessionidcolumn_labelcolumn_featurecolumn_%29.md): Deprecated. A data table that contains the human body landmark movement data.
- [MLActionClassifier.DataSource.labeledVideoDataFrame(\_:videoColumn:labelColumn:startTimeColumn:endTimeColumn:)](labeledvideodataframe%28__videocolumn_labelcolumn_starttimecolumn_endtimecolumn_%29.md): A data source made up of video references in a data frame.
