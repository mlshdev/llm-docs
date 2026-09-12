> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewupdateitem/updateaction](https://developer.apple.com/documentation/appkit/nscollectionviewupdateitem/updateaction)

# updateAction (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The action being performed on the item.

## Declaration

```swift
var updateAction: NSCollectionView.UpdateAction { get }
```

<a id="Discussion"></a>

## Discussion

For a list of relevant actions, see [NSCollectionView.UpdateAction](../nscollectionview/updateaction.md).

## See Also

### Accessing the Item Changes

- [indexPathBeforeUpdate](indexpathbeforeupdate.md): The index path of the item before the update.
- [indexPathAfterUpdate](indexpathafterupdate.md): The index path of the item after the update.
- [NSCollectionView.UpdateAction](../nscollectionview/updateaction.md): Constants indicating the type of action being performed on an item.
- [NSCollectionView.ScrollDirection](../nscollectionview/scrolldirection.md): Constants indicating the scrolling direction for the layout.

# updateAction (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The action being performed on the item.

## Declaration

```objectivec
@property (readonly) NSCollectionUpdateAction updateAction;
```

<a id="Discussion"></a>

## Discussion

For a list of relevant actions, see [NSCollectionUpdateAction](../nscollectionview/updateaction.md).

## See Also

### Accessing the Item Changes

- [indexPathBeforeUpdate](indexpathbeforeupdate.md): The index path of the item before the update.
- [indexPathAfterUpdate](indexpathafterupdate.md): The index path of the item after the update.
- [NSCollectionUpdateAction](../nscollectionview/updateaction.md): Constants indicating the type of action being performed on an item.
- [NSCollectionViewScrollDirection](../nscollectionview/scrolldirection.md): Constants indicating the scrolling direction for the layout.
