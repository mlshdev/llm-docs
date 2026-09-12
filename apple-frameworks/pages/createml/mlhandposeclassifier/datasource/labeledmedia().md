> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandposeclassifier/datasource/labeledmedia()](https://developer.apple.com/documentation/createml/mlhandposeclassifier/datasource/labeledmedia())

# labeledMedia()

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Generates a dictionary that contains the data source’s classification labels paired with an array of URLs to the label’s image files.

## Declaration

```swift
func labeledMedia() throws -> [String : [URL]]
```

## See Also

### Exporting a data source

- [imagesWithAnnotations()](imageswithannotations%28%29.md): Deprecated. Generates a data table that contains a column for the data source’s image file URLs and a column of annotations.
- [keypointsWithAnnotations()](keypointswithannotations%28%29.md): Deprecated. Generates a data table that contains a column for hand joint locations and hand pose annotations.
- [stratifiedSplit(proportions:seed:labelColumn:)](stratifiedsplit%28proportions_seed_labelcolumn_%29.md): Deprecated. Generates a data table by splitting the data source into strata.
