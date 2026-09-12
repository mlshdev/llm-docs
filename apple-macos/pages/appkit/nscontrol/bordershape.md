> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/bordershape](https://developer.apple.com/documentation/appkit/nscontrol/bordershape)

# NSControl.BorderShape (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 26.0+

## Declaration

```swift
enum BorderShape
```

## Topics

### Enumeration Cases

- [NSControl.BorderShape.automatic](bordershape/automatic.md): The control will resolve this to an appropriate shape for the given control size and context
- [NSControl.BorderShape.capsule](bordershape/capsule.md): The control will resolve this to an appropriate shape for the given control size and context
- [NSControl.BorderShape.circle](bordershape/circle.md): The control will resolve this to an appropriate shape for the given control size and context
- [NSControl.BorderShape.roundedRectangle](bordershape/roundedrectangle.md): The control will resolve this to an appropriate shape for the given control size and context

### Initializers

- [init(rawValue:)](bordershape/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring buttons

- [setButtonType(\_:)](../nsbutton/setbuttontype%28__%29.md): Sets the button’s type, which affects its user interface and behavior when clicked.
- [getPeriodicDelay(\_:interval:)](../nsbutton/getperiodicdelay%28__interval_%29.md): Returns by reference the delay and interval periods for a continuous button.
- [setPeriodicDelay(\_:interval:)](../nsbutton/setperiodicdelay%28__interval_%29.md): Sets the message delay and interval periods for a continuous button.
- [contentTintColor](../nsbutton/contenttintcolor.md): A tint color to use for the template image and text content.
- [hasDestructiveAction](../nsbutton/hasdestructiveaction.md): A Boolean value that defines whether a button’s action has a destructive effect.
- [alternateTitle](../nsbutton/alternatetitle.md): The title that the button displays when the button is in an on state.
- [attributedTitle](../nsbutton/attributedtitle.md): The title that the button displays in an off state, as an attributed string.
- [attributedAlternateTitle](../nsbutton/attributedalternatetitle.md): The title that the button displays as an attributed string when the button is in an on state.
- [title](../nsbutton/title.md): The title displayed on the button when it’s in an off state.
- [symbolConfiguration](../nsbutton/symbolconfiguration.md): The combination of point size, weight, and scale to use when sizing and displaying symbol images.
- [sound](../nsbutton/sound.md): The sound that plays when the user clicks the button.
- [isSpringLoaded](../nsbutton/isspringloaded.md): A Boolean value that indicates whether spring loading is enabled for the button.
- [maxAcceleratorLevel](../nsbutton/maxacceleratorlevel.md): An integer value indicating the maximum pressure level for a button of type [NSMultiLevelAcceleratorButton](../nsmultilevelacceleratorbutton.md).
- [tintProminence](../nsbutton/tintprominence.md): The tint prominence of the button. Use tint prominence to gently suggest a hierarchy when multiple buttons perform similar actions. A button with primary tint prominence suggests the most preferred option, while secondary prominence indicates a reasonable alternative. See [NSTintProminence](../nstintprominence.md) for a list of possible values.
- [NSTintProminence](../nstintprominence.md): Controls how strongly the tint color applies in a view.

# NSControlBorderShape (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 26.0+

## Declaration

```objectivec
enum NSControlBorderShape : NSInteger;
```

## Topics

### Enumeration Cases

- [NSControlBorderShapeAutomatic](bordershape/automatic.md): The control will resolve this to an appropriate shape for the given control size and context
- [NSControlBorderShapeCapsule](bordershape/capsule.md): The control will resolve this to an appropriate shape for the given control size and context
- [NSControlBorderShapeCircle](bordershape/circle.md): The control will resolve this to an appropriate shape for the given control size and context
- [NSControlBorderShapeRoundedRectangle](bordershape/roundedrectangle.md): The control will resolve this to an appropriate shape for the given control size and context

## See Also

### Configuring buttons

- [setButtonType:](../nsbutton/setbuttontype%28__%29.md): Sets the button’s type, which affects its user interface and behavior when clicked.
- [getPeriodicDelay:interval:](../nsbutton/getperiodicdelay%28__interval_%29.md): Returns by reference the delay and interval periods for a continuous button.
- [setPeriodicDelay:interval:](../nsbutton/setperiodicdelay%28__interval_%29.md): Sets the message delay and interval periods for a continuous button.
- [contentTintColor](../nsbutton/contenttintcolor.md): A tint color to use for the template image and text content.
- [hasDestructiveAction](../nsbutton/hasdestructiveaction.md): A Boolean value that defines whether a button’s action has a destructive effect.
- [alternateTitle](../nsbutton/alternatetitle.md): The title that the button displays when the button is in an on state.
- [attributedTitle](../nsbutton/attributedtitle.md): The title that the button displays in an off state, as an attributed string.
- [attributedAlternateTitle](../nsbutton/attributedalternatetitle.md): The title that the button displays as an attributed string when the button is in an on state.
- [title](../nsbutton/title.md): The title displayed on the button when it’s in an off state.
- [setTitleWithMnemonic:](../nsbutton/settitlewithmnemonic_.md): Deprecated. Sets the title of a button with a character denoting an access key.
- [symbolConfiguration](../nsbutton/symbolconfiguration.md): The combination of point size, weight, and scale to use when sizing and displaying symbol images.
- [sound](../nsbutton/sound.md): The sound that plays when the user clicks the button.
- [springLoaded](../nsbutton/isspringloaded.md): A Boolean value that indicates whether spring loading is enabled for the button.
- [maxAcceleratorLevel](../nsbutton/maxacceleratorlevel.md): An integer value indicating the maximum pressure level for a button of type [NSMultiLevelAcceleratorButton](../nsmultilevelacceleratorbutton.md).
- [tintProminence](../nsbutton/tintprominence.md): The tint prominence of the button. Use tint prominence to gently suggest a hierarchy when multiple buttons perform similar actions. A button with primary tint prominence suggests the most preferred option, while secondary prominence indicates a reasonable alternative. See [NSTintProminence](../nstintprominence.md) for a list of possible values.
