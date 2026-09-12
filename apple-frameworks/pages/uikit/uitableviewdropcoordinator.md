> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdropcoordinator](https://developer.apple.com/documentation/uikit/uitableviewdropcoordinator)

# UITableViewDropCoordinator (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An interface for coordinating your custom drop-related actions with the table view.

## Declaration

```swift
@MainActor protocol UITableViewDropCoordinator : NSObjectProtocol
```

## Mentioned In

- [Supporting drag and drop in table views](supporting-drag-and-drop-in-table-views.md)

<a id="overview"></a>

## Overview

Don’t create instances of this class yourself. When a drop occurs in the table view, UIKit creates an instance of this class and passes it to your [tableView(\_:performDropWith:)](uitableviewdropdelegate/tableview%28__performdropwith_%29.md) method. Use the object to let the table view know how you want to animate the dropped items into position.

## Topics

### Getting the dragged items

- [items](uitableviewdropcoordinator/items.md): The items being dragged.

### Getting the drop location

- [destinationIndexPath](uitableviewdropcoordinator/destinationindexpath.md): The index path at which to insert the item into the table view.

### Animating rows to their destination

- [drop(\_:toRowAt:)](uitableviewdropcoordinator/drop%28__torowat_%29.md): Animates the item to the specified index path in the table view.
- [drop(\_:intoRowAt:rect:)](uitableviewdropcoordinator/drop%28__intorowat_rect_%29.md)
- [drop(\_:to:)](uitableviewdropcoordinator/drop%28__to_%29-57wx.md): Animates the item to an arbitrary location in your view hierarchy.
- [drop(\_:to:)](uitableviewdropcoordinator/drop%28__to_%29-3znax.md): Animates the item to the specified location and inserts a placeholder cell at that location.

### Getting the session information

- [session](uitableviewdropcoordinator/session.md): The drop session containing information about the transaction.
- [proposal](uitableviewdropcoordinator/proposal.md): The proposal for how to incorporate the dropped items.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Drag and drop

- [Supporting drag and drop in table views](supporting-drag-and-drop-in-table-views.md): Initiate drags and handle drops from a table view.
- [Adopting drag and drop in a table view](adopting-drag-and-drop-in-a-table-view.md): Demonstrates how to enable and implement drag and drop for a table view.
- [UITableViewDragDelegate](uitableviewdragdelegate.md): The interface for initiating drags from a table view.
- [UITableViewDropDelegate](uitableviewdropdelegate.md): The interface for handling drops in a table view.
- [UITableViewDropItem](uitableviewdropitem.md): The data associated with an item being dropped into the table view.
- [UITableViewDropProposal](uitableviewdropproposal.md): Your proposed solution for handling a drop in a table view.

# UITableViewDropCoordinator (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An interface for coordinating your custom drop-related actions with the table view.

## Declaration

```objectivec
@protocol UITableViewDropCoordinator <NSObject>
```

## Mentioned In

- [Supporting drag and drop in table views](supporting-drag-and-drop-in-table-views.md)

<a id="overview"></a>

## Overview

Don’t create instances of this class yourself. When a drop occurs in the table view, UIKit creates an instance of this class and passes it to your [tableView:performDropWithCoordinator:](uitableviewdropdelegate/tableview%28__performdropwith_%29.md) method. Use the object to let the table view know how you want to animate the dropped items into position.

## Topics

### Getting the dragged items

- [items](uitableviewdropcoordinator/items.md): The items being dragged.

### Getting the drop location

- [destinationIndexPath](uitableviewdropcoordinator/destinationindexpath.md): The index path at which to insert the item into the table view.

### Animating rows to their destination

- [dropItem:toRowAtIndexPath:](uitableviewdropcoordinator/drop%28__torowat_%29.md): Animates the item to the specified index path in the table view.
- [dropItem:intoRowAtIndexPath:rect:](uitableviewdropcoordinator/drop%28__intorowat_rect_%29.md)
- [dropItem:toTarget:](uitableviewdropcoordinator/drop%28__to_%29-57wx.md): Animates the item to an arbitrary location in your view hierarchy.
- [dropItem:toPlaceholder:](uitableviewdropcoordinator/drop%28__to_%29-3znax.md): Animates the item to the specified location and inserts a placeholder cell at that location.

### Getting the session information

- [session](uitableviewdropcoordinator/session.md): The drop session containing information about the transaction.
- [proposal](uitableviewdropcoordinator/proposal.md): The proposal for how to incorporate the dropped items.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Drag and drop

- [Supporting drag and drop in table views](supporting-drag-and-drop-in-table-views.md): Initiate drags and handle drops from a table view.
- [Adopting drag and drop in a table view](adopting-drag-and-drop-in-a-table-view.md): Demonstrates how to enable and implement drag and drop for a table view.
- [UITableViewDragDelegate](uitableviewdragdelegate.md): The interface for initiating drags from a table view.
- [UITableViewDropDelegate](uitableviewdropdelegate.md): The interface for handling drops in a table view.
- [UITableViewDropItem](uitableviewdropitem.md): The data associated with an item being dropped into the table view.
- [UITableViewDropProposal](uitableviewdropproposal.md): Your proposed solution for handling a drop in a table view.
