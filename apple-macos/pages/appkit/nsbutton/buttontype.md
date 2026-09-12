> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbutton/buttontype](https://developer.apple.com/documentation/appkit/nsbutton/buttontype)

# NSButton.ButtonType (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Button types that you can specify using [setButtonType(\_:)](../nsbuttoncell/setbuttontype%28__%29.md).

## Declaration

```swift
enum ButtonType
```

<a id="overview"></a>

## Overview

For more information, see [setButtonType(\_:)](../nsbuttoncell/setbuttontype%28__%29.md).

## Topics

### Configuring Button Behavior

- [NSButton.ButtonType.momentaryPushIn](buttontype/momentarypushin.md): A button that illuminates when the user clicks it.
- [NSButton.ButtonType.momentaryLight](buttontype/momentarylight.md): A button that displays a highlight when the user clicks it and returns to its normal state when the user releases it.
- [NSButton.ButtonType.momentaryChange](buttontype/momentarychange.md): A button that displays its alternate content when clicked and returns to its normal content when the user releases it.
- [NSButton.ButtonType.pushOnPushOff](buttontype/pushonpushoff.md): A button that switches between on and off states with each click.
- [NSButton.ButtonType.onOff](buttontype/onoff.md): A button that switches between a normal and emphasized bezel on each click.
- [NSButton.ButtonType.toggle](buttontype/toggle.md): A button that switches between its normal and alternate content on each click.
- [NSButton.ButtonType.switch](buttontype/switch.md): A standard checkbox button.
- [NSButton.ButtonType.radio](buttontype/radio.md): A button that displays a single selected value from group of possible choices.
- [NSButton.ButtonType.accelerator](buttontype/accelerator.md): A button that sends repeating actions as pressure changes occur.
- [NSButton.ButtonType.multiLevelAccelerator](buttontype/multilevelaccelerator.md): A button that allows for a configurable number of stepped pressure levels and provides tactile feedback as the user reaches each step.

### Initializers

- [init(rawValue:)](buttontype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [NSButton.BezelStyle](bezelstyle-swift.enum.md): The set of bezel styles to style buttons in your app.
- [NSButton.GradientType](gradienttype.md): Deprecated. Specify the gradients used by the [gradientType](../nsbuttoncell/gradienttype.md) property.

# NSButtonType (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Button types that you can specify using [setButtonType:](../nsbuttoncell/setbuttontype%28__%29.md).

## Declaration

```objectivec
enum NSButtonType : NSUInteger;
```

<a id="overview"></a>

## Overview

For more information, see [setButtonType:](../nsbuttoncell/setbuttontype%28__%29.md).

## Topics

### Configuring Button Behavior

- [NSButtonTypeMomentaryPushIn](buttontype/momentarypushin.md): A button that illuminates when the user clicks it.
- [NSButtonTypeMomentaryLight](buttontype/momentarylight.md): A button that displays a highlight when the user clicks it and returns to its normal state when the user releases it.
- [NSButtonTypeMomentaryChange](buttontype/momentarychange.md): A button that displays its alternate content when clicked and returns to its normal content when the user releases it.
- [NSButtonTypePushOnPushOff](buttontype/pushonpushoff.md): A button that switches between on and off states with each click.
- [NSButtonTypeOnOff](buttontype/onoff.md): A button that switches between a normal and emphasized bezel on each click.
- [NSButtonTypeToggle](buttontype/toggle.md): A button that switches between its normal and alternate content on each click.
- [NSButtonTypeSwitch](buttontype/switch.md): A standard checkbox button.
- [NSButtonTypeRadio](buttontype/radio.md): A button that displays a single selected value from group of possible choices.
- [NSButtonTypeAccelerator](buttontype/accelerator.md): A button that sends repeating actions as pressure changes occur.
- [NSButtonTypeMultiLevelAccelerator](buttontype/multilevelaccelerator.md): A button that allows for a configurable number of stepped pressure levels and provides tactile feedback as the user reaches each step.

### Deprecated Button Types

- [NSMomentaryLightButton](../nsmomentarylightbutton.md): Deprecated. When the button is clicked (on state), it appears illuminated. If the button has borders, it may also appear recessed. When the button is released, it returns to its normal (off) state.
- [NSPushOnPushOffButton](../nspushonpushoffbutton.md): Deprecated. When the button is clicked (on state), it appears illuminated. If the button has borders, it may also appear recessed. A second click returns it to its normal (off) state.
- [NSToggleButton](../nstogglebutton.md): Deprecated. After the first click, the button displays its alternate image or title (on state); a second click returns the button to its normal (off) state.
- [NSSwitchButton](../nsswitchbutton.md): Deprecated. This style is a variant of `NSToggleButton` that has no border and is typically used to represent a checkbox.
- [NSRadioButton](../nsradiobutton.md): Deprecated. This style is similar to `NSSwitchButton`, but it is used to constrain a selection to a single element from several elements.
- [NSMomentaryChangeButton](../nsmomentarychangebutton.md): Deprecated. When the button is clicked, the alternate (on state) image and alternate title are displayed.
- [NSOnOffButton](../nsonoffbutton.md): Deprecated. The first click highlights the button; a second click returns it to the normal (unhighlighted) state.
- [NSAcceleratorButton](../nsacceleratorbutton.md): Deprecated. A button that sends an action when the user first clicks the button and continues sending actions until the user releases pressure entirely.
- [NSMultiLevelAcceleratorButton](../nsmultilevelacceleratorbutton.md): Deprecated. A multilevel accelerator button is a variation of a normal accelerator button that allows for a configurable number of stepped pressure levels. As each one is reached, the user receives light tactile feedback and an action is sent.
- [NSMomentaryPushInButton](../nsmomentarypushinbutton.md): Deprecated. When the user clicks the button (on state), the button appears illuminated.
- [NSMomentaryPushButton](../nsmomentarypushbutton.md): Deprecated. When the button is clicked (on state), it appears illuminated. If the button has a bordered, it may also appear recessed. When the button is released, it returns to its normal (off) state.
- [NSMomentaryLight](../nsmomentarylight.md): Deprecated. When the button is clicked (on state), it appears illuminated.

## See Also

### Constants

- [NSBezelStyle](bezelstyle-swift.enum.md): The set of bezel styles to style buttons in your app.
- [NSGradientType](gradienttype.md): Deprecated. Specify the gradients used by the [gradientType](../nsbuttoncell/gradienttype.md) property.
