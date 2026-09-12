> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframeprotocol/subscript(_:)](https://developer.apple.com/documentation/tabulardata/dataframeprotocol/subscript(_:))

# subscript(\_:)

**Framework:** TabularData  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Accesses a slice of the data frame type with an index range.

## Declaration

```swift
subscript(range: Range<Int>) -> DataFrame.Slice { get set }
```

## Parameters

- `range`: An integer range.

## Default Implementations

### DataFrameProtocol Implementations

- [subscript(\_:)](subscript%28__%29-2p37h.md): Accesses a slice of the data frame type with an index range.
- [subscript(\_:)](subscript%28__%29-8hly3.md): Accesses rows of a data frame type with an index range expression.

## See Also

### Accessing Rows

- [subscript(\_:)](subscript%28__%29-8hly3.md): Accesses rows of a data frame type with an index range expression.
