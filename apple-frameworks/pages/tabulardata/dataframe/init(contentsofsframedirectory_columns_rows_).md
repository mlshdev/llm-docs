> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/init(contentsofsframedirectory:columns:rows:)](https://developer.apple.com/documentation/tabulardata/dataframe/init(contentsofsframedirectory:columns:rows:))

# init(contentsOfSFrameDirectory:columns:rows:)

**Framework:** TabularData  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a data frame from a Turi Create scalable data frame.

## Declaration

```swift
init(contentsOfSFrameDirectory url: URL, columns: [String]? = nil, rows: Range<Int>? = nil) throws
```

## Parameters

- `url`: A URL to an `SFrame` directory.
- `columns`: An array of column names; Set to `nil` to use every column in the `SFrame`.
- `rows`: A range of indices; Set to `nil` to use every row in the `SFrame`.

<a id="discussion"></a>

## Discussion

> **Throws**

> An `SFrameReadingError` instance.

## See Also

### Creating a Data Frame from Turi Create Types

- [ShapedData](../shapeddata.md): A collection type that represents multidimensional data in a data frame element.
