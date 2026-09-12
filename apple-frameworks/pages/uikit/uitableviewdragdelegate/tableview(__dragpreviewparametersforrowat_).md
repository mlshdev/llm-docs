> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdragdelegate/tableview(_:dragpreviewparametersforrowat:)](https://developer.apple.com/documentation/uikit/uitableviewdragdelegate/tableview(_:dragpreviewparametersforrowat:))

# tableView(\_:dragPreviewParametersForRowAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns custom information about how to display the row at the specified location during the drag.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, dragPreviewParametersForRowAt indexPath: IndexPath) -> UIDragPreviewParameters?
```

## Parameters

- `tableView`: The table view from which the drag operation originated.
- `indexPath`: The index path of the row being dragged.

<a id="return-value"></a>

## Return Value

A [UIDragPreviewParameters](../uidragpreviewparameters.md) object containing information about how to customize the row’s appearance. Return `nil` to use the default appearance.

<a id="Discussion"></a>

## Discussion

Use this method to customize the appearance of the row during drags. For example, you might use this method to specify that only part of the cell’s visible content should be used for the drag preview. If you don’t implement this method, or if you return `nil`, the drag preview displays the row’s visible content.

In your implementation, create a [UIDragPreviewParameters](../uidragpreviewparameters.md) object and specify the custom preview information for the specified row. Use the parameters to specify the portion of the row that you want to display or to change the background color drawn beneath the row’s contents.

# tableView:dragPreviewParametersForRowAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns custom information about how to display the row at the specified location during the drag.

## Declaration

```objectivec
- (UIDragPreviewParameters *) tableView:(UITableView *) tableView dragPreviewParametersForRowAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `tableView`: The table view from which the drag operation originated.
- `indexPath`: The index path of the row being dragged.

<a id="return-value"></a>

## Return Value

A [UIDragPreviewParameters](../uidragpreviewparameters.md) object containing information about how to customize the row’s appearance. Return `nil` to use the default appearance.

<a id="Discussion"></a>

## Discussion

Use this method to customize the appearance of the row during drags. For example, you might use this method to specify that only part of the cell’s visible content should be used for the drag preview. If you don’t implement this method, or if you return `nil`, the drag preview displays the row’s visible content.

In your implementation, create a [UIDragPreviewParameters](../uidragpreviewparameters.md) object and specify the custom preview information for the specified row. Use the parameters to specify the portion of the row that you want to display or to change the background color drawn beneath the row’s contents.
