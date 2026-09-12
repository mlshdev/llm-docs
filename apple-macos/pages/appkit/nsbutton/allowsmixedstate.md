> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbutton/allowsmixedstate](https://developer.apple.com/documentation/appkit/nsbutton/allowsmixedstate)

# allowsMixedState (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the button allows a mixed state.

## Declaration

```swift
var allowsMixedState: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the button has three states (on, off, and mixed), or [false](https://developer.apple.com/documentation/swift/false) if the button has two states (on and off). The default value is [false](https://developer.apple.com/documentation/swift/false). On and off states (also referred to as alternate and normal) indicate that the button is either clicked or not clicked. Mixed state is typically used for checkboxes or radio buttons. For example, suppose the state of a checkbox is used to denote whether a text field contains bold text. If all of the text in the text field is bold, then the checkbox appears checked (on). If none of the text is bold, then the checkbox appears unchecked (off). If some of the text is bold, then the checkbox contains a dash (mixed).

## See Also

### Managing button state

- [state](state.md): The button’s state.
- [setNextState()](setnextstate%28%29.md): Sets the button to its next state.
- [highlight(\_:)](highlight%28__%29.md): Highlights (or unhighlights) the button.

# allowsMixedState (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the button allows a mixed state.

## Declaration

```objectivec
@property BOOL allowsMixedState;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the button has three states (on, off, and mixed), or [false](https://developer.apple.com/documentation/swift/false) if the button has two states (on and off). The default value is [false](https://developer.apple.com/documentation/swift/false). On and off states (also referred to as alternate and normal) indicate that the button is either clicked or not clicked. Mixed state is typically used for checkboxes or radio buttons. For example, suppose the state of a checkbox is used to denote whether a text field contains bold text. If all of the text in the text field is bold, then the checkbox appears checked (on). If none of the text is bold, then the checkbox appears unchecked (off). If some of the text is bold, then the checkbox contains a dash (mixed).

## See Also

### Managing button state

- [state](state.md): The button’s state.
- [setNextState](setnextstate%28%29.md): Sets the button to its next state.
- [highlight:](highlight%28__%29.md): Highlights (or unhighlights) the button.
