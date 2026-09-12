> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidraginteractiondelegate/draginteraction(_:prefersfullsizepreviewsfor:)](https://developer.apple.com/documentation/uikit/uidraginteractiondelegate/draginteraction(_:prefersfullsizepreviewsfor:))

# dragInteraction(\_:prefersFullSizePreviewsFor:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate whether the preview should appear in its original size or a scaled size.

## Declaration

```swift
optional func dragInteraction(_ interaction: UIDragInteraction, prefersFullSizePreviewsFor session: any UIDragSession) -> Bool
```

## Parameters

- `interaction`: The interaction that called this method.
- `session`: The current drag session.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to tell the system the preview should appear in its original size; otherwise [false](https://developer.apple.com/documentation/swift/false), which is the default if you don’t provide this method.

<a id="Discussion"></a>

## Discussion

The return value is a recommendation to the system. The system may choose to scale the preview to a smaller size, according to its own rules, even if you return [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Providing drag previews

- [dragInteraction(\_:previewForLifting:session:)](draginteraction%28__previewforlifting_session_%29.md): Asks the delegate for the targeted drag item preview that will appear during the lift animation.
- [dragInteraction(\_:previewForCancelling:withDefault:)](draginteraction%28__previewforcancelling_withdefault_%29.md): Asks the delegate for the targeted drag item preview to show during the cancellation animation.

# dragInteraction:prefersFullSizePreviewsForSession: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate whether the preview should appear in its original size or a scaled size.

## Declaration

```objectivec
- (BOOL) dragInteraction:(UIDragInteraction *) interaction prefersFullSizePreviewsForSession:(id<UIDragSession>) session;
```

## Parameters

- `interaction`: The interaction that called this method.
- `session`: The current drag session.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to tell the system the preview should appear in its original size; otherwise [false](https://developer.apple.com/documentation/swift/false), which is the default if you don’t provide this method.

<a id="Discussion"></a>

## Discussion

The return value is a recommendation to the system. The system may choose to scale the preview to a smaller size, according to its own rules, even if you return [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Providing drag previews

- [dragInteraction:previewForLiftingItem:session:](draginteraction%28__previewforlifting_session_%29.md): Asks the delegate for the targeted drag item preview that will appear during the lift animation.
- [dragInteraction:previewForCancellingItem:withDefault:](draginteraction%28__previewforcancelling_withdefault_%29.md): Asks the delegate for the targeted drag item preview to show during the cancellation animation.
