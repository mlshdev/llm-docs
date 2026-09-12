> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdropdelegate](https://developer.apple.com/documentation/uikit/uitextdropdelegate)

# UITextDropDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface for configuring a text view’s drop behavior.

## Declaration

```swift
@MainActor protocol UITextDropDelegate : NSObjectProtocol
```

## Topics

### Accepting a drop activity

- [textDroppableView(\_:proposalForDrop:)](uitextdropdelegate/textdroppableview%28__proposalfordrop_%29.md): Asks the delegate if the text view can accept a drop operation.
- [textDroppableView(\_:willBecomeEditableForDrop:)](uitextdropdelegate/textdroppableview%28__willbecomeeditablefordrop_%29.md): Asks the delegate if a noneditable text view can accept a drop operation.

### Handling drop session notifications

- [textDroppableView(\_:dropSessionDidEnter:)](uitextdropdelegate/textdroppableview%28__dropsessiondidenter_%29.md): Tells the delegate that the user has moved the drag items into the coordinate system of the text view.
- [textDroppableView(\_:dropSessionDidExit:)](uitextdropdelegate/textdroppableview%28__dropsessiondidexit_%29.md): Tells the delegate that the user has moved the drag items out of the text view’s coordinate system.
- [textDroppableView(\_:dropSessionDidUpdate:)](uitextdropdelegate/textdroppableview%28__dropsessiondidupdate_%29.md): Tells the delegate that the drop session has been updated.
- [textDroppableView(\_:dropSessionDidEnd:)](uitextdropdelegate/textdroppableview%28__dropsessiondidend_%29.md): Tells the delegate that the drop session has ended.

### Handling drop activity notifications

- [textDroppableView(\_:willPerformDrop:)](uitextdropdelegate/textdroppableview%28__willperformdrop_%29.md): Tells the delegate that the drop operation is about to happen.

### Providing a custom preview for a drop activity

- [textDroppableView(\_:previewForDroppingAllItemsWithDefault:)](uitextdropdelegate/textdroppableview%28__previewfordroppingallitemswithdefault_%29.md): Asks the delegate for the preview to show during the drop animation.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Text view additions

- [UITextDragDelegate](uitextdragdelegate.md): The interface for customizing the behavior of a drag activity for a text view.
- [UITextDraggable](uitextdraggable.md): The interface that determines if a text view is a drag source.
- [UITextDragOptions](uitextdragoptions.md): A set of options that determine the behavior of a draggable text view.
- [UITextDroppable](uitextdroppable.md): The interface that determines if a text view is a drop destination.
- [UITextDropEditability](uitextdropeditability.md): The text-drop editability styles for noneditable text views.

# UITextDropDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface for configuring a text view’s drop behavior.

## Declaration

```objectivec
@protocol UITextDropDelegate <NSObject>
```

## Topics

### Accepting a drop activity

- [textDroppableView:proposalForDrop:](uitextdropdelegate/textdroppableview%28__proposalfordrop_%29.md): Asks the delegate if the text view can accept a drop operation.
- [textDroppableView:willBecomeEditableForDrop:](uitextdropdelegate/textdroppableview%28__willbecomeeditablefordrop_%29.md): Asks the delegate if a noneditable text view can accept a drop operation.

### Handling drop session notifications

- [textDroppableView:dropSessionDidEnter:](uitextdropdelegate/textdroppableview%28__dropsessiondidenter_%29.md): Tells the delegate that the user has moved the drag items into the coordinate system of the text view.
- [textDroppableView:dropSessionDidExit:](uitextdropdelegate/textdroppableview%28__dropsessiondidexit_%29.md): Tells the delegate that the user has moved the drag items out of the text view’s coordinate system.
- [textDroppableView:dropSessionDidUpdate:](uitextdropdelegate/textdroppableview%28__dropsessiondidupdate_%29.md): Tells the delegate that the drop session has been updated.
- [textDroppableView:dropSessionDidEnd:](uitextdropdelegate/textdroppableview%28__dropsessiondidend_%29.md): Tells the delegate that the drop session has ended.

### Handling drop activity notifications

- [textDroppableView:willPerformDrop:](uitextdropdelegate/textdroppableview%28__willperformdrop_%29.md): Tells the delegate that the drop operation is about to happen.

### Providing a custom preview for a drop activity

- [textDroppableView:previewForDroppingAllItemsWithDefault:](uitextdropdelegate/textdroppableview%28__previewfordroppingallitemswithdefault_%29.md): Asks the delegate for the preview to show during the drop animation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Text view additions

- [UITextDragDelegate](uitextdragdelegate.md): The interface for customizing the behavior of a drag activity for a text view.
- [UITextDraggable](uitextdraggable.md): The interface that determines if a text view is a drag source.
- [UITextDragOptions](uitextdragoptions.md): A set of options that determine the behavior of a draggable text view.
- [UITextDroppable](uitextdroppable.md): The interface that determines if a text view is a drop destination.
- [UITextDropEditability](uitextdropeditability.md): The text-drop editability styles for noneditable text views.
