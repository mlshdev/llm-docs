> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/rowgroupingprotocol/summary(of:)-n5ia](https://developer.apple.com/documentation/tabulardata/rowgroupingprotocol/summary(of:)-n5ia)

# summary(of:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a categorical summary of the columns you select by name.

## Declaration

```swift
func summary(of columnNames: String...) -> any GroupSummaries
```

## Parameters

- `columnNames`: A comma-separated, or variadic, list of column names.

<a id="return-value"></a>

## Return Value

A [GroupSummaries](../groupsummaries.md) instance that contains categorical summary of the columns you select.
