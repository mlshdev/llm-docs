> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdropdelegate/textdroppableview(_:dropsessiondidend:)](https://developer.apple.com/documentation/uikit/uitextdropdelegate/textdroppableview(_:dropsessiondidend:))

# textDroppableView(\_:dropSessionDidEnd:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the drop session has ended.

## Declaration

```swift
optional func textDroppableView(_ textDroppableView: any UIView & UITextDroppable, dropSessionDidEnd session: any UIDropSession)
```

## Parameters

- `textDroppableView`: The text view that received the drop activity.
- `session`: The drop session that has ended.

<a id="Discussion"></a>

## Discussion

You implement this method if your delegate needs to do additional cleanup after the drop session has ended.

## See Also

### Handling drop session notifications

- [textDroppableView(\_:dropSessionDidEnter:)](textdroppableview%28__dropsessiondidenter_%29.md): Tells the delegate that the user has moved the drag items into the coordinate system of the text view.
- [textDroppableView(\_:dropSessionDidExit:)](textdroppableview%28__dropsessiondidexit_%29.md): Tells the delegate that the user has moved the drag items out of the text view’s coordinate system.
- [textDroppableView(\_:dropSessionDidUpdate:)](textdroppableview%28__dropsessiondidupdate_%29.md): Tells the delegate that the drop session has been updated.

# textDroppableView:dropSessionDidEnd: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the drop session has ended.

## Declaration

```objectivec
- (void) textDroppableView:(UIView<UITextDroppable> *) textDroppableView dropSessionDidEnd:(id<UIDropSession>) session;
```

## Parameters

- `textDroppableView`: The text view that received the drop activity.
- `session`: The drop session that has ended.

<a id="Discussion"></a>

## Discussion

You implement this method if your delegate needs to do additional cleanup after the drop session has ended.

## See Also

### Handling drop session notifications

- [textDroppableView:dropSessionDidEnter:](textdroppableview%28__dropsessiondidenter_%29.md): Tells the delegate that the user has moved the drag items into the coordinate system of the text view.
- [textDroppableView:dropSessionDidExit:](textdroppableview%28__dropsessiondidexit_%29.md): Tells the delegate that the user has moved the drag items out of the text view’s coordinate system.
- [textDroppableView:dropSessionDidUpdate:](textdroppableview%28__dropsessiondidupdate_%29.md): Tells the delegate that the drop session has been updated.
