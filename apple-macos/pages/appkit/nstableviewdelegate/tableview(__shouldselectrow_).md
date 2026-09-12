> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdelegate/tableview(_:shouldselectrow:)](https://developer.apple.com/documentation/appkit/nstableviewdelegate/tableview(_:shouldselectrow:))

# tableView(\_:shouldSelectRow:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Asks the delegate if the table view should allow selection of the specified row.

## Declaration

```swift
@MainActor optional func tableView(_ tableView: NSTableView, shouldSelectRow row: Int) -> Bool
```

## Parameters

- `tableView`: The table view that sent the message.
- `row`: The row index.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to permit selection of the row, [false](https://developer.apple.com/documentation/swift/false) to deny selection.

<a id="Discussion"></a>

## Discussion

The delegate can implement this method to disallow selection of particular rows.

For better performance and finer-grain control over the selection, use [tableView(\_:selectionIndexesForProposedSelection:)](tableview%28__selectionindexesforproposedselection_%29.md).

## See Also

### Selecting rows

- [selectionShouldChange(in:)](selectionshouldchange%28in_%29.md): Asks the delegate if the user is allowed to change the selection.
- [tableView(\_:selectionIndexesForProposedSelection:)](tableview%28__selectionindexesforproposedselection_%29.md): Asks the delegate to accept or reject the proposed selection.
- [tableView(\_:shouldSelect:)](tableview%28__shouldselect_%29.md): Asks the delegate whether the specified table column can be selected.
- [tableViewSelectionIsChanging(\_:)](tableviewselectionischanging%28__%29.md): Tells the delegate that the table view’s selection is in the process of changing.
- [tableViewSelectionDidChange(\_:)](tableviewselectiondidchange%28__%29.md): Tells the delegate that the table view’s selection has changed.
- [tableView(\_:shouldTypeSelectFor:withCurrentSearch:)](tableview%28__shouldtypeselectfor_withcurrentsearch_%29.md): Asks the delegate to allow or deny type select for the specified event and current search string.
- [tableView(\_:typeSelectStringFor:row:)](tableview%28__typeselectstringfor_row_%29.md): Asks the delegate to provide an alternative text value used for type selection for the specified row and column.
- [tableView(\_:nextTypeSelectMatchFromRow:toRow:for:)](tableview%28__nexttypeselectmatchfromrow_torow_for_%29.md): Asks the delegate for the row within the specified search range that matches the specified string.

# tableView:shouldSelectRow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Asks the delegate if the table view should allow selection of the specified row.

## Declaration

```objectivec
- (BOOL) tableView:(NSTableView *) tableView shouldSelectRow:(NSInteger) row;
```

## Parameters

- `tableView`: The table view that sent the message.
- `row`: The row index.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to permit selection of the row, [false](https://developer.apple.com/documentation/swift/false) to deny selection.

<a id="Discussion"></a>

## Discussion

The delegate can implement this method to disallow selection of particular rows.

For better performance and finer-grain control over the selection, use [tableView:selectionIndexesForProposedSelection:](tableview%28__selectionindexesforproposedselection_%29.md).

## See Also

### Selecting rows

- [selectionShouldChangeInTableView:](selectionshouldchange%28in_%29.md): Asks the delegate if the user is allowed to change the selection.
- [tableView:selectionIndexesForProposedSelection:](tableview%28__selectionindexesforproposedselection_%29.md): Asks the delegate to accept or reject the proposed selection.
- [tableView:shouldSelectTableColumn:](tableview%28__shouldselect_%29.md): Asks the delegate whether the specified table column can be selected.
- [tableViewSelectionIsChanging:](tableviewselectionischanging%28__%29.md): Tells the delegate that the table view’s selection is in the process of changing.
- [tableViewSelectionDidChange:](tableviewselectiondidchange%28__%29.md): Tells the delegate that the table view’s selection has changed.
- [tableView:shouldTypeSelectForEvent:withCurrentSearchString:](tableview%28__shouldtypeselectfor_withcurrentsearch_%29.md): Asks the delegate to allow or deny type select for the specified event and current search string.
- [tableView:typeSelectStringForTableColumn:row:](tableview%28__typeselectstringfor_row_%29.md): Asks the delegate to provide an alternative text value used for type selection for the specified row and column.
- [tableView:nextTypeSelectMatchFromRow:toRow:forString:](tableview%28__nexttypeselectmatchfromrow_torow_for_%29.md): Asks the delegate for the row within the specified search range that matches the specified string.
