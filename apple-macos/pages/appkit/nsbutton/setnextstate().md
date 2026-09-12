> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbutton/setnextstate()](https://developer.apple.com/documentation/appkit/nsbutton/setnextstate())

# setNextState() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the button to its next state.

## Declaration

```swift
func setNextState()
```

<a id="Discussion"></a>

## Discussion

If the button has three states, it cycles through them in this order: on, off, mixed, on, and so forth. If the button has two states, it toggles between them.

## See Also

### Managing button state

- [allowsMixedState](allowsmixedstate.md): A Boolean value that indicates whether the button allows a mixed state.
- [state](state.md): The button’s state.
- [highlight(\_:)](highlight%28__%29.md): Highlights (or unhighlights) the button.

# setNextState (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the button to its next state.

## Declaration

```objectivec
- (void) setNextState;
```

<a id="Discussion"></a>

## Discussion

If the button has three states, it cycles through them in this order: on, off, mixed, on, and so forth. If the button has two states, it toggles between them.

## See Also

### Managing button state

- [allowsMixedState](allowsmixedstate.md): A Boolean value that indicates whether the button allows a mixed state.
- [state](state.md): The button’s state.
- [highlight:](highlight%28__%29.md): Highlights (or unhighlights) the button.
