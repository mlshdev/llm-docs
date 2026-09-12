> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdropdelegate/textdroppableview(_:dropsessiondidexit:)](https://developer.apple.com/documentation/uikit/uitextdropdelegate/textdroppableview(_:dropsessiondidexit:))

# textDroppableView(\_:dropSessionDidExit:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the user has moved the drag items out of the text view’s coordinate system.

## Declaration

```swift
optional func textDroppableView(_ textDroppableView: any UIView & UITextDroppable, dropSessionDidExit session: any UIDropSession)
```

## Parameters

- `textDroppableView`: The text view that received the drop activity.
- `session`: The current drop session.

## See Also

### Handling drop session notifications

- [textDroppableView(\_:dropSessionDidEnter:)](textdroppableview%28__dropsessiondidenter_%29.md): Tells the delegate that the user has moved the drag items into the coordinate system of the text view.
- [textDroppableView(\_:dropSessionDidUpdate:)](textdroppableview%28__dropsessiondidupdate_%29.md): Tells the delegate that the drop session has been updated.
- [textDroppableView(\_:dropSessionDidEnd:)](textdroppableview%28__dropsessiondidend_%29.md): Tells the delegate that the drop session has ended.

# textDroppableView:dropSessionDidExit: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the user has moved the drag items out of the text view’s coordinate system.

## Declaration

```objectivec
- (void) textDroppableView:(UIView<UITextDroppable> *) textDroppableView dropSessionDidExit:(id<UIDropSession>) session;
```

## Parameters

- `textDroppableView`: The text view that received the drop activity.
- `session`: The current drop session.

## See Also

### Handling drop session notifications

- [textDroppableView:dropSessionDidEnter:](textdroppableview%28__dropsessiondidenter_%29.md): Tells the delegate that the user has moved the drag items into the coordinate system of the text view.
- [textDroppableView:dropSessionDidUpdate:](textdroppableview%28__dropsessiondidupdate_%29.md): Tells the delegate that the drop session has been updated.
- [textDroppableView:dropSessionDidEnd:](textdroppableview%28__dropsessiondidend_%29.md): Tells the delegate that the drop session has ended.
