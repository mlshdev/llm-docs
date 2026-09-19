> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nscollectionviewupdateitem/indexpathafterupdate

# indexPathAfterUpdate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The index path of the item after the update.

## Declaration

```swift
var indexPathAfterUpdate: IndexPath? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` for an action of type [NSCollectionView.UpdateAction.delete](../nscollectionview/updateaction/delete.md).

## See Also

### Accessing the Item Changes

- [indexPathBeforeUpdate](indexpathbeforeupdate.md): The index path of the item before the update.
- [updateAction](updateaction.md): The action being performed on the item.
- [NSCollectionView.UpdateAction](../nscollectionview/updateaction.md): Constants indicating the type of action being performed on an item.
- [NSCollectionView.ScrollDirection](../nscollectionview/scrolldirection.md): Constants indicating the scrolling direction for the layout.

# indexPathAfterUpdate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The index path of the item after the update.

## Declaration

```objectivec
@property (readonly, nullable) NSIndexPath * indexPathAfterUpdate;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` for an action of type [NSCollectionUpdateActionDelete](../nscollectionview/updateaction/delete.md).

## See Also

### Accessing the Item Changes

- [indexPathBeforeUpdate](indexpathbeforeupdate.md): The index path of the item before the update.
- [updateAction](updateaction.md): The action being performed on the item.
- [NSCollectionUpdateAction](../nscollectionview/updateaction.md): Constants indicating the type of action being performed on an item.
- [NSCollectionViewScrollDirection](../nscollectionview/scrolldirection.md): Constants indicating the scrolling direction for the layout.
