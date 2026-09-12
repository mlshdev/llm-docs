> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/subscript(_:_:)-6oqm0](https://developer.apple.com/documentation/tabulardata/dataframe/subscript(_:_:)-6oqm0)

# subscript(\_:\_:)

**Framework:** TabularData  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Accesses a column as an array by its name.

## Declaration

```swift
@backDeployed(before: macOS 15.4, iOS 18.4, tvOS 18.4, watchOS 11.4, visionOS 2.4)
subscript<T>(columnName: String, type: T.Type = T.self) -> [T?] { get set }
```

## Parameters

- `columnName`: The name of a column.
- `type`: The type of the column.
