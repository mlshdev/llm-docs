> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/dropoperation](https://developer.apple.com/documentation/swiftui/dropoperation)

# DropOperation

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15+ · visionOS 1.0+

Operation types that determine how a drag and drop session resolves when the user drops a drag item.

## Declaration

```swift
enum DropOperation
```

## Topics

### Getting operation types

- [DropOperation.cancel](dropoperation/cancel.md): Cancel the drag operation and transfer no data.
- [DropOperation.copy](dropoperation/copy.md): Copy the data to the modified view.
- [DropOperation.forbidden](dropoperation/forbidden.md): The drop activity is not allowed at this time or location.
- [DropOperation.move](dropoperation/move.md): Move the data represented by the drag items instead of copying it.

### Structures

- [DropOperation.Set](dropoperation/set.md): A set of drop operations, corresponding to matching cases in `DropOperation`.

### Enumeration Cases

- [DropOperation.alias](dropoperation/alias.md)
- [DropOperation.delete](dropoperation/delete.md): Delete the data. The item was dragged to Trash or to another destination that semantically represents deletion.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Moving items using item providers

- [itemProvider(\_:)](view/itemprovider%28__%29.md): Provides a closure that vends the drag representation to be used for a particular data element.
- [onDrag(\_:preview:)](view/ondrag%28__preview_%29.md): Activates this view as the source of a drag and drop operation.
- [onDrag(\_:)](view/ondrag%28__%29.md): Activates this view as the source of a drag and drop operation.
- [onDrop(of:isTargeted:perform:)](view/ondrop%28of_istargeted_perform_%29.md): Defines the destination of a drag-and-drop operation that handles the dropped content with a closure that you specify.
- [onDrop(of:delegate:)](view/ondrop%28of_delegate_%29.md): Defines the destination of a drag and drop operation using behavior controlled by the delegate that you provide.
- [DropDelegate](dropdelegate.md): An interface that you implement to interact with a drop operation in a view modified to accept drops.
- [DropProposal](dropproposal.md): The behavior of a drop.
- [DropInfo](dropinfo.md): The current state of a drop.
