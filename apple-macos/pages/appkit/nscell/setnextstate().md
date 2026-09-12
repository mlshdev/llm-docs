> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/setnextstate()](https://developer.apple.com/documentation/appkit/nscell/setnextstate())

# setNextState() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Changes cell’s state to the next value in the sequence.

## Declaration

```swift
func setNextState()
```

<a id="Discussion"></a>

## Discussion

If a cell has three states, it cycles in this order: on, off, mixed, on, off, and so forth. If the cell has only two states, it toggles between them.

## See Also

### Managing Cell State

- [allowsMixedState](allowsmixedstate.md): A Boolean value indicating whether the cell supports three states instead of two.
- [nextState](nextstate.md): The cell’s next state.
- [state](state.md): The cell’s current state.
- [NSControl.StateValue](../nscontrol/statevalue.md): A constant that indicates whether a control is on, off, or in a mixed state.

# setNextState (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Changes cell’s state to the next value in the sequence.

## Declaration

```objectivec
- (void) setNextState;
```

<a id="Discussion"></a>

## Discussion

If a cell has three states, it cycles in this order: on, off, mixed, on, off, and so forth. If the cell has only two states, it toggles between them.

## See Also

### Managing Cell State

- [allowsMixedState](allowsmixedstate.md): A Boolean value indicating whether the cell supports three states instead of two.
- [nextState](nextstate.md): The cell’s next state.
- [state](state.md): The cell’s current state.
- [NSControlStateValue](../nscontrol/statevalue.md): A constant that indicates whether a control is on, off, or in a mixed state.
