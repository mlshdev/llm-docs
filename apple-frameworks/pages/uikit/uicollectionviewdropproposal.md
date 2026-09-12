> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdropproposal](https://developer.apple.com/documentation/uikit/uicollectionviewdropproposal)

# UICollectionViewDropProposal (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Your proposed solution for handling a drop in a collection view.

## Declaration

```swift
@MainActor class UICollectionViewDropProposal
```

## Mentioned In

- [Supporting Drag and Drop in Collection Views](supporting-drag-and-drop-in-collection-views.md)

<a id="overview"></a>

## Overview

Create instances of this class in the [collectionView(\_:dropSessionDidUpdate:withDestinationIndexPath:)](uicollectionviewdropdelegate/collectionview%28__dropsessiondidupdate_withdestinationindexpath_%29.md) method of your drop delegate object. You create drop proposals to let the collection view know how you intend to handle a drop at the currently specified location. The collection view uses that information to provide appropriate visual feedback to the user.

## Topics

### Creating a Drop Proposal

- [init(operation:intent:)](uicollectionviewdropproposal/init%28operation_intent_%29.md): Creates a drop proposal object that specifies how to incorporate the dropped content.

### Getting the Proposed Drop Location

- [intent](uicollectionviewdropproposal/intent-swift.property.md): The option to use when incorporating the dropped items into your content.
- [UICollectionViewDropProposal.Intent](uicollectionviewdropproposal/intent-swift.enum.md): Constants indicating how you intend to handle a drop.
- [UIDropOperation](uidropoperation.md): Operation types that determine how a drag and drop activity resolves when the user drops a drag item.

### Initializers

- [init(dropOperation:intent:)](uicollectionviewdropproposal/init%28dropoperation_intent_%29.md)

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

- [Supporting Drag and Drop in Collection Views](supporting-drag-and-drop-in-collection-views.md): Initiate drags and handle drops from a collection view.
- [UICollectionViewDragDelegate](uicollectionviewdragdelegate.md): The interface for initiating drags from a collection view.
- [UICollectionViewDropDelegate](uicollectionviewdropdelegate.md): The interface for handling drops in a collection view.
- [UICollectionViewDropCoordinator](uicollectionviewdropcoordinator.md): An interface for coordinating your custom drop-related actions with the collection view.
- [UICollectionViewDropPlaceholder](uicollectionviewdropplaceholder.md): A placeholder for an item dropped on a collection view.
- [UICollectionViewDropItem](uicollectionviewdropitem.md): The data associated with an item being dropped into the collection view.
- [UICollectionViewDropPlaceholderContext](uicollectionviewdropplaceholdercontext.md): An object that contains information about a placeholder in the collection view.
- [UIDataSourceTranslating](uidatasourcetranslating.md): An advanced interface for managing a data source object.
- [UICollectionViewPlaceholder](uicollectionviewplaceholder.md): A placeholder for an item dragged or dropped on a collection view.

# UICollectionViewDropProposal (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Your proposed solution for handling a drop in a collection view.

## Declaration

```objectivec
@interface UICollectionViewDropProposal : UIDropProposal
```

## Mentioned In

- [Supporting Drag and Drop in Collection Views](supporting-drag-and-drop-in-collection-views.md)

<a id="overview"></a>

## Overview

Create instances of this class in the [collectionView:dropSessionDidUpdate:withDestinationIndexPath:](uicollectionviewdropdelegate/collectionview%28__dropsessiondidupdate_withdestinationindexpath_%29.md) method of your drop delegate object. You create drop proposals to let the collection view know how you intend to handle a drop at the currently specified location. The collection view uses that information to provide appropriate visual feedback to the user.

## Topics

### Creating a Drop Proposal

- [initWithDropOperation:intent:](uicollectionviewdropproposal/init%28operation_intent_%29.md): Creates a drop proposal object that specifies how to incorporate the dropped content.

### Getting the Proposed Drop Location

- [intent](uicollectionviewdropproposal/intent-swift.property.md): The option to use when incorporating the dropped items into your content.
- [UICollectionViewDropIntent](uicollectionviewdropproposal/intent-swift.enum.md): Constants indicating how you intend to handle a drop.
- [UIDropOperation](uidropoperation.md): Operation types that determine how a drag and drop activity resolves when the user drops a drag item.

## Relationships

### Inherits From

- [UIDropProposal](uidropproposal.md)

## See Also

### Drag and drop

- [Supporting Drag and Drop in Collection Views](supporting-drag-and-drop-in-collection-views.md): Initiate drags and handle drops from a collection view.
- [UICollectionViewDragDelegate](uicollectionviewdragdelegate.md): The interface for initiating drags from a collection view.
- [UICollectionViewDropDelegate](uicollectionviewdropdelegate.md): The interface for handling drops in a collection view.
- [UICollectionViewDropCoordinator](uicollectionviewdropcoordinator.md): An interface for coordinating your custom drop-related actions with the collection view.
- [UICollectionViewDropPlaceholder](uicollectionviewdropplaceholder.md): A placeholder for an item dropped on a collection view.
- [UICollectionViewDropItem](uicollectionviewdropitem.md): The data associated with an item being dropped into the collection view.
- [UICollectionViewDropPlaceholderContext](uicollectionviewdropplaceholdercontext.md): An object that contains information about a placeholder in the collection view.
- [UIDataSourceTranslating](uidatasourcetranslating.md): An advanced interface for managing a data source object.
- [UICollectionViewPlaceholder](uicollectionviewplaceholder.md): A placeholder for an item dragged or dropped on a collection view.
