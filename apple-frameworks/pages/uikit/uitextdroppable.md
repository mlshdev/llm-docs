> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdroppable](https://developer.apple.com/documentation/uikit/uitextdroppable)

# UITextDroppable (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface that determines if a text view is a drop destination.

## Declaration

```swift
@MainActor protocol UITextDroppable : UITextInput, UITextPasteConfigurationSupporting
```

## Topics

### Checking the text drop activity status

- [isTextDropActive](uitextdroppable/istextdropactive.md): A Boolean value that indicates whether the text view has at least one active drop session.

### Managing the text drop interaction

- [textDropInteraction](uitextdroppable/textdropinteraction.md): The drop interaction object added by UIKit to the text view.

### Setting the text drop delegate

- [textDropDelegate](uitextdroppable/textdropdelegate.md): The text drop delegate for interacting with a drop activity in the text view.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [UIKeyInput](uikeyinput.md)
- [UIPasteConfigurationSupporting](uipasteconfigurationsupporting.md)
- [UITextInput](uitextinput.md)
- [UITextInputTraits](uitextinputtraits.md)
- [UITextPasteConfigurationSupporting](uitextpasteconfigurationsupporting.md)

### Conforming Types

- [UISearchTextField](uisearchtextfield.md)
- [UITextField](uitextfield.md)
- [UITextView](uitextview.md)

## See Also

### Text view additions

- [UITextDragDelegate](uitextdragdelegate.md): The interface for customizing the behavior of a drag activity for a text view.
- [UITextDropDelegate](uitextdropdelegate.md): The interface for configuring a text view’s drop behavior.
- [UITextDraggable](uitextdraggable.md): The interface that determines if a text view is a drag source.
- [UITextDragOptions](uitextdragoptions.md): A set of options that determine the behavior of a draggable text view.
- [UITextDropEditability](uitextdropeditability.md): The text-drop editability styles for noneditable text views.

# UITextDroppable (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface that determines if a text view is a drop destination.

## Declaration

```objectivec
@protocol UITextDroppable <UITextInput, UITextPasteConfigurationSupporting>
```

## Topics

### Checking the text drop activity status

- [textDropActive](uitextdroppable/istextdropactive.md): A Boolean value that indicates whether the text view has at least one active drop session.

### Managing the text drop interaction

- [textDropInteraction](uitextdroppable/textdropinteraction.md): The drop interaction object added by UIKit to the text view.

### Setting the text drop delegate

- [textDropDelegate](uitextdroppable/textdropdelegate.md): The text drop delegate for interacting with a drop activity in the text view.

## Relationships

### Inherits From

- [UITextInput](uitextinput.md)
- [UITextPasteConfigurationSupporting](uitextpasteconfigurationsupporting.md)

### Conforming Types

- [UITextField](uitextfield.md)
- [UITextView](uitextview.md)

## See Also

### Text view additions

- [UITextDragDelegate](uitextdragdelegate.md): The interface for customizing the behavior of a drag activity for a text view.
- [UITextDropDelegate](uitextdropdelegate.md): The interface for configuring a text view’s drop behavior.
- [UITextDraggable](uitextdraggable.md): The interface that determines if a text view is a drag source.
- [UITextDragOptions](uitextdragoptions.md): A set of options that determine the behavior of a draggable text view.
- [UITextDropEditability](uitextdropeditability.md): The text-drop editability styles for noneditable text views.
