> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewupdateitem/indexpathbeforeupdate](https://developer.apple.com/documentation/uikit/uicollectionviewupdateitem/indexpathbeforeupdate)

# indexPathBeforeUpdate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The index path of the item before the update.

## Declaration

```swift
var indexPathBeforeUpdate: IndexPath? { get }
```

## See Also

### Accessing the item changes

- [indexPathAfterUpdate](indexpathafterupdate.md): The index path of the item after the update.
- [updateAction](updateaction.md): The action being performed on the item.
- [UICollectionViewUpdateItem.Action](action.md): Constants indicating the type of action being performed on an item.

# indexPathBeforeUpdate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The index path of the item before the update.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSIndexPath * indexPathBeforeUpdate;
```

## See Also

### Accessing the item changes

- [indexPathAfterUpdate](indexpathafterupdate.md): The index path of the item after the update.
- [updateAction](updateaction.md): The action being performed on the item.
- [UICollectionUpdateAction](action.md): Constants indicating the type of action being performed on an item.
