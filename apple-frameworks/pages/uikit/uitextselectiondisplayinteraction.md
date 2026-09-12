> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextselectiondisplayinteraction](https://developer.apple.com/documentation/uikit/uitextselectiondisplayinteraction)

# UITextSelectionDisplayInteraction (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

An object that provides the system UI for displaying text selection.

## Declaration

```swift
@MainActor class UITextSelectionDisplayInteraction
```

## Mentioned In

- [Adopting system selection UI in custom text views](adopting-system-selection-ui-in-custom-text-views.md)

<a id="overview"></a>

## Overview

> **Related sessions from WWDC23**

>  Session 10058: [What’s new with text and text interactions](https://developer.apple.com/videos/play/wwdc2023/10058/)

## Topics

### Creating a text selection display interaction

- [init(textInput:delegate:)](uitextselectiondisplayinteraction/init%28textinput_delegate_%29.md): Creates a new text selection display interaction object for the specified text view.

### Managing the drawing view

- [delegate](uitextselectiondisplayinteraction/delegate.md): A delegate that provides a container view to manage the system-supplied selection views.
- [UITextSelectionDisplayInteractionDelegate](uitextselectiondisplayinteractiondelegate.md): An object you use to customize the presentation of text selections in your interface.

### Activating the selection UI

- [isActivated](uitextselectiondisplayinteraction/isactivated.md): A Boolean value that indicates whether to display the system selection UI.

### Reporting changes to the selection

- [setNeedsSelectionUpdate()](uitextselectiondisplayinteraction/setneedsselectionupdate%28%29.md): Tells the system to update the selection UI to match the current selection state.
- [layoutManagedSubviews()](uitextselectiondisplayinteraction/layoutmanagedsubviews%28%29.md): Loads the selection from the text input view and lays out the selection-related views.

### Getting the text input view

- [textInput](uitextselectiondisplayinteraction/textinput.md): The text input object that manages the selection.

### Getting the system selection views

- [highlightView](uitextselectiondisplayinteraction/highlightview.md): The view that draws the selection highlight behind the rendered text.
- [handleViews](uitextselectiondisplayinteraction/handleviews.md): The view that draws the selection handles for the selected text.
- [cursorView](uitextselectiondisplayinteraction/cursorview.md): The view that draws the caret at the text insertion point.

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

### Custom text selection

- [Adopting system selection UI in custom text views](adopting-system-selection-ui-in-custom-text-views.md): Incorporate the system text-selection experience into your custom text UI in UIKit.
- [UITextSelectionHighlightView](uitextselectionhighlightview.md): An interface you use to provide a custom highlight UI behind the selected text.
- [UITextSelectionHandleView](uitextselectionhandleview.md): An interface you use to draw custom the selection handles for ranges of text.
- [UITextCursorView](uitextcursorview.md): An interface you use to draw the insertion point in a piece of text.
- [UIStandardTextCursorView](uistandardtextcursorview.md): A view that draws the standard system insertion point in a piece of text.
- [UITextCursorDropPositionAnimator](uitextcursordroppositionanimator.md)
- [UITextLoupeSession](uitextloupesession.md): An object that manages the presentation of the system magnifier at the location you specify.

# UITextSelectionDisplayInteraction (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

An object that provides the system UI for displaying text selection.

## Declaration

```objectivec
@interface UITextSelectionDisplayInteraction : NSObject
```

## Mentioned In

- [Adopting system selection UI in custom text views](adopting-system-selection-ui-in-custom-text-views.md)

<a id="overview"></a>

## Overview

> **Related sessions from WWDC23**

>  Session 10058: [What’s new with text and text interactions](https://developer.apple.com/videos/play/wwdc2023/10058/)

## Topics

### Creating a text selection display interaction

- [initWithTextInput:delegate:](uitextselectiondisplayinteraction/init%28textinput_delegate_%29.md): Creates a new text selection display interaction object for the specified text view.

### Managing the drawing view

- [delegate](uitextselectiondisplayinteraction/delegate.md): A delegate that provides a container view to manage the system-supplied selection views.
- [UITextSelectionDisplayInteractionDelegate](uitextselectiondisplayinteractiondelegate.md): An object you use to customize the presentation of text selections in your interface.

### Activating the selection UI

- [activated](uitextselectiondisplayinteraction/isactivated.md): A Boolean value that indicates whether to display the system selection UI.

### Reporting changes to the selection

- [setNeedsSelectionUpdate](uitextselectiondisplayinteraction/setneedsselectionupdate%28%29.md): Tells the system to update the selection UI to match the current selection state.
- [layoutManagedSubviews](uitextselectiondisplayinteraction/layoutmanagedsubviews%28%29.md): Loads the selection from the text input view and lays out the selection-related views.

### Getting the text input view

- [textInput](uitextselectiondisplayinteraction/textinput.md): The text input object that manages the selection.

### Getting the system selection views

- [highlightView](uitextselectiondisplayinteraction/highlightview.md): The view that draws the selection highlight behind the rendered text.
- [handleViews](uitextselectiondisplayinteraction/handleviews.md): The view that draws the selection handles for the selected text.
- [cursorView](uitextselectiondisplayinteraction/cursorview.md): The view that draws the caret at the text insertion point.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [UIInteraction](uiinteraction.md)

## See Also

### Custom text selection

- [Adopting system selection UI in custom text views](adopting-system-selection-ui-in-custom-text-views.md): Incorporate the system text-selection experience into your custom text UI in UIKit.
- [UITextSelectionHighlightView](uitextselectionhighlightview.md): An interface you use to provide a custom highlight UI behind the selected text.
- [UITextSelectionHandleView](uitextselectionhandleview.md): An interface you use to draw custom the selection handles for ranges of text.
- [UITextCursorView](uitextcursorview.md): An interface you use to draw the insertion point in a piece of text.
- [UIStandardTextCursorView](uistandardtextcursorview.md): A view that draws the standard system insertion point in a piece of text.
- [UITextCursorDropPositionAnimator](uitextcursordroppositionanimator.md)
- [UITextLoupeSession](uitextloupesession.md): An object that manages the presentation of the system magnifier at the location you specify.
