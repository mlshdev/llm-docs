> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/dragsession/phase-swift.enum](https://developer.apple.com/documentation/swiftui/dragsession/phase-swift.enum)

# DragSession.Phase

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The phase of the current drag session

## Declaration

```swift
enum Phase
```

## Topics

### Enumeration Cases

- [DragSession.Phase.active](phase-swift.enum/active.md): The drag has moved to a new location.
- [DragSession.Phase.dataTransferCompleted](phase-swift.enum/datatransfercompleted.md): Dragged items have been transferred. You can remove temporary items, perform any cleanup if needed.
- [DragSession.Phase.ended(\_:)](phase-swift.enum/ended%28__%29.md): The drag has ended.
- [DragSession.Phase.ending(\_:)](phase-swift.enum/ending%28__%29.md): The drag is about to finish.
- [DragSession.Phase.initial](phase-swift.enum/initial.md): The drag session is about to begin

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
