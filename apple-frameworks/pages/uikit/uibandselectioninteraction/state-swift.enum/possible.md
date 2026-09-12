> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibandselectioninteraction/state-swift.enum/possible](https://developer.apple.com/documentation/uikit/uibandselectioninteraction/state-swift.enum/possible)

# UIBandSelectionInteraction.State.possible (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

A state that indicates the interaction object is ready to start a new interaction.

## Declaration

```swift
case possible
```

<a id="Discussion"></a>

## Discussion

A [UIBandSelectionInteraction](../../uibandselectioninteraction.md) object in this state is waiting for events to occur that start the interaction. When an interaction concludes, the interaction returns to this state until a new interaction begins.

## See Also

### Getting the selection state

- [UIBandSelectionInteraction.State.began](began.md): A state that indicates the interaction object began a new interaction.
- [UIBandSelectionInteraction.State.selecting](selecting.md): A state that indicates the interaction object is tracking changes to the selection rectangle.
- [UIBandSelectionInteraction.State.ended](ended.md): A state that indicates the current interaction ended.

# UIBandSelectionInteractionStatePossible (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

A state that indicates the interaction object is ready to start a new interaction.

## Declaration

```objectivec
UIBandSelectionInteractionStatePossible
```

<a id="Discussion"></a>

## Discussion

A [UIBandSelectionInteraction](../../uibandselectioninteraction.md) object in this state is waiting for events to occur that start the interaction. When an interaction concludes, the interaction returns to this state until a new interaction begins.

## See Also

### Getting the selection state

- [UIBandSelectionInteractionStateBegan](began.md): A state that indicates the interaction object began a new interaction.
- [UIBandSelectionInteractionStateSelecting](selecting.md): A state that indicates the interaction object is tracking changes to the selection rectangle.
- [UIBandSelectionInteractionStateEnded](ended.md): A state that indicates the current interaction ended.
