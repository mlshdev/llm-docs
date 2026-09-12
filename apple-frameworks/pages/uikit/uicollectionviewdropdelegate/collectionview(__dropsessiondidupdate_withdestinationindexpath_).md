> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdropdelegate/collectionview(_:dropsessiondidupdate:withdestinationindexpath:)](https://developer.apple.com/documentation/uikit/uicollectionviewdropdelegate/collectionview(_:dropsessiondidupdate:withdestinationindexpath:))

# collectionView(\_:dropSessionDidUpdate:withDestinationIndexPath:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells your delegate that the position of the dragged data over the collection view changed.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, dropSessionDidUpdate session: any UIDropSession, withDestinationIndexPath destinationIndexPath: IndexPath?) -> UICollectionViewDropProposal
```

## Parameters

- `collectionView`: The collection view that’s tracking the dragged content.
- `session`: The drop session object containing information about the type of data being dragged.
- `destinationIndexPath`: The index path at which the content would be dropped.

<a id="return-value"></a>

## Return Value

Your proposal for how to handle the content if it is dropped at the specified location.

## Mentioned In

- [Supporting Drag and Drop in Collection Views](../supporting-drag-and-drop-in-collection-views.md)

<a id="Discussion"></a>

## Discussion

While the user is dragging content, the collection view calls this method repeatedly to determine how you would handle the drop if it occurred at the specified location. The collection view provides visual feedback to the user based on your proposal.

In your implementation of this method, create a [UICollectionViewDropProposal](../uicollectionviewdropproposal.md) object and use it to convey your intentions. Because this method is called repeatedly while the user drags over the table view, your implementation should return as quickly as possible.

## See Also

### Tracking the drag movements

- [collectionView(\_:dropSessionDidEnter:)](collectionview%28__dropsessiondidenter_%29.md): Notifies you when dragged content enters the collection view’s bounds rectangle.
- [collectionView(\_:dropSessionDidExit:)](collectionview%28__dropsessiondidexit_%29.md): Notifies you when dragged content exits the collection view’s bounds rectangle.
- [collectionView(\_:dropSessionDidEnd:)](collectionview%28__dropsessiondidend_%29.md): Notifies you when the drag operation ends.

# collectionView:dropSessionDidUpdate:withDestinationIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells your delegate that the position of the dragged data over the collection view changed.

## Declaration

```objectivec
- (UICollectionViewDropProposal *) collectionView:(UICollectionView *) collectionView dropSessionDidUpdate:(id<UIDropSession>) session withDestinationIndexPath:(NSIndexPath *) destinationIndexPath;
```

## Parameters

- `collectionView`: The collection view that’s tracking the dragged content.
- `session`: The drop session object containing information about the type of data being dragged.
- `destinationIndexPath`: The index path at which the content would be dropped.

<a id="return-value"></a>

## Return Value

Your proposal for how to handle the content if it is dropped at the specified location.

## Mentioned In

- [Supporting Drag and Drop in Collection Views](../supporting-drag-and-drop-in-collection-views.md)

<a id="Discussion"></a>

## Discussion

While the user is dragging content, the collection view calls this method repeatedly to determine how you would handle the drop if it occurred at the specified location. The collection view provides visual feedback to the user based on your proposal.

In your implementation of this method, create a [UICollectionViewDropProposal](../uicollectionviewdropproposal.md) object and use it to convey your intentions. Because this method is called repeatedly while the user drags over the table view, your implementation should return as quickly as possible.

## See Also

### Tracking the drag movements

- [collectionView:dropSessionDidEnter:](collectionview%28__dropsessiondidenter_%29.md): Notifies you when dragged content enters the collection view’s bounds rectangle.
- [collectionView:dropSessionDidExit:](collectionview%28__dropsessiondidexit_%29.md): Notifies you when dragged content exits the collection view’s bounds rectangle.
- [collectionView:dropSessionDidEnd:](collectionview%28__dropsessiondidend_%29.md): Notifies you when the drag operation ends.
