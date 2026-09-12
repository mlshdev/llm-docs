> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipreviewinteractiondelegate/previewinteractiondidcancel(_:)](https://developer.apple.com/documentation/uikit/uipreviewinteractiondelegate/previewinteractiondidcancel(_:))

# previewInteractionDidCancel(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Informs the delegate that the specified preview interaction was canceled.

## Declaration

```swift
func previewInteractionDidCancel(_ previewInteraction: UIPreviewInteraction)
```

## Parameters

- `previewInteraction`: The preview interaction associated with the current user input.

<a id="Discussion"></a>

## Discussion

This method is called when the preview interaction is canceled, either programmatically through the [cancel()](../uipreviewinteraction/cancel%28%29.md) method on [UIPreviewInteraction](../uipreviewinteraction.md), or by interrupting the preview interaction before the commit phase is complete.

## See Also

### Managing preview interactions

- [previewInteractionShouldBegin(\_:)](previewinteractionshouldbegin%28__%29.md): Asks the delegate whether a preview interaction is allowed to begin.
- [previewInteraction(\_:didUpdatePreviewTransition:ended:)](previewinteraction%28__didupdatepreviewtransition_ended_%29.md): Informs the delegate of the progress through the preview phase of the preview interaction.
- [previewInteraction(\_:didUpdateCommitTransition:ended:)](previewinteraction%28__didupdatecommittransition_ended_%29.md): Informs the delegate of the preview interaction’s progress through the commit phase.

# previewInteractionDidCancel: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Informs the delegate that the specified preview interaction was canceled.

## Declaration

```objectivec
- (void) previewInteractionDidCancel:(UIPreviewInteraction *) previewInteraction;
```

## Parameters

- `previewInteraction`: The preview interaction associated with the current user input.

<a id="Discussion"></a>

## Discussion

This method is called when the preview interaction is canceled, either programmatically through the [cancelInteraction](../uipreviewinteraction/cancel%28%29.md) method on [UIPreviewInteraction](../uipreviewinteraction.md), or by interrupting the preview interaction before the commit phase is complete.

## See Also

### Managing preview interactions

- [previewInteractionShouldBegin:](previewinteractionshouldbegin%28__%29.md): Asks the delegate whether a preview interaction is allowed to begin.
- [previewInteraction:didUpdatePreviewTransition:ended:](previewinteraction%28__didupdatepreviewtransition_ended_%29.md): Informs the delegate of the progress through the preview phase of the preview interaction.
- [previewInteraction:didUpdateCommitTransition:ended:](previewinteraction%28__didupdatecommittransition_ended_%29.md): Informs the delegate of the preview interaction’s progress through the commit phase.
