> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdragdelegate/textdraggableview(_:dragsessiondidend:with:)](https://developer.apple.com/documentation/uikit/uitextdragdelegate/textdraggableview(_:dragsessiondidend:with:))

# textDraggableView(\_:dragSessionDidEnd:with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the drag session has ended.

## Declaration

```swift
optional func textDraggableView(_ textDraggableView: any UIView & UITextDraggable, dragSessionDidEnd session: any UIDragSession, with operation: UIDropOperation)
```

## Parameters

- `textDraggableView`: The text view where the drag activity was started.
- `session`: The drag session of the current drag activity.
- `operation`: The operation that occurred during the drop activity.

## See Also

### Handling drag session notifications

- [textDraggableView(\_:dragSessionWillBegin:)](textdraggableview%28__dragsessionwillbegin_%29.md): Tells the delegate that the text has been lifted out of the text view and the user is beginning to drag the text.

# textDraggableView:dragSessionDidEnd:withOperation: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the drag session has ended.

## Declaration

```objectivec
- (void) textDraggableView:(UIView<UITextDraggable> *) textDraggableView dragSessionDidEnd:(id<UIDragSession>) session withOperation:(UIDropOperation) operation;
```

## Parameters

- `textDraggableView`: The text view where the drag activity was started.
- `session`: The drag session of the current drag activity.
- `operation`: The operation that occurred during the drop activity.

## See Also

### Handling drag session notifications

- [textDraggableView:dragSessionWillBegin:](textdraggableview%28__dragsessionwillbegin_%29.md): Tells the delegate that the text has been lifted out of the text view and the user is beginning to drag the text.
