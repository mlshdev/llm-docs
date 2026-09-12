> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/anycolumnslice/isnil(at:)](https://developer.apple.com/documentation/tabulardata/anycolumnslice/isnil(at:))

# isNil(at:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a Boolean that indicates whether the element at the index is missing.

## Declaration

```swift
func isNil(at index: Int) -> Bool
```

## Parameters

- `index`: An index.

## See Also

### Inspecting a Type-Erased Column Slice

- [name](name.md): The name of the slice’s parent column.
- [count](count.md): The number of elements in the column slice.
- [missingCount](missingcount.md): The number of missing elements in the column slice.
- [wrappedElementType](wrappedelementtype.md): The underlying type of the column’s elements.
