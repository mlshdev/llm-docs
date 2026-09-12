> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/suffix(_:)](https://developer.apple.com/documentation/tabulardata/dataframe/suffix(_:))

# suffix(\_:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a slice that contains the final rows up to a maximum length.

## Declaration

```swift
func suffix(_ maxLength: Int) -> DataFrame.Slice
```

## Parameters

- `maxLength`: The maximum number of rows.

## See Also

### Creating a Slice by Selecting Rows

- [prefix(\_:)](prefix%28__%29.md): Returns a slice that contains the initial rows up to a maximum length.
- [subscript(\_:)](subscript%28__%29-6tuca.md): Returns a slice of the rows by masking its elements with a Boolean column.
