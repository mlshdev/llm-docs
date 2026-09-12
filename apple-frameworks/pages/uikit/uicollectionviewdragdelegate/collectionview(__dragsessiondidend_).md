> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdragdelegate/collectionview(_:dragsessiondidend:)](https://developer.apple.com/documentation/uikit/uicollectionviewdragdelegate/collectionview(_:dragsessiondidend:))

# collectionView(\_:dragSessionDidEnd:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Notifies you that a drag session ended for the collection view.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, dragSessionDidEnd session: any UIDragSession)
```

## Parameters

- `collectionView`: The collection view from which the drag operation originated.
- `session`: The drag session that ended.

<a id="Discussion"></a>

## Discussion

This method is called after the drag session ended, usually because the content was dropped but possibly because the drag was terminated. Use this method to close out any tasks related to the management of the drag session in your app.

Each call to this method is always balanced by a call to the [collectionView(\_:dragSessionWillBegin:)](collectionview%28__dragsessionwillbegin_%29.md) method.

## See Also

### Tracking the drag session

- [collectionView(\_:dragSessionWillBegin:)](collectionview%28__dragsessionwillbegin_%29.md): Notifies you that a drag session is about to begin for the collection view.

# collectionView:dragSessionDidEnd: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Notifies you that a drag session ended for the collection view.

## Declaration

```objectivec
- (void) collectionView:(UICollectionView *) collectionView dragSessionDidEnd:(id<UIDragSession>) session;
```

## Parameters

- `collectionView`: The collection view from which the drag operation originated.
- `session`: The drag session that ended.

<a id="Discussion"></a>

## Discussion

This method is called after the drag session ended, usually because the content was dropped but possibly because the drag was terminated. Use this method to close out any tasks related to the management of the drag session in your app.

Each call to this method is always balanced by a call to the [collectionView:dragSessionWillBegin:](collectionview%28__dragsessionwillbegin_%29.md) method.

## See Also

### Tracking the drag session

- [collectionView:dragSessionWillBegin:](collectionview%28__dragsessionwillbegin_%29.md): Notifies you that a drag session is about to begin for the collection view.
