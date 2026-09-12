> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdropdelegate](https://developer.apple.com/documentation/uikit/uitableviewdropdelegate)

# UITableViewDropDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface for handling drops in a table view.

## Declaration

```swift
@MainActor protocol UITableViewDropDelegate : NSObjectProtocol
```

## Mentioned In

- [Supporting drag and drop in table views](supporting-drag-and-drop-in-table-views.md)

<a id="overview"></a>

## Overview

Implement this protocol in the object that you use to incorporate dropped data into your table view. The only required method of this protocol is the [tableView(\_:performDropWith:)](uitableviewdropdelegate/tableview%28__performdropwith_%29.md) method, but you can implement other methods as needed to customize the drop behavior of your table view.

Assign your custom delegate object to the [dropDelegate](uitableview/dropdelegate.md) property of your table view.

## Topics

### Declaring support for handling drops

- [tableView(\_:canHandle:)](uitableviewdropdelegate/tableview%28__canhandle_%29.md): Asks your delegate whether it can accept the specified type of data.

### Providing a custom drop preview

- [tableView(\_:dropPreviewParametersForRowAt:)](uitableviewdropdelegate/tableview%28__droppreviewparametersforrowat_%29.md): Returns custom information about how to display the row at the specified location during the drop.

### Incorporating the dropped data

- [tableView(\_:performDropWith:)](uitableviewdropdelegate/tableview%28__performdropwith_%29.md): Incorporates the dropped data into your data structures and updates the table.

### Tracking the drag movements

- [tableView(\_:dropSessionDidUpdate:withDestinationIndexPath:)](uitableviewdropdelegate/tableview%28__dropsessiondidupdate_withdestinationindexpath_%29.md): Proposes how to handle a drop at the specified location in the table view.
- [tableView(\_:dropSessionDidEnter:)](uitableviewdropdelegate/tableview%28__dropsessiondidenter_%29.md): Notifies the delegate when dragged content enters the table view’s bounds rectangle.
- [tableView(\_:dropSessionDidExit:)](uitableviewdropdelegate/tableview%28__dropsessiondidexit_%29.md): Notifies the delegate when dragged content exits the table view’s bounds rectangle.
- [tableView(\_:dropSessionDidEnd:)](uitableviewdropdelegate/tableview%28__dropsessiondidend_%29.md): Notifies the delegate when the drag operation ends.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Drag and drop

- [Supporting drag and drop in table views](supporting-drag-and-drop-in-table-views.md): Initiate drags and handle drops from a table view.
- [Adopting drag and drop in a table view](adopting-drag-and-drop-in-a-table-view.md): Demonstrates how to enable and implement drag and drop for a table view.
- [UITableViewDragDelegate](uitableviewdragdelegate.md): The interface for initiating drags from a table view.
- [UITableViewDropCoordinator](uitableviewdropcoordinator.md): An interface for coordinating your custom drop-related actions with the table view.
- [UITableViewDropItem](uitableviewdropitem.md): The data associated with an item being dropped into the table view.
- [UITableViewDropProposal](uitableviewdropproposal.md): Your proposed solution for handling a drop in a table view.

# UITableViewDropDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface for handling drops in a table view.

## Declaration

```objectivec
@protocol UITableViewDropDelegate <NSObject>
```

## Mentioned In

- [Supporting drag and drop in table views](supporting-drag-and-drop-in-table-views.md)

<a id="overview"></a>

## Overview

Implement this protocol in the object that you use to incorporate dropped data into your table view. The only required method of this protocol is the [tableView:performDropWithCoordinator:](uitableviewdropdelegate/tableview%28__performdropwith_%29.md) method, but you can implement other methods as needed to customize the drop behavior of your table view.

Assign your custom delegate object to the [dropDelegate](uitableview/dropdelegate.md) property of your table view.

## Topics

### Declaring support for handling drops

- [tableView:canHandleDropSession:](uitableviewdropdelegate/tableview%28__canhandle_%29.md): Asks your delegate whether it can accept the specified type of data.

### Providing a custom drop preview

- [tableView:dropPreviewParametersForRowAtIndexPath:](uitableviewdropdelegate/tableview%28__droppreviewparametersforrowat_%29.md): Returns custom information about how to display the row at the specified location during the drop.

### Incorporating the dropped data

- [tableView:performDropWithCoordinator:](uitableviewdropdelegate/tableview%28__performdropwith_%29.md): Incorporates the dropped data into your data structures and updates the table.

### Tracking the drag movements

- [tableView:dropSessionDidUpdate:withDestinationIndexPath:](uitableviewdropdelegate/tableview%28__dropsessiondidupdate_withdestinationindexpath_%29.md): Proposes how to handle a drop at the specified location in the table view.
- [tableView:dropSessionDidEnter:](uitableviewdropdelegate/tableview%28__dropsessiondidenter_%29.md): Notifies the delegate when dragged content enters the table view’s bounds rectangle.
- [tableView:dropSessionDidExit:](uitableviewdropdelegate/tableview%28__dropsessiondidexit_%29.md): Notifies the delegate when dragged content exits the table view’s bounds rectangle.
- [tableView:dropSessionDidEnd:](uitableviewdropdelegate/tableview%28__dropsessiondidend_%29.md): Notifies the delegate when the drag operation ends.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Drag and drop

- [Supporting drag and drop in table views](supporting-drag-and-drop-in-table-views.md): Initiate drags and handle drops from a table view.
- [Adopting drag and drop in a table view](adopting-drag-and-drop-in-a-table-view.md): Demonstrates how to enable and implement drag and drop for a table view.
- [UITableViewDragDelegate](uitableviewdragdelegate.md): The interface for initiating drags from a table view.
- [UITableViewDropCoordinator](uitableviewdropcoordinator.md): An interface for coordinating your custom drop-related actions with the table view.
- [UITableViewDropItem](uitableviewdropitem.md): The data associated with an item being dropped into the table view.
- [UITableViewDropProposal](uitableviewdropproposal.md): Your proposed solution for handling a drop in a table view.
