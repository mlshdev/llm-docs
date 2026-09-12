> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdragdelegate/collectionview(_:dragsessionwillbegin:)](https://developer.apple.com/documentation/uikit/uicollectionviewdragdelegate/collectionview(_:dragsessionwillbegin:))

# collectionView(\_:dragSessionWillBegin:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Notifies you that a drag session is about to begin for the collection view.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, dragSessionWillBegin session: any UIDragSession)
```

## Parameters

- `collectionView`: The collection view from which the drag operation originated.
- `session`: The drag session that’s beginning.

<a id="Discussion"></a>

## Discussion

This method is called after it has been determined that a drag will begin and after any lift animations have occurred, but before the position of the drag changes. Use this method to perform any tasks related to the management of the drag session in your app.

Each call to this method is always balanced by a call to the [collectionView(\_:dragSessionDidEnd:)](collectionview%28__dragsessiondidend_%29.md) method.

## See Also

### Tracking the drag session

- [collectionView(\_:dragSessionDidEnd:)](collectionview%28__dragsessiondidend_%29.md): Notifies you that a drag session ended for the collection view.

# collectionView:dragSessionWillBegin: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Notifies you that a drag session is about to begin for the collection view.

## Declaration

```objectivec
- (void) collectionView:(UICollectionView *) collectionView dragSessionWillBegin:(id<UIDragSession>) session;
```

## Parameters

- `collectionView`: The collection view from which the drag operation originated.
- `session`: The drag session that’s beginning.

<a id="Discussion"></a>

## Discussion

This method is called after it has been determined that a drag will begin and after any lift animations have occurred, but before the position of the drag changes. Use this method to perform any tasks related to the management of the drag session in your app.

Each call to this method is always balanced by a call to the [collectionView:dragSessionDidEnd:](collectionview%28__dragsessiondidend_%29.md) method.

## See Also

### Tracking the drag session

- [collectionView:dragSessionDidEnd:](collectionview%28__dragsessiondidend_%29.md): Notifies you that a drag session ended for the collection view.
