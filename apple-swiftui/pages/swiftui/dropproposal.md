> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/dropproposal](https://developer.apple.com/documentation/swiftui/dropproposal)

# DropProposal

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15+ · visionOS 1.0+

The behavior of a drop.

## Declaration

```swift
struct DropProposal
```

## Topics

### Creating a drop proposal

- [init(operation:)](dropproposal/init%28operation_%29.md)
- [operation](dropproposal/operation.md): The drop operation that the drop proposes to perform.

### Initializers

- [init(withinApplication:outsideApplication:)](dropproposal/init%28withinapplication_outsideapplication_%29.md)

### Instance Properties

- [operationOutsideApplication](dropproposal/operationoutsideapplication.md): The drop operation for drops outside the source application.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
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
- [DropOperation](dropoperation.md): Operation types that determine how a drag and drop session resolves when the user drops a drag item.
- [DropInfo](dropinfo.md): The current state of a drop.
