> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/groupsummaries](https://developer.apple.com/documentation/tabulardata/groupsummaries)

# GroupSummaries

**Framework:** TabularData  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A collection of group summaries.

## Declaration

```swift
protocol GroupSummaries : CustomStringConvertible
```

## Topics

### Instance Properties

- [description](groupsummaries/description.md): A text representation of the group summaries.

### Instance Methods

- [description(options:)](groupsummaries/description%28options_%29.md): Generates a text representation of the group summaries.

### Subscripts

- [subscript(\_:)](groupsummaries/subscript%28__%29.md): Retrieves one or more summaries by their group keys.

## Relationships

### Inherits From

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)

## See Also

### Summarizing a Row Grouping

- [summary()](rowgrouping/summary%28%29.md): Conforms when `GroupingKey` conforms to `Hashable`. Generates a group summaries instance for the columns of the row grouping.
- [summary(of:)](rowgrouping/summary%28of_%29.md): Conforms when `GroupingKey` conforms to `Hashable`. Generates a group summaries instance for the columns you select by name.
