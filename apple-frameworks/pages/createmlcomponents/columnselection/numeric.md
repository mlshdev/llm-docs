> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/columnselection/numeric](https://developer.apple.com/documentation/createmlcomponents/columnselection/numeric)

# ColumnSelection.numeric

**Framework:** Create ML Components  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Select all numeric columns in the data frame.

## Declaration

```swift
case numeric
```

<a id="discussion"></a>

## Discussion

Numeric columns are columns with elements of type `Int`, `UInt8`, `Float`, `Double`. Also arrays of those types and shaped arrays of those types.

## See Also

### Column selection types

- [ColumnSelection.all](all.md): Select all columns in the data frame.
- [ColumnSelection.exclude(columnNames:)](exclude%28columnnames_%29.md): Selects all columns except the specified columns.
- [ColumnSelection.include(columnNames:)](include%28columnnames_%29.md): Selects only the specified columns.
