> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdropproposal](https://developer.apple.com/documentation/uikit/uitableviewdropproposal)

# UITableViewDropProposal (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Your proposed solution for handling a drop in a table view.

## Declaration

```swift
@MainActor class UITableViewDropProposal
```

## Mentioned In

- [Supporting drag and drop in table views](supporting-drag-and-drop-in-table-views.md)

<a id="overview"></a>

## Overview

Create instances of this class in the [tableView(\_:dropSessionDidUpdate:withDestinationIndexPath:)](uitableviewdropdelegate/tableview%28__dropsessiondidupdate_withdestinationindexpath_%29.md) method of your drop delegate object. You create drop proposals to let the table view know how you intend to handle a drop at the currently specified location. The table view uses that information to provide appropriate visual feedback to the user.

## Topics

### Creating a drop proposal

- [init(operation:intent:)](uitableviewdropproposal/init%28operation_intent_%29.md): Creates a drop proposal object that specifies how to incorporate the dropped content.

### Getting the proposed drop location

- [intent](uitableviewdropproposal/intent-swift.property.md): The option to use when incorporating dropped items into your content.
- [UITableViewDropProposal.Intent](uitableviewdropproposal/intent-swift.enum.md): Constants indicating how you intend to handle a drop.
- [UIDropOperation](uidropoperation.md): Operation types that determine how a drag and drop activity resolves when the user drops a drag item.

### Initializers

- [init(dropOperation:intent:)](uitableviewdropproposal/init%28dropoperation_intent_%29.md)

## Relationships

### Inherits From

- [UIDropProposal](uidropproposal.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Drag and drop

- [Supporting drag and drop in table views](supporting-drag-and-drop-in-table-views.md): Initiate drags and handle drops from a table view.
- [Adopting drag and drop in a table view](adopting-drag-and-drop-in-a-table-view.md): Demonstrates how to enable and implement drag and drop for a table view.
- [UITableViewDragDelegate](uitableviewdragdelegate.md): The interface for initiating drags from a table view.
- [UITableViewDropDelegate](uitableviewdropdelegate.md): The interface for handling drops in a table view.
- [UITableViewDropCoordinator](uitableviewdropcoordinator.md): An interface for coordinating your custom drop-related actions with the table view.
- [UITableViewDropItem](uitableviewdropitem.md): The data associated with an item being dropped into the table view.

# UITableViewDropProposal (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Your proposed solution for handling a drop in a table view.

## Declaration

```objectivec
@interface UITableViewDropProposal : UIDropProposal
```

## Mentioned In

- [Supporting drag and drop in table views](supporting-drag-and-drop-in-table-views.md)

<a id="overview"></a>

## Overview

Create instances of this class in the [tableView:dropSessionDidUpdate:withDestinationIndexPath:](uitableviewdropdelegate/tableview%28__dropsessiondidupdate_withdestinationindexpath_%29.md) method of your drop delegate object. You create drop proposals to let the table view know how you intend to handle a drop at the currently specified location. The table view uses that information to provide appropriate visual feedback to the user.

## Topics

### Creating a drop proposal

- [initWithDropOperation:intent:](uitableviewdropproposal/init%28operation_intent_%29.md): Creates a drop proposal object that specifies how to incorporate the dropped content.

### Getting the proposed drop location

- [intent](uitableviewdropproposal/intent-swift.property.md): The option to use when incorporating dropped items into your content.
- [UITableViewDropIntent](uitableviewdropproposal/intent-swift.enum.md): Constants indicating how you intend to handle a drop.
- [UIDropOperation](uidropoperation.md): Operation types that determine how a drag and drop activity resolves when the user drops a drag item.

## Relationships

### Inherits From

- [UIDropProposal](uidropproposal.md)

## See Also

### Drag and drop

- [Supporting drag and drop in table views](supporting-drag-and-drop-in-table-views.md): Initiate drags and handle drops from a table view.
- [Adopting drag and drop in a table view](adopting-drag-and-drop-in-a-table-view.md): Demonstrates how to enable and implement drag and drop for a table view.
- [UITableViewDragDelegate](uitableviewdragdelegate.md): The interface for initiating drags from a table view.
- [UITableViewDropDelegate](uitableviewdropdelegate.md): The interface for handling drops in a table view.
- [UITableViewDropCoordinator](uitableviewdropcoordinator.md): An interface for coordinating your custom drop-related actions with the table view.
- [UITableViewDropItem](uitableviewdropitem.md): The data associated with an item being dropped into the table view.
