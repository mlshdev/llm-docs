> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextselectiondisplayinteraction/textinput](https://developer.apple.com/documentation/uikit/uitextselectiondisplayinteraction/textinput)

# textInput (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

The text input object that manages the selection.

## Declaration

```swift
weak var textInput: (any UITextInput)? { get }
```

## Mentioned In

- [Adopting system selection UI in custom text views](../adopting-system-selection-ui-in-custom-text-views.md)

<a id="Discussion"></a>

## Discussion

Use this property to refer to the text input view that manages the text selection. You specify this view when you create the [UITextSelectionDisplayInteraction](../uitextselectiondisplayinteraction.md) object.

# textInput (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

The text input object that manages the selection.

## Declaration

```objectivec
@property (nonatomic, weak, readonly) id<UITextInput> textInput;
```

## Mentioned In

- [Adopting system selection UI in custom text views](../adopting-system-selection-ui-in-custom-text-views.md)

<a id="Discussion"></a>

## Discussion

Use this property to refer to the text input view that manages the text selection. You specify this view when you create the [UITextSelectionDisplayInteraction](../uitextselectiondisplayinteraction.md) object.
