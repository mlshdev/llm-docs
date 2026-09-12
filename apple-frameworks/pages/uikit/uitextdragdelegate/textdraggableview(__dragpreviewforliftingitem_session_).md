> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdragdelegate/textdraggableview(_:dragpreviewforliftingitem:session:)](https://developer.apple.com/documentation/uikit/uitextdragdelegate/textdraggableview(_:dragpreviewforliftingitem:session:))

# textDraggableView(\_:dragPreviewForLiftingItem:session:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate for the preview to show during the lift animation that happens when a user begins to drag an item from a text view.

## Declaration

```swift
optional func textDraggableView(_ textDraggableView: any UIView & UITextDraggable, dragPreviewForLiftingItem item: UIDragItem, session: any UIDragSession) -> UITargetedDragPreview?
```

## Parameters

- `textDraggableView`: The text view where the drag activity was started.
- `item`: The drag item that is being lifted.
- `session`: The drag session of the current drag activity.

<a id="return-value"></a>

## Return Value

A targeted drag preview to show during the lift animation, or `nil` to show the default preview.

<a id="Discussion"></a>

## Discussion

You implement this method when you want to show a nondefault preview during the lift animation. If you return `nil`, the system shows default preview.

> **Note**

>  This method is not called when the [suggestedItems](../uitextdragrequest/suggesteditems.md) array for the text drag request contains the drag item.

# textDraggableView:dragPreviewForLiftingItem:session: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate for the preview to show during the lift animation that happens when a user begins to drag an item from a text view.

## Declaration

```objectivec
- (UITargetedDragPreview *) textDraggableView:(UIView<UITextDraggable> *) textDraggableView dragPreviewForLiftingItem:(UIDragItem *) item session:(id<UIDragSession>) session;
```

## Parameters

- `textDraggableView`: The text view where the drag activity was started.
- `item`: The drag item that is being lifted.
- `session`: The drag session of the current drag activity.

<a id="return-value"></a>

## Return Value

A targeted drag preview to show during the lift animation, or `nil` to show the default preview.

<a id="Discussion"></a>

## Discussion

You implement this method when you want to show a nondefault preview during the lift animation. If you return `nil`, the system shows default preview.

> **Note**

>  This method is not called when the [suggestedItems](../uitextdragrequest/suggesteditems.md) array for the text drag request contains the drag item.
