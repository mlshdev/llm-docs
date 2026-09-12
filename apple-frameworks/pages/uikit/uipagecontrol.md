> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipagecontrol](https://developer.apple.com/documentation/uikit/uipagecontrol)

# UIPageControl (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A control that displays a horizontal series of dots, each of which corresponds to a page in the app’s document or other data-model entity.

## Declaration

```swift
@MainActor class UIPageControl
```

## Mentioned In

- [Attaching gesture recognizers to UIKit controls](attaching-gesture-recognizers-to-uikit-controls.md)
- [Choosing a user interface idiom for your Mac app](choosing-a-user-interface-idiom-for-your-mac-app.md)

<a id="overview"></a>

## Overview

For an example of a page control, see the Weather app when it’s configured to display information for more than one location.

When a user taps a page control to move to the next or previous page, the control sends the [valueChanged](uicontrol/event/valuechanged.md) event for handling by the delegate. The delegate can then evaluate the [currentPage](uipagecontrol/currentpage.md) property to determine the page to display. The page control advances only one page in either direction. The currently viewed page is indicated by a white dot. Depending on the device, a certain number of dots are displayed on the screen before they’re clipped.

## Topics

### Managing pages

- [currentPage](uipagecontrol/currentpage.md): The current page, shown by the page control as a white dot.
- [numberOfPages](uipagecontrol/numberofpages.md): The number of pages the receiver shows (as dots).
- [hidesForSinglePage](uipagecontrol/hidesforsinglepage.md): A Boolean value that controls whether the page control is hidden when there is only one page.
- [defersCurrentPageDisplay](uipagecontrol/deferscurrentpagedisplay.md): Deprecated. A Boolean value that controls when the current page is displayed.
- [updateCurrentPageDisplay()](uipagecontrol/updatecurrentpagedisplay%28%29.md): Deprecated. Updates the page indicator to the current page.

### Coloring the page indicator

- [pageIndicatorTintColor](uipagecontrol/pageindicatortintcolor.md): The tint color to apply to the page indicator.
- [currentPageIndicatorTintColor](uipagecontrol/currentpageindicatortintcolor.md): The tint color to apply to the current page indicator.

### Managing the indicator images

- [preferredIndicatorImage](uipagecontrol/preferredindicatorimage.md): The preferred image for indicators.
- [indicatorImage(forPage:)](uipagecontrol/indicatorimage%28forpage_%29.md): Returns the override image for the indicator of the specified page.
- [setIndicatorImage(\_:forPage:)](uipagecontrol/setindicatorimage%28__forpage_%29.md): Registers an override image for the indicator of the specified page.
- [preferredCurrentPageIndicatorImage](uipagecontrol/preferredcurrentpageindicatorimage.md): The preferred image for the current page indicator.
- [currentPageIndicatorImage(forPage:)](uipagecontrol/currentpageindicatorimage%28forpage_%29.md): Returns the override image for the current page indicator of the specified page.
- [setCurrentPageIndicatorImage(\_:forPage:)](uipagecontrol/setcurrentpageindicatorimage%28__forpage_%29.md): Registers an override image for the current page indicator of the specified page.

### Customizing the layout direction

- [direction](uipagecontrol/direction-swift.property.md): The layout direction of the page indicators.
- [UIPageControl.Direction](uipagecontrol/direction-swift.enum.md): Decribes the layout direction of a page control’s indicators.

### Customizing the background style

- [backgroundStyle](uipagecontrol/backgroundstyle-swift.property.md): The preferred background style.
- [UIPageControl.BackgroundStyle](uipagecontrol/backgroundstyle-swift.enum.md): Constants that define the background styles of the page control.

### Customizing the interaction state

- [allowsContinuousInteraction](uipagecontrol/allowscontinuousinteraction.md): A Boolean value that determines whether the page control allows continuous interaction.
- [interactionState](uipagecontrol/interactionstate-swift.property.md): The interaction state when the current page changes.
- [UIPageControl.InteractionState](uipagecontrol/interactionstate-swift.enum.md): Constants that define the interaction states of the page control.

### Calculating the control size

- [size(forNumberOfPages:)](uipagecontrol/size%28fornumberofpages_%29.md): Returns the size the receiver’s bounds should be to accommodate the given number of pages.

### Configuring page progress

- [progress](uipagecontrol/progress.md): An object that defines the progress of the page control. Default is nil.
- [UIPageControlProgress](uipagecontrolprogress.md)
- [UIPageControlTimerProgress](uipagecontroltimerprogress.md)
- [UIPageControlProgressDelegate](uipagecontrolprogressdelegate.md)
- [UIPageControlTimerProgressDelegate](uipagecontroltimerprogressdelegate.md)

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
- [UISegmentedControl](uisegmentedcontrol.md): A horizontal control that consists of multiple segments, each segment functioning as a discrete button.
- [UISlider](uislider.md): A control for selecting a single value from a continuous range of values.
- [UIStepper](uistepper.md): A control for incrementing or decrementing a value.
- [UISwitch](uiswitch.md): A control that offers a binary choice, such as on/off.

# UIPageControl (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A control that displays a horizontal series of dots, each of which corresponds to a page in the app’s document or other data-model entity.

## Declaration

```objectivec
@interface UIPageControl : UIControl
```

## Mentioned In

- [Attaching gesture recognizers to UIKit controls](attaching-gesture-recognizers-to-uikit-controls.md)
- [Choosing a user interface idiom for your Mac app](choosing-a-user-interface-idiom-for-your-mac-app.md)

<a id="overview"></a>

## Overview

For an example of a page control, see the Weather app when it’s configured to display information for more than one location.

When a user taps a page control to move to the next or previous page, the control sends the [UIControlEventValueChanged](uicontrol/event/valuechanged.md) event for handling by the delegate. The delegate can then evaluate the [currentPage](uipagecontrol/currentpage.md) property to determine the page to display. The page control advances only one page in either direction. The currently viewed page is indicated by a white dot. Depending on the device, a certain number of dots are displayed on the screen before they’re clipped.

## Topics

### Managing pages

- [currentPage](uipagecontrol/currentpage.md): The current page, shown by the page control as a white dot.
- [numberOfPages](uipagecontrol/numberofpages.md): The number of pages the receiver shows (as dots).
- [hidesForSinglePage](uipagecontrol/hidesforsinglepage.md): A Boolean value that controls whether the page control is hidden when there is only one page.
- [defersCurrentPageDisplay](uipagecontrol/deferscurrentpagedisplay.md): Deprecated. A Boolean value that controls when the current page is displayed.
- [updateCurrentPageDisplay](uipagecontrol/updatecurrentpagedisplay%28%29.md): Deprecated. Updates the page indicator to the current page.

### Coloring the page indicator

- [pageIndicatorTintColor](uipagecontrol/pageindicatortintcolor.md): The tint color to apply to the page indicator.
- [currentPageIndicatorTintColor](uipagecontrol/currentpageindicatortintcolor.md): The tint color to apply to the current page indicator.

### Managing the indicator images

- [preferredIndicatorImage](uipagecontrol/preferredindicatorimage.md): The preferred image for indicators.
- [indicatorImageForPage:](uipagecontrol/indicatorimage%28forpage_%29.md): Returns the override image for the indicator of the specified page.
- [setIndicatorImage:forPage:](uipagecontrol/setindicatorimage%28__forpage_%29.md): Registers an override image for the indicator of the specified page.
- [preferredCurrentPageIndicatorImage](uipagecontrol/preferredcurrentpageindicatorimage.md): The preferred image for the current page indicator.
- [currentPageIndicatorImageForPage:](uipagecontrol/currentpageindicatorimage%28forpage_%29.md): Returns the override image for the current page indicator of the specified page.
- [setCurrentPageIndicatorImage:forPage:](uipagecontrol/setcurrentpageindicatorimage%28__forpage_%29.md): Registers an override image for the current page indicator of the specified page.

### Customizing the layout direction

- [direction](uipagecontrol/direction-swift.property.md): The layout direction of the page indicators.
- [UIPageControlDirection](uipagecontrol/direction-swift.enum.md): Decribes the layout direction of a page control’s indicators.

### Customizing the background style

- [backgroundStyle](uipagecontrol/backgroundstyle-swift.property.md): The preferred background style.
- [UIPageControlBackgroundStyle](uipagecontrol/backgroundstyle-swift.enum.md): Constants that define the background styles of the page control.

### Customizing the interaction state

- [allowsContinuousInteraction](uipagecontrol/allowscontinuousinteraction.md): A Boolean value that determines whether the page control allows continuous interaction.
- [interactionState](uipagecontrol/interactionstate-swift.property.md): The interaction state when the current page changes.
- [UIPageControlInteractionState](uipagecontrol/interactionstate-swift.enum.md): Constants that define the interaction states of the page control.

### Calculating the control size

- [sizeForNumberOfPages:](uipagecontrol/size%28fornumberofpages_%29.md): Returns the size the receiver’s bounds should be to accommodate the given number of pages.

### Configuring page progress

- [progress](uipagecontrol/progress.md): An object that defines the progress of the page control. Default is nil.
- [UIPageControlProgress](uipagecontrolprogress.md)
- [UIPageControlTimerProgress](uipagecontroltimerprogress.md)
- [UIPageControlProgressDelegate](uipagecontrolprogressdelegate.md)
- [UIPageControlTimerProgressDelegate](uipagecontroltimerprogressdelegate.md)

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
- [UISegmentedControl](uisegmentedcontrol.md): A horizontal control that consists of multiple segments, each segment functioning as a discrete button.
- [UISlider](uislider.md): A control for selecting a single value from a continuous range of values.
- [UIStepper](uistepper.md): A control for incrementing or decrementing a value.
- [UISwitch](uiswitch.md): A control that offers a binary choice, such as on/off.
