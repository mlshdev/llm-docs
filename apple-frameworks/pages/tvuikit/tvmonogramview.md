> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvuikit/tvmonogramview](https://developer.apple.com/documentation/tvuikit/tvmonogramview)

# TVMonogramView (Swift)

**Framework:** TVUIKit  
**Kind:** Class  
**Availability:** tvOS 12.0+ (deprecated in 27.0)

A specialized lockup view that contains a circular image of a person or the person’s initials, along with a footer view.

> Use [TVMonogramContentView](tvmonogramcontentview.md) instead.

## Declaration

```swift
class TVMonogramView
```

<a id="overview"></a>

## Overview

If you don’t provide an image, the system provides a generic placeholder image. If [personNameComponents](tvmonogramview/personnamecomponents.md) is not `nil`, the system creates a localized monogram image using the first initials from the name components.

![A darkened image with a highlighted box along the left side. The box contains a round image with an actor’s initials inside of it.](https://developer.apple.com/images/com.apple.tvuikit/media-3016835@2x.png)

## Topics

### Configuring a Monogram

- [personNameComponents](tvmonogramview/personnamecomponents.md): Deprecated. The names used to create a monogram image.
- [image](tvmonogramview/image.md): Deprecated. The custom image for the monogram.
- [title](tvmonogramview/title.md): Deprecated. The title for the monogram.
- [subtitle](tvmonogramview/subtitle.md): Deprecated. The subtitle for the monogram.

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
- [TVCardView](tvcardview.md): A view that responds to focus interaction with a motion effect it applies to all of its subviews.
- [TVPosterView](tvposterview.md): An optimized view for displaying an image, a header, and a footer.
- [TVCaptionButtonView](tvcaptionbuttonview.md): A button-like view that responds to user interactions.

# TVMonogramView (Objective-C)

**Framework:** TVUIKit  
**Kind:** Class  
**Availability:** tvOS 12.0+ (deprecated in 27.0)

A specialized lockup view that contains a circular image of a person or the person’s initials, along with a footer view.

> Use [TVMonogramContentView](tvmonogramcontentview.md) instead.

## Declaration

```objectivec
@interface TVMonogramView : TVLockupView
```

<a id="overview"></a>

## Overview

If you don’t provide an image, the system provides a generic placeholder image. If [personNameComponents](tvmonogramview/personnamecomponents.md) is not `nil`, the system creates a localized monogram image using the first initials from the name components.

![A darkened image with a highlighted box along the left side. The box contains a round image with an actor’s initials inside of it.](https://developer.apple.com/images/com.apple.tvuikit/media-3016835@2x.png)

## Topics

### Configuring a Monogram

- [personNameComponents](tvmonogramview/personnamecomponents.md): Deprecated. The names used to create a monogram image.
- [image](tvmonogramview/image.md): Deprecated. The custom image for the monogram.
- [title](tvmonogramview/title.md): Deprecated. The title for the monogram.
- [subtitle](tvmonogramview/subtitle.md): Deprecated. The subtitle for the monogram.

## Relationships

### Inherits From

- [TVLockupView](tvlockupview.md)

## See Also

### Lockup views

- [TVLockupView](tvlockupview.md): A focusable view that presents main content, like a movie poster, and an optional header and footer.
- [TVLockupViewComponent](tvlockupviewcomponent.md): The protocol for responding to lockup view state changes.
- [TVLockupHeaderFooterView](tvlockupheaderfooterview.md): A view that contains header and footer information.
- [TVCardView](tvcardview.md): A view that responds to focus interaction with a motion effect it applies to all of its subviews.
- [TVPosterView](tvposterview.md): An optimized view for displaying an image, a header, and a footer.
- [TVCaptionButtonView](tvcaptionbuttonview.md): A button-like view that responds to user interactions.
