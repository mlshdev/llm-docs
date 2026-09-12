> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdragdelegate/textdraggableview(_:dragsessionwillbegin:)](https://developer.apple.com/documentation/uikit/uitextdragdelegate/textdraggableview(_:dragsessionwillbegin:))

# textDraggableView(\_:dragSessionWillBegin:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the text has been lifted out of the text view and the user is beginning to drag the text.

## Declaration

```swift
optional func textDraggableView(_ textDraggableView: any UIView & UITextDraggable, dragSessionWillBegin session: any UIDragSession)
```

## Parameters

- `textDraggableView`: The text view where the drag activity was started.
- `session`: The drag session of the current drag activity.

## See Also

### Handling drag session notifications

- [textDraggableView(\_:dragSessionDidEnd:with:)](textdraggableview%28__dragsessiondidend_with_%29.md): Tells the delegate that the drag session has ended.

# textDraggableView:dragSessionWillBegin: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the text has been lifted out of the text view and the user is beginning to drag the text.

## Declaration

```objectivec
- (void) textDraggableView:(UIView<UITextDraggable> *) textDraggableView dragSessionWillBegin:(id<UIDragSession>) session;
```

## Parameters

- `textDraggableView`: The text view where the drag activity was started.
- `session`: The drag session of the current drag activity.

## See Also

### Handling drag session notifications

- [textDraggableView:dragSessionDidEnd:withOperation:](textdraggableview%28__dragsessiondidend_with_%29.md): Tells the delegate that the drag session has ended.
