> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactionclassifier/datasource/videoswithannotations()](https://developer.apple.com/documentation/createml/mlactionclassifier/datasource/videoswithannotations())

# videosWithAnnotations()

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 11.0+ (deprecated in 14.0)

Generates a data table of the data source’s video URL locations and action annotations.

> Use gatherAnnotatedFileNames()

## Declaration

```swift
func videosWithAnnotations() throws -> MLDataTable
```

<a id="return-value"></a>

## Return Value

A data table.

<a id="discussion"></a>

## Discussion

The data table includes a column for the annotation’s label, and if applicable, the annotation’s starting- and ending-time indices.

## See Also

### Generating data tables from a data source

- [keypointsWithAnnotations(targetFrameRate:)](keypointswithannotations%28targetframerate_%29.md): Deprecated. Generates a data table with action annotations of the data source.
- [stratifiedSplit(proportions:seed:labelColumn:)](stratifiedsplit%28proportions_seed_labelcolumn_%29.md): Deprecated. Generates a data table by splitting the data source into strata.
