> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/oncommand(_:perform:)](https://developer.apple.com/documentation/swiftui/view/oncommand(_:perform:))

# onCommand(\_:perform:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Adds an action to perform in response to the given selector.

## Declaration

```swift
nonisolated func onCommand(_ selector: Selector, perform action: (() -> Void)?) -> some View

```

## Parameters

- `selector`: The selector to register for `action`.
- `action`: The action to perform. If `action` is `nil`, `command` keeps its association with this view but doesn’t trigger.

<a id="return-value"></a>

## Return Value

A view that triggers `action` when the `command` occurs.

<a id="discussion"></a>

## Discussion

This view or one of the views it contains must be in focus in order for the action to trigger. Other actions for the same command on views *closer* to the view in focus take priority, potentially overriding this action.

## See Also

### Responding to commands

- [onMoveCommand(perform:)](onmovecommand%28perform_%29.md): Adds an action to perform in response to a move command, like when the user presses an arrow key on a Mac keyboard, or taps the edge of the Siri Remote when controlling an Apple TV.
- [onDeleteCommand(perform:)](ondeletecommand%28perform_%29.md): Adds an action to perform in response to the system’s Delete command, or pressing either the ⌫ (backspace) or ⌦ (forward delete) keys while the view has focus.
- [pageCommand(value:in:step:)](pagecommand%28value_in_step_%29.md): Steps a value through a range in response to page up or page down commands.
- [onExitCommand(perform:)](onexitcommand%28perform_%29.md): Sets up an action that triggers in response to receiving the exit command while the view has focus.
- [onPlayPauseCommand(perform:)](onplaypausecommand%28perform_%29.md): Adds an action to perform in response to the system’s Play/Pause command.
- [MoveCommandDirection](../movecommanddirection.md): Specifies the direction of an arrow key movement.
