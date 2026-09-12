> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdelegate/tableview(_:shouldtypeselectfor:withcurrentsearch:)](https://developer.apple.com/documentation/appkit/nstableviewdelegate/tableview(_:shouldtypeselectfor:withcurrentsearch:))

# tableView(\_:shouldTypeSelectFor:withCurrentSearch:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Asks the delegate to allow or deny type select for the specified event and current search string.

## Declaration

```swift
@MainActor optional func tableView(_ tableView: NSTableView, shouldTypeSelectFor event: NSEvent, withCurrentSearch searchString: String?) -> Bool
```

## Parameters

- `tableView`: The table view that sent the message.
- `event`: The event.
- `searchString`: The search string or `nil` if no type select has began.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow type select for event, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

Typically, this is called from the [NSTableView](../nstableview.md) `keyDown:` implementation and the event will be a key event.

## See Also

### Selecting rows

- [selectionShouldChange(in:)](selectionshouldchange%28in_%29.md): Asks the delegate if the user is allowed to change the selection.
- [tableView(\_:shouldSelectRow:)](tableview%28__shouldselectrow_%29.md): Asks the delegate if the table view should allow selection of the specified row.
- [tableView(\_:selectionIndexesForProposedSelection:)](tableview%28__selectionindexesforproposedselection_%29.md): Asks the delegate to accept or reject the proposed selection.
- [tableView(\_:shouldSelect:)](tableview%28__shouldselect_%29.md): Asks the delegate whether the specified table column can be selected.
- [tableViewSelectionIsChanging(\_:)](tableviewselectionischanging%28__%29.md): Tells the delegate that the table view’s selection is in the process of changing.
- [tableViewSelectionDidChange(\_:)](tableviewselectiondidchange%28__%29.md): Tells the delegate that the table view’s selection has changed.
- [tableView(\_:typeSelectStringFor:row:)](tableview%28__typeselectstringfor_row_%29.md): Asks the delegate to provide an alternative text value used for type selection for the specified row and column.
- [tableView(\_:nextTypeSelectMatchFromRow:toRow:for:)](tableview%28__nexttypeselectmatchfromrow_torow_for_%29.md): Asks the delegate for the row within the specified search range that matches the specified string.

# tableView:shouldTypeSelectForEvent:withCurrentSearchString: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Asks the delegate to allow or deny type select for the specified event and current search string.

## Declaration

```objectivec
- (BOOL) tableView:(NSTableView *) tableView shouldTypeSelectForEvent:(NSEvent *) event withCurrentSearchString:(NSString *) searchString;
```

## Parameters

- `tableView`: The table view that sent the message.
- `event`: The event.
- `searchString`: The search string or `nil` if no type select has began.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow type select for event, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

Typically, this is called from the [NSTableView](../nstableview.md) `keyDown:` implementation and the event will be a key event.

## See Also

### Selecting rows

- [selectionShouldChangeInTableView:](selectionshouldchange%28in_%29.md): Asks the delegate if the user is allowed to change the selection.
- [tableView:shouldSelectRow:](tableview%28__shouldselectrow_%29.md): Asks the delegate if the table view should allow selection of the specified row.
- [tableView:selectionIndexesForProposedSelection:](tableview%28__selectionindexesforproposedselection_%29.md): Asks the delegate to accept or reject the proposed selection.
- [tableView:shouldSelectTableColumn:](tableview%28__shouldselect_%29.md): Asks the delegate whether the specified table column can be selected.
- [tableViewSelectionIsChanging:](tableviewselectionischanging%28__%29.md): Tells the delegate that the table view’s selection is in the process of changing.
- [tableViewSelectionDidChange:](tableviewselectiondidchange%28__%29.md): Tells the delegate that the table view’s selection has changed.
- [tableView:typeSelectStringForTableColumn:row:](tableview%28__typeselectstringfor_row_%29.md): Asks the delegate to provide an alternative text value used for type selection for the specified row and column.
- [tableView:nextTypeSelectMatchFromRow:toRow:forString:](tableview%28__nexttypeselectmatchfromrow_torow_for_%29.md): Asks the delegate for the row within the specified search range that matches the specified string.
