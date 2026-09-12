> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdropdelegate/collectionview(_:performdropwith:)](https://developer.apple.com/documentation/uikit/uicollectionviewdropdelegate/collectionview(_:performdropwith:))

# collectionView(\_:performDropWith:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells your delegate to incorporate the drop data into the collection view.

## Declaration

```swift
func collectionView(_ collectionView: UICollectionView, performDropWith coordinator: any UICollectionViewDropCoordinator)
```

## Parameters

- `collectionView`: The collection view that received the drop.
- `coordinator`: The coordinator object to use when handling the drop. Use this object to coordinate your custom behavior with the default behavior of the collection view.

## Mentioned In

- [Supporting Drag and Drop in Collection Views](../supporting-drag-and-drop-in-collection-views.md)

<a id="Discussion"></a>

## Discussion

Use this method to accept the dropped content and integrate it into your collection view. In your implementation, iterate over the [items](../uicollectionviewdropcoordinator/items.md) property of the `coordinator` object and fetch the data from each [UIDragItem](../uidragitem.md). Incorporate the data into your collection view’s data source and update the collection view itself by inserting any needed items. When incorporating items, use the methods of the `coordinator` object to animate the transition from the drag item’s preview to the corresponding item in your collection view. For items that you incorporate immediately, you can use the [drop(\_:to:)](../uicollectionviewdropcoordinator/drop%28__to_%29-7w5rn.md) or [drop(\_:toItemAt:)](../uicollectionviewdropcoordinator/drop%28__toitemat_%29.md) method to perform the animation.

# collectionView:performDropWithCoordinator: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells your delegate to incorporate the drop data into the collection view.

## Declaration

```objectivec
- (void) collectionView:(UICollectionView *) collectionView performDropWithCoordinator:(id<UICollectionViewDropCoordinator>) coordinator;
```

## Parameters

- `collectionView`: The collection view that received the drop.
- `coordinator`: The coordinator object to use when handling the drop. Use this object to coordinate your custom behavior with the default behavior of the collection view.

## Mentioned In

- [Supporting Drag and Drop in Collection Views](../supporting-drag-and-drop-in-collection-views.md)

<a id="Discussion"></a>

## Discussion

Use this method to accept the dropped content and integrate it into your collection view. In your implementation, iterate over the [items](../uicollectionviewdropcoordinator/items.md) property of the `coordinator` object and fetch the data from each [UIDragItem](../uidragitem.md). Incorporate the data into your collection view’s data source and update the collection view itself by inserting any needed items. When incorporating items, use the methods of the `coordinator` object to animate the transition from the drag item’s preview to the corresponding item in your collection view. For items that you incorporate immediately, you can use the [dropItem:toTarget:](../uicollectionviewdropcoordinator/drop%28__to_%29-7w5rn.md) or [dropItem:toItemAtIndexPath:](../uicollectionviewdropcoordinator/drop%28__toitemat_%29.md) method to perform the animation.
