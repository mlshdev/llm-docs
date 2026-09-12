> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/slice/suffix(from:)](https://developer.apple.com/documentation/tabulardata/dataframe/slice/suffix(from:))

# suffix(from:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a new slice that contains the final elements of the original slice beginning with the element at a position.

## Declaration

```swift
func suffix(from position: Int) -> DataFrame.Slice
```

## Parameters

- `position`: A valid index to an element in the slice.

<a id="return-value"></a>

## Return Value

A new slice of the underlying data frame.

## See Also

### Creating a Slice by Selecting Rows

- [prefix(\_:)](prefix%28__%29.md): Returns a new slice that contains the initial elements of the original slice.
- [prefix(upTo:)](prefix%28upto_%29.md): Returns a new slice that contains the initial elements of the original slice up to, but not including, the element at a position.
- [prefix(through:)](prefix%28through_%29.md): Returns a new slice that contains the initial elements of the original slice up to and including the element at a position.
- [suffix(\_:)](suffix%28__%29.md): Returns a new slice that contains the final elements of the original slice.
