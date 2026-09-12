> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/onplaypausecommand(perform:)](https://developer.apple.com/documentation/swiftui/view/onplaypausecommand(perform:))

# onPlayPauseCommand(perform:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** tvOS 13.0+

Adds an action to perform in response to the system’s Play/Pause command.

## Declaration

```swift
nonisolated func onPlayPauseCommand(perform action: (() -> Void)?) -> some View

```

## See Also

### Responding to commands

- [onMoveCommand(perform:)](onmovecommand%28perform_%29.md): Adds an action to perform in response to a move command, like when the user presses an arrow key on a Mac keyboard, or taps the edge of the Siri Remote when controlling an Apple TV.
- [onDeleteCommand(perform:)](ondeletecommand%28perform_%29.md): Adds an action to perform in response to the system’s Delete command, or pressing either the ⌫ (backspace) or ⌦ (forward delete) keys while the view has focus.
- [pageCommand(value:in:step:)](pagecommand%28value_in_step_%29.md): Steps a value through a range in response to page up or page down commands.
- [onExitCommand(perform:)](onexitcommand%28perform_%29.md): Sets up an action that triggers in response to receiving the exit command while the view has focus.
- [onCommand(\_:perform:)](oncommand%28__perform_%29.md): Adds an action to perform in response to the given selector.
- [MoveCommandDirection](../movecommanddirection.md): Specifies the direction of an arrow key movement.
