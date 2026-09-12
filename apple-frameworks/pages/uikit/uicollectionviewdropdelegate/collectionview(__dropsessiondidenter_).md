> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdropdelegate/collectionview(_:dropsessiondidenter:)](https://developer.apple.com/documentation/uikit/uicollectionviewdropdelegate/collectionview(_:dropsessiondidenter:))

# collectionView(\_:dropSessionDidEnter:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Notifies you when dragged content enters the collection view’s bounds rectangle.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, dropSessionDidEnter session: any UIDropSession)
```

## Parameters

- `collectionView`: The collection view that’s tracking the dragged content.
- `session`: The drop session object containing information about the type of data being dragged.

<a id="Discussion"></a>

## Discussion

The collection view calls this method when dragged content enters its bounds rectangle. The method isn’t called again until the dragged content exits the collection view’s bounds (triggering a call to the [collectionView(\_:dropSessionDidExit:)](collectionview%28__dropsessiondidexit_%29.md) method) and enters again.

Use this method to perform any one-time setup associated with tracking dragged content over the collection view.

## See Also

### Tracking the drag movements

- [collectionView(\_:dropSessionDidUpdate:withDestinationIndexPath:)](collectionview%28__dropsessiondidupdate_withdestinationindexpath_%29.md): Tells your delegate that the position of the dragged data over the collection view changed.
- [collectionView(\_:dropSessionDidExit:)](collectionview%28__dropsessiondidexit_%29.md): Notifies you when dragged content exits the collection view’s bounds rectangle.
- [collectionView(\_:dropSessionDidEnd:)](collectionview%28__dropsessiondidend_%29.md): Notifies you when the drag operation ends.

# collectionView:dropSessionDidEnter: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Notifies you when dragged content enters the collection view’s bounds rectangle.

## Declaration

```objectivec
- (void) collectionView:(UICollectionView *) collectionView dropSessionDidEnter:(id<UIDropSession>) session;
```

## Parameters

- `collectionView`: The collection view that’s tracking the dragged content.
- `session`: The drop session object containing information about the type of data being dragged.

<a id="Discussion"></a>

## Discussion

The collection view calls this method when dragged content enters its bounds rectangle. The method isn’t called again until the dragged content exits the collection view’s bounds (triggering a call to the [collectionView:dropSessionDidExit:](collectionview%28__dropsessiondidexit_%29.md) method) and enters again.

Use this method to perform any one-time setup associated with tracking dragged content over the collection view.

## See Also

### Tracking the drag movements

- [collectionView:dropSessionDidUpdate:withDestinationIndexPath:](collectionview%28__dropsessiondidupdate_withdestinationindexpath_%29.md): Tells your delegate that the position of the dragged data over the collection view changed.
- [collectionView:dropSessionDidExit:](collectionview%28__dropsessiondidexit_%29.md): Notifies you when dragged content exits the collection view’s bounds rectangle.
- [collectionView:dropSessionDidEnd:](collectionview%28__dropsessiondidend_%29.md): Notifies you when the drag operation ends.
