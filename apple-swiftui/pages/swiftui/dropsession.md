> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/dropsession](https://developer.apple.com/documentation/swiftui/dropsession)

# DropSession

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

## Declaration

```swift
struct DropSession
```

## Topics

### Getting drop session details

- [id](dropsession/id-swift.property.md): The unique identifier of the drop session.
- [DropSession.ID](dropsession/id-swift.struct.md): The identifier of a drag session.
- [localSession](dropsession/localsession-swift.property.md): Provides additional information about a session if it originated within the app.
- [DropSession.LocalSession](dropsession/localsession-swift.struct.md): Describes the session originated within the app.
- [phase](dropsession/phase-swift.property.md): The phase of the current drop session.
- [DropSession.Phase](dropsession/phase-swift.enum.md): The phase of the current drop session.
- [suggestedOperations](dropsession/suggestedoperations.md): Operations suggested by the drag source.

### Getting drop details

- [itemsCount](dropsession/itemscount.md): Number of items for the drop.
- [location](dropsession/location.md): Location of drop in the local coordinate space
- [size](dropsession/size.md): Size of the drop destination view.

### Supporting reordering

- [reorderDestination(for:in:)](dropsession/reorderdestination%28for_in_%29.md): Provides the destination value of a reordering operation that occurred in the container associated with this drop destination modifier.
- [reorderDestination(for:itemID:in:)](dropsession/reorderdestination%28for_itemid_in_%29.md): Provides the destination value of a reordering operation that occurred in the container associated with this drop destination modifier.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)

## See Also

### Moving items

- [DragSession](dragsession.md): Describes the ongoing dragging session.
