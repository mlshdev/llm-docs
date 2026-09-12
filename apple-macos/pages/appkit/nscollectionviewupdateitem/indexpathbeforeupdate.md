> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewupdateitem/indexpathbeforeupdate](https://developer.apple.com/documentation/appkit/nscollectionviewupdateitem/indexpathbeforeupdate)

# indexPathBeforeUpdate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The index path of the item before the update.

## Declaration

```swift
var indexPathBeforeUpdate: IndexPath? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` for an action of type [NSCollectionView.UpdateAction.insert](../nscollectionview/updateaction/insert.md).

## See Also

### Accessing the Item Changes

- [indexPathAfterUpdate](indexpathafterupdate.md): The index path of the item after the update.
- [updateAction](updateaction.md): The action being performed on the item.
- [NSCollectionView.UpdateAction](../nscollectionview/updateaction.md): Constants indicating the type of action being performed on an item.
- [NSCollectionView.ScrollDirection](../nscollectionview/scrolldirection.md): Constants indicating the scrolling direction for the layout.

# indexPathBeforeUpdate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The index path of the item before the update.

## Declaration

```objectivec
@property (readonly, nullable) NSIndexPath * indexPathBeforeUpdate;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` for an action of type [NSCollectionUpdateActionInsert](../nscollectionview/updateaction/insert.md).

## See Also

### Accessing the Item Changes

- [indexPathAfterUpdate](indexpathafterupdate.md): The index path of the item after the update.
- [updateAction](updateaction.md): The action being performed on the item.
- [NSCollectionUpdateAction](../nscollectionview/updateaction.md): Constants indicating the type of action being performed on an item.
- [NSCollectionViewScrollDirection](../nscollectionview/scrolldirection.md): Constants indicating the scrolling direction for the layout.
