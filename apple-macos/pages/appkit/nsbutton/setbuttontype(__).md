> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbutton/setbuttontype(_:)](https://developer.apple.com/documentation/appkit/nsbutton/setbuttontype(_:))

# setButtonType(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the button’s type, which affects its user interface and behavior when clicked.

## Declaration

```swift
func setButtonType(_ type: NSButton.ButtonType)
```

## Parameters

- `type`: A constant specifying the type of the button. The available button types are listed under [NSButton.ButtonType](buttontype.md) in the [NSButtonCell](../nsbuttoncell.md) class.

<a id="Discussion"></a>

## Discussion

This method causes the button to update to reflect the new type before the method finishes executing.

The types available are for the most common button types, which are also accessible in Interface Builder. You can configure different behavior with the `NSButtonCell` methods  [highlightsBy](../nsbuttoncell/highlightsby.md) and [showsStateBy](../nsbuttoncell/showsstateby.md).

Note that there is no `-buttonType` method. The set method sets various button properties that together establish the behavior of the type.

## See Also

### Related Documentation

- [image](image.md): The image that appears on the button when it’s in an off state, or `nil` if there is no such image.
- [setButtonType(\_:)](../nsbuttoncell/setbuttontype%28__%29.md): Sets how the button highlights while pressed and how it shows its state.
- [alternateImage](alternateimage.md): An alternate image that appears on the button when the button is in an on state.

### Configuring buttons

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
- [maxAcceleratorLevel](maxacceleratorlevel.md): An integer value indicating the maximum pressure level for a button of type [NSMultiLevelAcceleratorButton](../nsmultilevelacceleratorbutton.md).
- [tintProminence](tintprominence.md): The tint prominence of the button. Use tint prominence to gently suggest a hierarchy when multiple buttons perform similar actions. A button with primary tint prominence suggests the most preferred option, while secondary prominence indicates a reasonable alternative. See [NSTintProminence](../nstintprominence.md) for a list of possible values.
- [NSTintProminence](../nstintprominence.md): Controls how strongly the tint color applies in a view.
- [borderShape](bordershape.md)

# setButtonType: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the button’s type, which affects its user interface and behavior when clicked.

## Declaration

```objectivec
- (void) setButtonType:(NSButtonType) type;
```

## Parameters

- `type`: A constant specifying the type of the button. The available button types are listed under [NSButtonType](buttontype.md) in the [NSButtonCell](../nsbuttoncell.md) class.

<a id="Discussion"></a>

## Discussion

This method causes the button to update to reflect the new type before the method finishes executing.

The types available are for the most common button types, which are also accessible in Interface Builder. You can configure different behavior with the `NSButtonCell` methods  [highlightsBy](../nsbuttoncell/highlightsby.md) and [showsStateBy](../nsbuttoncell/showsstateby.md).

Note that there is no `-buttonType` method. The set method sets various button properties that together establish the behavior of the type.

## See Also

### Related Documentation

- [image](image.md): The image that appears on the button when it’s in an off state, or `nil` if there is no such image.
- [setButtonType:](../nsbuttoncell/setbuttontype%28__%29.md): Sets how the button highlights while pressed and how it shows its state.
- [alternateImage](alternateimage.md): An alternate image that appears on the button when the button is in an on state.

### Configuring buttons

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
- [maxAcceleratorLevel](maxacceleratorlevel.md): An integer value indicating the maximum pressure level for a button of type [NSMultiLevelAcceleratorButton](../nsmultilevelacceleratorbutton.md).
- [tintProminence](tintprominence.md): The tint prominence of the button. Use tint prominence to gently suggest a hierarchy when multiple buttons perform similar actions. A button with primary tint prominence suggests the most preferred option, while secondary prominence indicates a reasonable alternative. See [NSTintProminence](../nstintprominence.md) for a list of possible values.
- [NSTintProminence](../nstintprominence.md): Controls how strongly the tint color applies in a view.
