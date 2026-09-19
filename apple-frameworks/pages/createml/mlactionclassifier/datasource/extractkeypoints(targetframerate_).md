> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlactionclassifier/datasource/extractkeypoints(targetframerate:)

# extractKeypoints(targetFrameRate:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Extracts key points from video files if necessary.

## Declaration

```swift
func extractKeypoints(targetFrameRate: Double = MLHandActionClassifier.__Defaults.targetFrameRate) throws -> DataFrame
```

## Parameters

- `targetFrameRate`: The number of frames per second the method uses to extract body landmarks from the data source.

<a id="return-value"></a>

## Return Value

A data frame that contains a column for hand joint locations and a column of hand action annotations.

<a id="discussion"></a>

## Discussion

If the data source already contains keypoints, this method just renames the data frame columns to the defaults.

## See Also

### Extracting key points

- [MLActionClassifier.DataSource.labeledKeypointsDataFrame(\_:sessionIdColumn:labelColumn:featureColumn:)](labeledkeypointsdataframe%28__sessionidcolumn_labelcolumn_featurecolumn_%29.md): A data source made up of keypoints in a data frame.
- [MLActionClassifier.DataSource.labeledKeypointsData(table:sessionIdColumn:labelColumn:featureColumn:)](labeledkeypointsdata%28table_sessionidcolumn_labelcolumn_featurecolumn_%29.md): Deprecated. A data table that contains the human body landmark movement data.
- [MLActionClassifier.DataSource.labeledVideoDataFrame(\_:videoColumn:labelColumn:startTimeColumn:endTimeColumn:)](labeledvideodataframe%28__videocolumn_labelcolumn_starttimecolumn_endtimecolumn_%29.md): A data source made up of video references in a data frame.
