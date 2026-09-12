> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdropproposal/intent-swift.enum](https://developer.apple.com/documentation/uikit/uicollectionviewdropproposal/intent-swift.enum)

# UICollectionViewDropProposal.Intent (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Constants indicating how you intend to handle a drop.

## Declaration

```swift
enum Intent
```

## Topics

### Enumeration Cases

- [UICollectionViewDropProposal.Intent.insertAtDestinationIndexPath](intent-swift.enum/insertatdestinationindexpath.md): Insert the dropped items at the specified index path.
- [UICollectionViewDropProposal.Intent.insertIntoDestinationIndexPath](intent-swift.enum/insertintodestinationindexpath.md): Incorporate the dropped items into the item at the specified index path.
- [UICollectionViewDropProposal.Intent.unspecified](intent-swift.enum/unspecified.md): No drop proposal was specified.

### Initializers

- [init(rawValue:)](intent-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Proposed Drop Location

- [intent](intent-swift.property.md): The option to use when incorporating the dropped items into your content.
- [UIDropOperation](../uidropoperation.md): Operation types that determine how a drag and drop activity resolves when the user drops a drag item.

# UICollectionViewDropIntent (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Constants indicating how you intend to handle a drop.

## Declaration

```objectivec
enum UICollectionViewDropIntent : NSInteger;
```

## Topics

### Enumeration Cases

- [UICollectionViewDropIntentInsertAtDestinationIndexPath](intent-swift.enum/insertatdestinationindexpath.md): Insert the dropped items at the specified index path.
- [UICollectionViewDropIntentInsertIntoDestinationIndexPath](intent-swift.enum/insertintodestinationindexpath.md): Incorporate the dropped items into the item at the specified index path.
- [UICollectionViewDropIntentUnspecified](intent-swift.enum/unspecified.md): No drop proposal was specified.

## See Also

### Getting the Proposed Drop Location

- [intent](intent-swift.property.md): The option to use when incorporating the dropped items into your content.
- [UIDropOperation](../uidropoperation.md): Operation types that determine how a drag and drop activity resolves when the user drops a drag item.
