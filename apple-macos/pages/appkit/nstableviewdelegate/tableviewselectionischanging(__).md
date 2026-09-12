> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdelegate/tableviewselectionischanging(_:)](https://developer.apple.com/documentation/appkit/nstableviewdelegate/tableviewselectionischanging(_:))

# tableViewSelectionIsChanging(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the delegate that the table view’s selection is in the process of changing.

## Declaration

```swift
@MainActor optional func tableViewSelectionIsChanging(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [selectionIsChangingNotification](../nstableview/selectionischangingnotification.md).

<a id="Discussion"></a>

## Discussion

This method is called only when mouse events—and not keyboard events—are changing the selection. For example, this method is called when the user drags the mouse across multiple table rows.

## See Also

### Selecting rows

- [selectionShouldChange(in:)](selectionshouldchange%28in_%29.md): Asks the delegate if the user is allowed to change the selection.
- [tableView(\_:shouldSelectRow:)](tableview%28__shouldselectrow_%29.md): Asks the delegate if the table view should allow selection of the specified row.
- [tableView(\_:selectionIndexesForProposedSelection:)](tableview%28__selectionindexesforproposedselection_%29.md): Asks the delegate to accept or reject the proposed selection.
- [tableView(\_:shouldSelect:)](tableview%28__shouldselect_%29.md): Asks the delegate whether the specified table column can be selected.
- [tableViewSelectionDidChange(\_:)](tableviewselectiondidchange%28__%29.md): Tells the delegate that the table view’s selection has changed.
- [tableView(\_:shouldTypeSelectFor:withCurrentSearch:)](tableview%28__shouldtypeselectfor_withcurrentsearch_%29.md): Asks the delegate to allow or deny type select for the specified event and current search string.
- [tableView(\_:typeSelectStringFor:row:)](tableview%28__typeselectstringfor_row_%29.md): Asks the delegate to provide an alternative text value used for type selection for the specified row and column.
- [tableView(\_:nextTypeSelectMatchFromRow:toRow:for:)](tableview%28__nexttypeselectmatchfromrow_torow_for_%29.md): Asks the delegate for the row within the specified search range that matches the specified string.

# tableViewSelectionIsChanging: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the table view’s selection is in the process of changing.

## Declaration

```objectivec
- (void) tableViewSelectionIsChanging:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSTableViewSelectionIsChangingNotification](../nstableview/selectionischangingnotification.md).

<a id="Discussion"></a>

## Discussion

This method is called only when mouse events—and not keyboard events—are changing the selection. For example, this method is called when the user drags the mouse across multiple table rows.

## See Also

### Selecting rows

- [selectionShouldChangeInTableView:](selectionshouldchange%28in_%29.md): Asks the delegate if the user is allowed to change the selection.
- [tableView:shouldSelectRow:](tableview%28__shouldselectrow_%29.md): Asks the delegate if the table view should allow selection of the specified row.
- [tableView:selectionIndexesForProposedSelection:](tableview%28__selectionindexesforproposedselection_%29.md): Asks the delegate to accept or reject the proposed selection.
- [tableView:shouldSelectTableColumn:](tableview%28__shouldselect_%29.md): Asks the delegate whether the specified table column can be selected.
- [tableViewSelectionDidChange:](tableviewselectiondidchange%28__%29.md): Tells the delegate that the table view’s selection has changed.
- [tableView:shouldTypeSelectForEvent:withCurrentSearchString:](tableview%28__shouldtypeselectfor_withcurrentsearch_%29.md): Asks the delegate to allow or deny type select for the specified event and current search string.
- [tableView:typeSelectStringForTableColumn:row:](tableview%28__typeselectstringfor_row_%29.md): Asks the delegate to provide an alternative text value used for type selection for the specified row and column.
- [tableView:nextTypeSelectMatchFromRow:toRow:forString:](tableview%28__nexttypeselectmatchfromrow_torow_for_%29.md): Asks the delegate for the row within the specified search range that matches the specified string.
