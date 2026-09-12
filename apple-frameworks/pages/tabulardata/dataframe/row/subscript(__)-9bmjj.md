> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/row/subscript(_:)-9bmjj](https://developer.apple.com/documentation/tabulardata/dataframe/row/subscript(_:)-9bmjj)

# subscript(\_:)

**Framework:** TabularData  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Accesses a slice from a range of indices.

## Declaration

```swift
subscript(bounds: Range<Int>) -> Slice<DataFrame.Row> { get set }
```

## Parameters

- `bounds`: A valid column index range.
