> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbutton/title](https://developer.apple.com/documentation/appkit/nsbutton/title)

# title (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The title displayed on the button when it’s in an off state.

## Declaration

```swift
var title: String { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains the title displayed on the button when it’s in an off state or the empty string if the button doesn’t display a title. This title is always displayed if the button doesn’t use its alternate contents for highlighting or displaying the on state. By default, a button’s title is Button. Setting the value of this property redraws the button’s contents, if necessary.

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
- [symbolConfiguration](symbolconfiguration.md): The combination of point size, weight, and scale to use when sizing and displaying symbol images.
- [sound](sound.md): The sound that plays when the user clicks the button.
- [isSpringLoaded](isspringloaded.md): A Boolean value that indicates whether spring loading is enabled for the button.
- [maxAcceleratorLevel](maxacceleratorlevel.md): An integer value indicating the maximum pressure level for a button of type [NSMultiLevelAcceleratorButton](../nsmultilevelacceleratorbutton.md).
- [tintProminence](tintprominence.md): The tint prominence of the button. Use tint prominence to gently suggest a hierarchy when multiple buttons perform similar actions. A button with primary tint prominence suggests the most preferred option, while secondary prominence indicates a reasonable alternative. See [NSTintProminence](../nstintprominence.md) for a list of possible values.
- [NSTintProminence](../nstintprominence.md): Controls how strongly the tint color applies in a view.
- [borderShape](bordershape.md)

# title (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The title displayed on the button when it’s in an off state.

## Declaration

```objectivec
@property (copy) NSString * title;
```

<a id="Discussion"></a>

## Discussion

This property contains the title displayed on the button when it’s in an off state or the empty string if the button doesn’t display a title. This title is always displayed if the button doesn’t use its alternate contents for highlighting or displaying the on state. By default, a button’s title is Button. Setting the value of this property redraws the button’s contents, if necessary.

## See Also

### Related Documentation

- [setTitleWithMnemonic:](settitlewithmnemonic_.md): Deprecated. Sets the title of a button with a character denoting an access key.

### Configuring buttons

- [setButtonType:](setbuttontype%28__%29.md): Sets the button’s type, which affects its user interface and behavior when clicked.
- [getPeriodicDelay:interval:](getperiodicdelay%28__interval_%29.md): Returns by reference the delay and interval periods for a continuous button.
- [setPeriodicDelay:interval:](setperiodicdelay%28__interval_%29.md): Sets the message delay and interval periods for a continuous button.
- [contentTintColor](contenttintcolor.md): A tint color to use for the template image and text content.
- [hasDestructiveAction](hasdestructiveaction.md): A Boolean value that defines whether a button’s action has a destructive effect.
- [alternateTitle](alternatetitle.md): The title that the button displays when the button is in an on state.
- [attributedTitle](attributedtitle.md): The title that the button displays in an off state, as an attributed string.
- [attributedAlternateTitle](attributedalternatetitle.md): The title that the button displays as an attributed string when the button is in an on state.
- [setTitleWithMnemonic:](settitlewithmnemonic_.md): Deprecated. Sets the title of a button with a character denoting an access key.
- [symbolConfiguration](symbolconfiguration.md): The combination of point size, weight, and scale to use when sizing and displaying symbol images.
- [sound](sound.md): The sound that plays when the user clicks the button.
- [springLoaded](isspringloaded.md): A Boolean value that indicates whether spring loading is enabled for the button.
- [maxAcceleratorLevel](maxacceleratorlevel.md): An integer value indicating the maximum pressure level for a button of type [NSMultiLevelAcceleratorButton](../nsmultilevelacceleratorbutton.md).
- [tintProminence](tintprominence.md): The tint prominence of the button. Use tint prominence to gently suggest a hierarchy when multiple buttons perform similar actions. A button with primary tint prominence suggests the most preferred option, while secondary prominence indicates a reasonable alternative. See [NSTintProminence](../nstintprominence.md) for a list of possible values.
- [NSTintProminence](../nstintprominence.md): Controls how strongly the tint color applies in a view.
