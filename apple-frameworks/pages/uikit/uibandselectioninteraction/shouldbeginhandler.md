> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibandselectioninteraction/shouldbeginhandler](https://developer.apple.com/documentation/uikit/uibandselectioninteraction/shouldbeginhandler)

# shouldBeginHandler (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The handler that determines whether to start a band selection interaction.

## Declaration

```swift
var shouldBeginHandler: ((UIBandSelectionInteraction, CGPoint) -> Bool)? { get set }
```

<a id="Discussion"></a>

## Discussion

This property stores an optional handler block you use to selectively start the interaction. If you provide a handler, the [UIBandSelectionInteraction](../uibandselectioninteraction.md) object calls your handler upon successful recognition of the appropriate event sequence, but before it starts the interaction. Use your handler to specify whether you want the interaction to proceed.

Your handler block returns a Boolean that indicates whether to start the interaction. Return [true](https://developer.apple.com/documentation/swift/true) to start the interaction or [false](https://developer.apple.com/documentation/swift/false) to ignore the interaction and return the [UIBandSelectionInteraction](../uibandselectioninteraction.md) object to the [UIBandSelectionInteraction.State.possible](state-swift.enum/possible.md) state. The interaction object passes the following points to your handler:

- **interaction**: The [UIBandSelectionInteraction](../uibandselectioninteraction.md) object that’s ready to start the interaction.
- **point**: The starting point of the interaction, in your view’s coordinate space. You might use this value to prevent someone from starting interactions in disabled items or from specific regions of your view.

# shouldBeginHandler (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The handler that determines whether to start a band selection interaction.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) BOOL (^shouldBeginHandler)(UIBandSelectionInteraction *interaction, CGPoint point);
```

<a id="Discussion"></a>

## Discussion

This property stores an optional handler block you use to selectively start the interaction. If you provide a handler, the [UIBandSelectionInteraction](../uibandselectioninteraction.md) object calls your handler upon successful recognition of the appropriate event sequence, but before it starts the interaction. Use your handler to specify whether you want the interaction to proceed.

Your handler block returns a Boolean that indicates whether to start the interaction. Return [true](https://developer.apple.com/documentation/swift/true) to start the interaction or [false](https://developer.apple.com/documentation/swift/false) to ignore the interaction and return the [UIBandSelectionInteraction](../uibandselectioninteraction.md) object to the [UIBandSelectionInteractionStatePossible](state-swift.enum/possible.md) state. The interaction object passes the following points to your handler:

- **interaction**: The [UIBandSelectionInteraction](../uibandselectioninteraction.md) object that’s ready to start the interaction.
- **point**: The starting point of the interaction, in your view’s coordinate space. You might use this value to prevent someone from starting interactions in disabled items or from specific regions of your view.
