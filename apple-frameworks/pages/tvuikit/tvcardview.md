> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvuikit/tvcardview](https://developer.apple.com/documentation/tvuikit/tvcardview)

# TVCardView (Swift)

**Framework:** TVUIKit  
**Kind:** Class  
**Availability:** tvOS 12.0+

A view that responds to focus interaction with a motion effect it applies to all of its subviews.

## Declaration

```swift
class TVCardView
```

<a id="overview"></a>

## Overview

A `TVCardView` object is a specialized version of [TVLockupView](tvlockupview.md) that presents an arbitrarily composed view hierarchy in a floating content view. You add custom subviews to the [contentView](tvlockupview/contentview.md) property, and the subviews act as a single unit in regard to selection and motion effects. You typically use a TVCardView to display ratings and reviews for a media item. The following figure shows a rating card that consists of two label views (the rating and related information) and an image view (the stars).

![A darkened screen with a highlighted box in the upper left corner containing the rating for a media item.](https://developer.apple.com/images/com.apple.tvuikit/media-3016830@2x.png)

## Topics

### Setting the Background Color

- [cardBackgroundColor](tvcardview/cardbackgroundcolor.md): The background color of the content view.

## Relationships

### Inherits From

- [TVLockupView](tvlockupview.md)

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

- [TVLockupView](tvlockupview.md): A focusable view that presents main content, like a movie poster, and an optional header and footer.
- [TVLockupViewComponent](tvlockupviewcomponent.md): The protocol for responding to lockup view state changes.
- [TVLockupHeaderFooterView](tvlockupheaderfooterview.md): A view that contains header and footer information.
- [TVPosterView](tvposterview.md): An optimized view for displaying an image, a header, and a footer.
- [TVCaptionButtonView](tvcaptionbuttonview.md): A button-like view that responds to user interactions.
- [TVMonogramView](tvmonogramview.md): Deprecated. A specialized lockup view that contains a circular image of a person or the person’s initials, along with a footer view.

# TVCardView (Objective-C)

**Framework:** TVUIKit  
**Kind:** Class  
**Availability:** tvOS 12.0+

A view that responds to focus interaction with a motion effect it applies to all of its subviews.

## Declaration

```objectivec
@interface TVCardView : TVLockupView
```

<a id="overview"></a>

## Overview

A `TVCardView` object is a specialized version of [TVLockupView](tvlockupview.md) that presents an arbitrarily composed view hierarchy in a floating content view. You add custom subviews to the [contentView](tvlockupview/contentview.md) property, and the subviews act as a single unit in regard to selection and motion effects. You typically use a TVCardView to display ratings and reviews for a media item. The following figure shows a rating card that consists of two label views (the rating and related information) and an image view (the stars).

![A darkened screen with a highlighted box in the upper left corner containing the rating for a media item.](https://developer.apple.com/images/com.apple.tvuikit/media-3016830@2x.png)

## Topics

### Setting the Background Color

- [cardBackgroundColor](tvcardview/cardbackgroundcolor.md): The background color of the content view.

## Relationships

### Inherits From

- [TVLockupView](tvlockupview.md)

## See Also

### Lockup views

- [TVLockupView](tvlockupview.md): A focusable view that presents main content, like a movie poster, and an optional header and footer.
- [TVLockupViewComponent](tvlockupviewcomponent.md): The protocol for responding to lockup view state changes.
- [TVLockupHeaderFooterView](tvlockupheaderfooterview.md): A view that contains header and footer information.
- [TVPosterView](tvposterview.md): An optimized view for displaying an image, a header, and a footer.
- [TVCaptionButtonView](tvcaptionbuttonview.md): A button-like view that responds to user interactions.
- [TVMonogramView](tvmonogramview.md): Deprecated. A specialized lockup view that contains a circular image of a person or the person’s initials, along with a footer view.
