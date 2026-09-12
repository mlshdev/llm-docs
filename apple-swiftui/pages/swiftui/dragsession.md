> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/dragsession](https://developer.apple.com/documentation/swiftui/dragsession)

# DragSession

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Describes the ongoing dragging session.

## Declaration

```swift
struct DragSession
```

## Topics

### Structures

- [DragSession.ID](dragsession/id-swift.struct.md): The identifier of a drag session.

### Instance Properties

- [draggedItemIndex](dragsession/draggeditemindex.md): The index of the dragged item under the cursor.
- [id](dragsession/id-swift.property.md): The identifier of the drag session.
- [location](dragsession/location.md): Location of the drag session in the local coordinate space.
- [phase](dragsession/phase-swift.property.md): The current phase of the drag session.

### Instance Methods

- [draggedItemIDs(for:)](dragsession/draggeditemids%28for_%29.md): Provides an array of identifiers of the currently dragged items in a case when the items conform to the `Identifiable` protocol, or identifiers were provided to SwiftUI separately.

### Enumerations

- [DragSession.Phase](dragsession/phase-swift.enum.md): The phase of the current drag session

## Relationships

### Conforms To

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)

## See Also

### Moving items

- [DropSession](dropsession.md)
