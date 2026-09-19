> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/discontiguouscolumnslice/argmax()

# argmax()

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns the index of the element with the highest value, ignoring missing elements.

## Declaration

```swift
func argmax() -> Int?
```

## See Also

### Inspecting a Column Slice

- [name](name.md): The name of the slice’s parent column.
- [count](count.md): The number of elements in the column slice.
- [wrappedElementType](wrappedelementtype.md): The underlying type of the column’s elements.
- [argmin()](argmin%28%29.md): Conforms when `WrappedElement` conforms to `Comparable`. Returns the index of the element with the lowest value, ignoring missing elements.
- [isNil(at:)](isnil%28at_%29.md): Returns a Boolean that indicates whether the element at the index is missing.
