> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprogressview](https://developer.apple.com/documentation/uikit/uiprogressview)

# UIProgressView (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A view that depicts the progress of a task over time.

## Declaration

```swift
@MainActor class UIProgressView
```

<a id="overview"></a>

## Overview

The [UIProgressView](uiprogressview.md) class provides properties for managing the style of the progress bar and for getting and setting values that are pinned to the progress of a task.

For an indeterminate progress indicator — or a “spinner” — use an instance of the [UIActivityIndicatorView](uiactivityindicatorview.md) class.

## Topics

### Creating a progress view

- [init(progressViewStyle:)](uiprogressview/init%28progressviewstyle_%29.md): Creates a progress view with the specified style.
- [init(frame:)](uiprogressview/init%28frame_%29.md): Creates a progress view with the specified frame rectangle.
- [init(coder:)](uiprogressview/init%28coder_%29.md): Creates a progress view from data in an unarchiver.

### Managing the progress bar

- [progress](uiprogressview/progress.md): The current progress of the progress view.
- [setProgress(\_:animated:)](uiprogressview/setprogress%28__animated_%29.md): Adjusts the current progress of the progress view, optionally animating the change.
- [observedProgress](uiprogressview/observedprogress.md): The progress object to use for updating the progress view.

### Configuring the progress bar

- [progressViewStyle](uiprogressview/progressviewstyle.md): The current graphical style of the progress view.
- [progressTintColor](uiprogressview/progresstintcolor.md): The color shown for the portion of the progress bar that’s filled.
- [progressImage](uiprogressview/progressimage.md): An image to use for the portion of the progress bar that’s filled.
- [trackTintColor](uiprogressview/tracktintcolor.md): The color shown for the portion of the progress bar that isn’t filled.
- [trackImage](uiprogressview/trackimage.md): An image to use for the portion of the track that isn’t filled.

### Constants

- [UIProgressView.Style](uiprogressview/style.md): The styles permitted for the progress bar.

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

- [UIActivityIndicatorView](uiactivityindicatorview.md): A view that shows that a task is in progress.
- [UICalendarView](uicalendarview.md): A view that displays a calendar with date-specific decorations, and provides for user selection of a single date or multiple dates.
- [UIContentUnavailableView](uicontentunavailableview.md): A view that indicates there’s no content to display.
- [UIImageView](uiimageview.md): A view that displays a single image or a sequence of animated images in your interface.
- [UIPickerView](uipickerview.md): A view that uses a spinning-wheel or slot-machine metaphor to show one or more sets of values.

# UIProgressView (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A view that depicts the progress of a task over time.

## Declaration

```objectivec
@interface UIProgressView : UIView
```

<a id="overview"></a>

## Overview

The [UIProgressView](uiprogressview.md) class provides properties for managing the style of the progress bar and for getting and setting values that are pinned to the progress of a task.

For an indeterminate progress indicator — or a “spinner” — use an instance of the [UIActivityIndicatorView](uiactivityindicatorview.md) class.

## Topics

### Creating a progress view

- [initWithProgressViewStyle:](uiprogressview/init%28progressviewstyle_%29.md): Creates a progress view with the specified style.
- [initWithFrame:](uiprogressview/init%28frame_%29.md): Creates a progress view with the specified frame rectangle.
- [initWithCoder:](uiprogressview/init%28coder_%29.md): Creates a progress view from data in an unarchiver.

### Managing the progress bar

- [progress](uiprogressview/progress.md): The current progress of the progress view.
- [setProgress:animated:](uiprogressview/setprogress%28__animated_%29.md): Adjusts the current progress of the progress view, optionally animating the change.
- [observedProgress](uiprogressview/observedprogress.md): The progress object to use for updating the progress view.

### Configuring the progress bar

- [progressViewStyle](uiprogressview/progressviewstyle.md): The current graphical style of the progress view.
- [progressTintColor](uiprogressview/progresstintcolor.md): The color shown for the portion of the progress bar that’s filled.
- [progressImage](uiprogressview/progressimage.md): An image to use for the portion of the progress bar that’s filled.
- [trackTintColor](uiprogressview/tracktintcolor.md): The color shown for the portion of the progress bar that isn’t filled.
- [trackImage](uiprogressview/trackimage.md): An image to use for the portion of the track that isn’t filled.

### Constants

- [UIProgressViewStyle](uiprogressview/style.md): The styles permitted for the progress bar.

## Relationships

### Inherits From

- [UIView](uiview.md)

### Conforms To

- [NSCoding](../foundation/nscoding.md)

## See Also

### Content views

- [UIActivityIndicatorView](uiactivityindicatorview.md): A view that shows that a task is in progress.
- [UICalendarView](uicalendarview.md): A view that displays a calendar with date-specific decorations, and provides for user selection of a single date or multiple dates.
- [UIContentUnavailableView](uicontentunavailableview.md): A view that indicates there’s no content to display.
- [UIImageView](uiimageview.md): A view that displays a single image or a sequence of animated images in your interface.
- [UIPickerView](uipickerview.md): A view that uses a spinning-wheel or slot-machine metaphor to show one or more sets of values.
