> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextloupesession](https://developer.apple.com/documentation/uikit/uitextloupesession)

# UITextLoupeSession (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+

An object that manages the presentation of the system magnifier at the location you specify.

## Declaration

```swift
@MainActor class UITextLoupeSession
```

## Mentioned In

- [Adopting system selection UI in custom text views](adopting-system-selection-ui-in-custom-text-views.md)

<a id="overview"></a>

## Overview

A [UITextLoupeSession](uitextloupesession.md) object programmatically displays the system loupe in your view. You might display this view to allow someone to magnify your view’s content. Typically, you display the loupe from a [UIPanGestureRecognizer](uipangesturerecognizer.md) when someone interacts with your view. As the location in the gesture recognizer changes, use the loupe session object to update the position of the loupe.

## Topics

### Creating the loupe session

- [begin(at:fromSelectionWidgetView:in:)](uitextloupesession/begin%28at_fromselectionwidgetview_in_%29.md): Creates a new loupe session and displays the loupe at the specified location in your view.

### Updating the loupe during the session

- [move(to:withCaretRect:trackingCaret:)](uitextloupesession/move%28to_withcaretrect_trackingcaret_%29.md): Moves the loupe to the specified point in the session’s associated view.
- [invalidate()](uitextloupesession/invalidate%28%29.md): Hides the loupe and cleans up any session-related state.

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

## See Also

### Custom text selection

- [Adopting system selection UI in custom text views](adopting-system-selection-ui-in-custom-text-views.md): Incorporate the system text-selection experience into your custom text UI in UIKit.
- [UITextSelectionDisplayInteraction](uitextselectiondisplayinteraction.md): An object that provides the system UI for displaying text selection.
- [UITextSelectionHighlightView](uitextselectionhighlightview.md): An interface you use to provide a custom highlight UI behind the selected text.
- [UITextSelectionHandleView](uitextselectionhandleview.md): An interface you use to draw custom the selection handles for ranges of text.
- [UITextCursorView](uitextcursorview.md): An interface you use to draw the insertion point in a piece of text.
- [UIStandardTextCursorView](uistandardtextcursorview.md): A view that draws the standard system insertion point in a piece of text.
- [UITextCursorDropPositionAnimator](uitextcursordroppositionanimator.md)

# UITextLoupeSession (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+

An object that manages the presentation of the system magnifier at the location you specify.

## Declaration

```objectivec
@interface UITextLoupeSession : NSObject
```

## Mentioned In

- [Adopting system selection UI in custom text views](adopting-system-selection-ui-in-custom-text-views.md)

<a id="overview"></a>

## Overview

A [UITextLoupeSession](uitextloupesession.md) object programmatically displays the system loupe in your view. You might display this view to allow someone to magnify your view’s content. Typically, you display the loupe from a [UIPanGestureRecognizer](uipangesturerecognizer.md) when someone interacts with your view. As the location in the gesture recognizer changes, use the loupe session object to update the position of the loupe.

## Topics

### Creating the loupe session

- [beginLoupeSessionAtPoint:fromSelectionWidgetView:inView:](uitextloupesession/begin%28at_fromselectionwidgetview_in_%29.md): Creates a new loupe session and displays the loupe at the specified location in your view.

### Updating the loupe during the session

- [moveToPoint:withCaretRect:trackingCaret:](uitextloupesession/move%28to_withcaretrect_trackingcaret_%29.md): Moves the loupe to the specified point in the session’s associated view.
- [invalidate](uitextloupesession/invalidate%28%29.md): Hides the loupe and cleans up any session-related state.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Custom text selection

- [Adopting system selection UI in custom text views](adopting-system-selection-ui-in-custom-text-views.md): Incorporate the system text-selection experience into your custom text UI in UIKit.
- [UITextSelectionDisplayInteraction](uitextselectiondisplayinteraction.md): An object that provides the system UI for displaying text selection.
- [UITextSelectionHighlightView](uitextselectionhighlightview.md): An interface you use to provide a custom highlight UI behind the selected text.
- [UITextSelectionHandleView](uitextselectionhandleview.md): An interface you use to draw custom the selection handles for ranges of text.
- [UITextCursorView](uitextcursorview.md): An interface you use to draw the insertion point in a piece of text.
- [UIStandardTextCursorView](uistandardtextcursorview.md): A view that draws the standard system insertion point in a piece of text.
- [UITextCursorDropPositionAnimator](uitextcursordroppositionanimator.md)
