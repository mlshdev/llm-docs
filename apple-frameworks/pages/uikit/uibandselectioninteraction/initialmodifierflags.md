> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibandselectioninteraction/initialmodifierflags](https://developer.apple.com/documentation/uikit/uibandselectioninteraction/initialmodifierflags)

# initialModifierFlags (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The pressed modifier keys at the start of the interaction.

## Declaration

```swift
var initialModifierFlags: UIKeyModifierFlags { get }
```

<a id="Discussion"></a>

## Discussion

When an interaction starts, the [UIBandSelectionInteraction](../uibandselectioninteraction.md) object places the current pressed modifier keys in this property. Use the set of modifier keys to adjust the behavior of your handler. For example, you might extend an existing selection when someone presses the Shift key.

## See Also

### Getting the interaction state

- [isEnabled](isenabled.md): A Boolean value that specifies whether the object is ready to detect interactions.
- [state](state-swift.property.md): The current state of the interaction object.
- [UIBandSelectionInteraction.State](state-swift.enum.md): Constants that indicate whether a band selection interaction object is inactive or currently tracking an interaction.

# initialModifierFlags (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The pressed modifier keys at the start of the interaction.

## Declaration

```objectivec
@property (nonatomic, readonly) UIKeyModifierFlags initialModifierFlags;
```

<a id="Discussion"></a>

## Discussion

When an interaction starts, the [UIBandSelectionInteraction](../uibandselectioninteraction.md) object places the current pressed modifier keys in this property. Use the set of modifier keys to adjust the behavior of your handler. For example, you might extend an existing selection when someone presses the Shift key.

## See Also

### Getting the interaction state

- [enabled](isenabled.md): A Boolean value that specifies whether the object is ready to detect interactions.
- [state](state-swift.property.md): The current state of the interaction object.
- [UIBandSelectionInteractionState](state-swift.enum.md): Constants that indicate whether a band selection interaction object is inactive or currently tracking an interaction.
