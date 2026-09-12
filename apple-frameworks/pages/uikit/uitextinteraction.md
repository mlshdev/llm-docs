> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinteraction](https://developer.apple.com/documentation/uikit/uitextinteraction)

# UITextInteraction (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An interaction that provides text selection gestures and UI to custom text views.

## Declaration

```swift
@MainActor class UITextInteraction
```

## Mentioned In

- [Adopting system selection UI in custom text views](adopting-system-selection-ui-in-custom-text-views.md)

<a id="overview"></a>

## Overview

Use [UITextInteraction](uitextinteraction.md) to provide your custom text views the same text selection gestures and UI available in native text views like [UITextView](uitextview.md) and [UITextField](uitextfield.md). When creating a text interaction, choose a mode that matches the state of the text, [UITextInteractionMode.editable](uitextinteractionmode/editable.md) or [UITextInteractionMode.nonEditable](uitextinteractionmode/noneditable.md). Then set the [textInput](uitextinteraction/textinput.md) property to an object that conforms to [UITextInput](uitextinput.md), and add the interaction to a view.

```swift
// Create a selection interaction for non-editable content.
let selectionInteraction = UITextInteraction(for: .nonEditable)

// Assign `textInput` to your view that implements the `UITextInput` protocol
// to get more control over the selection behavior and the text input system.
selectionInteraction.textInput = customTextView

// Add the interaction to the view.
customTextView.addInteraction(selectionInteraction)
```

If your custom text view supports editable and non-editable text, create two interactions — one for each mode — and add the interaction that matches the state of text to the view while removing the other interaction.

```swift
override func becomeFirstResponder() -> Bool {
    let isFirstResponder = self.isFirstResponder
    let result = super.becomeFirstResponder()
    
    if isFirstResponder == false && self.isFirstResponder == true {
        customTextView.removeInteraction(nonEditableTextInteraction)
        customTextView.addInteraction(editableTextInteraction)
    }
    
    return result
}

override func resignFirstResponder() -> Bool {
    let isFirstResponder = self.isFirstResponder
    let result = super.resignFirstResponder()
    
    if isFirstResponder == true && self.isFirstResponder == false {
        customTextView.removeInteraction(editableTextInteraction)
        customTextView.addInteraction(nonEditableTextInteraction)
    }
    
    return result
}
```

If your app provides other gestures in the same view hierarchy, you can use the [require(toFail:)](uigesturerecognizer/require%28tofail_%29.md) method to set up failure requirements between your app’s gestures and the text interaction gestures listed in the [gesturesForFailureRequirements](uitextinteraction/gesturesforfailurerequirements.md) property.

## Topics

### Creating text interactions

- [init(for:)](uitextinteraction/init%28for_%29.md): Creates a text interaction with the specified mode.

### Handling text input and interaction events

- [textInput](uitextinteraction/textinput.md): The object that interacts with the text input system.
- [delegate](uitextinteraction/delegate.md): The object that receives events from the text interaction.
- [UITextInteractionDelegate](uitextinteractiondelegate.md): An interface that an object implements to receive information about text interaction events.

### Getting interaction information

- [gesturesForFailureRequirements](uitextinteraction/gesturesforfailurerequirements.md): The list of gestures that the text interaction adds to the view hierarchy.
- [textInteractionMode](uitextinteraction/textinteractionmode.md): The mode of the text interaction.
- [UITextInteractionMode](uitextinteractionmode.md): Modes that determine the selection behaviors that a text interaction provides.

### Initializers

- [init(forMode:)](uitextinteraction/init%28formode_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [UIInteraction](uiinteraction.md)

## See Also

### Text interactions

- [UITextInteractionDelegate](uitextinteractiondelegate.md): An interface that an object implements to receive information about text interaction events.
- [UITextInteractionMode](uitextinteractionmode.md): Modes that determine the selection behaviors that a text interaction provides.

# UITextInteraction (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An interaction that provides text selection gestures and UI to custom text views.

## Declaration

```objectivec
@interface UITextInteraction : NSObject
```

## Mentioned In

- [Adopting system selection UI in custom text views](adopting-system-selection-ui-in-custom-text-views.md)

<a id="overview"></a>

## Overview

Use [UITextInteraction](uitextinteraction.md) to provide your custom text views the same text selection gestures and UI available in native text views like [UITextView](uitextview.md) and [UITextField](uitextfield.md). When creating a text interaction, choose a mode that matches the state of the text, [UITextInteractionModeEditable](uitextinteractionmode/editable.md) or [UITextInteractionModeNonEditable](uitextinteractionmode/noneditable.md). Then set the [textInput](uitextinteraction/textinput.md) property to an object that conforms to [UITextInput](uitextinput.md), and add the interaction to a view.

```swift
// Create a selection interaction for non-editable content.
let selectionInteraction = UITextInteraction(for: .nonEditable)

// Assign `textInput` to your view that implements the `UITextInput` protocol
// to get more control over the selection behavior and the text input system.
selectionInteraction.textInput = customTextView

// Add the interaction to the view.
customTextView.addInteraction(selectionInteraction)
```

If your custom text view supports editable and non-editable text, create two interactions — one for each mode — and add the interaction that matches the state of text to the view while removing the other interaction.

```swift
override func becomeFirstResponder() -> Bool {
    let isFirstResponder = self.isFirstResponder
    let result = super.becomeFirstResponder()
    
    if isFirstResponder == false && self.isFirstResponder == true {
        customTextView.removeInteraction(nonEditableTextInteraction)
        customTextView.addInteraction(editableTextInteraction)
    }
    
    return result
}

override func resignFirstResponder() -> Bool {
    let isFirstResponder = self.isFirstResponder
    let result = super.resignFirstResponder()
    
    if isFirstResponder == true && self.isFirstResponder == false {
        customTextView.removeInteraction(editableTextInteraction)
        customTextView.addInteraction(nonEditableTextInteraction)
    }
    
    return result
}
```

If your app provides other gestures in the same view hierarchy, you can use the [requireGestureRecognizerToFail:](uigesturerecognizer/require%28tofail_%29.md) method to set up failure requirements between your app’s gestures and the text interaction gestures listed in the [gesturesForFailureRequirements](uitextinteraction/gesturesforfailurerequirements.md) property.

## Topics

### Creating text interactions

- [textInteractionForMode:](uitextinteraction/init%28for_%29.md): Creates a text interaction with the specified mode.

### Handling text input and interaction events

- [textInput](uitextinteraction/textinput.md): The object that interacts with the text input system.
- [delegate](uitextinteraction/delegate.md): The object that receives events from the text interaction.
- [UITextInteractionDelegate](uitextinteractiondelegate.md): An interface that an object implements to receive information about text interaction events.

### Getting interaction information

- [gesturesForFailureRequirements](uitextinteraction/gesturesforfailurerequirements.md): The list of gestures that the text interaction adds to the view hierarchy.
- [textInteractionMode](uitextinteraction/textinteractionmode.md): The mode of the text interaction.
- [UITextInteractionMode](uitextinteractionmode.md): Modes that determine the selection behaviors that a text interaction provides.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [UIInteraction](uiinteraction.md)

## See Also

### Text interactions

- [UITextInteractionDelegate](uitextinteractiondelegate.md): An interface that an object implements to receive information about text interaction events.
- [UITextInteractionMode](uitextinteractionmode.md): Modes that determine the selection behaviors that a text interaction provides.
