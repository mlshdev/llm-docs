> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableview(_:performprimaryactionforrowat:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableview(_:performprimaryactionforrowat:))

# tableView(\_:performPrimaryActionForRowAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Tells the delegate to perform the primary action for the row at the specified index path.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, performPrimaryActionForRowAt indexPath: IndexPath)
```

## Parameters

- `tableView`: The table view object on which to perform the primary action.
- `indexPath`: The index path of the row.

<a id="Discussion"></a>

## Discussion

Primary actions allow you to distinguish between a distinct user action and a change in selection (like a focus change or other indirect selection change). A primary action occurs when a person selects a single row without extending an existing selection.

UIKit calls this method after [tableView(\_:willSelectRowAt:)](tableview%28__willselectrowat_%29.md) and [tableView(\_:didSelectRowAt:)](tableview%28__didselectrowat_%29.md), regardless of whether the row selection state changes. Use [tableView(\_:didSelectRowAt:)](tableview%28__didselectrowat_%29.md) to update the state of the current view controller (like its buttons, title, and so on), and use [tableView(\_:performPrimaryActionForRowAt:)](tableview%28__performprimaryactionforrowat_%29.md) for actions like navigation or showing another split view column.

If [tableView(\_:willSelectRowAt:)](tableview%28__willselectrowat_%29.md) returns an index path to allow selection for the row, only that row has selection when the system calls this method. If [tableView(\_:willSelectRowAt:)](tableview%28__willselectrowat_%29.md) returns `nil`, the system preserves the existing row selection in the table view. You can use this behavior to perform primary actions on nonselectable, button-style rows without changing the selection.

## See Also

### Performing primary actions

- [tableView(\_:canPerformPrimaryActionForRowAt:)](tableview%28__canperformprimaryactionforrowat_%29.md): Asks the delegate whether to perform a primary action for the row at the specified index path.

# tableView:performPrimaryActionForRowAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Tells the delegate to perform the primary action for the row at the specified index path.

## Declaration

```objectivec
- (void) tableView:(UITableView *) tableView performPrimaryActionForRowAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `tableView`: The table view object on which to perform the primary action.
- `indexPath`: The index path of the row.

<a id="Discussion"></a>

## Discussion

Primary actions allow you to distinguish between a distinct user action and a change in selection (like a focus change or other indirect selection change). A primary action occurs when a person selects a single row without extending an existing selection.

UIKit calls this method after [tableView:willSelectRowAtIndexPath:](tableview%28__willselectrowat_%29.md) and [tableView:didSelectRowAtIndexPath:](tableview%28__didselectrowat_%29.md), regardless of whether the row selection state changes. Use [tableView:didSelectRowAtIndexPath:](tableview%28__didselectrowat_%29.md) to update the state of the current view controller (like its buttons, title, and so on), and use [tableView:performPrimaryActionForRowAtIndexPath:](tableview%28__performprimaryactionforrowat_%29.md) for actions like navigation or showing another split view column.

If [tableView:willSelectRowAtIndexPath:](tableview%28__willselectrowat_%29.md) returns an index path to allow selection for the row, only that row has selection when the system calls this method. If [tableView:willSelectRowAtIndexPath:](tableview%28__willselectrowat_%29.md) returns `nil`, the system preserves the existing row selection in the table view. You can use this behavior to perform primary actions on nonselectable, button-style rows without changing the selection.

## See Also

### Performing primary actions

- [tableView:canPerformPrimaryActionForRowAtIndexPath:](tableview%28__canperformprimaryactionforrowat_%29.md): Asks the delegate whether to perform a primary action for the row at the specified index path.
