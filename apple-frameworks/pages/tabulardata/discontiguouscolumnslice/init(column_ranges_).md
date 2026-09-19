> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/discontiguouscolumnslice/init(column:ranges:)

# init(column:ranges:)

**Framework:** TabularData  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a slice with the contents of a column.

## Declaration

```swift
init(column: Column<WrappedElement>, ranges: [Range<Int>])
```

## Parameters

- `column`: A column.
- `ranges`: An array of integer ranges.

## See Also

### Creating a Column Slice

- [init(\_:)](init%28__%29.md): Creates a slice with the contents of a column.
