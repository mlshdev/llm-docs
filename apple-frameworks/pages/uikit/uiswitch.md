> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiswitch](https://developer.apple.com/documentation/uikit/uiswitch)

# UISwitch (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A control that offers a binary choice, such as on/off.

## Declaration

```swift
@MainActor class UISwitch
```

## Mentioned In

- [Attaching gesture recognizers to UIKit controls](attaching-gesture-recognizers-to-uikit-controls.md)
- [Choosing a user interface idiom for your Mac app](choosing-a-user-interface-idiom-for-your-mac-app.md)
- [Displaying a checkbox in your Mac app built with Mac Catalyst](displaying-a-checkbox-in-your-mac-app-built-with-mac-catalyst.md)

<a id="overview"></a>

## Overview

The [UISwitch](uiswitch.md) class declares a property and a method to control its on/off state. When a person manipulates the switch control (“flips” it), it triggers the [valueChanged](uicontrol/event/valuechanged.md) event.

You can customize the appearance of the switch by changing the color used to tint the switch when it’s on or off.

For information about basic view behaviors, see [View Programming Guide for iOS](https://developer.apple.com/library/archive/documentation/WindowsViews/Conceptual/ViewPG_iPhoneOS/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009503).

## Topics

### Creating a switch

- [init(frame:)](uiswitch/init%28frame_%29.md): Creates a switch control.
- [init(coder:)](uiswitch/init%28coder_%29.md): Creates a switch control from data in an unarchiver.

### Setting the on/off state

- [isOn](uiswitch/ison.md): A Boolean value that determines whether the switch is in the on or off position.
- [setOn(\_:animated:)](uiswitch/seton%28__animated_%29.md): Sets the state of the switch to the on or off position, optionally animating the transition.

### Setting the display style

- [Displaying a checkbox in your Mac app built with Mac Catalyst](displaying-a-checkbox-in-your-mac-app-built-with-mac-catalyst.md): Present a switch control as a Mac-style checkbox when your app runs in the Mac user interface idiom.
- [preferredStyle](uiswitch/preferredstyle.md): The preferred display style for the switch.
- [style](uiswitch/style-swift.property.md): The display style for the switch.
- [UISwitch.Style](uiswitch/style-swift.enum.md): Styles that determine the appearance of the switch.
- [title](uiswitch/title.md): The title displayed next to a checkbox-style switch.

### Customizing the appearance of the switch

- [onTintColor](uiswitch/ontintcolor.md): The color used to tint the appearance of the switch when it’s in the on position.
- [thumbTintColor](uiswitch/thumbtintcolor.md): The color used to tint the appearance of the thumb.

### Deprecated

- [onImage](uiswitch/onimage.md): The image displayed when the switch is in the on position.
- [offImage](uiswitch/offimage.md): The image displayed when the switch is in the off position.

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
- [UIStepper](uistepper.md): A control for incrementing or decrementing a value.

# UISwitch (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A control that offers a binary choice, such as on/off.

## Declaration

```objectivec
@interface UISwitch : UIControl
```

## Mentioned In

- [Attaching gesture recognizers to UIKit controls](attaching-gesture-recognizers-to-uikit-controls.md)
- [Choosing a user interface idiom for your Mac app](choosing-a-user-interface-idiom-for-your-mac-app.md)
- [Displaying a checkbox in your Mac app built with Mac Catalyst](displaying-a-checkbox-in-your-mac-app-built-with-mac-catalyst.md)

<a id="overview"></a>

## Overview

The [UISwitch](uiswitch.md) class declares a property and a method to control its on/off state. When a person manipulates the switch control (“flips” it), it triggers the [UIControlEventValueChanged](uicontrol/event/valuechanged.md) event.

You can customize the appearance of the switch by changing the color used to tint the switch when it’s on or off.

For information about basic view behaviors, see [View Programming Guide for iOS](https://developer.apple.com/library/archive/documentation/WindowsViews/Conceptual/ViewPG_iPhoneOS/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009503).

## Topics

### Creating a switch

- [initWithFrame:](uiswitch/init%28frame_%29.md): Creates a switch control.
- [initWithCoder:](uiswitch/init%28coder_%29.md): Creates a switch control from data in an unarchiver.

### Setting the on/off state

- [on](uiswitch/ison.md): A Boolean value that determines whether the switch is in the on or off position.
- [setOn:animated:](uiswitch/seton%28__animated_%29.md): Sets the state of the switch to the on or off position, optionally animating the transition.

### Setting the display style

- [Displaying a checkbox in your Mac app built with Mac Catalyst](displaying-a-checkbox-in-your-mac-app-built-with-mac-catalyst.md): Present a switch control as a Mac-style checkbox when your app runs in the Mac user interface idiom.
- [preferredStyle](uiswitch/preferredstyle.md): The preferred display style for the switch.
- [style](uiswitch/style-swift.property.md): The display style for the switch.
- [UISwitchStyle](uiswitch/style-swift.enum.md): Styles that determine the appearance of the switch.
- [title](uiswitch/title.md): The title displayed next to a checkbox-style switch.

### Customizing the appearance of the switch

- [onTintColor](uiswitch/ontintcolor.md): The color used to tint the appearance of the switch when it’s in the on position.
- [thumbTintColor](uiswitch/thumbtintcolor.md): The color used to tint the appearance of the thumb.

### Deprecated

- [onImage](uiswitch/onimage.md): The image displayed when the switch is in the on position.
- [offImage](uiswitch/offimage.md): The image displayed when the switch is in the off position.

## Relationships

### Inherits From

- [UIControl](uicontrol.md)

### Conforms To

- [NSCoding](../foundation/nscoding.md)

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
- [UIStepper](uistepper.md): A control for incrementing or decrementing a value.
