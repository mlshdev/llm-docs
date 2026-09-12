> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/column/append(contentsof:)-qb4p](https://developer.apple.com/documentation/tabulardata/column/append(contentsof:)-qb4p)

# append(contentsOf:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Appends a sequence of nonoptional values to the column.

## Declaration

```swift
mutating func append<S>(contentsOf sequence: S) where WrappedElement == S.Element, S : Sequence
```

## Parameters

- `sequence`: A sequence of nonoptional elements.

## See Also

### Adding Elements

- [append(\_:)](append%28__%29-qycj.md): Appends a nonoptional value to the column.
- [append(\_:)](append%28__%29-4t2pt.md): Appends an optional value to the column.
- [append(contentsOf:)](append%28contentsof_%29-42y1d.md): Appends a sequence of optional values to the column.
