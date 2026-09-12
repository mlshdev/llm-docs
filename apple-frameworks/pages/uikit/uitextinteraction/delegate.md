> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinteraction/delegate](https://developer.apple.com/documentation/uikit/uitextinteraction/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The object that receives events from the text interaction.

## Declaration

```swift
weak var delegate: (any UITextInteractionDelegate)? { get set }
```

## See Also

### Handling text input and interaction events

- [textInput](textinput.md): The object that interacts with the text input system.
- [UITextInteractionDelegate](../uitextinteractiondelegate.md): An interface that an object implements to receive information about text interaction events.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The object that receives events from the text interaction.

## Declaration

```objectivec
@property (nonatomic, weak) id<UITextInteractionDelegate> delegate;
```

## See Also

### Handling text input and interaction events

- [textInput](textinput.md): The object that interacts with the text input system.
- [UITextInteractionDelegate](../uitextinteractiondelegate.md): An interface that an object implements to receive information about text interaction events.
