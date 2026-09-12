> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdragdelegate](https://developer.apple.com/documentation/uikit/uicollectionviewdragdelegate)

# UICollectionViewDragDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface for initiating drags from a collection view.

## Declaration

```swift
@MainActor protocol UICollectionViewDragDelegate : NSObjectProtocol
```

## Mentioned In

- [Supporting Drag and Drop in Collection Views](supporting-drag-and-drop-in-collection-views.md)

<a id="overview"></a>

## Overview

Implement this protocol in the object that you use to initiate drags from your collection view. The only required method of this protocol is the [collectionView(\_:itemsForBeginning:at:)](uicollectionviewdragdelegate/collectionview%28__itemsforbeginning_at_%29.md) method, but you can implement other methods as needed to customize the drag behavior of your collection view.

Assign your custom delegate object to the [dragDelegate](uicollectionview/dragdelegate.md) property of your collection view.

## Topics

### Providing the items to drag

- [collectionView(\_:itemsForBeginning:at:)](uicollectionviewdragdelegate/collectionview%28__itemsforbeginning_at_%29.md): Provides the initial set of items (if any) to drag.
- [collectionView(\_:itemsForAddingTo:at:point:)](uicollectionviewdragdelegate/collectionview%28__itemsforaddingto_at_point_%29.md): Adds the specified items to an existing drag session.

### Tracking the drag session

- [collectionView(\_:dragSessionWillBegin:)](uicollectionviewdragdelegate/collectionview%28__dragsessionwillbegin_%29.md): Notifies you that a drag session is about to begin for the collection view.
- [collectionView(\_:dragSessionDidEnd:)](uicollectionviewdragdelegate/collectionview%28__dragsessiondidend_%29.md): Notifies you that a drag session ended for the collection view.

### Providing a custom preview

- [collectionView(\_:dragPreviewParametersForItemAt:)](uicollectionviewdragdelegate/collectionview%28__dragpreviewparametersforitemat_%29.md): Returns custom information about how to display the item at the specified location during the drag.

### Controlling the drag session

- [collectionView(\_:dragSessionAllowsMoveOperation:)](uicollectionviewdragdelegate/collectionview%28__dragsessionallowsmoveoperation_%29.md): Returns a Boolean value that determines whether a move operation is allowed for a drag session.
- [collectionView(\_:dragSessionIsRestrictedToDraggingApplication:)](uicollectionviewdragdelegate/collectionview%28__dragsessionisrestrictedtodraggingapplication_%29.md): Returns a Boolean value that determines whether the source app and destination app must be the same for a drag session.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Drag and drop

- [Supporting Drag and Drop in Collection Views](supporting-drag-and-drop-in-collection-views.md): Initiate drags and handle drops from a collection view.
- [UICollectionViewDropDelegate](uicollectionviewdropdelegate.md): The interface for handling drops in a collection view.
- [UICollectionViewDropCoordinator](uicollectionviewdropcoordinator.md): An interface for coordinating your custom drop-related actions with the collection view.
- [UICollectionViewDropPlaceholder](uicollectionviewdropplaceholder.md): A placeholder for an item dropped on a collection view.
- [UICollectionViewDropProposal](uicollectionviewdropproposal.md): Your proposed solution for handling a drop in a collection view.
- [UICollectionViewDropItem](uicollectionviewdropitem.md): The data associated with an item being dropped into the collection view.
- [UICollectionViewDropPlaceholderContext](uicollectionviewdropplaceholdercontext.md): An object that contains information about a placeholder in the collection view.
- [UIDataSourceTranslating](uidatasourcetranslating.md): An advanced interface for managing a data source object.
- [UICollectionViewPlaceholder](uicollectionviewplaceholder.md): A placeholder for an item dragged or dropped on a collection view.

# UICollectionViewDragDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface for initiating drags from a collection view.

## Declaration

```objectivec
@protocol UICollectionViewDragDelegate <NSObject>
```

## Mentioned In

- [Supporting Drag and Drop in Collection Views](supporting-drag-and-drop-in-collection-views.md)

<a id="overview"></a>

## Overview

Implement this protocol in the object that you use to initiate drags from your collection view. The only required method of this protocol is the [collectionView:itemsForBeginningDragSession:atIndexPath:](uicollectionviewdragdelegate/collectionview%28__itemsforbeginning_at_%29.md) method, but you can implement other methods as needed to customize the drag behavior of your collection view.

Assign your custom delegate object to the [dragDelegate](uicollectionview/dragdelegate.md) property of your collection view.

## Topics

### Providing the items to drag

- [collectionView:itemsForBeginningDragSession:atIndexPath:](uicollectionviewdragdelegate/collectionview%28__itemsforbeginning_at_%29.md): Provides the initial set of items (if any) to drag.
- [collectionView:itemsForAddingToDragSession:atIndexPath:point:](uicollectionviewdragdelegate/collectionview%28__itemsforaddingto_at_point_%29.md): Adds the specified items to an existing drag session.

### Tracking the drag session

- [collectionView:dragSessionWillBegin:](uicollectionviewdragdelegate/collectionview%28__dragsessionwillbegin_%29.md): Notifies you that a drag session is about to begin for the collection view.
- [collectionView:dragSessionDidEnd:](uicollectionviewdragdelegate/collectionview%28__dragsessiondidend_%29.md): Notifies you that a drag session ended for the collection view.

### Providing a custom preview

- [collectionView:dragPreviewParametersForItemAtIndexPath:](uicollectionviewdragdelegate/collectionview%28__dragpreviewparametersforitemat_%29.md): Returns custom information about how to display the item at the specified location during the drag.

### Controlling the drag session

- [collectionView:dragSessionAllowsMoveOperation:](uicollectionviewdragdelegate/collectionview%28__dragsessionallowsmoveoperation_%29.md): Returns a Boolean value that determines whether a move operation is allowed for a drag session.
- [collectionView:dragSessionIsRestrictedToDraggingApplication:](uicollectionviewdragdelegate/collectionview%28__dragsessionisrestrictedtodraggingapplication_%29.md): Returns a Boolean value that determines whether the source app and destination app must be the same for a drag session.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Drag and drop

- [Supporting Drag and Drop in Collection Views](supporting-drag-and-drop-in-collection-views.md): Initiate drags and handle drops from a collection view.
- [UICollectionViewDropDelegate](uicollectionviewdropdelegate.md): The interface for handling drops in a collection view.
- [UICollectionViewDropCoordinator](uicollectionviewdropcoordinator.md): An interface for coordinating your custom drop-related actions with the collection view.
- [UICollectionViewDropPlaceholder](uicollectionviewdropplaceholder.md): A placeholder for an item dropped on a collection view.
- [UICollectionViewDropProposal](uicollectionviewdropproposal.md): Your proposed solution for handling a drop in a collection view.
- [UICollectionViewDropItem](uicollectionviewdropitem.md): The data associated with an item being dropped into the collection view.
- [UICollectionViewDropPlaceholderContext](uicollectionviewdropplaceholdercontext.md): An object that contains information about a placeholder in the collection view.
- [UIDataSourceTranslating](uidatasourcetranslating.md): An advanced interface for managing a data source object.
- [UICollectionViewPlaceholder](uicollectionviewplaceholder.md): A placeholder for an item dragged or dropped on a collection view.
