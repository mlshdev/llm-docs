> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdropproposal/intent-swift.enum](https://developer.apple.com/documentation/uikit/uitableviewdropproposal/intent-swift.enum)

# UITableViewDropProposal.Intent (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Constants indicating how you intend to handle a drop.

## Declaration

```swift
enum Intent
```

## Topics

### Constants

- [UITableViewDropProposal.Intent.unspecified](intent-swift.enum/unspecified.md): No drop proposal was specified.
- [UITableViewDropProposal.Intent.insertAtDestinationIndexPath](intent-swift.enum/insertatdestinationindexpath.md): Insert the dropped content at the specified index path.
- [UITableViewDropProposal.Intent.insertIntoDestinationIndexPath](intent-swift.enum/insertintodestinationindexpath.md): Incorporate the dropped content into the row at the specified index path.
- [UITableViewDropProposal.Intent.automatic](intent-swift.enum/automatic.md): Incorporate the content in an appropriate way based on the drop location.

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

### Getting the proposed drop location

- [intent](intent-swift.property.md): The option to use when incorporating dropped items into your content.
- [UIDropOperation](../uidropoperation.md): Operation types that determine how a drag and drop activity resolves when the user drops a drag item.

# UITableViewDropIntent (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Constants indicating how you intend to handle a drop.

## Declaration

```objectivec
enum UITableViewDropIntent : NSInteger;
```

## Topics

### Constants

- [UITableViewDropIntentUnspecified](intent-swift.enum/unspecified.md): No drop proposal was specified.
- [UITableViewDropIntentInsertAtDestinationIndexPath](intent-swift.enum/insertatdestinationindexpath.md): Insert the dropped content at the specified index path.
- [UITableViewDropIntentInsertIntoDestinationIndexPath](intent-swift.enum/insertintodestinationindexpath.md): Incorporate the dropped content into the row at the specified index path.
- [UITableViewDropIntentAutomatic](intent-swift.enum/automatic.md): Incorporate the content in an appropriate way based on the drop location.

## See Also

### Getting the proposed drop location

- [intent](intent-swift.property.md): The option to use when incorporating dropped items into your content.
- [UIDropOperation](../uidropoperation.md): Operation types that determine how a drag and drop activity resolves when the user drops a drag item.
