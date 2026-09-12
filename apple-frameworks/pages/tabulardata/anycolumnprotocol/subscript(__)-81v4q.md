> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/anycolumnprotocol/subscript(_:)-81v4q](https://developer.apple.com/documentation/tabulardata/anycolumnprotocol/subscript(_:)-81v4q)

# subscript(\_:)

**Framework:** TabularData  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Retrieves a contiguous subrange of the column type’s elements.

## Declaration

```swift
subscript(range: Range<Int>) -> AnyColumnSlice { get }
```

## Parameters

- `range`: An integer range of valid indices in the column.

## See Also

### Retrieving Elements

- [subscript(\_:)](subscript%28__%29-1dl8y.md): Retrieves an element at a position in the column type.
