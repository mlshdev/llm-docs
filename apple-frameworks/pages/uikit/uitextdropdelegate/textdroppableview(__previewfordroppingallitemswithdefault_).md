> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdropdelegate/textdroppableview(_:previewfordroppingallitemswithdefault:)](https://developer.apple.com/documentation/uikit/uitextdropdelegate/textdroppableview(_:previewfordroppingallitemswithdefault:))

# textDroppableView(\_:previewForDroppingAllItemsWithDefault:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate for the preview to show during the drop animation.

## Declaration

```swift
optional func textDroppableView(_ textDroppableView: any UIView & UITextDroppable, previewForDroppingAllItemsWithDefault defaultPreview: UITargetedDragPreview) -> UITargetedDragPreview?
```

## Parameters

- `textDroppableView`: The text view that received the drop activity.
- `defaultPreview`: The preview that is displayed when the delegate doesn’t provide this method.

<a id="return-value"></a>

## Return Value

A target drag preview to show during the drop animation, or `nil` to show the default preview.

<a id="Discussion"></a>

## Discussion

You implement this method when you want to show a nondefault preview during the drop animation. If you return `nil`, the system shows the default preview.

# textDroppableView:previewForDroppingAllItemsWithDefault: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate for the preview to show during the drop animation.

## Declaration

```objectivec
- (UITargetedDragPreview *) textDroppableView:(UIView<UITextDroppable> *) textDroppableView previewForDroppingAllItemsWithDefault:(UITargetedDragPreview *) defaultPreview;
```

## Parameters

- `textDroppableView`: The text view that received the drop activity.
- `defaultPreview`: The preview that is displayed when the delegate doesn’t provide this method.

<a id="return-value"></a>

## Return Value

A target drag preview to show during the drop animation, or `nil` to show the default preview.

<a id="Discussion"></a>

## Discussion

You implement this method when you want to show a nondefault preview during the drop animation. If you return `nil`, the system shows the default preview.
