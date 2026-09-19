> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/dataframe/containscolumn(_:)-6nqfs

# containsColumn(\_:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+ · watchOS 8.5+

Returns a Boolean value indicating whether the data frame contains a column matching a column ID.

## Declaration

```swift
func containsColumn<T>(_ id: ColumnID<T>) -> Bool
```

## Parameters

- `id`: A column ID.
