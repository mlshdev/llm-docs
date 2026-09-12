> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvuikit/tvlockupview](https://developer.apple.com/documentation/tvuikit/tvlockupview)

# TVLockupView (Swift)

**Framework:** TVUIKit  
**Kind:** Class  
**Availability:** tvOS 12.0+

A focusable view that presents main content, like a movie poster, and an optional header and footer.

## Declaration

```swift
class TVLockupView
```

<a id="overview"></a>

## Overview

A `TVLockupView` object consists of three views that operate as a single view. The content view typically contains a media item image, like a movie poster, with additional information in the header and footer views. The `TVLockupView` object expands when it comes into focus, using [focusSizeIncrease](tvlockupview/focussizeincrease.md) and [contentSize](tvlockupview/contentsize.md) to calculate the size increase. Provide sufficient `focusSizeIncrease` values so that your custom content doesn’t overlap other objects when the content comes into focus.

The following figure shows a `TVLockupView` object that’s in focus. The yellow, vertical bars indicate the space between views. The center view is in focus and has increased in size, expanding into the space between views. Views don’t move as other views come into focus.

![A diagram depicting five TV lockup views in a row, separated by yellow, vertical bars that indicate the space between views. The center view is larger than the other views and covers part of the yellow areas on either side of it.](https://developer.apple.com/images/com.apple.tvuikit/media-3016664@2x.png)

> **Note**

>  Don’t create a [TVLockupView](tvlockupview.md) directly. Instead, create an instance of the subclass that best suits your use case, such as [TVPosterView](tvposterview.md) or [TVCardView](tvcardview.md).

## Topics

### Setting view size

- [contentSize](tvlockupview/contentsize.md): The size of the content view.
- [contentViewInsets](tvlockupview/contentviewinsets.md): The spacing between the content view and its peer and containing views.
- [focusSizeIncrease](tvlockupview/focussizeincrease.md): The inset or outset values specifying your content’s size increase when in focus.

### Adding subviews

- [contentView](tvlockupview/contentview.md): The main view for the lockup.
- [headerView](tvlockupview/headerview.md): A view containing header information.
- [footerView](tvlockupview/footerview.md): A view containing footer information.

## Relationships

### Inherits From

- [UIControl](../uikit/uicontrol.md)

### Inherited By

- [TVCaptionButtonView](tvcaptionbuttonview.md)
- [TVCardView](tvcardview.md)
- [TVMonogramView](tvmonogramview.md)
- [TVPosterView](tvposterview.md)

### Conforms To

- [CALayerDelegate](../quartzcore/calayerdelegate.md)
- [CLBodyIdentifiable](../corelocation/clbodyidentifiable.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIAccessibilityIdentification](../uikit/uiaccessibilityidentification.md)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearance](../uikit/uiappearance.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UIContextMenuInteractionDelegate](../uikit/uicontextmenuinteractiondelegate.md)
- [UICoordinateSpace](../uikit/uicoordinatespace.md)
- [UIDynamicItem](../uikit/uidynamicitem.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIFocusItem](../uikit/uifocusitem.md)
- [UIFocusItemContainer](../uikit/uifocusitemcontainer.md)
- [UIPopoverPresentationControllerSourceItem](../uikit/uipopoverpresentationcontrollersourceitem.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Lockup views

- [TVLockupViewComponent](tvlockupviewcomponent.md): The protocol for responding to lockup view state changes.
- [TVLockupHeaderFooterView](tvlockupheaderfooterview.md): A view that contains header and footer information.
- [TVCardView](tvcardview.md): A view that responds to focus interaction with a motion effect it applies to all of its subviews.
- [TVPosterView](tvposterview.md): An optimized view for displaying an image, a header, and a footer.
- [TVCaptionButtonView](tvcaptionbuttonview.md): A button-like view that responds to user interactions.
- [TVMonogramView](tvmonogramview.md): Deprecated. A specialized lockup view that contains a circular image of a person or the person’s initials, along with a footer view.

# TVLockupView (Objective-C)

**Framework:** TVUIKit  
**Kind:** Class  
**Availability:** tvOS 12.0+

A focusable view that presents main content, like a movie poster, and an optional header and footer.

## Declaration

```objectivec
@interface TVLockupView : UIControl
```

<a id="overview"></a>

## Overview

A `TVLockupView` object consists of three views that operate as a single view. The content view typically contains a media item image, like a movie poster, with additional information in the header and footer views. The `TVLockupView` object expands when it comes into focus, using [focusSizeIncrease](tvlockupview/focussizeincrease.md) and [contentSize](tvlockupview/contentsize.md) to calculate the size increase. Provide sufficient `focusSizeIncrease` values so that your custom content doesn’t overlap other objects when the content comes into focus.

The following figure shows a `TVLockupView` object that’s in focus. The yellow, vertical bars indicate the space between views. The center view is in focus and has increased in size, expanding into the space between views. Views don’t move as other views come into focus.

![A diagram depicting five TV lockup views in a row, separated by yellow, vertical bars that indicate the space between views. The center view is larger than the other views and covers part of the yellow areas on either side of it.](https://developer.apple.com/images/com.apple.tvuikit/media-3016664@2x.png)

> **Note**

>  Don’t create a [TVLockupView](tvlockupview.md) directly. Instead, create an instance of the subclass that best suits your use case, such as [TVPosterView](tvposterview.md) or [TVCardView](tvcardview.md).

## Topics

### Setting view size

- [contentSize](tvlockupview/contentsize.md): The size of the content view.
- [contentViewInsets](tvlockupview/contentviewinsets.md): The spacing between the content view and its peer and containing views.
- [focusSizeIncrease](tvlockupview/focussizeincrease.md): The inset or outset values specifying your content’s size increase when in focus.

### Adding subviews

- [contentView](tvlockupview/contentview.md): The main view for the lockup.
- [headerView](tvlockupview/headerview.md): A view containing header information.
- [footerView](tvlockupview/footerview.md): A view containing footer information.

## Relationships

### Inherits From

- [UIControl](../uikit/uicontrol.md)

### Inherited By

- [TVCaptionButtonView](tvcaptionbuttonview.md)
- [TVCardView](tvcardview.md)
- [TVMonogramView](tvmonogramview.md)
- [TVPosterView](tvposterview.md)

## See Also

### Lockup views

- [TVLockupViewComponent](tvlockupviewcomponent.md): The protocol for responding to lockup view state changes.
- [TVLockupHeaderFooterView](tvlockupheaderfooterview.md): A view that contains header and footer information.
- [TVCardView](tvcardview.md): A view that responds to focus interaction with a motion effect it applies to all of its subviews.
- [TVPosterView](tvposterview.md): An optimized view for displaying an image, a header, and a footer.
- [TVCaptionButtonView](tvcaptionbuttonview.md): A button-like view that responds to user interactions.
- [TVMonogramView](tvmonogramview.md): Deprecated. A specialized lockup view that contains a circular image of a person or the person’s initials, along with a footer view.
