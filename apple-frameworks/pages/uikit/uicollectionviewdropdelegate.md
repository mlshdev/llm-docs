> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdropdelegate](https://developer.apple.com/documentation/uikit/uicollectionviewdropdelegate)

# UICollectionViewDropDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface for handling drops in a collection view.

## Declaration

```swift
@MainActor protocol UICollectionViewDropDelegate : NSObjectProtocol
```

## Mentioned In

- [Supporting Drag and Drop in Collection Views](supporting-drag-and-drop-in-collection-views.md)

<a id="overview"></a>

## Overview

Implement this protocol in the object that you use to incorporate dropped data into your collection view. The only required method of this protocol is the [collectionView(\_:performDropWith:)](uicollectionviewdropdelegate/collectionview%28__performdropwith_%29.md) method, but you can implement other methods as needed to customize the drop behavior of your collection view.

Assign your custom delegate object to the [dropDelegate](uicollectionview/dropdelegate.md) property of your collection view.

## Topics

### Declaring support for handling drops

- [collectionView(\_:canHandle:)](uicollectionviewdropdelegate/collectionview%28__canhandle_%29.md): Asks your delegate whether the collection view can accept a drop with the specified type of data.

### Incorporating the dropped data

- [collectionView(\_:performDropWith:)](uicollectionviewdropdelegate/collectionview%28__performdropwith_%29.md): Tells your delegate to incorporate the drop data into the collection view.

### Tracking the drag movements

- [collectionView(\_:dropSessionDidUpdate:withDestinationIndexPath:)](uicollectionviewdropdelegate/collectionview%28__dropsessiondidupdate_withdestinationindexpath_%29.md): Tells your delegate that the position of the dragged data over the collection view changed.
- [collectionView(\_:dropSessionDidEnter:)](uicollectionviewdropdelegate/collectionview%28__dropsessiondidenter_%29.md): Notifies you when dragged content enters the collection view’s bounds rectangle.
- [collectionView(\_:dropSessionDidExit:)](uicollectionviewdropdelegate/collectionview%28__dropsessiondidexit_%29.md): Notifies you when dragged content exits the collection view’s bounds rectangle.
- [collectionView(\_:dropSessionDidEnd:)](uicollectionviewdropdelegate/collectionview%28__dropsessiondidend_%29.md): Notifies you when the drag operation ends.

### Providing a custom preview

- [collectionView(\_:dropPreviewParametersForItemAt:)](uicollectionviewdropdelegate/collectionview%28__droppreviewparametersforitemat_%29.md): Returns custom information about how to display the item at the specified location during the drop.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Drag and drop

- [Supporting Drag and Drop in Collection Views](supporting-drag-and-drop-in-collection-views.md): Initiate drags and handle drops from a collection view.
- [UICollectionViewDragDelegate](uicollectionviewdragdelegate.md): The interface for initiating drags from a collection view.
- [UICollectionViewDropCoordinator](uicollectionviewdropcoordinator.md): An interface for coordinating your custom drop-related actions with the collection view.
- [UICollectionViewDropPlaceholder](uicollectionviewdropplaceholder.md): A placeholder for an item dropped on a collection view.
- [UICollectionViewDropProposal](uicollectionviewdropproposal.md): Your proposed solution for handling a drop in a collection view.
- [UICollectionViewDropItem](uicollectionviewdropitem.md): The data associated with an item being dropped into the collection view.
- [UICollectionViewDropPlaceholderContext](uicollectionviewdropplaceholdercontext.md): An object that contains information about a placeholder in the collection view.
- [UIDataSourceTranslating](uidatasourcetranslating.md): An advanced interface for managing a data source object.
- [UICollectionViewPlaceholder](uicollectionviewplaceholder.md): A placeholder for an item dragged or dropped on a collection view.

# UICollectionViewDropDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface for handling drops in a collection view.

## Declaration

```objectivec
@protocol UICollectionViewDropDelegate <NSObject>
```

## Mentioned In

- [Supporting Drag and Drop in Collection Views](supporting-drag-and-drop-in-collection-views.md)

<a id="overview"></a>

## Overview

Implement this protocol in the object that you use to incorporate dropped data into your collection view. The only required method of this protocol is the [collectionView:performDropWithCoordinator:](uicollectionviewdropdelegate/collectionview%28__performdropwith_%29.md) method, but you can implement other methods as needed to customize the drop behavior of your collection view.

Assign your custom delegate object to the [dropDelegate](uicollectionview/dropdelegate.md) property of your collection view.

## Topics

### Declaring support for handling drops

- [collectionView:canHandleDropSession:](uicollectionviewdropdelegate/collectionview%28__canhandle_%29.md): Asks your delegate whether the collection view can accept a drop with the specified type of data.

### Incorporating the dropped data

- [collectionView:performDropWithCoordinator:](uicollectionviewdropdelegate/collectionview%28__performdropwith_%29.md): Tells your delegate to incorporate the drop data into the collection view.

### Tracking the drag movements

- [collectionView:dropSessionDidUpdate:withDestinationIndexPath:](uicollectionviewdropdelegate/collectionview%28__dropsessiondidupdate_withdestinationindexpath_%29.md): Tells your delegate that the position of the dragged data over the collection view changed.
- [collectionView:dropSessionDidEnter:](uicollectionviewdropdelegate/collectionview%28__dropsessiondidenter_%29.md): Notifies you when dragged content enters the collection view’s bounds rectangle.
- [collectionView:dropSessionDidExit:](uicollectionviewdropdelegate/collectionview%28__dropsessiondidexit_%29.md): Notifies you when dragged content exits the collection view’s bounds rectangle.
- [collectionView:dropSessionDidEnd:](uicollectionviewdropdelegate/collectionview%28__dropsessiondidend_%29.md): Notifies you when the drag operation ends.

### Providing a custom preview

- [collectionView:dropPreviewParametersForItemAtIndexPath:](uicollectionviewdropdelegate/collectionview%28__droppreviewparametersforitemat_%29.md): Returns custom information about how to display the item at the specified location during the drop.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Drag and drop

- [Supporting Drag and Drop in Collection Views](supporting-drag-and-drop-in-collection-views.md): Initiate drags and handle drops from a collection view.
- [UICollectionViewDragDelegate](uicollectionviewdragdelegate.md): The interface for initiating drags from a collection view.
- [UICollectionViewDropCoordinator](uicollectionviewdropcoordinator.md): An interface for coordinating your custom drop-related actions with the collection view.
- [UICollectionViewDropPlaceholder](uicollectionviewdropplaceholder.md): A placeholder for an item dropped on a collection view.
- [UICollectionViewDropProposal](uicollectionviewdropproposal.md): Your proposed solution for handling a drop in a collection view.
- [UICollectionViewDropItem](uicollectionviewdropitem.md): The data associated with an item being dropped into the collection view.
- [UICollectionViewDropPlaceholderContext](uicollectionviewdropplaceholdercontext.md): An object that contains information about a placeholder in the collection view.
- [UIDataSourceTranslating](uidatasourcetranslating.md): An advanced interface for managing a data source object.
- [UICollectionViewPlaceholder](uicollectionviewplaceholder.md): A placeholder for an item dragged or dropped on a collection view.
