> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdelegate/tableview(_:nexttypeselectmatchfromrow:torow:for:)](https://developer.apple.com/documentation/appkit/nstableviewdelegate/tableview(_:nexttypeselectmatchfromrow:torow:for:))

# tableView(\_:nextTypeSelectMatchFromRow:toRow:for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Asks the delegate for the row within the specified search range that matches the specified string.

## Declaration

```swift
@MainActor optional func tableView(_ tableView: NSTableView, nextTypeSelectMatchFromRow startRow: Int, toRow endRow: Int, for searchString: String) -> Int
```

## Parameters

- `tableView`: The table view that sent the message.
- `startRow`: The starting row of the search range.
- `endRow`: The ending row of the search range.
- `searchString`: A string containing the typed selection.

<a id="return-value"></a>

## Return Value

The first row in the range of `startRow` through `endRow` (excluding `endRow` itself) that matches `selectionString`. Return `-1` if no match is found.

<a id="Discussion"></a>

## Discussion

Use this method to control how type selection works in a table. (Implementation of this method isn’t required to support type selection.) Note that it’s possible for `endRow` to be less than `startRow` if the search will wrap.

## See Also

### Selecting rows

- [selectionShouldChange(in:)](selectionshouldchange%28in_%29.md): Asks the delegate if the user is allowed to change the selection.
- [tableView(\_:shouldSelectRow:)](tableview%28__shouldselectrow_%29.md): Asks the delegate if the table view should allow selection of the specified row.
- [tableView(\_:selectionIndexesForProposedSelection:)](tableview%28__selectionindexesforproposedselection_%29.md): Asks the delegate to accept or reject the proposed selection.
- [tableView(\_:shouldSelect:)](tableview%28__shouldselect_%29.md): Asks the delegate whether the specified table column can be selected.
- [tableViewSelectionIsChanging(\_:)](tableviewselectionischanging%28__%29.md): Tells the delegate that the table view’s selection is in the process of changing.
- [tableViewSelectionDidChange(\_:)](tableviewselectiondidchange%28__%29.md): Tells the delegate that the table view’s selection has changed.
- [tableView(\_:shouldTypeSelectFor:withCurrentSearch:)](tableview%28__shouldtypeselectfor_withcurrentsearch_%29.md): Asks the delegate to allow or deny type select for the specified event and current search string.
- [tableView(\_:typeSelectStringFor:row:)](tableview%28__typeselectstringfor_row_%29.md): Asks the delegate to provide an alternative text value used for type selection for the specified row and column.

# tableView:nextTypeSelectMatchFromRow:toRow:forString: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Asks the delegate for the row within the specified search range that matches the specified string.

## Declaration

```objectivec
- (NSInteger) tableView:(NSTableView *) tableView nextTypeSelectMatchFromRow:(NSInteger) startRow toRow:(NSInteger) endRow forString:(NSString *) searchString;
```

## Parameters

- `tableView`: The table view that sent the message.
- `startRow`: The starting row of the search range.
- `endRow`: The ending row of the search range.
- `searchString`: A string containing the typed selection.

<a id="return-value"></a>

## Return Value

The first row in the range of `startRow` through `endRow` (excluding `endRow` itself) that matches `selectionString`. Return `-1` if no match is found.

<a id="Discussion"></a>

## Discussion

Use this method to control how type selection works in a table. (Implementation of this method isn’t required to support type selection.) Note that it’s possible for `endRow` to be less than `startRow` if the search will wrap.

## See Also

### Selecting rows

- [selectionShouldChangeInTableView:](selectionshouldchange%28in_%29.md): Asks the delegate if the user is allowed to change the selection.
- [tableView:shouldSelectRow:](tableview%28__shouldselectrow_%29.md): Asks the delegate if the table view should allow selection of the specified row.
- [tableView:selectionIndexesForProposedSelection:](tableview%28__selectionindexesforproposedselection_%29.md): Asks the delegate to accept or reject the proposed selection.
- [tableView:shouldSelectTableColumn:](tableview%28__shouldselect_%29.md): Asks the delegate whether the specified table column can be selected.
- [tableViewSelectionIsChanging:](tableviewselectionischanging%28__%29.md): Tells the delegate that the table view’s selection is in the process of changing.
- [tableViewSelectionDidChange:](tableviewselectiondidchange%28__%29.md): Tells the delegate that the table view’s selection has changed.
- [tableView:shouldTypeSelectForEvent:withCurrentSearchString:](tableview%28__shouldtypeselectfor_withcurrentsearch_%29.md): Asks the delegate to allow or deny type select for the specified event and current search string.
- [tableView:typeSelectStringForTableColumn:row:](tableview%28__typeselectstringfor_row_%29.md): Asks the delegate to provide an alternative text value used for type selection for the specified row and column.
