> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframeprotocol/description(options:)](https://developer.apple.com/documentation/tabulardata/dataframeprotocol/description(options:))

# description(options:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a text representation of the data frame type.

## Declaration

```swift
func description(options: FormattingOptions) -> String
```

## Parameters

- `options`: A set of formatting options that affect the description string, including the maximum width of a column and the maximum number of rows.

<a id="discussion"></a>

## Discussion

`FormattingOptions.maximumLineWidth` needs to be wide enough to print at least the index column, the truncation column, and one data column (at least two characters, one for initial of the content, and one for “…”).
