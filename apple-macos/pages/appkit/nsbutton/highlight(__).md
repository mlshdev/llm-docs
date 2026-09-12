> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbutton/highlight(_:)](https://developer.apple.com/documentation/appkit/nsbutton/highlight(_:))

# highlight(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Highlights (or unhighlights) the button.

## Declaration

```swift
func highlight(_ flag: Bool)
```

## Parameters

- `flag`: [true](https://developer.apple.com/documentation/swift/true) to highlight the button; [false](https://developer.apple.com/documentation/swift/false) to unhighlight the button.  If the current state of the button matches `flag`, no action is taken.

<a id="Discussion"></a>

## Discussion

Highlighting makes the button appear recessed, displays its alternate title or image, or causes the button to appear illuminated.

## See Also

### Related Documentation

- [setButtonType(\_:)](setbuttontype%28__%29.md): Sets the button’s type, which affects its user interface and behavior when clicked.

### Managing button state

- [allowsMixedState](allowsmixedstate.md): A Boolean value that indicates whether the button allows a mixed state.
- [state](state.md): The button’s state.
- [setNextState()](setnextstate%28%29.md): Sets the button to its next state.

# highlight: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Highlights (or unhighlights) the button.

## Declaration

```objectivec
- (void) highlight:(BOOL) flag;
```

## Parameters

- `flag`: [true](https://developer.apple.com/documentation/swift/true) to highlight the button; [false](https://developer.apple.com/documentation/swift/false) to unhighlight the button.  If the current state of the button matches `flag`, no action is taken.

<a id="Discussion"></a>

## Discussion

Highlighting makes the button appear recessed, displays its alternate title or image, or causes the button to appear illuminated.

## See Also

### Related Documentation

- [setButtonType:](setbuttontype%28__%29.md): Sets the button’s type, which affects its user interface and behavior when clicked.

### Managing button state

- [allowsMixedState](allowsmixedstate.md): A Boolean value that indicates whether the button allows a mixed state.
- [state](state.md): The button’s state.
- [setNextState](setnextstate%28%29.md): Sets the button to its next state.
