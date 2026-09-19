> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/anycolumn/subscript(_:)-1n9t9

# subscript(\_:)

**Framework:** TabularData  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Accesses a contiguous subrange of the elements.

## Declaration

```swift
subscript(range: Range<Int>) -> AnyColumnSlice { get set }
```

## Parameters

- `range`: A range of valid indices in the column.

## See Also

### Accessing Elements

- [subscript(\_:)](subscript%28__%29-6z1b5.md): Accesses an element at an index.
