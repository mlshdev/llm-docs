> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdelegate/selectionshouldchange(in:)](https://developer.apple.com/documentation/appkit/nstableviewdelegate/selectionshouldchange(in:))

# selectionShouldChange(in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Asks the delegate if the user is allowed to change the selection.

## Declaration

```swift
@MainActor optional func selectionShouldChange(in tableView: NSTableView) -> Bool
```

## Parameters

- `tableView`: The table view that sent the message.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow the table view to change its selection (typically a row being edited), [false](https://developer.apple.com/documentation/swift/false) to deny selection change.

<a id="Discussion"></a>

## Discussion

The user can select and edit different cells within the same row, but can’t select another row unless the delegate approves. The delegate can implement this method for complex validation of edited rows based on the values of any of their cells.

## See Also

### Selecting rows

- [tableView(\_:shouldSelectRow:)](tableview%28__shouldselectrow_%29.md): Asks the delegate if the table view should allow selection of the specified row.
- [tableView(\_:selectionIndexesForProposedSelection:)](tableview%28__selectionindexesforproposedselection_%29.md): Asks the delegate to accept or reject the proposed selection.
- [tableView(\_:shouldSelect:)](tableview%28__shouldselect_%29.md): Asks the delegate whether the specified table column can be selected.
- [tableViewSelectionIsChanging(\_:)](tableviewselectionischanging%28__%29.md): Tells the delegate that the table view’s selection is in the process of changing.
- [tableViewSelectionDidChange(\_:)](tableviewselectiondidchange%28__%29.md): Tells the delegate that the table view’s selection has changed.
- [tableView(\_:shouldTypeSelectFor:withCurrentSearch:)](tableview%28__shouldtypeselectfor_withcurrentsearch_%29.md): Asks the delegate to allow or deny type select for the specified event and current search string.
- [tableView(\_:typeSelectStringFor:row:)](tableview%28__typeselectstringfor_row_%29.md): Asks the delegate to provide an alternative text value used for type selection for the specified row and column.
- [tableView(\_:nextTypeSelectMatchFromRow:toRow:for:)](tableview%28__nexttypeselectmatchfromrow_torow_for_%29.md): Asks the delegate for the row within the specified search range that matches the specified string.

# selectionShouldChangeInTableView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Asks the delegate if the user is allowed to change the selection.

## Declaration

```objectivec
- (BOOL) selectionShouldChangeInTableView:(NSTableView *) tableView;
```

## Parameters

- `tableView`: The table view that sent the message.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow the table view to change its selection (typically a row being edited), [false](https://developer.apple.com/documentation/swift/false) to deny selection change.

<a id="Discussion"></a>

## Discussion

The user can select and edit different cells within the same row, but can’t select another row unless the delegate approves. The delegate can implement this method for complex validation of edited rows based on the values of any of their cells.

## See Also

### Selecting rows

- [tableView:shouldSelectRow:](tableview%28__shouldselectrow_%29.md): Asks the delegate if the table view should allow selection of the specified row.
- [tableView:selectionIndexesForProposedSelection:](tableview%28__selectionindexesforproposedselection_%29.md): Asks the delegate to accept or reject the proposed selection.
- [tableView:shouldSelectTableColumn:](tableview%28__shouldselect_%29.md): Asks the delegate whether the specified table column can be selected.
- [tableViewSelectionIsChanging:](tableviewselectionischanging%28__%29.md): Tells the delegate that the table view’s selection is in the process of changing.
- [tableViewSelectionDidChange:](tableviewselectiondidchange%28__%29.md): Tells the delegate that the table view’s selection has changed.
- [tableView:shouldTypeSelectForEvent:withCurrentSearchString:](tableview%28__shouldtypeselectfor_withcurrentsearch_%29.md): Asks the delegate to allow or deny type select for the specified event and current search string.
- [tableView:typeSelectStringForTableColumn:row:](tableview%28__typeselectstringfor_row_%29.md): Asks the delegate to provide an alternative text value used for type selection for the specified row and column.
- [tableView:nextTypeSelectMatchFromRow:toRow:forString:](tableview%28__nexttypeselectmatchfromrow_torow_for_%29.md): Asks the delegate for the row within the specified search range that matches the specified string.
