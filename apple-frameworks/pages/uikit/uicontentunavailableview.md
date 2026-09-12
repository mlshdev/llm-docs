> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontentunavailableview](https://developer.apple.com/documentation/uikit/uicontentunavailableview)

# UIContentUnavailableView (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

A view that indicates there’s no content to display.

## Declaration

```swift
@MainActor class UIContentUnavailableView
```

<a id="overview"></a>

## Overview

Use a content-unavailable view to indicate that your app can’t display content. For example, content may not be available if a search returns no results or your app is loading data over the network.

In many cases, you won’t need to create a view of this type directly. Set a [UIContentUnavailableConfiguration](uicontentunavailableconfiguration-swift.struct.md) as the view controller’s [contentUnavailableConfiguration](uiviewcontroller/contentunavailableconfiguration-4b95e.md), and the view controller manages the layout of the content-unavailable view.

## Topics

### Initializers

- [init(coder:)](uicontentunavailableview/init%28coder_%29.md): Creates a view from data in an unarchiver.
- [init(configuration:)](uicontentunavailableview/init%28configuration_%29.md): Creates a new content-unavailable view with the specified configuration.

### Instance Properties

- [isScrollEnabled](uicontentunavailableview/isscrollenabled.md): A Boolean value that determines whether the view content can scroll.

## Relationships

### Inherits From

- [UIView](uiview.md)

### Conforms To

- [CALayerDelegate](../quartzcore/calayerdelegate.md)
- [CLBodyIdentifiable](../corelocation/clbodyidentifiable.md)
- [CMBodyIdentifiable](../coremotion/cmbodyidentifiable.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
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
- [UIContentView](uicontentview-5fh3z.md)
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
- [UIImageView](uiimageview.md): A view that displays a single image or a sequence of animated images in your interface.
- [UIPickerView](uipickerview.md): A view that uses a spinning-wheel or slot-machine metaphor to show one or more sets of values.
- [UIProgressView](uiprogressview.md): A view that depicts the progress of a task over time.

# UIContentUnavailableView (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

A view that indicates there’s no content to display.

## Declaration

```objectivec
@interface UIContentUnavailableView : UIView
```

<a id="overview"></a>

## Overview

Use a content-unavailable view to indicate that your app can’t display content. For example, content may not be available if a search returns no results or your app is loading data over the network.

In many cases, you won’t need to create a view of this type directly. Set a [UIContentUnavailableConfiguration](uicontentunavailableconfiguration-swift.struct.md) as the view controller’s [contentUnavailableConfiguration](uiviewcontroller/contentunavailableconfiguration-4b95e.md), and the view controller manages the layout of the content-unavailable view.

## Topics

### Instance Properties

- [configuration](uicontentunavailableview/configuration.md): The content-unavailable configuration.
- [scrollEnabled](uicontentunavailableview/isscrollenabled.md): A Boolean value that determines whether the view content can scroll.

### Instance Methods

- [initWithCoder:](uicontentunavailableview/init%28coder_%29.md): Creates a view from data in an unarchiver.
- [initWithConfiguration:](uicontentunavailableview/initwithconfiguration_.md): Creates a new content-unavailable view with the specified configuration.

## Relationships

### Inherits From

- [UIView](uiview.md)

### Conforms To

- [UIContentView](uicontentview-3zu2k.md)

## See Also

### Content views

- [UIActivityIndicatorView](uiactivityindicatorview.md): A view that shows that a task is in progress.
- [UICalendarView](uicalendarview.md): A view that displays a calendar with date-specific decorations, and provides for user selection of a single date or multiple dates.
- [UIImageView](uiimageview.md): A view that displays a single image or a sequence of animated images in your interface.
- [UIPickerView](uipickerview.md): A view that uses a spinning-wheel or slot-machine metaphor to show one or more sets of values.
- [UIProgressView](uiprogressview.md): A view that depicts the progress of a task over time.
