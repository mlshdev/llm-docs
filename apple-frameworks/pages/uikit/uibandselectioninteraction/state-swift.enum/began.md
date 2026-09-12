> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibandselectioninteraction/state-swift.enum/began](https://developer.apple.com/documentation/uikit/uibandselectioninteraction/state-swift.enum/began)

# UIBandSelectionInteraction.State.began (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

A state that indicates the interaction object began a new interaction.

## Declaration

```swift
case began
```

<a id="Discussion"></a>

## Discussion

The interaction object enters this state once at the beginning of each interaction, and subsequently transitions to the [UIBandSelectionInteraction.State.selecting](selecting.md) or [UIBandSelectionInteraction.State.ended](ended.md) state. When in this state, perform any one-time tasks that you need to manage your app’s state. For example, you might prepare your view to start the selection of items.

## See Also

### Getting the selection state

- [UIBandSelectionInteraction.State.possible](possible.md): A state that indicates the interaction object is ready to start a new interaction.
- [UIBandSelectionInteraction.State.selecting](selecting.md): A state that indicates the interaction object is tracking changes to the selection rectangle.
- [UIBandSelectionInteraction.State.ended](ended.md): A state that indicates the current interaction ended.

# UIBandSelectionInteractionStateBegan (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

A state that indicates the interaction object began a new interaction.

## Declaration

```objectivec
UIBandSelectionInteractionStateBegan
```

<a id="Discussion"></a>

## Discussion

The interaction object enters this state once at the beginning of each interaction, and subsequently transitions to the [UIBandSelectionInteractionStateSelecting](selecting.md) or [UIBandSelectionInteractionStateEnded](ended.md) state. When in this state, perform any one-time tasks that you need to manage your app’s state. For example, you might prepare your view to start the selection of items.

## See Also

### Getting the selection state

- [UIBandSelectionInteractionStatePossible](possible.md): A state that indicates the interaction object is ready to start a new interaction.
- [UIBandSelectionInteractionStateSelecting](selecting.md): A state that indicates the interaction object is tracking changes to the selection rectangle.
- [UIBandSelectionInteractionStateEnded](ended.md): A state that indicates the current interaction ended.
