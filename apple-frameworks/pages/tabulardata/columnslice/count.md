> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/columnslice/count

# count

**Framework:** TabularData  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The number of elements in the column slice.

## Declaration

```swift
var count: Int { get }
```

## See Also

### Inspecting a Column Slice

- [name](name.md): The name of the slice’s parent column.
- [wrappedElementType](wrappedelementtype.md): The underlying type of the column’s elements.
- [argmin()](argmin%28%29.md): Conforms when `WrappedElement` conforms to `Comparable`. Returns the index of the element with the lowest value, ignoring missing elements.
- [argmax()](argmax%28%29.md): Conforms when `WrappedElement` conforms to `Comparable`. Returns the index of the element with the highest value, ignoring missing elements.
- [isNil(at:)](isnil%28at_%29.md): Returns a Boolean that indicates whether the element at an index is missing.
