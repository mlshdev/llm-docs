> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibandselectioninteraction/isenabled](https://developer.apple.com/documentation/uikit/uibandselectioninteraction/isenabled)

# isEnabled (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

A Boolean value that specifies whether the object is ready to detect interactions.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the [UIBandSelectionInteraction](../uibandselectioninteraction.md) object is ready to detect pointer-based events in its owning view and initiate interactions. If the value is [false](https://developer.apple.com/documentation/swift/false), the object ignores events and doesn’t start interactions. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Getting the interaction state

- [initialModifierFlags](initialmodifierflags.md): The pressed modifier keys at the start of the interaction.
- [state](state-swift.property.md): The current state of the interaction object.
- [UIBandSelectionInteraction.State](state-swift.enum.md): Constants that indicate whether a band selection interaction object is inactive or currently tracking an interaction.

# enabled (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

A Boolean value that specifies whether the object is ready to detect interactions.

## Declaration

```objectivec
@property (nonatomic, getter=isEnabled) BOOL enabled;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the [UIBandSelectionInteraction](../uibandselectioninteraction.md) object is ready to detect pointer-based events in its owning view and initiate interactions. If the value is [false](https://developer.apple.com/documentation/swift/false), the object ignores events and doesn’t start interactions. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Getting the interaction state

- [initialModifierFlags](initialmodifierflags.md): The pressed modifier keys at the start of the interaction.
- [state](state-swift.property.md): The current state of the interaction object.
- [UIBandSelectionInteractionState](state-swift.enum.md): Constants that indicate whether a band selection interaction object is inactive or currently tracking an interaction.
