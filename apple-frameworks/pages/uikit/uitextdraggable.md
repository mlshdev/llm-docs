> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdraggable](https://developer.apple.com/documentation/uikit/uitextdraggable)

# UITextDraggable (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface that determines if a text view is a drag source.

## Declaration

```swift
@MainActor protocol UITextDraggable : UITextInput
```

## Topics

### Checking the text drag activity status

- [isTextDragActive](uitextdraggable/istextdragactive.md): A Boolean value indicating whether at least one drag session for the text view is active.

### Managing the text drag interaction

- [textDragInteraction](uitextdraggable/textdraginteraction.md): The drag interaction object added by UIKit to the text view.

### Setting the text drag delegate

- [textDragDelegate](uitextdraggable/textdragdelegate.md): A text drag delegate object for customizing the drag source behavior of a text view.

### Setting the text drag options

- [textDragOptions](uitextdraggable/textdragoptions.md): The options for the text drag operation.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [UIKeyInput](uikeyinput.md)
- [UITextInput](uitextinput.md)
- [UITextInputTraits](uitextinputtraits.md)

### Conforming Types

- [UISearchTextField](uisearchtextfield.md)
- [UITextField](uitextfield.md)
- [UITextView](uitextview.md)

## See Also

### Text view additions

- [UITextDragDelegate](uitextdragdelegate.md): The interface for customizing the behavior of a drag activity for a text view.
- [UITextDropDelegate](uitextdropdelegate.md): The interface for configuring a text view’s drop behavior.
- [UITextDragOptions](uitextdragoptions.md): A set of options that determine the behavior of a draggable text view.
- [UITextDroppable](uitextdroppable.md): The interface that determines if a text view is a drop destination.
- [UITextDropEditability](uitextdropeditability.md): The text-drop editability styles for noneditable text views.

# UITextDraggable (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface that determines if a text view is a drag source.

## Declaration

```objectivec
@protocol UITextDraggable <UITextInput>
```

## Topics

### Checking the text drag activity status

- [textDragActive](uitextdraggable/istextdragactive.md): A Boolean value indicating whether at least one drag session for the text view is active.

### Managing the text drag interaction

- [textDragInteraction](uitextdraggable/textdraginteraction.md): The drag interaction object added by UIKit to the text view.

### Setting the text drag delegate

- [textDragDelegate](uitextdraggable/textdragdelegate.md): A text drag delegate object for customizing the drag source behavior of a text view.

### Setting the text drag options

- [textDragOptions](uitextdraggable/textdragoptions.md): The options for the text drag operation.

## Relationships

### Inherits From

- [UITextInput](uitextinput.md)

### Conforming Types

- [UITextField](uitextfield.md)
- [UITextView](uitextview.md)

## See Also

### Text view additions

- [UITextDragDelegate](uitextdragdelegate.md): The interface for customizing the behavior of a drag activity for a text view.
- [UITextDropDelegate](uitextdropdelegate.md): The interface for configuring a text view’s drop behavior.
- [UITextDragOptions](uitextdragoptions.md): A set of options that determine the behavior of a draggable text view.
- [UITextDroppable](uitextdroppable.md): The interface that determines if a text view is a drop destination.
- [UITextDropEditability](uitextdropeditability.md): The text-drop editability styles for noneditable text views.
