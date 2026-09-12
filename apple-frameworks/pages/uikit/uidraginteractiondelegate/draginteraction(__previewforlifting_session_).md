> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidraginteractiondelegate/draginteraction(_:previewforlifting:session:)](https://developer.apple.com/documentation/uikit/uidraginteractiondelegate/draginteraction(_:previewforlifting:session:))

# dragInteraction(\_:previewForLifting:session:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate for the targeted drag item preview that will appear during the lift animation.

## Declaration

```swift
optional func dragInteraction(_ interaction: UIDragInteraction, previewForLifting item: UIDragItem, session: any UIDragSession) -> UITargetedDragPreview?
```

## Parameters

- `interaction`: The interaction that called this method.
- `item`: The drag item represented by the preview.
- `session`: The current drag session.

<a id="return-value"></a>

## Return Value

A targeted drag item preview you create, or `nil` to tell the system not to display the lift animation.

<a id="Discussion"></a>

## Discussion

If you don’t provide this method, the system creates a preview based on the view owned by the drag interaction.

## See Also

### Providing drag previews

- [dragInteraction(\_:previewForCancelling:withDefault:)](draginteraction%28__previewforcancelling_withdefault_%29.md): Asks the delegate for the targeted drag item preview to show during the cancellation animation.
- [dragInteraction(\_:prefersFullSizePreviewsFor:)](draginteraction%28__prefersfullsizepreviewsfor_%29.md): Asks the delegate whether the preview should appear in its original size or a scaled size.

# dragInteraction:previewForLiftingItem:session: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate for the targeted drag item preview that will appear during the lift animation.

## Declaration

```objectivec
- (UITargetedDragPreview *) dragInteraction:(UIDragInteraction *) interaction previewForLiftingItem:(UIDragItem *) item session:(id<UIDragSession>) session;
```

## Parameters

- `interaction`: The interaction that called this method.
- `item`: The drag item represented by the preview.
- `session`: The current drag session.

<a id="return-value"></a>

## Return Value

A targeted drag item preview you create, or `nil` to tell the system not to display the lift animation.

<a id="Discussion"></a>

## Discussion

If you don’t provide this method, the system creates a preview based on the view owned by the drag interaction.

## See Also

### Providing drag previews

- [dragInteraction:previewForCancellingItem:withDefault:](draginteraction%28__previewforcancelling_withdefault_%29.md): Asks the delegate for the targeted drag item preview to show during the cancellation animation.
- [dragInteraction:prefersFullSizePreviewsForSession:](draginteraction%28__prefersfullsizepreviewsfor_%29.md): Asks the delegate whether the preview should appear in its original size or a scaled size.
