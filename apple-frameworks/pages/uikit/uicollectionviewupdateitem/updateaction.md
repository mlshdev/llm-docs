> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewupdateitem/updateaction](https://developer.apple.com/documentation/uikit/uicollectionviewupdateitem/updateaction)

# updateAction (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The action being performed on the item.

## Declaration

```swift
var updateAction: UICollectionViewUpdateItem.Action { get }
```

<a id="Discussion"></a>

## Discussion

For a list of relevant action types, see [UICollectionViewUpdateItem.Action](action.md).

## See Also

### Accessing the item changes

- [indexPathBeforeUpdate](indexpathbeforeupdate.md): The index path of the item before the update.
- [indexPathAfterUpdate](indexpathafterupdate.md): The index path of the item after the update.
- [UICollectionViewUpdateItem.Action](action.md): Constants indicating the type of action being performed on an item.

# updateAction (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The action being performed on the item.

## Declaration

```objectivec
@property (nonatomic, readonly) UICollectionUpdateAction updateAction;
```

<a id="Discussion"></a>

## Discussion

For a list of relevant action types, see [UICollectionUpdateAction](action.md).

## See Also

### Accessing the item changes

- [indexPathBeforeUpdate](indexpathbeforeupdate.md): The index path of the item before the update.
- [indexPathAfterUpdate](indexpathafterupdate.md): The index path of the item after the update.
- [UICollectionUpdateAction](action.md): Constants indicating the type of action being performed on an item.
