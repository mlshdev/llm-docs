> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/dataframe/renamecolumn(_:to:)

# renameColumn(\_:to:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Renames a column in the data frame.

## Declaration

```swift
mutating func renameColumn(_ name: String, to newName: String)
```

## Parameters

- `name`: The name of a column in the data frame.
- `newName`: The new name for the column. The new name must not be the same as another column in the data frame.
