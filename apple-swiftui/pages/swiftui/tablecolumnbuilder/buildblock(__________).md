> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablecolumnbuilder/buildblock(_:_:_:_:_:)](https://developer.apple.com/documentation/swiftui/tablecolumnbuilder/buildblock(_:_:_:_:_:))

# buildBlock(\_:\_:\_:\_:\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · visionOS 1.0+

Creates an unsortable column result from five sources.

## Declaration

```swift
@export(implementation) static func buildBlock<C0, C1, C2, C3, C4>(_ c0: C0, _ c1: C1, _ c2: C2, _ c3: C3, _ c4: C4) -> TupleTableColumnContent<RowValue, Never, (C0, C1, C2, C3, C4)> where RowValue == C0.TableRowValue, C0 : TableColumnContent, C1 : TableColumnContent, C2 : TableColumnContent, C3 : TableColumnContent, C4 : TableColumnContent, C0.TableColumnSortComparator == Never, C0.TableRowValue == C1.TableRowValue, C1.TableColumnSortComparator == Never, C1.TableRowValue == C2.TableRowValue, C2.TableColumnSortComparator == Never, C2.TableRowValue == C3.TableRowValue, C3.TableColumnSortComparator == Never, C3.TableRowValue == C4.TableRowValue, C4.TableColumnSortComparator == Never
```

## See Also

### Building a column

- [buildBlock(\_:)](buildblock%28__%29.md): Creates a single, unsortable column result.
- [buildBlock(\_:\_:)](buildblock%28____%29.md): Conforms when `RowValue` conforms to `Identifiable` and `Sort` conforms to `SortComparator`. Creates an unsortable column result from two sources.
- [buildBlock(\_:\_:\_:)](buildblock%28______%29.md): Conforms when `RowValue` conforms to `Identifiable` and `Sort` conforms to `SortComparator`. Creates an unsortable column result from three sources.
- [buildBlock(\_:\_:\_:\_:)](buildblock%28________%29.md): Conforms when `RowValue` conforms to `Identifiable` and `Sort` conforms to `SortComparator`. Creates an unsortable column result from four sources.
- [buildBlock(\_:\_:\_:\_:\_:\_:)](buildblock%28____________%29.md): Conforms when `RowValue` conforms to `Identifiable` and `Sort` conforms to `SortComparator`. Creates an unsortable column result from six sources.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:)](buildblock%28______________%29.md): Conforms when `RowValue` conforms to `Identifiable` and `Sort` conforms to `SortComparator`. Creates an unsortable column result from seven sources.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:)](buildblock%28________________%29.md): Conforms when `RowValue` conforms to `Identifiable` and `Sort` conforms to `SortComparator`. Creates an unsortable column result from eight sources.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](buildblock%28__________________%29.md): Conforms when `RowValue` conforms to `Identifiable` and `Sort` conforms to `SortComparator`. Creates an unsortable column result from nine sources.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](buildblock%28____________________%29.md): Conforms when `RowValue` conforms to `Identifiable` and `Sort` conforms to `SortComparator`. Creates an unsortable column result from ten sources.
- [buildExpression(\_:)](buildexpression%28__%29.md): Creates a generic, unsortable single column expression.
