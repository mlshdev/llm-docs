> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/rowgrouping/subscript(_:)-5z2eg](https://developer.apple.com/documentation/tabulardata/rowgrouping/subscript(_:)-5z2eg)

# subscript(\_:)

**Framework:** TabularData  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Retrieves a group at an index.

## Declaration

```swift
subscript(position: Int) -> (key: GroupingKey?, group: DataFrame.Slice) { get }
```

## Parameters

- `position`: A valid index to a group in the row grouping.

## See Also

### Inspecting a Row Grouping

- [count](count.md): Conforms when `GroupingKey` conforms to `Hashable`. The number of groups in the row grouping.
