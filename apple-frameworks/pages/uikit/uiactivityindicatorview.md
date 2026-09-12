> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityindicatorview](https://developer.apple.com/documentation/uikit/uiactivityindicatorview)

# UIActivityIndicatorView (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A view that shows that a task is in progress.

## Declaration

```swift
@MainActor class UIActivityIndicatorView
```

<a id="overview"></a>

## Overview

You control when an activity indicator animates by calling the [startAnimating()](uiactivityindicatorview/startanimating%28%29.md) and [stopAnimating()](uiactivityindicatorview/stopanimating%28%29.md) methods. To automatically hide the activity indicator when animation stops, set the [hidesWhenStopped](uiactivityindicatorview/hideswhenstopped.md) property to [true](https://developer.apple.com/documentation/swift/true).

You can set the color of the activity indicator by using the [color](uiactivityindicatorview/color.md) property.

## Topics

### Creating an activity indicator

- [init(style:)](uiactivityindicatorview/init%28style_%29.md): Creates an activity indicator.
- [init(frame:)](uiactivityindicatorview/init%28frame_%29.md): Creates an activity indicator with the specified frame rectangle.
- [init(coder:)](uiactivityindicatorview/init%28coder_%29.md): Creates an activity indicator from data in an unarchiver.

### Managing an activity indicator

- [startAnimating()](uiactivityindicatorview/startanimating%28%29.md): Starts the animation of the progress indicator.
- [stopAnimating()](uiactivityindicatorview/stopanimating%28%29.md): Stops the animation of the progress indicator.
- [isAnimating](uiactivityindicatorview/isanimating.md): A Boolean value indicating whether the activity indicator is currently running its animation.
- [hidesWhenStopped](uiactivityindicatorview/hideswhenstopped.md): A Boolean value that controls whether the activity indicator is hidden when the animation is stopped.

### Configuring the activity indicator appearance

- [style](uiactivityindicatorview/style-swift.property.md): The basic appearance of the activity indicator.
- [color](uiactivityindicatorview/color.md): The color of the activity indicator.

### Constants

- [UIActivityIndicatorView.Style](uiactivityindicatorview/style-swift.enum.md): The visual style of the progress indicator.

### Initializers

- [init(activityIndicatorStyle:)](uiactivityindicatorview/init%28activityindicatorstyle_%29.md)

## Relationships

### Inherits From

- [UIView](uiview.md)

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

### Content views

- [UICalendarView](uicalendarview.md): A view that displays a calendar with date-specific decorations, and provides for user selection of a single date or multiple dates.
- [UIContentUnavailableView](uicontentunavailableview.md): A view that indicates there’s no content to display.
- [UIImageView](uiimageview.md): A view that displays a single image or a sequence of animated images in your interface.
- [UIPickerView](uipickerview.md): A view that uses a spinning-wheel or slot-machine metaphor to show one or more sets of values.
- [UIProgressView](uiprogressview.md): A view that depicts the progress of a task over time.

# UIActivityIndicatorView (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A view that shows that a task is in progress.

## Declaration

```objectivec
@interface UIActivityIndicatorView : UIView
```

<a id="overview"></a>

## Overview

You control when an activity indicator animates by calling the [startAnimating](uiactivityindicatorview/startanimating%28%29.md) and [stopAnimating](uiactivityindicatorview/stopanimating%28%29.md) methods. To automatically hide the activity indicator when animation stops, set the [hidesWhenStopped](uiactivityindicatorview/hideswhenstopped.md) property to [true](https://developer.apple.com/documentation/swift/true).

You can set the color of the activity indicator by using the [color](uiactivityindicatorview/color.md) property.

## Topics

### Creating an activity indicator

- [initWithActivityIndicatorStyle:](uiactivityindicatorview/init%28style_%29.md): Creates an activity indicator.
- [initWithFrame:](uiactivityindicatorview/init%28frame_%29.md): Creates an activity indicator with the specified frame rectangle.
- [initWithCoder:](uiactivityindicatorview/init%28coder_%29.md): Creates an activity indicator from data in an unarchiver.

### Managing an activity indicator

- [startAnimating](uiactivityindicatorview/startanimating%28%29.md): Starts the animation of the progress indicator.
- [stopAnimating](uiactivityindicatorview/stopanimating%28%29.md): Stops the animation of the progress indicator.
- [animating](uiactivityindicatorview/isanimating.md): A Boolean value indicating whether the activity indicator is currently running its animation.
- [hidesWhenStopped](uiactivityindicatorview/hideswhenstopped.md): A Boolean value that controls whether the activity indicator is hidden when the animation is stopped.

### Configuring the activity indicator appearance

- [activityIndicatorViewStyle](uiactivityindicatorview/style-swift.property.md): The basic appearance of the activity indicator.
- [color](uiactivityindicatorview/color.md): The color of the activity indicator.

### Constants

- [UIActivityIndicatorViewStyle](uiactivityindicatorview/style-swift.enum.md): The visual style of the progress indicator.

## Relationships

### Inherits From

- [UIView](uiview.md)

### Conforms To

- [NSCoding](../foundation/nscoding.md)

## See Also

### Content views

- [UICalendarView](uicalendarview.md): A view that displays a calendar with date-specific decorations, and provides for user selection of a single date or multiple dates.
- [UIContentUnavailableView](uicontentunavailableview.md): A view that indicates there’s no content to display.
- [UIImageView](uiimageview.md): A view that displays a single image or a sequence of animated images in your interface.
- [UIPickerView](uipickerview.md): A view that uses a spinning-wheel or slot-machine metaphor to show one or more sets of values.
- [UIProgressView](uiprogressview.md): A view that depicts the progress of a task over time.
