> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibandselectioninteraction/state-swift.enum](https://developer.apple.com/documentation/uikit/uibandselectioninteraction/state-swift.enum)

# UIBandSelectionInteraction.State (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Constants that indicate whether a band selection interaction object is inactive or currently tracking an interaction.

## Declaration

```swift
enum State
```

<a id="overview"></a>

## Overview

Use the [UIBandSelectionInteraction.State](state-swift.enum.md) constants in the handler of a [UIBandSelectionInteraction](../uibandselectioninteraction.md) object to determine the current state of the interaction. When the interaction object is idle, it sets the state to [UIBandSelectionInteraction.State.possible](state-swift.enum/possible.md). After the interaction starts, the state changes to other values to reflect the progress toward the completion of that interaction.

## Topics

### Getting the selection state

- [UIBandSelectionInteraction.State.possible](state-swift.enum/possible.md): A state that indicates the interaction object is ready to start a new interaction.
- [UIBandSelectionInteraction.State.began](state-swift.enum/began.md): A state that indicates the interaction object began a new interaction.
- [UIBandSelectionInteraction.State.selecting](state-swift.enum/selecting.md): A state that indicates the interaction object is tracking changes to the selection rectangle.
- [UIBandSelectionInteraction.State.ended](state-swift.enum/ended.md): A state that indicates the current interaction ended.

### Initializers

- [init(rawValue:)](state-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Band selection

- [UIBandSelectionInteraction](../uibandselectioninteraction.md): An object that tracks the selection of multiple items using pointer-based input.

# UIBandSelectionInteractionState (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Constants that indicate whether a band selection interaction object is inactive or currently tracking an interaction.

## Declaration

```objectivec
enum UIBandSelectionInteractionState : NSInteger;
```

<a id="overview"></a>

## Overview

Use the [UIBandSelectionInteractionState](state-swift.enum.md) constants in the handler of a [UIBandSelectionInteraction](../uibandselectioninteraction.md) object to determine the current state of the interaction. When the interaction object is idle, it sets the state to [UIBandSelectionInteractionStatePossible](state-swift.enum/possible.md). After the interaction starts, the state changes to other values to reflect the progress toward the completion of that interaction.

## Topics

### Getting the selection state

- [UIBandSelectionInteractionStatePossible](state-swift.enum/possible.md): A state that indicates the interaction object is ready to start a new interaction.
- [UIBandSelectionInteractionStateBegan](state-swift.enum/began.md): A state that indicates the interaction object began a new interaction.
- [UIBandSelectionInteractionStateSelecting](state-swift.enum/selecting.md): A state that indicates the interaction object is tracking changes to the selection rectangle.
- [UIBandSelectionInteractionStateEnded](state-swift.enum/ended.md): A state that indicates the current interaction ended.

## See Also

### Band selection

- [UIBandSelectionInteraction](../uibandselectioninteraction.md): An object that tracks the selection of multiple items using pointer-based input.
