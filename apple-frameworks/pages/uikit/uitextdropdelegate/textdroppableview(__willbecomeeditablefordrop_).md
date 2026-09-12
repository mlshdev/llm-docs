> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdropdelegate/textdroppableview(_:willbecomeeditablefordrop:)](https://developer.apple.com/documentation/uikit/uitextdropdelegate/textdroppableview(_:willbecomeeditablefordrop:))

# textDroppableView(\_:willBecomeEditableForDrop:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate if a noneditable text view can accept a drop operation.

## Declaration

```swift
optional func textDroppableView(_ textDroppableView: any UIView & UITextDroppable, willBecomeEditableForDrop drop: any UITextDropRequest) -> UITextDropEditability
```

## Parameters

- `textDroppableView`: The text view that received the drop activity.
- `drop`: The drop request.

<a id="return-value"></a>

## Return Value

A text drop editability style that indicates whether the text view can accept a drop operation.

<a id="Discussion"></a>

## Discussion

By default, a text view that is not editable can’t accept drop requests. However, you can change this behavior by returning the editability style [UITextDropEditability.temporary](../uitextdropeditability/temporary.md) or [UITextDropEditability.yes](../uitextdropeditability/yes.md) in your implementation of this method. Not implementing this method is the same as returning the [UITextDropEditability.no](../uitextdropeditability/no.md) style.

## See Also

### Accepting a drop activity

- [textDroppableView(\_:proposalForDrop:)](textdroppableview%28__proposalfordrop_%29.md): Asks the delegate if the text view can accept a drop operation.

# textDroppableView:willBecomeEditableForDrop: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate if a noneditable text view can accept a drop operation.

## Declaration

```objectivec
- (UITextDropEditability) textDroppableView:(UIView<UITextDroppable> *) textDroppableView willBecomeEditableForDrop:(id<UITextDropRequest>) drop;
```

## Parameters

- `textDroppableView`: The text view that received the drop activity.
- `drop`: The drop request.

<a id="return-value"></a>

## Return Value

A text drop editability style that indicates whether the text view can accept a drop operation.

<a id="Discussion"></a>

## Discussion

By default, a text view that is not editable can’t accept drop requests. However, you can change this behavior by returning the editability style [UITextDropEditabilityTemporary](../uitextdropeditability/temporary.md) or [UITextDropEditabilityYes](../uitextdropeditability/yes.md) in your implementation of this method. Not implementing this method is the same as returning the [UITextDropEditabilityNo](../uitextdropeditability/no.md) style.

## See Also

### Accepting a drop activity

- [textDroppableView:proposalForDrop:](textdroppableview%28__proposalfordrop_%29.md): Asks the delegate if the text view can accept a drop operation.
