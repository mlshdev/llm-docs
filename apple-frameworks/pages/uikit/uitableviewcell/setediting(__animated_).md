> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/setediting(_:animated:)](https://developer.apple.com/documentation/uikit/uitableviewcell/setediting(_:animated:))

# setEditing(\_:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Toggles the cell into and out of editing mode.

## Declaration

```swift
func setEditing(_ editing: Bool, animated: Bool)
```

## Parameters

- `editing`: [true](https://developer.apple.com/documentation/swift/true) to enter editing mode, [false](https://developer.apple.com/documentation/swift/false) to leave it. The default value is [false](https://developer.apple.com/documentation/swift/false).
- `animated`: [true](https://developer.apple.com/documentation/swift/true) to animate the appearance or disappearance of the insertion/deletion control and the reordering control, [false](https://developer.apple.com/documentation/swift/false) to make the transition immediate.

<a id="Discussion"></a>

## Discussion

When you call this method with the value of `editing` set to [true](https://developer.apple.com/documentation/swift/true), and the `UITableViewCell` object is configured to have controls, the cell shows an insertion (green plus) or deletion control (red minus) on the left side of each cell and a reordering control on the right side. This method is called on each visible cell when the [setEditing(\_:animated:)](../uitableview/setediting%28__animated_%29.md) method of `UITableView` is invoked. Calling this method with `editing` set to [false](https://developer.apple.com/documentation/swift/false) removes the controls from the cell.

## See Also

### Editing the cell

- [isEditing](isediting.md): A Boolean value that indicates whether the cell is in an editable state.
- [editingStyle](editingstyle-swift.property.md): The editing style of the cell.
- [UITableViewCell.EditingStyle](editingstyle-swift.enum.md): The editing control used by a cell.
- [showingDeleteConfirmation](showingdeleteconfirmation.md): A Boolean value that indicates whether the cell is currently showing the delete-confirmation button.
- [showsReorderControl](showsreordercontrol.md): A Boolean value that determines whether the cell shows the reordering control.

# setEditing:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Toggles the cell into and out of editing mode.

## Declaration

```objectivec
- (void) setEditing:(BOOL) editing animated:(BOOL) animated;
```

## Parameters

- `editing`: [true](https://developer.apple.com/documentation/swift/true) to enter editing mode, [false](https://developer.apple.com/documentation/swift/false) to leave it. The default value is [false](https://developer.apple.com/documentation/swift/false).
- `animated`: [true](https://developer.apple.com/documentation/swift/true) to animate the appearance or disappearance of the insertion/deletion control and the reordering control, [false](https://developer.apple.com/documentation/swift/false) to make the transition immediate.

<a id="Discussion"></a>

## Discussion

When you call this method with the value of `editing` set to [true](https://developer.apple.com/documentation/swift/true), and the `UITableViewCell` object is configured to have controls, the cell shows an insertion (green plus) or deletion control (red minus) on the left side of each cell and a reordering control on the right side. This method is called on each visible cell when the [setEditing:animated:](../uitableview/setediting%28__animated_%29.md) method of `UITableView` is invoked. Calling this method with `editing` set to [false](https://developer.apple.com/documentation/swift/false) removes the controls from the cell.

## See Also

### Editing the cell

- [editing](isediting.md): A Boolean value that indicates whether the cell is in an editable state.
- [editingStyle](editingstyle-swift.property.md): The editing style of the cell.
- [UITableViewCellEditingStyle](editingstyle-swift.enum.md): The editing control used by a cell.
- [showingDeleteConfirmation](showingdeleteconfirmation.md): A Boolean value that indicates whether the cell is currently showing the delete-confirmation button.
- [showsReorderControl](showsreordercontrol.md): A Boolean value that determines whether the cell shows the reordering control.
