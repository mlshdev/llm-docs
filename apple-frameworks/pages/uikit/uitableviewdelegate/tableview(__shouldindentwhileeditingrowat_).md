> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableview(_:shouldindentwhileeditingrowat:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableview(_:shouldindentwhileeditingrowat:))

# tableView(\_:shouldIndentWhileEditingRowAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Asks the delegate whether the background of the specified row should be indented while the table view is in editing mode.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, shouldIndentWhileEditingRowAt indexPath: IndexPath) -> Bool
```

## Parameters

- `tableView`: The table view requesting this information.
- `indexPath`: An index path locating the row in its section.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the background of the row should be indented, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the delegate does not implement this method, the default is [true](https://developer.apple.com/documentation/swift/true). This method is unrelated to [tableView(\_:indentationLevelForRowAt:)](tableview%28__indentationlevelforrowat_%29.md).

## See Also

### Editing table rows

- [tableView(\_:willBeginEditingRowAt:)](tableview%28__willbegineditingrowat_%29.md): Tells the delegate that the table view is about to go into editing mode.
- [tableView(\_:didEndEditingRowAt:)](tableview%28__didendeditingrowat_%29.md): Tells the delegate that the table view has left editing mode.
- [tableView(\_:editingStyleForRowAt:)](tableview%28__editingstyleforrowat_%29.md): Asks the delegate for the editing style of a row at a particular location in a table view.
- [tableView(\_:titleForDeleteConfirmationButtonForRowAt:)](tableview%28__titlefordeleteconfirmationbuttonforrowat_%29.md): Changes the default title of the delete-confirmation button.

# tableView:shouldIndentWhileEditingRowAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the delegate whether the background of the specified row should be indented while the table view is in editing mode.

## Declaration

```objectivec
- (BOOL) tableView:(UITableView *) tableView shouldIndentWhileEditingRowAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `tableView`: The table view requesting this information.
- `indexPath`: An index path locating the row in its section.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the background of the row should be indented, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the delegate does not implement this method, the default is [true](https://developer.apple.com/documentation/swift/true). This method is unrelated to [tableView:indentationLevelForRowAtIndexPath:](tableview%28__indentationlevelforrowat_%29.md).

## See Also

### Editing table rows

- [tableView:willBeginEditingRowAtIndexPath:](tableview%28__willbegineditingrowat_%29.md): Tells the delegate that the table view is about to go into editing mode.
- [tableView:didEndEditingRowAtIndexPath:](tableview%28__didendeditingrowat_%29.md): Tells the delegate that the table view has left editing mode.
- [tableView:editingStyleForRowAtIndexPath:](tableview%28__editingstyleforrowat_%29.md): Asks the delegate for the editing style of a row at a particular location in a table view.
- [tableView:titleForDeleteConfirmationButtonForRowAtIndexPath:](tableview%28__titlefordeleteconfirmationbuttonforrowat_%29.md): Changes the default title of the delete-confirmation button.
