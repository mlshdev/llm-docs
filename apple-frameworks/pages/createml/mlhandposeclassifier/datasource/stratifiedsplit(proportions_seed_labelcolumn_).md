> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandposeclassifier/datasource/stratifiedsplit(proportions:seed:labelcolumn:)](https://developer.apple.com/documentation/createml/mlhandposeclassifier/datasource/stratifiedsplit(proportions:seed:labelcolumn:))

# stratifiedSplit(proportions:seed:labelColumn:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ (deprecated in 17.0) · iPadOS 15.0+ (deprecated in 17.0) · Mac Catalyst 15.0+ (deprecated in 17.0) · macOS 12.0+ (deprecated in 14.0) · visionOS 1.0+

Generates a data table by splitting the data source into strata.

> Use DataFrame.stratifiedSplit(on:by:)

## Declaration

```swift
func stratifiedSplit(proportions: [Double], seed: Int = timestampSeed(), labelColumn: String) throws -> MLDataTable
```

<a id="discussion"></a>

## Discussion

- proportions: An array of stratum proportions, each in the range `[0.0, 1.0]`.

  - seed: A seed number for the random-number generator.
- labelColumn: The name of the column or category the method uses to stratify the contents of the data source.

## See Also

### Exporting a data source

- [labeledMedia()](labeledmedia%28%29.md): Generates a dictionary that contains the data source’s classification labels paired with an array of URLs to the label’s image files.
- [imagesWithAnnotations()](imageswithannotations%28%29.md): Deprecated. Generates a data table that contains a column for the data source’s image file URLs and a column of annotations.
- [keypointsWithAnnotations()](keypointswithannotations%28%29.md): Deprecated. Generates a data table that contains a column for hand joint locations and hand pose annotations.
