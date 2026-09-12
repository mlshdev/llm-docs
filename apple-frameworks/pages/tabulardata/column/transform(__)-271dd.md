> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/column/transform(_:)-271dd](https://developer.apple.com/documentation/tabulardata/column/transform(_:)-271dd)

# transform(\_:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Applies a transformation to every element that isn’t missing.

## Declaration

```swift
mutating func transform(_ transform: (WrappedElement) throws -> WrappedElement) rethrows
```

## Parameters

- `transform`: A transformation closure.

## See Also

### Transforming a Column

- [transform(\_:)](transform%28__%29-6mrwg.md): Applies a transformation to every element in the column.
