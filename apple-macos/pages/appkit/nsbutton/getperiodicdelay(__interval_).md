> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbutton/getperiodicdelay(_:interval:)](https://developer.apple.com/documentation/appkit/nsbutton/getperiodicdelay(_:interval:))

# getPeriodicDelay(\_:interval:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns by reference the delay and interval periods for a continuous button.

## Declaration

```swift
func getPeriodicDelay(_ delay: UnsafeMutablePointer<Float>, interval: UnsafeMutablePointer<Float>)
```

## Parameters

- `delay`: On return, the amount of time (in seconds) the button will pause before starting to periodically send action messages to the target object. The default delay is taken from a user’s default (60 seconds maximum). If the user hasn’t specified a default value, `delay` defaults to 0.4 seconds,
- `interval`: On return, the amount of time (in seconds) the button will pause between sending each action message. The default interval is taken from a user’s default (60 seconds maximum). If the user hasn’t specified a default value, `interval` defaults to 0.075 seconds.

## See Also

### Related Documentation

- [isContinuous](../nscontrol/iscontinuous.md): A Boolean value indicating whether the receiver’s cell sends its action message continuously to its target during mouse tracking.

### Configuring buttons

- [setButtonType(\_:)](setbuttontype%28__%29.md): Sets the button’s type, which affects its user interface and behavior when clicked.
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
- [maxAcceleratorLevel](maxacceleratorlevel.md): An integer value indicating the maximum pressure level for a button of type [NSMultiLevelAcceleratorButton](../nsmultilevelacceleratorbutton.md).
- [tintProminence](tintprominence.md): The tint prominence of the button. Use tint prominence to gently suggest a hierarchy when multiple buttons perform similar actions. A button with primary tint prominence suggests the most preferred option, while secondary prominence indicates a reasonable alternative. See [NSTintProminence](../nstintprominence.md) for a list of possible values.
- [NSTintProminence](../nstintprominence.md): Controls how strongly the tint color applies in a view.
- [borderShape](bordershape.md)

# getPeriodicDelay:interval: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns by reference the delay and interval periods for a continuous button.

## Declaration

```objectivec
- (void) getPeriodicDelay:(float *) delay interval:(float *) interval;
```

## Parameters

- `delay`: On return, the amount of time (in seconds) the button will pause before starting to periodically send action messages to the target object. The default delay is taken from a user’s default (60 seconds maximum). If the user hasn’t specified a default value, `delay` defaults to 0.4 seconds,
- `interval`: On return, the amount of time (in seconds) the button will pause between sending each action message. The default interval is taken from a user’s default (60 seconds maximum). If the user hasn’t specified a default value, `interval` defaults to 0.075 seconds.

## See Also

### Related Documentation

- [continuous](../nscontrol/iscontinuous.md): A Boolean value indicating whether the receiver’s cell sends its action message continuously to its target during mouse tracking.

### Configuring buttons

- [setButtonType:](setbuttontype%28__%29.md): Sets the button’s type, which affects its user interface and behavior when clicked.
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
- [maxAcceleratorLevel](maxacceleratorlevel.md): An integer value indicating the maximum pressure level for a button of type [NSMultiLevelAcceleratorButton](../nsmultilevelacceleratorbutton.md).
- [tintProminence](tintprominence.md): The tint prominence of the button. Use tint prominence to gently suggest a hierarchy when multiple buttons perform similar actions. A button with primary tint prominence suggests the most preferred option, while secondary prominence indicates a reasonable alternative. See [NSTintProminence](../nstintprominence.md) for a list of possible values.
- [NSTintProminence](../nstintprominence.md): Controls how strongly the tint color applies in a view.
