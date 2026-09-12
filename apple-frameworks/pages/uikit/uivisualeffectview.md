> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uivisualeffectview](https://developer.apple.com/documentation/uikit/uivisualeffectview)

# UIVisualEffectView (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An object that implements some complex visual effects.

## Declaration

```swift
@MainActor class UIVisualEffectView
```

<a id="overview"></a>

## Overview

Depending on the desired effect, the effect may affect content layered behind the view or content added to the visual effect view’s [contentView](uivisualeffectview/contentview.md). Apply a visual effect view to an existing view and then apply a [UIBlurEffect](uiblureffect.md) or [UIVibrancyEffect](uivibrancyeffect.md) object to apply a blur or vibrancy effect to the existing view. After you add the visual effect view to the view hierarchy, add any subviews to the [contentView](uivisualeffectview/contentview.md) property of the visual effect view. Don’t add subviews directly to the visual effect view itself.

<a id="Set-the-correct-alpha-value"></a>

### Set the correct alpha value

When using the [UIVisualEffectView](uivisualeffectview.md) class, avoid alpha values that are less than 1. Creating views that are partially transparent causes the system to combine the view and all the associated subviews during an offscreen render pass. [UIVisualEffectView](uivisualeffectview.md) objects need to be combined as part of the content they’re layered on top of in order to look correct. Setting the alpha to less than 1 on the visual effect view or any of its superviews causes many effects to look incorrect or not show up at all.

<a id="Use-masks-with-a-visual-effect-view"></a>

### Use masks with a visual effect view

Masks directly applied to a [UIVisualEffectView](uivisualeffectview.md) are forwarded to the internal views that provide the visual effect, including the [contentView](uivisualeffectview/contentview.md) itself. You can also apply masks directly to the [contentView](uivisualeffectview/contentview.md). Applying a mask to a superview of a [UIVisualEffectView](uivisualeffectview.md) object causes the effect to fail, and an exception is thrown.

Any mask provided to [UIVisualEffectView](uivisualeffectview.md) isn’t the view that actually performs the mask. UIKit makes a copy of the view and applies it to each subview. To reflect a size change to the mask, you must apply the change to the original mask and reset it on the effect view.

<a id="Capture-a-snapshot-of-a-visual-effect-view"></a>

### Capture a snapshot of a visual effect view

Many effects require support from the window that hosts the [UIVisualEffectView](uivisualeffectview.md). Attempting to take a snapshot of only the [UIVisualEffectView](uivisualeffectview.md) results in a snapshot that doesn’t contain the effect. To take a snapshot of a view hierarchy that contains a [UIVisualEffectView](uivisualeffectview.md), you must take a snapshot of the entire [UIWindow](uiwindow.md) or [UIScreen](uiscreen.md) that contains it.

## Topics

### Creating a visual effect view

- [init(effect:)](uivisualeffectview/init%28effect_%29.md): Creates a new visual effect view with the designated visual effect.
- [init(coder:)](uivisualeffectview/init%28coder_%29.md): Creates a visual effect view from data in an unarchiver.

### Retrieving view information

- [contentView](uivisualeffectview/contentview.md): A view object that can have a visual effect view added to it.
- [effect](uivisualeffectview/effect.md): The visual effect provided by the view.

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
- [NSSecureCoding](../foundation/nssecurecoding.md)
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

### Visual effects

- [UIVisualEffect](uivisualeffect.md): An initializer for visual effect views and blur and vibrancy effect objects.
- [UIVibrancyEffect](uivibrancyeffect.md): An object that amplifies and adjusts the color of the content layered behind a visual effect view.
- [UIBlurEffect](uiblureffect.md): An object that applies a blurring effect to the content layered behind a visual effect view.
- [UIColorEffect](uicoloreffect.md): A visual effect that applies a solid color background.

# UIVisualEffectView (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An object that implements some complex visual effects.

## Declaration

```objectivec
@interface UIVisualEffectView : UIView
```

<a id="overview"></a>

## Overview

Depending on the desired effect, the effect may affect content layered behind the view or content added to the visual effect view’s [contentView](uivisualeffectview/contentview.md). Apply a visual effect view to an existing view and then apply a [UIBlurEffect](uiblureffect.md) or [UIVibrancyEffect](uivibrancyeffect.md) object to apply a blur or vibrancy effect to the existing view. After you add the visual effect view to the view hierarchy, add any subviews to the [contentView](uivisualeffectview/contentview.md) property of the visual effect view. Don’t add subviews directly to the visual effect view itself.

<a id="Set-the-correct-alpha-value"></a>

### Set the correct alpha value

When using the [UIVisualEffectView](uivisualeffectview.md) class, avoid alpha values that are less than 1. Creating views that are partially transparent causes the system to combine the view and all the associated subviews during an offscreen render pass. [UIVisualEffectView](uivisualeffectview.md) objects need to be combined as part of the content they’re layered on top of in order to look correct. Setting the alpha to less than 1 on the visual effect view or any of its superviews causes many effects to look incorrect or not show up at all.

<a id="Use-masks-with-a-visual-effect-view"></a>

### Use masks with a visual effect view

Masks directly applied to a [UIVisualEffectView](uivisualeffectview.md) are forwarded to the internal views that provide the visual effect, including the [contentView](uivisualeffectview/contentview.md) itself. You can also apply masks directly to the [contentView](uivisualeffectview/contentview.md). Applying a mask to a superview of a [UIVisualEffectView](uivisualeffectview.md) object causes the effect to fail, and an exception is thrown.

Any mask provided to [UIVisualEffectView](uivisualeffectview.md) isn’t the view that actually performs the mask. UIKit makes a copy of the view and applies it to each subview. To reflect a size change to the mask, you must apply the change to the original mask and reset it on the effect view.

<a id="Capture-a-snapshot-of-a-visual-effect-view"></a>

### Capture a snapshot of a visual effect view

Many effects require support from the window that hosts the [UIVisualEffectView](uivisualeffectview.md). Attempting to take a snapshot of only the [UIVisualEffectView](uivisualeffectview.md) results in a snapshot that doesn’t contain the effect. To take a snapshot of a view hierarchy that contains a [UIVisualEffectView](uivisualeffectview.md), you must take a snapshot of the entire [UIWindow](uiwindow.md) or [UIScreen](uiscreen.md) that contains it.

## Topics

### Creating a visual effect view

- [initWithEffect:](uivisualeffectview/init%28effect_%29.md): Creates a new visual effect view with the designated visual effect.
- [initWithCoder:](uivisualeffectview/init%28coder_%29.md): Creates a visual effect view from data in an unarchiver.

### Retrieving view information

- [contentView](uivisualeffectview/contentview.md): A view object that can have a visual effect view added to it.
- [effect](uivisualeffectview/effect.md): The visual effect provided by the view.

## Relationships

### Inherits From

- [UIView](uiview.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Visual effects

- [UIVisualEffect](uivisualeffect.md): An initializer for visual effect views and blur and vibrancy effect objects.
- [UIVibrancyEffect](uivibrancyeffect.md): An object that amplifies and adjusts the color of the content layered behind a visual effect view.
- [UIBlurEffect](uiblureffect.md): An object that applies a blurring effect to the content layered behind a visual effect view.
- [UIColorEffect](uicoloreffect.md): A visual effect that applies a solid color background.
