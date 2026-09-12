> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/statevalue](https://developer.apple.com/documentation/appkit/nscontrol/statevalue)

# NSControl.StateValue (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

A constant that indicates whether a control is on, off, or in a mixed state.

## Declaration

```swift
struct StateValue
```

## Topics

### Setting a Control’s State

- [on](statevalue/on.md): A constant value that indicates a control is on or selected.
- [off](statevalue/off.md): A constant value that indicates a control is off or unselected.
- [mixed](statevalue/mixed.md): A constant value that indicates a control is in a mixed state, neither on nor off.

### Creating a State Value

- [init(\_:)](statevalue/init%28__%29.md): Initializes a control state object.
- [init(rawValue:)](statevalue/init%28rawvalue_%29.md): Initializes a state value from a raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing Cell State

- [allowsMixedState](../nscell/allowsmixedstate.md): A Boolean value indicating whether the cell supports three states instead of two.
- [nextState](../nscell/nextstate.md): The cell’s next state.
- [setNextState()](../nscell/setnextstate%28%29.md): Changes cell’s state to the next value in the sequence.
- [state](../nscell/state.md): The cell’s current state.

# NSControlStateValue (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

A constant that indicates whether a control is on, off, or in a mixed state.

## Declaration

```objectivec
typedef NSInteger NSControlStateValue;
```

## Topics

### Setting a Control’s State

- [NSControlStateValueOn](statevalue/on.md): A constant value that indicates a control is on or selected.
- [NSControlStateValueOff](statevalue/off.md): A constant value that indicates a control is off or unselected.
- [NSControlStateValueMixed](statevalue/mixed.md): A constant value that indicates a control is in a mixed state, neither on nor off.

## See Also

### Managing Cell State

- [allowsMixedState](../nscell/allowsmixedstate.md): A Boolean value indicating whether the cell supports three states instead of two.
- [nextState](../nscell/nextstate.md): The cell’s next state.
- [setNextState](../nscell/setnextstate%28%29.md): Changes cell’s state to the next value in the sequence.
- [state](../nscell/state.md): The cell’s current state.
