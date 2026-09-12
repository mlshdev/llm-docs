> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbutton/maxacceleratorlevel](https://developer.apple.com/documentation/appkit/nsbutton/maxacceleratorlevel)

# maxAcceleratorLevel (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10.3+

An integer value indicating the maximum pressure level for a button of type [NSMultiLevelAcceleratorButton](../nsmultilevelacceleratorbutton.md).

## Declaration

```swift
var maxAcceleratorLevel: Int { get set }
```

<a id="Discussion"></a>

## Discussion

A multilevel accelerator button is a variation of a standard accelerator button that allows for a configurable number of stepped pressure levels in a system that supports pressure-sensitivity, such as the Force Touch trackpad. As each level is reached, the user receives light tactile feedback, and an action is sent.

You configure the number of pressure levels for a multilevel accelerator button by adjusting the value of [maxAcceleratorLevel](maxacceleratorlevel.md). For other types of buttons, this property value defaults to `1`. For multilevel accelerator buttons, this property value defaults to `2`, and may be set to a value between `1` and `5`.

The behavior of a multilevel accelerator button is reliant on a system that supports pressure sensitivity. On a system that doesn’t support pressure sensitivity, a multilevel accelerator button always has a value of `1` when the user clicks it.

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
- [sound](sound.md): The sound that plays when the user clicks the button.
- [isSpringLoaded](isspringloaded.md): A Boolean value that indicates whether spring loading is enabled for the button.
- [tintProminence](tintprominence.md): The tint prominence of the button. Use tint prominence to gently suggest a hierarchy when multiple buttons perform similar actions. A button with primary tint prominence suggests the most preferred option, while secondary prominence indicates a reasonable alternative. See [NSTintProminence](../nstintprominence.md) for a list of possible values.
- [NSTintProminence](../nstintprominence.md): Controls how strongly the tint color applies in a view.
- [borderShape](bordershape.md)

# maxAcceleratorLevel (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10.3+

An integer value indicating the maximum pressure level for a button of type [NSMultiLevelAcceleratorButton](../nsmultilevelacceleratorbutton.md).

## Declaration

```objectivec
@property NSInteger maxAcceleratorLevel;
```

<a id="Discussion"></a>

## Discussion

A multilevel accelerator button is a variation of a standard accelerator button that allows for a configurable number of stepped pressure levels in a system that supports pressure-sensitivity, such as the Force Touch trackpad. As each level is reached, the user receives light tactile feedback, and an action is sent.

You configure the number of pressure levels for a multilevel accelerator button by adjusting the value of [maxAcceleratorLevel](maxacceleratorlevel.md). For other types of buttons, this property value defaults to `1`. For multilevel accelerator buttons, this property value defaults to `2`, and may be set to a value between `1` and `5`.

The behavior of a multilevel accelerator button is reliant on a system that supports pressure sensitivity. On a system that doesn’t support pressure sensitivity, a multilevel accelerator button always has a value of `1` when the user clicks it.

## See Also

### Related Documentation

- [NSMultiLevelAcceleratorButton](../nsmultilevelacceleratorbutton.md): Deprecated. A multilevel accelerator button is a variation of a normal accelerator button that allows for a configurable number of stepped pressure levels. As each one is reached, the user receives light tactile feedback and an action is sent.
- [NSAcceleratorButton](../nsacceleratorbutton.md): Deprecated. A button that sends an action when the user first clicks the button and continues sending actions until the user releases pressure entirely.

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
- [sound](sound.md): The sound that plays when the user clicks the button.
- [springLoaded](isspringloaded.md): A Boolean value that indicates whether spring loading is enabled for the button.
- [tintProminence](tintprominence.md): The tint prominence of the button. Use tint prominence to gently suggest a hierarchy when multiple buttons perform similar actions. A button with primary tint prominence suggests the most preferred option, while secondary prominence indicates a reasonable alternative. See [NSTintProminence](../nstintprominence.md) for a list of possible values.
- [NSTintProminence](../nstintprominence.md): Controls how strongly the tint color applies in a view.
