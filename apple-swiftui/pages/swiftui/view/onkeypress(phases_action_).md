> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/onkeypress(phases:action:)](https://developer.apple.com/documentation/swiftui/view/onkeypress(phases:action:))

# onKeyPress(phases:action:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Performs an action if the user presses any key on a hardware keyboard while the view has focus.

## Declaration

```swift
nonisolated func onKeyPress(phases: KeyPress.Phases = [.down, .repeat], action: @escaping (KeyPress) -> KeyPress.Result) -> some View

```

## Parameters

- `phases`: The key-press phases to match (`.down`, `.repeat`, and `.up`). The default value is `[.down, .repeat]`.
- `action`: The action to perform. The action receives a value describing the matched key event. Return `.handled` to consume the event and prevent further dispatch, or `.ignored` to allow dispatch to continue.

<a id="return-value"></a>

## Return Value

A modified view that binds hardware keyboard input when focused.

## See Also

### Responding to keyboard input

- [onKeyPress(\_:action:)](onkeypress%28__action_%29.md): Performs an action if the user presses a key on a hardware keyboard while the view has focus.
- [onKeyPress(\_:phases:action:)](onkeypress%28__phases_action_%29.md): Performs an action if the user presses a key on a hardware keyboard while the view has focus.
- [onKeyPress(characters:phases:action:)](onkeypress%28characters_phases_action_%29.md): Performs an action if the user presses one or more keys on a hardware keyboard while the view has focus.
- [onKeyPress(keys:phases:action:)](onkeypress%28keys_phases_action_%29.md): Performs an action if the user presses one or more keys on a hardware keyboard while the view has focus.
- [KeyPress](../keypress.md)
