> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/onmodifierkeyschanged(mask:initial:_:)](https://developer.apple.com/documentation/swiftui/view/onmodifierkeyschanged(mask:initial:_:))

# onModifierKeysChanged(mask:initial:\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Performs an action whenever the user presses or releases a hardware modifier key.

## Declaration

```swift
nonisolated func onModifierKeysChanged(mask: EventModifiers = .all, initial: Bool = true, _ action: @escaping (EventModifiers, EventModifiers) -> Void) -> some View

```

## Parameters

- `mask`: A set of modifier keys controlling which keys to observe for changes. The default mask includes all keys.
- `initial`: A flag indicating whether the view should be updated automatically with the state of the modifier keys when the view appears. If `false`, the callback won’t fire until modifier key press state actually changes. The default value is `true`.
- `action`: A closure to receive updates when modifier key press state changes. The closure receives the old and new values as input.

<a id="return-value"></a>

## Return Value

A modified view that updates when hardware modifier keys change.

<a id="discussion"></a>

## Discussion

If a mask is provided, updates will only occur when they involve a change in one of the keys included in the mask. The default mask includes all modifier keys.

```swift
ContentView()
    .onModifierKeysChanged(mask: .option) { old, new in
        if new.isEmpty {
            // Option key released
            ...
        } else {
            // Option key pressed
            ...
        }
    }
```

When the view first appears, SwiftUI will check the state of the modifier keys and call the provided action if any matched keys are pressed. Otherwise, the first call will come the first time the user presses a matched modifier key down. When multiple keyboards are in use at the same time, the updates emitted by the stream reflect the combined set of all modifier keys being held down on all attached keyboards.

## See Also

### Responding to modifier keys

- [modifierKeyAlternate(\_:\_:)](modifierkeyalternate%28____%29.md): Builds a view to use in place of the modified view when the user presses the modifier key(s) indicated by the given set.
