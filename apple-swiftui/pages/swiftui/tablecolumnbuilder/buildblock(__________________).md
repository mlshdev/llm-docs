> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablecolumnbuilder/buildblock(_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/swiftui/tablecolumnbuilder/buildblock(_:_:_:_:_:_:_:_:_:))

# buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · visionOS 1.0+

Creates an unsortable column result from nine sources.

## Declaration

```swift
@export(implementation) static func buildBlock<C0, C1, C2, C3, C4, C5, C6, C7, C8>(_ c0: C0, _ c1: C1, _ c2: C2, _ c3: C3, _ c4: C4, _ c5: C5, _ c6: C6, _ c7: C7, _ c8: C8) -> TupleTableColumnContent<RowValue, Never, (C0, C1, C2, C3, C4, C5, C6, C7, C8)> where RowValue == C0.TableRowValue, C0 : TableColumnContent, C1 : TableColumnContent, C2 : TableColumnContent, C3 : TableColumnContent, C4 : TableColumnContent, C5 : TableColumnContent, C6 : TableColumnContent, C7 : TableColumnContent, C8 : TableColumnContent, C0.TableColumnSortComparator == Never, C0.TableRowValue == C1.TableRowValue, C1.TableColumnSortComparator == Never, C1.TableRowValue == C2.TableRowValue, C2.TableColumnSortComparator == Never, C2.TableRowValue == C3.TableRowValue, C3.TableColumnSortComparator == Never, C3.TableRowValue == C4.TableRowValue, C4.TableColumnSortComparator == Never, C4.TableRowValue == C5.TableRowValue, C5.TableColumnSortComparator == Never, C5.TableRowValue == C6.TableRowValue, C6.TableColumnSortComparator == Never, C6.TableRowValue == C7.TableRowValue, C7.TableColumnSortComparator == Never, C7.TableRowValue == C8.TableRowValue, C8.TableColumnSortComparator == Never
```

## See Also

### Building a column

- [buildBlock(\_:)](buildblock%28__%29.md): Creates a single, unsortable column result.
- [buildBlock(\_:\_:)](buildblock%28____%29.md): Conforms when `RowValue` conforms to `Identifiable` and `Sort` conforms to `SortComparator`. Creates an unsortable column result from two sources.
- [buildBlock(\_:\_:\_:)](buildblock%28______%29.md): Conforms when `RowValue` conforms to `Identifiable` and `Sort` conforms to `SortComparator`. Creates an unsortable column result from three sources.
- [buildBlock(\_:\_:\_:\_:)](buildblock%28________%29.md): Conforms when `RowValue` conforms to `Identifiable` and `Sort` conforms to `SortComparator`. Creates an unsortable column result from four sources.
- [buildBlock(\_:\_:\_:\_:\_:)](buildblock%28__________%29.md): Conforms when `RowValue` conforms to `Identifiable` and `Sort` conforms to `SortComparator`. Creates an unsortable column result from five sources.
- [buildBlock(\_:\_:\_:\_:\_:\_:)](buildblock%28____________%29.md): Conforms when `RowValue` conforms to `Identifiable` and `Sort` conforms to `SortComparator`. Creates an unsortable column result from six sources.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:)](buildblock%28______________%29.md): Conforms when `RowValue` conforms to `Identifiable` and `Sort` conforms to `SortComparator`. Creates an unsortable column result from seven sources.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:)](buildblock%28________________%29.md): Conforms when `RowValue` conforms to `Identifiable` and `Sort` conforms to `SortComparator`. Creates an unsortable column result from eight sources.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](buildblock%28____________________%29.md): Conforms when `RowValue` conforms to `Identifiable` and `Sort` conforms to `SortComparator`. Creates an unsortable column result from ten sources.
- [buildExpression(\_:)](buildexpression%28__%29.md): Creates a generic, unsortable single column expression.
