> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/rowgroupingprotocol/quantiles(_:quantile:order:)](https://developer.apple.com/documentation/tabulardata/rowgroupingprotocol/quantiles(_:quantile:order:))

# quantiles(\_:quantile:order:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a data frame that contains the quantiles of each group’s rows along a column you select by column identifier.

## Declaration

```swift
func quantiles<N>(_ columnID: ColumnID<N>, quantile: N, order: Order? = nil) -> DataFrame where N : BinaryFloatingPoint
```

## Parameters

- `columnID`: A column identifier.
- `quantile`: A number between 0.0 and 1.0 that represents the percentage of the data that lies below the resulting value.
- `order`: A sorting order the method uses to sort the data frame by its third quartile column.

<a id="discussion"></a>

## Discussion

> **Precondition**

> Quantile must be between 0.0 and 1.0.
