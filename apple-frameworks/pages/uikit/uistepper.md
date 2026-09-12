> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistepper](https://developer.apple.com/documentation/uikit/uistepper)

# UIStepper (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A control for incrementing or decrementing a value.

## Declaration

```swift
@MainActor class UIStepper
```

## Mentioned In

- [Attaching gesture recognizers to UIKit controls](attaching-gesture-recognizers-to-uikit-controls.md)

<a id="overview"></a>

## Overview

By default, pressing and holding a stepper’s button increments or decrements the stepper’s value repeatedly. The rate of change depends on how long the user continues pressing the control. To turn off this behavior, set the [autorepeat](uistepper/autorepeat.md) property to [false](https://developer.apple.com/documentation/swift/false).

The maximum value must be greater than or equal to the minimum value. If you set a maximum or minimum value that would break this invariant, both values are set to the new value. For example, if the minimum value is 200 and you set a maximum value of 100, then both the minimum and maximum become 200.

## Topics

### Configuring the stepper

- [isContinuous](uistepper/iscontinuous.md): A Boolean value that determines whether to send value changes during user interaction or after user interaction ends.
- [autorepeat](uistepper/autorepeat.md): A Boolean value that determines whether to repeatedly change the stepper’s value as the user presses and holds a stepper button.
- [wraps](uistepper/wraps.md): A Boolean value that determines whether the stepper can wrap its value to the minimum or maximum value when incrementing and decrementing the value.
- [minimumValue](uistepper/minimumvalue.md): The lowest possible numeric value for the stepper.
- [maximumValue](uistepper/maximumvalue.md): The highest possible numeric value for the stepper.
- [stepValue](uistepper/stepvalue.md): The step, or increment, value for the stepper.

### Accessing the stepper’s value

- [value](uistepper/value.md): The numeric value of the stepper.

### Customizing appearance

- [backgroundImage(for:)](uistepper/backgroundimage%28for_%29.md): Returns the background image associated with the specified control state.
- [setBackgroundImage(\_:for:)](uistepper/setbackgroundimage%28__for_%29.md): Sets the background image for the control when it’s in the specified state.
- [decrementImage(for:)](uistepper/decrementimage%28for_%29.md): Returns the image used for the decrement glyph of the control.
- [setDecrementImage(\_:for:)](uistepper/setdecrementimage%28__for_%29.md): Sets the image to use for the decrement glyph of the control.
- [dividerImage(forLeftSegmentState:rightSegmentState:)](uistepper/dividerimage%28forleftsegmentstate_rightsegmentstate_%29.md): Returns the divider image for the given combination of left and right states.
- [setDividerImage(\_:forLeftSegmentState:rightSegmentState:)](uistepper/setdividerimage%28__forleftsegmentstate_rightsegmentstate_%29.md): Sets the image to use for the given combination of left and right states.
- [incrementImage(for:)](uistepper/incrementimage%28for_%29.md): Returns the image used for the increment glyph of the control.
- [setIncrementImage(\_:for:)](uistepper/setincrementimage%28__for_%29.md): Sets the image to use for the increment glyph of the control.

## Relationships

### Inherits From

- [UIControl](uicontrol.md)

### Conforms To

- [CALayerDelegate](../quartzcore/calayerdelegate.md)
- [CLBodyIdentifiable](../corelocation/clbodyidentifiable.md)
- [CMBodyIdentifiable](../coremotion/cmbodyidentifiable.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIAccessibilityIdentification](uiaccessibilityidentification.md)
- [UIActivityItemsConfigurationProviding](uiactivityitemsconfigurationproviding.md)
- [UIAppearance](uiappearance.md)
- [UIAppearanceContainer](uiappearancecontainer.md)
- [UIContextMenuInteractionDelegate](uicontextmenuinteractiondelegate.md)
- [UICoordinateSpace](uicoordinatespace.md)
- [UIDynamicItem](uidynamicitem.md)
- [UIFocusEnvironment](uifocusenvironment.md)
- [UIFocusItem](uifocusitem.md)
- [UIFocusItemContainer](uifocusitemcontainer.md)
- [UILargeContentViewerItem](uilargecontentvieweritem.md)
- [UIPasteConfigurationSupporting](uipasteconfigurationsupporting.md)
- [UIPopoverPresentationControllerSourceItem](uipopoverpresentationcontrollersourceitem.md)
- [UIResponderStandardEditActions](uiresponderstandardeditactions.md)
- [UITraitChangeObservable](uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](uitraitenvironment.md)
- [UIUserActivityRestoring](uiuseractivityrestoring.md)

## See Also

### Controls

- [Responding to control-based events using target-action](responding-to-control-based-events-using-target-action.md): Handle user input by connecting buttons, sliders, and other controls to your app’s code using the target-action design pattern.
- [UIControl](uicontrol.md): The base class for controls, which are visual elements that convey a specific action or intention in response to user interactions.
- [UIButton](uibutton.md): A control that executes your custom code in response to user interactions.
- [UIColorWell](uicolorwell.md): A control that displays a color picker.
- [UIDatePicker](uidatepicker.md): A control for inputting date and time values.
- [UIPageControl](uipagecontrol.md): A control that displays a horizontal series of dots, each of which corresponds to a page in the app’s document or other data-model entity.
- [UISegmentedControl](uisegmentedcontrol.md): A horizontal control that consists of multiple segments, each segment functioning as a discrete button.
- [UISlider](uislider.md): A control for selecting a single value from a continuous range of values.
- [UISwitch](uiswitch.md): A control that offers a binary choice, such as on/off.

# UIStepper (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A control for incrementing or decrementing a value.

## Declaration

```objectivec
@interface UIStepper : UIControl
```

## Mentioned In

- [Attaching gesture recognizers to UIKit controls](attaching-gesture-recognizers-to-uikit-controls.md)

<a id="overview"></a>

## Overview

By default, pressing and holding a stepper’s button increments or decrements the stepper’s value repeatedly. The rate of change depends on how long the user continues pressing the control. To turn off this behavior, set the [autorepeat](uistepper/autorepeat.md) property to [false](https://developer.apple.com/documentation/swift/false).

The maximum value must be greater than or equal to the minimum value. If you set a maximum or minimum value that would break this invariant, both values are set to the new value. For example, if the minimum value is 200 and you set a maximum value of 100, then both the minimum and maximum become 200.

## Topics

### Configuring the stepper

- [continuous](uistepper/iscontinuous.md): A Boolean value that determines whether to send value changes during user interaction or after user interaction ends.
- [autorepeat](uistepper/autorepeat.md): A Boolean value that determines whether to repeatedly change the stepper’s value as the user presses and holds a stepper button.
- [wraps](uistepper/wraps.md): A Boolean value that determines whether the stepper can wrap its value to the minimum or maximum value when incrementing and decrementing the value.
- [minimumValue](uistepper/minimumvalue.md): The lowest possible numeric value for the stepper.
- [maximumValue](uistepper/maximumvalue.md): The highest possible numeric value for the stepper.
- [stepValue](uistepper/stepvalue.md): The step, or increment, value for the stepper.

### Accessing the stepper’s value

- [value](uistepper/value.md): The numeric value of the stepper.

### Customizing appearance

- [backgroundImageForState:](uistepper/backgroundimage%28for_%29.md): Returns the background image associated with the specified control state.
- [setBackgroundImage:forState:](uistepper/setbackgroundimage%28__for_%29.md): Sets the background image for the control when it’s in the specified state.
- [decrementImageForState:](uistepper/decrementimage%28for_%29.md): Returns the image used for the decrement glyph of the control.
- [setDecrementImage:forState:](uistepper/setdecrementimage%28__for_%29.md): Sets the image to use for the decrement glyph of the control.
- [dividerImageForLeftSegmentState:rightSegmentState:](uistepper/dividerimage%28forleftsegmentstate_rightsegmentstate_%29.md): Returns the divider image for the given combination of left and right states.
- [setDividerImage:forLeftSegmentState:rightSegmentState:](uistepper/setdividerimage%28__forleftsegmentstate_rightsegmentstate_%29.md): Sets the image to use for the given combination of left and right states.
- [incrementImageForState:](uistepper/incrementimage%28for_%29.md): Returns the image used for the increment glyph of the control.
- [setIncrementImage:forState:](uistepper/setincrementimage%28__for_%29.md): Sets the image to use for the increment glyph of the control.

## Relationships

### Inherits From

- [UIControl](uicontrol.md)

## See Also

### Controls

- [Responding to control-based events using target-action](responding-to-control-based-events-using-target-action.md): Handle user input by connecting buttons, sliders, and other controls to your app’s code using the target-action design pattern.
- [UIControl](uicontrol.md): The base class for controls, which are visual elements that convey a specific action or intention in response to user interactions.
- [UIButton](uibutton.md): A control that executes your custom code in response to user interactions.
- [UIColorWell](uicolorwell.md): A control that displays a color picker.
- [UIDatePicker](uidatepicker.md): A control for inputting date and time values.
- [UIPageControl](uipagecontrol.md): A control that displays a horizontal series of dots, each of which corresponds to a page in the app’s document or other data-model entity.
- [UISegmentedControl](uisegmentedcontrol.md): A horizontal control that consists of multiple segments, each segment functioning as a discrete button.
- [UISlider](uislider.md): A control for selecting a single value from a continuous range of values.
- [UISwitch](uiswitch.md): A control that offers a binary choice, such as on/off.
