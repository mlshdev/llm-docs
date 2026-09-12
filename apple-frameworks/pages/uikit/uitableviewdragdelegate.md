> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdragdelegate](https://developer.apple.com/documentation/uikit/uitableviewdragdelegate)

# UITableViewDragDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface for initiating drags from a table view.

## Declaration

```swift
@MainActor protocol UITableViewDragDelegate : NSObjectProtocol
```

## Mentioned In

- [Supporting drag and drop in table views](supporting-drag-and-drop-in-table-views.md)

<a id="overview"></a>

## Overview

Implement this protocol in the object that you use to initiate drags from your table view. The only required method of this protocol is the [tableView(\_:itemsForBeginning:at:)](uitableviewdragdelegate/tableview%28__itemsforbeginning_at_%29.md) method, but you can implement other methods as needed to customize the drag behavior of your table view.

Assign your custom delegate object to the [dragDelegate](uitableview/dragdelegate.md) property of your table view.

## Topics

### Providing the items to drag

- [tableView(\_:itemsForBeginning:at:)](uitableviewdragdelegate/tableview%28__itemsforbeginning_at_%29.md): Provides the initial set of items (if any) to drag.
- [tableView(\_:itemsForAddingTo:at:point:)](uitableviewdragdelegate/tableview%28__itemsforaddingto_at_point_%29.md): Adds the specified items to an existing drag session.

### Tracking the drag session

- [tableView(\_:dragSessionWillBegin:)](uitableviewdragdelegate/tableview%28__dragsessionwillbegin_%29.md): Signals the start of a drag operation involving content from the specified table view.
- [tableView(\_:dragSessionDidEnd:)](uitableviewdragdelegate/tableview%28__dragsessiondidend_%29.md): Signals the end of a drag operation involving content from the specified table view.
- [tableView(\_:dragSessionIsRestrictedToDraggingApplication:)](uitableviewdragdelegate/tableview%28__dragsessionisrestrictedtodraggingapplication_%29.md): Returns a Boolean value indicating whether the dragged content must be dropped in the same app.
- [tableView(\_:dragSessionAllowsMoveOperation:)](uitableviewdragdelegate/tableview%28__dragsessionallowsmoveoperation_%29.md): Returns a Boolean value indicating whether your app supports a move operation for the dragged content.

### Providing a custom preview

- [tableView(\_:dragPreviewParametersForRowAt:)](uitableviewdragdelegate/tableview%28__dragpreviewparametersforrowat_%29.md): Returns custom information about how to display the row at the specified location during the drag.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Drag and drop

- [Supporting drag and drop in table views](supporting-drag-and-drop-in-table-views.md): Initiate drags and handle drops from a table view.
- [Adopting drag and drop in a table view](adopting-drag-and-drop-in-a-table-view.md): Demonstrates how to enable and implement drag and drop for a table view.
- [UITableViewDropDelegate](uitableviewdropdelegate.md): The interface for handling drops in a table view.
- [UITableViewDropCoordinator](uitableviewdropcoordinator.md): An interface for coordinating your custom drop-related actions with the table view.
- [UITableViewDropItem](uitableviewdropitem.md): The data associated with an item being dropped into the table view.
- [UITableViewDropProposal](uitableviewdropproposal.md): Your proposed solution for handling a drop in a table view.

# UITableViewDragDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface for initiating drags from a table view.

## Declaration

```objectivec
@protocol UITableViewDragDelegate <NSObject>
```

## Mentioned In

- [Supporting drag and drop in table views](supporting-drag-and-drop-in-table-views.md)

<a id="overview"></a>

## Overview

Implement this protocol in the object that you use to initiate drags from your table view. The only required method of this protocol is the [tableView:itemsForBeginningDragSession:atIndexPath:](uitableviewdragdelegate/tableview%28__itemsforbeginning_at_%29.md) method, but you can implement other methods as needed to customize the drag behavior of your table view.

Assign your custom delegate object to the [dragDelegate](uitableview/dragdelegate.md) property of your table view.

## Topics

### Providing the items to drag

- [tableView:itemsForBeginningDragSession:atIndexPath:](uitableviewdragdelegate/tableview%28__itemsforbeginning_at_%29.md): Provides the initial set of items (if any) to drag.
- [tableView:itemsForAddingToDragSession:atIndexPath:point:](uitableviewdragdelegate/tableview%28__itemsforaddingto_at_point_%29.md): Adds the specified items to an existing drag session.

### Tracking the drag session

- [tableView:dragSessionWillBegin:](uitableviewdragdelegate/tableview%28__dragsessionwillbegin_%29.md): Signals the start of a drag operation involving content from the specified table view.
- [tableView:dragSessionDidEnd:](uitableviewdragdelegate/tableview%28__dragsessiondidend_%29.md): Signals the end of a drag operation involving content from the specified table view.
- [tableView:dragSessionIsRestrictedToDraggingApplication:](uitableviewdragdelegate/tableview%28__dragsessionisrestrictedtodraggingapplication_%29.md): Returns a Boolean value indicating whether the dragged content must be dropped in the same app.
- [tableView:dragSessionAllowsMoveOperation:](uitableviewdragdelegate/tableview%28__dragsessionallowsmoveoperation_%29.md): Returns a Boolean value indicating whether your app supports a move operation for the dragged content.

### Providing a custom preview

- [tableView:dragPreviewParametersForRowAtIndexPath:](uitableviewdragdelegate/tableview%28__dragpreviewparametersforrowat_%29.md): Returns custom information about how to display the row at the specified location during the drag.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Drag and drop

- [Supporting drag and drop in table views](supporting-drag-and-drop-in-table-views.md): Initiate drags and handle drops from a table view.
- [Adopting drag and drop in a table view](adopting-drag-and-drop-in-a-table-view.md): Demonstrates how to enable and implement drag and drop for a table view.
- [UITableViewDropDelegate](uitableviewdropdelegate.md): The interface for handling drops in a table view.
- [UITableViewDropCoordinator](uitableviewdropcoordinator.md): An interface for coordinating your custom drop-related actions with the table view.
- [UITableViewDropItem](uitableviewdropitem.md): The data associated with an item being dropped into the table view.
- [UITableViewDropProposal](uitableviewdropproposal.md): Your proposed solution for handling a drop in a table view.
