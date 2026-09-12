> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipreviewinteractiondelegate/previewinteraction(_:didupdatecommittransition:ended:)](https://developer.apple.com/documentation/uikit/uipreviewinteractiondelegate/previewinteraction(_:didupdatecommittransition:ended:))

# previewInteraction(\_:didUpdateCommitTransition:ended:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Informs the delegate of the preview interaction’s progress through the commit phase.

## Declaration

```swift
optional func previewInteraction(_ previewInteraction: UIPreviewInteraction, didUpdateCommitTransition transitionProgress: CGFloat, ended: Bool)
```

## Parameters

- `previewInteraction`: The preview interaction associated with the current user input.
- `transitionProgress`: The progress through the commit phase of the transition. A [CGFloat](../../corefoundation/cgfloat-swift.struct.md) with a value from `0` to `1`.
- `ended`: A `Boolean` whose value indicates whether the commit phase of the transition is complete.

<a id="Discussion"></a>

## Discussion

This method is called repeatedly during the commit phase of the preview interaction. Use the supplied `transitionProgress` parameter to update the UI to reflect the progress of the interaction. For example, the *pop* effect in view controller preview transitions progressively increases the size of the child view controller as the transition progresses.

The `ended` parameter is false throughout the commit phase and becomes [true](https://developer.apple.com/documentation/swift/true) when the phase is completed. At this point, the preview interaction is complete, and you should update the UI appropriately. For example, in view controller preview interactions, the child view controller becomes the main view controller.

## See Also

### Managing preview interactions

- [previewInteractionShouldBegin(\_:)](previewinteractionshouldbegin%28__%29.md): Asks the delegate whether a preview interaction is allowed to begin.
- [previewInteraction(\_:didUpdatePreviewTransition:ended:)](previewinteraction%28__didupdatepreviewtransition_ended_%29.md): Informs the delegate of the progress through the preview phase of the preview interaction.
- [previewInteractionDidCancel(\_:)](previewinteractiondidcancel%28__%29.md): Informs the delegate that the specified preview interaction was canceled.

# previewInteraction:didUpdateCommitTransition:ended: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Informs the delegate of the preview interaction’s progress through the commit phase.

## Declaration

```objectivec
- (void) previewInteraction:(UIPreviewInteraction *) previewInteraction didUpdateCommitTransition:(CGFloat) transitionProgress ended:(BOOL) ended;
```

## Parameters

- `previewInteraction`: The preview interaction associated with the current user input.
- `transitionProgress`: The progress through the commit phase of the transition. A [CGFloat](../../corefoundation/cgfloat-swift.struct.md) with a value from `0` to `1`.
- `ended`: A `Boolean` whose value indicates whether the commit phase of the transition is complete.

<a id="Discussion"></a>

## Discussion

This method is called repeatedly during the commit phase of the preview interaction. Use the supplied `transitionProgress` parameter to update the UI to reflect the progress of the interaction. For example, the *pop* effect in view controller preview transitions progressively increases the size of the child view controller as the transition progresses.

The `ended` parameter is false throughout the commit phase and becomes [true](https://developer.apple.com/documentation/swift/true) when the phase is completed. At this point, the preview interaction is complete, and you should update the UI appropriately. For example, in view controller preview interactions, the child view controller becomes the main view controller.

## See Also

### Managing preview interactions

- [previewInteractionShouldBegin:](previewinteractionshouldbegin%28__%29.md): Asks the delegate whether a preview interaction is allowed to begin.
- [previewInteraction:didUpdatePreviewTransition:ended:](previewinteraction%28__didupdatepreviewtransition_ended_%29.md): Informs the delegate of the progress through the preview phase of the preview interaction.
- [previewInteractionDidCancel:](previewinteractiondidcancel%28__%29.md): Informs the delegate that the specified preview interaction was canceled.
