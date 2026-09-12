> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdelegate/tableview(_:typeselectstringfor:row:)](https://developer.apple.com/documentation/appkit/nstableviewdelegate/tableview(_:typeselectstringfor:row:))

# tableView(\_:typeSelectStringFor:row:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Asks the delegate to provide an alternative text value used for type selection for the specified row and column.

## Declaration

```swift
@MainActor optional func tableView(_ tableView: NSTableView, typeSelectStringFor tableColumn: NSTableColumn?, row: Int) -> String?
```

## Parameters

- `tableView`: The table view that sent the message.
- `tableColumn`: The table column.
- `row`: The row index.

<a id="return-value"></a>

## Return Value

A string that is used in type select comparison for `row` and `tableColumn`. Return `nil` if `row` or `tableColumn` should not be searched.

<a id="Discussion"></a>

## Discussion

Implement this method to change the string value that is searched for based on what is displayed. By default, all cells with text in them are searched.

If this delegate method isn’t implemented, the default string value (which can also be returned from the delegate method) is:

```objc
[[tableView preparedCellAtColumn:tableColumn row:row] stringValue]
```

## See Also

### Selecting rows

- [selectionShouldChange(in:)](selectionshouldchange%28in_%29.md): Asks the delegate if the user is allowed to change the selection.
- [tableView(\_:shouldSelectRow:)](tableview%28__shouldselectrow_%29.md): Asks the delegate if the table view should allow selection of the specified row.
- [tableView(\_:selectionIndexesForProposedSelection:)](tableview%28__selectionindexesforproposedselection_%29.md): Asks the delegate to accept or reject the proposed selection.
- [tableView(\_:shouldSelect:)](tableview%28__shouldselect_%29.md): Asks the delegate whether the specified table column can be selected.
- [tableViewSelectionIsChanging(\_:)](tableviewselectionischanging%28__%29.md): Tells the delegate that the table view’s selection is in the process of changing.
- [tableViewSelectionDidChange(\_:)](tableviewselectiondidchange%28__%29.md): Tells the delegate that the table view’s selection has changed.
- [tableView(\_:shouldTypeSelectFor:withCurrentSearch:)](tableview%28__shouldtypeselectfor_withcurrentsearch_%29.md): Asks the delegate to allow or deny type select for the specified event and current search string.
- [tableView(\_:nextTypeSelectMatchFromRow:toRow:for:)](tableview%28__nexttypeselectmatchfromrow_torow_for_%29.md): Asks the delegate for the row within the specified search range that matches the specified string.

# tableView:typeSelectStringForTableColumn:row: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Asks the delegate to provide an alternative text value used for type selection for the specified row and column.

## Declaration

```objectivec
- (NSString *) tableView:(NSTableView *) tableView typeSelectStringForTableColumn:(NSTableColumn *) tableColumn row:(NSInteger) row;
```

## Parameters

- `tableView`: The table view that sent the message.
- `tableColumn`: The table column.
- `row`: The row index.

<a id="return-value"></a>

## Return Value

A string that is used in type select comparison for `row` and `tableColumn`. Return `nil` if `row` or `tableColumn` should not be searched.

<a id="Discussion"></a>

## Discussion

Implement this method to change the string value that is searched for based on what is displayed. By default, all cells with text in them are searched.

If this delegate method isn’t implemented, the default string value (which can also be returned from the delegate method) is:

```objc
[[tableView preparedCellAtColumn:tableColumn row:row] stringValue]
```

## See Also

### Selecting rows

- [selectionShouldChangeInTableView:](selectionshouldchange%28in_%29.md): Asks the delegate if the user is allowed to change the selection.
- [tableView:shouldSelectRow:](tableview%28__shouldselectrow_%29.md): Asks the delegate if the table view should allow selection of the specified row.
- [tableView:selectionIndexesForProposedSelection:](tableview%28__selectionindexesforproposedselection_%29.md): Asks the delegate to accept or reject the proposed selection.
- [tableView:shouldSelectTableColumn:](tableview%28__shouldselect_%29.md): Asks the delegate whether the specified table column can be selected.
- [tableViewSelectionIsChanging:](tableviewselectionischanging%28__%29.md): Tells the delegate that the table view’s selection is in the process of changing.
- [tableViewSelectionDidChange:](tableviewselectiondidchange%28__%29.md): Tells the delegate that the table view’s selection has changed.
- [tableView:shouldTypeSelectForEvent:withCurrentSearchString:](tableview%28__shouldtypeselectfor_withcurrentsearch_%29.md): Asks the delegate to allow or deny type select for the specified event and current search string.
- [tableView:nextTypeSelectMatchFromRow:toRow:forString:](tableview%28__nexttypeselectmatchfromrow_torow_for_%29.md): Asks the delegate for the row within the specified search range that matches the specified string.
