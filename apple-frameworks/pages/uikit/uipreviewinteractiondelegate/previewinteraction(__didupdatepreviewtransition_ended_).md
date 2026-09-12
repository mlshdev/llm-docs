> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipreviewinteractiondelegate/previewinteraction(_:didupdatepreviewtransition:ended:)](https://developer.apple.com/documentation/uikit/uipreviewinteractiondelegate/previewinteraction(_:didupdatepreviewtransition:ended:))

# previewInteraction(\_:didUpdatePreviewTransition:ended:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Informs the delegate of the progress through the preview phase of the preview interaction.

## Declaration

```swift
func previewInteraction(_ previewInteraction: UIPreviewInteraction, didUpdatePreviewTransition transitionProgress: CGFloat, ended: Bool)
```

## Parameters

- `previewInteraction`: The preview interaction associated with the current user input.
- `transitionProgress`: The progress through the preview phase of the transition. A [CGFloat](../../corefoundation/cgfloat-swift.struct.md) with a value from `0` to `1`.
- `ended`: A Boolean whose value indicates whether the preview phase of the transition is complete.

<a id="Discussion"></a>

## Discussion

This method is called repeatedly during the preview phase of the preview interaction. Use the supplied `transitionProgress` parameter to update the UI to reflect the progress of the interaction. For example, the *peek* effect in view controller preview transitions progressively blurs everything except the appropriate view.

The `ended` parameter is [false](https://developer.apple.com/documentation/swift/false) throughout the preview phase and becomes [true](https://developer.apple.com/documentation/swift/true) as the phase is completed. The preview interaction then transitions to the commit phase, so you should use this point to update the UI as required.

## See Also

### Managing preview interactions

- [previewInteractionShouldBegin(\_:)](previewinteractionshouldbegin%28__%29.md): Asks the delegate whether a preview interaction is allowed to begin.
- [previewInteraction(\_:didUpdateCommitTransition:ended:)](previewinteraction%28__didupdatecommittransition_ended_%29.md): Informs the delegate of the preview interaction’s progress through the commit phase.
- [previewInteractionDidCancel(\_:)](previewinteractiondidcancel%28__%29.md): Informs the delegate that the specified preview interaction was canceled.

# previewInteraction:didUpdatePreviewTransition:ended: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Informs the delegate of the progress through the preview phase of the preview interaction.

## Declaration

```objectivec
- (void) previewInteraction:(UIPreviewInteraction *) previewInteraction didUpdatePreviewTransition:(CGFloat) transitionProgress ended:(BOOL) ended;
```

## Parameters

- `previewInteraction`: The preview interaction associated with the current user input.
- `transitionProgress`: The progress through the preview phase of the transition. A [CGFloat](../../corefoundation/cgfloat-swift.struct.md) with a value from `0` to `1`.
- `ended`: A Boolean whose value indicates whether the preview phase of the transition is complete.

<a id="Discussion"></a>

## Discussion

This method is called repeatedly during the preview phase of the preview interaction. Use the supplied `transitionProgress` parameter to update the UI to reflect the progress of the interaction. For example, the *peek* effect in view controller preview transitions progressively blurs everything except the appropriate view.

The `ended` parameter is [false](https://developer.apple.com/documentation/swift/false) throughout the preview phase and becomes [true](https://developer.apple.com/documentation/swift/true) as the phase is completed. The preview interaction then transitions to the commit phase, so you should use this point to update the UI as required.

## See Also

### Managing preview interactions

- [previewInteractionShouldBegin:](previewinteractionshouldbegin%28__%29.md): Asks the delegate whether a preview interaction is allowed to begin.
- [previewInteraction:didUpdateCommitTransition:ended:](previewinteraction%28__didupdatecommittransition_ended_%29.md): Informs the delegate of the preview interaction’s progress through the commit phase.
- [previewInteractionDidCancel:](previewinteractiondidcancel%28__%29.md): Informs the delegate that the specified preview interaction was canceled.
