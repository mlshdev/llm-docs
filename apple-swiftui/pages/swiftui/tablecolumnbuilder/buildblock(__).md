> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablecolumnbuilder/buildblock(_:)](https://developer.apple.com/documentation/swiftui/tablecolumnbuilder/buildblock(_:))

# buildBlock(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · visionOS 1.0+

Creates a single, unsortable column result.

## Declaration

```swift
@export(implementation) static func buildBlock<Column>(_ column: Column) -> Column where RowValue == Column.TableRowValue, Column : TableColumnContent, Column.TableColumnSortComparator == Never
```

## See Also

### Building a column

- [buildBlock(\_:\_:)](buildblock%28____%29.md): Conforms when `RowValue` conforms to `Identifiable` and `Sort` conforms to `SortComparator`. Creates an unsortable column result from two sources.
- [buildBlock(\_:\_:\_:)](buildblock%28______%29.md): Conforms when `RowValue` conforms to `Identifiable` and `Sort` conforms to `SortComparator`. Creates an unsortable column result from three sources.
- [buildBlock(\_:\_:\_:\_:)](buildblock%28________%29.md): Conforms when `RowValue` conforms to `Identifiable` and `Sort` conforms to `SortComparator`. Creates an unsortable column result from four sources.
- [buildBlock(\_:\_:\_:\_:\_:)](buildblock%28__________%29.md): Conforms when `RowValue` conforms to `Identifiable` and `Sort` conforms to `SortComparator`. Creates an unsortable column result from five sources.
- [buildBlock(\_:\_:\_:\_:\_:\_:)](buildblock%28____________%29.md): Conforms when `RowValue` conforms to `Identifiable` and `Sort` conforms to `SortComparator`. Creates an unsortable column result from six sources.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:)](buildblock%28______________%29.md): Conforms when `RowValue` conforms to `Identifiable` and `Sort` conforms to `SortComparator`. Creates an unsortable column result from seven sources.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:)](buildblock%28________________%29.md): Conforms when `RowValue` conforms to `Identifiable` and `Sort` conforms to `SortComparator`. Creates an unsortable column result from eight sources.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](buildblock%28__________________%29.md): Conforms when `RowValue` conforms to `Identifiable` and `Sort` conforms to `SortComparator`. Creates an unsortable column result from nine sources.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](buildblock%28____________________%29.md): Conforms when `RowValue` conforms to `Identifiable` and `Sort` conforms to `SortComparator`. Creates an unsortable column result from ten sources.
- [buildExpression(\_:)](buildexpression%28__%29.md): Creates a generic, unsortable single column expression.
