> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinteraction/textinput](https://developer.apple.com/documentation/uikit/uitextinteraction/textinput)

# textInput (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The object that interacts with the text input system.

## Declaration

```swift
weak var textInput: (any UIResponder & UITextInput)? { get set }
```

<a id="Discussion"></a>

## Discussion

The object that you assign to [textInput](textinput.md) can be different than the view that contains the text interaction. For example, you may want the gestures for the text interaction to work on a container view, such as a scroll view, while managing the text selection behavior in a contained view, such as the one drawing the text.

## See Also

### Handling text input and interaction events

- [delegate](delegate.md): The object that receives events from the text interaction.
- [UITextInteractionDelegate](../uitextinteractiondelegate.md): An interface that an object implements to receive information about text interaction events.

# textInput (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The object that interacts with the text input system.

## Declaration

```objectivec
@property (nonatomic, weak) UIResponder<UITextInput> * textInput;
```

<a id="Discussion"></a>

## Discussion

The object that you assign to [textInput](textinput.md) can be different than the view that contains the text interaction. For example, you may want the gestures for the text interaction to work on a container view, such as a scroll view, while managing the text selection behavior in a contained view, such as the one drawing the text.

## See Also

### Handling text input and interaction events

- [delegate](delegate.md): The object that receives events from the text interaction.
- [UITextInteractionDelegate](../uitextinteractiondelegate.md): An interface that an object implements to receive information about text interaction events.
