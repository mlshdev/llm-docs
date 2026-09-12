> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframeprotocol/joined(_:on:kind:)-1gp6k](https://developer.apple.com/documentation/tabulardata/dataframeprotocol/joined(_:on:kind:)-1gp6k)

# joined(\_:on:kind:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a data frame by joining with another data frame type with a common column you select by name.

## Declaration

```swift
func joined<R>(_ other: R, on columnName: String, kind: JoinKind = .inner) -> DataFrame where R : DataFrameProtocol
```

## Parameters

- `other`: A data frame type that represents the right side of the join.
- `columnName`: A column name that exists in both data frame types.
- `kind`: A join operation type.

<a id="return-value"></a>

## Return Value

A new data frame.

## See Also

### Creating a Data Frame by Joining Another Data Frame

- [joined(\_:on:kind:)](joined%28__on_kind_%29-7u2tw.md): Generates a data frame by joining with another data frame type along the columns that you select by name for both data frame types.
- [joined(\_:on:kind:)](joined%28__on_kind_%29-9629e.md): Generates a data frame by joining with another data frame type along the columns that you select by identifier for both data frame types.
- [joined(\_:on:kind:)](joined%28__on_kind_%29-mvic.md): Generates a data frame by joining with another data frame type with a common column that you select by identifier.
- [JoinKind](../joinkind.md): An operation type that joins two data frame types.
