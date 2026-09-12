> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/slice/prefix(_:)](https://developer.apple.com/documentation/tabulardata/dataframe/slice/prefix(_:))

# prefix(\_:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a new slice that contains the initial elements of the original slice.

## Declaration

```swift
func prefix(_ length: Int) -> DataFrame.Slice
```

## Parameters

- `length`: The number of elements in the new slice. The length must be greater than or equal to zero and less than or equal to the number of elements in the original slice.

<a id="return-value"></a>

## Return Value

A new slice of the underlying data frame.

## See Also

### Creating a Slice by Selecting Rows

- [prefix(upTo:)](prefix%28upto_%29.md): Returns a new slice that contains the initial elements of the original slice up to, but not including, the element at a position.
- [prefix(through:)](prefix%28through_%29.md): Returns a new slice that contains the initial elements of the original slice up to and including the element at a position.
- [suffix(\_:)](suffix%28__%29.md): Returns a new slice that contains the final elements of the original slice.
- [suffix(from:)](suffix%28from_%29.md): Returns a new slice that contains the final elements of the original slice beginning with the element at a position.
