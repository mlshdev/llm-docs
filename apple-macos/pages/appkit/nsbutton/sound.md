> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbutton/sound](https://developer.apple.com/documentation/appkit/nsbutton/sound)

# sound (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The sound that plays when the user clicks the button.

## Declaration

```swift
var sound: NSSound? { get set }
```

<a id="Discussion"></a>

## Discussion

The sound represented by this property is played during a mouse event, such as [NSLeftMouseDown](../nsleftmousedown.md).

## See Also

### Configuring buttons

- [setButtonType(\_:)](setbuttontype%28__%29.md): Sets the button’s type, which affects its user interface and behavior when clicked.
- [getPeriodicDelay(\_:interval:)](getperiodicdelay%28__interval_%29.md): Returns by reference the delay and interval periods for a continuous button.
- [setPeriodicDelay(\_:interval:)](setperiodicdelay%28__interval_%29.md): Sets the message delay and interval periods for a continuous button.
- [contentTintColor](contenttintcolor.md): A tint color to use for the template image and text content.
- [hasDestructiveAction](hasdestructiveaction.md): A Boolean value that defines whether a button’s action has a destructive effect.
- [alternateTitle](alternatetitle.md): The title that the button displays when the button is in an on state.
- [attributedTitle](attributedtitle.md): The title that the button displays in an off state, as an attributed string.
- [attributedAlternateTitle](attributedalternatetitle.md): The title that the button displays as an attributed string when the button is in an on state.
- [title](title.md): The title displayed on the button when it’s in an off state.
- [symbolConfiguration](symbolconfiguration.md): The combination of point size, weight, and scale to use when sizing and displaying symbol images.
- [isSpringLoaded](isspringloaded.md): A Boolean value that indicates whether spring loading is enabled for the button.
- [maxAcceleratorLevel](maxacceleratorlevel.md): An integer value indicating the maximum pressure level for a button of type [NSMultiLevelAcceleratorButton](../nsmultilevelacceleratorbutton.md).
- [tintProminence](tintprominence.md): The tint prominence of the button. Use tint prominence to gently suggest a hierarchy when multiple buttons perform similar actions. A button with primary tint prominence suggests the most preferred option, while secondary prominence indicates a reasonable alternative. See [NSTintProminence](../nstintprominence.md) for a list of possible values.
- [NSTintProminence](../nstintprominence.md): Controls how strongly the tint color applies in a view.
- [borderShape](bordershape.md)

# sound (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The sound that plays when the user clicks the button.

## Declaration

```objectivec
@property (strong, nullable) NSSound * sound;
```

<a id="Discussion"></a>

## Discussion

The sound represented by this property is played during a mouse event, such as [NSLeftMouseDown](../nsleftmousedown.md).

## See Also

### Configuring buttons

- [setButtonType:](setbuttontype%28__%29.md): Sets the button’s type, which affects its user interface and behavior when clicked.
- [getPeriodicDelay:interval:](getperiodicdelay%28__interval_%29.md): Returns by reference the delay and interval periods for a continuous button.
- [setPeriodicDelay:interval:](setperiodicdelay%28__interval_%29.md): Sets the message delay and interval periods for a continuous button.
- [contentTintColor](contenttintcolor.md): A tint color to use for the template image and text content.
- [hasDestructiveAction](hasdestructiveaction.md): A Boolean value that defines whether a button’s action has a destructive effect.
- [alternateTitle](alternatetitle.md): The title that the button displays when the button is in an on state.
- [attributedTitle](attributedtitle.md): The title that the button displays in an off state, as an attributed string.
- [attributedAlternateTitle](attributedalternatetitle.md): The title that the button displays as an attributed string when the button is in an on state.
- [title](title.md): The title displayed on the button when it’s in an off state.
- [setTitleWithMnemonic:](settitlewithmnemonic_.md): Deprecated. Sets the title of a button with a character denoting an access key.
- [symbolConfiguration](symbolconfiguration.md): The combination of point size, weight, and scale to use when sizing and displaying symbol images.
- [springLoaded](isspringloaded.md): A Boolean value that indicates whether spring loading is enabled for the button.
- [maxAcceleratorLevel](maxacceleratorlevel.md): An integer value indicating the maximum pressure level for a button of type [NSMultiLevelAcceleratorButton](../nsmultilevelacceleratorbutton.md).
- [tintProminence](tintprominence.md): The tint prominence of the button. Use tint prominence to gently suggest a hierarchy when multiple buttons perform similar actions. A button with primary tint prominence suggests the most preferred option, while secondary prominence indicates a reasonable alternative. See [NSTintProminence](../nstintprominence.md) for a list of possible values.
- [NSTintProminence](../nstintprominence.md): Controls how strongly the tint color applies in a view.
