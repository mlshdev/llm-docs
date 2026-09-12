> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/hiderows(at:withanimation:)](https://developer.apple.com/documentation/appkit/nstableview/hiderows(at:withanimation:))

# hideRows(at:withAnimation:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Hides the specified table rows.

## Declaration

```swift
func hideRows(at indexes: IndexSet, withAnimation rowAnimation: NSTableView.AnimationOptions = [])
```

## Parameters

- `indexes`: An index set containing indexes of the rows to be hidden.
- `rowAnimation`: An animation effect to be applied when the rows are hidden.

<a id="Discussion"></a>

## Discussion

Use this method when you no longer want the data to be visible to the user, but you don’t want to permanently remove the data. Hidden table rows have a height of zero and cannot be selected by the user. However, if a selected table row is hidden, it will remain selected.

Hiding a table row causes the [tableView(\_:didRemove:forRow:)](../nstableviewdelegate/tableview%28__didremove_forrow_%29.md) delegate method to be invoked.

## See Also

### Related Documentation

- [NSTableView.AnimationOptions](animationoptions.md): Specifies the animation effects to apply when inserting or removing rows.
- [tableView(\_:didRemove:forRow:)](../nstableviewdelegate/tableview%28__didremove_forrow_%29.md): Tells the delegate that a row view was removed from the table at the specified row.

### Hiding and Showing Table Rows

- [unhideRows(at:withAnimation:)](unhiderows%28at_withanimation_%29.md): Unhides the specified table rows.
- [hiddenRowIndexes](hiddenrowindexes.md): The indexes of all hidden table rows.

# hideRowsAtIndexes:withAnimation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Hides the specified table rows.

## Declaration

```objectivec
- (void) hideRowsAtIndexes:(NSIndexSet *) indexes withAnimation:(NSTableViewAnimationOptions) rowAnimation;
```

## Parameters

- `indexes`: An index set containing indexes of the rows to be hidden.
- `rowAnimation`: An animation effect to be applied when the rows are hidden.

<a id="Discussion"></a>

## Discussion

Use this method when you no longer want the data to be visible to the user, but you don’t want to permanently remove the data. Hidden table rows have a height of zero and cannot be selected by the user. However, if a selected table row is hidden, it will remain selected.

Hiding a table row causes the [tableView:didRemoveRowView:forRow:](../nstableviewdelegate/tableview%28__didremove_forrow_%29.md) delegate method to be invoked.

## See Also

### Related Documentation

- [NSTableViewAnimationOptions](animationoptions.md): Specifies the animation effects to apply when inserting or removing rows.
- [tableView:didRemoveRowView:forRow:](../nstableviewdelegate/tableview%28__didremove_forrow_%29.md): Tells the delegate that a row view was removed from the table at the specified row.

### Hiding and Showing Table Rows

- [unhideRowsAtIndexes:withAnimation:](unhiderows%28at_withanimation_%29.md): Unhides the specified table rows.
- [hiddenRowIndexes](hiddenrowindexes.md): The indexes of all hidden table rows.
