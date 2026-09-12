> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdropitem](https://developer.apple.com/documentation/uikit/uicollectionviewdropitem)

# UICollectionViewDropItem (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The data associated with an item being dropped into the collection view.

## Declaration

```swift
@MainActor protocol UICollectionViewDropItem : NSObjectProtocol
```

<a id="overview"></a>

## Overview

When handling a drop, you get instances of this class from the [items](uicollectionviewdropcoordinator/items.md) property of the [UICollectionViewDropCoordinator](uicollectionviewdropcoordinator.md) object. Use them to retrieve the data for the items being dragged and to plan any animations related to dropping the items. You do not create instances of this class yourself.

## Topics

### Getting the Drag Item

- [dragItem](uicollectionviewdropitem/dragitem.md): The item that was dragged.

### Getting the Item Information

- [previewSize](uicollectionviewdropitem/previewsize.md): The size of the drag item’s preview.
- [sourceIndexPath](uicollectionviewdropitem/sourceindexpath.md): The index path of the item in the collection view, if any.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Drag and drop

- [Supporting Drag and Drop in Collection Views](supporting-drag-and-drop-in-collection-views.md): Initiate drags and handle drops from a collection view.
- [UICollectionViewDragDelegate](uicollectionviewdragdelegate.md): The interface for initiating drags from a collection view.
- [UICollectionViewDropDelegate](uicollectionviewdropdelegate.md): The interface for handling drops in a collection view.
- [UICollectionViewDropCoordinator](uicollectionviewdropcoordinator.md): An interface for coordinating your custom drop-related actions with the collection view.
- [UICollectionViewDropPlaceholder](uicollectionviewdropplaceholder.md): A placeholder for an item dropped on a collection view.
- [UICollectionViewDropProposal](uicollectionviewdropproposal.md): Your proposed solution for handling a drop in a collection view.
- [UICollectionViewDropPlaceholderContext](uicollectionviewdropplaceholdercontext.md): An object that contains information about a placeholder in the collection view.
- [UIDataSourceTranslating](uidatasourcetranslating.md): An advanced interface for managing a data source object.
- [UICollectionViewPlaceholder](uicollectionviewplaceholder.md): A placeholder for an item dragged or dropped on a collection view.

# UICollectionViewDropItem (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The data associated with an item being dropped into the collection view.

## Declaration

```objectivec
@protocol UICollectionViewDropItem <NSObject>
```

<a id="overview"></a>

## Overview

When handling a drop, you get instances of this class from the [items](uicollectionviewdropcoordinator/items.md) property of the [UICollectionViewDropCoordinator](uicollectionviewdropcoordinator.md) object. Use them to retrieve the data for the items being dragged and to plan any animations related to dropping the items. You do not create instances of this class yourself.

## Topics

### Getting the Drag Item

- [dragItem](uicollectionviewdropitem/dragitem.md): The item that was dragged.

### Getting the Item Information

- [previewSize](uicollectionviewdropitem/previewsize.md): The size of the drag item’s preview.
- [sourceIndexPath](uicollectionviewdropitem/sourceindexpath.md): The index path of the item in the collection view, if any.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Drag and drop

- [Supporting Drag and Drop in Collection Views](supporting-drag-and-drop-in-collection-views.md): Initiate drags and handle drops from a collection view.
- [UICollectionViewDragDelegate](uicollectionviewdragdelegate.md): The interface for initiating drags from a collection view.
- [UICollectionViewDropDelegate](uicollectionviewdropdelegate.md): The interface for handling drops in a collection view.
- [UICollectionViewDropCoordinator](uicollectionviewdropcoordinator.md): An interface for coordinating your custom drop-related actions with the collection view.
- [UICollectionViewDropPlaceholder](uicollectionviewdropplaceholder.md): A placeholder for an item dropped on a collection view.
- [UICollectionViewDropProposal](uicollectionviewdropproposal.md): Your proposed solution for handling a drop in a collection view.
- [UICollectionViewDropPlaceholderContext](uicollectionviewdropplaceholdercontext.md): An object that contains information about a placeholder in the collection view.
- [UIDataSourceTranslating](uidatasourcetranslating.md): An advanced interface for managing a data source object.
- [UICollectionViewPlaceholder](uicollectionviewplaceholder.md): A placeholder for an item dragged or dropped on a collection view.
