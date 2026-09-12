> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidraginteractiondelegate/draginteraction(_:previewforcancelling:withdefault:)](https://developer.apple.com/documentation/uikit/uidraginteractiondelegate/draginteraction(_:previewforcancelling:withdefault:))

# dragInteraction(\_:previewForCancelling:withDefault:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate for the targeted drag item preview to show during the cancellation animation.

## Declaration

```swift
optional func dragInteraction(_ interaction: UIDragInteraction, previewForCancelling item: UIDragItem, withDefault defaultPreview: UITargetedDragPreview) -> UITargetedDragPreview?
```

## Parameters

- `interaction`: The interaction that called this method.
- `item`: The drag item represented by the preview.
- `defaultPreview`: A targeted drag preview provided by the system.

<a id="return-value"></a>

## Return Value

- The default preview provided by the system.
- A targeted drag item preview you create.
- The preview returned after moving to a new preview target (using the `defaultPreview`’s [retargetedPreview(with:)](../uitargeteddragpreview/retargetedpreview%28with_%29.md) method).
- `nil` to fade the preview that is currently displayed to the user, which is the same behavior as not implementing this method.

<a id="Discussion"></a>

## Discussion

The system calls this method multiple times, once for each visible drag item.

When you return a preview, the system shows it during the cancellation animation in order to visually “move” the drag item to the location of the preview’s associated `view`.

## See Also

### Providing drag previews

- [dragInteraction(\_:previewForLifting:session:)](draginteraction%28__previewforlifting_session_%29.md): Asks the delegate for the targeted drag item preview that will appear during the lift animation.
- [dragInteraction(\_:prefersFullSizePreviewsFor:)](draginteraction%28__prefersfullsizepreviewsfor_%29.md): Asks the delegate whether the preview should appear in its original size or a scaled size.

# dragInteraction:previewForCancellingItem:withDefault: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate for the targeted drag item preview to show during the cancellation animation.

## Declaration

```objectivec
- (UITargetedDragPreview *) dragInteraction:(UIDragInteraction *) interaction previewForCancellingItem:(UIDragItem *) item withDefault:(UITargetedDragPreview *) defaultPreview;
```

## Parameters

- `interaction`: The interaction that called this method.
- `item`: The drag item represented by the preview.
- `defaultPreview`: A targeted drag preview provided by the system.

<a id="return-value"></a>

## Return Value

- The default preview provided by the system.
- A targeted drag item preview you create.
- The preview returned after moving to a new preview target (using the `defaultPreview`’s [retargetedPreviewWithTarget:](../uitargeteddragpreview/retargetedpreview%28with_%29.md) method).
- `nil` to fade the preview that is currently displayed to the user, which is the same behavior as not implementing this method.

<a id="Discussion"></a>

## Discussion

The system calls this method multiple times, once for each visible drag item.

When you return a preview, the system shows it during the cancellation animation in order to visually “move” the drag item to the location of the preview’s associated `view`.

## See Also

### Providing drag previews

- [dragInteraction:previewForLiftingItem:session:](draginteraction%28__previewforlifting_session_%29.md): Asks the delegate for the targeted drag item preview that will appear during the lift animation.
- [dragInteraction:prefersFullSizePreviewsForSession:](draginteraction%28__prefersfullsizepreviewsfor_%29.md): Asks the delegate whether the preview should appear in its original size or a scaled size.
