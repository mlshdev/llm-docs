> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/column/transform(_:)-6mrwg](https://developer.apple.com/documentation/tabulardata/column/transform(_:)-6mrwg)

# transform(\_:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Applies a transformation to every element in the column.

## Declaration

```swift
mutating func transform(_ transform: (Column<WrappedElement>.Element) throws -> Column<WrappedElement>.Element) rethrows
```

## Parameters

- `transform`: A transformation closure.

## See Also

### Transforming a Column

- [transform(\_:)](transform%28__%29-271dd.md): Applies a transformation to every element that isn’t missing.
