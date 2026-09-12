> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdragdelegate](https://developer.apple.com/documentation/uikit/uitextdragdelegate)

# UITextDragDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface for customizing the behavior of a drag activity for a text view.

## Declaration

```swift
@MainActor protocol UITextDragDelegate : NSObjectProtocol
```

## Topics

### Handling drag session notifications

- [textDraggableView(\_:dragSessionWillBegin:)](uitextdragdelegate/textdraggableview%28__dragsessionwillbegin_%29.md): Tells the delegate that the text has been lifted out of the text view and the user is beginning to drag the text.
- [textDraggableView(\_:dragSessionDidEnd:with:)](uitextdragdelegate/textdraggableview%28__dragsessiondidend_with_%29.md): Tells the delegate that the drag session has ended.

### Providing additional animations

- [textDraggableView(\_:willAnimateLiftWith:session:)](uitextdragdelegate/textdraggableview%28__willanimateliftwith_session_%29.md): Tells the delegate when the lift animation is about to begin, and gives you a chance to animate additional changes alongside the system animation.

### Providing custom drag items

- [textDraggableView(\_:itemsForDrag:)](uitextdragdelegate/textdraggableview%28__itemsfordrag_%29.md): Asks the delegate for custom drag items from a text view.

### Providing a custom preview for a drag activity

- [textDraggableView(\_:dragPreviewForLiftingItem:session:)](uitextdragdelegate/textdraggableview%28__dragpreviewforliftingitem_session_%29.md): Asks the delegate for the preview to show during the lift animation that happens when a user begins to drag an item from a text view.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Text view additions

- [UITextDropDelegate](uitextdropdelegate.md): The interface for configuring a text view’s drop behavior.
- [UITextDraggable](uitextdraggable.md): The interface that determines if a text view is a drag source.
- [UITextDragOptions](uitextdragoptions.md): A set of options that determine the behavior of a draggable text view.
- [UITextDroppable](uitextdroppable.md): The interface that determines if a text view is a drop destination.
- [UITextDropEditability](uitextdropeditability.md): The text-drop editability styles for noneditable text views.

# UITextDragDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface for customizing the behavior of a drag activity for a text view.

## Declaration

```objectivec
@protocol UITextDragDelegate <NSObject>
```

## Topics

### Handling drag session notifications

- [textDraggableView:dragSessionWillBegin:](uitextdragdelegate/textdraggableview%28__dragsessionwillbegin_%29.md): Tells the delegate that the text has been lifted out of the text view and the user is beginning to drag the text.
- [textDraggableView:dragSessionDidEnd:withOperation:](uitextdragdelegate/textdraggableview%28__dragsessiondidend_with_%29.md): Tells the delegate that the drag session has ended.

### Providing additional animations

- [textDraggableView:willAnimateLiftWithAnimator:session:](uitextdragdelegate/textdraggableview%28__willanimateliftwith_session_%29.md): Tells the delegate when the lift animation is about to begin, and gives you a chance to animate additional changes alongside the system animation.

### Providing custom drag items

- [textDraggableView:itemsForDrag:](uitextdragdelegate/textdraggableview%28__itemsfordrag_%29.md): Asks the delegate for custom drag items from a text view.

### Providing a custom preview for a drag activity

- [textDraggableView:dragPreviewForLiftingItem:session:](uitextdragdelegate/textdraggableview%28__dragpreviewforliftingitem_session_%29.md): Asks the delegate for the preview to show during the lift animation that happens when a user begins to drag an item from a text view.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Text view additions

- [UITextDropDelegate](uitextdropdelegate.md): The interface for configuring a text view’s drop behavior.
- [UITextDraggable](uitextdraggable.md): The interface that determines if a text view is a drag source.
- [UITextDragOptions](uitextdragoptions.md): A set of options that determine the behavior of a draggable text view.
- [UITextDroppable](uitextdroppable.md): The interface that determines if a text view is a drop destination.
- [UITextDropEditability](uitextdropeditability.md): The text-drop editability styles for noneditable text views.
