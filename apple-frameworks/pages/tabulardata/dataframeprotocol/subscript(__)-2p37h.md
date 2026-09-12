> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframeprotocol/subscript(_:)-2p37h](https://developer.apple.com/documentation/tabulardata/dataframeprotocol/subscript(_:)-2p37h)

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
