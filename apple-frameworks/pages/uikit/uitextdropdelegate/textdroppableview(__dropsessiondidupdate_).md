> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdropdelegate/textdroppableview(_:dropsessiondidupdate:)](https://developer.apple.com/documentation/uikit/uitextdropdelegate/textdroppableview(_:dropsessiondidupdate:))

# textDroppableView(\_:dropSessionDidUpdate:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the drop session has been updated.

## Declaration

```swift
optional func textDroppableView(_ textDroppableView: any UIView & UITextDroppable, dropSessionDidUpdate session: any UIDropSession)
```

## Parameters

- `textDroppableView`: The text view that received the drop activity.
- `session`: The current drop session.

<a id="Discussion"></a>

## Discussion

The system usually—but not always—calls this method before calling the [textDroppableView(\_:proposalForDrop:)](textdroppableview%28__proposalfordrop_%29.md) method. However, it’s called frequently, so do only what is necessary in your implementation.

## See Also

### Handling drop session notifications

- [textDroppableView(\_:dropSessionDidEnter:)](textdroppableview%28__dropsessiondidenter_%29.md): Tells the delegate that the user has moved the drag items into the coordinate system of the text view.
- [textDroppableView(\_:dropSessionDidExit:)](textdroppableview%28__dropsessiondidexit_%29.md): Tells the delegate that the user has moved the drag items out of the text view’s coordinate system.
- [textDroppableView(\_:dropSessionDidEnd:)](textdroppableview%28__dropsessiondidend_%29.md): Tells the delegate that the drop session has ended.

# textDroppableView:dropSessionDidUpdate: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the drop session has been updated.

## Declaration

```objectivec
- (void) textDroppableView:(UIView<UITextDroppable> *) textDroppableView dropSessionDidUpdate:(id<UIDropSession>) session;
```

## Parameters

- `textDroppableView`: The text view that received the drop activity.
- `session`: The current drop session.

<a id="Discussion"></a>

## Discussion

The system usually—but not always—calls this method before calling the [textDroppableView:proposalForDrop:](textdroppableview%28__proposalfordrop_%29.md) method. However, it’s called frequently, so do only what is necessary in your implementation.

## See Also

### Handling drop session notifications

- [textDroppableView:dropSessionDidEnter:](textdroppableview%28__dropsessiondidenter_%29.md): Tells the delegate that the user has moved the drag items into the coordinate system of the text view.
- [textDroppableView:dropSessionDidExit:](textdroppableview%28__dropsessiondidexit_%29.md): Tells the delegate that the user has moved the drag items out of the text view’s coordinate system.
- [textDroppableView:dropSessionDidEnd:](textdroppableview%28__dropsessiondidend_%29.md): Tells the delegate that the drop session has ended.
