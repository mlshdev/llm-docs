> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/unhiderows(at:withanimation:)](https://developer.apple.com/documentation/appkit/nstableview/unhiderows(at:withanimation:))

# unhideRows(at:withAnimation:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Unhides the specified table rows.

## Declaration

```swift
func unhideRows(at indexes: IndexSet, withAnimation rowAnimation: NSTableView.AnimationOptions = [])
```

## Parameters

- `indexes`: An index set containing indexes of the hidden rows to be shown again.
- `rowAnimation`: An animation effect to be applied when the rows are hidden.

<a id="Discussion"></a>

## Discussion

Unhiding a table row causes the [tableView(\_:didAdd:forRow:)](../nstableviewdelegate/tableview%28__didadd_forrow_%29.md) delegate method to be invoked.

## See Also

### Related Documentation

- [NSTableView.AnimationOptions](animationoptions.md): Specifies the animation effects to apply when inserting or removing rows.
- [tableView(\_:didAdd:forRow:)](../nstableviewdelegate/tableview%28__didadd_forrow_%29.md): Tells the delegate that a row view was added at the specified row.

### Hiding and Showing Table Rows

- [hideRows(at:withAnimation:)](hiderows%28at_withanimation_%29.md): Hides the specified table rows.
- [hiddenRowIndexes](hiddenrowindexes.md): The indexes of all hidden table rows.

# unhideRowsAtIndexes:withAnimation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Unhides the specified table rows.

## Declaration

```objectivec
- (void) unhideRowsAtIndexes:(NSIndexSet *) indexes withAnimation:(NSTableViewAnimationOptions) rowAnimation;
```

## Parameters

- `indexes`: An index set containing indexes of the hidden rows to be shown again.
- `rowAnimation`: An animation effect to be applied when the rows are hidden.

<a id="Discussion"></a>

## Discussion

Unhiding a table row causes the [tableView:didAddRowView:forRow:](../nstableviewdelegate/tableview%28__didadd_forrow_%29.md) delegate method to be invoked.

## See Also

### Related Documentation

- [NSTableViewAnimationOptions](animationoptions.md): Specifies the animation effects to apply when inserting or removing rows.
- [tableView:didAddRowView:forRow:](../nstableviewdelegate/tableview%28__didadd_forrow_%29.md): Tells the delegate that a row view was added at the specified row.

### Hiding and Showing Table Rows

- [hideRowsAtIndexes:withAnimation:](hiderows%28at_withanimation_%29.md): Hides the specified table rows.
- [hiddenRowIndexes](hiddenrowindexes.md): The indexes of all hidden table rows.
