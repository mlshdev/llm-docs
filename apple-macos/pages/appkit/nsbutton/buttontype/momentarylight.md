> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbutton/buttontype/momentarylight](https://developer.apple.com/documentation/appkit/nsbutton/buttontype/momentarylight)

# NSButton.ButtonType.momentaryLight (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

A button that displays a highlight when the user clicks it and returns to its normal state when the user releases it.

## Declaration

```swift
case momentaryLight
```

<a id="Discussion"></a>

## Discussion

When the value of [isHighlighted](../../nscontrol/ishighlighted.md) is [true](https://developer.apple.com/documentation/swift/true), the button provides a visual indication of the highlight in its drawing. It might accomplish this indication by modifying the appearance of its content, its bezel, or both.

This type of button is best for triggering actions because it doesn’t show its [state](../state.md); it always displays its normal image or title.

This option corresponds to the Momentary Light type in Interface Builder’s Attributes inspector.

## See Also

### Configuring Button Behavior

- [NSButton.ButtonType.momentaryPushIn](momentarypushin.md): A button that illuminates when the user clicks it.
- [NSButton.ButtonType.momentaryChange](momentarychange.md): A button that displays its alternate content when clicked and returns to its normal content when the user releases it.
- [NSButton.ButtonType.pushOnPushOff](pushonpushoff.md): A button that switches between on and off states with each click.
- [NSButton.ButtonType.onOff](onoff.md): A button that switches between a normal and emphasized bezel on each click.
- [NSButton.ButtonType.toggle](toggle.md): A button that switches between its normal and alternate content on each click.
- [NSButton.ButtonType.switch](switch.md): A standard checkbox button.
- [NSButton.ButtonType.radio](radio.md): A button that displays a single selected value from group of possible choices.
- [NSButton.ButtonType.accelerator](accelerator.md): A button that sends repeating actions as pressure changes occur.
- [NSButton.ButtonType.multiLevelAccelerator](multilevelaccelerator.md): A button that allows for a configurable number of stepped pressure levels and provides tactile feedback as the user reaches each step.

# NSButtonTypeMomentaryLight (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

A button that displays a highlight when the user clicks it and returns to its normal state when the user releases it.

## Declaration

```objectivec
NSButtonTypeMomentaryLight
```

<a id="Discussion"></a>

## Discussion

When the value of [highlighted](../../nscontrol/ishighlighted.md) is [true](https://developer.apple.com/documentation/swift/true), the button provides a visual indication of the highlight in its drawing. It might accomplish this indication by modifying the appearance of its content, its bezel, or both.

This type of button is best for triggering actions because it doesn’t show its [state](../state.md); it always displays its normal image or title.

This option corresponds to the Momentary Light type in Interface Builder’s Attributes inspector.

## See Also

### Configuring Button Behavior

- [NSButtonTypeMomentaryPushIn](momentarypushin.md): A button that illuminates when the user clicks it.
- [NSButtonTypeMomentaryChange](momentarychange.md): A button that displays its alternate content when clicked and returns to its normal content when the user releases it.
- [NSButtonTypePushOnPushOff](pushonpushoff.md): A button that switches between on and off states with each click.
- [NSButtonTypeOnOff](onoff.md): A button that switches between a normal and emphasized bezel on each click.
- [NSButtonTypeToggle](toggle.md): A button that switches between its normal and alternate content on each click.
- [NSButtonTypeSwitch](switch.md): A standard checkbox button.
- [NSButtonTypeRadio](radio.md): A button that displays a single selected value from group of possible choices.
- [NSButtonTypeAccelerator](accelerator.md): A button that sends repeating actions as pressure changes occur.
- [NSButtonTypeMultiLevelAccelerator](multilevelaccelerator.md): A button that allows for a configurable number of stepped pressure levels and provides tactile feedback as the user reaches each step.
