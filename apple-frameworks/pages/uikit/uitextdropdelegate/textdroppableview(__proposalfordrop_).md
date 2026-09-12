> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdropdelegate/textdroppableview(_:proposalfordrop:)](https://developer.apple.com/documentation/uikit/uitextdropdelegate/textdroppableview(_:proposalfordrop:))

# textDroppableView(\_:proposalForDrop:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate if the text view can accept a drop operation.

## Declaration

```swift
optional func textDroppableView(_ textDroppableView: any UIView & UITextDroppable, proposalForDrop drop: any UITextDropRequest) -> UITextDropProposal
```

## Parameters

- `textDroppableView`: The text view that received the drop activity.
- `drop`: The drop request.

<a id="return-value"></a>

## Return Value

A text drop proposal that specifies the behavior of the drop operation.

<a id="Discussion"></a>

## Discussion

This method is called multiple times while the user performs the drag and drop activity. For instance, it’s called when the user drags items into the text view. It’s also called when the text position changes while the user drags items over the text view. If the drag session changes, which happens when the user adds more items to the drag item set, the method is called again.

Because this method is called frequently, it’s important for your implementation to do only what is necessary to return the appropriate drop proposal as quickly as possible.

## See Also

### Accepting a drop activity

- [textDroppableView(\_:willBecomeEditableForDrop:)](textdroppableview%28__willbecomeeditablefordrop_%29.md): Asks the delegate if a noneditable text view can accept a drop operation.

# textDroppableView:proposalForDrop: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate if the text view can accept a drop operation.

## Declaration

```objectivec
- (UITextDropProposal *) textDroppableView:(UIView<UITextDroppable> *) textDroppableView proposalForDrop:(id<UITextDropRequest>) drop;
```

## Parameters

- `textDroppableView`: The text view that received the drop activity.
- `drop`: The drop request.

<a id="return-value"></a>

## Return Value

A text drop proposal that specifies the behavior of the drop operation.

<a id="Discussion"></a>

## Discussion

This method is called multiple times while the user performs the drag and drop activity. For instance, it’s called when the user drags items into the text view. It’s also called when the text position changes while the user drags items over the text view. If the drag session changes, which happens when the user adds more items to the drag item set, the method is called again.

Because this method is called frequently, it’s important for your implementation to do only what is necessary to return the appropriate drop proposal as quickly as possible.

## See Also

### Accepting a drop activity

- [textDroppableView:willBecomeEditableForDrop:](textdroppableview%28__willbecomeeditablefordrop_%29.md): Asks the delegate if a noneditable text view can accept a drop operation.
