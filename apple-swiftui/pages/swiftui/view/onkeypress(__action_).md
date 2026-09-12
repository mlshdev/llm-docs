> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/onkeypress(_:action:)](https://developer.apple.com/documentation/swiftui/view/onkeypress(_:action:))

# onKeyPress(\_:action:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Performs an action if the user presses a key on a hardware keyboard while the view has focus.

## Declaration

```swift
nonisolated func onKeyPress(_ key: KeyEquivalent, action: @escaping () -> KeyPress.Result) -> some View

```

## Parameters

- `key`: The key to match against incoming hardware keyboard events.
- `action`: The action to perform. Return `.handled` to consume the event and prevent further dispatch, or `.ignored` to allow dispatch to continue.

<a id="return-value"></a>

## Return Value

A modified view that binds hardware keyboard input when focused.

<a id="discussion"></a>

## Discussion

SwiftUI performs the action for key-down and key-repeat events.

## See Also

### Responding to keyboard input

- [onKeyPress(phases:action:)](onkeypress%28phases_action_%29.md): Performs an action if the user presses any key on a hardware keyboard while the view has focus.
- [onKeyPress(\_:phases:action:)](onkeypress%28__phases_action_%29.md): Performs an action if the user presses a key on a hardware keyboard while the view has focus.
- [onKeyPress(characters:phases:action:)](onkeypress%28characters_phases_action_%29.md): Performs an action if the user presses one or more keys on a hardware keyboard while the view has focus.
- [onKeyPress(keys:phases:action:)](onkeypress%28keys_phases_action_%29.md): Performs an action if the user presses one or more keys on a hardware keyboard while the view has focus.
- [KeyPress](../keypress.md)
