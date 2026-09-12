> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdropplaceholdercontext](https://developer.apple.com/documentation/uikit/uicollectionviewdropplaceholdercontext)

# UICollectionViewDropPlaceholderContext (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object that contains information about a placeholder in the collection view.

## Declaration

```swift
@MainActor protocol UICollectionViewDropPlaceholderContext : UIDragAnimating
```

<a id="overview"></a>

## Overview

You do not create instances of this class yourself. For each placeholder cell that you insert into the collection view, the drop coordinator provides you with an instance of this class. You use this context object later to remove the placeholder cell, either by committing the actual data to your data source object or by deleting the placeholder cell.

## Topics

### Updating the Placeholder Cell

- [commitInsertion(dataSourceUpdates:)](uicollectionviewdropplaceholdercontext/commitinsertion%28datasourceupdates_%29.md): Exchanges the placeholder cell for a cell with the final content.
- [setNeedsCellUpdate()](uicollectionviewdropplaceholdercontext/setneedscellupdate%28%29.md): Updates the contents of the placeholder cell.

### Removing the Placeholder Cell

- [deletePlaceholder()](uicollectionviewdropplaceholdercontext/deleteplaceholder%28%29.md): Removes an unneeded placeholder cell altogether from the collection view.

### Getting the Drag Item

- [dragItem](uicollectionviewdropplaceholdercontext/dragitem.md): The drag item being represented by the placeholder cell.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [UIDragAnimating](uidraganimating.md)

## See Also

### Drag and drop

- [Supporting Drag and Drop in Collection Views](supporting-drag-and-drop-in-collection-views.md): Initiate drags and handle drops from a collection view.
- [UICollectionViewDragDelegate](uicollectionviewdragdelegate.md): The interface for initiating drags from a collection view.
- [UICollectionViewDropDelegate](uicollectionviewdropdelegate.md): The interface for handling drops in a collection view.
- [UICollectionViewDropCoordinator](uicollectionviewdropcoordinator.md): An interface for coordinating your custom drop-related actions with the collection view.
- [UICollectionViewDropPlaceholder](uicollectionviewdropplaceholder.md): A placeholder for an item dropped on a collection view.
- [UICollectionViewDropProposal](uicollectionviewdropproposal.md): Your proposed solution for handling a drop in a collection view.
- [UICollectionViewDropItem](uicollectionviewdropitem.md): The data associated with an item being dropped into the collection view.
- [UIDataSourceTranslating](uidatasourcetranslating.md): An advanced interface for managing a data source object.
- [UICollectionViewPlaceholder](uicollectionviewplaceholder.md): A placeholder for an item dragged or dropped on a collection view.

# UICollectionViewDropPlaceholderContext (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object that contains information about a placeholder in the collection view.

## Declaration

```objectivec
@protocol UICollectionViewDropPlaceholderContext <UIDragAnimating>
```

<a id="overview"></a>

## Overview

You do not create instances of this class yourself. For each placeholder cell that you insert into the collection view, the drop coordinator provides you with an instance of this class. You use this context object later to remove the placeholder cell, either by committing the actual data to your data source object or by deleting the placeholder cell.

## Topics

### Updating the Placeholder Cell

- [commitInsertionWithDataSourceUpdates:](uicollectionviewdropplaceholdercontext/commitinsertion%28datasourceupdates_%29.md): Exchanges the placeholder cell for a cell with the final content.
- [setNeedsCellUpdate](uicollectionviewdropplaceholdercontext/setneedscellupdate%28%29.md): Updates the contents of the placeholder cell.

### Removing the Placeholder Cell

- [deletePlaceholder](uicollectionviewdropplaceholdercontext/deleteplaceholder%28%29.md): Removes an unneeded placeholder cell altogether from the collection view.

### Getting the Drag Item

- [dragItem](uicollectionviewdropplaceholdercontext/dragitem.md): The drag item being represented by the placeholder cell.

## Relationships

### Inherits From

- [UIDragAnimating](uidraganimating.md)

## See Also

### Drag and drop

- [Supporting Drag and Drop in Collection Views](supporting-drag-and-drop-in-collection-views.md): Initiate drags and handle drops from a collection view.
- [UICollectionViewDragDelegate](uicollectionviewdragdelegate.md): The interface for initiating drags from a collection view.
- [UICollectionViewDropDelegate](uicollectionviewdropdelegate.md): The interface for handling drops in a collection view.
- [UICollectionViewDropCoordinator](uicollectionviewdropcoordinator.md): An interface for coordinating your custom drop-related actions with the collection view.
- [UICollectionViewDropPlaceholder](uicollectionviewdropplaceholder.md): A placeholder for an item dropped on a collection view.
- [UICollectionViewDropProposal](uicollectionviewdropproposal.md): Your proposed solution for handling a drop in a collection view.
- [UICollectionViewDropItem](uicollectionviewdropitem.md): The data associated with an item being dropped into the collection view.
- [UIDataSourceTranslating](uidatasourcetranslating.md): An advanced interface for managing a data source object.
- [UICollectionViewPlaceholder](uicollectionviewplaceholder.md): A placeholder for an item dragged or dropped on a collection view.
