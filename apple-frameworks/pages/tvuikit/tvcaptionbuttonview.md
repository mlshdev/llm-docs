> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvuikit/tvcaptionbuttonview](https://developer.apple.com/documentation/tvuikit/tvcaptionbuttonview)

# TVCaptionButtonView (Swift)

**Framework:** TVUIKit  
**Kind:** Class  
**Availability:** tvOS 12.0+

A button-like view that responds to user interactions.

## Declaration

```swift
class TVCaptionButtonView
```

<a id="overview"></a>

## Overview

A caption button responds to user interactions and can contain an image or text. When the caption button comes into focus, the caption button expands in the [leading](https://developer.apple.com/documentation/appkit/nsdirectionaledgeinsets/leading), [top](https://developer.apple.com/documentation/appkit/nsdirectionaledgeinsets/top), and [trailing](https://developer.apple.com/documentation/appkit/nsdirectionaledgeinsets/trailing) directions. The user can click the caption button to select an option. As the user moves their finger on the Siri Remote up and down, or left and right, the caption button may limit the direction of the tilt based on the type set in [motionDirection](tvcaptionbuttonview/motiondirection.md).

![A darkened figure with a highlighted button. The button contains a stylized TV icon with the word preview below the button.](https://developer.apple.com/images/com.apple.tvuikit/media-3016836@2x.png)

## Topics

### Setting the Motion Direction

- [motionDirection](tvcaptionbuttonview/motiondirection.md): The direction that the caption button view tilts in response to user interaction on the remote.
- [TVCaptionButtonViewMotionDirection](tvcaptionbuttonviewmotiondirection.md): The directions that the caption button view can tilt in response to user interactions on the remote.

### Configuring the Caption Button

- [contentImage](tvcaptionbuttonview/contentimage.md): The image displayed in the main content view.
- [contentText](tvcaptionbuttonview/contenttext.md): The text displayed in the main content view.
- [title](tvcaptionbuttonview/title.md): The title for the caption button.
- [subtitle](tvcaptionbuttonview/subtitle.md): The subtitle of the caption button.

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
- [TVMonogramView](tvmonogramview.md): Deprecated. A specialized lockup view that contains a circular image of a person or the person’s initials, along with a footer view.

# TVCaptionButtonView (Objective-C)

**Framework:** TVUIKit  
**Kind:** Class  
**Availability:** tvOS 12.0+

A button-like view that responds to user interactions.

## Declaration

```objectivec
@interface TVCaptionButtonView : TVLockupView
```

<a id="overview"></a>

## Overview

A caption button responds to user interactions and can contain an image or text. When the caption button comes into focus, the caption button expands in the [leading](https://developer.apple.com/documentation/appkit/nsdirectionaledgeinsets/leading), [top](https://developer.apple.com/documentation/appkit/nsdirectionaledgeinsets/top), and [trailing](https://developer.apple.com/documentation/appkit/nsdirectionaledgeinsets/trailing) directions. The user can click the caption button to select an option. As the user moves their finger on the Siri Remote up and down, or left and right, the caption button may limit the direction of the tilt based on the type set in [motionDirection](tvcaptionbuttonview/motiondirection.md).

![A darkened figure with a highlighted button. The button contains a stylized TV icon with the word preview below the button.](https://developer.apple.com/images/com.apple.tvuikit/media-3016836@2x.png)

## Topics

### Setting the Motion Direction

- [motionDirection](tvcaptionbuttonview/motiondirection.md): The direction that the caption button view tilts in response to user interaction on the remote.
- [TVCaptionButtonViewMotionDirection](tvcaptionbuttonviewmotiondirection.md): The directions that the caption button view can tilt in response to user interactions on the remote.

### Configuring the Caption Button

- [contentImage](tvcaptionbuttonview/contentimage.md): The image displayed in the main content view.
- [contentText](tvcaptionbuttonview/contenttext.md): The text displayed in the main content view.
- [title](tvcaptionbuttonview/title.md): The title for the caption button.
- [subtitle](tvcaptionbuttonview/subtitle.md): The subtitle of the caption button.

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
- [TVMonogramView](tvmonogramview.md): Deprecated. A specialized lockup view that contains a circular image of a person or the person’s initials, along with a footer view.
