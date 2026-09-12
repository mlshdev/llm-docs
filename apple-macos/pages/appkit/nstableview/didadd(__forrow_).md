> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/didadd(_:forrow:)](https://developer.apple.com/documentation/appkit/nstableview/didadd(_:forrow:))

# didAdd(\_:forRow:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Invoked when a row view is added to the table.

## Declaration

```swift
func didAdd(_ rowView: NSTableRowView, forRow row: Int)
```

## Parameters

- `rowView`: The row view.
- `row`: The row index.

<a id="Discussion"></a>

## Discussion

The subclass can implement this method to be alerted when `rowView` has been added to the table. At this point, the subclass can choose to add in extra views, or modify any properties of `rowView`. Subclasses must be sure to call super.

> **Note**

>  This method is only applicable to [NSView](../nsview.md)-based table views.

## See Also

### Adding and Deleting Row Views

- [didRemove(\_:forRow:)](didremove%28__forrow_%29.md): Invoked when a row view is removed from the table.

# didAddRowView:forRow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Invoked when a row view is added to the table.

## Declaration

```objectivec
- (void) didAddRowView:(NSTableRowView *) rowView forRow:(NSInteger) row;
```

## Parameters

- `rowView`: The row view.
- `row`: The row index.

<a id="Discussion"></a>

## Discussion

The subclass can implement this method to be alerted when `rowView` has been added to the table. At this point, the subclass can choose to add in extra views, or modify any properties of `rowView`. Subclasses must be sure to call super.

> **Note**

>  This method is only applicable to [NSView](../nsview.md)-based table views.

## See Also

### Adding and Deleting Row Views

- [didRemoveRowView:forRow:](didremove%28__forrow_%29.md): Invoked when a row view is removed from the table.
