> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/anycolumn/isnil(at:)

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

- `index`: The location of an element in the column.

## See Also

### Inspecting a Type-Erased Column

- [name](name.md): The name of the column.
- [count](count.md): The number of elements in the column.
- [missingCount](missingcount.md): The number of missing elements in the column.
- [wrappedElementType](wrappedelementtype.md): The underlying type of the column’s elements.
