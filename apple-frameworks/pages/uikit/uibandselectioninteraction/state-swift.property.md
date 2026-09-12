> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibandselectioninteraction/state-swift.property](https://developer.apple.com/documentation/uikit/uibandselectioninteraction/state-swift.property)

# state (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The current state of the interaction object.

## Declaration

```swift
var state: UIBandSelectionInteraction.State { get }
```

<a id="Discussion"></a>

## Discussion

Use the current state to determine what actions to take in your handler. For example, when an interaction object is in the selecting state, you might highlight items in your view that are inside the current selection rectangle.

## See Also

### Getting the interaction state

- [isEnabled](isenabled.md): A Boolean value that specifies whether the object is ready to detect interactions.
- [initialModifierFlags](initialmodifierflags.md): The pressed modifier keys at the start of the interaction.
- [UIBandSelectionInteraction.State](state-swift.enum.md): Constants that indicate whether a band selection interaction object is inactive or currently tracking an interaction.

# state (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The current state of the interaction object.

## Declaration

```objectivec
@property (nonatomic, readonly) UIBandSelectionInteractionState state;
```

<a id="Discussion"></a>

## Discussion

Use the current state to determine what actions to take in your handler. For example, when an interaction object is in the selecting state, you might highlight items in your view that are inside the current selection rectangle.

## See Also

### Getting the interaction state

- [enabled](isenabled.md): A Boolean value that specifies whether the object is ready to detect interactions.
- [initialModifierFlags](initialmodifierflags.md): The pressed modifier keys at the start of the interaction.
- [UIBandSelectionInteractionState](state-swift.enum.md): Constants that indicate whether a band selection interaction object is inactive or currently tracking an interaction.
