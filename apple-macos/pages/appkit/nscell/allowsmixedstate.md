> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/allowsmixedstate](https://developer.apple.com/documentation/appkit/nscell/allowsmixedstate)

# allowsMixedState (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the cell supports three states instead of two.

## Declaration

```swift
var allowsMixedState: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the cell supports three states: on, off, and mixed. When the value is [false](https://developer.apple.com/documentation/swift/false), the cell supports only the on and off states.

## See Also

### Managing Cell State

- [nextState](nextstate.md): The cell’s next state.
- [setNextState()](setnextstate%28%29.md): Changes cell’s state to the next value in the sequence.
- [state](state.md): The cell’s current state.
- [NSControl.StateValue](../nscontrol/statevalue.md): A constant that indicates whether a control is on, off, or in a mixed state.

# allowsMixedState (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the cell supports three states instead of two.

## Declaration

```objectivec
@property BOOL allowsMixedState;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the cell supports three states: on, off, and mixed. When the value is [false](https://developer.apple.com/documentation/swift/false), the cell supports only the on and off states.

## See Also

### Managing Cell State

- [nextState](nextstate.md): The cell’s next state.
- [setNextState](setnextstate%28%29.md): Changes cell’s state to the next value in the sequence.
- [state](state.md): The cell’s current state.
- [NSControlStateValue](../nscontrol/statevalue.md): A constant that indicates whether a control is on, off, or in a mixed state.
