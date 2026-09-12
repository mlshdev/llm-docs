> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mltextclassifier/datasource/stratifiedsplit(proportions:seed:labelcolumn:textcolumn:)](https://developer.apple.com/documentation/createml/mltextclassifier/datasource/stratifiedsplit(proportions:seed:labelcolumn:textcolumn:))

# stratifiedSplit(proportions:seed:labelColumn:textColumn:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ (deprecated in 17.0) · iPadOS 15.0+ (deprecated in 17.0) · Mac Catalyst 15.0+ (deprecated in 17.0) · macOS 10.14+ (deprecated in 14.0) · visionOS 1.0+

Generates a data table by splitting the data source into strata.

## Declaration

```swift
func stratifiedSplit(proportions: [Double], seed: Int = timestampSeed(), labelColumn: String, textColumn: String) throws -> MLDataTable
```

## Parameters

- `proportions`: An array of proportions, each in the range `[0.0, 1.0]`.
- `seed`: A seed number for the random-number generator. The default value is the current epoch time in milliseconds.
- `labelColumn`: The name of the column with the labels.
- `textColumn`: The name of the column with the text data.

<a id="return-value"></a>

## Return Value

A new data table.

## See Also

### Retrieving the data

- [labeledTexts()](labeledtexts%28%29.md): Fetches the labeled data from the data source.
