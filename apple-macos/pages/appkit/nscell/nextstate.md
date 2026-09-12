> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/nextstate](https://developer.apple.com/documentation/appkit/nscell/nextstate)

# nextState (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The cell’s next state.

## Declaration

```swift
var nextState: Int { get }
```

<a id="Discussion"></a>

## Discussion

If a cell has three states, it cycles in this order: on, off, mixed, on, off, and so forth. If the cell has only two states, it toggles between them.

For a list of constants representing the possible cell states, see [NSCell.StateValue](statevalue.md).

## See Also

### Managing Cell State

- [allowsMixedState](allowsmixedstate.md): A Boolean value indicating whether the cell supports three states instead of two.
- [setNextState()](setnextstate%28%29.md): Changes cell’s state to the next value in the sequence.
- [state](state.md): The cell’s current state.
- [NSControl.StateValue](../nscontrol/statevalue.md): A constant that indicates whether a control is on, off, or in a mixed state.

# nextState (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The cell’s next state.

## Declaration

```objectivec
@property (readonly) NSInteger nextState;
```

<a id="Discussion"></a>

## Discussion

If a cell has three states, it cycles in this order: on, off, mixed, on, off, and so forth. If the cell has only two states, it toggles between them.

For a list of constants representing the possible cell states, see [NSCellStateValue](statevalue.md).

## See Also

### Managing Cell State

- [allowsMixedState](allowsmixedstate.md): A Boolean value indicating whether the cell supports three states instead of two.
- [setNextState](setnextstate%28%29.md): Changes cell’s state to the next value in the sequence.
- [state](state.md): The cell’s current state.
- [NSControlStateValue](../nscontrol/statevalue.md): A constant that indicates whether a control is on, off, or in a mixed state.
