> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvuikit/tvposterview](https://developer.apple.com/documentation/tvuikit/tvposterview)

# TVPosterView (Swift)

**Framework:** TVUIKit  
**Kind:** Class  
**Availability:** tvOS 12.0+

An optimized view for displaying an image, a header, and a footer.

## Declaration

```swift
class TVPosterView
```

<a id="overview"></a>

## Overview

The `TVPosterView` object is a specialized [TVLockupView](tvlockupview.md) used to display media items. The size of the poster view expands when it comes into focus.

![A darkened image with a highlighted box in the bottom-left corner that shows a media item image and title.](https://developer.apple.com/images/com.apple.tvuikit/media-3016829@2x.png)

## Topics

### Creating a Poster View

- [init(image:)](tvposterview/init%28image_%29.md): Creates a new poster view using the supplied image.

### Configuring a Poster View

- [image](tvposterview/image.md): The image for the poster view.
- [imageView](tvposterview/imageview.md): The image view associated with the poster view.
- [title](tvposterview/title.md): The title for the poster view.
- [subtitle](tvposterview/subtitle.md): The subtitle for the poster view.

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
- [TVCaptionButtonView](tvcaptionbuttonview.md): A button-like view that responds to user interactions.
- [TVMonogramView](tvmonogramview.md): Deprecated. A specialized lockup view that contains a circular image of a person or the person’s initials, along with a footer view.

# TVPosterView (Objective-C)

**Framework:** TVUIKit  
**Kind:** Class  
**Availability:** tvOS 12.0+

An optimized view for displaying an image, a header, and a footer.

## Declaration

```objectivec
@interface TVPosterView : TVLockupView
```

<a id="overview"></a>

## Overview

The `TVPosterView` object is a specialized [TVLockupView](tvlockupview.md) used to display media items. The size of the poster view expands when it comes into focus.

![A darkened image with a highlighted box in the bottom-left corner that shows a media item image and title.](https://developer.apple.com/images/com.apple.tvuikit/media-3016829@2x.png)

## Topics

### Creating a Poster View

- [initWithImage:](tvposterview/init%28image_%29.md): Creates a new poster view using the supplied image.

### Configuring a Poster View

- [image](tvposterview/image.md): The image for the poster view.
- [imageView](tvposterview/imageview.md): The image view associated with the poster view.
- [title](tvposterview/title.md): The title for the poster view.
- [subtitle](tvposterview/subtitle.md): The subtitle for the poster view.

## Relationships

### Inherits From

- [TVLockupView](tvlockupview.md)

## See Also

### Lockup views

- [TVLockupView](tvlockupview.md): A focusable view that presents main content, like a movie poster, and an optional header and footer.
- [TVLockupViewComponent](tvlockupviewcomponent.md): The protocol for responding to lockup view state changes.
- [TVLockupHeaderFooterView](tvlockupheaderfooterview.md): A view that contains header and footer information.
- [TVCardView](tvcardview.md): A view that responds to focus interaction with a motion effect it applies to all of its subviews.
- [TVCaptionButtonView](tvcaptionbuttonview.md): A button-like view that responds to user interactions.
- [TVMonogramView](tvmonogramview.md): Deprecated. A specialized lockup view that contains a circular image of a person or the person’s initials, along with a footer view.
