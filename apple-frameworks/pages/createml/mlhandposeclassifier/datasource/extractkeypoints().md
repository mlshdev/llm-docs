> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandposeclassifier/datasource/extractkeypoints()](https://developer.apple.com/documentation/createml/mlhandposeclassifier/datasource/extractkeypoints())

# extractKeypoints()

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Extracts key points from video files if necessary.

## Declaration

```swift
func extractKeypoints() throws -> DataFrame
```

<a id="return-value"></a>

## Return Value

A data frame that contains a column for hand joint locations and a column of hand action annotations.

<a id="discussion"></a>

## Discussion

If the data source already contains keypoints, this method just renames the data frame columns to the defaults.
