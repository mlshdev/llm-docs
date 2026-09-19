> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/column/wrappedelementtype

# wrappedElementType

**Framework:** TabularData  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The underlying type of the column’s elements.

## Declaration

```swift
var wrappedElementType: any Any.Type { get }
```

## See Also

### Inspecting a Column

- [name](name.md): The name of the column.
- [count](count.md): The number of elements in the column.
- [missingCount](missingcount.md): The number of missing elements in the column.
- [Column.Element](element.md): The type of the column’s elements, which is an optional type of the column’s type.
