> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/subscript(_:)-6tuca](https://developer.apple.com/documentation/tabulardata/dataframe/subscript(_:)-6tuca)

# subscript(\_:)

**Framework:** TabularData  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a slice of the rows by masking its elements with a Boolean column.

## Declaration

```swift
subscript<C>(mask: C) -> DataFrame.Slice where C : Collection, C.Element == Bool { get }
```

## Parameters

- `mask`: A Boolean column that indicates whether the method includes a row in the slice.

## See Also

### Creating a Slice by Selecting Rows

- [prefix(\_:)](prefix%28__%29.md): Returns a slice that contains the initial rows up to a maximum length.
- [suffix(\_:)](suffix%28__%29.md): Returns a slice that contains the final rows up to a maximum length.
