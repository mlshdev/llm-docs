> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipreviewinteractiondelegate/previewinteractionshouldbegin(_:)](https://developer.apple.com/documentation/uikit/uipreviewinteractiondelegate/previewinteractionshouldbegin(_:))

# previewInteractionShouldBegin(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate whether a preview interaction is allowed to begin.

## Declaration

```swift
optional func previewInteractionShouldBegin(_ previewInteraction: UIPreviewInteraction) -> Bool
```

## Parameters

- `previewInteraction`: The preview interaction that’s responding to user input.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the preview interaction should continue into the preview and commit phases; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If you don’t implement this optional method, the default return value of [true](https://developer.apple.com/documentation/swift/true) is assumed.

When [false](https://developer.apple.com/documentation/swift/false), no further delegate calls are made for the specified preview interaction until the user restarts the 3D Touch interaction.

## See Also

### Managing preview interactions

- [previewInteraction(\_:didUpdatePreviewTransition:ended:)](previewinteraction%28__didupdatepreviewtransition_ended_%29.md): Informs the delegate of the progress through the preview phase of the preview interaction.
- [previewInteraction(\_:didUpdateCommitTransition:ended:)](previewinteraction%28__didupdatecommittransition_ended_%29.md): Informs the delegate of the preview interaction’s progress through the commit phase.
- [previewInteractionDidCancel(\_:)](previewinteractiondidcancel%28__%29.md): Informs the delegate that the specified preview interaction was canceled.

# previewInteractionShouldBegin: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate whether a preview interaction is allowed to begin.

## Declaration

```objectivec
- (BOOL) previewInteractionShouldBegin:(UIPreviewInteraction *) previewInteraction;
```

## Parameters

- `previewInteraction`: The preview interaction that’s responding to user input.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the preview interaction should continue into the preview and commit phases; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If you don’t implement this optional method, the default return value of [true](https://developer.apple.com/documentation/swift/true) is assumed.

When [false](https://developer.apple.com/documentation/swift/false), no further delegate calls are made for the specified preview interaction until the user restarts the 3D Touch interaction.

## See Also

### Managing preview interactions

- [previewInteraction:didUpdatePreviewTransition:ended:](previewinteraction%28__didupdatepreviewtransition_ended_%29.md): Informs the delegate of the progress through the preview phase of the preview interaction.
- [previewInteraction:didUpdateCommitTransition:ended:](previewinteraction%28__didupdatecommittransition_ended_%29.md): Informs the delegate of the preview interaction’s progress through the commit phase.
- [previewInteractionDidCancel:](previewinteractiondidcancel%28__%29.md): Informs the delegate that the specified preview interaction was canceled.
