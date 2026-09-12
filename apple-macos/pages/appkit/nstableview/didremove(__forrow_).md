> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/didremove(_:forrow:)](https://developer.apple.com/documentation/appkit/nstableview/didremove(_:forrow:))

# didRemove(\_:forRow:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Invoked when a row view is removed from the table.

## Declaration

```swift
func didRemove(_ rowView: NSTableRowView, forRow row: Int)
```

## Parameters

- `rowView`: The row view.
- `row`: The row index. The index is `-1` for rows that are being deleted from the table, and no longer have a valid row; otherwise it is the valid row that is being removed due to it being moved off screen.

<a id="Discussion"></a>

## Discussion

The subclass can implement this method to be alerted when `rowView` has been removed from the table. The removed `rowView` may be reused by the table, so any additionally inserted views should be removed at this point. Subclasses must be sure to call `super`.

> **Note**

>  This method is only applicable to [NSView](../nsview.md)-based table views.

## See Also

### Adding and Deleting Row Views

- [didAdd(\_:forRow:)](didadd%28__forrow_%29.md): Invoked when a row view is added to the table.

# didRemoveRowView:forRow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Invoked when a row view is removed from the table.

## Declaration

```objectivec
- (void) didRemoveRowView:(NSTableRowView *) rowView forRow:(NSInteger) row;
```

## Parameters

- `rowView`: The row view.
- `row`: The row index. The index is `-1` for rows that are being deleted from the table, and no longer have a valid row; otherwise it is the valid row that is being removed due to it being moved off screen.

<a id="Discussion"></a>

## Discussion

The subclass can implement this method to be alerted when `rowView` has been removed from the table. The removed `rowView` may be reused by the table, so any additionally inserted views should be removed at this point. Subclasses must be sure to call `super`.

> **Note**

>  This method is only applicable to [NSView](../nsview.md)-based table views.

## See Also

### Adding and Deleting Row Views

- [didAddRowView:forRow:](didadd%28__forrow_%29.md): Invoked when a row view is added to the table.
