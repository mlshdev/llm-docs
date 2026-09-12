> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactionclassifier/datasource/gatherannotatedfilenames()](https://developer.apple.com/documentation/createml/mlactionclassifier/datasource/gatherannotatedfilenames())

# gatherAnnotatedFileNames()

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Processes the data source and returns a data frame that contains file URLs and annotations.

## Declaration

```swift
func gatherAnnotatedFileNames() throws -> DataFrame?
```

<a id="discussion"></a>

## Discussion

This method collects file names from the filesystem if necessary. If the data source is already in table format it renames the columns to the default column names. This method returns nil if the data source contains key points.
