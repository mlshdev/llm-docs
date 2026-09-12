> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyou/swattributionview](https://developer.apple.com/documentation/sharedwithyou/swattributionview)

# SWAttributionView (Swift)

**Framework:** Shared with You  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A view that displays the sender who shares a highlight and provides related actions.

## Declaration

```swift
class SWAttributionView
```

## Mentioned In

- [Making your app content shareable](making-your-app-content-shareable.md)

<a id="overview"></a>

## Overview

The `SWAttributionView` also allows users to get back to the conversation about the [SWHighlight](swhighlight.md) content, and other related actions using a [highlightMenu](swattributionview/highlightmenu.md).

Place an `SWAttributionView` next to the content represented by its `SWHighlight`. The `SWAttributionView` displays the names and avatars within the provided horizontal space.

You can constrain this view’s width anchor or set its frame width to control the maximum width of its contents after which truncation may occur. Don’t constrain the view’s height, as the height is dependent on the [preferredContentSizeCategory](../uikit/uiapplication/preferredcontentsizecategory.md), and the resulting font size. To provide enough vertical space around this view, reference its [heightAnchor](../uikit/uiview/heightanchor.md) when using Auto Layout, or its [intrinsicContentSize](../uikit/uiview/intrinsiccontentsize.md) when using manual layout.

## Topics

### Customizing highlights

- [backgroundStyle](swattributionview/backgroundstyle-swift.property.md): The background style of the child view that contains names and avatars.
- [displayContext](swattributionview/displaycontext-swift.property.md): The context for the content the system displays with this view.
- [highlight](swattributionview/highlight.md): The highlight you use to display this attribution.
- [highlightMenu](swattributionview/highlightmenu.md): A menu with a list of system actions specific to this hightlight.
- [horizontalAlignment](swattributionview/horizontalalignment-swift.property.md): The horizontal alignment of the view.
- [menuTitleForHideAction](swattributionview/menutitleforhideaction.md): A localized string the system uses as a custom title for the hide menu item.
- [preferredMaxLayoutWidth](swattributionview/preferredmaxlayoutwidth.md): A width the system uses to constrain the view contents.
- [supplementalMenu](swattributionview/supplementalmenu.md): A supplemental menu to augment the attribution view’s existing menu.

### Customizing the view

- [SWAttributionView.BackgroundStyle](swattributionview/backgroundstyle-swift.enum.md): The background styling of the attribution view’s contents.
- [SWAttributionView.DisplayContext](swattributionview/displaycontext-swift.enum.md): The context for the content that influences the ranking of this view’s highlight.
- [SWAttributionView.HorizontalAlignment](swattributionview/horizontalalignment-swift.enum.md): The horizontal alignment of attribution view’s contents.

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)
- [UIView](../uikit/uiview.md)

### Conforms To

- [CALayerDelegate](../quartzcore/calayerdelegate.md)
- [CLBodyIdentifiable](../corelocation/clbodyidentifiable.md)
- [CMBodyIdentifiable](../coremotion/cmbodyidentifiable.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityelementprotocol)
- [NSAccessibilityProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol)
- [NSAnimatablePropertyContainer](https://developer.apple.com/documentation/appkit/nsanimatablepropertycontainer)
- [NSAppearanceCustomization](https://developer.apple.com/documentation/appkit/nsappearancecustomization)
- [NSCoding](../foundation/nscoding.md)
- [NSDraggingDestination](https://developer.apple.com/documentation/appkit/nsdraggingdestination)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIAccessibilityIdentification](../uikit/uiaccessibilityidentification.md)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearance](../uikit/uiappearance.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UICoordinateSpace](../uikit/uicoordinatespace.md)
- [UIDynamicItem](../uikit/uidynamicitem.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIFocusItem](../uikit/uifocusitem.md)
- [UIFocusItemContainer](../uikit/uifocusitemcontainer.md)
- [UILargeContentViewerItem](../uikit/uilargecontentvieweritem.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIPopoverPresentationControllerSourceItem](../uikit/uipopoverpresentationcontrollersourceitem.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

# SWAttributionView (Objective-C)

**Framework:** Shared with You  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A view that displays the sender who shares a highlight and provides related actions.

## Declaration

```objectivec
@interface SWAttributionView : UIView
```

```objectivec
@interface SWAttributionView : NSView
```

## Mentioned In

- [Making your app content shareable](making-your-app-content-shareable.md)

<a id="overview"></a>

## Overview

The `SWAttributionView` also allows users to get back to the conversation about the [SWHighlight](swhighlight.md) content, and other related actions using a [highlightMenu](swattributionview/highlightmenu.md).

Place an `SWAttributionView` next to the content represented by its `SWHighlight`. The `SWAttributionView` displays the names and avatars within the provided horizontal space.

You can constrain this view’s width anchor or set its frame width to control the maximum width of its contents after which truncation may occur. Don’t constrain the view’s height, as the height is dependent on the [preferredContentSizeCategory](../uikit/uiapplication/preferredcontentsizecategory.md), and the resulting font size. To provide enough vertical space around this view, reference its [heightAnchor](../uikit/uiview/heightanchor.md) when using Auto Layout, or its [intrinsicContentSize](../uikit/uiview/intrinsiccontentsize.md) when using manual layout.

## Topics

### Customizing highlights

- [backgroundStyle](swattributionview/backgroundstyle-swift.property.md): The background style of the child view that contains names and avatars.
- [displayContext](swattributionview/displaycontext-swift.property.md): The context for the content the system displays with this view.
- [highlight](swattributionview/highlight.md): The highlight you use to display this attribution.
- [highlightMenu](swattributionview/highlightmenu.md): A menu with a list of system actions specific to this hightlight.
- [horizontalAlignment](swattributionview/horizontalalignment-swift.property.md): The horizontal alignment of the view.
- [menuTitleForHideAction](swattributionview/menutitleforhideaction.md): A localized string the system uses as a custom title for the hide menu item.
- [preferredMaxLayoutWidth](swattributionview/preferredmaxlayoutwidth.md): A width the system uses to constrain the view contents.
- [supplementalMenu](swattributionview/supplementalmenu.md): A supplemental menu to augment the attribution view’s existing menu.
- [enablesMarquee](swattributionview/enablesmarquee.md): Automatically enables a marquee effect.

### Customizing the view

- [SWAttributionViewBackgroundStyle](swattributionview/backgroundstyle-swift.enum.md): The background styling of the attribution view’s contents.
- [SWAttributionViewDisplayContext](swattributionview/displaycontext-swift.enum.md): The context for the content that influences the ranking of this view’s highlight.
- [SWAttributionViewHorizontalAlignment](swattributionview/horizontalalignment-swift.enum.md): The horizontal alignment of attribution view’s contents.

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)
- [UIView](../uikit/uiview.md)
