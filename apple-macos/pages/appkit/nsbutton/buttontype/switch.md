> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbutton/buttontype/switch](https://developer.apple.com/documentation/appkit/nsbutton/buttontype/switch)

# NSButton.ButtonType.switch (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

A standard checkbox button.

## Declaration

```swift
case `switch`
```

<a id="Discussion"></a>

## Discussion

A switch button provides the same toggling behavior as a [NSButton.ButtonType.toggle](toggle.md) button. In addition to configuring that behavior, this button type configures [isBordered](../isbordered.md) to [false](https://developer.apple.com/documentation/swift/false) and provides a standard checkbox image.

Checkboxes are ideal for controlling a Boolean state within your application. The mixed state of a checkbox, enabled through the [allowsMixedState](../allowsmixedstate.md) property, is useful for summarizing multiple Boolean states of varying values.

This option corresponds to the Switch type in Interface Builder’s Attributes inspector.

## See Also

### Configuring Button Behavior

- [NSButton.ButtonType.momentaryPushIn](momentarypushin.md): A button that illuminates when the user clicks it.
- [NSButton.ButtonType.momentaryLight](momentarylight.md): A button that displays a highlight when the user clicks it and returns to its normal state when the user releases it.
- [NSButton.ButtonType.momentaryChange](momentarychange.md): A button that displays its alternate content when clicked and returns to its normal content when the user releases it.
- [NSButton.ButtonType.pushOnPushOff](pushonpushoff.md): A button that switches between on and off states with each click.
- [NSButton.ButtonType.onOff](onoff.md): A button that switches between a normal and emphasized bezel on each click.
- [NSButton.ButtonType.toggle](toggle.md): A button that switches between its normal and alternate content on each click.
- [NSButton.ButtonType.radio](radio.md): A button that displays a single selected value from group of possible choices.
- [NSButton.ButtonType.accelerator](accelerator.md): A button that sends repeating actions as pressure changes occur.
- [NSButton.ButtonType.multiLevelAccelerator](multilevelaccelerator.md): A button that allows for a configurable number of stepped pressure levels and provides tactile feedback as the user reaches each step.

# NSButtonTypeSwitch (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

A standard checkbox button.

## Declaration

```objectivec
NSButtonTypeSwitch
```

<a id="Discussion"></a>

## Discussion

A switch button provides the same toggling behavior as a [NSButtonTypeToggle](toggle.md) button. In addition to configuring that behavior, this button type configures [bordered](../isbordered.md) to [false](https://developer.apple.com/documentation/swift/false) and provides a standard checkbox image.

Checkboxes are ideal for controlling a Boolean state within your application. The mixed state of a checkbox, enabled through the [allowsMixedState](../allowsmixedstate.md) property, is useful for summarizing multiple Boolean states of varying values.

This option corresponds to the Switch type in Interface Builder’s Attributes inspector.

## See Also

### Configuring Button Behavior

- [NSButtonTypeMomentaryPushIn](momentarypushin.md): A button that illuminates when the user clicks it.
- [NSButtonTypeMomentaryLight](momentarylight.md): A button that displays a highlight when the user clicks it and returns to its normal state when the user releases it.
- [NSButtonTypeMomentaryChange](momentarychange.md): A button that displays its alternate content when clicked and returns to its normal content when the user releases it.
- [NSButtonTypePushOnPushOff](pushonpushoff.md): A button that switches between on and off states with each click.
- [NSButtonTypeOnOff](onoff.md): A button that switches between a normal and emphasized bezel on each click.
- [NSButtonTypeToggle](toggle.md): A button that switches between its normal and alternate content on each click.
- [NSButtonTypeRadio](radio.md): A button that displays a single selected value from group of possible choices.
- [NSButtonTypeAccelerator](accelerator.md): A button that sends repeating actions as pressure changes occur.
- [NSButtonTypeMultiLevelAccelerator](multilevelaccelerator.md): A button that allows for a configurable number of stepped pressure levels and provides tactile feedback as the user reaches each step.
