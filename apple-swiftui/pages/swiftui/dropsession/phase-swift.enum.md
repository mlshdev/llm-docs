> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/dropsession/phase-swift.enum](https://developer.apple.com/documentation/swiftui/dropsession/phase-swift.enum)

# DropSession.Phase

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The phase of the current drop session.

## Declaration

```swift
enum Phase
```

## Topics

### Enumeration Cases

- [DropSession.Phase.active](phase-swift.enum/active.md): The drop session is active inside the drop destination.
- [DropSession.Phase.dataTransferCompleted](phase-swift.enum/datatransfercompleted.md): Dragged items have been transferred. You can remove temporary items, perform any cleanup if needed.
- [DropSession.Phase.ended(\_:)](phase-swift.enum/ended%28__%29.md): The drop has ended.
- [DropSession.Phase.entering](phase-swift.enum/entering.md): The drop session is entering the drop destination.
- [DropSession.Phase.exiting](phase-swift.enum/exiting.md): The drop session has exited the drop destination.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting drop session details

- [id](id-swift.property.md): The unique identifier of the drop session.
- [DropSession.ID](id-swift.struct.md): The identifier of a drag session.
- [localSession](localsession-swift.property.md): Provides additional information about a session if it originated within the app.
- [DropSession.LocalSession](localsession-swift.struct.md): Describes the session originated within the app.
- [phase](phase-swift.property.md): The phase of the current drop session.
- [suggestedOperations](suggestedoperations.md): Operations suggested by the drag source.
