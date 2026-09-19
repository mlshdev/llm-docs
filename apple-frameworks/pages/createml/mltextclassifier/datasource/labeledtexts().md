> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mltextclassifier/datasource/labeledtexts()

# labeledTexts()

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · visionOS 1.0+

Fetches the labeled data from the data source.

## Declaration

```swift
func labeledTexts() throws -> [String : [String]]
```

<a id="return-value"></a>

## Return Value

A dictionary that contains each label with their related text entries.

## See Also

### Retrieving the data

- [stratifiedSplit(proportions:seed:labelColumn:textColumn:)](stratifiedsplit%28proportions_seed_labelcolumn_textcolumn_%29.md): Deprecated. Generates a data table by splitting the data source into strata.
