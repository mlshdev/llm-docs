> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/movecommanddirection](https://developer.apple.com/documentation/swiftui/movecommanddirection)

# MoveCommandDirection

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** macOS 10.15+ · tvOS 13.0+

Specifies the direction of an arrow key movement.

## Declaration

```swift
enum MoveCommandDirection
```

## Topics

### Getting move command directions

- [MoveCommandDirection.up](movecommanddirection/up.md)
- [MoveCommandDirection.down](movecommanddirection/down.md)
- [MoveCommandDirection.left](movecommanddirection/left.md)
- [MoveCommandDirection.right](movecommanddirection/right.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Responding to commands

- [onMoveCommand(perform:)](view/onmovecommand%28perform_%29.md): Adds an action to perform in response to a move command, like when the user presses an arrow key on a Mac keyboard, or taps the edge of the Siri Remote when controlling an Apple TV.
- [onDeleteCommand(perform:)](view/ondeletecommand%28perform_%29.md): Adds an action to perform in response to the system’s Delete command, or pressing either the ⌫ (backspace) or ⌦ (forward delete) keys while the view has focus.
- [pageCommand(value:in:step:)](view/pagecommand%28value_in_step_%29.md): Steps a value through a range in response to page up or page down commands.
- [onExitCommand(perform:)](view/onexitcommand%28perform_%29.md): Sets up an action that triggers in response to receiving the exit command while the view has focus.
- [onPlayPauseCommand(perform:)](view/onplaypausecommand%28perform_%29.md): Adds an action to perform in response to the system’s Play/Pause command.
- [onCommand(\_:perform:)](view/oncommand%28__perform_%29.md): Adds an action to perform in response to the given selector.
