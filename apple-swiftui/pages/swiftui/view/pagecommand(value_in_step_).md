> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/pagecommand(value:in:step:)](https://developer.apple.com/documentation/swiftui/view/pagecommand(value:in:step:))

# pageCommand(value:in:step:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** tvOS 14.3+

Steps a value through a range in response to page up or page down commands.

## Declaration

```swift
nonisolated func pageCommand<V>(value: Binding<V>, in bounds: ClosedRange<V>, step: V = 1) -> some View where V : BinaryInteger

```

## Parameters

- `value`: A [Binding](../binding.md) to the value to modify when the user pages up or down.
- `bounds`: A closed range that specifies the upper and lower bounds of `value`.
- `step`: The amount by which to increment or decrement `value`. Defaults to 1.

<a id="discussion"></a>

## Discussion

Use this command to step through sections of a data model associated with a view by providing a binding to a value, a range, and step. If taking another step would cause the value to exceed the bounds, then the value remains unchanged.

On tvOS, the user triggers ‘pageUp’ and ‘pageDown’ commands by pressing a dedicated button on a connected remote. For example, you can let a user page through a TV programming guide using the channel buttons:

```swift
struct GuideView: View {
    @State private var pageOffset: Int = 0

    var body: some View {
        GuideContent(at: pageOffset)
            .pageCommand(
                value: $pageOffset,
                in: 0...9,
                step: 1)
    }
}
```

## See Also

### Responding to commands

- [onMoveCommand(perform:)](onmovecommand%28perform_%29.md): Adds an action to perform in response to a move command, like when the user presses an arrow key on a Mac keyboard, or taps the edge of the Siri Remote when controlling an Apple TV.
- [onDeleteCommand(perform:)](ondeletecommand%28perform_%29.md): Adds an action to perform in response to the system’s Delete command, or pressing either the ⌫ (backspace) or ⌦ (forward delete) keys while the view has focus.
- [onExitCommand(perform:)](onexitcommand%28perform_%29.md): Sets up an action that triggers in response to receiving the exit command while the view has focus.
- [onPlayPauseCommand(perform:)](onplaypausecommand%28perform_%29.md): Adds an action to perform in response to the system’s Play/Pause command.
- [onCommand(\_:perform:)](oncommand%28__perform_%29.md): Adds an action to perform in response to the given selector.
- [MoveCommandDirection](../movecommanddirection.md): Specifies the direction of an arrow key movement.
