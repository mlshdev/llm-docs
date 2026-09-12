> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidropinteractiondelegate/dropinteraction(_:previewfordropping:withdefault:)](https://developer.apple.com/documentation/uikit/uidropinteractiondelegate/dropinteraction(_:previewfordropping:withdefault:))

# dropInteraction(\_:previewForDropping:withDefault:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate for the targeted drag item preview to show during the drop animation.

## Declaration

```swift
optional func dropInteraction(_ interaction: UIDropInteraction, previewForDropping item: UIDragItem, withDefault defaultPreview: UITargetedDragPreview) -> UITargetedDragPreview?
```

## Parameters

- `interaction`: The interaction that called this method.
- `item`: The drag item represented by the preview.
- `defaultPreview`: A targeted drag preview provided by the system, if this is the first call for this item; otherwise, it’s the previous value for the drag preview.

<a id="return-value"></a>

## Return Value

- The default preview, which is the same behavior as not implementing this method.
- A targeted drag item preview that you create.
- The preview returned after moving to a new preview target by using the `defaultPreview`’s [retargetedPreview(with:)](../uitargeteddragpreview/retargetedpreview%28with_%29.md) method.
- `nil` to fade the preview that is currently displayed to the user.

<a id="Discussion"></a>

## Discussion

The system calls this method multiple times, once for each visible drag item. It shows the preview during the drop animation in order to visually *drop* the drag item into place.

If you call [setNeedsDropPreviewUpdate()](../uidragitem/setneedsdroppreviewupdate%28%29.md) to tell the system to request a new drop preview, the system provides the previous value in the `defaultPreview` parameter.

## See Also

### Animating the drop

- [dropInteraction(\_:item:willAnimateDropWith:)](dropinteraction%28__item_willanimatedropwith_%29.md): Tells the delegate the system’s drop animation is about to start.
- [dropInteraction(\_:concludeDrop:)](dropinteraction%28__concludedrop_%29.md): Tells the delegate the drop activity and its related animations have finished.

# dropInteraction:previewForDroppingItem:withDefault: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate for the targeted drag item preview to show during the drop animation.

## Declaration

```objectivec
- (UITargetedDragPreview *) dropInteraction:(UIDropInteraction *) interaction previewForDroppingItem:(UIDragItem *) item withDefault:(UITargetedDragPreview *) defaultPreview;
```

## Parameters

- `interaction`: The interaction that called this method.
- `item`: The drag item represented by the preview.
- `defaultPreview`: A targeted drag preview provided by the system, if this is the first call for this item; otherwise, it’s the previous value for the drag preview.

<a id="return-value"></a>

## Return Value

- The default preview, which is the same behavior as not implementing this method.
- A targeted drag item preview that you create.
- The preview returned after moving to a new preview target by using the `defaultPreview`’s [retargetedPreviewWithTarget:](../uitargeteddragpreview/retargetedpreview%28with_%29.md) method.
- `nil` to fade the preview that is currently displayed to the user.

<a id="Discussion"></a>

## Discussion

The system calls this method multiple times, once for each visible drag item. It shows the preview during the drop animation in order to visually *drop* the drag item into place.

If you call [setNeedsDropPreviewUpdate](../uidragitem/setneedsdroppreviewupdate%28%29.md) to tell the system to request a new drop preview, the system provides the previous value in the `defaultPreview` parameter.

## See Also

### Animating the drop

- [dropInteraction:item:willAnimateDropWithAnimator:](dropinteraction%28__item_willanimatedropwith_%29.md): Tells the delegate the system’s drop animation is about to start.
- [dropInteraction:concludeDrop:](dropinteraction%28__concludedrop_%29.md): Tells the delegate the drop activity and its related animations have finished.
