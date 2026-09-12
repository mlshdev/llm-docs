> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactionclassifier/datasource/labeledkeypointsdata(table:sessionidcolumn:labelcolumn:featurecolumn:)](https://developer.apple.com/documentation/createml/mlactionclassifier/datasource/labeledkeypointsdata(table:sessionidcolumn:labelcolumn:featurecolumn:))

# MLActionClassifier.DataSource.labeledKeypointsData(table:sessionIdColumn:labelColumn:featureColumn:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** macOS 11.0+ (deprecated in 14.0)

A data table that contains the human body landmark movement data.

## Declaration

```swift
case labeledKeypointsData(table: MLDataTable, sessionIdColumn: String = __Defaults.sessionIdColumnName, labelColumn: String = __Defaults.labelColumnName, featureColumn: String = __Defaults.featureColumnName)
```

## Parameters

- `table`: A data table that contains the human body landmark locations and the action annotations.
- `sessionIdColumn`: The name of the column that contains the action session’s unique identifier.
- `labelColumn`: The name of the column that contains the labels of the action the person demonstrates in the session.
- `featureColumn `: The name of the column that contains the movement data.

## See Also

### Extracting key points

- [extractKeypoints(targetFrameRate:)](extractkeypoints%28targetframerate_%29.md): Extracts key points from video files if necessary.
- [MLActionClassifier.DataSource.labeledKeypointsDataFrame(\_:sessionIdColumn:labelColumn:featureColumn:)](labeledkeypointsdataframe%28__sessionidcolumn_labelcolumn_featurecolumn_%29.md): A data source made up of keypoints in a data frame.
- [MLActionClassifier.DataSource.labeledVideoDataFrame(\_:videoColumn:labelColumn:startTimeColumn:endTimeColumn:)](labeledvideodataframe%28__videocolumn_labelcolumn_starttimecolumn_endtimecolumn_%29.md): A data source made up of video references in a data frame.
