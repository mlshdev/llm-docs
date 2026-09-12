> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewupdateitem/action](https://developer.apple.com/documentation/uikit/uicollectionviewupdateitem/action)

# UICollectionViewUpdateItem.Action (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants indicating the type of action being performed on an item.

## Declaration

```swift
enum Action
```

## Topics

### Constants

- [UICollectionViewUpdateItem.Action.none](action/none.md)
- [UICollectionViewUpdateItem.Action.insert](action/insert.md)
- [UICollectionViewUpdateItem.Action.delete](action/delete.md)
- [UICollectionViewUpdateItem.Action.reload](action/reload.md)
- [UICollectionViewUpdateItem.Action.move](action/move.md)

### Initializers

- [init(rawValue:)](action/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing the item changes

- [indexPathBeforeUpdate](indexpathbeforeupdate.md): The index path of the item before the update.
- [indexPathAfterUpdate](indexpathafterupdate.md): The index path of the item after the update.
- [updateAction](updateaction.md): The action being performed on the item.

# UICollectionUpdateAction (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants indicating the type of action being performed on an item.

## Declaration

```objectivec
enum UICollectionUpdateAction : NSInteger;
```

## Topics

### Constants

- [UICollectionUpdateActionNone](action/none.md)
- [UICollectionUpdateActionInsert](action/insert.md)
- [UICollectionUpdateActionDelete](action/delete.md)
- [UICollectionUpdateActionReload](action/reload.md)
- [UICollectionUpdateActionMove](action/move.md)

## See Also

### Accessing the item changes

- [indexPathBeforeUpdate](indexpathbeforeupdate.md): The index path of the item before the update.
- [indexPathAfterUpdate](indexpathafterupdate.md): The index path of the item after the update.
- [updateAction](updateaction.md): The action being performed on the item.
